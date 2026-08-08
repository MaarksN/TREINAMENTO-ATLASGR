import { discovery, type Configuration } from 'openid-client';

let configuration: Promise<Configuration | undefined> | undefined;

export function getIdentityProvider(): Promise<Configuration | undefined> {
  if (configuration) return configuration;
  const issuer = process.env.OIDC_ISSUER;
  const clientId = process.env.OIDC_CLIENT_ID;
  if (!issuer || !clientId) return Promise.resolve(undefined);
  configuration = discovery(new URL(issuer), clientId, process.env.OIDC_CLIENT_SECRET);
  return configuration;
}
