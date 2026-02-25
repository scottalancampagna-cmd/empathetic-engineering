---
title: "Reading the Room"
description: "Understanding someone's point of view can show you a lot more than you realized"
pubDate: 2025-09-30
---
Back in the day, I was running a team that was going to rebuild the apps for a very large bank in the US. We had a plan we worked on with the client to move them from our white label solution that wasn’t fitting their needs to a fully custom native set of applications directly pointing to their API suite.

My tech lead and I huddled for days, we formulated architecture plans, ensured we had the right cadences, and then assembled the team, starting with an iOS lead and Android lead.

The four of us held a number of meetings talking about goals and intent and how we were going to move forward. The basic plan being, we’re getting a 3ish year runway to build the applications alongside the team at the bank that would be exposing/building the API’s, with the intent to then hand off the mobile app dev to their team after the end of the contract. 

After about a month of us all uniting on a goal and directive, and having everyone go off to do their own work to get us ready to jump on the work, I noticed a rumbling though. 

My iOS lead was frustrated. And I couldn’t figure out why. He and I were tied at the hip and he was doing everything exactly as I would have expected, clean and simple architecture, easily expandable, and well documented so that it would be easy to hand off. But my Android lead, despite being in the same conversations as my iOS lead heard a totally different directive.

He built the application with an exceedingly complicated architecture that wasn’t well documented on the internet let alone in our documentation, and required proprietary knowledge to expand on top of it. 

While my iOS lead heard “we’re handing this off so it has to be easy to use” my Android lead heard “we’re handing this off, so make sure that we can get another contract by making them need us”. 

I know which one of those outcomes I wanted, and I know which one at the time I would have called “more empathetic” but… was it?

