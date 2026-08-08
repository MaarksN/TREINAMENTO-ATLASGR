import XAPI from '@xapi/xapi';

function toBasicAuth(username: string, password: string): string {
  return `Basic ${Buffer.from(`${username}:${password}`, 'utf8').toString('base64')}`;
}

export function createLearningRecordClient(): XAPI | undefined {
  const endpoint = process.env.XAPI_ENDPOINT;
  if (!endpoint) return undefined;
  const username = process.env.XAPI_USERNAME;
  const password = process.env.XAPI_PASSWORD;
  return new XAPI({
    endpoint,
    auth: username && password ? toBasicAuth(username, password) : undefined,
  });
}
