"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),p=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),b=a,d=u["".concat(m,".").concat(b)]||u[b]||l[b]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5339:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"Integra\xe7\xe3o com a abmex",sidebar_position:2},i=void 0,c={unversionedId:"integrations/abmex",id:"integrations/abmex",title:"Integra\xe7\xe3o com a abmex",description:"Vincule produtos da abmex na abmexmembers",source:"@site/docs/integrations/abmex.md",sourceDirName:"integrations",slug:"/integrations/abmex",permalink:"/abmexmembers-doc/docs/integrations/abmex",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Integra\xe7\xe3o com a abmex",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Integra\xe7\xe3o com a abmexmembers",permalink:"/abmexmembers-doc/docs/integrations/home"}},m={},p=[{value:"Vincule produtos da abmex na abmexmembers",id:"vincule-produtos-da-abmex-na-abmexmembers",level:3}],s={toc:p},u="wrapper";function l(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"vincule-produtos-da-abmex-na-abmexmembers"},"Vincule produtos da abmex na abmexmembers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /member-area-dev.herokuapp.com/product/link/abmex - FORMATO DA REQUISI\xc7\xc3O")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Via Body na requisi\xe7\xe3o:")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Esta rota faz uma requisi\xe7\xe3o na plataforma integrada e busca as informa\xe7\xf5es do produto a ser vinculado.  "),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"product_reference")," \u2192 id do produto na plataforma integrada;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'{\n  "product_reference": number,\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"OBS:")," Ao vincular o produto, automaticamente vincula todos os planos desse produto na abmexmembers."))}l.isMDXComponent=!0}}]);