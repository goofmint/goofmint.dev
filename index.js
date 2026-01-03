#!/usr/bin/env node

const { Command } = require('commander');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { unified } = require('unified');
const remarkParse = require('remark-parse');
const remarkGfm = require('remark-gfm');
const remarkStringify = require('remark-stringify');

const program = new Command();

// Process markdown for terminal display
function processMarkdown(markdown) {
  // Remove Liquid template tags
  let processed = markdown.replace(/\{%.*?%\}/g, '');
  processed = processed.replace(/\{\{.*?\}\}/g, '');

  // Split into lines for processing
  const lines = processed.split('\n');
  const output = [];

  let inCodeBlock = false;
  let codeBlockLang = '';

  for (let line of lines) {
    // Code blocks
    if (line.startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      if (inCodeBlock) {
        codeBlockLang = line.substring(3);
        output.push(chalk.gray('┌─ ' + (codeBlockLang || 'code')));
      } else {
        output.push(chalk.gray('└─'));
      }
      continue;
    }

    if (inCodeBlock) {
      output.push(chalk.cyan('│ ' + line));
      continue;
    }

    // Headers
    if (line.startsWith('#### ')) {
      output.push('\n' + chalk.yellow.bold(line.substring(5)));
      continue;
    }
    if (line.startsWith('### ')) {
      output.push('\n' + chalk.green.bold(line.substring(4)));
      continue;
    }
    if (line.startsWith('## ')) {
      output.push('\n' + chalk.cyan.bold(line.substring(3)));
      continue;
    }
    if (line.startsWith('# ')) {
      output.push('\n' + chalk.magenta.bold(line.substring(2)));
      continue;
    }

    // Lists
    if (line.match(/^[\s]*[-*+]\s/)) {
      const indent = line.match(/^[\s]*/)[0].length;
      const content = line.replace(/^[\s]*[-*+]\s/, '');
      output.push('  '.repeat(Math.floor(indent / 2)) + chalk.green('• ') + content);
      continue;
    }

    // Ordered lists
    if (line.match(/^[\s]*\d+\.\s/)) {
      const match = line.match(/^([\s]*)(\d+)\.\s(.*)$/);
      if (match) {
        const [, indent, num, content] = match;
        output.push('  '.repeat(Math.floor(indent.length / 2)) + chalk.yellow(num + '. ') + content);
        continue;
      }
    }

    // Blockquotes
    if (line.startsWith('> ')) {
      output.push(chalk.gray('┃ ') + chalk.italic(line.substring(2)));
      continue;
    }

    // Horizontal rules
    if (line.match(/^[-*_]{3,}$/)) {
      output.push(chalk.gray('─'.repeat(50)));
      continue;
    }

    // Links - simple format [text](url)
    line = line.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, text, url) => {
      return chalk.blue.underline(text) + chalk.gray(' (' + url + ')');
    });

    // Bold
    line = line.replace(/\*\*([^*]+)\*\*/g, (match, text) => chalk.bold(text));
    line = line.replace(/__([^_]+)__/g, (match, text) => chalk.bold(text));

    // Italic
    line = line.replace(/\*([^*]+)\*/g, (match, text) => chalk.italic(text));
    line = line.replace(/_([^_]+)_/g, (match, text) => chalk.italic(text));

    // Inline code
    line = line.replace(/`([^`]+)`/g, (match, code) => chalk.cyan.bgBlack(' ' + code + ' '));

    // Images - just show alt text
    line = line.replace(/!\[([^\]]*)\]\([^)]+\)/g, (match, alt) => {
      return chalk.gray('🖼️  ' + (alt || 'Image'));
    });

    // Skip empty HTML iframes
    if (line.match(/^<iframe/)) {
      continue;
    }

    output.push(line);
  }

  return output.join('\n');
}

// Determine language based on options
function getLang(options) {
  return options.lang || 'en';
}

// Read and display about.md
function showAbout(options) {
  const lang = getLang(options);
  const aboutPath = lang === 'ja'
    ? path.join(__dirname, 'about.md')
    : path.join(__dirname, 'en', 'about.md');

  if (!fs.existsSync(aboutPath)) {
    console.error(chalk.red(`About file not found: ${aboutPath}`));
    process.exit(1);
  }

  const content = fs.readFileSync(aboutPath, 'utf8');
  const { data, content: markdown } = matter(content);

  console.log(chalk.cyan.bold('\n' + data.title + '\n'));
  console.log(processMarkdown(markdown));
}

// List projects
function listProjects(options) {
  const lang = getLang(options);
  const projectsDir = lang === 'ja'
    ? path.join(__dirname, '_projects')
    : path.join(__dirname, '_projects_en');

  if (!fs.existsSync(projectsDir)) {
    console.error(chalk.red(`Projects directory not found: ${projectsDir}`));
    process.exit(1);
  }

  const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.md'));

  console.log(chalk.cyan.bold('\n📁 Projects\n'));

  files.forEach(file => {
    const filePath = path.join(projectsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);
    const slug = file.replace('.md', '');

    console.log(chalk.green('  • ') + chalk.bold(data.title) + chalk.gray(` (${slug})`));
    if (data.description) {
      console.log(chalk.gray('    ' + data.description));
    }
  });

  console.log();
}

// Show project detail
function showProject(slug, options) {
  const lang = getLang(options);
  const projectsDir = lang === 'ja'
    ? path.join(__dirname, '_projects')
    : path.join(__dirname, '_projects_en');

  const projectPath = path.join(projectsDir, `${slug}.md`);

  if (!fs.existsSync(projectPath)) {
    console.error(chalk.red(`Project not found: ${slug}`));
    console.log(chalk.yellow('\nAvailable projects:'));
    listProjects(options);
    process.exit(1);
  }

  const content = fs.readFileSync(projectPath, 'utf8');
  const { data, content: markdown } = matter(content);

  console.log(chalk.cyan.bold('\n' + data.title + '\n'));

  if (data.description) {
    console.log(chalk.gray(data.description) + '\n');
  }

  if (data.tech) {
    console.log(chalk.yellow('Tech: ') + data.tech.join(', ') + '\n');
  }

  if (data.github) {
    console.log(chalk.blue('GitHub: ') + data.github + '\n');
  }

  console.log(processMarkdown(markdown));
}

// List blog posts
function listBlogPosts(options) {
  const lang = getLang(options);
  const postsDir = lang === 'ja'
    ? path.join(__dirname, '_posts')
    : path.join(__dirname, '_posts', 'en');

  if (!fs.existsSync(postsDir)) {
    console.error(chalk.red(`Posts directory not found: ${postsDir}`));
    process.exit(1);
  }

  const files = fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .sort()
    .reverse();

  console.log(chalk.cyan.bold('\n📝 Blog Posts\n'));

  files.forEach(file => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(content);

    console.log(chalk.green('  • ') + chalk.bold(data.title) + chalk.gray(` (${file.replace('.md', '')})`));
    if (data.date) {
      console.log(chalk.gray('    ' + new Date(data.date).toLocaleDateString()));
    }
  });

  console.log();
}

// Show blog post detail
function showBlogPost(id, options) {
  const lang = getLang(options);
  const postsDir = lang === 'ja'
    ? path.join(__dirname, '_posts')
    : path.join(__dirname, '_posts', 'en');

  const postPath = path.join(postsDir, `${id}.md`);

  if (!fs.existsSync(postPath)) {
    console.error(chalk.red(`Blog post not found: ${id}`));
    console.log(chalk.yellow('\nAvailable posts:'));
    listBlogPosts(options);
    process.exit(1);
  }

  const content = fs.readFileSync(postPath, 'utf8');
  const { data, content: markdown } = matter(content);

  console.log(chalk.cyan.bold('\n' + data.title + '\n'));

  if (data.date) {
    console.log(chalk.gray('Published: ' + new Date(data.date).toLocaleDateString()) + '\n');
  }

  console.log(processMarkdown(markdown));
}

// Setup CLI
program
  .name('goofmint')
  .description('CLI tool for goofmint.dev portfolio')
  .version('1.0.0')
  .option('-l, --lang <language>', 'Language (ja or en)', 'en');

// Default command (about)
program
  .action((options) => {
    showAbout(options);
  });

// Projects command
program
  .command('projects [slug]')
  .description('List projects or show project detail')
  .action((slug, options) => {
    const parentOptions = program.opts();
    const combinedOptions = { ...parentOptions, ...options };

    if (slug) {
      showProject(slug, combinedOptions);
    } else {
      listProjects(combinedOptions);
    }
  });

// Blog command
program
  .command('blog [id]')
  .description('List blog posts or show post detail')
  .action((id, options) => {
    const parentOptions = program.opts();
    const combinedOptions = { ...parentOptions, ...options };

    if (id) {
      showBlogPost(id, combinedOptions);
    } else {
      listBlogPosts(combinedOptions);
    }
  });

program.parse(process.argv);
