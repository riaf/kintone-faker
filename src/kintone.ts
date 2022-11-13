import { KintoneRestAPIClient } from "@kintone/rest-api-client";

// TODO: apiToken とかにもちゃんと対応する
const client = new KintoneRestAPIClient({
  baseUrl: process.env.KINTONE_BASE_URL,
  // Use password authentication
  auth: {
    username: process.env.KINTONE_USERNAME,
    password: process.env.KINTONE_PASSWORD,
  },
  // Use API token authentication
  // auth: { apiToken: process.env.KINTONE_API_TOKEN }
  // Use OAuth token authentication
  // auth: { oAuthToken: process.env.KINTONE_OAUTH_TOKEN }

  // Use session authentication if `auth` is omitted (in browser only)
});

export { client };
