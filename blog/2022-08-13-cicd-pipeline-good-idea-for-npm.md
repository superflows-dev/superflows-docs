---
title: CI/CD pipeline for an NPM package, is it a good idea?
description: CI/CD pipeline for an NPM package, is it a good idea?
slug: cicd-pipeline-for-npm-good-idea
authors: hrushi
tags: [cicd, continuous integration, continuous delivery, software development, cloud, npm, github]
image: https://miro.medium.com/max/1400/1*Ymn4qf1YoRdpTQDkeypaWQ.png
hide_table_of_contents: false
---

# CI/CD pipeline for an NPM package, is it a good idea?

<img src="https://miro.medium.com/max/1400/1*Ymn4qf1YoRdpTQDkeypaWQ.png" height="500" width="500" /> 

Rather than bigger and spaced out software releases, companies have lately gotten better results with quicker incremental software releases. Shorter release cycles help get user feedback earlier. Effects of bugs & erroneous decisions also stay contained. In short, good features get milked faster and the damage from bad things gets rectified sooner. Overall, resulting in better software delivery. CI / CD, or the continuous integration / continuous deployment, takes this approach to its extreme.

This article discusses the possibility of using the CI / CD pipeline to develop NPM packages. There isn’t a generic YES / NO answer to this question. The answer varies case to case. However, it is important to understand what goes in making this decision, such as the various factors and trade-offs involved.

## What is CI / CD?

CI / CD takes the agile software methodology to its extreme. Agile enabled us to release weekly, bi-weekly or monthly. With CI / CD, we can now have daily software releases.

The base of CI / CD, is automation. In a typical CI / CD project — (1) before writing new code, the developer ensures that all the prior code is covered under automated unit tests, (2) tester relies on automated integration tests and (3) the devops engineer automates the deployment mechanism.

(1) and (2) ensures that the newly code written has no unintended consequences. (3) eliminates manual deployment errors, enables canary releases and graceful rollbacks.

## Advantages of CI / CD

**Faster User Feedback** — CI / CD release cycles are extremely short, hence user feedback is received earlier.

**Lesser & Isolated Errors** — Because of automation in testing and deployment, possibility of errors reduces. Faults, if any, can be quickly isolated and resolved.

**Quality delivery** — CI / CD brings control, efficiency, transparency and accountability to software development, ultimately resulting in a good quality delivery.

## Disadvantages of CI / CD

**Increased Complexity** — CI / CD is automation-driven, hence requires highly skilled resources and sophisticated instrumentation. In a project that is based on multiple tech-stacks, things can get complicated quickly.

**Operational Difficulties With Larger Teams** — CI / CD works well with smaller teams (less than 10 people). For larger projects with larger teams, work needs to be efficiently broken down and handed over to smaller teams for execution. This presents operational difficulties.

## CI / CD pipeline for an NPM package

Let us take an example of a React package, called <a href="https://www.npmjs.com/package/react-upload-to-s3">react-upload-to-s3</a>. It is an all-in-one react-only component for uploading images, documents and videos to AWS S3.

CI / CD pipeline for such a project would look like the following

<img src="https://miro.medium.com/max/1400/1*3myMwrIUmmOr9yGh-aqPww.png" height="500" width="500" />

## Factors & trade-offs

There are several factors, which need to be considered to decide whether CI / CD is the right approach for your npm project.

**New project or on-going project?** — If your project is an on-going project, then setting up CI / CD is going to be a relatively difficult task. It is not impossible, but the migration from a traditional deployment pipeline to a CI / CD pipeline, will be slow and your interim costs would be higher. If you are starting from scratch on a new project, then you can definitely go for a CI / CD approach!

**Resourcing** — CI / CD requires highly skilled developers, testers and devops engineers. Do you have such people on your team? Your developers should be able to write unit tests, ideally covering 100 percent of the code. Your testers should be experienced in writing automated tests for integration and regression. Your devops team should be able to automate the deployment process under varying load conditions, for varying scalability requirements and against different business scenarios & asks. If you have such a team, then go for it! If you don’t, first build this capability by getting such people on-board, and then considering CI / CD.

**Size of the project** — How big is your project? In terms on resourcing, how many developers and engineers would you need to complete the project? It is observed that CI / CD gives good results with smaller teams. Typically less than ten people per team is perfect for CI / CD. Is your team size going to be bigger than this? If yes, you’ll have to break down the work in smaller sized teams. But mind you, breaking down would then further give rise to operational difficulties. What could they be? Do you have a grasp? How do you plan to iron them out? You will need to thoroughly answer these questions before deciding to take the CI / CD approach with larger projects. For smaller project, CI / CD is a no brainer.

**Software architecture** — Automation testing is the foundational principle of the CI / CD approach. Is your code testable? Is the separation of concerns done properly? Do the unit tests cover almost 100 percent of the code? How have you architected the client and the services? Are the interfaces clearly defined and documented? Do you have a test suite ready for the backend services as well?

There are many other factors as well, but most of them are the derivatives of these afore-mentioned important factors.

## Conclusion

If you are starting off a new project with a skilled team of 10 people or lesser, then CI / CD is a no brainer for you. Just got for it! Not only will it improve your software delivery, it will also help you optimize costs long term! In all other cases, understand the above decision making factors from the context of your project requirements and make an informed judgement.

