"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32],{7522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(9901);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,r(r({ref:t},s),{},{components:n})):a.createElement(h,r({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(5402),l=(n(9901),n(7522));const i={sidebar_position:3},r="Events",o={unversionedId:"apps-communication/events",id:"apps-communication/events",title:"Events",description:"There are a lot of cases, when Telegram sends events to Web App which,",source:"@site/docs/apps-communication/events.mdx",sourceDirName:"apps-communication",slug:"/apps-communication/events",permalink:"/twa/docs/apps-communication/events",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Methods",permalink:"/twa/docs/apps-communication/methods"},next:{title:"Structure",permalink:"/twa/docs/launch-params/structure"}},p={},d=[{value:"Web",id:"web",level:2},{value:"Desktop, mobile and Windows Phone",id:"desktop-mobile-and-windows-phone",level:2},{value:"Available events",id:"available-events",level:2},{value:"v6.0",id:"v60",level:3},{value:"<code>invoice_closed</code>",id:"invoice_closed",level:4},{value:"<code>main_button_pressed</code>",id:"main_button_pressed",level:4},{value:"<code>popup_closed</code>",id:"popup_closed",level:4},{value:"<code>set_custom_style</code>",id:"set_custom_style",level:4},{value:"<code>theme_changed</code>",id:"theme_changed",level:4},{value:"<code>viewport_changed</code>",id:"viewport_changed",level:4},{value:"v6.1",id:"v61",level:3},{value:"<code>back_button_pressed</code>",id:"back_button_pressed",level:4},{value:"<code>settings_button_pressed</code>",id:"settings_button_pressed",level:4},{value:"v6.4",id:"v64",level:3},{value:"<code>qr_text_received</code>",id:"qr_text_received",level:4},{value:"<code>scan_qr_popup_closed</code>",id:"scan_qr_popup_closed",level:4},{value:"<code>clipboard_text_received</code>",id:"clipboard_text_received",level:4}],s={toc:d};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"There are a lot of cases, when Telegram sends events to Web App which,\nobviously, should be somehow handled. Like methods, each event has its unique\nname and payload."),(0,l.kt)("h2",{id:"web"},"Web"),(0,l.kt)("p",null,"As mentioned before, the web version uses a standard way of communication\nbetween iframes. It means, the parent iframe is able to send events\nthrough ",(0,l.kt)("inlineCode",{parentName:"p"},"postMessage")," function. To handle this type of message, it is enough to\nadd ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," event listener on the global ",(0,l.kt)("inlineCode",{parentName:"p"},"window")," object."),(0,l.kt)("p",null,"The native application will send an event with ",(0,l.kt)("inlineCode",{parentName:"p"},"data: string")," which represents a\nJSON object converted to string. This object has the same interface as we\ndefined in the methods section:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface MessageJSON {\n  eventType: string;\n  eventData: any;\n}\n")),(0,l.kt)("p",null,"Simple example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"window.addEventListener('message', ({data}) => {\n  const {eventType, eventData} = JSON.parse(data);\n  console.log(eventType, eventData);\n})\n")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"In this code, we assumed, that the ",(0,l.kt)("inlineCode",{parentName:"p"},"message")," event is sent only by the native\napplication which is not always true in real applications. Additionally, we\ndidn't check if ",(0,l.kt)("inlineCode",{parentName:"p"},"data")," is really of type ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),". Don't forget to check each\ntype and appropriately process incoming events.")),(0,l.kt)("h2",{id:"desktop-mobile-and-windows-phone"},"Desktop, mobile and Windows Phone"),(0,l.kt)("p",null,"Desktop, mobile, and Windows Phone versions of Telegram don\u2019t use the method,\ndescribed in the previous section. They do it in a bit unusual way. The first\nthing developer should know, is in case, when Telegram needs to emit an event,\nit will insert JavaScript code, which calls a globally defined function. Here is\nan example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"window.Telegram.WebView.receiveEvent('popup_closed', {button_id: 'cancel'});\n")),(0,l.kt)("p",null,"Path to this function depends on platform:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy.receiveEvent")," - Telegram Desktop;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.Telegram.WebView.receiveEvent")," - mobile applications;"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"window.TelegramGameProxy_receiveEvent")," - Windows Phone")),(0,l.kt)("p",null,"All of these functions have the same signature:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"type ReceiveEvent = (eventType: string, eventData: unknown) => void;\n")),(0,l.kt)("p",null,"So, the solution is rather simple. To handle incoming events we should create a\nfunction of this type and assign it to all 3 paths."),(0,l.kt)("h2",{id:"available-events"},"Available events"),(0,l.kt)("p",null,"This section contains the list of events, sent from Telegram: their names,\ndescription, and parameters. Section title means minimal version, from which\nevents inside the section could be sent."),(0,l.kt)("h3",{id:"v60"},"v6.0"),(0,l.kt)("h4",{id:"invoice_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"invoice_closed")),(0,l.kt)("p",null,"An invoice was closed. The event contains passed\nduring ",(0,l.kt)("a",{parentName:"p",href:"methods#web_app_open_invoice"},(0,l.kt)("inlineCode",{parentName:"a"},"web_app_open_invoice"))," method\ninvocation ",(0,l.kt)("inlineCode",{parentName:"p"},"slug")," and the invoice status."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Field"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"slug"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"Passed during the\xa0",(0,l.kt)("a",{href:"methods#web_app_open_invoice"},(0,l.kt)("code",null,"web_app_open_invoice")),"\xa0 method invocation ",(0,l.kt)("code",null,"slug")," value")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"status"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,(0,l.kt)("p",null,"Invoice status. Values:"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("code",null,"paid"),", invoice was paid"),(0,l.kt)("li",null,(0,l.kt)("code",null,"failed"),", invoice failed"),(0,l.kt)("li",null,(0,l.kt)("code",null,"pending"),", invoice is currently pending"),(0,l.kt)("li",null,(0,l.kt)("code",null,"cancelled"),", invoice was cancelled")))))),(0,l.kt)("h4",{id:"main_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"main_button_pressed")),(0,l.kt)("p",null,"User clicked the ",(0,l.kt)("a",{parentName:"p",href:"../features/main-button"},"Main Button"),"."),(0,l.kt)("h4",{id:"popup_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"popup_closed")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../features/popup"},"Popup")," was closed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"button_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Identifier of the clicked button. In case, the popup was closed without clicking any button, this property will be omitted")))),(0,l.kt)("h4",{id:"set_custom_style"},(0,l.kt)("inlineCode",{parentName:"h4"},"set_custom_style")),(0,l.kt)("p",null,"The event which is usually sent by the Telegram web application. Its payload\nrepresents ",(0,l.kt)("inlineCode",{parentName:"p"},"<style/>")," tag html content, a developer could use. The stylesheet\ndescribed in the payload will help the developer to stylize the app scrollbar\n(but he is still able to do it himself)."),(0,l.kt)("h4",{id:"theme_changed"},(0,l.kt)("inlineCode",{parentName:"h4"},"theme_changed")),(0,l.kt)("p",null,"Occurs whenever ",(0,l.kt)("a",{parentName:"p",href:"../features/theme"},"the theme")," was changed in the user's\nTelegram app (including switching to night mode)."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"theme_params"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Record<string, string>")),(0,l.kt)("td",{parentName:"tr",align:null},"Map where the key is a theme stylesheet key and value is the corresponding color in ",(0,l.kt)("inlineCode",{parentName:"td"},"#RRGGBB")," format")))),(0,l.kt)("h4",{id:"viewport_changed"},(0,l.kt)("inlineCode",{parentName:"h4"},"viewport_changed")),(0,l.kt)("p",null,"Occurs whenever the ",(0,l.kt)("a",{parentName:"p",href:"../features/viewport"},"viewport")," has been changed. For\nexample, when the user started dragging the application or called the expansion\nmethod."),(0,l.kt)("p",null,"Pay attention to the fact, that send rate of this method is not enough to\nsmoothly resize the application window. You should probably use a stable height\ninstead of the current one, or handle this problem in another way."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},"The viewport height")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional"),". The viewport width")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_expanded"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is the viewport currently expanded")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"is_state_stable"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"Is the viewport current state stable and not going to change in the next moment")))),(0,l.kt)("h3",{id:"v61"},"v6.1"),(0,l.kt)("h4",{id:"back_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"back_button_pressed")),(0,l.kt)("p",null,"User clicked the ",(0,l.kt)("a",{parentName:"p",href:"../features/back-button"},"Back Button"),"."),(0,l.kt)("h4",{id:"settings_button_pressed"},(0,l.kt)("inlineCode",{parentName:"h4"},"settings_button_pressed")),(0,l.kt)("p",null,"Occurs when the ",(0,l.kt)("inlineCode",{parentName:"p"},"Settings")," item in context menu was pressed. Not all\napplications have this button."),(0,l.kt)("h3",{id:"v64"},"v6.4"),(0,l.kt)("h4",{id:"qr_text_received"},(0,l.kt)("inlineCode",{parentName:"h4"},"qr_text_received")),(0,l.kt)("p",null,"The QR scanner scanned some QR and extracted its content."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional"),". Data extracted from the QR")))),(0,l.kt)("h4",{id:"scan_qr_popup_closed"},(0,l.kt)("inlineCode",{parentName:"h4"},"scan_qr_popup_closed")),(0,l.kt)("p",null,"QR scanner was closed."),(0,l.kt)("h4",{id:"clipboard_text_received"},(0,l.kt)("inlineCode",{parentName:"h4"},"clipboard_text_received")),(0,l.kt)("p",null,"Telegram application attempted to extract text from clipboard."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"req_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:null},"Passed during the ",(0,l.kt)("a",{parentName:"td",href:"methods#web_app_read_text_from_clipboard"},(0,l.kt)("inlineCode",{parentName:"a"},"web_app_read_text_from_clipboard"))," method invocation ",(0,l.kt)("inlineCode",{parentName:"td"},"req_id")," value")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," or ",(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Optional"),". Data extracted from the clipboard. The returned value will have the type ",(0,l.kt)("inlineCode",{parentName:"td"},"string")," only in the case, application has an access to the clipboard")))))}c.isMDXComponent=!0}}]);