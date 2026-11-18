---
title: "If a bot does the shopping, who is your pricing page for?"
description: "ChatGPT can now buy things for you. Most pricing pages were built to nudge a human, and an agent doesn't get nudged."
date: "2026-11-18"
tags: ["pricing", "AI", "agentic commerce"]
draft: false
---

Last week OpenAI gave ChatGPT a wallet.

The setup is simple. You save a card once. An agent finds the thing you asked for, goes to the seller's own site and checks out. Before anything is charged you see the items, the total and the card, and you approve it with Face ID. The merchant never sees your real card number, and OpenAI isn't taking a cut of purchases. For now anyway.

I posted about it the day it launched and one question has stuck with me since. If a bot is doing the shopping, who is the pricing page for?

## Pricing pages were built for people

Look at almost any pricing page and you'll find the same small tricks.

- A crossed-out price next to the real one, so the real one feels like a deal.
- A "most popular" badge on the middle tier.
- A third tier priced high enough that nobody buys it, which exists to make the middle one look reasonable.
- Prices ending in 9.
- A countdown timer.
- Fees that only show up at the last step of checkout.

All of these work on people, because people get tired, skim, and compare things to whatever is sitting next to them. That's the whole game.

An agent doesn't skim. It reads the price, the shipping, the taxes, the return policy and the total, and it compares that against the other five stores it checked in the same few seconds. The crossed-out price is just a number it ignores. The badge is decoration. The countdown timer means nothing to something that doesn't feel urgency.

## The review screen is the new pricing page

There's one part of this flow where a human still looks at the price: the confirmation screen right before Face ID.

That screen shows the items, the total and the card. That's it. No badges, no hero image, no "save 20%" banner. If your total is higher than what the person expected, they decline, and they decline with a thumb.

So the number that matters most is the all-in total, shown cleanly, at the moment of approval. Drip pricing, where the fees appear late, was already annoying. In an agent flow it's worse than annoying. The agent compares totals from the start, so the store with the honest total wins the comparison before the human even shows up.

## Spending limits change the math

OpenAI says the next step is delegation with parameters: spending limits, purchase categories, time windows. You tell the agent it can buy groceries up to $150 a week without asking.

This is the part I find most interesting from a pricing point of view.

A spending cap is a hard threshold, and thresholds behave very differently from normal price sensitivity. A person looking at a $104 item when they planned to spend $100 might shrug and buy it anyway. An agent with a $100 limit just moves on. There's no sale lost to "too expensive". The sale simply never happens, and the seller never finds out why.

So if agents become a real channel, a lot of pricing work turns into figuring out where the common limits sit and making sure the product fits under them, bundle sizes included. That's an old idea, pricing under round-number thresholds, but now it's being enforced by software instead of hesitation.

## What still works

The things that survive are the boring ones.

- **A price that's easy to compare.** Same unit, same terms, no math required.
- **An honest total.** Shipping and fees included early.
- **Real value per dollar.** If your product is better, the agent can actually see it in the specs and reviews, which beats hoping a badge does the work.
- **Being readable at all.** OpenAI's playbook for businesses tells them to claim their listing in ChatGPT, upload product feeds, and stop their firewalls from blocking agent traffic. A lot of sites turned on bot protection years ago and forgot about it.

None of this is new advice. It's just that the tricks that used to cover for skipping it stop working.

## What I'd check this week

If I sold anything online, this is the short list I'd run through:

1. Ask ChatGPT to find and buy your own product. See where it gets stuck.
2. Check your bot protection settings, and whether they block agent traffic you'd actually want.
3. Find every fee that appears after the product page and ask whether it needs to be there.
4. Look at your prices next to the round numbers people are likely to set as limits, $25, $50, $100, and see what sits just above them.

Agents won't replace every shopper. Plenty of people will still browse and buy the old way. But the share that hands it off is going to grow, and I'd rather find out now what my page looks like to a reader that can't be nudged.
