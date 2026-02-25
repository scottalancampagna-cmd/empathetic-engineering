---
title: "The Help That Hurts"
description: "How our most helpful tools are making us useless"
pubDate: 2025-10-07
---
We’re training a generation of engineers to fish with dynamite in well-stocked ponds. But most of the real work happens in empty streams with broken gear.

I’m not JUST talking about AI either. 

We’ve trained our engineers and ourselves to use crowdsourcing, AI, and any tool that they can find to get through their problems. 

And it reminds me of when my kiddo was little. He was obviously inventive, in that he would do things that you just wouldn’t expect. He would always find the easy way around things. Whether it was walking, or crawling, or speech, or anything, he would just figure out the method that took the least amount of effort and that would be how he did things. 

But there’s a cost to taking the easy way out. It made it so speech was difficult, it made it so that there would need to be adjustments to his fine motor skills, and despite it being ways of getting around putting in effort… in the end it took a TON of effort. 

And I see the same thing happening to our engineers. My kiddo was lucky, there were specific therapies and programs that could help.

> BTW, if you have even an INKLING something is “wrong” with your kiddo, my advice is to talk to people about it and to do without judgement or expectation, but rather to just talk through it. We were lucky and our preschool saw that our kiddo needed some early intervention therapies and made it so that his life is so awesome now, despite it being tough early on for us and him. Anyway, this is just an aside to say “listen to those parental insticts without also judging yourself or your kiddo, because there are super awesome people out there who help people for a living and you might just get lucky and get to have some of those awesome people in your life for a little bit”.

And there’s opportunity for us to change the paradigm and help our engineers, but it requires specific and intentional work that we need to make sure we’re open and honest about. Because without accepting we have a problem, we can’t fix it!

[Subscribe now](https://scottacampagna.substack.com/subscribe?)

---

Now the irony of this is, every week, when I’m planning out my posts here, I use Claude to help me to ideate and it even writes some pretty amazing lines that I use verbatim (see the first two lines of this post… yea Claude wrote that lol). 

So how does that differ from what I’m railing against in the first section of this post right? It feels like it’s all the same thing just in different contexts, but I see it as a totally different exercise and work effort. 

First of all just to get it out of the way, Claude isn’t writing this thing FOR me lol. It’s not even writing it “with” me, but I do use it to help me write outlines and come up with some topic ideas because honestly sometimes you just need to have a starting place. 

> You can tell Claude isn’t writing it for me because my mom’s head is exploding at how I use commas — btw, I use them as pauses in my brain and realize this isn’t how grammar works and I don’t care because you can read this and so can my mom and none of you can tell me to stop lol.

And using Claude reminds me of how I used to prepare for in class essays in 9th grade! Back then, we were allowed to take in “notes” for our in class essays, and I always did well on them, because my mom (who again is cringing at every comma) and I would sit down and write out a detailed outline, with topic sentences, supporting details, and the conclusion. And from there, it was easy to write the essay because I had the whole thesis written, it’s just putting it into complete sentences.

I use Claude similarly — we ideate on a couple of different ideas for the week, I narrow them down, I start refocusing them to things that I care about, and then we put together an outline, and I write all these words that you are reading! 

But I’m not using Claude to solve a problem. Or to do my thinking for me. I’m the one thinking and ideating, with a tool that is designed to help me to do that without robbing me of my agency. I’m not just going to say “Claude turn this into a post” because 1) It would be really stupid for me to publish that because why do you want to read something an AI wrote about? 2) It would never REALLY sound like me, because it doesn’t think like I do 3) The whole point of this damn thing is to get my brain working a little harder on things that aren’t just work. 

---

Engineers on the other hand, are being trained to use LLMs, AI Agents, and even just normal ass crowdsourcing tools like Stack Overflow to do the thinking for them, and that’s where we start doing ourselves a disservice. 

Now, this isn’t a “this just started happening” type of problem this is a “long festering with the chickens coming home to roost soon” type of problem.

This has been happening for years, where people would literally just copy code from Stack Overflow or purposefully post incorrect solutions so that people would correct them (one of my favorite social engineering plots of the last decade is this one lol — I love the idea of praying on the pettiness of the internet and relying on that to solve your problems rather than just asking for help, and then even more love that it works lol). And at first, I think this was a great outcome, people would talk through their solutions, and try to work it out on the internet figuring out what did and didn’t work.

But it portended something bigger — the abdication of our thoughts to external entities. Now this started off as just strangers on the internet, where we would just copy code from SO, and see that it worked without understanding it. That has slowly progressed to not even needing to ask a question, but instead being able to work with an LLM and have it provide you an answer that once again you didn’t understand. But even that progression is a wildly important one. 

At least with SO you were interacting with people, who nominally understood what you were trying to accomplish and you’d get humane responses (sometimes just human responses that weren’t all that humane) that showed some level of thought and understanding even if it wasn’t YOUR understanding. But now, LLMs can replace that with an approximation of what it “understands” of what you’re trying to accomplish. 

And there’s some really clear value props with that — for someone like me who doesn’t live in code, I can use LLMs to explain things, or I can use them to build prototypes (that don’t need the code to be production ready or scalable). But for junior engineers, who don’t have a large backlog of success and failure and most importantly LEARNING, it’s a huge disservice. It’s taking away the ownership of your success and failure and placing it firmly in the hands of software.

---

So what who cares amirite. 

But as anyone who has worked in software engineering long enough has, I’ve seen exactly why the engineers who rely on external sources to write their code simply aren’t as successful. It’s not a “they can’t be successful” but rather “they can’t be successful IF they don’t also have strong underpinnings of knowledge that they can use to criticially review what the external entity/LLM is doing.”

