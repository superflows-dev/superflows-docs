"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[206],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return o?a.createElement(g,i(i({ref:t},p),{},{components:o})):a.createElement(g,i({ref:t},p))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=o[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},943:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=o(7462),n=(o(7294),o(3905));const r={title:"CI/CD pipeline for an NPM package, is it a good idea?",description:"CI/CD pipeline for an NPM package, is it a good idea?",slug:"cicd-pipeline-for-npm-good-idea",authors:"hrushi",tags:["cicd","continuous integration","continuous delivery","software development","cloud","npm","github"],image:"https://miro.medium.com/max/1400/1*Ymn4qf1YoRdpTQDkeypaWQ.png",hide_table_of_contents:!1},i="CI/CD pipeline for an NPM package, is it a good idea?",s={permalink:"/blog/cicd-pipeline-for-npm-good-idea",source:"@site/blog/2022-08-13-cicd-pipeline-good-idea-for-npm.md",title:"CI/CD pipeline for an NPM package, is it a good idea?",description:"CI/CD pipeline for an NPM package, is it a good idea?",date:"2022-08-13T00:00:00.000Z",formattedDate:"August 13, 2022",tags:[{label:"cicd",permalink:"/blog/tags/cicd"},{label:"continuous integration",permalink:"/blog/tags/continuous-integration"},{label:"continuous delivery",permalink:"/blog/tags/continuous-delivery"},{label:"software development",permalink:"/blog/tags/software-development"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"npm",permalink:"/blog/tags/npm"},{label:"github",permalink:"/blog/tags/github"}],readingTime:4.735,hasTruncateMarker:!1,authors:[{name:"Hrushi M",title:"Developer and Maintainer of Superflows",url:"https://github.com/superflows-dev",imageURL:"https://miro.medium.com/fit/c/88/88/1*FV18io_0JxkANnicq5tgXw.jpeg",key:"hrushi"}],frontMatter:{title:"CI/CD pipeline for an NPM package, is it a good idea?",description:"CI/CD pipeline for an NPM package, is it a good idea?",slug:"cicd-pipeline-for-npm-good-idea",authors:"hrushi",tags:["cicd","continuous integration","continuous delivery","software development","cloud","npm","github"],image:"https://miro.medium.com/max/1400/1*Ymn4qf1YoRdpTQDkeypaWQ.png",hide_table_of_contents:!1},prevItem:{title:"The Thing that differentiates Engineers from the rest",permalink:"/blog/what-differentiates-engineers"}},l={authorsImageUrls:[void 0]},c=[{value:"What is CI / CD?",id:"what-is-ci--cd",level:2},{value:"Advantages of CI / CD",id:"advantages-of-ci--cd",level:2},{value:"Disadvantages of CI / CD",id:"disadvantages-of-ci--cd",level:2},{value:"CI / CD pipeline for an NPM package",id:"ci--cd-pipeline-for-an-npm-package",level:2},{value:"Factors &amp; trade-offs",id:"factors--trade-offs",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"https://miro.medium.com/max/1400/1*Ymn4qf1YoRdpTQDkeypaWQ.png",height:"500",width:"500"}),(0,n.kt)("p",null,"Rather than bigger and spaced out software releases, companies have lately gotten better results with quicker incremental software releases. Shorter release cycles help get user feedback earlier. Effects of bugs & erroneous decisions also stay contained. In short, good features get milked faster and the damage from bad things gets rectified sooner. Overall, resulting in better software delivery. CI / CD, or the continuous integration / continuous deployment, takes this approach to its extreme."),(0,n.kt)("p",null,"This article discusses the possibility of using the CI / CD pipeline to develop NPM packages. There isn\u2019t a generic YES / NO answer to this question. The answer varies case to case. However, it is important to understand what goes in making this decision, such as the various factors and trade-offs involved."),(0,n.kt)("h2",{id:"what-is-ci--cd"},"What is CI / CD?"),(0,n.kt)("p",null,"CI / CD takes the agile software methodology to its extreme. Agile enabled us to release weekly, bi-weekly or monthly. With CI / CD, we can now have daily software releases."),(0,n.kt)("p",null,"The base of CI / CD, is automation. In a typical CI / CD project \u2014 (1) before writing new code, the developer ensures that all the prior code is covered under automated unit tests, (2) tester relies on automated integration tests and (3) the devops engineer automates the deployment mechanism."),(0,n.kt)("p",null,"(1) and (2) ensures that the newly code written has no unintended consequences. (3) eliminates manual deployment errors, enables canary releases and graceful rollbacks."),(0,n.kt)("h2",{id:"advantages-of-ci--cd"},"Advantages of CI / CD"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Faster User Feedback")," \u2014 CI / CD release cycles are extremely short, hence user feedback is received earlier."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Lesser & Isolated Errors")," \u2014 Because of automation in testing and deployment, possibility of errors reduces. Faults, if any, can be quickly isolated and resolved."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Quality delivery")," \u2014 CI / CD brings control, efficiency, transparency and accountability to software development, ultimately resulting in a good quality delivery."),(0,n.kt)("h2",{id:"disadvantages-of-ci--cd"},"Disadvantages of CI / CD"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Increased Complexity")," \u2014 CI / CD is automation-driven, hence requires highly skilled resources and sophisticated instrumentation. In a project that is based on multiple tech-stacks, things can get complicated quickly."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Operational Difficulties With Larger Teams")," \u2014 CI / CD works well with smaller teams (less than 10 people). For larger projects with larger teams, work needs to be efficiently broken down and handed over to smaller teams for execution. This presents operational difficulties."),(0,n.kt)("h2",{id:"ci--cd-pipeline-for-an-npm-package"},"CI / CD pipeline for an NPM package"),(0,n.kt)("p",null,"Let us take an example of a React package, called ",(0,n.kt)("a",{href:"https://www.npmjs.com/package/react-upload-to-s3"},"react-upload-to-s3"),". It is an all-in-one react-only component for uploading images, documents and videos to AWS S3."),(0,n.kt)("p",null,"CI / CD pipeline for such a project would look like the following"),(0,n.kt)("img",{src:"https://miro.medium.com/max/1400/1*3myMwrIUmmOr9yGh-aqPww.png",height:"500",width:"500"}),(0,n.kt)("h2",{id:"factors--trade-offs"},"Factors & trade-offs"),(0,n.kt)("p",null,"There are several factors, which need to be considered to decide whether CI / CD is the right approach for your npm project."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"New project or on-going project?")," \u2014 If your project is an on-going project, then setting up CI / CD is going to be a relatively difficult task. It is not impossible, but the migration from a traditional deployment pipeline to a CI / CD pipeline, will be slow and your interim costs would be higher. If you are starting from scratch on a new project, then you can definitely go for a CI / CD approach!"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resourcing")," \u2014 CI / CD requires highly skilled developers, testers and devops engineers. Do you have such people on your team? Your developers should be able to write unit tests, ideally covering 100 percent of the code. Your testers should be experienced in writing automated tests for integration and regression. Your devops team should be able to automate the deployment process under varying load conditions, for varying scalability requirements and against different business scenarios & asks. If you have such a team, then go for it! If you don\u2019t, first build this capability by getting such people on-board, and then considering CI / CD."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Size of the project")," \u2014 How big is your project? In terms on resourcing, how many developers and engineers would you need to complete the project? It is observed that CI / CD gives good results with smaller teams. Typically less than ten people per team is perfect for CI / CD. Is your team size going to be bigger than this? If yes, you\u2019ll have to break down the work in smaller sized teams. But mind you, breaking down would then further give rise to operational difficulties. What could they be? Do you have a grasp? How do you plan to iron them out? You will need to thoroughly answer these questions before deciding to take the CI / CD approach with larger projects. For smaller project, CI / CD is a no brainer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software architecture")," \u2014 Automation testing is the foundational principle of the CI / CD approach. Is your code testable? Is the separation of concerns done properly? Do the unit tests cover almost 100 percent of the code? How have you architected the client and the services? Are the interfaces clearly defined and documented? Do you have a test suite ready for the backend services as well?"),(0,n.kt)("p",null,"There are many other factors as well, but most of them are the derivatives of these afore-mentioned important factors."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"If you are starting off a new project with a skilled team of 10 people or lesser, then CI / CD is a no brainer for you. Just got for it! Not only will it improve your software delivery, it will also help you optimize costs long term! In all other cases, understand the above decision making factors from the context of your project requirements and make an informed judgement."))}d.isMDXComponent=!0}}]);