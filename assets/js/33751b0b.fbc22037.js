"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6354],{7522:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(9901);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(5402),r=(a(9901),a(7522));const i={sidebar_position:1},o="About",s={unversionedId:"launch-params/init-data/about",id:"launch-params/init-data/about",title:"About",description:"Init data is a rather important part of Telegram's platform. In simple terms,",source:"@site/docs/launch-params/init-data/about.md",sourceDirName:"launch-params/init-data",slug:"/launch-params/init-data/about",permalink:"/twa/docs/launch-params/init-data/about",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Init data",permalink:"/twa/docs/category/init-data"},next:{title:"Object types",permalink:"/twa/docs/launch-params/init-data/object-types"}},p={},l=[{value:"Extraction",id:"extraction",level:2},{value:"Sending to server",id:"sending-to-server",level:2},{value:"Libraries and examples",id:"libraries-and-examples",level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about"},"About"),(0,r.kt)("p",null,"Init data is a rather important part of Telegram's platform. In simple terms,\ninit data is a set of properties, which contains useful information about the\ncurrent Web App launch. You could use this information to identify users on the\nserver side. Thanks to Telegram, it provides a special init data\nsignature ",(0,r.kt)("a",{parentName:"p",href:"https://core.telegram.org/bots/webapps#validating-data-received-via-the-web-app"},"verification flow"),"\nvia pseudocode."),(0,r.kt)("h2",{id:"extraction"},"Extraction"),(0,r.kt)("p",null,"The easiest way to pass init data to the application and allow its usage while\nexecuting javascript code is to specify it in the application URL. That's why\nTelegram Web Apps uses this way. As long as init data is one of the launch\nparameters, you could extract it this way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// Get \"tgWebAppData\" launch parameter.\nconst param = new URLSearchParams(window.location.hash.slice(1)).get('tgWebAppData');\n\n// Convert it to more appropriate form.\nconst initData = new URLSearchParams(param);\n\n// Get \"hash\" property.\nconsole.log(initData.get('hash')); // 4975e881a0347264512f6047e1f3d698cbd2...\n")),(0,r.kt)("h2",{id:"sending-to-server"},"Sending to server"),(0,r.kt)("p",null,"One of the main features of init data is it could be used as an authorization\nfactor. It means you could use it to identify requesting clients. As long as\ninit data is always signed by Telegram bot secret token (sign is placed\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," property), you could always verify it and trust its properties. The\nbest way to pass init data to your server is to specify it in some header. Here\ncomes the example in JavaScript with ",(0,r.kt)("inlineCode",{parentName:"p"},"axios")," library usage:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import axios from 'axios';\n\nconst initData = new URLSearchParams(window.location.hash.slice(1)).get('tgWebAppData');\n\nif (initData === null) {\n  throw new Error('Ooof! Something is wrong. Are we in Telegram?');\n}\n\n// Create axios instance.  \nconst http = axios.create({\n  headers: {\n    // Append authorization header. \n    Authorization: `Bearer ${initData}`,\n  }\n});\n\n// Now, in case we use this instance to perform requests, \n// authorization header will be automatically appended. \n// The next thing we have to do is just verify it on server side.  \n")),(0,r.kt)("h2",{id:"libraries-and-examples"},"Libraries and examples"),(0,r.kt)("p",null,"Not to waste your time, you could use our libraries via different programming\nlanguages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Telegram-Web-Apps/twa/tree/master/packages/init-data"},"TypeScript"),"\n(NodeJS and browser)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Telegram-Web-Apps/init-data-golang"},"GoLang"))))}u.isMDXComponent=!0}}]);