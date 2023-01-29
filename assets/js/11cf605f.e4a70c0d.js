"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3901],{7522:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(9901);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(a),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(h,p(p({ref:t},c),{},{components:a})):r.createElement(h,p({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=a[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7927:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(5402),n=(a(9901),a(7522));const o={sidebar_position:1},p="Structure",i={unversionedId:"launch-params/structure",id:"launch-params/structure",title:"Structure",description:"The web App should have a URL to be used by Telegram. It will be used as the",source:"@site/docs/launch-params/structure.md",sourceDirName:"launch-params",slug:"/launch-params/structure",permalink:"/twa/docs/launch-params/structure",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Launch parameters",permalink:"/twa/docs/category/launch-parameters"},next:{title:"Init data",permalink:"/twa/docs/category/init-data"}},s={},l=[{value:"Parameters",id:"parameters",level:2},{value:"<code>tgWebAppVersion</code>",id:"tgwebappversion",level:3},{value:"<code>tgWebAppData</code>",id:"tgwebappdata",level:3},{value:"<code>tgWebAppPlatform</code>",id:"tgwebappplatform",level:3},{value:"<code>tgWebAppThemeParams</code>",id:"tgwebappthemeparams",level:3}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"structure"},"Structure"),(0,n.kt)("p",null,"The web App should have a URL to be used by Telegram. It will be used as the\nsource of WebView, which will load application."),(0,n.kt)("p",null,"Nevertheless, it is not enough for the application to work correctly. In\nprevious documentation sections, we also said, that some methods or events work\nonly starting from some Web Apps versions. But how do we determine the current\nversion? This is why launch parameters were created."),(0,n.kt)("p",null,"Launch parameters are the list of options, passed to Web App via its location.\nTo be more accurate,",(0,n.kt)("inlineCode",{parentName:"p"},"window")," location. A list of these properties will be passed\nto ",(0,n.kt)("inlineCode",{parentName:"p"},"hash")," section and will have a form of query parameters. So, you could get\nthem\nconverted to a string by calling ",(0,n.kt)("inlineCode",{parentName:"p"},"window.location.hash.slice(1)"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const params = window.location.hash.slice(1);\nconsole.log(params); // tgWebAppData=...&tgWebAppVersion=6.2&...\n")),(0,n.kt)("p",null,"To work with them in a more appropriate way, we use already implemented class\n",(0,n.kt)("inlineCode",{parentName:"p"},"URLSearchParams"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"const params = new URLSearchParams(window.location.hash.slice(1));\nconsole.log(params.get('tgWebAppVersion')); // \"6.2\"\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("h3",{id:"tgwebappversion"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppVersion")),(0,n.kt)("p",null,"Contains information about the current Web App version. This parameter is useful\nto check if some Web Apps ",(0,n.kt)("a",{parentName:"p",href:"../apps-communication/methods"},"methods")," are\nsupported."),(0,n.kt)("h3",{id:"tgwebappdata"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppData")),(0,n.kt)("p",null,"Web\nApp ",(0,n.kt)("a",{parentName:"p",href:"init-data/about"},"init data"),".\nThe value of this parameter is query parameters presented as string. To make its\nusage easier, consider ",(0,n.kt)("inlineCode",{parentName:"p"},"URLSearchParams")," class."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Parsed value example"',title:'"Parsed',value:!0,'example"':!0},'const initData = {\n  query_id: \'abcdef\',\n  user: `{id: 279058397, first_name: "Vladislav", last_name: "Kibenko", username: "vdkfrost", language_code: "en", is_premium: true}`,\n  auth_date: \'1669670292\',\n  hash: \'4975e881a0347264512f6047e1f3d698cbd2fe0bc1573\',\n};\n')),(0,n.kt)("h3",{id:"tgwebappplatform"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppPlatform")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../platforms"},"Platform")," identifier."),(0,n.kt)("h3",{id:"tgwebappthemeparams"},(0,n.kt)("inlineCode",{parentName:"h3"},"tgWebAppThemeParams")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"../features/theme"},"Theme")," information. You could use\nthis parameter to know colors at the moment of Web App rendering. Keep in mind,\nthat you are able to receive a theme with\nthe ",(0,n.kt)("a",{parentName:"p",href:"../apps-communication/methods#web_app_request_theme"},"method"),"."),(0,n.kt)("p",null,"The value of this parameter is a JSON object converted to a string. To receive\nmore appropriate and easy-to-use value, use ",(0,n.kt)("inlineCode",{parentName:"p"},"JSON.parse")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="Parsed value example"',title:'"Parsed',value:!0,'example"':!0},"const theme = {\n  bg_color: '#212121',\n  text_color: '#ffffff',\n  hint_color: '#aaaaaa',\n  link_color: '#8774e1',\n  button_color: '#8774e1',\n  button_text_color: '#ffffff',\n  secondary_bg_color: '#0f0f0f',\n};\n")))}u.isMDXComponent=!0}}]);