import { expect, test } from "@oclif/test";

describe("generate-base-fields", () => {
  test
    .env({
      KINTONE_BASE_URL: "https://example.cybozu.com",
    })
    .nock("https://example.cybozu.com", (api) =>
      api
        .get("/k/v1/app/form/fields.json")
        .query({
          app: 1,
        })
        .reply(200, {
          revision: 10,
          properties: {
            "文字列__1行_": {
              label: "テスト",
              code: "テスト",
              type: "SINGLE_LINE_TEXT",
            },
          },
        }))
    .stdout()
    .command(["generate-base-fields", "-a", "1"])
    .it("output check", (ctx) => {
      expect(ctx.stdout).to.contain("faker.lorem.text()");
    });
});