[Subscribe now](https://scottacampagna.substack.com/subscribe?)

[Share Empathetic Engineering](https://scottacampagna.substack.com/?utm_source=substack&utm_medium=email&utm_content=share&action=share)

---

We like to think of empathy as a singular virtue - as if there’s one obvious “right” way to care about the humans in any given system. But the reality is more complicated: empathy is always directional. You’re being empathetic *toward* someone, which means you might simultaneously be less empathetic toward someone else.

The iOS lead was empathizing outward - toward the engineers who would inherit this codebase, toward the future maintainers he’d never meet, toward the abstract principle of good stewardship. His architecture was an act of care for strangers.

The Android lead was empathizing inward - toward his team sitting around that table, toward the engineers whose livelihoods depended on this contract extending beyond three years, toward the very real humans whose mortgages and families and career trajectories were tied to our continued indispensability.

Both were acts of empathy. Both were, in their own way, deeply ethical responses to the directive. And I, being the messenger and direction setter in this situation, had somehow assumed we were all empathizing in the same direction.

---

I’ll be honest with ya’ll… in the moment, I didn’t handle this well. lol. 

I saw the iOS lead as acting empathetically and ethically, and the Android lead as trying to pull a fast one over on our client that was about to pay us a boatload of money. 

And I acted accordingly, trying to change the mind of the Android lead to do things the way our iOS lead had done them. 

But with the benefit of hindsight, I can see that I was missing the entire thought process behind what the Android lead was doing. 

I didn’t have any direct reports at the time. We hadn’t gone through any layoffs. I was naive. I was JUST thinking about the project and the client. Which isn’t wrong. My obligation WAS to the client… but I was missing the second half of the perspective because I didn’t think that there was even a chance that the end of this project meant layoffs or job loss, or even just the emotional impact of not having a project that you are owning and responsible for.

I missed the human part. Which hopefully makes you go “woah what the fuck, SCOTT missed the human part.” Because that’s my whole schtick! I get the people side of things! 

---

The point of this though, is that empathy in engineering doesn’t show up one way. But it does ALWAYS show up in the code. Whether you’re hard coding a string, or writing a function that can be reused across your application, or writing in an arcane language, or adopting the latest and greatest tool sets, they’re all expressions of empathy. 

You might have empathy that a solution needs to be done ASAP so you do something hacky knowing that it won’t stand the test of time but will accomplish the goal of immediacy. 

You might have empathy for your junior engineers so you write a ton of comments explaining your logic doing things that seem second nature to you so that they can learn and grow.

You might have empathy for yourself, and want to build something elegant and timeless that you can look back on with pride.

You might have empathy for the world, and refuse to build something because you think that it’ll have a negative impact on people and you don’t want to be a part of it. 

The point is - code is an expression of humanity, and humanity is full of empathy, even when you don’t agree with it or understand it in the moment. 

---

This is the part I’m still learning, and still getting wrong as often as I get it right

#### Empathetic engineering isn’t about having the “right” feelings. It’s about understanding whose needs you’re optimizing for, and being honest about the trade-offs.

When I advocated for clean, simple, handoff-ready architecture, I’m empathizing toward:

- Future maintainers who deserve clear, understandable systems
- The client who’s paying for something sustainable
- The abstract principle of good stewardship
- My own identity as someone who “does things the right way”

But I was being less empathetic toward:

- The team whose livelihoods depend on ongoing complexity
- The very real insecurity of working in an increasingly commoditized industry
- The humanity of being needed and to build things that can’t easily replace us
- The fear that sits beneath every “this might be my last project at this company”

Neither direction is wrong. But pretending the trade-off doesn’t exist, pretending that “good engineering” is a neutral technical judgment rather than an expression of whose humanity we’re centering, that’s where we get into trouble.

---

So how do you keep yourself from falling into the trap of your biases making you feel empathetic while missing the mark completely when you’re in the meeting room or on the call? It’s not such an easy solve. You can’t just follow a formula and poof you’re magically more empathetic and understanding of all perspectives. Instead, it’s about process, and trying to ensure that we’re keeping ourselves grounded.

#### My first question I have for every meeting is “what does success look like”.

And that doesn’t mean, what does success for ME look like. It’s about how we figure out how everyone in the meeting feels like they’re being heard while getting to the right solution. 

When you don’t know what success looks like for a meeting, you can take one of two tactics:

1. Track what people are saying and identify:What’s the focus of each persons inputIs it outward?
2. Is it inward?
3. Is it revenue based?
4. Is it something unexpected or out of character?

Who isn’t talking and who is talking a lot

Where are your own biases hitting 

1. Are people saying specific triggering comments?
2. Are people viewing you in a specific way that reveals their bias?

Just flat out ask “what does success look like” 

I’m gonna be real again… I tend to just go straight to option 2. I do track who cares about what during meetings, and identify who the quiet people are and see if they’re there for calendar filler or if they have a thing they need to accomplish. But most of the time, if you pause and say “hey, what does success at the end of this meeting look like”, you’re either going to get a really good well thought out answer from an individual or multiple individuals… or you’ll get stunned silence. 

And both, are opportunities! 

It’s either an opportunity to track to a really specific ideal endpoint, or to identify what the right endpoint should be. But either way, you can’t create that opportunity without recognizing that it is always there! 

---

My challenge to you, is during your next meeting, or your next conversation with your client or your team, and ESPECIALLY when you’re actively making pitches/suggestions, ask yourself… whose needs am I optimizing for?

And maybe, if you want to be really brave, after asking what does success look like, also ask what concerns people in the meeting have that we’re not talking about. There’s always unspoken concern at work! And we often don’t create emotionally safe spaces for people to raise those concerns. So instead they squash them down, and do what they think is right, and we create gaps in understanding and expectation! 

When we stop pretending that there’s an empirical right and wrong decision in software engineering, and start embracing that every decision is a human decision based on human logic which is often flawed when not confronted and scrutinized, we can start seeing the truth behind the code.

The question isn’t whether to be empathetic; it’s empathetic toward whom?
