---
title: Bug Sniper
tech:
  - Code Review
  - Game
status: Working
github: https://bug-sniper.goofmint.workers.dev/
---

Bug Sniper is a gamified web application for bug detection. Users find and tap bugs in code within 60 seconds to earn points. Consecutive correct answers trigger combo bonuses that increase the score.

## Overview

Bug Sniper is built with React Router and runs on Cloudflare Workers. The user's results are ultimately evaluated by AI. OGP images are automatically generated and stored in Cloudflare R2.

## Key Features

- Bug detection tapping by users
- AI-powered result evaluation
- Result image generation and storage
- Result sharing via X integration

## Tech Stack

- Frontend: React Router
- AI: Gemini API
- Hosting: Cloudflare Workers
- Image Storage: Cloudflare R2
