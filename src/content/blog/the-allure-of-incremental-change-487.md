---
title: "The Allure of Incremental Change"
description: "Diving Deep into the Bullshit"
pubDate: 2025-11-13
---
Let’s just start with this… I’m still angry. I’m still annoyed. And I still hate Incremental Change over big bold change.

I also recognize that I’m not always right (I mean, intellectually I get that, but if you’ve ever talked to me you know… I certainly act like I’m always right lol). So while I’m here to rant and rave and tell you all the reasons I’m right (I am), I also have to show my work a little and give some examples. 

And it’s interesting looking more into the “does the research back up my gut”. Because often you have to consult your gut but not necessarily believe it lol. But I’ve lived enough of these examples that I felt like there was some validity to the fact that incremental change isn’t as effective as we believe it is. Then you start to look at the research and realize… it’s actually worse than my gut even said. It’s not just that incremental change isn’t effective… it actually leads to worse outcomes! 

It’s counter intuitive for people who haven’t lived it. Why would a big bang change be better? Why can’t I make some small steps to get closer? Aren’t we always talking about little changes having big impacts (my hashtag in peloton is literally BetterEveryday to channel my inner James Clear and his 1% better concept). And the problem is, that there’s elements that can make either the big bang or the incremental change MORE effective, but one method encourages it more than the other!

