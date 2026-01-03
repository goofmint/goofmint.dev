---
title: Text2Cal
tech:
  - AI
  - Google Sheets
status: Working
github: https://github.com/goofmint/Text2Cal
---

Text2Cal is an application that allows you to add events to Google Calendar or Google Tasks using natural language. It leverages AI to parse user input and create events with appropriate dates and content.

## Overview

Text2Cal is designed for use with iOS Shortcuts. Natural language is sent to Google Apps Script in Google Sheets, and based on the AI-analyzed results, events are added to Google Calendar or Google Tasks.

Sent messages, analysis results, and processing results are saved in Google Sheets and can be referenced as a history.

## Format

Users can input events in natural language such as:

```text
Team meeting next Monday at 3pm for 1 hour
```

You can also add a `!` prefix to add it as a task to Google Tasks:

```text
!Shopping tomorrow morning
```

Recurring events are also supported. The default duration is 60 minutes. Note that Google Tasks does not support recurring events (as the API does not support it).

```text
Go to gym every Friday at 6pm
```

## Key Features

- Natural language parsing using AI (OpenAI)
- Adding events to Google Calendar
- Adding tasks to Google Tasks

## Tech Stack

- Frontend: iOS Shortcuts
- Backend: Google Apps Script (on Google Sheets)
- AI: OpenAI API
- Calendar & Task Management: Google Calendar API / Google Tasks API
