---
title: "Vibe Coding isn't for Everyone Part 1!"
description: "My perspective spending a week vibe coding with CoPilot and Claude"
pubDate: 2025-10-21
---
So I wanna give ya’ll a peek behind the curtain again. Normally on Monday I spend 20-30 minutes brainstorming ideas for the week, and using Claude to beat them up. But I got obsessed with creating two different programs over the weekend, and burned through all my monthly Claude credits, which made me think… 

1. I don’t want to use Claude to help me brainstorm anymore. It’s been fun but I think it’s also been a crutch that I didn’t need.
2. It’d be useful to know how someone who knows a lot about tech but doesn’t write code can use AI tools to vibe code!
3. Damn it’d be useful if I could just make a clanker write this outline for me
4. DON’T GIVE IN!
5. Fuck it, let’s do “how it felt vibe coding” on Tuesday and then “some insights using code” on Thursday… let’s rock.

[Subscribe now](https://scottacampagna.substack.com/subscribe?)

---

Over the last few months, I’ve been using Claude as a prototyping tool. I’ve tried just giving it specific prompts, but then expanded to things like throwing a full on RFP into it and building based on the RFP or based on a workflow that we know we’ll need. 

As I was building these prototypes, I was noticing… it’s really just building HTML which is the last language I ever wrote code in lol. And so at first, I would have Claude write up a whole ass prototype, then ask it to rework things and its methodology was SO bizarre.

It would pull out pieces of code, then make changes, then rewrite the section that it just rewrote, then delete whole sections, then just start over again, and it was like staring at the screen in a movie when someone is “hacking”. And overall I was looking at it and going… why am I having Claude do this, it’s like moving a table view one row over, I know how to do that! And that’s when I got reignited into “writing code is fun” and figured, it was time to actually vibe code something. 

So I started with two projects:

1. A personal project, trying to pull together all the stuff that’s important to tell my kids what’s up for the day (do I have school, what’s the menu for breakfast/lunch, what’s the weather, etc.)
2. A work project, trying to build a collaboration tool

Let’s start with the work project even though it’s number 2 because I’m going to be more vague since it’s something I’m working on not in my personal capacity lol. 

---

Walking into the work project, I already had a whole slew of requirements and prompts, and essentially just created a project in Claude and started grinding — thinking this is so much data I’m sure we’re good to go lol. 

And it’s funny how working with AI a bit changes the way you think, because instead of prompting it to build the tool using all the things that I had provided, I instead immediately went to “build out all the prompts you’d need to build this full stack application including the front end, the api layer, and the db”. 

It wrote up 9 prompts, all very targeted and then we started walking through all the prompts to get us to a deployed solution. 

Now keep in mind, Claude, while having a lot of context and knowledge, has no idea what MY level of development knowledge is, and assumed that if I was asking to develop something I probably knew what I was doing. So I had to start prompting it to help me with installing all the tools I needed, where to figure it all out. It ended up with a lot of terminal commands, which if you haven’t used it before… consider yourself lucky that you haven’t had to just memorize a bunch of commands like we’re back in the DOS days lol. 

But that’s also what Claude was really good at, remembering esoteric command line tools that I had no knowledge of because I haven’t been living in it for years like any dev that I would have worked with. 

It’s also where I started questioning… would someone walking in with no tech knowledge have any idea how to do any of this? And the answer for sure is no. If I tried to get my tech savvy friends to do this without giving them any training, they would have been lost. Which is why I understand the proliferation of online AI “coding” tools that obfuscate all the actual coding and just use prompts. It’s an alluring option, but it’s not something that is going to achieve scale or complexity. 

Let me explain why… when we eventually got to the point where I needed to build out some service calls, and tie them to a database, everything just fell apart. We kept running into 401 authorization errors. I would ask Claude to diagnose it, Claude would come up with a solution, the solution wouldn’t work, it’d try a different solution, it wouldn’t work, then it would come back to the previous solution! And it would just sit in that loop for an hour or two. 

If I didn’t know what I was doing I probably would have gone round the process even more than I already did… but in the end the only way I was able to solve it was by just… poking around. And eventually I changed enough settings that my 401s turned to 200s and 201s and success was mine… but not Claude’s! 

Granted, I couldn’t have gotten to the point where the failure occurred without Claude… but that’s going to be more in depth on Thursday lol. 

---

While that application was focused on being full stack, my personal project didn’t need to be nearly as robust. All I needed was for it to figure out what days were school days for each kid (important note… I have one kid on the standard school calendar, while the other is on a year round calendar… so sorting out just “who has school today” is more complicated than it should be lol), then figure out the menus for the day, and figure out the weather. That’s all I wanted to start with.

But it quickly became complicated! There was the yearly calendar, which was a PDF… but the data construction didn’t make sense to Claude and so it started messing things up and not knowing what days were school days and which weren’t, so we had to get really specific — and where Claude wanted to write scrapers to do the work, we ended up realizing that the way scrapers need to be built wasn’t going to work for the pages we were pulling from! They had too many menu options, and things you needed to select to get the right detail and the pages weren’t built to have static pieces that a scraper could pull from.

So we iterated, and iterated, and iterated. And it was irritating lol. But after a lot of trial and error we have a locally hosted server, that houses all the info that the dashboard needs, and I can load it up on a tablet in the kitchen so the kids can see their days and figure out what is in store for them!

---

Now so far this is just “Scott used AI for things… cool”. And I get that. 

What I want you to see through this though, is that while AI is an enabler it isn’t magical. 

It doesn’t understand context unless you feed it in specifically, and even then it’ll decide whether it wants to care about that context without your approval or disapproval. It just… does what it thinks needs to happen next based on whatever information exists in the prompt/project context. And you don’t have control over what it does or how it does it. 

And that makes it really difficult to 1) get to your desired outcome and 2) understand what it’s doing so you can learn from it. 

