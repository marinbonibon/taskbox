var Ct=Object.defineProperty;var xt=(e,t,r)=>t in e?Ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var fe=(e,t,r)=>(xt(e,typeof t!="symbol"?t+"":t,r),r);import{j as G,a as k,T as rt,D as I}from"./Task.stories-468792f0.js";import{r as Rt,a as xe,R as Pt}from"./index-76fb7be0.js";import{P as Y}from"./index-8d47fad6.js";import{r as Mt}from"./index-d3ea75b5.js";var nt={exports:{}},st={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X=Rt;function At(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ot=typeof Object.is=="function"?Object.is:At,Dt=X.useSyncExternalStore,Nt=X.useRef,jt=X.useEffect,It=X.useMemo,zt=X.useDebugValue;st.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var o=Nt(null);if(o.current===null){var i={hasValue:!1,value:null};o.current=i}else i=o.current;o=It(function(){function a(y){if(!f){if(f=!0,u=y,y=n(y),s!==void 0&&i.hasValue){var m=i.value;if(s(m,y))return l=m}return l=y}if(m=l,Ot(u,y))return m;var _=n(y);return s!==void 0&&s(m,_)?m:(u=y,l=_)}var f=!1,u,l,h=r===void 0?null:r;return[function(){return a(t())},h===null?void 0:function(){return a(h())}]},[t,r,n,s]);var c=Dt(e,o[0],o[1]);return jt(function(){i.hasValue=!0,i.value=c},[c]),zt(c),c};nt.exports=st;var Ft=nt.exports;function $t(e){e()}var ot=$t,Wt=e=>ot=e,Lt=()=>ot,T="default"in xe?Pt:xe,Re=Symbol.for("react-redux-context"),Pe=typeof globalThis<"u"?globalThis:{};function Bt(){if(!T.createContext)return{};const e=Pe[Re]??(Pe[Re]=new Map);let t=e.get(T.createContext);return t||(t=T.createContext(null),e.set(T.createContext,t)),t}var O=Bt(),Kt=()=>{throw new Error("uSES not initialized!")};function ge(e=O){return function(){return T.useContext(e)}}var it=ge(),ct=Kt,Ut=e=>{ct=e},qt=(e,t)=>e===t;function Vt(e=O){const t=e===O?it:ge(e);return function(n,s={}){const{equalityFn:o=qt,devModeChecks:i={}}=typeof s=="function"?{equalityFn:s}:s,{store:c,subscription:a,getServerState:f,stabilityCheck:u,identityFunctionCheck:l}=t();T.useRef(!0);const h=T.useCallback({[n.name](m){return n(m)}}[n.name],[n,u,i.stabilityCheck]),y=ct(a.addNestedSub,c.getState,f||c.getState,h,o);return T.useDebugValue(y),y}}var Me=Vt();function Ht(){const e=Lt();let t=null,r=null;return{clear(){t=null,r=null},notify(){e(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){let n=[],s=t;for(;s;)n.push(s),s=s.next;return n},subscribe(n){let s=!0,o=r={callback:n,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){!s||t===null||(s=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}var Ae={notify(){},get:()=>[]};function Xt(e,t){let r,n=Ae,s=0,o=!1;function i(_){u();const d=n.subscribe(_);let p=!1;return()=>{p||(p=!0,d(),l())}}function c(){n.notify()}function a(){m.onStateChange&&m.onStateChange()}function f(){return o}function u(){s++,r||(r=t?t.addNestedSub(a):e.subscribe(a),n=Ht())}function l(){s--,r&&s===0&&(r(),r=void 0,n.clear(),n=Ae)}function h(){o||(o=!0,u())}function y(){o&&(o=!1,l())}const m={addNestedSub:i,notifyNestedSubs:c,handleChangeWrapper:a,isSubscribed:f,trySubscribe:h,tryUnsubscribe:y,getListeners:()=>n};return m}var Gt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Yt=Gt?T.useLayoutEffect:T.useEffect;function Qt({store:e,context:t,children:r,serverState:n,stabilityCheck:s="once",identityFunctionCheck:o="once"}){const i=T.useMemo(()=>{const f=Xt(e);return{store:e,subscription:f,getServerState:n?()=>n:void 0,stabilityCheck:s,identityFunctionCheck:o}},[e,n,s,o]),c=T.useMemo(()=>e.getState(),[e]);Yt(()=>{const{subscription:f}=i;return f.onStateChange=f.notifyNestedSubs,f.trySubscribe(),c!==e.getState()&&f.notifyNestedSubs(),()=>{f.tryUnsubscribe(),f.onStateChange=void 0}},[i,c]);const a=t||O;return T.createElement(a.Provider,{value:i},r)}var Jt=Qt;function at(e=O){const t=e===O?it:ge(e);return function(){const{store:n}=t();return n}}var Zt=at();function er(e=O){const t=e===O?Zt:at(e);return function(){return t().dispatch}}var tr=er();Ut(Ft.useSyncExternalStoreWithSelector);Wt(Mt.unstable_batchedUpdates);function S(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var rr=(()=>typeof Symbol=="function"&&Symbol.observable||"@@observable")(),Oe=rr,le=()=>Math.random().toString(36).substring(7).split("").join("."),nr={INIT:`@@redux/INIT${le()}`,REPLACE:`@@redux/REPLACE${le()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${le()}`},Z=nr;function ve(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function ut(e,t,r){if(typeof e!="function")throw new Error(S(2));if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(S(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(S(1));return r(ut)(e,t)}let n=e,s=t,o=new Map,i=o,c=0,a=!1;function f(){i===o&&(i=new Map,o.forEach((d,p)=>{i.set(p,d)}))}function u(){if(a)throw new Error(S(3));return s}function l(d){if(typeof d!="function")throw new Error(S(4));if(a)throw new Error(S(5));let p=!0;f();const b=c++;return i.set(b,d),function(){if(p){if(a)throw new Error(S(6));p=!1,f(),i.delete(b),o=null}}}function h(d){if(!ve(d))throw new Error(S(7));if(typeof d.type>"u")throw new Error(S(8));if(typeof d.type!="string")throw new Error(S(17));if(a)throw new Error(S(9));try{a=!0,s=n(s,d)}finally{a=!1}return(o=i).forEach(b=>{b()}),d}function y(d){if(typeof d!="function")throw new Error(S(10));n=d,h({type:Z.REPLACE})}function m(){const d=l;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(S(11));function b(){const v=p;v.next&&v.next(u())}return b(),{unsubscribe:d(b)}},[Oe](){return this}}}return h({type:Z.INIT}),{dispatch:h,subscribe:l,getState:u,replaceReducer:y,[Oe]:m}}function sr(e){Object.keys(e).forEach(t=>{const r=e[t];if(typeof r(void 0,{type:Z.INIT})>"u")throw new Error(S(12));if(typeof r(void 0,{type:Z.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(S(13))})}function or(e){const t=Object.keys(e),r={};for(let o=0;o<t.length;o++){const i=t[o];typeof e[i]=="function"&&(r[i]=e[i])}const n=Object.keys(r);let s;try{sr(r)}catch(o){s=o}return function(i={},c){if(s)throw s;let a=!1;const f={};for(let u=0;u<n.length;u++){const l=n[u],h=r[l],y=i[l],m=h(y,c);if(typeof m>"u")throw c&&c.type,new Error(S(14));f[l]=m,a=a||m!==y}return a=a||n.length!==Object.keys(i).length,a?f:i}}function ee(...e){return e.length===0?t=>t:e.length===1?e[0]:e.reduce((t,r)=>(...n)=>t(r(...n)))}function ir(...e){return t=>(r,n)=>{const s=t(r,n);let o=()=>{throw new Error(S(15))};const i={getState:s.getState,dispatch:(a,...f)=>o(a,...f)},c=e.map(a=>a(i));return o=ee(...c)(s.dispatch),{...s,dispatch:o}}}function cr(e){return ve(e)&&"type"in e&&typeof e.type=="string"}var ft=Symbol.for("immer-nothing"),De=Symbol.for("immer-draftable"),E=Symbol.for("immer-state");function R(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var z=Object.getPrototypeOf;function D(e){return!!e&&!!e[E]}function M(e){var t;return e?lt(e)||Array.isArray(e)||!!e[De]||!!((t=e.constructor)!=null&&t[De])||se(e)||oe(e):!1}var ar=Object.prototype.constructor.toString();function lt(e){if(!e||typeof e!="object")return!1;const t=z(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ar}function q(e,t){ne(e)===0?Object.entries(e).forEach(([r,n])=>{t(r,n,e)}):e.forEach((r,n)=>t(n,r,e))}function ne(e){const t=e[E];return t?t.type_:Array.isArray(e)?1:se(e)?2:oe(e)?3:0}function me(e,t){return ne(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function dt(e,t,r){const n=ne(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function ur(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function se(e){return e instanceof Map}function oe(e){return e instanceof Set}function N(e){return e.copy_||e.base_}function be(e,t){if(se(e))return new Map(e);if(oe(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&lt(e))return z(e)?{...e}:Object.assign(Object.create(null),e);const r=Object.getOwnPropertyDescriptors(e);delete r[E];let n=Reflect.ownKeys(r);for(let s=0;s<n.length;s++){const o=n[s],i=r[o];i.writable===!1&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(r[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(z(e),r)}function Te(e,t=!1){return ie(e)||D(e)||!M(e)||(ne(e)>1&&(e.set=e.add=e.clear=e.delete=fr),Object.freeze(e),t&&q(e,(r,n)=>Te(n,!0))),e}function fr(){R(2)}function ie(e){return Object.isFrozen(e)}var lr={};function j(e){const t=lr[e];return t||R(0,e),t}var V;function pt(){return V}function dr(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ne(e,t){t&&(j("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function _e(e){we(e),e.drafts_.forEach(pr),e.drafts_=null}function we(e){e===V&&(V=e.parent_)}function je(e){return V=dr(V,e)}function pr(e){const t=e[E];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Ie(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[E].modified_&&(_e(t),R(4)),M(e)&&(e=te(t,e),t.parent_||re(t,e)),t.patches_&&j("Patches").generateReplacementPatches_(r[E].base_,e,t.patches_,t.inversePatches_)):e=te(t,r,[]),_e(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==ft?e:void 0}function te(e,t,r){if(ie(t))return t;const n=t[E];if(!n)return q(t,(s,o)=>ze(e,n,t,s,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return re(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const s=n.copy_;let o=s,i=!1;n.type_===3&&(o=new Set(s),s.clear(),i=!0),q(o,(c,a)=>ze(e,n,s,c,a,r,i)),re(e,s,!1),r&&e.patches_&&j("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ze(e,t,r,n,s,o,i){if(D(s)){const c=o&&t&&t.type_!==3&&!me(t.assigned_,n)?o.concat(n):void 0,a=te(e,s,c);if(dt(r,n,a),D(a))e.canAutoFreeze_=!1;else return}else i&&r.add(s);if(M(s)&&!ie(s)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;te(e,s),(!t||!t.scope_.parent_)&&re(e,s)}}function re(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Te(t,r)}function yr(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:pt(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let s=n,o=Ee;r&&(s=[n],o=H);const{revoke:i,proxy:c}=Proxy.revocable(s,o);return n.draft_=c,n.revoke_=i,c}var Ee={get(e,t){if(t===E)return e;const r=N(e);if(!me(r,t))return hr(e,r,t);const n=r[t];return e.finalized_||!M(n)?n:n===de(e.base_,t)?(pe(e),e.copy_[t]=ke(n,e)):n},has(e,t){return t in N(e)},ownKeys(e){return Reflect.ownKeys(N(e))},set(e,t,r){const n=yt(N(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const s=de(N(e),t),o=s==null?void 0:s[E];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(ur(r,s)&&(r!==void 0||me(e.base_,t)))return!0;pe(e),Se(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return de(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,pe(e),Se(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=N(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){R(11)},getPrototypeOf(e){return z(e.base_)},setPrototypeOf(){R(12)}},H={};q(Ee,(e,t)=>{H[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});H.deleteProperty=function(e,t){return H.set.call(this,e,t,void 0)};H.set=function(e,t,r){return Ee.set.call(this,e[0],t,r,e[0])};function de(e,t){const r=e[E];return(r?N(r):e)[t]}function hr(e,t,r){var s;const n=yt(t,r);return n?"value"in n?n.value:(s=n.get)==null?void 0:s.call(e.draft_):void 0}function yt(e,t){if(!(t in e))return;let r=z(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=z(r)}}function Se(e){e.modified_||(e.modified_=!0,e.parent_&&Se(e.parent_))}function pe(e){e.copy_||(e.copy_=be(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var mr=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const i=this;return function(a=o,...f){return i.produce(a,u=>r.call(this,u,...f))}}typeof r!="function"&&R(6),n!==void 0&&typeof n!="function"&&R(7);let s;if(M(t)){const o=je(this),i=ke(t,void 0);let c=!0;try{s=r(i),c=!1}finally{c?_e(o):we(o)}return Ne(o,n),Ie(s,o)}else if(!t||typeof t!="object"){if(s=r(t),s===void 0&&(s=t),s===ft&&(s=void 0),this.autoFreeze_&&Te(s,!0),n){const o=[],i=[];j("Patches").generateReplacementPatches_(t,s,o,i),n(o,i)}return s}else R(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(i,...c)=>this.produceWithPatches(i,a=>t(a,...c));let n,s;return[this.produce(t,r,(i,c)=>{n=i,s=c}),n,s]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){M(e)||R(8),D(e)&&(e=ht(e));const t=je(this),r=ke(e,void 0);return r[E].isManual_=!0,we(t),r}finishDraft(e,t){const r=e&&e[E];(!r||!r.isManual_)&&R(9);const{scope_:n}=r;return Ne(n,t),Ie(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const s=t[r];if(s.path.length===0&&s.op==="replace"){e=s.value;break}}r>-1&&(t=t.slice(r+1));const n=j("Patches").applyPatches_;return D(e)?n(e,t):this.produce(e,s=>n(s,t))}};function ke(e,t){const r=se(e)?j("MapSet").proxyMap_(e,t):oe(e)?j("MapSet").proxySet_(e,t):yr(e,t);return(t?t.scope_:pt()).drafts_.push(r),r}function ht(e){return D(e)||R(10,e),mt(e)}function mt(e){if(!M(e)||ie(e))return e;const t=e[E];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=be(e,t.scope_.immer_.useStrictShallowCopy_)}else r=be(e,!0);return q(r,(n,s)=>{dt(r,n,mt(s))}),t&&(t.finalized_=!1),r}var C=new mr,bt=C.produce;C.produceWithPatches.bind(C);C.setAutoFreeze.bind(C);C.setUseStrictShallowCopy.bind(C);C.applyPatches.bind(C);C.createDraft.bind(C);C.finishDraft.bind(C);function br(e,t=`expected a function, instead received ${typeof e}`){if(typeof e!="function")throw new TypeError(t)}function _r(e,t="expected all items to be functions, instead received the following types: "){if(!e.every(r=>typeof r=="function")){const r=e.map(n=>typeof n=="function"?`function ${n.name||"unnamed"}()`:typeof n).join(", ");throw new TypeError(`${t}[${r}]`)}}var Fe=e=>Array.isArray(e)?e:[e];function wr(e){const t=Array.isArray(e[0])?e[0]:e;return _r(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}function Sr(e,t){const r=[],{length:n}=e;for(let s=0;s<n;s++)r.push(e[s].apply(null,t));return r}var kr=class{constructor(e){this.value=e}deref(){return this.value}},gr=typeof WeakRef<"u"?WeakRef:kr,vr=0,$e=1;function Q(){return{s:vr,v:void 0,o:null,p:null}}function _t(e,t={}){let r=Q();const{resultEqualityCheck:n}=t;let s,o=0;function i(){let c=r;const{length:a}=arguments;for(let l=0,h=a;l<h;l++){const y=arguments[l];if(typeof y=="function"||typeof y=="object"&&y!==null){let m=c.o;m===null&&(c.o=m=new WeakMap);const _=m.get(y);_===void 0?(c=Q(),m.set(y,c)):c=_}else{let m=c.p;m===null&&(c.p=m=new Map);const _=m.get(y);_===void 0?(c=Q(),m.set(y,c)):c=_}}const f=c;let u;if(c.s===$e?u=c.v:(u=e.apply(null,arguments),o++),f.s=$e,n){const l=(s==null?void 0:s.deref())??s;l!=null&&n(l,u)&&(u=l,o!==0&&o--),s=typeof u=="object"&&u!==null||typeof u=="function"?new gr(u):u}return f.v=u,u}return i.clearCache=()=>{r=Q(),i.resetResultsCount()},i.resultsCount=()=>o,i.resetResultsCount=()=>{o=0},i}function Tr(e,...t){const r=typeof e=="function"?{memoize:e,memoizeOptions:t}:e;return(...s)=>{let o=0,i=0,c,a={},f=s.pop();typeof f=="object"&&(a=f,f=s.pop()),br(f,`createSelector expects an output function after the inputs, but received: [${typeof f}]`);const u={...r,...a},{memoize:l,memoizeOptions:h=[],argsMemoize:y=_t,argsMemoizeOptions:m=[],devModeChecks:_={}}=u,d=Fe(h),p=Fe(m),b=wr(s),g=l(function(){return o++,f.apply(null,arguments)},...d),v=y(function(){i++;const ue=Sr(b,arguments);return c=g.apply(null,ue),c},...p);return Object.assign(v,{resultFunc:f,memoizedResultFunc:g,dependencies:b,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>c,recomputations:()=>o,resetRecomputations:()=>{o=0},memoize:l,argsMemoize:y})}}function wt(e){return({dispatch:r,getState:n})=>s=>o=>typeof o=="function"?o(r,n,e):s(o)}var Er=wt(),Cr=wt,xr=(...e)=>{const t=Tr(...e);return(...r)=>{const n=t(...r),s=(o,...i)=>n(D(o)?ht(o):o,...i);return Object.assign(s,n),s}};xr(_t);var Rr=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ee:ee.apply(null,arguments)},Pr=e=>e&&typeof e.match=="function";function A(e,t){function r(...n){if(t){let s=t(...n);if(!s)throw new Error(P(0));return{type:e,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>cr(n)&&n.type===e,r}var St=class W extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,W.prototype)}static get[Symbol.species](){return W}concat(...t){return super.concat.apply(this,t)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new W(...t[0].concat(this)):new W(...t.concat(this))}};function We(e){return M(e)?bt(e,()=>{}):e}function Le(e,t,r){if(e.has(t)){let s=e.get(t);return r.update&&(s=r.update(s,t,e),e.set(t,s)),s}if(!r.insert)throw new Error(P(10));const n=r.insert(t,e);return e.set(t,n),n}function Mr(e){return typeof e=="boolean"}var Ar=()=>function(t){const{thunk:r=!0,immutableCheck:n=!0,serializableCheck:s=!0,actionCreatorCheck:o=!0}=t??{};let i=new St;return r&&(Mr(r)?i.push(Er):i.push(Cr(r.extraArgument))),i},Or="RTK_autoBatch",kt=e=>t=>{setTimeout(t,e)},Dr=typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:kt(10),Nr=(e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let s=!0,o=!1,i=!1;const c=new Set,a=e.type==="tick"?queueMicrotask:e.type==="raf"?Dr:e.type==="callback"?e.queueNotification:kt(e.timeout),f=()=>{i=!1,o&&(o=!1,c.forEach(u=>u()))};return Object.assign({},n,{subscribe(u){const l=()=>s&&u(),h=n.subscribe(l);return c.add(u),()=>{h(),c.delete(u)}},dispatch(u){var l;try{return s=!((l=u==null?void 0:u.meta)!=null&&l[Or]),o=!s,o&&(i||(i=!0,a(f))),n.dispatch(u)}finally{s=!0}}})},jr=e=>function(r){const{autoBatch:n=!0}=r??{};let s=new St(e);return n&&s.push(Nr(typeof n=="object"?n:void 0)),s},Ir=!0;function gt(e){const t=Ar(),{reducer:r=void 0,middleware:n,devTools:s=!0,preloadedState:o=void 0,enhancers:i=void 0}=e||{};let c;if(typeof r=="function")c=r;else if(ve(r))c=or(r);else throw new Error(P(1));let a;typeof n=="function"?a=n(t):a=t();let f=ee;s&&(f=Rr({trace:!Ir,...typeof s=="object"&&s}));const u=ir(...a),l=jr(u);let h=typeof i=="function"?i(l):l();const y=f(...h);return ut(c,o,y)}function vt(e){const t={},r=[];let n;const s={addCase(o,i){const c=typeof o=="string"?o:o.type;if(!c)throw new Error(P(28));if(c in t)throw new Error(P(29));return t[c]=i,s},addMatcher(o,i){return r.push({matcher:o,reducer:i}),s},addDefaultCase(o){return n=o,s}};return e(s),[t,r,n]}function zr(e){return typeof e=="function"}function Fr(e,t){let[r,n,s]=vt(t),o;if(zr(e))o=()=>We(e());else{const c=We(e);o=()=>c}function i(c=o(),a){let f=[r[a.type],...n.filter(({matcher:u})=>u(a)).map(({reducer:u})=>u)];return f.filter(u=>!!u).length===0&&(f=[s]),f.reduce((u,l)=>{if(l)if(D(u)){const y=l(u,a);return y===void 0?u:y}else{if(M(u))return bt(u,h=>l(h,a));{const h=l(u,a);if(h===void 0){if(u===null)return u;throw new Error(P(9))}return h}}return u},c)}return i.getInitialState=o,i}var $r="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",Wr=(e=21)=>{let t="",r=e;for(;r--;)t+=$r[Math.random()*64|0];return t},Lr=(e,t)=>Pr(e)?e.match(t):e(t);function Br(...e){return t=>e.some(r=>Lr(r,t))}var Kr=["name","message","stack","code"],ye=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},Be=class{constructor(e,t){fe(this,"_type");this.payload=e,this.meta=t}},Ur=e=>{if(typeof e=="object"&&e!==null){const t={};for(const r of Kr)typeof e[r]=="string"&&(t[r]=e[r]);return t}return{message:String(e)}},qr=(()=>{function e(t,r,n){const s=A(t+"/fulfilled",(a,f,u,l)=>({payload:a,meta:{...l||{},arg:u,requestId:f,requestStatus:"fulfilled"}})),o=A(t+"/pending",(a,f,u)=>({payload:void 0,meta:{...u||{},arg:f,requestId:a,requestStatus:"pending"}})),i=A(t+"/rejected",(a,f,u,l,h)=>({payload:l,error:(n&&n.serializeError||Ur)(a||"Rejected"),meta:{...h||{},arg:u,requestId:f,rejectedWithValue:!!l,requestStatus:"rejected",aborted:(a==null?void 0:a.name)==="AbortError",condition:(a==null?void 0:a.name)==="ConditionError"}}));function c(a){return(f,u,l)=>{const h=n!=null&&n.idGenerator?n.idGenerator(a):Wr(),y=new AbortController;let m;function _(p){m=p,y.abort()}const d=async function(){var g,v;let p;try{let w=(g=n==null?void 0:n.condition)==null?void 0:g.call(n,a,{getState:u,extra:l});if(Hr(w)&&(w=await w),w===!1||y.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const ue=new Promise((x,$)=>y.signal.addEventListener("abort",()=>$({name:"AbortError",message:m||"Aborted"})));f(o(h,a,(v=n==null?void 0:n.getPendingMeta)==null?void 0:v.call(n,{requestId:h,arg:a},{getState:u,extra:l}))),p=await Promise.race([ue,Promise.resolve(r(a,{dispatch:f,getState:u,extra:l,requestId:h,signal:y.signal,abort:_,rejectWithValue:(x,$)=>new ye(x,$),fulfillWithValue:(x,$)=>new Be(x,$)})).then(x=>{if(x instanceof ye)throw x;return x instanceof Be?s(x.payload,h,a,x.meta):s(x,h,a)})])}catch(w){p=w instanceof ye?i(null,h,a,w.payload,w.meta):i(w,h,a)}return n&&!n.dispatchConditionRejection&&i.match(p)&&p.meta.condition||f(p),p}();return Object.assign(d,{abort:_,requestId:h,arg:a,unwrap(){return d.then(Vr)}})}}return Object.assign(c,{pending:o,rejected:i,fulfilled:s,settled:Br(i,s),typePrefix:t})}return e.withTypes=()=>e,e})();function Vr(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Hr(e){return e!==null&&typeof e=="object"&&typeof e.then=="function"}var Xr=Symbol.for("rtk-slice-createasyncthunk");function Gr(e,t){return`${e}/${t}`}function Yr({creators:e}={}){var r;const t=(r=e==null?void 0:e.asyncThunk)==null?void 0:r[Xr];return function(s){const{name:o,reducerPath:i=o}=s;if(!o)throw new Error(P(11));typeof process<"u";const c=(typeof s.reducers=="function"?s.reducers(Jr()):s.reducers)||{},a=Object.keys(c),f={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},u={addCase(d,p){const b=typeof d=="string"?d:d.type;if(!b)throw new Error(P(12));if(b in f.sliceCaseReducersByType)throw new Error(P(13));return f.sliceCaseReducersByType[b]=p,u},addMatcher(d,p){return f.sliceMatchers.push({matcher:d,reducer:p}),u},exposeAction(d,p){return f.actionCreators[d]=p,u},exposeCaseReducer(d,p){return f.sliceCaseReducersByName[d]=p,u}};a.forEach(d=>{const p=c[d],b={reducerName:d,type:Gr(o,d),createNotation:typeof s.reducers=="function"};en(p)?rn(b,p,u,t):Zr(b,p,u)});function l(){const[d={},p=[],b=void 0]=typeof s.extraReducers=="function"?vt(s.extraReducers):[s.extraReducers],g={...d,...f.sliceCaseReducersByType};return Fr(s.initialState,v=>{for(let w in g)v.addCase(w,g[w]);for(let w of f.sliceMatchers)v.addMatcher(w.matcher,w.reducer);for(let w of p)v.addMatcher(w.matcher,w.reducer);b&&v.addDefaultCase(b)})}const h=d=>d,y=new WeakMap;let m;const _={name:o,reducerPath:i,reducer(d,p){return m||(m=l()),m(d,p)},actions:f.actionCreators,caseReducers:f.sliceCaseReducersByName,getInitialState(){return m||(m=l()),m.getInitialState()},getSelectors(d=h){const p=Le(y,this,{insert:()=>new WeakMap});return Le(p,d,{insert:()=>{const b={};for(const[g,v]of Object.entries(s.selectors??{}))b[g]=Qr(this,v,d,this!==_);return b}})},selectSlice(d){let p=d[this.reducerPath];return typeof p>"u"&&this!==_&&(p=this.getInitialState()),p},get selectors(){return this.getSelectors(this.selectSlice)},injectInto(d,{reducerPath:p,...b}={}){const g=p??this.reducerPath;return d.inject({reducerPath:g,reducer:this.reducer},b),{...this,reducerPath:g}}};return _}}function Qr(e,t,r,n){function s(o,...i){let c=r.call(e,o);return typeof c>"u"&&n&&(c=e.getInitialState()),t(c,...i)}return s.unwrapped=t,s}var Tt=Yr();function Jr(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Zr({type:e,reducerName:t,createNotation:r},n,s){let o,i;if("reducer"in n){if(r&&!tn(n))throw new Error(P(17));o=n.reducer,i=n.prepare}else o=n;s.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,i?A(e,i):A(e))}function en(e){return e._reducerDefinitionType==="asyncThunk"}function tn(e){return e._reducerDefinitionType==="reducerWithPrepare"}function rn({type:e,reducerName:t},r,n,s){if(!s)throw new Error(P(18));const{payloadCreator:o,fulfilled:i,pending:c,rejected:a,settled:f,options:u}=r,l=s(e,o,u);n.exposeAction(t,l),i&&n.addCase(l.fulfilled,i),c&&n.addCase(l.pending,c),a&&n.addCase(l.rejected,a),f&&n.addMatcher(l.settled,f),n.exposeCaseReducer(t,{fulfilled:i||J,pending:c||J,rejected:a||J,settled:f||J})}function J(){}var Ce="listenerMiddleware";A(`${Ce}/add`);A(`${Ce}/removeAll`);A(`${Ce}/remove`);function P(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const nn={tasks:[],status:"idle",error:null},he=qr("todos/fetchTodos",async()=>(await(await fetch("https://jsonplaceholder.typicode.com/todos?userId=1")).json()).map(n=>({id:`${n.id}`,title:n.title,state:n.completed?"TASK_ARCHIVED":"TASK_INBOX"}))),Et=Tt({name:"taskbox",initialState:nn,reducers:{updateTaskState:(e,t)=>{const{id:r,newTaskState:n}=t.payload,s=e.tasks.findIndex(o=>o.id===r);s>=0&&(e.tasks[s].state=n)}},extraReducers(e){e.addCase(he.pending,t=>{t.status="loading",t.error=null,t.tasks=[]}).addCase(he.fulfilled,(t,r)=>{t.status="succeeded",t.error=null,t.tasks=r.payload}).addCase(he.rejected,t=>{t.status="failed",t.error="Something went wrong",t.tasks=[]})}}),{updateTaskState:Ke}=Et.actions,sn=gt({reducer:{taskbox:Et.reducer}}),pn=sn;function ce(){const e=Me(i=>[...i.taskbox.tasks.filter(f=>f.state==="TASK_PINNED"),...i.taskbox.tasks.filter(f=>f.state!=="TASK_PINNED")].filter(f=>f.state==="TASK_INBOX"||f.state==="TASK_PINNED")),{status:t}=Me(i=>i.taskbox),r=tr(),n=i=>{r(Ke({id:i,newTaskState:"TASK_PINNED"}))},s=i=>{r(Ke({id:i,newTaskState:"TASK_ARCHIVED"}))},o=G("div",{className:"loading-item",children:[k("span",{className:"glow-checkbox"}),G("span",{className:"glow-text",children:[k("span",{children:"Loading"})," ",k("span",{children:"cool"})," ",k("span",{children:"state"})]})]});return t==="loading"?G("div",{className:"list-items","data-testid":"loading",children:[o,o,o,o,o,o]},"loading"):e.length===0?k("div",{className:"list-items","data-testid":"empty",children:G("div",{className:"wrapper-message",children:[k("span",{className:"icon-check"}),k("p",{className:"title-message",children:"You have no tasks"}),k("p",{className:"subtitle-message",children:"Sit back and relax"})]})},"empty"):k("div",{className:"list-items","data-testid":"success",children:e.map(i=>k(rt,{task:i,onPinTask:c=>n(c),onArchiveTask:c=>s(c)},i.id))},"success")}ce.propTypes={loading:Y.bool,tasks:Y.arrayOf(rt.propTypes.task).isRequired,onPinTask:Y.func,onArchiveTask:Y.func};ce.defaultProps={loading:!1};ce.__docgenInfo={description:"",methods:[],displayName:"TaskList",props:{loading:{defaultValue:{value:"false",computed:!1},description:"Checks if it's in loading state",type:{name:"bool"},required:!1},tasks:{description:"The list of tasks",type:{name:"arrayOf",value:{name:"custom",raw:"Task.propTypes.task"}},required:!0},onPinTask:{description:"Event to change the task to pinned",type:{name:"func"},required:!1},onArchiveTask:{description:"Event to change the task to archived",type:{name:"func"},required:!1}}};const F={tasks:[{...I.args.task,id:"1",title:"Task 1"},{...I.args.task,id:"2",title:"Task 2"},{...I.args.task,id:"3",title:"Task 3"},{...I.args.task,id:"4",title:"Task 4"},{...I.args.task,id:"5",title:"Task 5"},{...I.args.task,id:"6",title:"Task 6"}],status:"idle",error:null},ae=({taskboxState:e,children:t})=>k(Jt,{store:gt({reducer:{taskbox:Tt({name:"taskbox",initialState:e,reducers:{updateTaskState:(r,n)=>{const{id:s,newTaskState:o}=n.payload,i=r.tasks.findIndex(c=>c.id===s);i>=0&&(r.tasks[i].state=o)}}}).reducer}}),children:t}),on={component:ce,title:"TaskList",decorators:[e=>k("div",{style:{padding:"3rem"},children:e()})],tags:["autodocs"],excludeStories:/.*MockedState$/},L={decorators:[e=>k(ae,{taskboxState:F,children:e()})]},B={decorators:[e=>{const t=[...F.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}];return k(ae,{taskboxState:{...F,tasks:t},children:e()})}]},K={decorators:[e=>k(ae,{taskboxState:{...F,status:"loading"},children:e()})]},U={decorators:[e=>k(ae,{taskboxState:{...F,tasks:[]},children:e()})]};var Ue,qe,Ve;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>]
}`,...(Ve=(qe=L.parameters)==null?void 0:qe.docs)==null?void 0:Ve.source}}};var He,Xe,Ge;B.parameters={...B.parameters,docs:{...(He=B.parameters)==null?void 0:He.docs,source:{originalSource:`{
  decorators: [story => {
    const pinnedtasks = [...MockedState.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }];
    return <Mockstore taskboxState={{
      ...MockedState,
      tasks: pinnedtasks
    }}>
          {story()}
        </Mockstore>;
  }]
}`,...(Ge=(Xe=B.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.source}}};var Ye,Qe,Je;K.parameters={...K.parameters,docs:{...(Ye=K.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    status: 'loading'
  }}>
        {story()}
      </Mockstore>]
}`,...(Je=(Qe=K.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source}}};var Ze,et,tt;U.parameters={...U.parameters,docs:{...(Ze=U.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  decorators: [story => <Mockstore taskboxState={{
    ...MockedState,
    tasks: []
  }}>
        {story()}
      </Mockstore>]
}`,...(tt=(et=U.parameters)==null?void 0:et.docs)==null?void 0:tt.source}}};const cn=["MockedState","Default","WithPinnedTasks","Loading","Empty"],yn=Object.freeze(Object.defineProperty({__proto__:null,Default:L,Empty:U,Loading:K,MockedState:F,WithPinnedTasks:B,__namedExportsOrder:cn,default:on},Symbol.toStringTag,{value:"Module"}));export{F as M,Jt as P,ce as T,Me as a,yn as b,he as f,pn as s,tr as u};
