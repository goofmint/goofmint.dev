---
layout: post
title: "How Personal Development Revealed the Future of SaaS"
date: 2026-01-24 12:00:00 +0900
lang: en
---

I've been using Todoist for task management for a very long time. Looking back at my emails, it seems I started using it in October 2013. That means I've been using it for over 12 years. After failing at task management repeatedly, Todoist was the first tool that actually worked for me.

With Todoist, I've been using the cheapest legacy business plan at 3,500 yen per year. Looking back, it was incredibly affordable, but this plan is being discontinued. The new business plan will cost 11,520 yen per year. There's also a Pro plan for personal use at 672 yen per month (8,064 yen annually). Whichever I choose, it's a 2-4x cost increase.

With rising prices, price increases may be unavoidable in some cases. However, I feel that these kinds of SaaS price hikes are clearly driven by feature additions that users don't expect. Namely, AI. Todoist has also introduced an AI assistant called `Todoist Assist`. Frankly, it's unnecessary. If this price increase is a result of that, it's extremely disappointing.

Adobe is another well-known example. Adobe's subscription has become more expensive year after year, and I feel this is largely due to the development burden of AI features. They say 80% of users don't use even 20% of features, and I think Photoshop and Illustrator are exactly like that. It's tough to pay for development costs of features unnecessary for most users.

## Building Small Tools Yourself

Since I'm already using Google Calendar (with Todoist integration), I decided to switch my task management to Google Calendar and Google Tasks.

However, there's one problem. I need Todoist's incredibly convenient feature of "adding tasks via natural language." For example, being able to input tasks like "next Monday meeting #ProjectA [3 hours]" using natural language. macOS Calendar has a similar feature called Quick Event. However, iOS doesn't have the same functionality.

Without this feature, entering tasks and scheduling calendar events becomes tedious, and it's clear it won't last long. I looked for OSS alternatives to Todoist, but none offered similar functionality.

So I decided to build it myself.

[goofmint/Text2Cal: Add schedule to your Google Calendar from natural language\.](https://github.com/goofmint/Text2Cal)

Text2Cal is a very small tool. It runs on Google Apps Script in Google Sheets. It takes received text, sends it to ChatGPT, and converts it to JSON for schedule input.

When you send a string like:

`21th 18:00 Meetup event`

It expands to JSON like this:

```json
{
  "title": "Meetup event",
  "start": "2026-01-21T18:00:00+09:00",
  "end": "2026-01-21T19:00:00+09:00",
  "location": null,
  "label": "0",
  "timezone": "Asia/Tokyo",
  "recurrence": null
}
```

This gets registered in Google Calendar. As a result, you get JSON back from Google Calendar like:

```json
{
  "id": "l0g...udo",
  "status": "confirmed",
  "htmlLink": "https://www.google.com/calendar/event?eid=bDB...",
  "colorId": "8"
}
```

If you put `!` at the beginning of the input text, data is registered in Google Tasks. You input text like `!Today Issue Invoice`.

Then you just create macOS/iOS shortcuts to send the input string to the Text2Cal web application. I use Google Sheets because it keeps logs of inputs and results, and makes it easy to use Google Calendar and Google Tasks APIs.

With just this, I've created the functionality I personally need, and I'm ready to migrate from Todoist. One issue is that the Google Tasks API doesn't support creating recurring tasks, so even if you enter `!Christmas Eve every year`, it won't become a recurring task.

## What "SaaS is Dead" Indicates

The phrase "SaaS is Dead" became popular a few years ago, but AI (LLMs) has made it more realistic. For small things, building it yourself is cheaper, faster, and fits your requirements better.

What's most challenging here are services without proprietary databases. Scheduling services are the prime example. Data goes to calendar services like Google Calendar, and not having proprietary data is fatal. Even if you customize for various business requirements, each customer only wants one or two requirements, making other requirements over-development.

If you have a proprietary database, you can take a vendor lock-in strategy to retain users. While users aren't happy about it, vendor lock-in can keep them using the service. However, if there are user demands for open data and you add export functionality, it might be imported into open-source alternatives. With Todoist, since tasks are meant to be completed, year-old data doesn't have much value, which is painful.

Services that replace open protocols and platforms have low switching costs, which is both an advantage and a disadvantage. Examples include public cloud instances and email delivery services. If you're sending email via SMTP, you can switch just by changing the connection destination. If you're just running EC2 instances on AWS, you can easily switch to other public clouds.

The continuous emergence of open-source alternatives is also a challenge. [OpenAlternative](https://openalternative.co/) lets you find OSS alternatives to various services. Of course, they often don't have all features, but if they can meet 80% of needs, that's often sufficient.

## SaaS That Will Survive

So what SaaS will survive? One is those that solve technical complexity. Representative examples are Twilio and Stripe. Payment systems are complex and tedious, but they simplify them. Of course, there are alternatives, but the SaaS market for payments and SMS sending won't disappear.

Next are those that solve legal issues. For example, freee and SmartHR. They replace necessary business flows like creating financial statements, invoices, and estimates. Accounting and HR software need updates as regulations change yearly. Even with local software, upgrade costs are necessary, and considering multi-platform support like macOS, this market shouldn't disappear.

Third are SaaS chosen by AI (LLMs). The prime example is Supabase. When developing web apps or smartphone apps that need databases using Claude Code, I often find it incorporates Supabase into requirements. Of course, you can remove it if it doesn't fit, but when it's included by default, many cases probably accept it as is. Services that don't come up as candidates when asking LLMs will likely decline.

Fourth are those where value emerges from continuity. This doesn't just mean accumulating data or vendor lock-in. Those that can present new business value as data accumulates are worth continuing to use. I think Salesforce and Datadog are this type of service. It's hard to see immediate value with Datadog, but as data accumulates, the visualization area expands and service value becomes apparent. Salesforce also has value not just for current response status, but because past history and client situations are globally shared.

Fifth is overwhelming affordability. If it's so cheap that other companies can't imitate, it may be chosen. The prime example is open source. While "open source = free" is a misconception, at least open-source software can be used free of charge at your own responsibility. Also, Cloudflare offering many services for free differentiates it from others. However, note that monetizing from free is a thorny path.

Finally, there's de facto standard. Prime examples are Microsoft Office, Adobe, and Autodesk. By becoming the standard among designers or in the CAD world, they create a situation where people must keep using them no matter how much prices rise. Affinity implemented free pricing, but probably only individual users can migrate. For business use, they're likely in a state where they can't switch.

## Conclusion

If your own service is SaaS, you need to identify these survival strategies, or you might be switched away quickly. The switch destination might be a rival, open source, or in-house development.

AI, or rather LLMs, are about to transform the SaaS world. 2026 will likely be turbulent and exciting too.
