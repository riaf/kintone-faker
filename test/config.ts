import { faker } from "@faker-js/faker/locale/ja";

const fields = {
  "文字列__1行_": {
    label: "テスト",
    value: () => faker.lorem.text(),
  },
};

export { fields };
