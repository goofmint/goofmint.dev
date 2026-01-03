---
title: SheetDB
tech:
  - Hono
  - Cloudflare Workers
status: Progress
github: https://github.com/goofmint/sheet-db
site: https://sheetdb.app/
---

SheetDBは、GoogleスプレッドシートをBaaS（Backend as a Service）として利用できるAPIサービスです。HonoとCloudflare Workersを使用して構築されており、認証やデータベース、ファイルストレージ機能を提供します。

## 概要

SheetDBは、Cloudflare Workers上で動作します。アプリケーションフレームワークはHonoを採用しています。Googleスプレッドシートのレートリミット対応として、Cloudflare KVを使用したキャッシュ機構を実装しています。

## 主な機能

- 認証
- シートをデータベースとしたCRUD操作
- ファイルストレージ機能（Google Drive/S3 API連携）

## 技術スタック

- フロントエンド： React Router
- バックエンド： Hono (Cloudflare Workers)
- データベース： Google Sheets
- ファイルストレージ： Google Drive / S3 API
- キャッシュ： Cloudflare KV
- セッション・設定： Cloudflare D1
