import{w as u}from"./index-1e3a1381.js";import{a as d}from"./paths-6cd3a76e.js";function m(s){let e=s.baseURI;if(!e){const t=s.getElementsByTagName("base");e=t.length?t[0].href:s.URL}return e}function g(){return{x:pageXOffset,y:pageYOffset}}function _(s){let e,t=null,r=null,a=null;for(const n of s.composedPath())n instanceof Element&&(!e&&n.nodeName.toUpperCase()==="A"&&(e=n),t===null&&(t=l(n,"data-sveltekit-noscroll")),r===null&&(r=l(n,"data-sveltekit-prefetch")),a===null&&(a=l(n,"data-sveltekit-reload")));const o=e&&new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI);return{a:e,url:o,options:{noscroll:t,prefetch:r,reload:a}}}function l(s,e){const t=s.getAttribute(e);return t===null?t:t===""?!0:(t==="off",!1)}function c(s){const e=u(s);let t=!0;function r(){t=!0,e.update(n=>n)}function a(n){t=!1,e.set(n)}function o(n){let i;return e.subscribe(f=>{(i===void 0||t&&f!==i)&&n(i=f)})}return{notify:r,set:a,subscribe:o}}function p(){const{set:s,subscribe:e}=u(!1);let t;async function r(){clearTimeout(t);const a=await fetch(`${d}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(a.ok){const{version:o}=await a.json(),n=o!=="1667790027098";return n&&(s(!0),clearTimeout(t)),n}else throw new Error(`Version check failed: ${a.status}`)}return{subscribe:e,check:r}}function k(s){s.client}const v={url:c({}),page:c({}),navigating:u(null),updated:p()};export{g as a,_ as f,m as g,k as i,v as s};
