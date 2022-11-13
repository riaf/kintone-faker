import { expect, test } from "@oclif/test";

describe("add-records", () => {
  test
    .env({
      KINTONE_BASE_URL: "https://example.cybozu.com",
    })
    .nock("https://example.cybozu.com", (api) =>
      api
        .post("/k/v1/bulkRequest.json").reply(200, (_uri, requestBody) => {
          console.log(JSON.stringify(requestBody));

          return {
            results: [
              { ids: ["1", "2", "3", "4", "5"], revisions: ["1", "1", "1", "1", "1"] },
            ],
          };
        }))
    .stdout()
    .command(["add-records", "-a", "1", "test/config.ts"])
    .it("post check", (ctx) => {
      const postData = JSON.parse(ctx.stdout);
      expect(postData.requests.length).to.equal(1);
      expect(postData.requests[0].payload.app).to.equal("1");
      expect(postData.requests[0].payload.records.length).to.equal(5);
    });
});
