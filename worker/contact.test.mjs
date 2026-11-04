import assert from 'node:assert/strict';
import { afterEach, test } from 'node:test';
import worker from './contact.js';

const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; });

function makeEnv() {
  const values = new Map([['refresh_token', 'mock-refresh-token']]);
  return {
    ZOHO_ACCOUNTS_BASE_URL: 'https://accounts.zoho.in',
    ZOHO_MAIL_API_BASE_URL: 'https://mail.zoho.in',
    ZOHO_CLIENT_ID: 'mock-client-id',
    ZOHO_CLIENT_SECRET: 'mock-client-secret',
    ZOHO_ACCOUNT_ID: '123456789',
    ZOHO_FROM_ADDRESS: 'info@amreenconsultancy.com',
    ZOHO_OAUTH_TOKENS: {
      get: async (key) => values.get(key) ?? null,
      put: async (key, value) => values.set(key, value),
    },
    ASSETS: { fetch: async () => new Response('static asset') },
  };
}

function postContact(payload, headers = {}) {
  return new Request('https://amreenconsultancy.com/api/contact', {
    method: 'POST',
    headers: { Origin: 'https://amreenconsultancy.com', 'Content-Type': 'application/json', ...headers },
    body: JSON.stringify(payload),
  });
}

function mockZoho(t, mailRequests) {
  globalThis.fetch = async (input, init) => {
    const url = new URL(input);
    if (url.origin === 'https://accounts.zoho.in' && url.pathname === '/oauth/v2/token') {
      assert.equal(init.method, 'POST');
      assert.match(init.headers['Content-Type'], /application\/x-www-form-urlencoded/);
      const form = new URLSearchParams(init.body);
      assert.equal(form.get('grant_type'), 'refresh_token');
      assert.equal(form.get('refresh_token'), 'mock-refresh-token');
      return Response.json({ access_token: 'mock-access-token' });
    }
    assert.equal(url.origin, 'https://mail.zoho.in');
    assert.equal(url.pathname, '/api/accounts/123456789/messages');
    mailRequests.push({ headers: init.headers, body: JSON.parse(init.body) });
    return Response.json({ status: { code: 200, description: 'success' } });
  };
  t.after(() => { globalThis.fetch = originalFetch; });
}

test('OAuth start and callback validate state and store tokens without returning them', async (t) => {
  const env = makeEnv();
  let storedToken;
  env.ZOHO_OAUTH_TOKENS.put = async (_key, value) => { storedToken = value; };
  let tokenExchanges = 0;
  globalThis.fetch = async (input, init) => {
    tokenExchanges += 1;
    assert.equal(new URL(input).origin, 'https://accounts.zoho.in');
    assert.equal(new URL(input).pathname, '/oauth/v2/token');
    assert.equal(init.method, 'POST');
    const form = new URLSearchParams(init.body);
    assert.equal(form.get('client_secret'), 'mock-client-secret');
    assert.equal(form.get('redirect_uri'), 'https://amreenconsultancy.com/api/oauth/callback');
    return Response.json({ access_token: 'access-token-never-return', refresh_token: 'refresh-token-never-return' });
  };
  t.after(() => { globalThis.fetch = originalFetch; });

  const start = await worker.fetch(new Request('https://amreenconsultancy.com/api/oauth/start'), env);
  assert.equal(start.status, 302);
  const authorizeUrl = new URL(start.headers.get('Location'));
  assert.equal(authorizeUrl.origin, 'https://accounts.zoho.in');
  assert.equal(authorizeUrl.searchParams.get('scope'), 'ZohoMail.messages.CREATE');
  assert.equal(authorizeUrl.searchParams.get('redirect_uri'), 'https://amreenconsultancy.com/api/oauth/callback');
  const state = authorizeUrl.searchParams.get('state');
  const cookie = start.headers.get('Set-Cookie').split(';', 1)[0];

  const rejected = await worker.fetch(new Request(`https://amreenconsultancy.com/api/oauth/callback?code=bad&state=${'0'.repeat(64)}`, { headers: { Cookie: cookie } }), env);
  assert.equal(rejected.status, 400);
  assert.equal(tokenExchanges, 0);

  const callback = await worker.fetch(new Request(`https://amreenconsultancy.com/api/oauth/callback?code=mock-code&state=${state}`, { headers: { Cookie: cookie } }), env);
  const responseText = await callback.text();
  assert.equal(callback.status, 200);
  assert.equal(storedToken, 'refresh-token-never-return');
  assert.doesNotMatch(responseText, /access-token-never-return|refresh-token-never-return|mock-client-secret/);
  assert.match(callback.headers.get('Cache-Control'), /no-store/);
  assert.equal(tokenExchanges, 1);
});

