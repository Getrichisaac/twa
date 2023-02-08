"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[952],{7522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(9901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,g=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?o.createElement(g,r(r({ref:t},u),{},{components:n})):o.createElement(g,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4646:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(5402),a=(n(9901),n(7522));const i={},r="Creating Web App",l={unversionedId:"tutorials/creating-web-app",id:"tutorials/creating-web-app",title:"Creating Web App",description:"In this article we are going to go deep into creation process of new Web App. It",source:"@site/docs/tutorials/creating-web-app.md",sourceDirName:"tutorials",slug:"/tutorials/creating-web-app",permalink:"/twa/docs/tutorials/creating-web-app",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Other",permalink:"/twa/docs/features/other"},next:{title:"@twa.js/sdk-react",permalink:"/twa/docs/libraries/twa-sdk-react"}},s={},p=[{value:"Creating Telegram bot",id:"creating-telegram-bot",level:2},{value:"Getting and applying https link",id:"getting-and-applying-https-link",level:2},{value:"Development",id:"development",level:3},{value:"Hot-reload",id:"hot-reload",level:4},{value:"Ngrok",id:"ngrok",level:4},{value:"Production",id:"production",level:3},{value:"Applying link",id:"applying-link",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-web-app"},"Creating Web App"),(0,a.kt)("p",null,"In this article we are going to go deep into creation process of new Web App. It\nis assumed, that you already have experience in\ncreating new web applications with usage of some popular frontend libraries like\nAngular, React, Vue etc. Nevertheless, it is not restricted to use vanilla JS.\nHere is the\nminimal ",(0,a.kt)("a",{parentName:"p",href:"/twa/docs/introduction/required-technologies"},"list of technologies"),"\nrequired for Web App development."),(0,a.kt)("p",null,"Creating Web App usually consists of these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create Telegram Bot"),(0,a.kt)("li",{parentName:"ol"},"Create web application"),(0,a.kt)("li",{parentName:"ol"},"Get web application https link"),(0,a.kt)("li",{parentName:"ol"},"Assign link to Telegram Bot")),(0,a.kt)("h2",{id:"creating-telegram-bot"},"Creating Telegram bot"),(0,a.kt)("p",null,"As long as Web Apps are just add-ons for Telegram Bots, obviously, firstly, we\nshould create Telegram Bot. To do so, we should\nuse ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/botfather"},"BotFather"),"."),(0,a.kt)("p",null,"The next step is to send message, which will start procedure of creating new\nbot - ",(0,a.kt)("inlineCode",{parentName:"p"},"/newbot"),"."),(0,a.kt)("p",null,"Father will ask questions about new bot information and\nas a result, we will have newly created bot. The only 1 thing we need from it \u2014\nits secret key, which is used during init data signing and verification."),(0,a.kt)("p",null,"After bot is successfully created, we should go to the next step \u2014 get and apply\napplication https link which is used to show application. Despite the fact,\nthat according to introduction, the next step should be web application\ncreation, we will not be able to do it as long as we need to debug it at least."),(0,a.kt)("p",null,"So, before reading the next section, make sure you created standard web\napplication which allows its receiving via some http link."),(0,a.kt)("h2",{id:"getting-and-applying-https-link"},"Getting and applying https link"),(0,a.kt)("p",null,"This step is required in Web Apps development flow. The reason is Web Apps are\nalways presented as usual web applications and, as we know, default way of\ngetting web application is to get it by some URL."),(0,a.kt)("p",null,"Talking about Web Apps, it is required to have URL with ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," protocol only,\nnot http. BotFather will not allow us to pass link with ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," protocol because\nit is not safe (and it will just not work in ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," environment). Additionally,\npassed https link should have valid SSL-certificate. Otherwise, our application\nwill not be shown."),(0,a.kt)("p",null,"As long as production and development links are usually used for different\npurposes, we will describe their getting flow separately."),(0,a.kt)("h3",{id:"development"},"Development"),(0,a.kt)("h4",{id:"hot-reload"},"Hot-reload"),(0,a.kt)("p",null,"Application development is rather hard process which is usually observed in real\ntime by developer. It is common, that while developing application, we want to\nsee all changes directly on device."),(0,a.kt)("p",null,"To see all changes in real-time, it is required to use such functionality as\n",(0,a.kt)("em",{parentName:"p"},"hot reload"),". In this section we will not describe what hot reload deeply is,\nbut in several words, it is just a technique which allows developers to reload\nparts of the code in real-time and display result without pages reloads."),(0,a.kt)("p",null,"To develop with comfort, you will probably need to get it for your current\nfrontend architecture. Usually, all default templates for popular frontend\nframeworks already include this feature and hot-reload configuration is not\nrequired."),(0,a.kt)("h4",{id:"ngrok"},"Ngrok"),(0,a.kt)("p",null,"By default, developers have no easy way to get valid https link which will\nredirect external client to our PC with specified port. To solve this problem,\nwe could use such service as ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),". It has enough low\nrestrictions to develop application with comfort."),(0,a.kt)("p",null,"Here comes an example of creating a tunnel to ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:3000"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 3000\n")),(0,a.kt)("p",null,"Simple, isn't it?"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Do not use provided by ngrok link in production. Frontend application should be\nplaced on some hosting and downloaded as set of already prepared static assets.\nSee next section for more information.")),(0,a.kt)("h3",{id:"production"},"Production"),(0,a.kt)("p",null,"Getting production-ready URL is not that hard task. To get required link, it is\nenough to use rather popular services, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pages.github.com/"},"GitHub Pages")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.heroku.com/"},"Heroku")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://vercel.com/"},"Vercel"))),(0,a.kt)("p",null,"In case, you don\u2019t want to use public hosting, you could create your own server\nwhich serves applications static files. But don\u2019t forget that you still need\nvalid https link, what means, you should have your own DNS name and valid SSL\ncertificate. For this purpose, consider ",(0,a.kt)("a",{parentName:"p",href:"https://certbot.eff.org/"},"certbot"),"."),(0,a.kt)("h3",{id:"applying-link"},"Applying link"),(0,a.kt)("p",null,"When https link is already received, it is required to set it in our Bot. To do\nthis, we should return to BotFather and send message ",(0,a.kt)("inlineCode",{parentName:"p"},"/setmenubutton"),". Then,\nBotFather will ask us to choose bot, link to apply and menu button title."),(0,a.kt)("p",null,"As a result, when user enters a chat with your bot, he will be able to open Web\nApp by clicking bottom left button (which is usually called ",(0,a.kt)("inlineCode",{parentName:"p"},"menu button"),"). It\nis worth mentioning, that it is not the only one way of opening Web App. This\nway of setting https link applies it for each Telegram user, but you are able to\npass specific link for any user. To do this, you should use Telegram API."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"This is fair enough to create Web App. Nevertheless, this tutorial does not\ncover all platform features. It is recommended to dive deep into all aspects of\nWeb Apps via reading other documentation sections."))}c.isMDXComponent=!0}}]);