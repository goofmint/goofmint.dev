---
title: SheetDB
tech:
  - Hono
  - Cloudflare Workers
status: Progress
github: https://github.com/goofmint/sheet-db
site: https://sheetdb.app/
---

SheetDB is an API service that enables using Google Sheets as a BaaS (Backend as a Service). Built with Hono and Cloudflare Workers, it provides authentication, database, and file storage features.

## Overview

SheetDB runs on Cloudflare Workers and uses Hono as the application framework. To handle Google Sheets rate limits, it implements a caching mechanism using Cloudflare KV.

## Key Features

- Authentication
- CRUD operations using sheets as a database
- File storage functionality (Google Drive/S3 API integration)

## Tech Stack

- Frontend: React Router
- Backend: Hono (Cloudflare Workers)
- Database: Google Sheets
- File Storage: Google Drive / S3 API
- Cache: Cloudflare KV
- Session & Settings: Cloudflare D1
