import{S,i as k,s as w,C as G,k as D,a as H,l as F,m as q,c as E,h as o,n as C,b as u,G as I,D as V,E as j,F as y,f as $,t as c,q as p,r as _,u as v,w as m,x as h,y as g,z as d,e as N,g as J,d as K,I as L,H as B}from"../../chunks/index-d0137fe8.js";import{H as O,t as M,F as Q,S as R,a as U}from"../../chunks/stores-55644213.js";import{b as P}from"../../chunks/paths-2f208417.js";function T(i){let t,a;return{c(){t=D("span"),a=p(i[0]),this.h()},l(s){t=F(s,"SPAN",{class:!0});var e=q(t);a=_(e,i[0]),e.forEach(o),this.h()},h(){C(t,"class","svelte-1prhf84")},m(s,e){u(s,t,e),I(t,a)},p(s,e){e&1&&v(a,s[0])},d(s){s&&o(t)}}}function W(i){let t,a,s;const e=i[2].default,n=G(e,i,i[1],null);let l=i[0]&&T(i);return{c(){t=D("h2"),n&&n.c(),a=H(),l&&l.c(),this.h()},l(r){t=F(r,"H2",{class:!0});var f=q(t);n&&n.l(f),a=E(f),l&&l.l(f),f.forEach(o),this.h()},h(){C(t,"class","svelte-1prhf84")},m(r,f){u(r,t,f),n&&n.m(t,null),I(t,a),l&&l.m(t,null),s=!0},p(r,[f]){n&&n.p&&(!s||f&2)&&V(n,e,r,r[1],s?y(e,r[1],f,null):j(r[1]),null),r[0]?l?l.p(r,f):(l=T(r),l.c(),l.m(t,null)):l&&(l.d(1),l=null)},i(r){s||($(n,r),s=!0)},o(r){c(n,r),s=!1},d(r){r&&o(t),n&&n.d(r),l&&l.d()}}}function X(i,t,a){let{$$slots:s={},$$scope:e}=t,{sub:n=""}=t;return i.$$set=l=>{"sub"in l&&a(0,n=l.sub),"$$scope"in l&&a(1,e=l.$$scope)},[n,e,s]}class Y extends S{constructor(t){super(),k(this,t,X,W,w,{sub:0})}}function Z(i){let t=i[0].heading+"",a,s;return{c(){a=p(t),s=p(": Session Overview")},l(e){a=_(e,t),s=_(e,": Session Overview")},m(e,n){u(e,a,n),u(e,s,n)},p(e,n){n&1&&t!==(t=e[0].heading+"")&&v(a,t)},d(e){e&&o(a),e&&o(s)}}}function x(i){let t,a=i[0].subheading+"",s;return{c(){t=p("Slides: "),s=p(a)},l(e){t=_(e,"Slides: "),s=_(e,a)},m(e,n){u(e,t,n),u(e,s,n)},p(e,n){n&1&&a!==(a=e[0].subheading+"")&&v(s,a)},d(e){e&&o(t),e&&o(s)}}}function ee(i){let t,a,s,e,n;return a=new O({props:{href:P+"/"+i[0].destination,$$slots:{default:[Z]},$$scope:{ctx:i}}}),e=new O({props:{href:i[0].slides,$$slots:{default:[x]},$$scope:{ctx:i}}}),{c(){t=D("div"),m(a.$$.fragment),s=H(),m(e.$$.fragment),this.h()},l(l){t=F(l,"DIV",{class:!0});var r=q(t);h(a.$$.fragment,r),s=E(r),h(e.$$.fragment,r),r.forEach(o),this.h()},h(){C(t,"class","details")},m(l,r){u(l,t,r),g(a,t,null),I(t,s),g(e,t,null),n=!0},p(l,[r]){const f={};r&1&&(f.href=P+"/"+l[0].destination),r&3&&(f.$$scope={dirty:r,ctx:l}),a.$set(f);const b={};r&1&&(b.href=l[0].slides),r&3&&(b.$$scope={dirty:r,ctx:l}),e.$set(b)},i(l){n||($(a.$$.fragment,l),$(e.$$.fragment,l),n=!0)},o(l){c(a.$$.fragment,l),c(e.$$.fragment,l),n=!1},d(l){l&&o(t),d(a),d(e)}}}function te(i,t,a){let{part:s={}}=t;return i.$$set=e=>{"part"in e&&a(0,s=e.part)},[s]}class se extends S{constructor(t){super(),k(this,t,te,ee,w,{part:0})}}function z(i,t,a){const s=i.slice();return s[1]=t[a],s}function ne(i){let t=i[1].heading+"",a,s;return{c(){a=p(t),s=p(":")},l(e){a=_(e,t),s=_(e,":")},m(e,n){u(e,a,n),u(e,s,n)},p(e,n){n&1&&t!==(t=e[1].heading+"")&&v(a,t)},d(e){e&&o(a),e&&o(s)}}}function A(i){let t,a,s,e;return t=new Y({props:{sub:i[1].subheading,$$slots:{default:[ne]},$$scope:{ctx:i}}}),s=new se({props:{part:i[1]}}),{c(){m(t.$$.fragment),a=H(),m(s.$$.fragment)},l(n){h(t.$$.fragment,n),a=E(n),h(s.$$.fragment,n)},m(n,l){g(t,n,l),u(n,a,l),g(s,n,l),e=!0},p(n,l){const r={};l&1&&(r.sub=n[1].subheading),l&17&&(r.$$scope={dirty:l,ctx:n}),t.$set(r);const f={};l&1&&(f.part=n[1]),s.$set(f)},i(n){e||($(t.$$.fragment,n),$(s.$$.fragment,n),e=!0)},o(n){c(t.$$.fragment,n),c(s.$$.fragment,n),e=!1},d(n){d(t,n),n&&o(a),d(s,n)}}}function le(i){let t,a,s=i[0],e=[];for(let l=0;l<s.length;l+=1)e[l]=A(z(i,s,l));const n=l=>c(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=N()},m(l,r){for(let f=0;f<e.length;f+=1)e[f].m(l,r);u(l,t,r),a=!0},p(l,[r]){if(r&1){s=l[0];let f;for(f=0;f<s.length;f+=1){const b=z(l,s,f);e[f]?(e[f].p(b,r),$(e[f],1)):(e[f]=A(b),e[f].c(),$(e[f],1),e[f].m(t.parentNode,t))}for(J(),f=s.length;f<e.length;f+=1)n(f);K()}},i(l){if(!a){for(let r=0;r<s.length;r+=1)$(e[r]);a=!0}},o(l){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)c(e[r]);a=!1},d(l){L(e,l),l&&o(t)}}}function ae(i,t,a){let s;return B(i,M,e=>a(0,s=e)),[s]}class re extends S{constructor(t){super(),k(this,t,ae,le,w,{})}}function ie(i){let t=i[0].heading+"",a;return{c(){a=p(t)},l(s){a=_(s,t)},m(s,e){u(s,a,e)},p(s,e){e&1&&t!==(t=s[0].heading+"")&&v(a,t)},d(s){s&&o(a)}}}function fe(i){let t,a,s,e;return t=new R({props:{sub:i[0].subheading,$$slots:{default:[ie]},$$scope:{ctx:i}}}),s=new re({props:{part:"part1"}}),{c(){m(t.$$.fragment),a=H(),m(s.$$.fragment)},l(n){h(t.$$.fragment,n),a=E(n),h(s.$$.fragment,n)},m(n,l){g(t,n,l),u(n,a,l),g(s,n,l),e=!0},p(n,l){const r={};l&1&&(r.sub=n[0].subheading),l&3&&(r.$$scope={dirty:l,ctx:n}),t.$set(r)},i(n){e||($(t.$$.fragment,n),$(s.$$.fragment,n),e=!0)},o(n){c(t.$$.fragment,n),c(s.$$.fragment,n),e=!1},d(n){d(t,n),n&&o(a),d(s,n)}}}function oe(i){let t,a;return t=new Q({props:{$$slots:{default:[fe]},$$scope:{ctx:i}}}),{c(){m(t.$$.fragment)},l(s){h(t.$$.fragment,s)},m(s,e){g(t,s,e),a=!0},p(s,[e]){const n={};e&3&&(n.$$scope={dirty:e,ctx:s}),t.$set(n)},i(s){a||($(t.$$.fragment,s),a=!0)},o(s){c(t.$$.fragment,s),a=!1},d(s){d(t,s)}}}function ue(i,t,a){let s;return B(i,U,e=>a(0,s=e)),[s]}class _e extends S{constructor(t){super(),k(this,t,ue,oe,w,{})}}export{_e as default};
