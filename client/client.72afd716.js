function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i;function l(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function c(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function d(t){return null==t?"":t}let f,h,p=!1;function m(t,e,n,s){for(;t<e;){const r=t+(e-t>>1);n(r)<=s?t=r+1:e=r}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const s=e[n];void 0!==s.claim_order&&t.push(s)}e=t}const n=new Int32Array(e.length+1),s=new Int32Array(e.length);n[0]=-1;let r=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,a=(r>0&&e[n[r]].claim_order<=o?r+1:m(1,r,(t=>e[n[t]].claim_order),o))-1;s[t]=n[a]+1;const i=a+1;n[i]=t,r=Math.max(i,r)}const o=[],a=[];let i=e.length-1;for(let t=n[r]+1;0!=t;t=s[t-1]){for(o.push(e[t-1]);i>=t;i--)a.push(e[i]);i--}for(;i>=0;i--)a.push(e[i]);o.reverse(),a.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<a.length;e++){for(;n<o.length&&a[e].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;t.insertBefore(a[e],s)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function v(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function _(t){t.parentNode.removeChild(t)}function $(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function S(){return E(" ")}function x(){return E("")}function T(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function k(t){return function(e){return e.preventDefault(),t.call(this,e)}}function A(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function N(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:A(t,s,e[s])}function L(t){return Array.from(t.childNodes)}function P(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,s,r=!1){P(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const e=n(o);return void 0===e?t.splice(s,1):t[s]=e,r?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return s()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n,s){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let s=0;s<t.attributes.length;s++){const r=t.attributes[s];n[r.name]||e.push(r.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>s(e)))}function O(t,e,n){return I(t,e,n,w)}function j(t,e,n){return I(t,e,n,y)}function C(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function H(t){return C(t," ")}function U(t,e,n){for(let s=n;s<t.length;s+=1){const n=t[s];if(8===n.nodeType&&n.textContent.trim()===e)return s}return t.length}function D(t){const e=U(t,"HTML_TAG_START",0),n=U(t,"HTML_TAG_END",e);if(e===n)return new K;P(t);const s=t.splice(e,n+1);_(s[0]),_(s[s.length-1]);const r=s.slice(1,s.length-1);for(const e of r)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new K(r)}function M(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){f=!0}}return f}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function B(t,e=document.body){return Array.from(e.querySelectorAll(t))}class K extends class{constructor(){this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(t){super(),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)v(this.t,this.n[e],t)}}function F(t){h=t}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(t){J().$$.on_mount.push(t)}function W(t){J().$$.after_update.push(t)}function Y(t){J().$$.on_destroy.push(t)}const Q=[],X=[],Z=[],tt=[],et=Promise.resolve();let nt=!1;function st(t){Z.push(t)}let rt=!1;const ot=new Set;function at(){if(!rt){rt=!0;do{for(let t=0;t<Q.length;t+=1){const e=Q[t];F(e),it(e.$$)}for(F(null),Q.length=0;X.length;)X.pop()();for(let t=0;t<Z.length;t+=1){const e=Z[t];ot.has(e)||(ot.add(e),e())}Z.length=0}while(Q.length);for(;tt.length;)tt.pop()();nt=!1,rt=!1,ot.clear()}}function it(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(st)}}const lt=new Set;let ct;function ut(){ct={r:0,c:[],p:ct}}function dt(){ct.r||r(ct.c),ct=ct.p}function ft(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function ht(t,e,n,s){if(t&&t.o){if(lt.has(t))return;lt.add(t),ct.c.push((()=>{lt.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function pt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function mt(t){return"object"==typeof t&&null!==t?t:{}}function gt(t){t&&t.c()}function bt(t,e){t&&t.l(e)}function vt(t,e,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=t.$$;i&&i.m(e,s),a||st((()=>{const e=l.map(n).filter(o);c?c.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(st)}function _t(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(Q.push(t),nt||(nt=!0,et.then(at)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function wt(e,n,o,a,i,l,c,u=[-1]){const d=h;F(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),m&&$t(e,t)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){p=!0;const t=L(n.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&ft(e.$$.fragment),vt(e,n.target,n.anchor,n.customElement),p=!1,at()}F(d)}class yt{$destroy(){_t(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Et=[];function St(e,n=t){let s;const r=new Set;function o(t){if(a(e,t)&&(e=t,s)){const t=!Et.length;for(const t of r)t[1](),Et.push(t,e);if(t){for(let t=0;t<Et.length;t+=2)Et[t][0](Et[t+1]);Et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const l=[a,i];return r.add(l),1===r.size&&(s=n(o)||t),a(e),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const xt={};var Tt={owner:"ghveem",repo:"oppetid",sites:[{name:"NDLA.no",url:"https://ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:"ghveem"},{name:"api.NDLA.no",url:"https://api.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:"ghveem"},{name:"stier.ndla.no",url:"https://stier.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:"ghveem"},{name:"h5p.ndla.no",url:"https://ca.h5p.ndla.no/h5p",icon:"https://h5p.org/sites/all/themes/professional_themec/favicon.ico",assignees:"ghveem"},{name:"auth.h5p.ndla.no",url:"https://auth.h5p.ndla.no/",icon:"https://h5p.org/sites/all/themes/professional_themec/favicon.ico",assignees:"ghveem"},{name:"ed.ndla.no",url:"https://ed.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:"ghveem"},{name:"NDLA Support",url:"https://ndla.zendesk.com/",icon:"https://ndla.no/static/ndla-favicon.png",expectedStatusCodes:[301,403],assignees:"ghveem"},{name:"Udir.no",url:"https://udir.no",icon:"https://www.udir.no/Frontend/build/public/assets/images/logos/udir-logo.png"},{name:"GREP",url:"https://data.udir.no/kl06/v201906/status/status_publisert",icon:"https://www.udir.no/Frontend/build/public/assets/images/logos/udir-logo.png"},{name:"SNL",url:"https://snl.no",icon:"https://snl.no/packs/assets/images/snl_logo_dark-2c14cffc8dbfed734292bbd8a0422210.svg"},{name:"NRK skole",url:"https://www.nrk.no/skole/",icon:"https://gfx.nrk.no/z8cQnACxJjgPyAb5diF8IA6tpuqBHKgqPRjFPbRhg7Ew.jpg"}],"status-website":{baseUrl:"/oppetid",logoUrl:"https://ndla.no/static/metalogo.jpg",name:"NDLA.no - Oppetid",introTitle:"**Oppetid** overvaker statusen til utvalde nettsider",introMessage:"Dei flesta sakene heng saman, er t.d. api eller taksonomi nede, så påvirkar det resten. Er noko nede her, så har teknikarane fått varsel og jobbar med saka.",navbar:[{title:"Status",href:"https://ghveem.github.io/oppetid/"},{title:"Support",href:"https://ndla.zendesk.com"},{title:"NDLA_no på twitter",href:"https://twitter.com/ndla_no"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},robotsText:"User-agent: * \n Disallow: /",i18n:{activeIncidents:"Aktive hendingar",allSystemsOperational:"Alt vel",incidentReport:"Rapport for hending #$NUMBER  →",activeIncidentSummary:"Opna $DATE med $POSTS postar",incidentTitle:"Detaljar for hending $NUMBER",incidentDetails:"Detaljar for hending",incidentFixed:"Fiksa",incidentOngoing:"Pågåande",incidentOpenedAt:"Opna",incidentClosedAt:"Lukka",incidentSubscribe:"Abonner på oppdateringar",incidentViewOnGitHub:"Sjå på GitHub",incidentCommentSummary:"Posta $DATE av $AUTHOR",incidentBack:"← Tilbake til alle hendingar",pastIncidents:"Eldre hendingar",pastIncidentsResolved:"Løyst for $MINUTES minuttar sidan. Sjå $POSTS post(ar)",liveStatus:"Live Status",overallUptime:"Oppetid: $UPTIME",overallUptimeTitle:"Oppetid",averageResponseTime:"Gjenomsnittleg responstid: $TIMEms",averageResponseTimeTitle:"Gjenomsnittleg responstid",sevelDayResponseTime:"Responstid siste 7-dagar",responseTimeMs:"Responstid (ms)",up:"Oppe",down:"Nede",degraded:"Nedgradert",ms:"ms",loading:"Lastar",navGitHub:"GitHub",footer:"Denne sida er laga med [open source]($REPO) frå [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"For mange kall",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"Korleis kan du fikse det?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"Ein feil oppstod.",errorIntro:"Klarte ikkje å laste inn siste statusar.",errorText:"Prøv igjen om eit par straksar.",errorHome:"Til startsida",pastScheduledMaintenance:"Tidlegare planlagt vedlikehald",scheduledMaintenance:"Planlagt vedlikehald",scheduledMaintenanceSummaryStarted:"Starta $DATE og varar $DURATION minuttar",scheduledMaintenanceSummaryStarts:"Startar $DATE og varar $DURATION minuttar",startedAt:"Starta",startsAt:"Startar",duration:"Varar",durationMin:"$DURATION minuttar",incidentCompleted:"Fullført",incidentScheduled:"Planlagd"},path:"https://ghveem.github.io/oppetid"};function kt(t,e,n){const s=t.slice();return s[1]=e[n],s}function At(e){let n,s,r,o=Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=w("img"),this.h()},l(t){n=O(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),l(n.src,s=Tt["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}(),a=Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&function(e){let n,s,r=Tt["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(t){n=O(t,"DIV",{});var e=L(n);s=C(e,r),e.forEach(_)},m(t,e){v(t,n,e),g(n,s)},p:t,d(t){t&&_(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(t){n=O(t,"DIV",{});var e=L(n);s=O(e,"A",{href:!0,class:!0});var i=L(s);o&&o.l(i),r=H(i),a&&a.l(i),i.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",Tt["status-website"].logoHref||Tt.path),A(s,"class","logo svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(t,e){Tt["status-website"]&&!Tt["status-website"].hideNavLogo&&o.p(t,e),Tt["status-website"]&&!Tt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&_(n),o&&o.d(),a&&a.d()}}}function Nt(t){let e,n,s,r,o,a,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),s=E(i),a=S(),this.h()},l(t){e=O(t,"LI",{});var r=L(e);n=O(r,"A",{"aria-current":!0,href:!0,class:!0});var o=L(n);s=C(o,i),o.forEach(_),a=H(r),r.forEach(_),this.h()},h(){A(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),A(n,"href",o=t[1].href.replace("$OWNER",Tt.owner).replace("$REPO",Tt.repo)),A(n,"class","svelte-a08hsz")},m(t,r){v(t,e,r),g(e,n),g(n,s),g(e,a)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(t){t&&_(e)}}}function Lt(e){let n,s,r,o,a,i=Tt["status-website"]&&Tt["status-website"].logoUrl&&At(),l=Tt["status-website"]&&Tt["status-website"].navbar&&function(t){let e,n=Tt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=Nt(kt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(1&r){let o;for(n=Tt["status-website"].navbar,o=0;o<n.length;o+=1){const a=kt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Nt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),c=Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&function(e){let n,s,r,o=Tt.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(t){n=O(t,"LI",{});var e=L(n);s=O(e,"A",{href:!0,class:!0});var a=L(s);r=C(a,o),a.forEach(_),e.forEach(_),this.h()},h(){A(s,"href",`https://github.com/${Tt.owner}/${Tt.repo}`),A(s,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),g(s,r)},p:t,d(t){t&&_(n)}}}();return{c(){n=w("nav"),s=w("div"),i&&i.c(),r=S(),o=w("ul"),l&&l.c(),a=S(),c&&c.c(),this.h()},l(t){n=O(t,"NAV",{class:!0});var e=L(n);s=O(e,"DIV",{class:!0});var u=L(s);i&&i.l(u),r=H(u),o=O(u,"UL",{class:!0});var d=L(o);l&&l.l(d),a=H(d),c&&c.l(d),d.forEach(_),u.forEach(_),e.forEach(_),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(t,e){v(t,n,e),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),l&&l.m(o,null),g(o,a),c&&c.m(o,null)},p(t,[e]){Tt["status-website"]&&Tt["status-website"].logoUrl&&i.p(t,e),Tt["status-website"]&&Tt["status-website"].navbar&&l.p(t,e),Tt["status-website"]&&Tt["status-website"].navbarGitHub&&!Tt["status-website"].navbar&&c.p(t,e)},i:t,o:t,d(t){t&&_(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Pt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class Rt extends yt{constructor(t){super(),wt(this,t,Pt,Lt,a,{segment:0})}}var It={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ot(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function jt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ct(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=e||{},d=0;function f(t){var e=It[t[1]||""],n=l[l.length-1]==t;return e?e[1]?(n?l.pop():l.push(t),e[0|n]):e[0]:t}function h(){for(var t="";l.length;)t+=f(l[l.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Ot(jt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Ct(Ot(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+jt(r[8])+'" alt="'+jt(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+jt(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Ct(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+jt(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),c+=s,c+=n;return(c+t.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function Ht(t,e,n){const s=t.slice();return s[3]=e[n],s}function Ut(t,e,n){const s=t.slice();return s[3]=e[n],s}function Dt(t,e,n){const s=t.slice();return s[8]=e[n],s}function Mt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Tt.path}/themes/${(Tt["status-website"]||{}).theme||"light"}.css`)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Gt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Tt["status-website"]||{}).themeUrl)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function qt(e){let n,s;return{c(){n=w("script"),this.h()},l(t){n=O(t,"SCRIPT",{src:!0}),L(n).forEach(_),this.h()},h(){l(n.src,s=e[8].src)||A(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function zt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=O(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",e[3].rel),A(n,"href",e[3].href),A(n,"media",e[3].media)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Bt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=O(t,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",e[3].name),A(n,"content",e[3].content)},m(t,e){v(t,n,e)},p:t,d(t){t&&_(n)}}}function Kt(e){let n,s,r,o,a,i,l,u,d,f,h,p,m,b,y,E,T,k,N=Ct(Tt.i18n.footer.replace(/\$REPO/,`https://github.com/${Tt.owner}/${Tt.repo}`))+"",P=(Tt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,s=x(),this.h()},l(t){n=D(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();let R=((Tt["status-website"]||{}).themeUrl?Gt:Mt)(e),I=(Tt["status-website"]||{}).scripts&&function(t){let e,n=(Tt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=qt(Dt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Dt(t,n,o);s[o]?s[o].p(a,r):(s[o]=qt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),j=(Tt["status-website"]||{}).links&&function(t){let e,n=(Tt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=zt(Ut(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Ut(t,n,o);s[o]?s[o].p(a,r):(s[o]=zt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),C=(Tt["status-website"]||{}).metaTags&&function(t){let e,n=(Tt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Bt(Ht(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=x()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=x()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);v(t,e,n)},p(t,r){if(0&r){let o;for(n=(Tt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=Ht(t,n,o);s[o]?s[o].p(a,r):(s[o]=Bt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){$(s,t),t&&_(e)}}}(e),U=Tt["status-website"].css&&function(e){let n,s,r=`<style>${Tt["status-website"].css}</style>`;return{c(){n=new K,s=x(),this.h()},l(t){n=D(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),M=Tt["status-website"].js&&function(e){let n,s,r=`<script>${Tt["status-website"].js}<\/script>`;return{c(){n=new K,s=x(),this.h()},l(t){n=D(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}(),G=(Tt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(Tt["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,s=x(),this.h()},l(t){n=D(t),s=x(),this.h()},h(){n.a=s},m(t,e){n.m(r,t,e),v(t,s,e)},p:t,d(t){t&&_(s),t&&n.d()}}}();p=new Rt({props:{segment:e[0]}});const q=e[2].default,z=function(t,e,n,s){if(t){const r=c(t,e,n,s);return t[0](r)}}(q,e,e[1],null);return{c(){P&&P.c(),n=x(),R.c(),s=w("link"),r=w("link"),o=w("link"),I&&I.c(),a=x(),j&&j.c(),i=x(),C&&C.c(),l=x(),U&&U.c(),u=x(),M&&M.c(),d=x(),f=S(),G&&G.c(),h=S(),gt(p.$$.fragment),m=S(),b=w("main"),z&&z.c(),y=S(),E=w("footer"),T=w("p"),this.h()},l(t){const e=B('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(e),n=x(),R.l(e),s=O(e,"LINK",{rel:!0,href:!0}),r=O(e,"LINK",{rel:!0,type:!0,href:!0}),o=O(e,"LINK",{rel:!0,type:!0,href:!0}),I&&I.l(e),a=x(),j&&j.l(e),i=x(),C&&C.l(e),l=x(),U&&U.l(e),u=x(),M&&M.l(e),d=x(),e.forEach(_),f=H(t),G&&G.l(t),h=H(t),bt(p.$$.fragment,t),m=H(t),b=O(t,"MAIN",{class:!0});var c=L(b);z&&z.l(c),c.forEach(_),y=H(t),E=O(t,"FOOTER",{class:!0});var g=L(E);T=O(g,"P",{}),L(T).forEach(_),g.forEach(_),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${Tt.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(Tt["status-website"]||{}).faviconSvg||(Tt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Tt["status-website"]||{}).favicon||"/logo-192.png"),A(b,"class","container"),A(E,"class","svelte-jbr799")},m(t,e){P&&P.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),I&&I.m(document.head,null),g(document.head,a),j&&j.m(document.head,null),g(document.head,i),C&&C.m(document.head,null),g(document.head,l),U&&U.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),v(t,f,e),G&&G.m(t,e),v(t,h,e),vt(p,t,e),v(t,m,e),v(t,b,e),z&&z.m(b,null),v(t,y,e),v(t,E,e),g(E,T),T.innerHTML=N,k=!0},p(t,[e]){(Tt["status-website"]||{}).customHeadHtml&&P.p(t,e),R.p(t,e),(Tt["status-website"]||{}).scripts&&I.p(t,e),(Tt["status-website"]||{}).links&&j.p(t,e),(Tt["status-website"]||{}).metaTags&&C.p(t,e),Tt["status-website"].css&&U.p(t,e),Tt["status-website"].js&&M.p(t,e),(Tt["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),z&&z.p&&(!k||2&e)&&function(t,e,n,s,r,o){if(r){const a=c(e,n,s,o);t.p(a,r)}}(z,q,t,t[1],k?function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(q,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){k||(ft(p.$$.fragment,t),ft(z,t),k=!0)},o(t){ht(p.$$.fragment,t),ht(z,t),k=!1},d(t){P&&P.d(t),_(n),R.d(t),_(s),_(r),_(o),I&&I.d(t),_(a),j&&j.d(t),_(i),C&&C.d(t),_(l),U&&U.d(t),_(u),M&&M.d(t),_(d),t&&_(f),G&&G.d(t),t&&_(h),_t(p,t),t&&_(m),t&&_(b),z&&z.d(t),t&&_(y),t&&_(E)}}}function Ft(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Jt extends yt{constructor(t){super(),wt(this,t,Ft,Kt,a,{segment:0})}}function Vt(t){let e,n,s=t[1].stack+"";return{c(){e=w("pre"),n=E(s)},l(t){e=O(t,"PRE",{});var r=L(e);n=C(r,s),r.forEach(_)},m(t,s){v(t,e,s),g(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&M(n,s)},d(t){t&&_(e)}}}function Wt(e){let n,s,r,o,a,i,l,c,u,d=e[1].message+"";document.title=n=e[0];let f=e[2]&&e[1].stack&&Vt(e);return{c(){s=S(),r=w("h1"),o=E(e[0]),a=S(),i=w("p"),l=E(d),c=S(),f&&f.c(),u=x(),this.h()},l(t){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=H(t),r=O(t,"H1",{class:!0});var n=L(r);o=C(n,e[0]),n.forEach(_),a=H(t),i=O(t,"P",{class:!0});var h=L(i);l=C(h,d),h.forEach(_),c=H(t),f&&f.l(t),u=x(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(i,"class","svelte-17w3omn")},m(t,e){v(t,s,e),v(t,r,e),g(r,o),v(t,a,e),v(t,i,e),g(i,l),v(t,c,e),f&&f.m(t,e),v(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&M(o,t[0]),2&e&&d!==(d=t[1].message+"")&&M(l,d),t[2]&&t[1].stack?f?f.p(t,e):(f=Vt(t),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&_(s),t&&_(r),t&&_(a),t&&_(i),t&&_(c),f&&f.d(t),t&&_(u)}}}function Yt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Qt extends yt{constructor(t){super(),wt(this,t,Yt,Wt,a,{status:0,error:1})}}function Xt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&gt(n.$$.fragment),s=x()},l(t){n&&bt(n.$$.fragment,t),s=x()},m(t,e){n&&vt(n,t,e),v(t,s,e),r=!0},p(t,e){const r=16&e?pt(o,[mt(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){ut();const t=n;ht(t.$$.fragment,1,0,(()=>{_t(t,1)})),dt()}a?(n=new a(i()),gt(n.$$.fragment),ft(n.$$.fragment,1),vt(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&ft(n.$$.fragment,t),r=!0)},o(t){n&&ht(n.$$.fragment,t),r=!1},d(t){t&&_(s),n&&_t(n,t)}}}function Zt(t){let e,n;return e=new Qt({props:{error:t[0],status:t[1]}}),{c(){gt(e.$$.fragment)},l(t){bt(e.$$.fragment,t)},m(t,s){vt(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(ft(e.$$.fragment,t),n=!0)},o(t){ht(e.$$.fragment,t),n=!1},d(t){_t(e,t)}}}function te(t){let e,n,s,r;const o=[Zt,Xt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=x()},l(t){n.l(t),s=x()},m(t,n){a[e].m(t,n),v(t,s,n),r=!0},p(t,r){let l=e;e=i(t),e===l?a[e].p(t,r):(ut(),ht(a[l],1,1,(()=>{a[l]=null})),dt(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),ft(n,1),n.m(s.parentNode,s))},i(t){r||(ft(n),r=!0)},o(t){ht(n),r=!1},d(t){a[e].d(t),t&&_(s)}}}function ee(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[te]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Jt({props:o}),{c(){gt(n.$$.fragment)},l(t){bt(n.$$.fragment,t)},m(t,e){vt(n,t,e),s=!0},p(t,[e]){const s=12&e?pt(r,[4&e&&{segment:t[2][0]},8&e&&mt(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(ft(n.$$.fragment,t),s=!0)},o(t){ht(n.$$.fragment,t),s=!1},d(t){_t(n,t)}}}function ne(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:l=null}=e,{notify:c}=e;var u,d;return W(c),u=xt,d=s,J().$$.context.set(u,d),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,c=t.notify)},[r,o,a,i,l,s,c]}class se extends yt{constructor(t){super(),wt(this,t,ne,ee,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const re=[],oe=[{js:()=>Promise.all([import("./index.dcdadea3.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c1fca2cf.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].ab047fb0.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].6866dd9f.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.275391c1.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],ae=(ie=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ie(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ie(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ie;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function le(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{l(s.next(t))}catch(t){o(t)}}function i(t){try{l(s.throw(t))}catch(t){o(t)}}function l(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}l((s=s.apply(t,e||[])).next())}))}function ce(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let ue,de=1;const fe="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},he={};let pe,me;function ge(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function be(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(pe))return null;let e=t.pathname.slice(pe.length);if(""===e&&(e="/"),!re.some((t=>t.test(e))))for(let n=0;n<ae.length;n+=1){const s=ae[n],r=s.pattern.exec(e);if(r){const n=ge(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ve(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=ce(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=be(r);if(o){we(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),fe.pushState({id:ue},"",r.href)}}function _e(){return{x:pageXOffset,y:pageYOffset}}function $e(t){if(he[ue]=_e(),t.state){const e=be(new URL(location.href));e?we(e,t.state.id):location.href=location.href}else!function(t){de=t}(de+1),function(t){ue=t}(de),fe.replaceState({id:ue},"",location.href)}function we(t,e,n,s){return le(this,void 0,void 0,(function*(){const r=!!e;if(r)ue=e;else{const t=_e();he[ue]=t,ue=e=++de,he[ue]=n?t:{x:0,y:0}}if(yield me(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=he[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),he[ue]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function ye(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Ee,Se=null;function xe(t){const e=ce(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=be(new URL(t,ye(document)));if(e)Se&&t===Se.href||(Se={href:t,promise:qe(e)}),Se.promise}(e.href)}function Te(t){clearTimeout(Ee),Ee=setTimeout((()=>{xe(t)}),20)}function ke(t,e={noscroll:!1,replaceState:!1}){const n=be(new URL(t,ye(document)));if(n){const s=we(n,null,e.noscroll);return fe[e.replaceState?"replaceState":"pushState"]({id:ue},"",t),s}return location.href=t,new Promise((()=>{}))}const Ae="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ne,Le,Pe,Re=!1,Ie=[],Oe="{}";const je={page:function(t){const e=St(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:St(null),session:St(Ae&&Ae.session)};let Ce,He,Ue;function De(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Me(t){return le(this,void 0,void 0,(function*(){Ne&&je.preloading.set(!0);const e=function(t){return Se&&Se.href===t.href?Se.promise:qe(t)}(t),n=Le={},s=yield e,{redirect:r}=s;if(n===Le)if(r)yield ke(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Ge(n,e,De(e,t.page))}}))}function Ge(t,e,n){return le(this,void 0,void 0,(function*(){je.page.set(n),je.preloading.set(!1),Ne?Ne.$set(e):(e.stores={page:{subscribe:je.page.subscribe},preloading:{subscribe:je.preloading.subscribe},session:je.session},e.level0={props:yield Pe},e.notify=je.page.notify,Ne=new se({target:Ue,props:e,hydrate:!0})),Ie=t,Oe=JSON.stringify(n.query),Re=!0,He=!1}))}function qe(t){return le(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!Pe){const t=()=>({});Pe=Ae.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ce)}let i,l=1;try{const r=JSON.stringify(n.query),c=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>le(this,void 0,void 0,(function*(){const d=s[i];if(function(t,e,n,s){if(s!==Oe)return!0;const r=Ie[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,d,c,r)&&(u=!0),o.segments[l]=s[i+1],!e)return{segment:d};const f=l++;let h;if(He||u||!Ie[i]||Ie[i].part!==e.i){u=!1;const{default:s,preload:r}=yield oe[e.i].js();let o;o=Re||!Ae.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ce):{}:Ae.preloaded[i+1],h={component:s,props:o,segment:d,match:c,part:e.i}}else h=Ie[i];return o[`level${f}`]=h})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var ze,Be,Ke;je.session.subscribe((t=>le(void 0,void 0,void 0,(function*(){if(Ce=t,!Re)return;He=!0;const e=be(new URL(location.href)),n=Le={},{redirect:s,props:r,branch:o}=yield qe(e);n===Le&&(s?yield ke(s.location,{replaceState:!0}):yield Ge(o,r,De(r,e.page)))})))),ze={target:document.querySelector("#sapper")},Be=ze.target,Ue=Be,Ke=Ae.baseUrl,pe=Ke,me=Me,"scrollRestoration"in fe&&(fe.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{fe.scrollRestoration="auto"})),addEventListener("load",(()=>{fe.scrollRestoration="manual"})),addEventListener("click",ve),addEventListener("popstate",$e),addEventListener("touchstart",xe),addEventListener("mousemove",Te),Ae.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=Ae;Pe||(Pe=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Pe},level1:{props:{status:o,error:a},component:Qt},segments:r},l=ge(n);Ge([],i,{host:t,path:e,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;fe.replaceState({id:de},"",e);const n=be(new URL(location.href));if(n)return we(n,de,!0,t)}));export{_t as A,T as B,r as C,X as D,D as E,l as F,d as G,K as H,B as I,Ct as J,y as K,j as L,ke as M,G as N,k as O,e as P,N as Q,pt as R,yt as S,W as T,Y as U,u as V,mt as W,st as X,z as Y,L as a,C as b,O as c,_ as d,w as e,A as f,v as g,g as h,wt as i,S as j,H as k,ut as l,ht as m,t as n,dt as o,ft as p,V as q,Tt as r,a as s,E as t,M as u,x as v,$ as w,gt as x,bt as y,vt as z};

import __inject_styles from './inject_styles.803b7e80.js';