"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3237],{7527:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var r=n(9901),i=n(2865),o=n(3627),s=n(6172);const a="docs/from-authors";function c(){const{siteConfig:e}=(0,i.Z)();return r.createElement(o.Z,{noFooter:!0,description:e.tagline},r.createElement(s.l_,{to:a}))}function u(e){var t=e.replace(/\s/g,"");if(function(e){return/^#[\da-f]{6}$/i.test(e)}(t))return t;if(function(e){return/^#[\da-f]{3}$/i.test(e)}(t)){for(var n="#",r=0;r<3;r++)n+=t[1+r].repeat(2);return n}var i=t.match(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)||t.match(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),\d{1,3}\)$/);if(null===i)throw new SyntaxError('Value "'.concat(e,'" does not match any of known RGB formats.'));return i.slice(1).reduce((function(e,t){var n=parseInt(t).toString(16);return e+(1===n.length?"0":"")+n}),"#")}function p(e){return e=u(e),Math.sqrt([.299,.587,.114].reduce((function(t,n,r){var i=parseInt(e.slice(1+2*r,1+2*(r+1)),16);return t+i*i*n}),0))<120}function l(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var h=function(){function e(){this.listeners={},this.globalListeners=[]}return e.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.globalListeners.forEach((function(n){return n.apply(void 0,l([e],t,!1))}));var r=this.listeners[e];void 0!==r&&r.forEach((function(e){return e.apply(void 0,t)}))},e.prototype.emitUnsafe=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.emit.apply(this,l([e],t,!1))},e.prototype.on=function(e,t){var n=this.listeners[e];void 0===n?this.listeners[e]=[t]:n.push(t)},e.prototype.off=function(e,t){var n=this.listeners[e];if(void 0!==n){var r=n.indexOf(t);r>=0&&n.splice(r,1)}},e.prototype.subscribe=function(e){this.globalListeners.push(e)},e.prototype.unsubscribe=function(e){var t=this.globalListeners.indexOf(e);t>=0&&this.globalListeners.splice(t,1)},e}();function f(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}var d=function(e){if("number"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as number'));return e},b=function(e){if("string"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as string'));return e},_=function(e){return void 0===e?e:b(e)},g=function(e){if("boolean"!=typeof e)throw new TypeError('Unable to parse "'.concat(e,'" as boolean'));return e},v=function(e){return void 0===e?void 0:g(e)},m=function(e){return void 0===e?e:function(e){return u(b(e))}(e)};function y(e,t){return function(n){if(null==n){if(void 0===t)throw new TypeError("Value is empty.");return t()}var r=n;if("string"==typeof r)try{r=JSON.parse(r)}catch(e){throw new TypeError("Value is not JSON object converted to string.")}if(!f(r))throw new TypeError("Value is not JSON object.");var i={};for(var o in e){var s=e[o],a=s[0],c=s[1];try{var u=c(r[a]);void 0!==u&&(i[o]=u)}catch(e){throw new Error('Unable to parse parameter "'.concat(a,'"'),{cause:e})}}return i}}var w=function(e){if(null===e)throw new TypeError('Unable to parse value "'.concat(e,'" as string.'));return e},E=function(e){return null===e?void 0:e},O=function(e){if(null!==e&&""!==e){var t=parseInt(e),n=new Date(t.toString()===e?1e3*t:e);if("Invalid Date"!==n.toString())return n}throw new TypeError('Unable to parse value "'.concat(e,'" as Date'))};function C(e,t){return function(n){if(null==n){if(void 0===t)throw new TypeError("Value is empty.");return t()}if("string"!=typeof n&&!(n instanceof URLSearchParams))throw new TypeError("Value has unexpected type.");var r="string"==typeof n?new URLSearchParams(n):n,i={};for(var o in e){var s=e[o],a=s[0],c=s[1];try{var u=c(r.get(a));void 0!==u&&(i[o]=u)}catch(e){throw new Error('Unable to parse parameter "'.concat(a,'"'),{cause:e})}}return i}}function x(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=new Date,i=Intl.DateTimeFormat(void 0,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).format(r),o=r.getMilliseconds().toString();console[e].apply(console,l(["[".concat(i,".").concat("0".repeat(3-o.length)+o,"]")],t,!1))}function P(e,t){for(var n=e.split("."),r=t.split("."),i=Math.max(n.length,r.length),o=0;o<i;o++){var s=parseInt(n[o]||"0"),a=parseInt(r[o]||"0");if(s!==a)return s>a?1:-1}return 0}var k=function(){return k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},k.apply(this,arguments)};function j(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function S(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}var T,V=y({height:["height",d],width:["width",function(e){return void 0===e?null:d(e)}],is_state_stable:["is_state_stable",g],is_expanded:["is_expanded",g]}),A=y({theme_params:["theme_params",function(e){if(!f(e))throw new TypeError('Unable to parse "'.concat(e,'" as Record'));return e}]}),q=y({button_id:["button_id",function(e){return null==e?void 0:b(e)}]}),D=y({data:["data",_]}),U=y({slug:["slug",b],status:["status",b]}),I=y({req_id:["req_id",b],data:["data",function(e){return null==e?e:b(e)}]}),L=y({type:["eventType",b],data:["eventData",function(e){return e}]});var B=!1;function H(e){return void 0!==e.TelegramWebviewProxy}function M(e){return"external"in e&&"function"==typeof e.external.notify}function W(){try{return window.self!==window.top}catch(e){return!0}}var R=function(){function e(e){void 0===e&&(e={});var t=this;this._boundEmitter=null,this.ee=new h,this.emit=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.log.apply(t,S(["log","[emit]",e],r,!1)),(n=t.ee).emit.apply(n,S([e],r,!1))},this.emitUnsafe=function(e){for(var n,r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];t.log.apply(t,S(["log","[emitUnsafe]",e],r,!1)),(n=t.ee).emitUnsafe.apply(n,S([e],r,!1))},this.log=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];t.debug&&x.apply(void 0,S([e,"[Bridge]"],n,!1))},this.processEvent=function(e,n){t.log("log","[processEvent]",e,n);try{switch(e){case"viewport_changed":return t.emit(e,function(e){var t=V(e),n=t.width,r=j(t,["width"]);return k(k({},r),{width:null===n?window.innerWidth:n})}(n));case"theme_changed":return t.emit(e,A(n));case"popup_closed":return null==n?t.emit(e,{}):t.emit(e,q(n));case"set_custom_style":return t.emit(e,b(n));case"qr_text_received":return t.emit(e,D(n));case"main_button_pressed":case"back_button_pressed":case"settings_button_pressed":case"scan_qr_popup_closed":return t.emit(e);case"clipboard_text_received":return t.emit(e,I(n));case"invoice_closed":return t.emit(e,U(n));default:return t.emitUnsafe(e,n)}}catch(e){throw t.log("error","[processEvent] error",e),e}},this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.postEvent=function(e,n,r){var i=r||{},o=i.targetOrigin,s=void 0===o?t.targetOrigin:o,a=j(i,["targetOrigin"]);(function(e,t,n){if(void 0===t&&(t=""),void 0===n&&(n={}),W())return window.parent.postMessage(JSON.stringify({eventType:e,eventData:t}),n.targetOrigin||"https://web.telegram.org");if(H(window))return window.TelegramWebviewProxy.postEvent(e,JSON.stringify(t));if(M(window))return window.external.notify(JSON.stringify({eventType:e,eventData:t}));throw new Error("Unable to determine current environment and possible way to send event.")})(e,n,k(k({},a),{targetOrigin:s})),t.log("log","[postEvent]",e,n)},this.subscribe=this.ee.subscribe.bind(this.ee),this.unsubscribe=this.ee.unsubscribe.bind(this.ee);var n=e.debug,r=void 0!==n&&n,i=e.emitter,o=void 0===i?null:i,s=e.targetOrigin,a=void 0===s?"https://web.telegram.org":s;this.debug=r,this.targetOrigin=a,this.boundEmitter=o}return Object.defineProperty(e.prototype,"boundEmitter",{get:function(){return this._boundEmitter||null},set:function(e){null!==this._boundEmitter&&this._boundEmitter.off("message",this.processEvent),this._boundEmitter=e,null!==this._boundEmitter&&this._boundEmitter.on("message",this.processEvent)},enumerable:!1,configurable:!0}),e.prototype.bind=function(e){this.boundEmitter=e},e.prototype.unbind=function(){this.boundEmitter=null},e}();function z(e){void 0===e&&(e={});var t=e.defineReceiver,n=void 0===t||t,r=e.emitter,i=void 0===r?function(e){if(void 0===e&&(e=!1),void 0===T){var t=new h,n=function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];e&&x.apply(void 0,S([t,"[Bridge]"],n,!1))};window.addEventListener("message",(function(e){var r;if(n("log","message event received",e),e instanceof MessageEvent){if(e.source!==window.parent||"string"!=typeof e.data)return n("log","event rejected",e);r=e.data}else{if(!(e instanceof CustomEvent&&f(e.detail)&&"string"==typeof e.detail.eventType&&"eventData"in e.detail))return n("warn","event was skipped",e);r=e.detail}try{var i=L(r),o=i.type,s=i.data;t.emit("message",o,s)}catch(e){n("error","event data extraction error",r,e)}})),window.addEventListener("resize",(function(){var e={width:window.innerWidth,height:window.innerHeight,is_state_stable:!0,is_expanded:!0};t.emit("message","viewport_changed",e)})),T=t}return T}():r,o=j(e,["defineReceiver","emitter"]);return n&&function(e){if(void 0===e&&(e=!1),!B||e){var t=window;[["TelegramGameProxy_receiveEvent"],["TelegramGameProxy","receiveEvent"],["Telegram","WebView","receiveEvent"]].forEach((function(e){var n=t;e.forEach((function(e,t,r){t!==r.length-1?(e in n||(n[e]={}),n=n[e]):n[e]=function(e,t){window.dispatchEvent(new CustomEvent("message",{detail:{eventType:e,eventData:t}}))}}))})),B=!0}}(),new R(k(k({},o),{emitter:i}))}function N(e,t){switch(e){case"web_app_open_tg_link":case"web_app_open_invoice":case"web_app_setup_back_button":case"web_app_set_background_color":case"web_app_set_header_color":case"web_app_trigger_haptic_feedback":return P("6.1",t)<=0;case"web_app_open_popup":return P("6.2",t)<=0;case"web_app_close_scan_qr_popup":case"web_app_open_scan_qr_popup":case"web_app_read_text_from_clipboard":return P("6.4",t)<=0;default:return!0}}var $=y({backgroundColor:["bg_color",m],buttonColor:["button_color",m],buttonTextColor:["button_text_color",m],hintColor:["hint_color",m],linkColor:["link_color",m],secondaryBackgroundColor:["secondary_bg_color",m],textColor:["text_color",m]});var F=y({id:["id",d],isBot:["is_bot",v],firstName:["first_name",b],lastName:["last_name",_],username:["username",_],languageCode:["language_code",_],isPremium:["is_premium",v],photoUrl:["photo_url",_]},(function(){})),J=C({queryId:["query_id",E],user:["user",F],receiver:["receiver",F],chat:["chat",y({id:["id",d],title:["title",b],type:["type",b],username:["username",_],photoUrl:["photo_url",_]},(function(){}))],startParam:["start_param",E],canSendAfter:["can_send_after",function(e){if(null!==e)return O(e)}],authDate:["auth_date",O],hash:["hash",w]});function Z(e){var t=document.createElement("a");if(t.href=e,"http:"!==t.protocol&&"https:"!==t.protocol)throw Error("URL protocol is not supported by OS, or link has not allowed "+"protocol: ".concat(t.protocol));return t.href}function G(e,t){return function(n){return N(t[n],e)}}var K=function(){function e(e,t){var n=this;this.bridge=e,this.ee=new h,this._isVisible=!1,this.on=function(e,t){if("click"===e)return n.bridge.on("back_button_pressed",t);n.ee.on(e,t)},this.off=function(e,t){if("click"===e)return n.bridge.off("back_button_pressed",t);n.ee.off(e,t)},this.supports=G(t,{show:"web_app_setup_back_button",hide:"web_app_setup_back_button"})}return Object.defineProperty(e.prototype,"isVisible",{get:function(){return this._isVisible},set:function(e){this.bridge.postEvent("web_app_setup_back_button",{is_visible:e}),this._isVisible!==e&&(this._isVisible=e,this.ee.emit("visibleChanged",e))},enumerable:!1,configurable:!0}),e.prototype.hide=function(){this.isVisible=!1},e.prototype.show=function(){this.isVisible=!0},e}(),Q=function(){function e(e){this.bridge=e,this.ee=new h,this._isEnabled=!1,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee)}return Object.defineProperty(e.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(e){this.bridge.postEvent("web_app_setup_closing_behavior",{need_confirmation:e}),this._isEnabled!==e&&(this._isEnabled=e,this.ee.emit("change",e))},enumerable:!1,configurable:!0}),e.prototype.disable=function(){this.isEnabled=!1},e.prototype.enable=function(){this.isEnabled=!0},e}(),X=function(){function e(e,t){this.bridge=e,this.supports=G(t,{impactOccurred:"web_app_trigger_haptic_feedback",notificationOccurred:"web_app_trigger_haptic_feedback",selectionChanged:"web_app_trigger_haptic_feedback"})}return e.prototype.impactOccurred=function(e){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"impact",impact_style:e})},e.prototype.notificationOccurred=function(e){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"notification",notification_type:e})},e.prototype.selectionChanged=function(){this.bridge.postEvent("web_app_trigger_haptic_feedback",{type:"selection_change"})},e}(),Y=function(){function e(e,t,n){void 0===n&&(n={}),this._authDate=e,this._hash=t,this._canSendAfter=null,this._chat=null,this._queryId=null,this._receiver=null,this._startParam=null,this._user=null;var r=n.chat,i=void 0===r?null:r,o=n.user,s=void 0===o?null:o,a=n.queryId,c=void 0===a?null:a,u=n.receiver,p=void 0===u?null:u,l=n.startParam,h=void 0===l?null:l,f=n.canSendAfter,d=void 0===f?null:f;this._canSendAfter=d,this._chat=i,this._user=s,this._queryId=c,this._receiver=p,this._startParam=h}return Object.defineProperty(e.prototype,"authDate",{get:function(){return this._authDate},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"canSendAfter",{get:function(){return this._canSendAfter},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"chat",{get:function(){return this._chat},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hash",{get:function(){return this._hash},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"queryId",{get:function(){return this._queryId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"receiver",{get:function(){return this._receiver},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"startParam",{get:function(){return this._startParam},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"user",{get:function(){return this._user},enumerable:!1,configurable:!0}),e}(),ee=function(){function e(e,t,n,r){this.bridge=e,this._headerColor=n,this._backgroundColor=r,this.ee=new h,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.supports=G(t,{setHeaderColor:"web_app_set_header_color",setBackgroundColor:"web_app_set_background_color"})}return Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorScheme",{get:function(){return p(this.backgroundColor)?"dark":"light"},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"headerColor",{get:function(){return this._headerColor},enumerable:!1,configurable:!0}),e.prototype.setBackgroundColor=function(e){this.bridge.postEvent("web_app_set_background_color",{color:e}),this._backgroundColor!==e&&(this._backgroundColor=e,this.ee.emit("backgroundColorChanged",e))},e.prototype.setHeaderColor=function(e){this.bridge.postEvent("web_app_set_header_color",{color_key:e}),this._headerColor!==e&&(this._headerColor=e,this.ee.emit("headerColorChanged",e))},e}(),te=function(){function e(e,t,n,r){void 0===r&&(r={});var i=this;this.bridge=e,this._color=t,this._textColor=n,this.ee=new h,this._isActive=!1,this._isVisible=!1,this._isProgressVisible=!1,this._text="",this.on=function(e,t){if("click"===e)return i.bridge.on("main_button_pressed",t);i.ee.on(e,t)},this.off=function(e,t){if("click"===e)return i.bridge.off("main_button_pressed",t);i.ee.off(e,t)};var o=r.autocommit,s=void 0===o||o;this.autocommit=s}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(e){var t=this._color;this._color=e,this.autocommit&&this.commit(),this._color!==t&&this.ee.emit("colorChanged",this._color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isActive",{get:function(){return this._isActive},set:function(e){var t=this._isActive;this._isActive=e,this.autocommit&&this.commit(),this._isActive!==t&&this.ee.emit("activeChanged",this._isActive)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isProgressVisible",{get:function(){return this._isProgressVisible},set:function(e){var t=this._isProgressVisible;this._isProgressVisible=e,this.autocommit&&this.commit(),this._isProgressVisible!==t&&this.ee.emit("progressVisibleChanged",this._isProgressVisible)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isVisible",{get:function(){return this._isVisible},set:function(e){var t=this._isVisible;this._isVisible=e,this.autocommit&&this.commit(),this._isVisible!==t&&this.ee.emit("visibleChanged",this._isVisible)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(e){var t=this._text;this._text=e,this.autocommit&&this.commit(),this._text!==t&&this.ee.emit("textChanged",e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._textColor},set:function(e){var t=this._textColor;this._textColor=e,this.autocommit&&this.commit(),this._textColor!==t&&this.ee.emit("textColorChanged",this._textColor)},enumerable:!1,configurable:!0}),e.prototype.commit=function(){""!==this.text&&this.bridge.postEvent("web_app_setup_main_button",{is_visible:this.isVisible,is_active:this.isActive,is_progress_visible:this.isProgressVisible,text:this.text,color:this.color,text_color:this.textColor})},e.prototype.disable=function(){return this.isActive=!1,this},e.prototype.enable=function(){return this.isActive=!0,this},e.prototype.hide=function(){return this.isVisible=!1,this},e.prototype.hideProgress=function(){return this.isProgressVisible=!1,this},e.prototype.show=function(){return this.isVisible=!0,this},e.prototype.showProgress=function(){return this.isProgressVisible=!0,this},e.prototype.setText=function(e){return this.text=e,this},e.prototype.setTextColor=function(e){return this.textColor=e,this},e.prototype.setColor=function(e){return this.color=e,this},e}(),ne=function(e,t){return ne=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},ne(e,t)},re=function(){return re=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},re.apply(this,arguments)};var ie=function(){function e(e,t){this.bridge=e,this.ee=new h,this._isOpened=!1,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.supports=G(t,{open:"web_app_open_popup"})}return Object.defineProperty(e.prototype,"isOpened",{get:function(){return this._isOpened},set:function(e){this._isOpened!==e&&(this._isOpened=e,this.ee.emit("openChanged",this._isOpened))},enumerable:!1,configurable:!0}),e.prototype.open=function(e){var t=this;if(this.isOpened)throw new Error("Popup is already opened.");var n=function(e){var t=e.message.trim(),n=(e.title||"").trim(),r=e.buttons||[];if(n.length>64)throw new Error("Title has incorrect size: ".concat(n.length));if(0===t.length||t.length>256)throw new Error("Message has incorrect size: ".concat(t.length));if(r.length>3)throw new Error("Buttons have incorrect size: ".concat(r.length));return{title:n,message:t,buttons:0===r.length?[{type:"close",id:""}]:r.map((function(e){var t=e.id,n=void 0===t?"":t;if(n.length>64)throw new Error("Button ID has incorrect size: ".concat(n));switch(e.type){case void 0:case"default":case"destructive":if(e.text=e.text.trim(),0===e.text.length||e.text.length>64){var r=e.type||"default";throw new Error('Button text with type "'.concat(r,'" has incorrect size: ').concat(e.text.length))}}return re(re({},e),{id:n})}))}}(e);return this.bridge.postEvent("web_app_open_popup",n),this.isOpened=!0,new Promise((function(e){var n=function(r){var i=r.button_id,o=void 0===i?null:i;t.bridge.off("popup_closed",n),e(o),t.isOpened=!1};t.bridge.on("popup_closed",n)}))},e}(),oe=function(){function e(e,t){this.bridge=e,this._isOpened=!1,this.ee=new h,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.supports=G(t,{close:"web_app_close_scan_qr_popup",open:"web_app_open_scan_qr_popup"})}return e.prototype.close=function(){this.bridge.postEvent("web_app_close_scan_qr_popup"),this.isOpened=!1},Object.defineProperty(e.prototype,"isOpened",{get:function(){return this._isOpened},set:function(e){this._isOpened!==e&&(this._isOpened=e,this.ee.emit("openChanged",e))},enumerable:!1,configurable:!0}),e.prototype.open=function(e){var t=this;if(this.isOpened)throw new Error("QR scanner is already opened.");return this.bridge.postEvent("web_app_open_scan_qr_popup",{text:e}),this.isOpened=!0,new Promise((function(e){var n=function(){e(null),i()},r=function(t){var n=t.data;e(void 0===n?null:n),i()},i=function(){t.bridge.off("scan_qr_popup_closed",n),t.bridge.off("qr_text_received",r)};t.bridge.on("qr_text_received",r),t.bridge.on("scan_qr_popup_closed",n)}))},e}(),se=function(){function e(e){this.ee=new h,this._backgroundColor=null,this._buttonColor=null,this._buttonTextColor=null,this._hintColor=null,this._linkColor=null,this._secondaryBackgroundColor=null,this._textColor=null,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this.assignThemeParams(e,!1)}return e.request=function(e){return e.postEvent("web_app_request_theme"),new Promise((function(t){var n=function(r){e.off("theme_changed",n),t($(r))};e.on("theme_changed",n)}))},e.synced=function(t,n){var r=new e(n);return t.on("theme_changed",(function(e){r.assignThemeParams($(e),!0)})),r},e.prototype.assignThemeParams=function(e,t){var n=this,r=!1;["buttonColor","buttonTextColor","linkColor","textColor","hintColor","secondaryBackgroundColor","backgroundColor"].forEach((function(t){var i=e[t];if(void 0!==i){var o="_"+t;n[o]!==i&&(n[o]=i,r=!0)}})),r&&t&&this.ee.emit("change")},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buttonColor",{get:function(){return this._buttonColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"buttonTextColor",{get:function(){return this._buttonTextColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hintColor",{get:function(){return this._hintColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDark",{get:function(){var e=this.backgroundColor;return null===e||p(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"linkColor",{get:function(){return this._linkColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"secondaryBackgroundColor",{get:function(){return this._secondaryBackgroundColor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textColor",{get:function(){return this._textColor},enumerable:!1,configurable:!0}),e}();function ae(e){return e<0?0:e}var ce=function(){function e(e,t,n,r,i){this.bridge=e,this.ee=new h,this.on=this.ee.on.bind(this.ee),this.off=this.ee.off.bind(this.ee),this._height=ae(t),this._width=ae(n),this._stableHeight=ae(r),this._isExpanded=i}return e.request=function(e){return e.postEvent("web_app_request_viewport"),new Promise((function(t){var n=function(r){e.off("viewport_changed",n);var i=r.height,o=r.width,s=r.is_expanded,a=r.is_state_stable;t({height:i,isExpanded:s,width:o,isStateStable:a})};e.on("viewport_changed",n)}))},e.synced=function(t,n,r,i,o){var s=new e(t,n,r,i,o);return t.on("viewport_changed",(function(e){var t=e.height,n=e.width,r=e.is_expanded,i=e.is_state_stable;s.height=ae(t),s.width=ae(n),s.isExpanded=r,i&&(s.stableHeight=s.height)})),s},Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(e){this._height!==e&&(this._height=e,this.ee.emit("heightChanged",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"stableHeight",{get:function(){return this._stableHeight},set:function(e){this._stableHeight!==e&&(this._stableHeight=e,this.ee.emit("stableHeightChanged",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isExpanded",{get:function(){return this._isExpanded},set:function(e){this._isExpanded!==e&&(this._isExpanded=e,this.ee.emit("expansionChanged",e))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(e){this._width!==e&&(this._width=e,this.ee.emit("widthChanged",e))},enumerable:!1,configurable:!0}),e.prototype.expand=function(){this.bridge.postEvent("web_app_expand")},Object.defineProperty(e.prototype,"isStable",{get:function(){return this._stableHeight===this._height},enumerable:!1,configurable:!0}),e}(),ue=function(){function e(e,t,n){this.bridge=e,this._platform=n,this.supports=G(t,{openInvoice:"web_app_open_invoice",readTextFromClipboard:"web_app_read_text_from_clipboard"}),this.version=t}return e.prototype.close=function(){this.bridge.postEvent("web_app_close")},e.prototype.isVersionAtLeast=function(e){return P(e,this.version)>=0},e.prototype.openLink=function(e){if(e=Z(e),N("web_app_open_link",this.version))return this.bridge.postEvent("web_app_open_link",{url:e});window.open(e,"_blank")},e.prototype.openTelegramLink=function(e){var t=new URL(Z(e)),n=t.hostname,r=t.pathname,i=t.search;if("t.me"!==n)throw new Error("URL has not allowed hostname: ".concat(n,'. Only "t.me" is allowed'));if(N("web_app_open_tg_link",this.version))return this.bridge.postEvent("web_app_open_tg_link",{path_full:r+i});window.location.href=e},e.prototype.openInvoice=function(e){var t=this,n=new URL(Z(e)),r=n.hostname,i=n.pathname;if("t.me"!==r)throw new Error("Incorrect hostname: "+r);var o=i.match(/^\/(\$|invoice\/)([A-Za-z0-9\-_=]+)$/);if(null===o)throw new Error('Link pathname has incorrect format. Expected to receive "/invoice/slug" or "/$slug"');return this.bridge.postEvent("web_app_open_invoice",{slug:o[2]}),new Promise((function(e){var n=function(r){t.bridge.off("invoice_closed",n),e(r.status)};t.bridge.on("invoice_closed",n)}))},Object.defineProperty(e.prototype,"platform",{get:function(){return this._platform},enumerable:!1,configurable:!0}),e.prototype.ready=function(){this.bridge.postEvent("web_app_ready")},e.prototype.readTextFromClipboard=function(){for(var e=this,t="",n=0;n<32;n++)t+=Math.ceil(10*Math.random()).toString();return new Promise((function(n){var r=function(i){i.req_id===t&&(n(void 0===i.data?null:i.data),e.bridge.off("clipboard_text_received",r))};e.bridge.on("clipboard_text_received",r),e.bridge.postEvent("web_app_read_text_from_clipboard",{req_id:t})}))},e.prototype.sendData=function(e){var t=new Blob([e]).size;if(0===t||t>4096)throw new Error("Passed data has incorrect size: ".concat(t));this.bridge.postEvent("web_app_data_send",{data:e})},e}(),pe=C({version:["tgWebAppVersion",w],initData:["tgWebAppData",J],platform:["tgWebAppPlatform",w],themeParams:["tgWebAppThemeParams",$]}),le=function(e){function t(n,r){var i=e.call(this,'Method "'.concat(n,'" is not supported in Web Apps version ').concat(r,"."))||this;return Object.setPrototypeOf(i,t.prototype),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ne(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),he=function(e,t){var n=this;this.bridge=e,this.version=t,this.postEvent=function(e,t){if(!N(e,n.version))throw new le(e,n.version);return n.bridge.postEvent(e,t)},this.on=this.bridge.on.bind(this.bridge),this.off=this.bridge.off.bind(this.bridge)};function fe(e){return void 0===e&&(e={}),function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}(this,void 0,void 0,(function(){var t,n,r,i,o,s,a,c,u,p,l,h,f,d,b,_,g,v,m,y,w,E,O,C,x;return function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,a[0]&&(s=0)),s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}(this,(function(P){switch(P.label){case 0:return t=e.checkCompat,n=void 0===t||t,r=function(){var e="__initParams";try{var t=window.location.hash.slice(1),n=pe(t);return sessionStorage.setItem(e,t),n}catch(e){}try{return pe(sessionStorage.getItem(e)||"")}catch(e){}throw new Error("Unable to extract Web App data.")}(),i=r.initData,o=i.authDate,s=i.hash,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(i,["authDate","hash"]),c=r.version,u=r.platform,p=r.themeParams,l=p.backgroundColor,h=void 0===l?"#ffffff":l,f=p.buttonColor,d=void 0===f?"#000000":f,b=p.buttonTextColor,_=void 0===b?"#ffffff":b,g=z(e),v=n?new he(g,c):g,W()&&((m=document.createElement("style")).id="__tg-iframe-style__",document.head.appendChild(m),g.on("set_custom_style",(function(e){return m.innerHTML=e})),g.postEvent("iframe_ready")),"tdesktop"===u||"macos"===u?[3,2]:[4,ce.request(v)];case 1:return x=P.sent(),[3,3];case 2:x={width:window.innerWidth,height:window.innerHeight,isStateStable:!0,isExpanded:!0},P.label=3;case 3:return w=(y=x).width,E=y.isExpanded,O=y.height,C=y.isStateStable,[2,{backButton:new K(v,c),bridge:g,closingConfirmation:new Q(v),haptic:new X(v,c),initData:new Y(o,s,a),layout:new ee(v,c,"bg_color",h),mainButton:new te(v,d,_),popup:new ie(v,c),qrScanner:new oe(v,c),themeParams:se.synced(v,p),viewport:ce.synced(v,O,w,C?O:0,E),webApp:new ue(v,c,u)}]}}))}))}var de=(0,r.createContext)({components:null,didInit:!1,error:null});de.displayName="SDKContext";var be=function(){return(0,r.useContext)(de)};function _e(e){var t=be().components;if(null===t)throw new Error('Unable to get component "'.concat(e,'" as long as SDK is not initialized.'));return t[e]}var ge=(0,r.memo)((function(e){var t=e.children,n=e.initOptions,i=(0,r.useState)(!1),o=i[0],s=i[1],a=(0,r.useState)(null),c=a[0],u=a[1],p=(0,r.useState)(null),l=p[0],h=p[1];(0,r.useEffect)((function(){s(!0),fe(n).then(h).catch(u)}),[]);var f=(0,r.useMemo)((function(){return{components:l,didInit:o,error:c}}),[o,l,c]);return r.createElement(de.Provider,{value:f},t)}));ge.displayName="SDKProvider";function ve(){return _e("webApp")}var me=n(6924);const ye=()=>{const{setColorMode:e}=(0,me.I)(),{colorScheme:t}=ve();return(0,r.useEffect)((()=>{e(t)}),[t]),r.createElement(r.Fragment,null,r.createElement(s.l_,{to:a}))},we=e=>{let{children:t}=e;const{components:n}=be();return null===n?null:r.createElement(o.Z,{noFooter:!0},t)},Ee=()=>r.createElement(ge,null,r.createElement(we,null,r.createElement(ye,null)));var Oe=n(4401);function Ce(){return Oe.Z.canUseDOM&&(W()&&document.referrer.startsWith("https://web.telegram.org/")||M(window)||H(window))?r.createElement(Ee,null):r.createElement(c,null)}}}]);