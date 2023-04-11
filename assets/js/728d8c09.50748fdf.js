"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[873],{7522:(e,t,n)=>{n.d(t,{Zo:()=>a,kt:()=>u});var l=n(9901);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},A=Object.keys(e);for(l=0;l<A.length;l++)n=A[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(l=0;l<A.length;l++)n=A[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):v(v({},t),e)),n},a=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},i={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},w=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,A=e.originalType,c=e.parentName,a=o(e,["components","mdxType","originalType","parentName"]),w=s(n),u=r,f=w["".concat(c,".").concat(u)]||w[u]||i[u]||A;return n?l.createElement(f,v(v({ref:t},a),{},{components:n})):l.createElement(f,v({ref:t},a))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var A=n.length,v=new Array(A);v[0]=w;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,v[1]=o;for(var s=2;s<A;s++)v[s]=n[s];return l.createElement.apply(null,v)}return l.createElement.apply(null,n)}w.displayName="MDXCreateElement"},4110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>v,default:()=>i,frontMatter:()=>A,metadata:()=>o,toc:()=>s});var l=n(5402),r=(n(9901),n(7522));const A={sidebar_position:2},v="Closing behavior",o={unversionedId:"features/closing-behavior",id:"features/closing-behavior",title:"Closing behavior",description:"It is rather common for Web Apps, when user accidentally closes application",source:"@site/docs/features/closing-behavior.md",sourceDirName:"features",slug:"/features/closing-behavior",permalink:"/docs/features/closing-behavior",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Back button",permalink:"/docs/features/back-button"},next:{title:"Haptic feedback",permalink:"/docs/features/haptic-feedback"}},c={},s=[],a={toc:s};function i(e){let{components:t,...A}=e;return(0,r.kt)("wrapper",(0,l.Z)({},a,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"closing-behavior"},"Closing behavior"),(0,r.kt)("p",null,"It is rather common for Web Apps, when user accidentally closes application\nduring scrolling it to top. The problem is user could drag application block\ntoo much which will result in application close."),(0,r.kt)("p",null,"To prevent user from doing this, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"closing behaviour"),". Web Apps\nallows developer to prompt if user really wants to close application. This\nfunctionality could also be used during filling some big forms or something\nlike that. Just not to lose progress."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"closing-behavior.png",src:n(9950).Z,width:"477",height:"329"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/apps-communication/methods#web_app_setup_closing_behavior"},"Web App method"))))}i.isMDXComponent=!0},9950:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"}}]);