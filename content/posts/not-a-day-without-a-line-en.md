---
title: "Not a day without a line (of code)"
slug: "not-a-day-without-a-line"
date: "2026-05-02"
lang: "en"
tags:
  - "AI"
  - "Longread"
  - "Top"
  - "Latvia"
  - "Kundera"
  - "Olesha"
  - "Carroll"
status: "published"
pinned: true
pin_order: 2
---

**Two weeks ago I decided to jump down the rabbit hole and tried coding with AI. The best way to learn any tool is not to watch videos (you can do that endlessly with no result), but to make your own little project and rack up some bruises.**

Spoiler. It turned out to be not just one project, but five at once, and I'm not planning to stop. But first things first.

## Starting level

I last programmed in school in 2002 (BASIC, Pascal), but I've managed web development a lot. So, my starting level was, of course, not a rookie. For example, seeing a darkened photo, I immediately asked AI to "check whether there is a black overlay on top." Or, when a skyscraper got covered by text, I suggested rescaling (cropping) the photo. These are very simple and logical edits, no rocket science at all, but for a complete beginner they would not be obvious.

Still, can a complete beginner code with AI? Yes, but a) it takes time to develop an effective model of working with it, b) a logical tech-minded person will have an easier time than a humanities person (the "elegant giraffe" will get badly in the way), c) it's better to lower your expectations (at least temporarily).

## The very first app

The trigger was a Twitter update. Previously you could click on a Latvian news item and immediately, in the same window, see the translation and learn new words. The update broke my established language-learning pattern.

With a barely contained cry of "Let's get back at Elon Musk!" I opened Perplexity Computer to build my own app in roughly an hour. It took 5 hours and 19 builds, but the task was solved.

News was pulled in from Delfi, the translation displayed instantly via API, the audio worked (no accent at all and not robotic), new words were added to a dictionary, a calendar with a streak was being drawn, the mobile version worked, and even the favicon was a Latvian flag — beautiful.

![](/assets/posts/not-a-day-without-a-line-3-lll-vocab.png)

Of course, the first app was the simplest. I will make it part (one of the tabs) of a bigger app, LLL (Lena Learns Latvian), and refresh the design. The old version can be seen [here](https://masolova.github.io/old_LLL/) on GitHub.

## So how does AI code?

The process looks like an ordinary chat. For example, I want to translate from Latvian to Russian. I ask: "Listen, does such a thing exist at all, where, how much does it cost?" The chat gives options. I go to the service. If I get stuck somewhere, I send a screenshot and it helps: "No, the API keys are handed out on a different tab, go there."

While doing this, the AI reasons out loud, and you can read it like a funny novel.

![](/assets/posts/not-a-day-without-a-line-4-ai-debug.jpg)

## Second attempt at the bar. The family-office website.

Next I decided to build a [website](http://forza.capital) for the family office. I got tired of the question, "So what are you doing now?" Well, this.

My coding experience was limited, so I burned a lot of time looking for a good enough reference or a grid, and then for the hero image.

![](/assets/posts/not-a-day-without-a-line-1-forza-skyline.jpg)

I had the sense to stop and not do animation (windows blinking in the skyscrapers), because we would have spent a month tying down the coordinate grid with AI. And without a grid, what would blink is the starry sky above us and above Wall Street, not windows.

The typography is sort of newspaper-like. AI's reference was the Wall Street Journal.

![](/assets/posts/not-a-day-without-a-line-5-forza-rfs.png)

I think it came out "Fancy-schmancy, right?" Both on web and on mobile. But what's the most important thing in a website? Right — the fa-vi-con. Favicon: not forgotten. Moving on.

## Third step. The Connections game.

In the [game](/games/connections/) you have to group words into sets. Very addictive if you're a geek.

![](/assets/posts/not-a-day-without-a-line-6-connections.png)

Technically I had to assemble the matching mechanics, the word sets (about 5 thousand words), test them for duplicates, catch gems like **"The Bearable Lightness of Being,"** make an English version, and an easy mode for everyone who has not played in my "What? Where? When?" team.

## Fourth. My own website.

This site. Technically it's someone else's ready grid (Vanya Zamesin's blog), tags on posts, a recommendations block, conversion of posts from Word into Markdown, and a newsletter.

## Fifth. A language-learning service.

Spaced repetition flashcards. You can take a look [here](https://masolova.com/LLL/).

![](/assets/posts/not-a-day-without-a-line-7-cards.png)

Technically this is, just like in the very first app, translation, audio without accent, a dictionary, a streak, mobile layout. What's new: a) I had to set up login through Supabase (because storing data in the browser is unreliable; I would not want to come back in two months and find that everything was wiped), b) the logic of spaced repetitions for the cards, c) a motivating progress bar.

But the main thing is **which words** were selected. I (we) found frequency lists in the Latvian language and picked the 2,000 used most often. For the most common verbs, I asked it to make 5 phrases following the 1-3-1 logic (past — present in 3 forms — future). Then we found a corpus of texts used to prepare for the exam, ran it through, and pulled out frequency words from it. It turned out 85% had already been collected before, i.e. the work had been done well. We added the new ones.

I would have kept fooling around, but unfortunately, I now actually had to learn the language. Pity.

In the next post I'll share my conclusions and tips on AI coding (which will become obsolete in 5 days).
