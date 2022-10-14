# Vue3 vue-query playground

vue-query で遊んでみる

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

## ビルド

```sh
yarn build
```
