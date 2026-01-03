# goofmint.dev

個人ポートフォリオサイト

## 概要

Jekyll を使用して構築された個人ポートフォリオサイトです。

## 機能

- **ポートフォリオ**: プロジェクトの一覧と詳細ページ
- **ブログ**: 技術記事などを投稿
- **多言語対応**: 日本語・英語
- **ダークモード**: ライト/ダークテーマ切り替え
- **レスポンシブデザイン**: モバイル対応
- **SEO対応**: jekyll-seo-tag プラグインを使用
- **自動デプロイ**: GitHub Actions → Cloudflare Pages

## セットアップ

### 必要要件

- Ruby 2.7以上
- Jekyll 4.3以上

### インストール

```bash
# 依存関係のインストール
bundle install

# ローカルサーバーの起動
bundle exec jekyll serve

# ブラウザで http://localhost:4000 にアクセス
```

## ディレクトリ構造

```
.
├── _config.yml          # サイト設定
├── _includes/           # 再利用可能なコンポーネント
├── _layouts/            # ページレイアウト
├── _posts/              # ブログ投稿
├── _projects/           # プロジェクトページ
├── _sass/               # Sassスタイルシート
├── assets/              # CSS、JS、画像
├── index.html           # トップページ
├── about.md             # About ページ
├── blog.html            # ブログ一覧
└── projects.html        # プロジェクト一覧
```

## プロジェクトの追加方法

`_projects/` ディレクトリに新しいMarkdownファイルを作成します：

```markdown
---
title: プロジェクト名
tech:
  - 技術1
  - 技術2
github: https://github.com/username/repo
demo: https://demo.example.com
---

プロジェクトの説明...
```

## ブログ投稿の追加方法

`_posts/` ディレクトリに `YYYY-MM-DD-title.md` の形式でファイルを作成します：

```markdown
---
layout: post
title: "投稿タイトル"
date: YYYY-MM-DD HH:MM:SS +0900
---

記事の内容...
```

## ビルド

```bash
bundle exec jekyll build
```

ビルドされたサイトは `_site/` ディレクトリに生成されます。

## デプロイ

このサイトはGitHub ActionsでCloudflare Pagesに自動デプロイされます。

詳細な手順は [DEPLOYMENT.md](./DEPLOYMENT.md) を参照してください。

### クイックスタート

1. Cloudflare Pagesでプロジェクト作成
2. GitHub Secretsに以下を設定：
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
3. `main` ブランチにプッシュすると自動デプロイ

## 技術スタック

- **フレームワーク**: Jekyll 4.3
- **スタイル**: Sass/SCSS
- **デプロイ**: Cloudflare Pages
- **CI/CD**: GitHub Actions
- **言語**: Ruby 3.2

## ライセンス

MIT License
