"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[621],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),l=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?i.createElement(h,a(a({ref:t},c),{},{components:n})):i.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3587:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(5402),r=(n(9901),n(7522));const o={},a="Viewport",s={unversionedId:"libraries/twa-sdk/components/viewport",id:"libraries/twa-sdk/components/viewport",title:"Viewport",description:"Contains information about current Web App device viewport, its dimensions and",source:"@site/docs/libraries/twa-sdk/components/viewport.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/viewport",permalink:"/twa/docs/libraries/twa-sdk/components/viewport",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"ThemeParams",permalink:"/twa/docs/libraries/twa-sdk/components/theme-params"},next:{title:"WebApp",permalink:"/twa/docs/libraries/twa-sdk/components/web-app"}},p={},l=[{value:"Init",id:"init",level:2},{value:"Dimensions",id:"dimensions",level:2},{value:"Requesting viewport information",id:"requesting-viewport-information",level:2},{value:"Creating synchronized instance",id:"creating-synchronized-instance",level:2},{value:"Events",id:"events",level:2}],c={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"viewport"},(0,r.kt)("inlineCode",{parentName:"h1"},"Viewport")),(0,r.kt)("p",null,"Contains information about current Web App device viewport, its dimensions and\nstate."),(0,r.kt)("h2",{id:"init"},"Init"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Viewport} from '@twa.js/sdk';  \nimport {init} from '@twa.js/bridge';  \n  \n// Specify bridge instance, height, width, stable height and\n// expansion status.\nconst viewport = new Viewport(\n  init(), 390, 365, 300, false,\n);  \n")),(0,r.kt)("h2",{id:"dimensions"},"Dimensions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," instance contains information about viewport dimensions. We can\nget current visible are height and width via ",(0,r.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"width")," properties."),(0,r.kt)("p",null,'The application can display just the top part of the Web App, with its lower\npart remaining outside the screen area. From this position, the user can "pull"\nthe Web App to its maximum height, while the bot can do the same by\ncalling ',(0,r.kt)("inlineCode",{parentName:"p"},"expand")," method (use ",(0,r.kt)("inlineCode",{parentName:"p"},"isExpanded")," prop to get current expansion state).\nAs the position of the Web App changes, the current height value of the visible\narea will be updated in real time."),(0,r.kt)("p",null,"Please note that the refresh rate of this value is not sufficient to smoothly\nfollow the lower border of the window. It should not be used to pin interface\nelements to the bottom of the visible area. It's more appropriate to use the\nvalue of the ",(0,r.kt)("inlineCode",{parentName:"p"},"stableHeight")," field for this purpose."),(0,r.kt)("h2",{id:"requesting-viewport-information"},"Requesting viewport information"),(0,r.kt)("p",null,"To get fresh viewport information, you could use static ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Viewport} from '@twa.js/sdk';\nimport {init} from '@twa.js/bridge';\n\nViewport.request(init()).then(console.log);\n\n// Output:\n// { height: 122, isExpanded: false, width: 375, isStateStable: true }\n")),(0,r.kt)("h2",{id:"creating-synchronized-instance"},"Creating synchronized instance"),(0,r.kt)("p",null,"Class is capable of returning instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"Viewport")," which\nis synchronized with its actual state in Telegram application. To\nget it, use static ",(0,r.kt)("inlineCode",{parentName:"p"},"synced()")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Viewport} from '@twa.js/sdk';\nimport {init} from '@twa.js/bridge';\n\nconst viewport = Viewport.synced(\n  init(), 390, 365, 300, false,\n);\n\n// viewport will be automatically updated in case, \n// Telegram changed viewport.\n\nconsole.log(viewport.height); // 390\nconsole.log(viewport.stableHeight); // 300\nconsole.log(viewport.width); // 365\nconsole.log(viewport.isExpanded); // false\nconsole.log(viewport.isStable); // false\n")),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("p",null,"Events available for ",(0,r.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"heightChanged: (height: number) => void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"widthChanged: (width: number) => void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stableHeightChanged: (stableHeight: number) => void")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expansionChanged: (isExpanded: boolean) => void"))))}d.isMDXComponent=!0}}]);