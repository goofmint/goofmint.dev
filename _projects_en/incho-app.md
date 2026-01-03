---
title: Commu-Incho
tech:
  - Flutter
  - Supabase
status: Progress
site: https://incho.dev
---

Commu-Incho is a note-taking app for people who love communities. Built with Flutter and Supabase, users can easily record and manage information about events they participate in.

## Overview

Commu-Incho is built with Flutter and designed to provide a consistent experience across mobile apps and web. It uses Supabase as the backend, providing real-time database, file storage, and authentication features.

## Key Features

- Event information recording and management
- Note-taking feature for participating events (X integration)
- Audio recording and transcription functionality
- Report generation using notes and transcriptions

Transcription uses the Gemini 2.5 Flash API. The report generation feature utilizes both the Gemini 2.5 Flash API and Gemini 3 Pro Image API.

## Tech Stack

- Frontend: Flutter
- Backend: Supabase (PostgreSQL, Storage, Auth)
- AI: Gemini 2.5 Flash API / Gemini 3 Pro Image API
- Hosting: Cloudflare Workers
- In-App Purchases: RevenueCat
- Error Tracking: Sentry
