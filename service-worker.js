if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return r[s]||(e=new Promise((async e=>{if("document"in self){const r=document.createElement("script");r.src=s,document.head.appendChild(r),r.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!r[s])throw new Error(`Module ${s} didn’t register its module`);return r[s]}))},e=(e,r)=>{Promise.all(e.map(s)).then((s=>r(1===s.length?s[0]:s)))},r={require:Promise.resolve(e)};self.define=(e,i,l)=>{r[e]||(r[e]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return r;case"module":return n;default:return s(e)}}))).then((s=>{const e=l(...s);return r.default||(r.default=e),r}))})))}}define("./service-worker.js",["https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/./workbox-f7715658"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"6eddc493c101f09c8f950f118fc898bd"},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/css/styles.ccc820a8.css",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/img/back-to-top.8b37f773.svg",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/205.5d3509b6.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/362.b7ca8b21.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/616.6816051f.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/961.fe8e32cc.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/app.758626ea.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/runtime~app.ecd3d744.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-2d0ad528.9b693a7a.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-3706649a.c03fdd04.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-4911275f.7bacbed6.js",revision:null},{url:"https://cdn.jsdelivr.net/gh/chemicaltools/chemicaltools.github.io@gh-pages/assets/js/v-8daa1a0e.8af604b7.js",revision:null},{url:"help.html",revision:"a2e9ee7d4b906c9b99d6dee6b81e8300"},{url:"index.html",revision:"eb8be4668b5321c4a18bb55574424403"},{url:"zh/index.html",revision:"ffeea0a97c13bfa82da28606d18a9cdf"}],{})}));
