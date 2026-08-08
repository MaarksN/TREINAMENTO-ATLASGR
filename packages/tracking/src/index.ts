import XAPI, { toBasicAuth } from '@xapi/xapi';

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
