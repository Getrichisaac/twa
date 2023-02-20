"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[408],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||p;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=n.length,a=new Array(p);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=n(5402),o=(n(9901),n(7522));const p={},a="Popup",i={unversionedId:"libraries/twa-sdk/components/popup",id:"libraries/twa-sdk/components/popup",title:"Popup",description:"The component which controls the currently displayed application popup. It",source:"@site/docs/libraries/twa-sdk/components/popup.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/popup",permalink:"/twa/docs/libraries/twa-sdk/components/popup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"MainButton",permalink:"/twa/docs/libraries/twa-sdk/components/main-button"},next:{title:"QRScanner",permalink:"/twa/docs/libraries/twa-sdk/components/qr-scanner"}},l={},s=[{value:"Initialization",id:"initialization",level:2},{value:"Opening new popup",id:"opening-new-popup",level:2},{value:"Events",id:"events",level:2},{value:"Methods support",id:"methods-support",level:2}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"popup"},(0,o.kt)("inlineCode",{parentName:"h1"},"Popup")),(0,o.kt)("p",null,"The component which controls the currently displayed application popup. It\nallows developers to open new custom popups and detect popup-connected events.\nThere is more information about this component in this\n",(0,o.kt)("a",{parentName:"p",href:"../../../features/popup"},"documentation"),"."),(0,o.kt)("h2",{id:"initialization"},"Initialization"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Popup} from '@twa.js/sdk';\nimport {Bridge} from '@twa.js/bridge';\n\nconst popup = new Popup(Bridge.init(), '6.3');\n")),(0,o.kt)("h2",{id:"opening-new-popup"},"Opening new popup"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," function returns a promise which will be resolved in case, the\nopened popup was closed. ",(0,o.kt)("inlineCode",{parentName:"p"},"Popup")," will resolve a button identifier in case,\na user clicked it. Otherwise, ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," will be resolved."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"popup.open({\n  title: 'Hello!',\n  message: 'Here is a test message.',\n  buttons: [{id: 'my-id', type: 'default', text: 'Default text'}]\n});\nconsole.log(popup.isOpened); // true\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Events available for the ",(0,o.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isOpenedChanged: (isOpened: boolean) => void"))),(0,o.kt)("h2",{id:"methods-support"},"Methods support"),(0,o.kt)("p",null,"Methods available for the ",(0,o.kt)("a",{parentName:"p",href:"../about#methods-support"},"support check"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"open"))))}c.isMDXComponent=!0}}]);