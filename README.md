# kintone-faker

Kintone にダミーデータを登録するツール

- [Usage](#usage)
- [Commands](#commands)

# Usage

```sh-session
$ npm install -g kintone-faker
$ kintone-faker --help [COMMAND]
USAGE
  $ kintone-faker COMMAND
...
$ export KINTONE_BASE_URL="https://YOURKINTONEURL.cybozu.com"
$ export KINTONE_USERNAME="YOUR KINTONE USERNAME"
$ export KINTONE_PASSWORD="YOUR KINTONE PASSWORD"
$ kintone-faker generate-base-fields --appId [appId] --output fields.js
$ kintone-faker add-records -a [appId] fields.js
```

# Commands

- [`kintone-faker generate-base-fields`](#kintone-faker-generate-base-fields)
- [`kintone-faker add-records`](#kintone-faker-add-records)

## `kintone-faker generate-base-fields`

フィールド定義ファイルを生成する

```
USAGE
  $ kintone-faker generate-base-fields -a <value> -o <value>

FLAGS
  -a, --appId=<value>   (required) The app ID.
  -o, --output=<value>  Output File

DESCRIPTION
  フィールド定義ファイルを生成する
  ファイル名が指定されなかったときはコードを出力する

EXAMPLES
  $ kintone-faker generate-base-fields -a 1
  // Generated by kintone-faker
  import ...
```

## `kintone-faker add-records`

フィールド定義ファイルを元にレコードを追加する

```
USAGE
  $ kintone-faker add-records

FLAGS
  -a, --appId=<value>   (required) The app ID.
  -n, --rows=<value>    追加する件数 (default: 5)

DESCRIPTION
  フィールド定義ファイルを元にレコードを追加する

EXAMPLES
  $ kintone-faker add-records -a 1 fields.js
```