Let’s first focus in on the desired outcome part —

To be fair… both the applications I made ARE what I wanted them to be. To a certain degree. And that’s what I would expect right? It got it about 85% right after a whole lot of “conversation” (secret time, I blew through my monthly credit allotment over the weekend while playing with this stuff lol). But even the things it got right, only were right because of… you guessed it… empathy lol. 

Really though, I had to show empathy to the system, and think about how it operates, what it’s trying to accomplish, how it solves problems, what it can and can’t understand, what types of things I would think about that I don’t know if it would ever consider. And it’s very similar in process to writing user stories, in that I’m describing the expectation that I’m having and if I don’t give detail on those expectations I’m giving over my agency to whomever is going to build the tool. 

And the same thing applies to AI coding — you can’t just code in the dark, or not know how the systems interact and get to something usable. Even when you DO know all of that and have the ability to architect a system even if you can’t code it, you still have to understand how software is developed. 

It was very validating in that my opinion has always been that the meme that started when AI code generation tools were out there of, “if you have to tell AI tools exactly what you want with detailed and correct and unchanging requirements in order to replace developers… developers are very safe.” 

---

And I know that most of this is probably a “duh Scott, every article says the same damn thing, why is this any different” moment lol. But I want to frame this slightly differently, which is that AI isn’t a threat to our jobs right now. The emphasis being “right now”. 

It’s not that it’s a threat in the future either, but I can see the potential if people learn the wrong lessons from the utility of AI at this moment or going forward. 

AI tools shouldn’t be developed to replace the need for human thought or interaction, because AI isn’t good at either of those, and those are the reasons that humans have toe exist. We don’t have specific utility to the world or a reason beyond the fact that we enjoy existing and want to exist in a world with people that we like. 

So giving over those abilities to an AI is antithetical to human existence and not something we should be doing. 

But what AI tools should be developed for is the same things tools have always been developed for - to make the difficult easier and to make the mundane less mundane. 

Let’s use an historical example - compare the pulley system to AI. Pulleys allowed people to lift incredibly heavy objects with ease. AI similarly can help us to lift heavy data sets with ease, analyzing what’s in them and providing us the detail without spending hours or days or more combing through them. Like with the pulley, there are dangers — if you try to life something to big with a pulley the rope could snap and break whatever you’re trying to lift! Or hurt someone underneath it! And with AI it could just hallucinate an outcome because the data set is so large it starts making assumptions rather than providing detail! And with the pulley there are safeguards, you can put a weight restriction notice on it, you can put signs up that say “don’t walk here” and help people to not be in danger. Similarly you can ask AI to provide you with documentation to prove that it’s telling you the truth (my favorite prompts all include “cite your sources” because otherwise you never know what it’s actually telling the truth about lol). 

But if tomorrow I decided that the pulley needed to be in every product that we make because DUDE YOU CAN FEEL SO STRONG WITH IT YOU CAN LIFT ANYTHING that just… wouldn’t make sense? Like cool that my minivan has a pulley and all but… what do you think I’m lifting out here my guy (I feel like gendering here is totally appropriate because no woman would ever come up with SUCH a dumb idea but dudes would talk themselves into it in a heartbeat… come back for more random gendering rules by Scott next week assuming I don’t get canceled lol). 

And that’s the state we’re in with AI. We’re just slapping it on everything hoping it sticks. And I think it’s missing the fundamental “but what about the people using it” questions. I had to make up my own way of developing a piece of software with Claude, because it “can do anything”, but does it NEED to do anything? Couldn’t we just write a small language model for specific contexts? Could I have used a model to build my front end, and a different model for the backend, and then a third model to write the integration layer? Or does it all need to be one model?

And I’m not asking this because I specifically have an answer to these questions, but rather because I feel like they’re not even being asked. We should be asking ourselves why we’re doing things and where the utility comes in and is the value worthy of the cost, but instead it’s just franks red hot, where you’re putting that shit on everything. 

Which is where we realize that the problem with AI isn’t technology. It’s empathy. We’re thinking about what the AI can do rather than, what is a person going to use it for. I spend a lot of time thinking about AI from how to use it to where it’s going to be most effective, but most of all, I think about why someone would or wouldn’t use it. 

I wish that we’d see more thought leadership around value and less thought leadership around capabilities and looked closer at how is this revolutionary technology (and I’m gonna cave and say I do actually think it’s revolutionary, even if I think the people like Sam Altman and Elon Musk touting it as revolutionary are charlatans who have no idea what they’re doing) can actually improve human lives, rather than how to make the latest dumb ass AI slop video of the president shitting on America.
