"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[415],{7522:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(9901);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(5402),r=(a(9901),a(7522));const i={},o="InitData",s={unversionedId:"libraries/twa-sdk/components/init-data",id:"libraries/twa-sdk/components/init-data",title:"InitData",description:"[user-ref]//github.com/Telegram-Web-Apps/twa/blob/master/packages/init-data/src/types.ts#L5",source:"@site/docs/libraries/twa-sdk/components/init-data.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/init-data",permalink:"/twa/docs/libraries/twa-sdk/components/init-data",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"HapticFeedback",permalink:"/twa/docs/libraries/twa-sdk/components/haptic-feedback"},next:{title:"Layout",permalink:"/twa/docs/libraries/twa-sdk/components/layout"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"<code>InitData</code>",id:"initdata-1",level:2},{value:"<code>authDate: Date</code>",id:"authdate-date",level:3},{value:"<code>canSendAfter: Date | null</code>",id:"cansendafter-date--null",level:3},{value:"<code>chat: Chat | null</code>",id:"chat-chat--null",level:3},{value:"<code>hash: string</code>",id:"hash-string",level:3},{value:"<code>queryId: string | null</code>",id:"queryid-string--null",level:3},{value:"<code>receiver: User | null</code>",id:"receiver-user--null",level:3},{value:"<code>raw: string</code>",id:"raw-string",level:3},{value:"<code>startParam: string | null</code>",id:"startparam-string--null",level:3},{value:"<code>user: User | null</code>",id:"user-user--null",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"initdata"},(0,r.kt)("inlineCode",{parentName:"h1"},"InitData")),(0,r.kt)("p",null,"The component which is responsible for displaying the Web Apps init data.\nThere is more information about this component in this\n",(0,r.kt)("a",{parentName:"p",href:"../../../launch-params/init-data/about"},"documentation"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"This class represents object with readonly properties. To create its new\ninstance, a developer could use the class constructor as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import {InitData} from '@twa.js/sdk';\n\nconst authDate = new Date();\nconst hash = 'myhash';\nconst initData = new InitData(authDate, hash, {\n  queryId: 'AAHdF6IQAAAAAN0Xoh',\n  // ...\n});\n")),(0,r.kt)("h2",{id:"initdata-1"},(0,r.kt)("inlineCode",{parentName:"h2"},"InitData")),(0,r.kt)("h3",{id:"authdate-date"},(0,r.kt)("inlineCode",{parentName:"h3"},"authDate: Date")),(0,r.kt)("p",null,"Init data generation date."),(0,r.kt)("h3",{id:"cansendafter-date--null"},(0,r.kt)("inlineCode",{parentName:"h3"},"canSendAfter: Date | null")),(0,r.kt)("p",null,"Date after which a message can be sent via\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#answerwebappquery"},"answerWebAppQuery"),"\nmethod."),(0,r.kt)("h3",{id:"chat-chat--null"},(0,r.kt)("code",null,"chat: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/Telegram-Web-Apps/twa/blob/master/packages/init-data/src/types.ts#L55"},"Chat")," | null")),(0,r.kt)("p",null,"An object containing data about the chat where the bot was launched via the\nattachment menu. Returned for supergroups, channels and group chats \u2013 only for\nWeb Apps launched via the attachment menu."),(0,r.kt)("h3",{id:"hash-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"hash: string")),(0,r.kt)("p",null,"A hash of all passed parameters, which the bot server can use\nto ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app"},"check their validity"),"\n."),(0,r.kt)("h3",{id:"queryid-string--null"},(0,r.kt)("inlineCode",{parentName:"h3"},"queryId: string | null")),(0,r.kt)("p",null,"A unique identifier for the Web App session, required for sending messages via\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/api#answerwebappquery"},"answerWebAppQuery"),"\nmethod."),(0,r.kt)("h3",{id:"receiver-user--null"},(0,r.kt)("code",null,"receiver: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/Telegram-Web-Apps/twa/blob/master/packages/init-data/src/types.ts#L5"},"User")," | null")),(0,r.kt)("p",null,"An object containing data about the chat partner of the current user in the chat\nwhere the bot was launched via the attachment menu. Returned only for private\nchats and only for Web Apps launched via the attachment menu."),(0,r.kt)("h3",{id:"raw-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"raw: string")),(0,r.kt)("p",null,"Raw representation of parsed init data. It is usually presented as JSON object\nconverted to string."),(0,r.kt)("h3",{id:"startparam-string--null"},(0,r.kt)("inlineCode",{parentName:"h3"},"startParam: string | null")),(0,r.kt)("p",null,"The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"startattach")," parameter,\npassed via ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/webapps#adding-bots-to-the-attachment-menu"},"link"),"\n. Only returned for Web Apps when launched from the attachment menu via link."),(0,r.kt)("h3",{id:"user-user--null"},(0,r.kt)("code",null,"user: ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/Telegram-Web-Apps/twa/blob/master/packages/init-data/src/types.ts#L5"},"User")," | null")),(0,r.kt)("p",null,"An object containing data about the current user."))}u.isMDXComponent=!0}}]);