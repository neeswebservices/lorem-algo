var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function a(t){return document.createElement(t)}function s(t){return document.createTextNode(t)}function f(){return s(" ")}function d(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function p(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let h;function $(t){h=t}const g=[],y=[],b=[],v=[],x=Promise.resolve();let _=!1;function C(t){b.push(t)}const w=new Set;let k=0;function E(){const t=h;do{for(;k<g.length;){const t=g[k];k++,$(t),A(t.$$)}for($(null),g.length=0,k=0;y.length;)y.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];w.has(e)||(w.add(e),e())}b.length=0}while(g.length);for(;v.length;)v.pop()();_=!1,w.clear(),$(t)}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}const L=new Set;function j(t,e){-1===t.$$.dirty[0]&&(g.push(t),_||(_=!0,x.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(c,i,u,a,s,f,d,m=[-1]){const p=h;$(c);const g=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(p?p.$$.context:[])),callbacks:n(),dirty:m,skip_bound:!1,root:i.target||p.$$.root};d&&d(g.root);let y=!1;if(g.ctx=u?u(c,i.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&s(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&j(c,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!a&&a(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(l)}else g.fragment&&g.fragment.c();i.intro&&((b=c.$$.fragment)&&b.i&&(L.delete(b),b.i(v))),function(t,n,c,i){const{fragment:u,on_mount:l,on_destroy:a,after_update:s}=t.$$;u&&u.m(n,c),i||C((()=>{const n=l.map(e).filter(r);a?a.push(...n):o(n),t.$$.on_mount=[]})),s.forEach(C)}(c,i.target,i.anchor,i.customElement),E()}var b,v;$(p)}function O(e){let n,o,r,c,i;return{c(){n=a("button"),n.textContent="Copy",o=f(),r=a("a"),r.textContent="We Provide API too if you want ?",m(n,"class","svelte-rit148"),function(t,e,n){t.classList[n?"add":"remove"](e)}(n,"copy",e[3]),m(r,"href","/lorem")},m(t,l){u(t,n,l),u(t,o,l),u(t,r,l),c||(i=d(n,"click",e[3]),c=!0)},p:t,d(t){t&&l(n),t&&l(o),t&&l(r),c=!1,i()}}}function P(e){let n,o,r,c,h,$,g,y,b,v,x,_,C,w,k,E,A,L=(e[0]||"Loading...")+"",j="Copyright © "+e[1]+" - All rights reserved ( ",N=e[0]&&O(e);return{c(){n=a("main"),o=a("h1"),o.textContent="Lorem Ispum Generator",r=f(),c=a("button"),c.textContent="Get Random Lorem",h=f(),$=a("div"),g=s(L),y=f(),N&&N.c(),b=f(),v=a("footer"),x=s(j),_=f(),C=a("a"),C.textContent="neeswebservices",w=f(),k=s("  )"),m(o,"class","svelte-rit148"),m($,"id","lorem"),m($,"class","svelte-rit148"),m(C,"href","https://neeswebservices.netlify.app"),m(C,"target","_blank"),m(n,"class","svelte-rit148")},m(t,l){u(t,n,l),i(n,o),i(n,r),i(n,c),i(n,h),i(n,$),i($,g),i(n,y),N&&N.m(n,null),i(n,b),i(n,v),i(v,x),i(v,_),i(v,C),i(v,w),i(v,k),E||(A=d(c,"click",e[2]),E=!0)},p(t,[e]){1&e&&L!==(L=(t[0]||"Loading...")+"")&&p(g,L),t[0]?N?N.p(t,e):(N=O(t),N.c(),N.m(n,b)):N&&(N.d(1),N=null),2&e&&j!==(j="Copyright © "+t[1]+" - All rights reserved ( ")&&p(x,j)},i:t,o:t,d(t){t&&l(n),N&&N.d(),E=!1,A()}}}function G(){return(new Date).getFullYear()}function I(t,e,n){let{lorem:o=""}=e;async function r(){let t=await fetch("http://localhost:3000/lorem"),e=await t.json();return n(0,o=e.lorem),e.lorem}r();let{year:c=G()}=e;return t.$$set=t=>{"lorem"in t&&n(0,o=t.lorem),"year"in t&&n(1,c=t.year)},[o,c,r,function(){const t=document.createElement("textarea");t.value=o,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),alert("Copied to clipboard")}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),N(this,t,I,P,c,{lorem:0,year:1})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map