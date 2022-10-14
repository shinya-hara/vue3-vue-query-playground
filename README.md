# Vue3 Starter Kit with TypeScript

[Vue3](https://v3.ja.vuejs.org/) + [Vite](https://ja.vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/) で構成された SPA テンプレートです。

## スタートガイド

### 必要条件

node.js の v16 系を使用します。nodenv を使用している場合は、自動的にバージョンが切り替わります。

```sh
node -v
# v16.14.2

yarn -v
# 1.22.18
```

### インストール

依存モジュールを解決します。

```sh
yarn install
```

### 開発

ローカルサーバーを起動します。

```sh
yarn dev
# http://localhost:5173/
```

## テストの実行

### ユニットテスト

Vitest を使ったユニットテストを実行します。

```
yarn test
```

### リント & フォーマット

Prettier, ESLint, Stylelint を使った静的構文解析と自動フォーマットを実行します。

```sh
# チェックのみ

## Prettier
yarn lint:prettier

## ESLint
yarn lint:script

## Stylelint
yarn lint:style

# 自動修正込みの全部入り
yarn lintfix
```

## 環境変数

`.env.*` ファイルに環境変数を設定できます。`.env.local` はローカル開発時に優先的に読み込まれるので、ローカル開発環境でのみ使用する環境変数は、このファイルに指定してください（`.env.local.example` を複製後リネームしてください）。`.env.*` ファイルの対応は以下の通りです。

| ファイル名 | 適用される環境        |
| ---------- | --------------------- |
| .env       | 全環境                |
| .env.local | ローカル環境（LOCAL） |
| .env.dev   | 開発環境（DEV）       |
| .env.stg   | テスト環境（STG）     |
| .env.prd   | 本番環境（PRD）       |

## ビルド

```sh
# DEV環境向けにビルド
yarn build:dev

# STG環境向けにビルド
yarn build:stg

# PRD環境向けにビルド
yarn build:prd
```

## その他

### 開発環境

[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)を用いた[VSCode](https://code.visualstudio.com/)での開発を推奨します。[Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) は Volar と干渉する恐れがあるため、無効化しておくのが良いです。

### UI フレームワーク

UI フレームワークを導入したテンプレートを特定のブランチに残す。

- Vuetify v3-beta ([framework/vuetify-v3-beta](https://bitbucket.org/sonicmoov/vue3-starter-kit-ts/branch/framework/vuetify-v3-beta))

<!-- ### Git Hook (pre-commit)

コミットの直前にステージングエリアにあるファイルに対して、リントとフォーマットを実行しています（[lint-staged](https://github.com/okonet/lint-staged) と [simple-git-hooks](https://github.com/toplenboren/simple-git-hooks) を利用）。ルールに基づいて自動修正できなかった場合コミットが失敗するので、修正して再度コミットしてください。 -->
