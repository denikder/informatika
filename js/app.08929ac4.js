(function(){"use strict";var t={8951:function(t,e,n){var a=n(9242),i=n(3396);const s={class:"circle"};function r(t,e){const n=(0,i.up)("my-header"),a=(0,i.up)("my-hexagon"),r=(0,i.up)("my-bigcircle"),o=(0,i.up)("my-smallcircle");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(n),(0,i.Wm)(a),(0,i._)("div",s,[(0,i.Wm)(r),(0,i.Wm)(o)])],64)}var o=n(89);const c={},l=(0,o.Z)(c,[["render",r]]);var u=l;const m={class:"big-circle"};function h(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",m)}var p={name:"my-bigcircle"};const d=(0,o.Z)(p,[["render",h]]);var _=d;const v={class:"small-circle"},g=(0,i._)("div",{class:"illum"},null,-1),f=[g];function w(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",v,f)}var x={name:"my-smallcircle"};const y=(0,o.Z)(x,[["render",w]]);var b=y,L=n(7139);const k={class:"competitor"},X={class:"main-hexagons"},O={class:"hexagons"},z=["onClick"],D={class:"place"},E={class:"date"},T={class:"time"},j=(0,i._)("button",{class:"buy_tickets"},"Купить билет",-1);function H(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",k,[(0,i._)("div",{class:"competitor_1",style:(0,L.j5)({transform:s.competitor_1_translate})},[(0,i._)("span",null,(0,L.zw)(s.hexagons[2].competitor_1),1)],4),(0,i._)("div",{class:"competitor_2",style:(0,L.j5)({transform:s.competitor_2_translate})},[(0,i._)("span",null,(0,L.zw)(s.hexagons[2].competitor_2),1)],4)]),(0,i._)("div",X,[(0,i._)("div",O,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.hexagons,((t,e)=>((0,i.wg)(),(0,i.iD)("div",{class:"hexagon",key:t.id,onClick:t=>r.center(e)},[(0,i._)("span",D,(0,L.zw)(t.place),1),(0,i._)("span",E,(0,L.zw)(t.date),1),(0,i._)("span",T,(0,L.zw)(t.time),1),(0,i.Uk)(),j],8,z)))),128))])])],64)}n(560);var C={name:"my-hexagon",data(){return{hexagons:[{id:1,place:"Стадион",time:"17:00",date:"30 мая",competitor_1:"Соперник-1",competitor_2:"Соперник-2"},{id:2,place:"Стадион",time:"15:00",date:"17 июня",competitor_1:"Соперник-3",competitor_2:"Соперник-4"},{id:3,place:"Стадион",time:"13:00",date:"26 июня",competitor_1:"Соперник-5",competitor_2:"Соперник-6"},{id:4,place:"Стадион",time:"16:00",date:"16 июля",competitor_1:"Соперник-7",competitor_2:"Соперник-8"},{id:5,place:"Стадион",time:"19:00",date:"30 сентября",competitor_1:"Соперник-9",competitor_2:"Соперник-10"}],competitor_1_translate:"translateX(-100%)",competitor_2_translate:"translateX(100%) rotate(180deg)"}},mounted(){document.addEventListener("mousewheel",this.List),document.addEventListener("touchmove",this.List),setTimeout((()=>this.competitor_1_translate="translateX(0%)"),100),setTimeout((()=>this.competitor_2_translate="translateX(0%) rotate(180deg)"),100)},methods:{List(t){document.querySelector(".main-hexagons").removeEventListener("wheel",this.List),t.deltaY>0?(this.hexagons.unshift(this.hexagons.pop()),this.animateHexagons()):(this.hexagons.push(this.hexagons.shift()),this.animateHexagons())},animateHexagons(){this.competitor_1_translate="translateX(-100%)",this.competitor_2_translate="translateX(100%) rotate(180deg)",setTimeout((()=>this.competitor_1_translate="translateX(0%)"),750),setTimeout((()=>this.competitor_2_translate="translateX(0%) rotate(180deg)"),750),document.removeEventListener("mousewheel",this.List),document.removeEventListener("touchmove",this.List),setTimeout((()=>{document.addEventListener("mousewheel",this.List),document.addEventListener("touchmove",this.List)}),1e3)},center:function(t){2!=t&&(this.hexagons[t]=this.hexagons.splice(2,1,this.hexagons[t])[0],this.competitor_1_translate="translateX(-100%)",this.competitor_2_translate="translateX(100%) rotate(180deg)",setTimeout((()=>this.competitor_1_translate="translateX(0%)"),750),setTimeout((()=>this.competitor_2_translate="translateX(0%) rotate(180deg)"),750))}}};const Z=(0,o.Z)(C,[["render",H]]);var W=Z;const Y={class:"header"},M=(0,i._)("span",{class:"tickets"},"Билеты и абонементы",-1),V=(0,i._)("div",{class:"middle-header"},[(0,i._)("span",null,"Как купить?"),(0,i._)("span",null,"Правила"),(0,i._)("span",null,"Возрат билетов")],-1),B={class:"ent"},P={class:"entrance"},q={class:"icon-ent"},F={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{"enable-background":"new 0 0 512 512"},"xml:space":"preserve"},K=(0,i._)("g",null,[(0,i._)("g",null,[(0,i._)("path",{d:"M421.5,0h-240c-24.813,0-45,20.187-45,45v111c0,8.284,6.716,15,15,15s15-6.716,15-15V45c0-8.271,6.729-15,15-15h240 c8.271,0,15,6.729,15,15v422c0,8.271-6.729,15-15,15h-240c-8.271,0-15-6.729-15-15V356c0-8.284-6.716-15-15-15s-15,6.716-15,15 v111c0,24.813,20.187,45,45,45h240c24.813,0,45-20.187,45-45V45C466.5,20.187,446.313,0,421.5,0z",fill:"#000000",style:{fill:"rgb(255, 255, 255)"}})])],-1),S=(0,i._)("g",null,[(0,i._)("g",null,[(0,i._)("path",{d:"M347.643,243.741l-61.421-43.301c-6.771-4.774-16.128-3.153-20.902,3.617c-4.773,6.771-3.154,16.129,3.617,20.903 L291.69,241H60.5c-8.284,0-15,6.716-15,15s6.716,15,15,15h231.19l-22.753,16.042c-6.771,4.773-8.391,14.132-3.617,20.903 c4.776,6.774,14.135,8.389,20.902,3.617l61.421-43.301C356.095,262.303,356.075,249.685,347.643,243.741z",fill:"#000000",style:{fill:"rgb(255, 255, 255)"}})])],-1),U=[K,S],A=(0,i._)("div",null,"Войти",-1),G={class:"icon-menu"},I={xmlns:"http://www.w3.org/2000/svg",id:"Layer",viewBox:"0 0 24 24",style:{}},J=(0,i._)("path",{id:"menu-alt",d:"m21 6.75h-11a.75.75 0 0 1 0-1.5h11a.75.75 0 0 1 0 1.5zm.75 5.25a.75.75 0 0 0 -.75-.75h-18a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 .75-.75zm-7 6a.75.75 0 0 0 -.75-.75h-11a.75.75 0 0 0 0 1.5h11a.75.75 0 0 0 .75-.75z",fill:"rgb(0,0,0)",style:{fill:"rgb(255, 255, 255)"}},null,-1),N=[J];function Q(t,e,n,a,s,r){return(0,i.wg)(),(0,i.iD)("div",Y,[M,V,(0,i._)("div",B,[(0,i._)("span",P,[(0,i._)("div",q,[((0,i.wg)(),(0,i.iD)("svg",F,U))]),A]),(0,i._)("span",G,[((0,i.wg)(),(0,i.iD)("svg",I,N))])])])}var R={name:"my-header"};const $=(0,o.Z)(R,[["render",Q]]);var tt=$,et=[_,b,W,tt],nt=(0,a.ri)(u);et.forEach((t=>{nt.component(t.name,t)})),nt.mount("#app")}},e={};function n(a){var i=e[a];if(void 0!==i)return i.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,i,s){if(!a){var r=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],s=t[u][2];for(var o=!0,c=0;c<a.length;c++)(!1&s||r>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[c])}))?a.splice(c--,1):(o=!1,s<r&&(r=s));if(o){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[a,i,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,s,r=a[0],o=a[1],c=a[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)n.o(o,i)&&(n.m[i]=o[i]);if(c)var u=c(n)}for(e&&e(a);l<r.length;l++)s=r[l],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(u)},a=self["webpackChunkinformatika_1"]=self["webpackChunkinformatika_1"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(8951)}));a=n.O(a)})();
//# sourceMappingURL=app.08929ac4.js.map