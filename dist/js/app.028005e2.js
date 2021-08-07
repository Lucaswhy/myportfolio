(function(t){function e(e){for(var o,r,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var o={},r={app:0},a={app:0},i=[];function s(t){return l.p+"js/"+({"portfolio-en":"portfolio-en","portfolio-pt":"portfolio-pt"}[t]||t)+"."+{"portfolio-en":"5245107d","portfolio-pt":"d0579eee"}[t]+".js"}function l(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"portfolio-en":1,"portfolio-pt":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var o="css/"+({"portfolio-en":"portfolio-en","portfolio-pt":"portfolio-pt"}[t]||t)+"."+{"portfolio-en":"1f4a7231","portfolio-pt":"8bca5282"}[t]+".css",a=l.p+o,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===o||u===a))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===o||u===a)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[t],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var o=a[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,n){o=a[t]=[e,n]}));e.push(o[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+o+": "+r+")",p.name="ChunkLoadError",p.type=o,p.request=r,n[1](p)}a[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=o,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)l.d(n,o,function(e){return t[e]}.bind(null,o));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("08a0")},"08a0":function(t,e,n){},"23c0":function(t,e,n){},3632:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["pt"==t.language?n("Header"):t._e(),"en"==t.language?n("HeaderEn"):t._e(),n("div",{staticStyle:{"min-height":"80vh"}},[n("router-view")],1),n("Footer")],1)},a=[],i=(n("caad"),n("2532"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[o("h1",{staticClass:"menu__logo"},[t._v("Lucas Herculano")]),o("div",{staticClass:"box__hamburger",on:{click:function(e){t.isOpened=!t.isOpened}}},[o("div",{staticStyle:{"margin-top":"0"}}),o("div"),o("div")]),o("nav",{staticClass:"menu__item",style:0==t.isOpened?"":"display:flex;"},[o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/"}},[t._v("Home")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/sobre-mim"}},[t._v("Sobre Mim")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/habilidade"}},[t._v("Habilidades")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/projeto"}},[t._v("Projetos")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/contato"}},[t._v("Contato")]),o("div",{on:{click:function(e){t.isDropped=!t.isDropped}}},[o("div",{staticClass:"menu__arrow",style:0==t.isDropped?"":"transform:rotate(180deg)"}),o("img",{attrs:{src:n("8266")}}),o("a",{attrs:{href:"./home-en"}},[o("transition",{attrs:{name:"fade"}},[t.isDropped?o("div",{staticClass:"menu--drop"},[o("img",{attrs:{src:n("6c04")}})]):t._e()])],1)])],1)])])}),s=[],l={data:function(){return{isDropped:!1,isOpened:!1}}},c=l,u=(n("a5f4"),n("2877")),p=Object(u["a"])(c,i,s,!1,null,"a111c808",null),f=p.exports,d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"container-fluid"},[o("h1",{staticClass:"menu__logo"},[t._v("Lucas Herculano")]),o("div",{staticClass:"box__hamburger",on:{click:function(e){t.isOpened=!t.isOpened}}},[o("div",{staticStyle:{"margin-top":"0"}}),o("div"),o("div")]),o("nav",{staticClass:"menu__item",style:0==t.isOpened?"":"display:flex;"},[o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/home-en"}},[t._v("Home")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/sobre-mim-en"}},[t._v("About Me")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/habilidade-en"}},[t._v("Skills")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/projeto-en"}},[t._v("Projects")]),o("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:"/contato-en"}},[t._v("Contact")]),o("div",{on:{click:function(e){t.isDropped=!t.isDropped}}},[o("div",{staticClass:"menu__arrow",style:0==t.isDropped?"":"transform:rotate(180deg)"}),o("img",{attrs:{src:n("6c04")}}),o("a",{attrs:{href:"./"}},[o("transition",{attrs:{name:"fade"}},[t.isDropped?o("div",{staticClass:"menu--drop"},[o("img",{attrs:{src:n("8266")}})]):t._e()])],1)])],1)])])},m=[],h={data:function(){return{isDropped:!1,isOpened:!1}}},v=h,b=(n("c8a4"),Object(u["a"])(v,d,m,!1,null,"74f7ba03",null)),g=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},k=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[n("footer",[n("div",{staticClass:"footer__box"},[n("span",[t._v(" © 2021 Lucas Herculano Rodrigues | Fullstack Developer | Brasil - São Paulo | Portfolio Pessoal ")]),n("div",[n("a",{attrs:{target:"_blank",href:"https://api.whatsapp.com/send?phone=5511961994798&text=Ol%C3%A1!%20Tudo%20bom??"}},[n("i",{staticClass:"bi bi-whatsapp"})]),n("a",{attrs:{target:"_blank",href:"https://www.linkedin.com/in/lucas-rodrigues-ab797b190/"}},[n("i",{staticClass:"bi bi-linkedin"})]),n("a",{attrs:{target:"_blank",href:"https://github.com/Lucaswhy"}},[n("i",{staticClass:"bi bi-github"})]),n("a",{attrs:{href:"mailto:lucas_herculano_2010@hotmail.com"}},[n("i",{staticClass:"bi bi-envelope-fill"})])])])])])}],y={},C=y,w=(n("864f"),Object(u["a"])(C,_,k,!1,null,"2db89680",null)),O=w.exports,j={name:"App",components:{Header:f,HeaderEn:g,Footer:O},data:function(){return{language:""}},mounted:function(){var t=window.location.pathname;t.includes("en")?this.language="en":this.language="pt"}},x=j,E=(n("034f"),Object(u["a"])(x,r,a,!1,null,null,null)),P=E.exports,S=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));o["a"].use(S["a"]);var D=function(){return n.e("portfolio-pt").then(n.bind(null,"28a5"))},H=function(){return n.e("portfolio-pt").then(n.bind(null,"518f"))},A=function(){return n.e("portfolio-pt").then(n.bind(null,"45f1"))},L=function(){return n.e("portfolio-pt").then(n.bind(null,"2053"))},T=function(){return n.e("portfolio-pt").then(n.bind(null,"6b4f"))},M=function(){return n.e("portfolio-en").then(n.bind(null,"5a0b"))},$=function(){return n.e("portfolio-en").then(n.bind(null,"1c53"))},N=function(){return n.e("portfolio-en").then(n.bind(null,"fbc9"))},B=function(){return n.e("portfolio-en").then(n.bind(null,"875b"))},F=function(){return n.e("portfolio-en").then(n.bind(null,"da48"))},q=new S["a"]({mode:"history",routes:[{name:"Home",path:"/",component:D},{path:"/sobre-mim",component:H},{path:"/habilidade",component:A},{path:"/projeto",component:L},{path:"/contato",component:T},{path:"/home-en",component:M},{path:"/sobre-mim-en",component:$},{path:"/habilidade-en",component:N},{path:"/projeto-en",component:B},{path:"/contato-en",component:F},{path:"*",redirect:"/"}]}),J=q;o["a"].config.productionTip=!1,new o["a"]({router:J,render:function(t){return t(P)}}).$mount("#app")},"6c04":function(t,e,n){t.exports=n.p+"img/united-states.e131598f.jpg"},8266:function(t,e,n){t.exports=n.p+"img/brazil.ec912a2d.jpg"},"864f":function(t,e,n){"use strict";n("23c0")},a5f4:function(t,e,n){"use strict";n("d546")},c8a4:function(t,e,n){"use strict";n("3632")},d546:function(t,e,n){}});
//# sourceMappingURL=app.028005e2.js.map