"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9333],{7522:(e,o,t)=>{t.d(o,{Zo:()=>d,kt:()=>m});var r=t(9901);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function c(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),p=function(e){var o=r.useContext(i),t=o;return e&&(t="function"==typeof e?e(o):l(l({},o),e)),t},d=function(e){var o=p(e.components);return r.createElement(i.Provider,{value:o},e.children)},s={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},u=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,k=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(k,l(l({ref:o},d),{},{components:t})):r.createElement(k,l({ref:o},d))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=u;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<a;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9205:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=t(5402),n=(t(9901),t(7522));const a={},l="Layout",c={unversionedId:"libraries/twa-sdk/components/layout",id:"libraries/twa-sdk/components/layout",title:"Layout",description:"Class which provides information about current Web App layout.",source:"@site/docs/libraries/twa-sdk/components/layout.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/layout",permalink:"/twa/docs/libraries/twa-sdk/components/layout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"InitData",permalink:"/twa/docs/libraries/twa-sdk/components/init-data"},next:{title:"MainButton",permalink:"/twa/docs/libraries/twa-sdk/components/main-button"}},i={},p=[{value:"Init",id:"init",level:2},{value:"Colors",id:"colors",level:2},{value:"<code>backgroundColor</code> / <code>setBackgroundColor(color: RGB)</code>",id:"backgroundcolor--setbackgroundcolorcolor-rgb",level:3},{value:"<code>headerColor</code> / <code>setHeaderColor(color: HeaderColorKey)</code>",id:"headercolor--setheadercolorcolor-headercolorkey",level:3},{value:"<code>colorScheme: &#39;dark&#39; | &#39;light&#39;</code>",id:"colorscheme-dark--light",level:3},{value:"Events",id:"events",level:2},{value:"Methods support",id:"methods-support",level:2}],d={toc:p};function s(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"layout"},(0,n.kt)("inlineCode",{parentName:"h1"},"Layout")),(0,n.kt)("p",null,"Class which provides information about current Web App layout."),(0,n.kt)("h2",{id:"init"},"Init"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import {Layout} from 'twa-sdk';  \nimport {init} from 'twa-bridge';  \n\n// Specify bridge instance, Web Apps version, header and background colors.\nconst layout = new Layout(init(), '6.3', 'bg_color', '#ffaabb');  \n")),(0,n.kt)("h2",{id:"colors"},"Colors"),(0,n.kt)("p",null,"Component provides access to header and background colors control."),(0,n.kt)("h3",{id:"backgroundcolor--setbackgroundcolorcolor-rgb"},(0,n.kt)("inlineCode",{parentName:"h3"},"backgroundColor")," / ",(0,n.kt)("inlineCode",{parentName:"h3"},"setBackgroundColor(color: RGB)")),(0,n.kt)("p",null,"Application background color."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"layout.setBackgroundColor('#ffaacc');\nconsole.log(layout.backgroundColor); // #ffaacc\n")),(0,n.kt)("h3",{id:"headercolor--setheadercolorcolor-headercolorkey"},(0,n.kt)("inlineCode",{parentName:"h3"},"headerColor")," / ",(0,n.kt)("inlineCode",{parentName:"h3"},"setHeaderColor(color: HeaderColorKey)")),(0,n.kt)("p",null,"Application header color."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"layout.setHeaderColor('bg_color');\nconsole.log(layout.headerColor); // bg_color\n")),(0,n.kt)("h3",{id:"colorscheme-dark--light"},(0,n.kt)("inlineCode",{parentName:"h3"},"colorScheme: 'dark' | 'light'")),(0,n.kt)("p",null,"To get current color scheme (",(0,n.kt)("inlineCode",{parentName:"p"},"dark")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"light"),"), you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"colorScheme"),"\nproperty:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(layout.colorScheme); // dark\n")),(0,n.kt)("p",null,"This property is computed depending on current ",(0,n.kt)("inlineCode",{parentName:"p"},"backgroundColor"),"."),(0,n.kt)("h2",{id:"events"},"Events"),(0,n.kt)("p",null,"Events available for ",(0,n.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"backgroundColorChanged: (color: RGB) => void")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"headerColorChanged: (color: HeaderColorKey) => void"))),(0,n.kt)("h2",{id:"methods-support"},"Methods support"),(0,n.kt)("p",null,"Methods available for ",(0,n.kt)("a",{parentName:"p",href:"../about#methods-support"},"support check"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setHeaderColor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBackgroundColor"))))}s.isMDXComponent=!0}}]);