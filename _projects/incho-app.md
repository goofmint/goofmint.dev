---
title: コミュ印帳
tech:
  - Flutter
  - Supabase
status: Progress
site: https://incho.dev
---

コミュ印帳は、コミュニティを愛する人のためのノートアプリです。FlutterとSupabaseを使用して構築されており、ユーザーは自分の参加するイベントの情報を簡単に記録・管理できます。

## 概要

コミュ印帳はFlutterで構築されており、モバイルアプリとWebで共通した体験を得られるように設計されています。バックエンドにはSupabaseを使用しており、リアルタイムデータベースやファイルストレージ、認証機能を提供しています。

## 主な機能

- イベント情報の記録と管理
- 参加しているイベントのメモ機能（X連携）
- 録音・テキスト起こし機能
- メモ、テキスト起こしを利用したレポート生成機能

テキスト起こしはGemini 2.5 Flash APIを利用しています。また、レポート生成機能はGemini 2.5 Flash APIならびにGemini3 Pro Image APIを利用しています。

## 技術スタック

- フロントエンド： Flutter
- バックエンド： Supabase (PostgreSQL, Storage, Auth)
- AI： Gemini 2.5 Flash API / Gemini 3 Pro Image API
- ホスティング： Cloudflare Workers
- アプリ内課金： RevenueCat
- エラートラッキング： Sentry
