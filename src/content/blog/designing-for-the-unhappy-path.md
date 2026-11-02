---
lang: en
translationKey: designing-for-the-unhappy-path
title: 'Good software considers the unhappy path'
description: 'The small decisions that make an interface useful when things don’t go to plan.'
pubDate: '2026-11-02'
category: 'Engineering'
draft: false
---
A booking form is easy to describe when everything works: choose a time, enter your details, and submit. The more useful design question is what happens when one of those steps fails.

A connection drops. Another person takes the last slot. Someone clicks twice because nothing seems to be happening. These are ordinary conditions, and they deserve ordinary, understandable responses.

## Start with the promise

Every action makes an implicit promise. A button labeled “Confirm booking” suggests the appointment is final. If the system only records a request for staff to review, that label promises too much.

“Request an appointment” gives the action a more precise meaning. A successful response can then explain what happened, what remains pending, and who takes the next step.

Before designing a success screen, write that promise in plain language. It often reveals a missing product decision before it becomes a confusing interface.

## Treat waiting as a real state

A submit button that becomes disabled prevents some repeated clicks, but it does not explain what is happening. Pair the disabled state with an action-specific label such as “Sending your request…” and expose status updates to assistive technology.

If the request fails, restore the action and preserve the values that remain valid. Someone who has already entered their contact details should not need to start over because the network briefly disappeared.

The server still needs to protect against duplicate submissions. Disabling a button is an interface behavior; it is not a complete guarantee that a request will be processed only once.

## Put recovery next to the problem

A generic error banner tells someone there is a problem. A useful error helps them recover.

- A missing phone number belongs beside the phone field.
- An unavailable slot belongs near the schedule picker, with a way to choose another time.
- A temporary connection failure belongs near the submission action, with a clear retry path.

Do not erase the rest of the form when one value needs attention. Preserve context and move focus deliberately when it helps someone find the issue.

## Make success specific

A green checkmark is reassuring, but the words carry the real information. A useful success state includes a request reference, the chosen branch and time, and the next step.

It should also distinguish a saved request from a confirmed appointment. That distinction prevents a successful technical operation from becoming a failed human expectation.

## A practical review

Before calling an interaction complete, walk through it with a slow connection, an invalid field, an expired choice, and a repeated submission. Ask what the person knows at each moment and what they can do next.

The goal is not to predict every possible failure. It is to make the likely ones understandable and recoverable. That is where a functional interface starts to feel dependable.
