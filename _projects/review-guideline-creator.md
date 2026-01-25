---
title: コードレビューガイドラインクリエイター
tech:
  - Code Review
  - Generator
status: Working
github: https://github.com/goofmint/review-guideline-creator
site: https://rgc.goofmint.dev/
---

コードレビューガイドラインクリエイターは、Googleのベストプラクティスをベースに、チームに最適化されたコードレビューガイドラインを簡単に作成できるウィザードアプリです。

## 概要

コードレビューガイドラインクリエイターはReact Routerで構築され、Cloudflare Workers上で動作します。できあがったガイドラインはMarkdownまたはPDFでダウンロードできます。また、ガイドラインをLLMプロンプトと一緒にコピーし、ChatGPTなどで可読性を高めたガイドラインの作成を支援します。

## 主な機能

- レビュアー、レビュイー向けガイドラインを生成
- 選択式のウィザードに沿って進めるのみ
- 途中入力時の再現
- 結果のMarkdown/PDFでのダウンロード

## 技術スタック

- フロントエンド： React Router
- ホスティング： Cloudflare Workers
