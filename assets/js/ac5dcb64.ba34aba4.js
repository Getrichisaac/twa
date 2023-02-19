"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[610],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(9901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,b=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?i.createElement(b,r(r({ref:t},u),{},{components:n})):i.createElement(b,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(5402),o=(n(9901),n(7522));const a={},r="MainButton",l={unversionedId:"libraries/twa-sdk/components/main-button",id:"libraries/twa-sdk/components/main-button",title:"MainButton",description:"Controls the main button, which is displayed at the bottom of the Web App in the",source:"@site/docs/libraries/twa-sdk/components/main-button.md",sourceDirName:"libraries/twa-sdk/components",slug:"/libraries/twa-sdk/components/main-button",permalink:"/twa/docs/libraries/twa-sdk/components/main-button",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Layout",permalink:"/twa/docs/libraries/twa-sdk/components/layout"},next:{title:"Popup",permalink:"/twa/docs/libraries/twa-sdk/components/popup"}},s={},p=[{value:"Init",id:"init",level:2},{value:"Methods and properties",id:"methods-and-properties",level:2},{value:"Visibility",id:"visibility",level:3},{value:"Button",id:"button",level:4},{value:"Loader",id:"loader",level:4},{value:"Active state",id:"active-state",level:3},{value:"Colors",id:"colors",level:3},{value:"Background",id:"background",level:4},{value:"Text",id:"text",level:4},{value:"Events",id:"events",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mainbutton"},(0,o.kt)("inlineCode",{parentName:"h1"},"MainButton")),(0,o.kt)("p",null,"Controls the main button, which is displayed at the bottom of the Web App in the\nTelegram interface."),(0,o.kt)("p",null,"To learn more, visit description of this feature\nin ",(0,o.kt)("a",{parentName:"p",href:"../../../features/main-button"},"documentation"),"."),(0,o.kt)("h2",{id:"init"},"Init"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import {BackButton} from '@twa.js/sdk';\nimport {init} from '@twa.js/bridge';\n\n// Specify bridge instance, color and text colors.\nconst mainButton = new MainButton(init(), '#000000', '#ffffff');\n")),(0,o.kt)("h2",{id:"methods-and-properties"},"Methods and properties"),(0,o.kt)("h3",{id:"visibility"},"Visibility"),(0,o.kt)("h4",{id:"button"},"Button"),(0,o.kt)("p",null,"To control ",(0,o.kt)("inlineCode",{parentName:"p"},"MainButton")," visibility, you could use such property as ",(0,o.kt)("inlineCode",{parentName:"p"},"isVisible"),".\nIt is being changed during the call of ",(0,o.kt)("inlineCode",{parentName:"p"},"show()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hide()")," methods:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"mainButton.show();  \nconsole.log(mainButton.isVisible); // true  \n  \nmainButton.hide();  \nconsole.log(mainButton.isVisible); // false  \n")),(0,o.kt)("h4",{id:"loader"},"Loader"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MainButton")," could display loader inside of it. To control its visibility,\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"showProgress()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"hideProgress()")," methods. ",(0,o.kt)("inlineCode",{parentName:"p"},"isProgressVisible")," property\nwill be changed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"mainButton.showProgress();\nconsole.log(mainButton.isProgressVisible); // true  \n\nmainButton.hideProgress();\nconsole.log(mainButton.isProgressVisible); // false\n")),(0,o.kt)("h3",{id:"active-state"},"Active state"),(0,o.kt)("p",null,"You could disable ",(0,o.kt)("inlineCode",{parentName:"p"},"MainButton")," by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"disable()")," method and enable it\nvia ",(0,o.kt)("inlineCode",{parentName:"p"},"enable()"),". Both of the methods will update the ",(0,o.kt)("inlineCode",{parentName:"p"},"isEnabled")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"// Enable button.  \nmainButton.enable();\nconsole.log(mainButton.isEnabled); // true  \n\n// Disable button.  \nmainButton.disable();\nconsole.log(mainButton.isEnabled); // false\n")),(0,o.kt)("p",null,"Enabling main button will allow user to click it. As the result, ",(0,o.kt)("inlineCode",{parentName:"p"},"MainButton"),"\nwill receive the ",(0,o.kt)("inlineCode",{parentName:"p"},"click")," event. Otherwise, no event will be received."),(0,o.kt)("h3",{id:"colors"},"Colors"),(0,o.kt)("h4",{id:"background"},"Background"),(0,o.kt)("p",null,"To update ",(0,o.kt)("inlineCode",{parentName:"p"},"MainButton")," background color, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setColor(color: RGB)")," method.\nIt will update ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"mainButton.setColor('#ffffaa');\nconsole.log(mainButton.color); // '#ffffaa'\n")),(0,o.kt)("h4",{id:"text"},"Text"),(0,o.kt)("p",null,"To update ",(0,o.kt)("inlineCode",{parentName:"p"},"MainButton")," text color, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setTextColor(color: RGB)")," method.\nIt will update ",(0,o.kt)("inlineCode",{parentName:"p"},"textColor")," property."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"mainButton.setTextColor('#cca233');\nconsole.log(mainButton.textColor); // '#cca233'\n")),(0,o.kt)("h2",{id:"events"},"Events"),(0,o.kt)("p",null,"Events available for ",(0,o.kt)("a",{parentName:"p",href:"../about#events"},"listening"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"click: () => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"colorChanged: (color: RGB) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isProgressVisibleChanged: (isVisible: boolean) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isEnabledChanged: (isEnabled: boolean) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"isVisibleChanged: (isVisible: boolean) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"textChanged: (text: string) => void")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"textColorChanged: (color: RGB) => void"))))}d.isMDXComponent=!0}}]);