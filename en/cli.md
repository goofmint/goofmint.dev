---
layout: default
title: CLI
permalink: /en/cli/
lang: en
---

{% include i18n.html %}

# {{ t.cli.title }}

This site is CLI-friendly. You can access this site directly from your terminal without any installation.

```bash
npx goofmint
```

## Commands

### Show About

Display About page (default command):

```bash
npx goofmint              # English
npx goofmint --lang ja    # Japanese
```

### List Projects

Display all projects:

```bash
npx goofmint projects           # English
npx goofmint projects --lang ja # Japanese
```

### Show Project Details

Display details of a specific project:

```bash
npx goofmint projects <project-slug>           # English
npx goofmint projects <project-slug> --lang ja # Japanese
```

**Example:**
```bash
npx goofmint projects bug-sniper
```

### List Blog Posts

Display all blog posts:

```bash
npx goofmint blog           # English
npx goofmint blog --lang ja # Japanese
```

### Show Blog Post

Display a specific blog post:

```bash
npx goofmint blog <post-id>           # English
npx goofmint blog <post-id> --lang ja # Japanese
```

**Example:**

```bash
npx goofmint blog 2025-01-03-welcome
```

## Options

- `-l, --lang <language>` - Specify language (`ja` or `en`, default: `en`)
- `-V, --version` - Display version number
- `-h, --help` - Display help information

## Usage Examples

```bash
# Display About page in English
npx goofmint

# Display About page in Japanese
npx goofmint --lang ja

# Display project list in English
npx goofmint projects

# Display Bug Sniper project details in Japanese
npx goofmint projects bug-sniper --lang ja

# Display blog post list in Japanese
npx goofmint blog --lang ja

# Display specific blog post in English
npx goofmint blog 2025-01-03-welcome
```

## Source Code

The CLI tool is open source and available in the [goofmint.dev repository](https://github.com/goofmint/goofmint.dev).