[Subscribe now](https://scottacampagna.substack.com/subscribe?)

---

So let’s reframe one of the examples from yesterday and look at it from the lens of data to validate the experience that I had! When I took over working on the platform that supported the FIS mobile solution, that was the three different obfuscation layers, leading to more and more chaos and bloated releases… 

There were a number of incremental changes that started a chain reaction that led to where we ended up. Small improvements to add new functionality, small improvements to performance, small improvements to deployments to make them more efficient, all the things that incremental change dictates, we did. 

But this is why the term “technical debt” was coined - to better illustrate how little issues accumulate to create larger issues. Each time we made a little change we increased the overall complexity of the system. We created fragility where we once had strong foundations. As we kept old systems alive, we relied more and more on experts who were irreplaceable. That leads to higher costs of maintenance. And even more unpredictable outcomes. 

The problem, is that the business view isn’t as clear cut as that description would make it appear! 

From the business perspective, the cost of maintenance ends up staying the same, but the cost of new work increases, making it seem like the problem doesn’t lie within an approach or anything that has to do with the way we’re running the business but rather that the engineering team isn’t “good enough” to do what’s being asked at the price it’s being asked for! 

But really, it’s the fault of the business decisions not the skill of the team that’s causing problems! 

---

When looking for evidence to back up my supposition, the first thing you find is, there’s a lot of it lol. And it’s been around for a while! It’s not just people touting ideas of agile either (though there are plenty of those and I’ll definitely use them as an example lol). 

That being said, I also have to admit… I’m being really dogmatic in my opinions. I’m sitting here saying THIS WAY IS RIGHT AND THAT WAY IS WRONG! And we all know the world is more complex than that. So let’s lean into that complexity. Starting by thinking about this not from a purely technical perspective but from an organizational perspective. 

I was reading a paper written in the 1990s that focused on the idea of organizational change management, and it’s making the (probably right lol) argument that neither massive impactful or incremental change are inherently better ideas. And at first my response was “FUCK YOU I WANT TO BE RIGHT”, and I think that I still am, but it’s because I think that the thesis I was using was wrong lol. 

It’s not really about big change vs incremental change. It’s about the business mindset that typically follows those advocating for incremental change - the lack of intentionality. The [article](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Organizational_Learning_and_Change/Weick_&_Quinn_1999_Organizational_change_and_devlopment.pdf) had this specific quote that hit me: “Small changes do not stay small, as complexity theory and the second cybernetics (Maruyama 1963) make clear. Small changes can be decisive if they occur at the edge of chaos. Furthermore, in interconnected systems, there is no such thing as a marginal change”.

Look at this in the context of the FIS example — we were making “small” changes, but they weren’t REALLY small, they were incredibly impactful! And then because they were interconnected systems, they were impactful to those other systems as well! And because we were perpetually on the edge of chaos, they ended up being decisive changes that we couldn’t back track from! 

It’s not that it was incremental that was the problem, it’s that it wasn’t done with intentionality for where we wanted to go next and why we were doing what we were doing beyond “we gotta keep making money”. 

Ironically, at this same time, FIS explored the idea of just dumping our existing tech and buying a start up to solve all our problems. And I didn’t even explore that here because my thought was “that’s dumb we all knew that wouldn’t work” but then in that same article they drop this nugget: “Beer et al (1990) demonstrate that replacement of one program with another seldom works. The problem with such a logic is that it restricts change to either-or thinking” (p. 370). Which is exactly what happened! We didn’t explore what our options were, we just had to look at either the existing solution or a new solution. Neither of which were the right decision in the end. 

---

So if we reframe this to more of intentionality wins over reactivity, I think it still fits into the larger discussion, mainly because it takes some level of intentionality to make big change that isn’t required from the incremental change. You can just keep doing what you’re doing and hope for the best! 

Put it another way, you’re forced to put skin in the game when you make a big change. You are admitting the need for a shift. You’re putting yourself out there. 

Typically the risk averse tend to pick incrementalism. It doesn’t require the admission of failure, or admission of need of change, and allows you to continue doing all the things you’re already doing without experiencing any pain or discomfort. 

But the problem is, typically if you’re resisting change, it’s not because things are going well. People don’t start getting proposals for massive disruption when things are going swell. It’s when they’re really starting to show the cracks that we start needing some change. 

Looking at it from a technical perspective, there’s a ton of research talking about how we deal with technical debt and how we can effectively manage it, and the consistent themes are that if you’re in a situation of high complexity or uncertainty, it’s actually more effective and appropriate to make massive change rather than small change. 

That goes back to the quote around small changes actually having big impact in complex situations. If you have a complex system, and you want to make incremental changes, you’re not actually making incremental changes. You’re making massive changes, it’s just that your impact is minimal. Because the amount of change might be small, but the number of places you’re needing to make it or the way you need to implement it isn’t small! 

---

There’s a great [medium article](https://medium.com/@anil.goyal0057/refactor-reengineer-rewrite-choosing-the-right-path-for-software-evolution-f9f999940983) that details when it’s right to make the decisions to refactor vs re-engineer vs rewrite, and while it gives some great concrete examples, what it’s really advocating is exactly this idea of intentionality. We tend to make technical decisions and assume that there’s a “right” and “wrong” decision. But since we’re exploring complexity here, the idea is flawed because any decision can be made to be right or made to be wrong in the implementation. 

What you end up realizing as we’re going through and making changes, engineers tend to have specific feelings about how things should be done just based on their own experiences. And they tend to have concrete examples of why. This particular article is no different, he even summarizes everything in the end:

> **Refactoring**: Small, internal improvements within a single room (kitchen) to make it more organized and maintainable without any structural changes.**Reengineering**: Remodeling by expanding or modifying adjacent rooms to improve functionality, while keeping the overall house intact.**Rewriting**: Demolishing and rebuilding the entire house to meet new requirements that can’t be achieved with incremental changes.

But I think even this is too simple. Because if you are building software, especially enterprise grade software, how often are you coming across small improvements that are just organizational but not structural? Not often! 

And often, every project would fall into the re-engineering realm of this description! 

And almost nothing turns into rewriting without a significant political coup. 

So, the only way to really focus on creating better outcomes, is to be more intentional. 

---

I know we swerved a little but let’s land this plane in the land of intentionality.

I think that my frustration with the incrementalism at FIS and again the incrementalism of the Senate Dems who voted to reopen the government was actually a frustration with a lack of intentionality. 

Literally as I’m writing this, I’m remembering asking for pause periods. Times for us to not work on development but rather to stop, reorient around our objectives, and identify the next steps to get to the goal. It’s literally what I do every day at work now, try to reframe issues and opportunities into intentionality. And the reason I do it, is because I’ve seen it work. If you have a goal and orient all of your activities and expectations around the goal, you’re more likely to achieve it! If you have a goal and just do some stuff and hope it works out… you’ll have a lot less success.

FIS wasn’t intentional about how to maintain a long term vision for their middleware layers. If they were, they would have been working to dismantle them. They would have had a plan to make things better. But instead, I was in charge of it lol. And I didn’t know anything other than “this sounds harder than it should be”. 

And then the senate dems are the same. They were willing to go along with the shutdown, but then couldn’t figure out what the goal was they were trying to achieve. They didn’t hold the line because they literally didn’t understand the line and didn’t want to try to identify anything beyond “people might yell at me”. (I know I’m not being generous… but none of those senators are worthy of my generosity, so I don’t feel bad)

So maybe it’s not as bad as I’ve said to be an incrementalist. It’s just bad if it lacks intentionality. And it’s especially bad if it’s lacking intentionality due to intellectual laziness or an incentive structure that doesn’t support the goals we’re trying to achieve. 

Maybe I’m not right all the time though. Maybe we should just throw the baby out with the bath water and get rid of incremental thinking to force people to be more intentional anyway. 

I don’t know. But I know that either way, you gotta have not just a budget but a point of view if you want to be successful in software engineering and business.
