"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[9514,9291],{1049:(e,t,n)=>{n.r(t),n.d(t,{default:()=>He});var a=n(9901),l=n(4517),r=n(6394),o=n(6789),c=n(4888),i=n(954),s=n(4904),d=n(9487),m=n(9829),u=n(458),b=n(1641),p=n(8077);const h="backToTopButton_ugjd",E="backToTopButtonShow_PanE";function f(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:o,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(r.current?r.current=!1:a>=o?(c(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,l(!1))})),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,h,e&&E),type:"button",onClick:t})}const g="root_rS2H";function v(e){return a.createElement("div",{className:g},a.createElement(f,e))}var _=n(6172),k=n(7057),C=n(9634),S=n(6140),N=n(5402);function I(e){return a.createElement("svg",(0,N.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const Z="collapseSidebarButton_IKFi",y="collapseSidebarButtonIcon_Lzgf";function x(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",Z),onClick:t},a.createElement(I,{className:y}))}var w=n(8943),T=n(4074);const A=Symbol("EmptyContext"),L=a.createContext(A);function M(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(L.Provider,{value:r},t)}var F=n(6975),P=n(2931),H=n(2562),B=n(2353);function W(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function O(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,C.L)(),f=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,r),v=(0,P.Mg)(h,r),{collapsed:_,setCollapsed:k}=(0,F.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(L);if(e===A)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),Z=function(e){void 0===e&&(e=!_),I(e?null:s),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const r=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!r&&n&&l(!1)}),[t,r,n,l])}({isActive:g,collapsed:_,updateCollapsed:Z}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&k(!0)}),[b,S,s,k,E]),a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":_},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(H.Z,(0,N.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{null==n||n(t),h?Z(!1):(e.preventDefault(),Z())}:()=>{null==n||n(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!_:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(W,{categoryLabel:u,onClick:e=>{e.preventDefault(),Z()}})),a.createElement(F.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(G,{items:m,tabIndex:_?-1:0,onItemClick:n,activePath:r,level:c+1})))}var D=n(6665),R=n(8862);const z="menuExternalLink_JvGO";function j(e){let{item:t,onItemClick:n,activePath:r,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,r),E=(0,D.Z)(m);return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},a.createElement(H.Z,(0,N.Z)({className:(0,l.Z)("menu__link",!E&&z,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(R.Z,null)))}const V="menuHtmlItem_O0Tv";function Y(e){let{item:t,level:n,index:r}=e;const{value:c,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),i&&[V,"menu__list-item"],s),key:r,dangerouslySetInnerHTML:{__html:c}})}function U(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(O,(0,N.Z)({item:t},n));case"html":return a.createElement(Y,(0,N.Z)({item:t},n));default:return a.createElement(j,(0,N.Z)({item:t},n))}}function K(e){let{items:t,...n}=e;return a.createElement(M,null,t.map(((e,t)=>a.createElement(U,(0,N.Z)({key:t,item:e,index:t},n)))))}const G=(0,a.memo)(K),q="menu_r68g",Q="menuWithAnnouncementBar_zrYU";function J(e){let{path:t,sidebar:n,className:r}=e;const c=function(){const{isActive:e}=(0,w.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",q,c&&Q,r)},a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(G,{items:n,activePath:t,level:1})))}const X="sidebar_z_FR",$="sidebarWithHideableNavbar_cISD",ee="sidebarHidden_x93S",te="sidebarLogo_MC84";function ne(e){let{path:t,sidebar:n,onCollapse:r,isHidden:o}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,C.L)();return a.createElement("div",{className:(0,l.Z)(X,c&&$,o&&ee)},c&&a.createElement(S.Z,{tabIndex:-1,className:te}),a.createElement(J,{path:t,sidebar:n}),i&&a.createElement(x,{onClick:r}))}const ae=a.memo(ne);var le=n(2883),re=n(2194);const oe=e=>{let{sidebar:t,path:n}=e;const r=(0,re.e)();return a.createElement("ul",{className:(0,l.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(G,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function ce(e){return a.createElement(le.Zo,{component:oe,props:e})}const ie=a.memo(ce);function se(e){const t=(0,k.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(ae,e),l&&a.createElement(ie,e))}const de="expandButton_fjjQ",me="expandButtonIcon_EtwN";function ue(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:de,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(I,{className:me}))}const be={docSidebarContainer:"docSidebarContainer_P24Y",docSidebarContainerHidden:"docSidebarContainerHidden_OxO5",sidebarViewport:"sidebarViewport_mYqg"};function pe(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:(null==n?void 0:n.name)??"noSidebar"},t)}function he(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}=e;const{pathname:c}=(0,_.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),r((e=>!e))}),[r,i]);return a.createElement("aside",{className:(0,l.Z)(o.k.docs.docSidebarContainer,be.docSidebarContainer,n&&be.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(be.docSidebarContainer)&&n&&s(!0)}},a.createElement(pe,null,a.createElement("div",{className:(0,l.Z)(be.sidebarViewport,i&&be.sidebarViewportHidden)},a.createElement(se,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&a.createElement(ue,{toggleSidebar:d}))))}const Ee="root_Dgn7",fe="sticky_i8QA",ge="logoWrapper_KKua",ve="logoText_COcz";var _e,ke,Ce,Se,Ne;function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ie.apply(this,arguments)}const Ze=e=>{let{title:t,titleId:n,...l}=e;return a.createElement("svg",Ie({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,fill:"none","aria-labelledby":n},l),t?a.createElement("title",{id:n},t):null,_e||(_e=a.createElement("rect",{width:32,height:32,fill:"url(#a)",rx:16})),ke||(ke=a.createElement("path",{fill:"#fff",d:"M7.62 18.441c.471.36 1.184.77 2.138 1.322l2.26 1.304c1.882 1.087 2.824 1.631 3.994 1.631 1.17 0 2.111-.544 3.994-1.63l2.26-1.305c.954-.551 1.666-.962 2.137-1.322.458.35.687.651.687.984 0 .676-.941 1.22-2.824 2.306l-2.26 1.305c-1.883 1.087-2.824 1.63-3.994 1.63-1.17 0-2.112-.543-3.995-1.63l-2.26-1.305c-1.882-1.087-2.824-1.63-2.824-2.306 0-.333.23-.634.688-.984Z"})),Ce||(Ce=a.createElement("path",{fill:"#fff",d:"M7.62 15.016c.471.36 1.184.77 2.138 1.321l2.26 1.305c1.882 1.087 2.824 1.63 3.994 1.63 1.17 0 2.111-.543 3.994-1.63l2.26-1.305c.954-.55 1.666-.962 2.137-1.321.458.35.687.651.687.984 0 .676-.941 1.22-2.824 2.306l-2.26 1.305c-1.883 1.087-2.824 1.63-3.994 1.63-1.17 0-2.112-.543-3.995-1.63l-2.26-1.305C7.876 17.22 6.934 16.676 6.934 16c0-.333.23-.634.688-.984Z"})),Se||(Se=a.createElement("path",{fill:"#fff",d:"M9.758 14.881c-1.883-1.087-2.825-1.63-2.825-2.306 0-.675.942-1.219 2.825-2.306l2.26-1.305c1.882-1.087 2.824-1.63 3.994-1.63 1.17 0 2.111.543 3.994 1.63l2.26 1.305c1.883 1.087 2.824 1.63 2.824 2.306 0 .675-.941 1.219-2.824 2.306l-2.26 1.305c-1.883 1.087-2.824 1.63-3.994 1.63-1.17 0-2.112-.543-3.995-1.63l-2.26-1.305Z"})),Ne||(Ne=a.createElement("defs",null,a.createElement("linearGradient",{id:"a",x1:16,x2:16,y1:0,y2:32,gradientUnits:"userSpaceOnUse"},a.createElement("stop",{stopColor:"#7688FF"}),a.createElement("stop",{offset:1,stopColor:"#5A6EF5"})))))};function ye(e){return a.createElement("div",{className:Ee},a.createElement("div",{className:fe},a.createElement("div",{className:ge},a.createElement(Ze,null),a.createElement("span",{className:ve},"Web apps")),a.createElement(he,e)))}const xe={docMainContainer:"docMainContainer_jwh4",docMainContainerEnhanced:"docMainContainerEnhanced_MyW7",docItemWrapperEnhanced:"docItemWrapperEnhanced_tlPP"};function we(e){let{hiddenSidebarContainer:t,children:n}=e;const r=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(xe.docMainContainer,(t||!r)&&xe.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",xe.docItemWrapper,t&&xe.docItemWrapperEnhanced)},n))}const Te="docPage_hoTu",Ae="docsWrapper_ubY3";function Le(e){let{children:t}=e;const n=(0,d.V)(),[l,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Ae},a.createElement(v,null),a.createElement("div",{className:Te},n&&a.createElement(ye,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:r}),a.createElement(we,{hiddenSidebarContainer:l},t)))}var Me=n(9291),Fe=n(5774);function Pe(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Fe.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(r.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function He(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(Me.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Pe,e),a.createElement(r.FG,{className:(0,l.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Le,null,c)))))}},9291:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9901),l=n(458),r=n(6394),o=n(9829);function c(){return a.createElement(a.Fragment,null,a.createElement(r.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);