---
layout: default
title: CLI
permalink: /cli/
lang: ja
---

{% include i18n.html %}

# {{ t.cli.title }}

本サイトはCUIフレンドリーです。ターミナルから本サイトに、直接アクセスできます。インストールは不要です。

```bash
npx goofmint
```

## コマンド

### About表示

Aboutページを表示（デフォルトコマンド）：

```bash
npx goofmint              # 英語
npx goofmint --lang ja    # 日本語
```

### プロジェクト一覧

すべてのプロジェクトを一覧表示：

```bash
npx goofmint projects           # 英語
npx goofmint projects --lang ja # 日本語
```

### プロジェクト詳細

特定のプロジェクトの詳細を表示：

```bash
npx goofmint projects <project-slug>           # 英語
npx goofmint projects <project-slug> --lang ja # 日本語
```

**例：**
```bash
npx goofmint projects bug-sniper
```

### ブログ記事一覧

すべてのブログ記事を一覧表示：

```bash
npx goofmint blog           # 英語
npx goofmint blog --lang ja # 日本語
```

### ブログ記事詳細

特定のブログ記事を表示：

```bash
npx goofmint blog <post-id>           # 英語
npx goofmint blog <post-id> --lang ja # 日本語
```

**例：**

```bash
npx goofmint blog 2025-01-03-welcome
```

## オプション

- `-l, --lang <language>` - 言語指定（`ja`または`en`、デフォルト：`en`）
- `-V, --version` - バージョン番号を表示
- `-h, --help` - ヘルプ情報を表示

## 使用例

```bash
# Aboutページを英語で表示
npx goofmint

# Aboutページを日本語で表示
npx goofmint --lang ja

# プロジェクト一覧を英語で表示
npx goofmint projects

# Bug Sniperプロジェクトの詳細を日本語で表示
npx goofmint projects bug-sniper --lang ja

# ブログ記事一覧を日本語で表示
npx goofmint blog --lang ja

# 特定のブログ記事を英語で表示
npx goofmint blog 2025-01-03-welcome
```

## ソースコード

CLIツールはオープンソースで、[goofmint.devリポジトリ](https://github.com/goofmint/goofmint.dev)で公開されています。
