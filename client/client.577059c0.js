function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function s(){return Object.create(null)}function r(e){e.forEach(n)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i;function l(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function c(e,n,s,r){return e[1]&&r?t(s.ctx.slice(),e[1](r(n))):s.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e){return null==e?"":e}let f,h,p=!1;function m(e,t,n,s){for(;e<t;){const r=e+(t-e>>1);n(r)<=s?e=r+1:t=r}return e}function g(e,t){if(p){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const s=t[n];void 0!==s.claim_order&&e.push(s)}t=e}const n=new Int32Array(t.length+1),s=new Int32Array(t.length);n[0]=-1;let r=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,a=(r>0&&t[n[r]].claim_order<=o?r+1:m(1,r,(e=>t[n[e]].claim_order),o))-1;s[e]=n[a]+1;const i=a+1;n[i]=e,r=Math.max(i,r)}const o=[],a=[];let i=t.length-1;for(let e=n[r]+1;0!=e;e=s[e-1]){for(o.push(t[e-1]);i>=e;i--)a.push(t[i]);i--}for(;i>=0;i--)a.push(t[i]);o.reverse(),a.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<a.length;t++){for(;n<o.length&&a[t].claim_order>=o[n].claim_order;)n++;const s=n<o.length?o[n]:null;e.insertBefore(a[t],s)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentElement!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function v(e,t,n){e.insertBefore(t,n||null)}function b(e,t,n){p&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function _(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function S(){return E(" ")}function x(){return E("")}function T(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function N(e){return function(t){return t.preventDefault(),e.call(this,t)}}function A(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function L(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const s in t)null==t[s]?e.removeAttribute(s):"style"===s?e.style.cssText=t[s]:"__value"===s?e.value=e[s]=t[s]:n[s]&&n[s].set?e[s]=t[s]:A(e,s,t[s])}function k(e){return Array.from(e.childNodes)}function P(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,s,r=!1){P(e);const o=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const t=n(o);return void 0===t?e.splice(s,1):e[s]=t,r?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return s()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function I(e,t,n,s){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let s=0;s<e.attributes.length;s++){const r=e.attributes[s];n[r.name]||t.push(r.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>s(t)))}function O(e,t,n){return I(e,t,n,w)}function C(e,t,n){return I(e,t,n,y)}function D(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function j(e){return D(e," ")}function H(e,t,n){for(let s=n;s<e.length;s+=1){const n=e[s];if(8===n.nodeType&&n.textContent.trim()===t)return s}return e.length}function U(e){const t=H(e,"HTML_TAG_START",0),n=H(e,"HTML_TAG_END",t);if(t===n)return new K;P(e);const s=e.splice(t,n+1);_(s[0]),_(s[s.length-1]);const r=s.slice(1,s.length-1);for(const t of r)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(r)}function M(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(){if(void 0===f){f=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){f=!0}}return f}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=q();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{r=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(s||r&&n.contentWindow)&&r(),_(n)}}function B(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(){this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(_)}}{constructor(e){super(),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}}function F(e){h=e}function J(){if(!h)throw new Error("Function called outside component initialization");return h}function V(e){J().$$.on_mount.push(e)}function W(e){J().$$.after_update.push(e)}function Y(e){J().$$.on_destroy.push(e)}const X=[],Q=[],Z=[],ee=[],te=Promise.resolve();let ne=!1;function se(e){Z.push(e)}let re=!1;const oe=new Set;function ae(){if(!re){re=!0;do{for(let e=0;e<X.length;e+=1){const t=X[e];F(t),ie(t.$$)}for(F(null),X.length=0;Q.length;)Q.pop()();for(let e=0;e<Z.length;e+=1){const t=Z[e];oe.has(t)||(oe.add(t),t())}Z.length=0}while(X.length);for(;ee.length;)ee.pop()();ne=!1,re=!1,oe.clear()}}function ie(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const le=new Set;let ce;function ue(){ce={r:0,c:[],p:ce}}function de(){ce.r||r(ce.c),ce=ce.p}function fe(e,t){e&&e.i&&(le.delete(e),e.i(t))}function he(e,t,n,s){if(e&&e.o){if(le.has(e))return;le.add(e),ce.c.push((()=>{le.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function pe(e,t){const n={},s={},r={$$scope:1};let o=e.length;for(;o--;){const a=e[o],i=t[o];if(i){for(const e in a)e in i||(s[e]=1);for(const e in i)r[e]||(n[e]=i[e],r[e]=1);e[o]=i}else for(const e in a)r[e]=1}for(const e in s)e in n||(n[e]=void 0);return n}function me(e){return"object"==typeof e&&null!==e?e:{}}function ge(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function be(e,t,s,a){const{fragment:i,on_mount:l,on_destroy:c,after_update:u}=e.$$;i&&i.m(t,s),a||se((()=>{const t=l.map(n).filter(o);c?c.push(...t):r(t),e.$$.on_mount=[]})),u.forEach(se)}function _e(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function $e(e,t){-1===e.$$.dirty[0]&&(X.push(e),ne||(ne=!0,te.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(t,n,o,a,i,l,c,u=[-1]){const d=h;F(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:s(),dirty:u,skip_bound:!1,root:n.target||d.$$.root};c&&c(f.root);let m=!1;if(f.ctx=o?o(t,n.props||{},((e,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),m&&$e(t,e)),n})):[],f.update(),m=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){p=!0;const e=k(n.target);f.fragment&&f.fragment.l(e),e.forEach(_)}else f.fragment&&f.fragment.c();n.intro&&fe(t.$$.fragment),be(t,n.target,n.anchor,n.customElement),p=!1,ae()}F(d)}class ye{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ee=[];function Se(t,n=e){let s;const r=new Set;function o(e){if(a(t,e)&&(t=e,s)){const e=!Ee.length;for(const e of r)e[1](),Ee.push(e,t);if(e){for(let e=0;e<Ee.length;e+=2)Ee[e][0](Ee[e+1]);Ee.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a,i=e){const l=[a,i];return r.add(l),1===r.size&&(s=n(o)||e),a(t),()=>{r.delete(l),0===r.size&&(s(),s=null)}}}}const xe={};var Te={owner:"ghveem",repo:"oppetid",sites:[{name:"NDLA.no",url:"https://ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem","gunnarvelle"]},{name:"api.NDLA.no",url:"https://api.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem","gunnarvelle"]},{name:"stier.ndla.no",url:"https://stier.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem"]},{name:"h5p.ndla.no",url:"https://ca.h5p.ndla.no/h5p",icon:"https://h5p.org/sites/all/themes/professional_themec/favicon.ico",assignees:["ghveem"]},{name:"auth H5P",url:"$SECRET_AUTH5PNDLANO",icon:"https://h5p.org/sites/all/themes/professional_themec/favicon.ico",assignees:["ghveem"]},{name:"ed (NDLA)",url:"$SECRET_EDNDLANO",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem","gunnarvelle"]},{name:"test (NDLA)",url:"$SECRET_TESTNDLANO",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem","gunnarvelle"]},{name:"staging (NDLA)",url:"$SECRET_STAGINGNDLANO",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem","gunnarvelle"]},{name:"NDLA Support",url:"https://ndla.zendesk.com/",icon:"https://ndla.no/static/ndla-favicon.png",expectedStatusCodes:[301,403],assignees:["ghveem"]},{name:"om.ndla.no",url:"https://om.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem"]},{name:"blogg.ndla.no",url:"https://blogg.ndla.no",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem"]},{name:"arena (NDLA)",url:"$SECRET_ARENANDLANO",icon:"https://ndla.no/static/ndla-favicon.png",assignees:["ghveem"]}],"status-website":{theme:"light",baseUrl:"/oppetid",logoUrl:"https://ndla.no/static/metalogo.jpg",name:"NDLA.no - Oppetid",introTitle:"**Oppetid** overvaker statusen til utvalde nettsider",introMessage:"For ndla.no - Dei flesta sakene heng saman, er t.d. api eller taksonomi nede, så påvirkar det resten. Er noko nede her, så har teknikarane fått varsel og jobbar med saka.",navbar:[{title:"Status",href:"https://ghveem.github.io/oppetid/"},{title:"Support",href:"https://ndla.zendesk.com"},{title:"NDLA_no på twitter",href:"https://twitter.com/ndla_no"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}]},robotsText:"User-agent: * \n Disallow: /",i18n:{activeIncidents:"Aktive hendingar",allSystemsOperational:"Alt vel",incidentReport:"Rapport for hending #$NUMBER  →",activeIncidentSummary:"Opna $DATE med $POSTS postar",incidentTitle:"Detaljar for hending $NUMBER",incidentDetails:"Detaljar for hending",incidentFixed:"Fiksa",incidentOngoing:"Pågåande",incidentOpenedAt:"Opna",incidentClosedAt:"Lukka",incidentSubscribe:"Abonner på oppdateringar",incidentViewOnGitHub:"Sjå på GitHub",incidentCommentSummary:"Posta $DATE av $AUTHOR",incidentBack:"← Tilbake til alle hendingar",pastIncidents:"Eldre hendingar",pastIncidentsResolved:"Løyst i løpet av $MINUTES minuttar. Sjå $POSTS post(ar)",liveStatus:"Status",overallUptime:"Oppetid: $UPTIME",overallUptimeTitle:"Oppetid",averageResponseTime:"Gjenomsnittleg responstid: $TIMEms",averageResponseTimeTitle:"Gjenomsnittleg responstid",sevelDayResponseTime:"Responstid siste 7 dagar",responseTimeMs:"Responstid (ms)",up:"Oppe",down:"Nede",degraded:"Nedgradert",ms:"ms",loading:"Lastar",navGitHub:"GitHub",footer:"Denne sida er laga med [open kjeldekode]($REPO) frå [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"For mange kall",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"Korleis kan du fikse det?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"Ein feil oppstod.",errorIntro:"Klarte ikkje å laste inn siste statusar.",errorText:"Prøv igjen om eit par straksar.",errorHome:"Til startsida",pastScheduledMaintenance:"Tidlegare planlagt vedlikehald",scheduledMaintenance:"Planlagt vedlikehald",scheduledMaintenanceSummaryStarted:"Starta $DATE og varar $DURATION minuttar",scheduledMaintenanceSummaryStarts:"Startar $DATE og varar $DURATION minuttar",startedAt:"Starta",startsAt:"Startar",duration:"Varar",durationMin:"$DURATION minuttar",incidentCompleted:"Fullført",incidentScheduled:"Planlagd"},path:"https://ghveem.github.io/oppetid"};function Ne(e,t,n){const s=e.slice();return s[1]=t[n],s}function Ae(t){let n,s,r,o=Te["status-website"]&&!Te["status-website"].hideNavLogo&&function(t){let n,s;return{c(){n=w("img"),this.h()},l(e){n=O(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){A(n,"alt",""),l(n.src,s=Te["status-website"].logoUrl)||A(n,"src",s),A(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}(),a=Te["status-website"]&&!Te["status-website"].hideNavTitle&&function(t){let n,s,r=Te["status-website"].name+"";return{c(){n=w("div"),s=E(r)},l(e){n=O(e,"DIV",{});var t=k(n);s=D(t,r),t.forEach(_)},m(e,t){b(e,n,t),g(n,s)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("div"),s=w("a"),o&&o.c(),r=S(),a&&a.c(),this.h()},l(e){n=O(e,"DIV",{});var t=k(n);s=O(t,"A",{href:!0,class:!0});var i=k(s);o&&o.l(i),r=j(i),a&&a.l(i),i.forEach(_),t.forEach(_),this.h()},h(){A(s,"href",Te["status-website"].logoHref||Te.path),A(s,"class","logo svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),o&&o.m(s,null),g(s,r),a&&a.m(s,null)},p(e,t){Te["status-website"]&&!Te["status-website"].hideNavLogo&&o.p(e,t),Te["status-website"]&&!Te["status-website"].hideNavTitle&&a.p(e,t)},d(e){e&&_(n),o&&o.d(),a&&a.d()}}}function Le(e){let t,n,s,r,o,a,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),s=E(i),a=S(),this.h()},l(e){t=O(e,"LI",{});var r=k(t);n=O(r,"A",{"aria-current":!0,href:!0,class:!0});var o=k(n);s=D(o,i),o.forEach(_),a=j(r),r.forEach(_),this.h()},h(){A(n,"aria-current",r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),A(n,"href",o=e[1].href.replace("$OWNER",Te.owner).replace("$REPO",Te.repo)),A(n,"class","svelte-a08hsz")},m(e,r){b(e,t,r),g(t,n),g(n,s),g(t,a)},p(e,t){1&t&&r!==(r=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&A(n,"aria-current",r)},d(e){e&&_(t)}}}function ke(t){let n,s,r,o,a,i=Te["status-website"]&&Te["status-website"].logoUrl&&Ae(),l=Te["status-website"]&&Te["status-website"].navbar&&function(e){let t,n=Te["status-website"].navbar,s=[];for(let t=0;t<n.length;t+=1)s[t]=Le(Ne(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(1&r){let o;for(n=Te["status-website"].navbar,o=0;o<n.length;o+=1){const a=Ne(e,n,o);s[o]?s[o].p(a,r):(s[o]=Le(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),c=Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&function(t){let n,s,r,o=Te.i18n.navGitHub+"";return{c(){n=w("li"),s=w("a"),r=E(o),this.h()},l(e){n=O(e,"LI",{});var t=k(n);s=O(t,"A",{href:!0,class:!0});var a=k(s);r=D(a,o),a.forEach(_),t.forEach(_),this.h()},h(){A(s,"href",`https://github.com/${Te.owner}/${Te.repo}`),A(s,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),g(s,r)},p:e,d(e){e&&_(n)}}}();return{c(){n=w("nav"),s=w("div"),i&&i.c(),r=S(),o=w("ul"),l&&l.c(),a=S(),c&&c.c(),this.h()},l(e){n=O(e,"NAV",{class:!0});var t=k(n);s=O(t,"DIV",{class:!0});var u=k(s);i&&i.l(u),r=j(u),o=O(u,"UL",{class:!0});var d=k(o);l&&l.l(d),a=j(d),c&&c.l(d),d.forEach(_),u.forEach(_),t.forEach(_),this.h()},h(){A(o,"class","svelte-a08hsz"),A(s,"class","container svelte-a08hsz"),A(n,"class","svelte-a08hsz")},m(e,t){b(e,n,t),g(n,s),i&&i.m(s,null),g(s,r),g(s,o),l&&l.m(o,null),g(o,a),c&&c.m(o,null)},p(e,[t]){Te["status-website"]&&Te["status-website"].logoUrl&&i.p(e,t),Te["status-website"]&&Te["status-website"].navbar&&l.p(e,t),Te["status-website"]&&Te["status-website"].navbarGitHub&&!Te["status-website"].navbar&&c.p(e,t)},i:e,o:e,d(e){e&&_(n),i&&i.d(),l&&l.d(),c&&c.d()}}}function Pe(e,t,n){let{segment:s}=t;return e.$$set=e=>{"segment"in e&&n(0,s=e.segment)},[s]}class Re extends ye{constructor(e){super(),we(this,e,Pe,ke,a,{segment:0})}}var Ie={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ce(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function De(e,t){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,l=[],c="",u=t||{},d=0;function f(e){var t=Ie[e[1]||""],n=l[l.length-1]==e;return t?t[1]?(n?l.pop():l.push(e),t[0|n]):t[0]:e}function h(){for(var e="";l.length;)e+=f(l[l.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(e);)s=e.substring(d,r.index),d=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+Oe(Ce(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=De(Oe(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+Ce(r[8])+'" alt="'+Ce(r[7])+'">':r[10]?(c=c.replace("<a>",'<a href="'+Ce(r[11]||u[s.toLowerCase()])+'">'),n=h()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+De(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+Ce(r[16])+"</code>":(r[17]||r[1])&&(n=f(r[17]||"--"))),c+=s,c+=n;return(c+e.substring(d)+h()).replace(/^\n+|\n+$/g,"")}function je(e,t,n){const s=e.slice();return s[3]=t[n],s}function He(e,t,n){const s=e.slice();return s[3]=t[n],s}function Ue(e,t,n){const s=e.slice();return s[8]=t[n],s}function Me(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",`${Te.path}/themes/${(Te["status-website"]||{}).theme||"light"}.css`)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0}),this.h()},h(){A(n,"rel","stylesheet"),A(n,"href",(Te["status-website"]||{}).themeUrl)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function qe(t){let n,s;return{c(){n=w("script"),this.h()},l(e){n=O(e,"SCRIPT",{src:!0}),k(n).forEach(_),this.h()},h(){l(n.src,s=t[8].src)||A(n,"src",s),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function ze(t){let n;return{c(){n=w("link"),this.h()},l(e){n=O(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){A(n,"rel",t[3].rel),A(n,"href",t[3].href),A(n,"media",t[3].media)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Be(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=O(e,"META",{name:!0,content:!0}),this.h()},h(){A(n,"name",t[3].name),A(n,"content",t[3].content)},m(e,t){b(e,n,t)},p:e,d(e){e&&_(n)}}}function Ke(t){let n,s,r,o,a,i,l,u,d,f,h,p,m,v,y,E,T,N,L=De(Te.i18n.footer.replace(/\$REPO/,`https://github.com/${Te.owner}/${Te.repo}`))+"",P=(Te["status-website"]||{}).customHeadHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customHeadHtml+"";return{c(){n=new K,s=x(),this.h()},l(e){n=U(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();let R=((Te["status-website"]||{}).themeUrl?Ge:Me)(t),I=(Te["status-website"]||{}).scripts&&function(e){let t,n=(Te["status-website"]||{}).scripts,s=[];for(let t=0;t<n.length;t+=1)s[t]=qe(Ue(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Ue(e,n,o);s[o]?s[o].p(a,r):(s[o]=qe(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),C=(Te["status-website"]||{}).links&&function(e){let t,n=(Te["status-website"]||{}).links,s=[];for(let t=0;t<n.length;t+=1)s[t]=ze(He(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=He(e,n,o);s[o]?s[o].p(a,r):(s[o]=ze(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),D=(Te["status-website"]||{}).metaTags&&function(e){let t,n=(Te["status-website"]||{}).metaTags,s=[];for(let t=0;t<n.length;t+=1)s[t]=Be(je(e,n,t));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=x()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=x()},m(e,n){for(let t=0;t<s.length;t+=1)s[t].m(e,n);b(e,t,n)},p(e,r){if(0&r){let o;for(n=(Te["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=je(e,n,o);s[o]?s[o].p(a,r):(s[o]=Be(a),s[o].c(),s[o].m(t.parentNode,t))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(e){$(s,e),e&&_(t)}}}(t),H=Te["status-website"].css&&function(t){let n,s,r=`<style>${Te["status-website"].css}</style>`;return{c(){n=new K,s=x(),this.h()},l(e){n=U(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),M=Te["status-website"].js&&function(t){let n,s,r=`<script>${Te["status-website"].js}<\/script>`;return{c(){n=new K,s=x(),this.h()},l(e){n=U(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}(),G=(Te["status-website"]||{}).customBodyHtml&&function(t){let n,s,r=(Te["status-website"]||{}).customBodyHtml+"";return{c(){n=new K,s=x(),this.h()},l(e){n=U(e),s=x(),this.h()},h(){n.a=s},m(e,t){n.m(r,e,t),b(e,s,t)},p:e,d(e){e&&_(s),e&&n.d()}}}();p=new Re({props:{segment:t[0]}});const q=t[2].default,z=function(e,t,n,s){if(e){const r=c(e,t,n,s);return e[0](r)}}(q,t,t[1],null);return{c(){P&&P.c(),n=x(),R.c(),s=w("link"),r=w("link"),o=w("link"),I&&I.c(),a=x(),C&&C.c(),i=x(),D&&D.c(),l=x(),H&&H.c(),u=x(),M&&M.c(),d=x(),f=S(),G&&G.c(),h=S(),ge(p.$$.fragment),m=S(),v=w("main"),z&&z.c(),y=S(),E=w("footer"),T=w("p"),this.h()},l(e){const t=B('[data-svelte="svelte-ri9y7q"]',document.head);P&&P.l(t),n=x(),R.l(t),s=O(t,"LINK",{rel:!0,href:!0}),r=O(t,"LINK",{rel:!0,type:!0,href:!0}),o=O(t,"LINK",{rel:!0,type:!0,href:!0}),I&&I.l(t),a=x(),C&&C.l(t),i=x(),D&&D.l(t),l=x(),H&&H.l(t),u=x(),M&&M.l(t),d=x(),t.forEach(_),f=j(e),G&&G.l(e),h=j(e),ve(p.$$.fragment,e),m=j(e),v=O(e,"MAIN",{class:!0});var c=k(v);z&&z.l(c),c.forEach(_),y=j(e),E=O(e,"FOOTER",{class:!0});var g=k(E);T=O(g,"P",{}),k(T).forEach(_),g.forEach(_),this.h()},h(){A(s,"rel","stylesheet"),A(s,"href",`${Te.path}/global.css`),A(r,"rel","icon"),A(r,"type","image/svg"),A(r,"href",(Te["status-website"]||{}).faviconSvg||(Te["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),A(o,"rel","icon"),A(o,"type","image/png"),A(o,"href",(Te["status-website"]||{}).favicon||"/logo-192.png"),A(v,"class","container"),A(E,"class","svelte-jbr799")},m(e,t){P&&P.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,s),g(document.head,r),g(document.head,o),I&&I.m(document.head,null),g(document.head,a),C&&C.m(document.head,null),g(document.head,i),D&&D.m(document.head,null),g(document.head,l),H&&H.m(document.head,null),g(document.head,u),M&&M.m(document.head,null),g(document.head,d),b(e,f,t),G&&G.m(e,t),b(e,h,t),be(p,e,t),b(e,m,t),b(e,v,t),z&&z.m(v,null),b(e,y,t),b(e,E,t),g(E,T),T.innerHTML=L,N=!0},p(e,[t]){(Te["status-website"]||{}).customHeadHtml&&P.p(e,t),R.p(e,t),(Te["status-website"]||{}).scripts&&I.p(e,t),(Te["status-website"]||{}).links&&C.p(e,t),(Te["status-website"]||{}).metaTags&&D.p(e,t),Te["status-website"].css&&H.p(e,t),Te["status-website"].js&&M.p(e,t),(Te["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),p.$set(n),z&&z.p&&(!N||2&t)&&function(e,t,n,s,r,o){if(r){const a=c(t,n,s,o);e.p(a,r)}}(z,q,e,e[1],N?function(e,t,n,s){if(e[2]&&s){const r=e[2](s(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let s=0;s<n;s+=1)e[s]=t.dirty[s]|r[s];return e}return t.dirty|r}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){N||(fe(p.$$.fragment,e),fe(z,e),N=!0)},o(e){he(p.$$.fragment,e),he(z,e),N=!1},d(e){P&&P.d(e),_(n),R.d(e),_(s),_(r),_(o),I&&I.d(e),_(a),C&&C.d(e),_(i),D&&D.d(e),_(l),H&&H.d(e),_(u),M&&M.d(e),_(d),e&&_(f),G&&G.d(e),e&&_(h),_e(p,e),e&&_(m),e&&_(v),z&&z.d(e),e&&_(y),e&&_(E)}}}function Fe(e,t,n){let{$$slots:s={},$$scope:r}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,r=e.$$scope)},[o,r,s]}class Je extends ye{constructor(e){super(),we(this,e,Fe,Ke,a,{segment:0})}}function Ve(e){let t,n,s=e[1].stack+"";return{c(){t=w("pre"),n=E(s)},l(e){t=O(e,"PRE",{});var r=k(t);n=D(r,s),r.forEach(_)},m(e,s){b(e,t,s),g(t,n)},p(e,t){2&t&&s!==(s=e[1].stack+"")&&M(n,s)},d(e){e&&_(t)}}}function We(t){let n,s,r,o,a,i,l,c,u,d=t[1].message+"";document.title=n=t[0];let f=t[2]&&t[1].stack&&Ve(t);return{c(){s=S(),r=w("h1"),o=E(t[0]),a=S(),i=w("p"),l=E(d),c=S(),f&&f.c(),u=x(),this.h()},l(e){B('[data-svelte="svelte-1moakz"]',document.head).forEach(_),s=j(e),r=O(e,"H1",{class:!0});var n=k(r);o=D(n,t[0]),n.forEach(_),a=j(e),i=O(e,"P",{class:!0});var h=k(i);l=D(h,d),h.forEach(_),c=j(e),f&&f.l(e),u=x(),this.h()},h(){A(r,"class","svelte-17w3omn"),A(i,"class","svelte-17w3omn")},m(e,t){b(e,s,t),b(e,r,t),g(r,o),b(e,a,t),b(e,i,t),g(i,l),b(e,c,t),f&&f.m(e,t),b(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&M(o,e[0]),2&t&&d!==(d=e[1].message+"")&&M(l,d),e[2]&&e[1].stack?f?f.p(e,t):(f=Ve(e),f.c(),f.m(u.parentNode,u)):f&&(f.d(1),f=null)},i:e,o:e,d(e){e&&_(s),e&&_(r),e&&_(a),e&&_(i),e&&_(c),f&&f.d(e),e&&_(u)}}}function Ye(e,t,n){let{status:s}=t,{error:r}=t;return e.$$set=e=>{"status"in e&&n(0,s=e.status),"error"in e&&n(1,r=e.error)},[s,r,false]}class Xe extends ye{constructor(e){super(),we(this,e,Ye,We,a,{status:0,error:1})}}function Qe(e){let n,s,r;const o=[e[4].props];var a=e[4].component;function i(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return a&&(n=new a(i())),{c(){n&&ge(n.$$.fragment),s=x()},l(e){n&&ve(n.$$.fragment,e),s=x()},m(e,t){n&&be(n,e,t),b(e,s,t),r=!0},p(e,t){const r=16&t?pe(o,[me(e[4].props)]):{};if(a!==(a=e[4].component)){if(n){ue();const e=n;he(e.$$.fragment,1,0,(()=>{_e(e,1)})),de()}a?(n=new a(i()),ge(n.$$.fragment),fe(n.$$.fragment,1),be(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(e){r||(n&&fe(n.$$.fragment,e),r=!0)},o(e){n&&he(n.$$.fragment,e),r=!1},d(e){e&&_(s),n&&_e(n,e)}}}function Ze(e){let t,n;return t=new Xe({props:{error:e[0],status:e[1]}}),{c(){ge(t.$$.fragment)},l(e){ve(t.$$.fragment,e)},m(e,s){be(t,e,s),n=!0},p(e,n){const s={};1&n&&(s.error=e[0]),2&n&&(s.status=e[1]),t.$set(s)},i(e){n||(fe(t.$$.fragment,e),n=!0)},o(e){he(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function et(e){let t,n,s,r;const o=[Ze,Qe],a=[];function i(e,t){return e[0]?0:1}return t=i(e),n=a[t]=o[t](e),{c(){n.c(),s=x()},l(e){n.l(e),s=x()},m(e,n){a[t].m(e,n),b(e,s,n),r=!0},p(e,r){let l=t;t=i(e),t===l?a[t].p(e,r):(ue(),he(a[l],1,1,(()=>{a[l]=null})),de(),n=a[t],n?n.p(e,r):(n=a[t]=o[t](e),n.c()),fe(n,1),n.m(s.parentNode,s))},i(e){r||(fe(n),r=!0)},o(e){he(n),r=!1},d(e){a[t].d(e),e&&_(s)}}}function tt(e){let n,s;const r=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[et]},$$scope:{ctx:e}};for(let e=0;e<r.length;e+=1)o=t(o,r[e]);return n=new Je({props:o}),{c(){ge(n.$$.fragment)},l(e){ve(n.$$.fragment,e)},m(e,t){be(n,e,t),s=!0},p(e,[t]){const s=12&t?pe(r,[4&t&&{segment:e[2][0]},8&t&&me(e[3].props)]):{};147&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s)},i(e){s||(fe(n.$$.fragment,e),s=!0)},o(e){he(n.$$.fragment,e),s=!1},d(e){_e(n,e)}}}function nt(e,t,n){let{stores:s}=t,{error:r}=t,{status:o}=t,{segments:a}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var u,d;return W(c),u=xe,d=s,J().$$.context.set(u,d),e.$$set=e=>{"stores"in e&&n(5,s=e.stores),"error"in e&&n(0,r=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,a=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[r,o,a,i,l,s,c]}class st extends ye{constructor(e){super(),we(this,e,nt,tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const rt=[],ot=[{js:()=>Promise.all([import("./index.31e676df.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.c1cfe5ce.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.905b79dd.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-c4ffc2b4.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.c86f7c4e.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","_number_-bc1bb552.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.febaa71f.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(it=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:it(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:it(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var it;
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
function lt(e,t,n,s){return new(n||(n=Promise))((function(r,o){function a(e){try{l(s.next(e))}catch(e){o(e)}}function i(e){try{l(s.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,i)}l((s=s.apply(e,t||[])).next())}))}function ct(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ut,dt=1;const ft="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ht={};let pt,mt;function gt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function vt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!rt.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const s=at[n],r=s.pattern.exec(t);if(r){const n=gt(e.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:t,query:n,params:a};return{href:e.href,route:s,match:r,page:i}}}}function bt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ct(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,s=String(n?t.href.baseVal:t.href);if(s===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=vt(r);if(o){wt(o,null,t.hasAttribute("sapper:noscroll"),r.hash),e.preventDefault(),ft.pushState({id:ut},"",r.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function $t(e){if(ht[ut]=_t(),e.state){const t=vt(new URL(location.href));t?wt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ut=e}(dt),ft.replaceState({id:ut},"",location.href)}function wt(e,t,n,s){return lt(this,void 0,void 0,(function*(){const r=!!t;if(r)ut=t;else{const e=_t();ht[ut]=e,ut=t=++dt,ht[ut]=n?e:{x:0,y:0}}if(yield mt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=ht[t];s&&(e=document.getElementById(s.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),ht[ut]=n,n&&(r||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function yt(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let Et,St=null;function xt(e){const t=ct(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=vt(new URL(e,yt(document)));if(t)St&&e===St.href||(St={href:e,promise:qt(t)}),St.promise}(t.href)}function Tt(e){clearTimeout(Et),Et=setTimeout((()=>{xt(e)}),20)}function Nt(e,t={noscroll:!1,replaceState:!1}){const n=vt(new URL(e,yt(document)));if(n){const s=wt(n,null,t.noscroll);return ft[t.replaceState?"replaceState":"pushState"]({id:ut},"",e),s}return location.href=e,new Promise((()=>{}))}const At="undefined"!=typeof __SAPPER__&&__SAPPER__;let Lt,kt,Pt,Rt=!1,It=[],Ot="{}";const Ct={page:function(e){const t=Se(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let s;return t.subscribe((t=>{(void 0===s||n&&t!==s)&&e(s=t)}))}}}({}),preloading:Se(null),session:Se(At&&At.session)};let Dt,jt,Ht;function Ut(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Mt(e){return lt(this,void 0,void 0,(function*(){Lt&&Ct.preloading.set(!0);const t=function(e){return St&&St.href===e.href?St.promise:qt(e)}(e),n=kt={},s=yield t,{redirect:r}=s;if(n===kt)if(r)yield Nt(r.location,{replaceState:!0});else{const{props:t,branch:n}=s;yield Gt(n,t,Ut(t,e.page))}}))}function Gt(e,t,n){return lt(this,void 0,void 0,(function*(){Ct.page.set(n),Ct.preloading.set(!1),Lt?Lt.$set(t):(t.stores={page:{subscribe:Ct.page.subscribe},preloading:{subscribe:Ct.preloading.subscribe},session:Ct.session},t.level0={props:yield Pt},t.notify=Ct.page.notify,Lt=new st({target:Ht,props:t,hydrate:!0})),It=e,Ot=JSON.stringify(n.query),Rt=!0,jt=!1}))}function qt(e){return lt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(r&&(r.statusCode!==e||r.location!==t))throw new Error("Conflicting redirects");r={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Pt){const e=()=>({});Pt=At.preloaded[0]||e.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Dt)}let i,l=1;try{const r=JSON.stringify(n.query),c=t.pattern.exec(n.path);let u=!1;i=yield Promise.all(t.parts.map(((t,i)=>lt(this,void 0,void 0,(function*(){const d=s[i];if(function(e,t,n,s){if(s!==Ot)return!0;const r=It[e];return!!r&&(t!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,d,c,r)&&(u=!0),o.segments[l]=s[i+1],!t)return{segment:d};const f=l++;let h;if(jt||u||!It[i]||It[i].part!==t.i){u=!1;const{default:s,preload:r}=yield ot[t.i].js();let o;o=Rt||!At.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Dt):{}:At.preloaded[i+1],h={component:s,props:o,segment:d,match:c,part:t.i}}else h=It[i];return o[`level${f}`]=h})))))}catch(e){o.error=e,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var zt,Bt,Kt;Ct.session.subscribe((e=>lt(void 0,void 0,void 0,(function*(){if(Dt=e,!Rt)return;jt=!0;const t=vt(new URL(location.href)),n=kt={},{redirect:s,props:r,branch:o}=yield qt(t);n===kt&&(s?yield Nt(s.location,{replaceState:!0}):yield Gt(o,r,Ut(r,t.page)))})))),zt={target:document.querySelector("#sapper")},Bt=zt.target,Ht=Bt,Kt=At.baseUrl,pt=Kt,mt=Mt,"scrollRestoration"in ft&&(ft.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ft.scrollRestoration="auto"})),addEventListener("load",(()=>{ft.scrollRestoration="manual"})),addEventListener("click",bt),addEventListener("popstate",$t),addEventListener("touchstart",xt),addEventListener("mousemove",Tt),At.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:s,preloaded:r,status:o,error:a}=At;Pt||(Pt=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:Pt},level1:{props:{status:o,error:a},component:Xe},segments:r},l=gt(n);Gt([],i,{host:e,path:t,query:l,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ft.replaceState({id:dt},"",t);const n=vt(new URL(location.href));if(n)return wt(n,dt,!0,e)}));export{_e as A,T as B,r as C,Q as D,U as E,l as F,d as G,K as H,B as I,De as J,y as K,C as L,Nt as M,G as N,N as O,t as P,L as Q,pe as R,ye as S,W as T,Y as U,u as V,me as W,se as X,z as Y,k as a,D as b,O as c,_ as d,w as e,A as f,b as g,g as h,we as i,S as j,j as k,ue as l,he as m,e as n,de as o,fe as p,V as q,Te as r,a as s,E as t,M as u,x as v,$ as w,ge as x,ve as y,be as z};

import __inject_styles from './inject_styles.803b7e80.js';