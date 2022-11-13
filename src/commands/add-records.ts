import { Command, Flags } from "@oclif/core";
import { client } from "../kintone";
import * as path from "path";

type Fields = {
  [key: string]: {
    label?: string;
    value: () => unknown;
  };
};

export default class AddRecords extends Command {
  static description = "フィールド定義ファイルを元にレコードを追加する";

  static examples = ["<%= config.bin %> <%= command.id %> fields.ts"];

  static flags = {
    appId: Flags.string({
      char: "a",
      description: "The app ID.",
      required: true,
    }),
    rows: Flags.string({
      char: "n",
      description: "追加する件数",
      default: "5",
    }),
  };

  static args = [{ name: "configFile" }];

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(AddRecords);

    try {
      const { fields } = (await import(
        path.join(process.cwd(), args.configFile)
      )) as {
        fields: Fields;
      };
      const records = Array.from({ length: Number(flags.rows) }, () => {
        return Object.fromEntries(
          Object.entries(fields).map(([code, { value }]) => [
            code,
            { value: value() },
          ]),
        );
      });

      await client.record.addAllRecords({ app: flags.appId, records });
    } catch (e) {
      console.error(e);
    }
  }
}
