---
title: DROwl
tech:
  - Hono
  - Cloudflare Workers
status: Progress
github: https://github.com/goofmint/drowl
site: https://drowl.dev/
---

DROwlは、オープンソースのDevRel（Developer Relations）支援ツールです。情報の収集基盤として利用し、他社サービスとの比較も可能です。

## 概要

DROwlは、Cloudflare Workers上で動作します。アプリケーションフレームワークはHonoを採用しています。情報の収集には各種APIを利用し、分析やレポート生成を行います。

## 主な機能

- DevRel活動のデータ収集
- アカウント統合
- レポート生成

## 技術スタック

- フロントエンド： React Router
- バックエンド： Hono (Cloudflare Workers)
- データベース： PostgreSQL
- ファイルストレージ： S3 API
