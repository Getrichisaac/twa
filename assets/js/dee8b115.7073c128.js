"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[973],{7522:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(9901);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,b=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=n(5402),i=(n(9901),n(7522));const a={},o="WebApp",p={unversionedId:"libraries/twa-sdk/components/web-app",id:"libraries/twa-sdk/components/web-app",title:"WebApp",description:"The component which provides the common Web Apps functionality not covered by",source:"@site/docs/libraries/twa-sdk/components/web-app.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/web-app",permalink:"/docs/libraries/twa-sdk/components/web-app",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Viewport",permalink:"/docs/libraries/twa-sdk/components/viewport"},next:{title:"@twa.js/init-data",permalink:"/docs/libraries/twa-init-data"}},l={},s=[{value:"Initialization",id:"initialization",level:2},{value:"Platform",id:"platform",level:2},{value:"Opening links",id:"opening-links",level:2},{value:"Other methods",id:"other-methods",level:2},{value:"Methods support",id:"methods-support",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"webapp"},(0,i.kt)("inlineCode",{parentName:"h1"},"WebApp")),(0,i.kt)("p",null,"The component which provides the common Web Apps functionality not covered by\nother system components."),(0,i.kt)("h2",{id:"initialization"},"Initialization"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {WebApp} from '@twa.js/sdk';\nimport {Bridge} from '@twa.js/bridge';\n\n// Specify bridge instance, Web Apps version and platform name.\nconst webApp = new WebApp(Bridge.init(), '6.4', 'webz');\n")),(0,i.kt)("h2",{id:"platform"},"Platform"),(0,i.kt)("p",null,"You could get current Web App platform (",(0,i.kt)("inlineCode",{parentName:"p"},"tdesktop"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"webz")," etc.) by getting\n",(0,i.kt)("inlineCode",{parentName:"p"},"platform")," property. In case, you want this property to detect current platform\na bit easier, properties ",(0,i.kt)("inlineCode",{parentName:"p"},"isDesktop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isWeb")," are used:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {WebApp} from '@twa.js/sdk';\nimport {Bridge} from '@twa.js/bridge';\n\nconst webApp = new WebApp(Bridge.init(), '6.4', 'webz');\nconsole.log(webApp.platform); // webz\n")),(0,i.kt)("h2",{id:"opening-links"},"Opening links"),(0,i.kt)("p",null,"Here comes the list of methods, which allow opening links with help of Web App:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openLink(url: string)")," - opens link in external browser. Web App will not be\nclosed;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openTelegramLink(url: string)"),' - opens a Telegram link inside Telegram app.\nThe Web App will be closed. It expects passing link in full format, with\nhostname "t.me";'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openInvoice(url: string)"),' - opens an invoice using its url. It expects\npassing link in full format, with hostname "t.me".')),(0,i.kt)("h2",{id:"other-methods"},"Other methods"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close()")," - closes Web App;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"isVersionAtLeast(version: string)")," - checks if current ",(0,i.kt)("inlineCode",{parentName:"li"},"WebApp")," instance\nversion is higher than passed one;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ready()")," - should be called whenever Web App is ready to be displayed;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readTextFromClipboard(): Promise<string | null>")," - reads text\nfrom clipboard and returns extracted data;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sendData(data: string)")," - sends data to Telegram bot.")),(0,i.kt)("h2",{id:"methods-support"},"Methods support"),(0,i.kt)("p",null,"Methods available for the ",(0,i.kt)("a",{parentName:"p",href:"../about#methods-support"},"support check"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"openInvoice")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"readTextFromClipboard"))))}d.isMDXComponent=!0}}]);