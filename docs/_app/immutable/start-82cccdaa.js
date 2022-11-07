import{S as Qe,i as xe,s as et,a as tt,e as C,c as nt,b as W,g as he,t as F,d as me,f as J,h as G,j as rt,o as Se,k as at,l as ot,m as st,n as ke,p as B,q as it,r as lt,u as ct,v as Z,w as Q,x as Ie,y as x,z as ee,A as Ge}from"./chunks/index-af462134.js";import{g as Ke,f as ze,s as M,a as Oe,i as ft}from"./chunks/singletons-c241d250.js";import{s as ut}from"./chunks/paths-6cd3a76e.js";function pt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ht=["href","pathname","search","searchParams","toString","toJSON"];function mt(r,e){const n=new URL(r);for(const i of ht){let o=n[i];Object.defineProperty(n,i,{get(){return e(),o},enumerable:!0,configurable:!0})}return gt(n),n}function gt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function wt(r){return r.replace(/\/$/,"")+_t}function yt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;de.delete(i)}return ge(r,e)};const de=new Map;function bt(r,e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(o+=`[data-hash="${yt(n.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:t,...f}=JSON.parse(d.textContent),g=d.getAttribute("data-ttl");return g&&de.set(e,{body:t,init:f,ttl:1e3*Number(g)}),Promise.resolve(new Response(t,f))}return ge(r,n)}function vt(r,e){const n=de.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);de.delete(r)}return ge(r,e)}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function kt(r){const e=[],n=[],i=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${St(r).map((t,f,g)=>{const p=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(p);if(_)return e.push(_[1]),n.push(_[2]),i.push(!1),"(?:/(.*))?";const w=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(p);if(w)return e.push(w[1]),n.push(w[2]),i.push(!0),"(?:/([^/]+))?";const O=f===g.length-1;return p?"/"+p.split(/\[(.+?)\](?!\])/).map(($,V)=>{if(V%2){const T=Et.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,ie,ne]=T;return e.push(ie),n.push(ne),i.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return O&&$.includes(".")&&(o=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${o?"/?":""}$`),names:e,types:n,optional:i}}function Rt(r){return!/^\([^)]+\)$/.test(r)}function St(r){return r.slice(1).split("/").filter(Rt)}function Ot(r,{names:e,types:n,optional:i},o){const d={};for(let t=0;t<e.length;t+=1){const f=e[t],g=n[t];let p=r[t+1];if(p||!i[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(p))return}d[f]=p!=null?p:""}}return d}function Lt(r,e,n,i){const o=new Set(e);return Object.entries(n).map(([f,[g,p,_]])=>{const{pattern:w,names:O,types:K,optional:z}=kt(f),$={id:f,exec:V=>{const T=w.exec(V);if(T)return Ot(T,{names:O,types:K,optional:z},i)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...p||[]].map(t),leaf:d(g)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function d(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function $t(r){let e,n,i;var o=r[0][0];function d(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=Z(o,d(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Ie(e.$$.fragment,t),n=C()},m(t,f){e&&x(e,t,f),W(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){he();const p=e;F(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function At(r){let e,n,i;var o=r[0][0];function d(t){return{props:{data:t[2],$$slots:{default:[It]},$$scope:{ctx:t}}}}return o&&(e=Z(o,d(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Ie(e.$$.fragment,t),n=C()},m(t,f){e&&x(e,t,f),W(t,n,f),i=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){he();const p=e;F(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function It(r){let e,n,i;var o=r[0][1];function d(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=Z(o,d(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Ie(e.$$.fragment,t),n=C()},m(t,f){e&&x(e,t,f),W(t,n,f),i=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){he();const p=e;F(p.$$.fragment,1,0,()=>{ee(p,1)}),me()}o?(e=Z(o,d(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function Me(r){let e,n=r[5]&&He(r);return{c(){e=at("div"),n&&n.c(),this.h()},l(i){e=ot(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=st(e);n&&n.l(o),o.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),B(e,"position","absolute"),B(e,"left","0"),B(e,"top","0"),B(e,"clip","rect(0 0 0 0)"),B(e,"clip-path","inset(50%)"),B(e,"overflow","hidden"),B(e,"white-space","nowrap"),B(e,"width","1px"),B(e,"height","1px")},m(i,o){W(i,e,o),n&&n.m(e,null)},p(i,o){i[5]?n?n.p(i,o):(n=He(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function He(r){let e;return{c(){e=it(r[6])},l(n){e=lt(n,r[6])},m(n,i){W(n,e,i)},p(n,i){i&64&&ct(e,n[6])},d(n){n&&G(e)}}}function jt(r){let e,n,i,o,d;const t=[At,$t],f=[];function g(_,w){return _[0][1]?0:1}e=g(r),n=f[e]=t[e](r);let p=r[4]&&Me(r);return{c(){n.c(),i=tt(),p&&p.c(),o=C()},l(_){n.l(_),i=nt(_),p&&p.l(_),o=C()},m(_,w){f[e].m(_,w),W(_,i,w),p&&p.m(_,w),W(_,o,w),d=!0},p(_,[w]){let O=e;e=g(_),e===O?f[e].p(_,w):(he(),F(f[O],1,1,()=>{f[O]=null}),me(),n=f[e],n?n.p(_,w):(n=f[e]=t[e](_),n.c()),J(n,1),n.m(i.parentNode,i)),_[4]?p?p.p(_,w):(p=Me(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){d||(J(n),d=!0)},o(_){F(n),d=!1},d(_){f[e].d(_),_&&G(i),p&&p.d(_),_&&G(o)}}}function Pt(r,e,n){let{stores:i}=e,{page:o}=e,{components:d}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;rt(i.page.notify);let p=!1,_=!1,w=null;return Se(()=>{const O=i.page.subscribe(()=>{p&&(n(5,_=!0),n(6,w=document.title||"untitled page"))});return n(4,p=!0),O}),r.$$set=O=>{"stores"in O&&n(7,i=O.stores),"page"in O&&n(8,o=O.page),"components"in O&&n(0,d=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,f=O.data_0),"data_1"in O&&n(3,g=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(o)},[d,t,f,g,p,_,w,i,o]}class Nt extends Qe{constructor(e){super(),xe(this,e,Pt,jt,et,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ut=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),Tt=function(r,e){return new URL(r,e).href},We={},H=function(e,n,i){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=Tt(d,i),d in We)return;We[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!i)for(let _=o.length-1;_>=0;_--){const w=o[_];if(w.href===d&&(!t||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=t?"stylesheet":Ut,t||(p.as="script",p.crossOrigin=""),p.href=d,document.head.appendChild(p),t)return new Promise((_,w)=>{p.addEventListener("load",_),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},Dt={},_e=[()=>H(()=>import("./chunks/0-f85f7267.js"),["./chunks/0-f85f7267.js","./chunks/_layout-8d2a742b.js","./components/pages/_layout.svelte-ec6396bd.js","./chunks/index-af462134.js","./chunks/paths-6cd3a76e.js","./assets/_layout-217668d0.css"],import.meta.url),()=>H(()=>import("./chunks/1-064cbf47.js"),["./chunks/1-064cbf47.js","./components/error.svelte-fe960263.js","./chunks/index-af462134.js","./chunks/singletons-c241d250.js","./chunks/index-1e3a1381.js","./chunks/paths-6cd3a76e.js"],import.meta.url),()=>H(()=>import("./chunks/2-bcf70c06.js"),["./chunks/2-bcf70c06.js","./components/pages/_page.svelte-a65df99b.js","./chunks/index-af462134.js","./chunks/stores-b56b3c8e.js","./chunks/index-1e3a1381.js","./assets/stores-4e6622f0.css","./chunks/paths-6cd3a76e.js","./assets/_page-149e772b.css"],import.meta.url),()=>H(()=>import("./chunks/3-628241e2.js"),["./chunks/3-628241e2.js","./components/pages/part-1/_page.svelte-f530413e.js","./chunks/index-af462134.js","./chunks/sessionOverview-f6674494.js","./chunks/stores-b56b3c8e.js","./chunks/index-1e3a1381.js","./assets/stores-4e6622f0.css"],import.meta.url),()=>H(()=>import("./chunks/4-a413f187.js"),["./chunks/4-a413f187.js","./components/pages/part-2/_page.svelte-8f6c964d.js","./chunks/index-af462134.js","./chunks/sessionOverview-f6674494.js","./chunks/stores-b56b3c8e.js","./chunks/index-1e3a1381.js","./assets/stores-4e6622f0.css"],import.meta.url),()=>H(()=>import("./chunks/5-fc1d3850.js"),["./chunks/5-fc1d3850.js","./components/pages/part-3/_page.svelte-15147095.js","./chunks/index-af462134.js","./chunks/sessionOverview-f6674494.js","./chunks/stores-b56b3c8e.js","./chunks/index-1e3a1381.js","./assets/stores-4e6622f0.css"],import.meta.url),()=>H(()=>import("./chunks/6-0cbe4c1a.js"),["./chunks/6-0cbe4c1a.js","./components/pages/part-4/_page.svelte-13ef5b43.js","./chunks/index-af462134.js","./chunks/sessionOverview-f6674494.js","./chunks/stores-b56b3c8e.js","./chunks/index-1e3a1381.js","./assets/stores-4e6622f0.css"],import.meta.url)],Vt=[],Bt={"/":[2],"/part-1":[3],"/part-2":[4],"/part-3":[5],"/part-4":[6]},qt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Ct(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,o])=>[i,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ft=-1,Jt=-2,Gt=-3,Kt=-4,zt=-5,Mt=-6;function Ht(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(o,d=!1){if(o===Ft)return;if(o===Gt)return NaN;if(o===Kt)return 1/0;if(o===zt)return-1/0;if(o===Mt)return-0;if(d)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let w=1;w<t.length;w+=1)g.add(i(t[w]));break;case"Map":const p=new Map;n[o]=p;for(let w=1;w<t.length;w+=2)p.set(i(t[w]),i(t[w+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let w=1;w<t.length;w+=2)_[t[w]]=i(t[w+1]);break}else{const f=new Array(t.length);n[o]=f;for(let g=0;g<t.length;g+=1){const p=t[g];p!==Jt&&(f[g]=i(p))}}else{const f={};n[o]=f;for(const g in t){const p=t[g];f[g]=i(p)}}return n[o]}return i(0)}const Ze="sveltekit:scroll",q="sveltekit:index",fe=Lt(_e,Vt,Bt,Dt),$e=_e[0],Ae=_e[1];$e();Ae();let se={};try{se=JSON.parse(sessionStorage[Ze])}catch{}function Re(r){se[r]=Oe()}function Wt({target:r,base:e,trailing_slash:n}){var Ce;const i=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,p=!0,_=!1,w=!1,O=!1,K=!1,z,$=(Ce=history.state)==null?void 0:Ce[q];$||($=Date.now(),history.replaceState({...history.state,[q]:$},"",location.href));const V=se[$];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,te,Y;async function ie(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=be(a,!0);o=null,await Pe(l,a,[])}async function ne(a,{noScroll:l=!1,replaceState:u=!1,keepFocus:s=!1,state:c={},invalidateAll:h=!1},m,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:l?Oe():null,keepfocus:s,redirect_chain:m,details:{state:c,replaceState:u},nav_token:v,accepted:()=>{h&&(K=!0)},blocked:()=>{},type:"goto"})}async function je(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Te(l)},o.promise}async function Pe(a,l,u,s,c={},h){var v,E;te=c;let m=a&&await Te(a);if(m||(m=await qe(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==c)return!1;if(m.type==="redirect")if(u.length>10||u.includes(l.pathname))m=await le({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ne(new URL(m.location,l).href,{},[...u,l.pathname],c),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await M.updated.check()&&await ce(l);if(i.length=0,K=!1,_=!0,s&&s.details){const{details:y}=s,b=y.replaceState?0:1;y.state[q]=$+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",l)}if(o=null,g){t=m.state,m.props.page&&(m.props.page.url=l);const y=pe();z.$set(m.props),y()}else Ne(m);if(s){const{scroll:y,keepfocus:b}=s;if(!b){const R=document.body,j=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var L;(L=getSelection())==null||L.removeAllRanges()}),j!==null?R.setAttribute("tabindex",j):R.removeAttribute("tabindex")}if(await Ge(),p){const R=l.hash&&document.getElementById(l.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ge();p=!0,m.props.page&&(T=m.props.page),h&&h(),_=!1}function Ne(a){var c,h;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const u=pe();z=new Nt({target:r,props:{...a.props,stores:M},hydrate:!0}),u();const s={from:null,to:ue("to",{params:t.params,route:{id:(h=(c=t.route)==null?void 0:c.id)!=null?h:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};d.after_navigate.forEach(m=>m(s)),g=!0}async function re({url:a,params:l,branch:u,status:s,error:c,route:h,form:m}){var j;const v=u.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:u,error:c,route:h},props:{components:v.map(L=>L.node.component)}};m!==void 0&&(E.props.form=m);let y={},b=!T;for(let L=0;L<v.length;L+=1){const N=v[L];y={...y,...N.data},(b||!t.branch.some(U=>U===N))&&(E.props[`data_${L}`]=y,b=b||Object.keys((j=N.data)!=null?j:{}).length>0)}if(b||(b=Object.keys(T.data).length!==Object.keys(y).length),!t.url||a.href!==t.url.href||t.error!==c||m!==void 0||b){E.props.page={error:c,params:l,route:h,status:s,url:a,form:m,data:b?y:T.data};const L=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};L("origin","origin"),L("path","pathname"),L("query","searchParams")}return E}async function we({loader:a,parent:l,url:u,params:s,route:c,server_data_node:h}){var y,b,R,j,L;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let N=function(...S){for(const D of S){const{href:k}=new URL(D,u);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(s,{get:(S,D)=>(v.params.add(D),S[D])}),data:(b=h==null?void 0:h.data)!=null?b:null,url:mt(u,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const A=new URL(k,u).href;return N(A),g?vt(A,D):bt(k,A,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),m=(R=await E.shared.load.call(null,U))!=null?R:null,m=m?await Ct(m):null}return{node:E,loader:a,server:h,shared:(j=E.shared)!=null&&j.load?{type:"data",data:m,uses:v}:null,data:(L=m!=null?m:h==null?void 0:h.data)!=null?L:null}}function Ue(a,l,u,s,c){if(K)return!0;if(!s)return!1;if(s.parent&&a||s.route&&l||s.url&&u)return!0;for(const h of s.params)if(c[h]!==t.params[h])return!0;for(const h of s.dependencies)if(i.some(m=>m(new URL(h))))return!0;return!1}function ye(a,l){var u,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((u=a.uses.dependencies)!=null?u:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Te({id:a,invalidating:l,url:u,params:s,route:c}){var D;if((o==null?void 0:o.id)===a)return o.promise;const{errors:h,layouts:m,leaf:v}=c,E=[...m,v];h.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let y=null;const b=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,j=E.reduce((k,A,P)=>{var ae;const I=t.branch[P],X=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||Ue(k.some(Boolean),R,b,(ae=I.server)==null?void 0:ae.uses,s));return k.push(X),k},[]);if(j.some(Boolean)){try{y=await Xe(u,j)}catch(k){return le({status:500,error:oe(k,{url:u,params:s,route:{id:c.id}}),url:u,route:c})}if(y.type==="redirect")return y}const L=y==null?void 0:y.nodes;let N=!1;const U=E.map(async(k,A)=>{var ae;if(!k)return;const P=t.branch[A],I=L==null?void 0:L[A];if((!I||I.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ue(N,R,b,(ae=P.shared)==null?void 0:ae.uses,s))return P;if(N=!0,(I==null?void 0:I.type)==="error")throw I;return we({loader:k[1],url:u,params:s,route:c,parent:async()=>{var Je;const Fe={};for(let Ee=0;Ee<A;Ee+=1)Object.assign(Fe,(Je=await U[Ee])==null?void 0:Je.data);return Fe},server_data_node:ye(I===void 0&&k[0]?{type:"skip"}:I!=null?I:null,P==null?void 0:P.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(A){if(A instanceof Ye)return{type:"redirect",location:A.location};let P=500,I;L!=null&&L.includes(A)?(P=(D=A.status)!=null?D:P,I=A.error):A instanceof Le?(P=A.status,I=A.body):I=oe(A,{params:s,url:u,route:{id:c.id}});const X=await De(k,S,h);return X?await re({url:u,params:s,branch:S.slice(0,X.idx).concat(X.node),status:P,error:I,route:c}):await qe(u,{id:c.id},I,P)}else S.push(void 0);return await re({url:u,params:s,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,u){for(;a--;)if(u[a]){let s=a;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await u[a](),loader:u[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:l,url:u,route:s}){var y;const c={},h=await $e();let m=null;if(h.server)try{const b=await Xe(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;m=(y=b.nodes[0])!=null?y:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await ce(u)}const v=await we({loader:$e,url:u,params:c,route:s,parent:()=>Promise.resolve({}),server_data_node:ye(m)}),E={node:await Ae(),loader:Ae,shared:null,server:null,data:null};return await re({url:u,params:c,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const u=decodeURI(a.pathname.slice(e.length)||"/");for(const s of fe){const c=s.exec(u);if(c){const h=new URL(a.origin+pt(a.pathname,n)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:l,route:s,params:dt(c),url:h}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Be({url:a,type:l,intent:u,delta:s}){var v,E,y,b,R;let c=!1;const h={from:ue("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:ue("to",{params:(y=u==null?void 0:u.params)!=null?y:null,route:{id:(R=(b=u==null?void 0:u.route)==null?void 0:b.id)!=null?R:null},url:a}),willUnload:!u,type:l};s!==void 0&&(h.delta=s);const m={...h,cancel:()=>{c=!0}};return d.before_navigate.forEach(j=>j(m)),c?null:h}async function ve({url:a,scroll:l,keepfocus:u,redirect_chain:s,details:c,type:h,delta:m,nav_token:v,accepted:E,blocked:y}){const b=be(a,!1),R=Be({url:a,type:h,delta:m,intent:b});if(!R){y();return}Re($),E(),w=!0,g&&M.navigating.set(R),await Pe(b,a,s,{scroll:l,keepfocus:u,details:c},v,()=>{w=!1,d.after_navigate.forEach(j=>j(R)),M.navigating.set(null)})}async function qe(a,l,u,s){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await le({status:s,error:u,url:a,route:l}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(d.after_navigate.push(a),()=>{const l=d.after_navigate.indexOf(a);d.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(d.before_navigate.push(a),()=>{const l=d.before_navigate.indexOf(a);d.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(p=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(u=>u.href===l)}return ie()},invalidateAll:()=>(K=!0,ie()),prefetch:async a=>{const l=new URL(a,Ke(document));await je(l)},prefetch_routes:async a=>{const u=(a?fe.filter(s=>a.some(c=>s.exec(c))):fe).map(s=>Promise.all([...s.layouts,s.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(u)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:u,route:s}=t;if(!s)return;const c=await De(t.branch.length,u,s.errors);if(c){const h=await re({url:l,params:t.params,branch:u.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:s});t=h.state;const m=pe();z.$set(h.props),m()}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},u=pe();z.$set(l),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,m;let c=!1;if(!w){const v={from:ue("from",{params:t.params,route:{id:(m=(h=t.route)==null?void 0:h.id)!=null?m:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(E=>E(v))}c?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re($);try{sessionStorage[Ze]=JSON.stringify(se)}catch{}}});const a=s=>{const{url:c,options:h}=ze(s);if(c&&h.prefetch){if(Ve(c))return;je(c)}};let l;const u=s=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=s.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:c,url:h,options:m}=ze(s);if(!c||!h)return;const v=c instanceof SVGAElement;if(!v&&h.protocol!==location.protocol&&!(h.protocol==="https:"||h.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||m.reload||(v?c.target.baseVal:c.target)){Be({url:h,type:"link"})||s.preventDefault(),w=!0;return}const[y,b]=h.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){O=!0,Re($),t.url=h,M.page.set({...T,url:h}),M.page.notify();return}ve({url:h,scroll:m.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[q]===$)return;const c=s.state[q]-$;ve({url:new URL(location.href),scroll:se[s.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{$=s.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[q]:++$},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&M.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:u,params:s,route:c,data:h,form:m})=>{var y;f=!0;const v=new URL(location.href);let E;try{const b=u.map(async(R,j)=>{const L=h[j];return we({loader:_e[R],url:v,params:s,route:c,parent:async()=>{const N={};for(let U=0;U<j;U+=1)Object.assign(N,(await b[U]).data);return N},server_data_node:ye(L)})});E=await re({url:v,params:s,branch:await Promise.all(b),status:a,error:l,form:m,route:(y=fe.find(({id:R})=>R===c.id))!=null?y:null})}catch(b){if(b instanceof Ye){await ce(new URL(b.location,location.href));return}E=await le({status:b instanceof Le?b.status:500,error:oe(b,{url:v,params:s,route:c}),url:v,route:c})}Ne(E)}}}async function Xe(r,e){var d;const n=new URL(r);n.pathname=wt(r.pathname);const i=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await i.json();if(!i.ok)throw new Error(o);return(d=o.nodes)==null||d.forEach(t=>{var f,g;(t==null?void 0:t.type)==="data"&&(t.data=Ht(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function oe(r,e){var n;return r instanceof Le?r.body:(n=qt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Yt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(r,e){for(const n of Yt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}async function xt({env:r,hydrate:e,paths:n,target:i,trailing_slash:o}){ut(n);const d=Wt({target:i,base:n.base,trailing_slash:o});ft({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{xt as start};
