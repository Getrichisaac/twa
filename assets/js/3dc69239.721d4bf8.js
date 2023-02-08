"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[131],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(5402),a=(n(9901),n(7522));const i={},o="ThemeParams",l={unversionedId:"libraries/twa-sdk/components/theme-params",id:"libraries/twa-sdk/components/theme-params",title:"ThemeParams",description:"Contains information about currently used theme by application.",source:"@site/docs/libraries/twa-sdk/components/theme-params.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/theme-params",permalink:"/twa/docs/libraries/twa-sdk/components/theme-params",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"QRScanner",permalink:"/twa/docs/libraries/twa-sdk/components/qr-scanner"},next:{title:"Viewport",permalink:"/twa/docs/libraries/twa-sdk/components/viewport"}},s={},p=[{value:"Init",id:"init",level:2},{value:"Requesting fresh theme params",id:"requesting-fresh-theme-params",level:2},{value:"Creating synchronized instance",id:"creating-synchronized-instance",level:2},{value:"Colors",id:"colors",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"themeparams"},(0,a.kt)("inlineCode",{parentName:"h1"},"ThemeParams")),(0,a.kt)("p",null,"Contains information about currently used theme by application."),(0,a.kt)("p",null,"To learn more, visit description of this feature\nin ",(0,a.kt)("a",{parentName:"p",href:"../../../features/theme"},"documentation"),"."),(0,a.kt)("h2",{id:"init"},"Init"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ThemeParams} from '@twa.js/sdk';\n  \nconst themeParams = new ThemeParams({});  \n")),(0,a.kt)("h2",{id:"requesting-fresh-theme-params"},"Requesting fresh theme params"),(0,a.kt)("p",null,"To get fresh theme parameters information, you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," static\nfunction. It will return ",(0,a.kt)("inlineCode",{parentName:"p"},"TwaThemeParams")," interface from ",(0,a.kt)("inlineCode",{parentName:"p"},"twa-theme-params"),"\npackage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {init} from '@twa.js/bridge';\n\nThemeParams.request(init()).then(console.log);\n\n// Output:\n// { backgroundColor: '#aabbcc', ... }\n")),(0,a.kt)("h2",{id:"creating-synchronized-instance"},"Creating synchronized instance"),(0,a.kt)("p",null,"Class is capable of returning instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ThemeParams")," which\nis synchronized with its actual state in Telegram application. To\nget it, use static ",(0,a.kt)("inlineCode",{parentName:"p"},"synced()")," method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import {ThemeParams} from '@twa.js/sdk';\nimport {init} from '@twa.js/bridge';\n\nconst tp = ThemeParams.synced(init(), {});\n\n// tp will be automatically updated in case, Telegram changed\n// theme parameters.\n")),(0,a.kt)("h2",{id:"colors"},"Colors"),(0,a.kt)("p",null,"Class contains list of colors, which could be either ",(0,a.kt)("inlineCode",{parentName:"p"},"RGB")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"backgroundColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buttonColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"buttonTextColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hintColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"linkColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"secondaryBackgroundColor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"textColor"))))}m.isMDXComponent=!0}}]);