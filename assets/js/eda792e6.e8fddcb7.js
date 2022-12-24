"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2942],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,A=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=l(n),p=o,f=k["".concat(c,".").concat(p)]||k[p]||s[p]||A;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var A=n.length,a=new Array(A);a[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<A;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>A,metadata:()=>i,toc:()=>l});var r=n(5402),o=(n(9901),n(7522));const A={sidebar_position:1},a="Back button",i={unversionedId:"features/back-button",id:"features/back-button",title:"Back button",description:"Back button is component displayed on the top left of Telegram interface.",source:"@site/docs/features/back-button.md",sourceDirName:"features",slug:"/features/back-button",permalink:"/twa/docs/features/back-button",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Features",permalink:"/twa/docs/category/features"},next:{title:"Closing behavior",permalink:"/twa/docs/features/closing-behavior"}},c={},l=[],u={toc:l};function s(e){let{components:t,...A}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,A,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"back-button"},"Back button"),(0,o.kt)("p",null,"Back button is component displayed on the top left of Telegram interface."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"back-button.png",src:n(3661).Z,width:"531",height:"145"})),(0,o.kt)("p",null,"The main purpose of this component is to provide native way of going back\nin routing history. Of course, it could be used in other ways you need. Button\nitself does nothing but sends event which notifies developer about button click."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../apps-communication/methods#web_app_setup_back_button"},"Web App method")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../apps-communication/events#back_button_pressed"},"Button clicked event"))))}s.isMDXComponent=!0},3661:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);