test('general contact sends every field to the configured recipient with the visitor email for replies', async (t) => {
  const mailRequests = [];
  mockZoho(t, mailRequests);
  const response = await worker.fetch(postContact({ type: 'general', name: 'A Person', email: 'visitor@example.com', phone: '+1 555', role: 'Employer', message: 'Need staff.' }), makeEnv());
  assert.equal(response.status, 200);
  assert.equal(mailRequests.length, 1);
  const { headers, body } = mailRequests[0];
  assert.equal(headers.Authorization, 'Zoho-oauthtoken mock-access-token');
  assert.equal(body.toAddress, 'info@amreenconsultancy.com');
  assert.equal(body.fromAddress, 'info@amreenconsultancy.com');
  assert.equal(body.mailFormat, 'plaintext');
  assert.equal('replyTo' in body, false);
  for (const value of ['Reply contact email: visitor@example.com', 'Name:\nA Person', 'Phone:\n+1 555', 'Role:\nEmployer', 'Message:\nNeed staff.']) assert.ok(body.content.includes(value), value);
});

test('recruitment contact sends every field to the configured recipient', async (t) => {
  const mailRequests = [];
  mockZoho(t, mailRequests);
  const submission = { type: 'recruitment', companyName: 'Acme', country: 'India', industry: 'Construction', workers: '25', positions: 'Welder', contactPerson: 'Ravi', email: 'ravi@example.com', telephone: '+91 123', requirements: 'Start next month' };
  const response = await worker.fetch(postContact(submission), makeEnv());
  assert.equal(response.status, 200);
  assert.equal(mailRequests.length, 1);
  const { body } = mailRequests[0];
  assert.equal(body.toAddress, 'info@amreenconsultancy.com');
  for (const value of ['Reply contact email: ravi@example.com', 'Company Name:\nAcme', 'Country:\nIndia', 'Industry:\nConstruction', 'Number of Workers:\n25', 'Positions:\nWelder', 'Contact Person:\nRavi', 'Telephone:\n+91 123', 'Requirements:\nStart next month']) assert.ok(body.content.includes(value), value);
});

test('rejects invalid origins and submissions before calling Zoho', async (t) => {
  let outboundCalls = 0;
  globalThis.fetch = async () => { outboundCalls += 1; throw new Error('must not call Zoho'); };
  t.after(() => { globalThis.fetch = originalFetch; });
  const env = makeEnv();

  const wrongOrigin = await worker.fetch(postContact({ type: 'general' }, { Origin: 'https://evil.example' }), env);
  assert.equal(wrongOrigin.status, 403);
  const invalidEmail = await worker.fetch(postContact({ type: 'general', name: 'Person', email: 'bad', role: 'Employer', message: 'Hi' }), env);
  assert.equal(invalidEmail.status, 400);
  const invalidRole = await worker.fetch(postContact({ type: 'general', name: 'Person', email: 'p@example.com', role: 'Spoofed', message: 'Hi' }), env);
  assert.equal(invalidRole.status, 400);
  const badWorkers = await worker.fetch(postContact({ type: 'recruitment', companyName: 'Acme', country: 'India', industry: 'Construction', workers: '0', positions: 'Welder', contactPerson: 'Ravi', email: 'r@example.com', telephone: '123', requirements: '' }), env);
  assert.equal(badWorkers.status, 400);
  const oversized = await worker.fetch(postContact({ type: 'general', name: 'Person', email: 'p@example.com', role: 'Employer', message: 'x'.repeat(17 * 1024) }), env);
  assert.equal(oversized.status, 413);
  const unknownApi = await worker.fetch(new Request('https://amreenconsultancy.com/api/unknown'), env);
  assert.equal(unknownApi.status, 404);
  assert.equal(outboundCalls, 0);
});

test('hides provider error details from contact form responses', async (t) => {
  globalThis.fetch = async () => new Response('private-provider-detail', { status: 500 });
  t.after(() => { globalThis.fetch = originalFetch; });
  const response = await worker.fetch(postContact({ type: 'general', name: 'Person', email: 'p@example.com', role: 'Other', message: 'Hi' }), makeEnv());
  const body = await response.text();
  assert.equal(response.status, 502);
  assert.doesNotMatch(body, /private-provider-detail|mock-refresh-token/);
});