Back in my FIS days, I spent the beginning of my time there working on custom products, not having to worry about scaling the software, but rather working on scaling the backend to be able to handle the load of millions of concurrent users. But, when I transitioned to owning a part of the backend of our white label mobile product I saw first hand how much engineers need those strong underpinnings of knowledge to be successful. 

When you’re building a one off you can sometimes get away with bad habits. But once you’re responsible for a scalable backend system, you can’t get away with winging it. We had a specific middleware tool that essentially did a translation between a middleware that was built by our legacy start up (mFoundry) and the source of truth which lived at FIS. This was written when we were separate entities and meant to make sure that mFoundry didn’t have access to proprietary code or user info that was housed by FIS.

The code was written by a team of contractors, who compiled and deployed the code… but didn’t leave behind the source code. It was esoteric. It was a behemoth. It was impossible to touch.

So we had a team that was simply there to support that application, and then build applications that could live alongside it and make changes as needed. 

There was a huge problem though… the team that was running it, was the only ones that could run it because they fell into two camps (and sometimes both):

1. The Inheritors — These folks would learn from tribal knowledge, hearing whispers from previous devs things like “never redeploy this or it’ll trigger a secruity review” or “this is how you bypass this setting so we can do what you are trying to do”
2. The Archaeologists — They would do deep dives into the code, looking at all the nooks and crannies trying to reverse engineer what the code was doing, building mental models of how everything operated and then decoding all the projects we wanted to do into components of that mental model

(Claude came up with those titles, I wish I could claim them lol)

These folks were forced to figure out solutions, and would eventually lead us to the promised land and figure out how we could do the exceedingly minute changes that we could realistically accomplish (this isn’t meant to diminish what they did rather to highlight that our code was such a mess that even minute changes took herculean efforts by the team). 

It required them to be system architects, scientists running experiments, marathon runners working tirelessly to find solutions to impossible problems, and most importantly it required that they become incredibly comfortable with the unknown.

And as a result, they were our best debuggers. They could trace an error back to it’s source like the archeaologists they were. But they didn’t do it because they loved it, they did it because there was no other option. They couldn’t go to Stack Overflow because no one would ever build software like this. They couldn’t use an LLM because they weren’t commercially available but also because even if they were they wouldn’t have the context to make the calls about how the software was working. 

So they had to figure it out on their own. They had to rely on their training and experience. They had no other options. 

And while it absolutely burned them out and left many of them to go elsewhere and find less distressing positions with better pay, it also made them INCREDIBLE developers with the skills to go and find those new positions. 

---

Today’s engineers, even some of the best ones I know, haven’t been through the wringer and as a result haven’t been forced to build the muscle memory of facing an issue and being forced to solve it through learning rather than through a cheap fix.

Imagine the workflow today on any well trod platform — you’re a junior engineer looking to solve a bug in a react application. You go to an LLM or Stack Overflow, you look up the exact error code you’re recieveing and someone provides code that “solves the problem”, you copy pasta, and voila now your code works.

But then, the next time you see that error… what are you doing? You’re going back to the well, and doing the same thing again. But what happens if this time your copy pasta doesn’t work? You try another copy pasta. And another. And another. And suddenly you’ve spent 3 hours on a problem that amounts to something like “this carat shouldn’t be there”. 

This isn’t just a “look these engineers don’t have the pain that we used to have to go through” old man yelling at cloud post (ok there’s a little of that, but that isn’t the WHOLE thing lol) — this is real business value and cost that is being eaten for nothing other than institutionalized laziness. We value the speed of the answer and claim that that’s why we want to rely on these tools, but then when the tools don’t work exactly as expected, or don’t provide the value we’re looking for, everything falls apart. A simple one line solve takes 3 hours NOT because it’s a dev researching and learning why, but because they’re just doing trial and error and not actually gaining the experience that comes from failure.

---

And this is where I strategically call back to my post on the [empathy tax](https://scottacampagna.substack.com/p/the-empathy-tax?r=ferfk) — as a leader of engineering organizations, you’re not judged on whether your team is learning and growing. You’re judged on “results”. Which is another way of saying that we prioritize something aside from the maturation of our employees - we prioritize dollars. 

And by prioritizing dollars, we sometimes get to good dollars results. There are plenty of companies raking in money hand over fist while not giving even the most minute shit about their employees. And if that is what they value, I guess good for them. 

But my personal values are based on growth and learning. And as a result, I am going to be at odds with a lot of expectations of the “enterprise”. So I have to take on the empathy tax, and find ways to shield my team so that they can do what I think is important — become well rounded engineers and people who can achieve their personal goals through their own maturation on my team — and do it while laundering the results through the machine of “we have to make more money”. 

It’s exhausting. But the results speak for themselves.

When given the time to learn and experiment and fail, I’ve worked with engineers who thought they were mediocre and then turned into architects that the entire org respected and valued, or couldn’t spell to save their lives but were the leading authority on Swift, or thought they were destined to be one minor role in a large corporation step up and completely shift the way our company operated. 

People are multifacted. But by leaning in only on “get results” we lose the value that’s created out of failure. To be cliche, some of our best inventions were actually other failed inventions. Sticky notes, the lifeblood of a SAFe Release Train Engineer and any lover of Miro, were invented on accident because the glue they were inventing wasn’t strong enough, and they started using it internally to make notes and realized “woah we could sell this”. 

Human value isn’t about dollars. It’s not about time. It’s about experimentation. 

And my deepest fear for the way technology is affecting us, isn’t about it taking over the world or launching all the nukes, or anything like that (I mean, shit it DOES worry me, but also… I’ve seen some of the people that write these things, and uh… I am not trying to be disparaging but they don’t know how to do any of that, so the idea that they’re training tech that knows how to do it seems dubious at best lol). 

My fear is that we’ll lose what makes us human by giving up our ability to think to a machine.
