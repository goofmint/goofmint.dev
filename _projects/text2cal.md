---
title: Text2Cal
tech:
  - AI
  - Google Sheets
status: Working
github: https://github.com/goofmint/Text2Cal
---

Text2Calは、自然言語でGoogleカレンダーやGoogle Tasksに予定を追加できるアプリケーションです。AIを活用して、ユーザーの入力を解析し、適切な日時や内容で予定を作成します。

## 概要

Text2Calは、iOSのショートカットでの利用を想定しています。自然言語をGoogleスプレッドシートのGoogle Apps Scriptに送信し、AIが解析した結果を基にGoogleカレンダーやGoogle Tasksに予定を追加します。

送信されたメッセージ、解析結果や処理結果はGoogleスプレッドシートに保存され、履歴として参照可能です。

## フォーマット

ユーザーは以下のような自然言語で予定を入力します。

```text
来週月曜日、15時から1時間にチームミーティング
```

また、頭に `!` を付けることで、タスクとしてGoogle Tasksに追加することも可能です。

```text
!明日の午前中に買い物
```

繰り返しの予定も可能です。デフォルトは60分の予定になります。なお、Google Tasksでは繰り返し予定はサポートされていません（APIが対応していないため）。

```text
毎週金曜日、18時からジムに行く
```

## 主な機能

- AI（OpenAI）を活用した自然言語解析
- Googleカレンダーへの予定追加
- Google Tasksへのタスク追加

## 技術スタック

- フロントエンド： iOSショートカット
- バックエンド： Google Apps Script (Googleスプレッドシート上の)
- AI： OpenAI API
- カレンダー・タスク管理： Google Calendar API / Google Tasks API
