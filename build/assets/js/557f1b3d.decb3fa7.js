"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[852],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=u(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||m[k]||l;return a?n.createElement(c,i(i({ref:e},s),{},{components:a})):n.createElement(c,i({ref:e},s))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7494:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_label:"Globals & Customization",sidebar_position:2},i="Globals & Customization",o={unversionedId:"customize",id:"customize",title:"Globals & Customization",description:"Let us start by learning about the most basic package - react-sf-themes. Use the react-sf-themes package to access the global configuration and the default theme provided by Superflows.",source:"@site/docs/customize.md",sourceDirName:".",slug:"/customize",permalink:"/docs/customize",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Globals & Customization",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/hello"},next:{title:"Building Blocks",permalink:"/docs/category/building-blocks"}},p={},u=[{value:"react-sf-themes",id:"react-sf-themes",level:2},{value:"How It Works",id:"how-it-works",level:2},{value:"Theme",id:"theme",level:2},{value:"Variants",id:"variants",level:3},{value:"Types",id:"types",level:3},{value:"Colors",id:"colors",level:3},{value:"Spaces",id:"spaces",level:3},{value:"Modes",id:"modes",level:2},{value:"InputTypes",id:"inputtypes",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3}],s={toc:u};function m(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"globals--customization"},"Globals & Customization"),(0,r.kt)("p",null,"Let us start by learning about the most basic package - react-sf-themes. Use the react-sf-themes package to access the global configuration and the default theme provided by Superflows."),(0,r.kt)("h2",{id:"react-sf-themes"},"react-sf-themes"),(0,r.kt)("p",null,"Use the react-sf-themes package to access the global configuration & default theme provided by Superflows. Then customize it further by changing the default values to suit your UI. "),(0,r.kt)("h2",{id:"how-it-works"},"How It Works"),(0,r.kt)("p",null,"Customization works as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Access the default configuration and theme values using this package"),(0,r.kt)("li",{parentName:"ul"},"Modify them as per your requirement"),(0,r.kt)("li",{parentName:"ul"},"Pass the modified object to your Superflows components")),(0,r.kt)("h2",{id:"theme"},"Theme"),(0,r.kt)("p",null,"This package provides default values for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Variants"),(0,r.kt)("li",{parentName:"ul"},"Types"),(0,r.kt)("li",{parentName:"ul"},"Colors"),(0,r.kt)("li",{parentName:"ul"},"Spaces"),(0,r.kt)("li",{parentName:"ul"},"Modes"),(0,r.kt)("li",{parentName:"ul"},"InputTypes")),(0,r.kt)("h3",{id:"variants"},"Variants"),(0,r.kt)("p",null,"Superflows provides the following variants: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Primary"),(0,r.kt)("li",{parentName:"ul"},"Secondary"),(0,r.kt)("li",{parentName:"ul"},"Danger"),(0,r.kt)("li",{parentName:"ul"},"Success"),(0,r.kt)("li",{parentName:"ul"},"Warning"),(0,r.kt)("li",{parentName:"ul"},"Info"),(0,r.kt)("li",{parentName:"ul"},"Light"),(0,r.kt)("li",{parentName:"ul"},"Dark")),(0,r.kt)("h3",{id:"types"},"Types"),(0,r.kt)("p",null,"Types are as followed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Filled"),(0,r.kt)("li",{parentName:"ul"},"Outlined")),(0,r.kt)("h3",{id:"colors"},"Colors"),(0,r.kt)("p",null,"Following colors are provided:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Variant"),(0,r.kt)("th",{parentName:"tr",align:null},"Background Color"),(0,r.kt)("th",{parentName:"tr",align:null},"Text Color"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Primary"),(0,r.kt)("td",{parentName:"tr",align:null},"#0d6efd"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffffff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Secondary"),(0,r.kt)("td",{parentName:"tr",align:null},"#6c757d"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffffff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Danger"),(0,r.kt)("td",{parentName:"tr",align:null},"#dc3545"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffffff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Success"),(0,r.kt)("td",{parentName:"tr",align:null},"#198754"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffffff")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Warning"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffc107"),(0,r.kt)("td",{parentName:"tr",align:null},"#000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Info"),(0,r.kt)("td",{parentName:"tr",align:null},"#0dcaf0"),(0,r.kt)("td",{parentName:"tr",align:null},"#000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Light"),(0,r.kt)("td",{parentName:"tr",align:null},"#f8f9fa"),(0,r.kt)("td",{parentName:"tr",align:null},"#000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dark"),(0,r.kt)("td",{parentName:"tr",align:null},"#212529"),(0,r.kt)("td",{parentName:"tr",align:null},"#ffffff")))),(0,r.kt)("h3",{id:"spaces"},"Spaces"),(0,r.kt)("p",null,"Spaces are dimensions, which are intended to be used for spacings, paddings, margins, etc."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Space"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"min"),(0,r.kt)("td",{parentName:"tr",align:null},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ltl"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mod"),(0,r.kt)("td",{parentName:"tr",align:null},"15")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"big"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lrg"),(0,r.kt)("td",{parentName:"tr",align:null},"25")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"xlg"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max"),(0,r.kt)("td",{parentName:"tr",align:null},"35")))),(0,r.kt)("h2",{id:"modes"},"Modes"),(0,r.kt)("p",null,"Modes are:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day"),(0,r.kt)("td",{parentName:"tr",align:null},"day")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Night"),(0,r.kt)("td",{parentName:"tr",align:null},"night")))),(0,r.kt)("h2",{id:"inputtypes"},"InputTypes"),(0,r.kt)("p",null,"Input types are types of input accepted from the users in the input field."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"InputType"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mobile"),(0,r.kt)("td",{parentName:"tr",align:null},"mobile")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date"),(0,r.kt)("td",{parentName:"tr",align:null},"date")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DateOfBirth"),(0,r.kt)("td",{parentName:"tr",align:null},"dateOfBirth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gender"),(0,r.kt)("td",{parentName:"tr",align:null},"gender")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SearchString"),(0,r.kt)("td",{parentName:"tr",align:null},"searchString")))),(0,r.kt)("h2",{id:"quickstart"},"Quickstart"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-sf-themes\n")),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport Themes from 'react-sf-themes'\n\nconst App = () => {\n\n  console.log('Themes', Themes.getTheme());\n\n  return <div></div>\n}\n\nexport default App\n\n")))}m.isMDXComponent=!0}}]);