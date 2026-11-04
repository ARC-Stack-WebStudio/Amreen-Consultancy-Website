const ORIGIN = 'https://amreenconsultancy.com';
const MAX_BYTES = 16 * 1024;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELDS = {
  general: ['name', 'email', 'phone', 'role', 'message'],
  recruitment: ['companyName', 'country', 'industry', 'workers', 'positions', 'contactPerson', 'email', 'telephone', 'requirements'],
};
const REQUIRED = {
  general: ['name', 'email', 'role', 'message'],
  recruitment: ['companyName', 'country', 'industry', 'workers', 'positions', 'contactPerson', 'email', 'telephone'],
};
const LABELS = {
  name: 'Name', email: 'Email', phone: 'Phone', role: 'Role', message: 'Message',
  companyName: 'Company Name', country: 'Country', industry: 'Industry', workers: 'Number of Workers',
  positions: 'Positions', contactPerson: 'Contact Person', telephone: 'Telephone', requirements: 'Requirements',
};
const json = (body, status) => new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'Vary': 'Origin' } });
function clean(value, max) { return typeof value === 'string' ? value.trim().slice(0, max) : ''; }
function validBase(value) { try { const u = new URL(value); return u.protocol === 'https:' && !u.username && !u.password ? u.origin : null; } catch { return null; } }
async function sendZoho(data, type, env) {
  const tokenUrl = validBase(env.ZOHO_ACCOUNTS_BASE_URL);
  const mailBase = validBase(env.ZOHO_MAIL_API_BASE_URL);
  if (tokenUrl !== 'https://accounts.zoho.in' || mailBase !== 'https://mail.zoho.in' || !env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET || !/^\d+$/.test(env.ZOHO_ACCOUNT_ID || '') || !EMAIL.test(env.ZOHO_FROM_ADDRESS || '')) throw new Error('NOT_CONFIGURED');
  const refreshToken = await env.ZOHO_OAUTH_TOKENS?.get('refresh_token') || env.ZOHO_REFRESH_TOKEN;
  if (!refreshToken) throw new Error('NOT_CONFIGURED');
  const tokenResponse = await fetch(`${tokenUrl}/oauth/v2/token`, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ refresh_token: refreshToken, client_id: env.ZOHO_CLIENT_ID, client_secret: env.ZOHO_CLIENT_SECRET, grant_type: 'refresh_token' }) });
  if (!tokenResponse.ok) throw new Error('PROVIDER');
  const tokenData = await tokenResponse.json();
  if (!tokenData.access_token) throw new Error('PROVIDER');
  const companySubject = clean(data.companyName, 180).replace(/[\r\n]+/g, ' ');
  const subject = type === 'general' ? 'New Website Contact Enquiry' : `New Recruitment Enquiry — ${companySubject}`;
  const content = [`Reply contact email: ${data.email}`, ...FIELDS[type].map((key) => `${LABELS[key]}:\n${data[key] || '—'}`)].join('\n\n');
  const response = await fetch(`${mailBase}/api/accounts/${env.ZOHO_ACCOUNT_ID}/messages`, { method: 'POST', headers: { 'Authorization': `Zoho-oauthtoken ${tokenData.access_token}`, 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ fromAddress: env.ZOHO_FROM_ADDRESS, toAddress: 'info@amreenconsultancy.com', subject, content, mailFormat: 'plaintext' }) });
  if (!response.ok) throw new Error('PROVIDER');
  const payload = await response.json();
  if (payload.status?.code && String(payload.status.code) !== '200') throw new Error('PROVIDER');
}
export default { async fetch(request, env) {
  const url = new URL(request.url);
  if (url.pathname === '/api/oauth/start') {
    if (request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405);
    if (!env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET || !env.ZOHO_OAUTH_TOKENS) return json({ error: 'oauth_not_configured' }, 503);
    const state = [...crypto.getRandomValues(new Uint8Array(32))].map((b) => b.toString(16).padStart(2, '0')).join('');
    const callback = 'https://amreenconsultancy.com/api/oauth/callback';
    const authorize = new URL('https://accounts.zoho.in/oauth/v2/auth');
    authorize.search = new URLSearchParams({ scope: 'ZohoMail.messages.CREATE', client_id: env.ZOHO_CLIENT_ID, response_type: 'code', access_type: 'offline', redirect_uri: callback, state }).toString();
    return new Response(null, { status: 302, headers: { Location: authorize.toString(), 'Cache-Control': 'no-store', 'Set-Cookie': `zoho_oauth_state=${state}; Path=/api/oauth; Max-Age=600; Secure; HttpOnly; SameSite=Lax` } });
  }
  if (url.pathname === '/api/oauth/callback') {
    if (request.method !== 'GET') return json({ error: 'method_not_allowed' }, 405);
    const state = url.searchParams.get('state') || '';
    const cookie = request.headers.get('Cookie') || '';
    const match = cookie.match(/(?:^|;\s*)zoho_oauth_state=([a-f0-9]{64})(?:;|$)/);
    const clearCookie = 'zoho_oauth_state=; Path=/api/oauth; Max-Age=0; Secure; HttpOnly; SameSite=Lax';
    const finish = (message, status = 200) => new Response(message, { status, headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-store', 'Referrer-Policy': 'no-referrer', 'Set-Cookie': clearCookie, 'X-Content-Type-Options': 'nosniff' } });
    if (!match || !state || state !== match[1]) return finish('OAuth authorization could not be verified. Restart the authorization flow.', 400);
    if (!env.ZOHO_CLIENT_ID || !env.ZOHO_CLIENT_SECRET || !env.ZOHO_OAUTH_TOKENS) return finish('OAuth callback is not configured.', 503);
    if (url.searchParams.has('error')) return finish('Zoho authorization was not completed. Restart the authorization flow.', 400);
    const code = url.searchParams.get('code') || '';
    if (!code || code.length > 2048 || /[\r\n]/.test(code)) return finish('Zoho authorization code is invalid.', 400);
    try {
      const tokenResponse = await fetch('https://accounts.zoho.in/oauth/v2/token', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' }, body: new URLSearchParams({ grant_type: 'authorization_code', client_id: env.ZOHO_CLIENT_ID, client_secret: env.ZOHO_CLIENT_SECRET, redirect_uri: 'https://amreenconsultancy.com/api/oauth/callback', code }) });
      if (!tokenResponse.ok) return finish('Zoho token exchange failed. Check the OAuth client configuration and try again.', 502);
      const tokenData = await tokenResponse.json();
      if (!tokenData.access_token || !tokenData.refresh_token) return finish('Zoho did not return the required OAuth credentials.', 502);
      await env.ZOHO_OAUTH_TOKENS.put('refresh_token', tokenData.refresh_token);
      return finish('Zoho authorization completed. The refresh token was stored securely. You may close this page.');
    } catch {
      return finish('Zoho authorization could not be completed. Try again later.', 502);
    }
  }
  if (url.pathname !== '/api/contact') {
    if (url.pathname.startsWith('/api/')) return json({ error: 'not_found' }, 404);
    return env.ASSETS.fetch(request);
  }
  const origin = request.headers.get('Origin');
  if (origin !== ORIGIN) return json({ error: 'forbidden_origin' }, 403);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: { 'Access-Control-Allow-Origin': ORIGIN, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type', 'Vary': 'Origin' } });
  if (request.method !== 'POST') return json({ error: 'method_not_allowed' }, 405);
  if ((request.headers.get('Content-Type') || '').split(';', 1)[0].trim().toLowerCase() !== 'application/json') return json({ error: 'unsupported_media_type' }, 415);
  const size = Number(request.headers.get('Content-Length') || 0);
  if (size > MAX_BYTES) return json({ error: 'payload_too_large' }, 413);
  let body;
  try { const raw = await request.text(); if (new TextEncoder().encode(raw).byteLength > MAX_BYTES) return json({ error: 'payload_too_large' }, 413); body = JSON.parse(raw); } catch { return json({ error: 'invalid_json' }, 400); }
  if (!body || typeof body !== 'object' || Array.isArray(body) || !FIELDS[body.type]) return json({ error: 'invalid_submission' }, 400);
  const type = body.type;
  const data = Object.fromEntries(FIELDS[type].map((key) => [key, clean(body[key], key === 'message' || key === 'requirements' || key === 'positions' ? 5000 : 250)]));
  if (REQUIRED[type].some((key) => !data[key])) return json({ error: 'missing_fields' }, 400);
  if (!EMAIL.test(data.email) || /[\r\n]/.test(data.email)) return json({ error: 'invalid_email' }, 400);
  if (type === 'general' && !['Candidate', 'Employer', 'Partner', 'Other'].includes(data.role)) return json({ error: 'invalid_role' }, 400);
  if (type === 'recruitment' && (!/^\d{1,8}$/.test(data.workers) || Number(data.workers) < 1)) return json({ error: 'invalid_workers' }, 400);
  try { await sendZoho(data, type, env); return json({ ok: true }, 200); }
  catch (error) { return error.message === 'NOT_CONFIGURED' ? json({ error: 'email_not_configured' }, 503) : json({ error: 'email_delivery_failed' }, 502); }
} };
