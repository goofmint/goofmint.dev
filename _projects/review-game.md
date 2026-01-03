---
title: Review Game
tech:
  - Code Review
  - Game
status: Working
github: https://review-game.goofmint.workers.dev
---

Review Gameは、コードレビューをゲーム化したWebアプリケーションです。ユーザーはコードの問題点を見つけ出し、レビューを行ってスコアを競います。

## 概要

Review Gameは実際のコードを基に、レビューを行って評価判定を行います。システムはReact Routerで構築し、Cloudflare Workers上で動作します。ユーザーのレビューに対して、Gemini APIを利用して評価を行います。

## 主な機能

- ユーザーのコードレビュー入力
- AIによるレビュー評価
- 結果画像の生成と保存
- X連携による結果共有

## 技術スタック

- フロントエンド： React Router
- AI： Gemini API
- ホスティング： Cloudflare Workers
- 画像保存： Cloudflare R2
