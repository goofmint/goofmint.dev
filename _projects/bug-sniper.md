---
title: Bug Sniper
tech:
  - Code Review
  - Game
status: Working
github: https://bug-sniper.goofmint.workers.dev/
---

Bug Sniperは、バグ検出をゲーム化したWebアプリケーションです。ユーザーは60秒の間でコード内のバグを見つけ出し、タップすることで得点を稼ぎます。連続で正解し続けると、コンボボーナスが加算され、スコアが増加します。

## 概要

Bug SniperはReact Routerで構築され、Cloudflare Workers上で動作します。最終的にユーザーの結果について、AIで評価を行います。OGP用の画像は自動生成され、Cloudflare R2に保存されます。

## 主な機能

- ユーザーのバグ検出タップ
- AIによる結果評価
- 結果画像の生成と保存
- X連携による結果共有

## 技術スタック

- フロントエンド： React Router
- AI： Gemini API
- ホスティング： Cloudflare Workers
- 画像保存： Cloudflare R2
