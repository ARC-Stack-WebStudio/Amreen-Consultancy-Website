# Cloudflare Worker contact email setup

The production build output remains `build/`; Wrangler serves it as Workers Static Assets and routes `/api/*` through `worker/contact.js`. No credentials are required at build time.

## Zoho setup

1. In Zoho API Console, register a server-based client in the India data center. Request the `ZohoMail.messages.CREATE` scope.
2. Complete OAuth authorization with offline access and exchange the one-time authorization code for a refresh token. Do not use a Zoho mailbox password.
3. Get the sender account's numeric ID with Zoho Mail's Get All User Accounts API. Confirm `info@amreenconsultancy.com` is an allowed sender address for that account.
4. Configure `ZOHO_ACCOUNTS_BASE_URL=https://accounts.zoho.in`, `ZOHO_MAIL_API_BASE_URL=https://mail.zoho.in`, `ZOHO_CLIENT_ID`, `ZOHO_CLIENT_SECRET`, `ZOHO_ACCOUNT_ID`, and `ZOHO_FROM_ADDRESS`.

Store `ZOHO_CLIENT_ID` and `ZOHO_CLIENT_SECRET` as Worker secrets (`wrangler secret put`). The OAuth callback stores its refresh token in the Worker KV binding; `ZOHO_REFRESH_TOKEN` may be set as a secret only as a migration/fallback. Set the India URLs, account ID, and sender address as Worker variables. For local work, copy `.dev.vars.example` to `.dev.vars` and fill it in. `.dev.vars` is ignored by Git.

Zoho's documented send-message body has no per-message Reply-To field. The visitor email is prominently included in the message body for manually replying; an automatic Reply-To header is not set.

Cloudflare Workers Builds settings should use repository root `.` (the folder containing `package.json`), Build command `npm run build:production`, and Deploy command `npx wrangler deploy`. The separate Workers Builds commands run in that order. The Wrangler `build.command` also builds the React assets for local `npx wrangler deploy`; Workers Builds does not use that custom build setting. The Worker name in Cloudflare must match `amreen-consultancy-website`.

Deployment is intentionally not performed here. Configure the Worker custom domain before publishing. Email delivery is not active until real credentials are configured and an end-to-end send succeeds.

For basic abuse control without a paid feature, configure the available Free plan rate-limiting rule for the `/api/contact` path, keyed by client IP. The Worker validates `Origin`, payload type, field values, and size, but it does not implement persistent per-IP rate limiting itself.

## OAuth callback

The OAuth start route is https://amreenconsultancy.com/api/oauth/start. It creates a short-lived HttpOnly state cookie and redirects to Zoho India. Protect this start path with a Cloudflare Access policy restricted to the mailbox administrator; leave the callback path publicly reachable for Zoho's redirect. Register https://amreenconsultancy.com/api/oauth/callback as the exact redirect URI in the Zoho OAuth client. The callback exchanges the authorization code at https://accounts.zoho.in/oauth/v2/token and stores the refresh token in the configured KV namespace bound as ZOHO_OAUTH_TOKENS; it never includes tokens in its response. Configure ZOHO_CLIENT_ID and ZOHO_CLIENT_SECRET as Worker secrets. The contact endpoint reads a token from KV first, then uses ZOHO_REFRESH_TOKEN as a fallback. Configure the KV namespace shown in Wrangler before starting OAuth.

The KV namespace ID in wrangler.jsonc is `0f12b312c130433f9e9290a233ef48ba` and is bound as `ZOHO_OAUTH_TOKENS`. Ensure that namespace exists in the same Cloudflare account used for deployment. The same binding must be present in local Worker development if you exercise OAuth locally.
