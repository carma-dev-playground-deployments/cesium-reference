import{b as ca,R as qn}from"./index-DI5MEGZt.js";const He=()=>{};let ke={},Xn={},Vn=null,Kn={mark:He,measure:He};try{typeof window<"u"&&(ke=window),typeof document<"u"&&(Xn=document),typeof MutationObserver<"u"&&(Vn=MutationObserver),typeof performance<"u"&&(Kn=performance)}catch{}const{userAgent:qe=""}=ke.navigator||{},z=ke,v=Xn,Xe=Vn,Et=Kn;z.document;const R=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",Jn=~qe.indexOf("MSIE")||~qe.indexOf("Trident/");var O="classic",Qn="duotone",I="sharp",N="sharp-duotone",fa=[O,Qn,I,N],ua={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},Ve={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},pa=["kit"],ma=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,da=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ya={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},ga={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},ha={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},va={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},ba={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},Zn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},xa=["solid","regular","light","thin","duotone","brands"],tr=[1,2,3,4,5,6,7,8,9,10],Pa=tr.concat([11,12,13,14,15,16,17,18,19,20]),ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Oa=[...Object.keys(va),...xa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY].concat(tr.map(t=>"".concat(t,"x"))).concat(Pa.map(t=>"w-".concat(t))),Sa={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},wa={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ea={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ke={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",se=16,er="fa",nr="svg-inline--fa",X="data-fa-i2svg",le="data-fa-pseudo-element",ka="data-fa-pseudo-element-pending",Ie="data-prefix",Ne="data-icon",Je="fontawesome-i2svg",Ia="async",Na=["HTML","HEAD","STYLE","SCRIPT"],rr=(()=>{try{return!0}catch{return!1}})(),ar=[O,I,N];function At(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const or={...Zn};or[O]={...Zn[O],...Ve.kit,...Ve["kit-duotone"]};const Y=At(or),ce={...Aa};ce[O]={...ce[O],...Ke.kit,...Ke["kit-duotone"]};const gt=At(ce),fe={...ba};fe[O]={...fe[O],...Ea.kit};const H=At(fe),ue={...ha};ue[O]={...ue[O],...wa.kit};const Ca=At(ue),Ta=ma,ir="fa-layers-text",Fa=da,$a={...ua};At($a);const _a=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wt=ut,rt=new Set;Object.keys(gt[O]).map(rt.add.bind(rt));Object.keys(gt[I]).map(rt.add.bind(rt));Object.keys(gt[N]).map(rt.add.bind(rt));const Ma=[...pa,...Oa],mt=z.FontAwesomeConfig||{};function ja(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ra(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Ra(ja(n));a!=null&&(mt[r]=a)});const sr={styleDefault:"solid",familyDefault:"classic",cssPrefix:er,replacementClass:nr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);const at={...sr,...mt};at.autoReplaceSvg||(at.observeMutations=!1);const p={};Object.keys(sr).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){at[t]=e,dt.forEach(n=>n(p))},get:function(){return at[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){at.cssPrefix=t,dt.forEach(e=>e(p))},get:function(){return at.cssPrefix}});z.FontAwesomeConfig=p;const dt=[];function La(t){return dt.push(t),()=>{dt.splice(dt.indexOf(t),1)}}const L=se,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Da(t){if(!t||!R)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return v.head.insertBefore(e,r),t}const za="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){let t=12,e="";for(;t-- >0;)e+=za[Math.random()*62|0];return e}function it(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ce(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function lr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(lr(t[n]),'" '),"").trim()}function Rt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Te(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function Ba(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Wa(t){let{transform:e,width:n=se,height:r=se,startCentered:a=!1}=t,o="";return a&&Jn?o+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):o+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),o+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var Ga=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function cr(){const t=er,e=nr,n=p.cssPrefix,r=p.replacementClass;let a=Ga;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Qe=!1;function Gt(){p.autoAddCss&&!Qe&&(Da(cr()),Qe=!0)}var Ya={mixout(){return{dom:{css:cr,insertCss:Gt}}},hooks(){return{beforeDOMElementCreation(){Gt()},beforeI2svg(){Gt()}}}};const j=z||{};j[M]||(j[M]={});j[M].styles||(j[M].styles={});j[M].hooks||(j[M].hooks={});j[M].shims||(j[M].shims=[]);var $=j[M];const fr=[],ur=function(){v.removeEventListener("DOMContentLoaded",ur),Ft=1,fr.map(t=>t())};let Ft=!1;R&&(Ft=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),Ft||v.addEventListener("DOMContentLoaded",ur));function Ha(t){R&&(Ft?setTimeout(t,0):fr.push(t))}function xt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?lr(t):"<".concat(e," ").concat(Ua(n),">").concat(r.map(xt).join(""),"</").concat(e,">")}function Ze(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yt=function(e,n,r,a){var o=Object.keys(e),i=o.length,s=n,l,c,f;for(r===void 0?(l=1,f=e[o[0]]):(l=0,f=r);l<i;l++)c=o[l],f=s(f,e[c],c,e);return f};function qa(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function pe(t){const e=qa(t);return e.length===1?e[0].toString(16):null}function Xa(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function tn(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function me(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=tn(e);typeof $.hooks.addPack=="function"&&!r?$.hooks.addPack(t,tn(e)):$.styles[t]={...$.styles[t]||{},...a},t==="fas"&&me("fa",e)}const{styles:G,shims:Va}=$,Ka={[O]:Object.values(H[O]),[I]:Object.values(H[I]),[N]:Object.values(H[N])};let Fe=null,pr={},mr={},dr={},yr={},gr={};const Ja={[O]:Object.keys(Y[O]),[I]:Object.keys(Y[I]),[N]:Object.keys(Y[N])};function Qa(t){return~Ma.indexOf(t)}function Za(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Qa(a)?a:null}const hr=()=>{const t=r=>Yt(G,(a,o,i)=>(a[i]=Yt(o,r,{}),a),{});pr=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),mr=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),gr=t((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const e="far"in G||p.autoFetchSvg,n=Yt(Va,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});dr=n.names,yr=n.unicodes,Fe=Lt(p.styleDefault,{family:p.familyDefault})};La(t=>{Fe=Lt(t.styleDefault,{family:p.familyDefault})});hr();function $e(t,e){return(pr[t]||{})[e]}function to(t,e){return(mr[t]||{})[e]}function D(t,e){return(gr[t]||{})[e]}function vr(t){return dr[t]||{prefix:null,iconName:null}}function eo(t){const e=yr[t],n=$e("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return Fe}const _e=()=>({prefix:null,iconName:null,rest:[]});function Lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,r=Y[n][t],a=gt[n][t]||gt[n][r],o=t in $.styles?t:null;return a||o||null}const no={[O]:Object.keys(H[O]),[I]:Object.keys(H[I]),[N]:Object.keys(H[N])};function Dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[O]:"".concat(p.cssPrefix,"-").concat(O),[I]:"".concat(p.cssPrefix,"-").concat(I),[N]:"".concat(p.cssPrefix,"-").concat(N)};let a=null,o=O;const i=fa.filter(l=>l!==Qn);i.forEach(l=>{(t.includes(r[l])||t.some(c=>no[l].includes(c)))&&(o=l)});const s=t.reduce((l,c)=>{const f=Za(p.cssPrefix,c);if(G[c]?(c=Ka[o].includes(c)?Ca[o][c]:c,a=c,l.prefix=c):Ja[o].indexOf(c)>-1?(a=c,l.prefix=Lt(c,{family:o})):f?l.iconName=f:c!==p.replacementClass&&!i.some(m=>c===r[m])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const m=a==="fa"?vr(l.iconName):{},u=D(l.prefix,l.iconName);m.prefix&&(a=null),l.iconName=m.iconName||u||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!G.far&&G.fas&&!p.autoFetchSvg&&(l.prefix="fas")}return l},_e());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===I&&(G.fass||p.autoFetchSvg)&&(s.prefix="fass",s.iconName=D(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===N&&(G.fasds||p.autoFetchSvg)&&(s.prefix="fasds",s.iconName=D(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=U()||"fas"),s}class ro{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},me(o,a[o]);const i=H[O][o];i&&me(i,a[o]),hr()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],l=s[2];e[o]||(e[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[o][c]=s)}),e[o][i]=s}),e}}let en=[],Z={};const et={},ao=Object.keys(et);function oo(t,e){let{mixoutsTo:n}=e;return en=t,Z={},Object.keys(et).forEach(r=>{ao.indexOf(r)===-1&&delete et[r]}),en.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{Z[i]||(Z[i]=[]),Z[i].push(o[i])})}r.provides&&r.provides(et)}),n}function de(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Z[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Z[t]||[]).forEach(o=>{o.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function ye(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||U();if(e)return e=D(n,e)||e,Ze(br.definitions,n,e)||Ze($.styles,n,e)}const br=new ro,io=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,V("noAuto")},so={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(V("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ha(()=>{co({autoReplaceSvgRoot:e}),V("watch",t)})}},lo={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Lt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Ta))){const e=Dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||U(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=U();return{prefix:e,iconName:D(e,t)||t}}}},C={noAuto:io,config:p,dom:so,parse:lo,library:br,findIconDefinition:ye,toHtml:xt},co=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys($.styles).length>0||p.autoFetchSvg)&&R&&p.autoReplaceSvg&&C.dom.i2svg({node:e})};function zt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>xt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function fo(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:i}=t;if(Te(i)&&n.found&&!r.found){const{width:s,height:l}=n,c={x:s/l/2,y:.5};a.style=Rt({...o,"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function uo(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function Me(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:l,titleId:c,extra:f,watchable:m=!1}=t,{width:u,height:d}=n.found?n:e,b=r==="fak",A=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(E=>f.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(f.classes).join(" ");let h={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":a,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(d)}};const x=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/d*16*.0625,"em")}:{};m&&(h.attributes[X]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||ht())},children:[s]}),delete h.attributes.title);const P={...h,prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:o,symbol:i,styles:{...x,...f.styles}},{children:w,attributes:k}=n.found&&e.found?B("generateAbstractMask",P)||{children:[],attributes:{}}:B("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=w,P.attributes=k,i?uo(P):fo(P)}function nn(t){const{content:e,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=t,l={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(l[X]="");const c={...i.styles};Te(a)&&(c.transform=Wa({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Rt(c);f.length>0&&(l.style=f);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function po(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Rt(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ht}=$;function ge(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const mo={found:!1,width:512,height:512};function yo(t,e){!rr&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function he(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=U()),new Promise((r,a)=>{if(n==="fa"){const o=vr(t);t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ht[e]&&Ht[e][t]){const o=Ht[e][t];return r(ge(o))}yo(t,e),r({...mo,icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const rn=()=>{},ve=p.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:rn,measure:rn},pt='FA "6.6.0"',go=t=>(ve.mark("".concat(pt," ").concat(t," begins")),()=>Ar(t)),Ar=t=>{ve.mark("".concat(pt," ").concat(t," ends")),ve.measure("".concat(pt," ").concat(t),"".concat(pt," ").concat(t," begins"),"".concat(pt," ").concat(t," ends"))};var je={begin:go,end:Ar};const kt=()=>{};function an(t){return typeof(t.getAttribute?t.getAttribute(X):null)=="string"}function ho(t){const e=t.getAttribute?t.getAttribute(Ie):null,n=t.getAttribute?t.getAttribute(Ne):null;return e&&n}function vo(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function bo(){return p.autoReplaceSvg===!0?It.replace:It[p.autoReplaceSvg]||It.replace}function Ao(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function xo(t){return v.createElement(t)}function xr(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?Ao:xo}=e;if(typeof t=="string")return v.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(xr(o,{ceFn:n}))}),r}function Po(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const It={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(xr(n),e)}),e.getAttribute(X)===null&&p.keepOriginalSource){let n=v.createComment(Po(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ce(e).indexOf(p.replacementClass))return It.replace(t);const r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===p.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>xt(o)).join(`
`);e.setAttribute(X,""),e.innerHTML=a}};function on(t){t()}function Pr(t,e){const n=typeof e=="function"?e:kt;if(t.length===0)n();else{let r=on;p.mutateApproach===Ia&&(r=z.requestAnimationFrame||on),r(()=>{const a=bo(),o=je.begin("mutate");t.map(a),o(),n()})}}let Re=!1;function Or(){Re=!0}function be(){Re=!1}let $t=null;function sn(t){if(!Xe||!p.observeMutations)return;const{treeCallback:e=kt,nodeCallback:n=kt,pseudoElementsCallback:r=kt,observeMutationsRoot:a=v}=t;$t=new Xe(o=>{if(Re)return;const i=U();it(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!an(s.addedNodes[0])&&(p.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&an(s.target)&&~_a.indexOf(s.attributeName))if(s.attributeName==="class"&&ho(s.target)){const{prefix:l,iconName:c}=Dt(Ce(s.target));s.target.setAttribute(Ie,l||i),c&&s.target.setAttribute(Ne,c)}else vo(s.target)&&n(s.target)})}),R&&$t.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Oo(){$t&&$t.disconnect()}function So(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function wo(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=Dt(Ce(t));return a.prefix||(a.prefix=U()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=to(a.prefix,t.innerText)||$e(a.prefix,pe(t.innerText))),!a.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Eo(t){const e=it(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||ht()):(e["aria-hidden"]="true",e.focusable="false")),e}function ko(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=wo(t),o=Eo(t),i=de("parseNodeAttributes",{},t);let s=e.styleParser?So(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o},...i}}const{styles:Io}=$;function Sr(t){const e=p.autoReplaceSvg==="nest"?ln(t,{styleParser:!1}):ln(t);return~e.extra.classes.indexOf(ir)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let _=new Set;ar.map(t=>{_.add("fa-".concat(t))});Object.keys(Y[O]).map(_.add.bind(_));Object.keys(Y[I]).map(_.add.bind(_));Object.keys(Y[N]).map(_.add.bind(_));_=[..._];function cn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=v.documentElement.classList,r=f=>n.add("".concat(Je,"-").concat(f)),a=f=>n.remove("".concat(Je,"-").concat(f)),o=p.autoFetchSvg?_:ar.map(f=>"fa-".concat(f)).concat(Object.keys(Io));o.includes("fa")||o.push("fa");const i=[".".concat(ir,":not([").concat(X,"])")].concat(o.map(f=>".".concat(f,":not([").concat(X,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=it(t.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const l=je.begin("onTree"),c=s.reduce((f,m)=>{try{const u=Sr(m);u&&f.push(u)}catch(u){rr||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,m)=>{Promise.all(c).then(u=>{Pr(u,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),f()})}).catch(u=>{l(),m(u)})})}function No(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sr(t).then(n=>{n&&Pr([n],e)})}function Co(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:ye(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:ye(a||{})),t(r,{...n,mask:a})}}const To=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:l=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:m,iconName:u,icon:d}=t;return zt({type:"icon",...t},()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(i?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||ht()):(c["aria-hidden"]="true",c.focusable="false")),Me({icons:{main:ge(d),mask:a?ge(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:u,transform:{...F,...n},symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:c,styles:f,classes:l}})))};var Fo={mixout(){return{icon:Co(To)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=cn,t.nodeCallback=No,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:r=()=>{}}=e;return cn(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:l,mask:c,maskId:f,extra:m}=n;return new Promise((u,d)=>{Promise.all([he(r,i),c.iconName?he(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[A,h]=b;u([e,Me({icons:{main:A,mask:h},prefix:i,iconName:r,transform:s,symbol:l,maskId:f,title:a,titleId:o,extra:m,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:i}=e;const s=Rt(i);s.length>0&&(r.style=s);let l;return Te(o)&&(l=B("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},$o={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return zt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},_o={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return zt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),po({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...r]}})))}}}},Mo={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:r=null,classes:a=[],attributes:o={},styles:i={}}=e;return zt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),nn({content:t,transform:{...F,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(Jn){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/l,s=c.height/l}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,nn({content:e.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const jo=new RegExp('"',"ug"),fn=[1105920,1112319],un={FontAwesome:{normal:"fas",400:"fas"},...ga,...ya,...Sa},Ae=Object.keys(un).reduce((t,e)=>(t[e.toLowerCase()]=un[e],t),{}),Ro=Object.keys(Ae).reduce((t,e)=>{const n=Ae[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Lo(t){const e=t.replace(jo,""),n=Xa(e,0),r=n>=fn[0]&&n<=fn[1],a=e.length===2?e[0]===e[1]:!1;return{value:pe(a?e[0]:e),isSecondary:r||a}}function Do(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(Ae[n]||{})[a]||Ro[n]}function pn(t,e){const n="".concat(ka).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const i=it(t.children).filter(u=>u.getAttribute(le)===e)[0],s=z.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(Fa),f=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(i&&!c)return t.removeChild(i),r();if(c&&m!=="none"&&m!==""){const u=s.getPropertyValue("content");let d=Do(l,f);const{value:b,isSecondary:A}=Lo(u),h=c[0].startsWith("FontAwesome");let x=$e(d,b),P=x;if(h){const w=eo(b);w.iconName&&w.prefix&&(x=w.iconName,d=w.prefix)}if(x&&!A&&(!i||i.getAttribute(Ie)!==d||i.getAttribute(Ne)!==P)){t.setAttribute(n,P),i&&t.removeChild(i);const w=ko(),{extra:k}=w;k.attributes[le]=e,he(x,d).then(E=>{const ct=Me({...w,icons:{main:E,mask:_e()},prefix:d,iconName:P,extra:k,watchable:!0}),ft=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=ct.map(W=>xt(W)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function zo(t){return Promise.all([pn(t,"::before"),pn(t,"::after")])}function Uo(t){return t.parentNode!==document.head&&!~Na.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(le)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function mn(t){if(R)return new Promise((e,n)=>{const r=it(t.querySelectorAll("*")).filter(Uo).map(zo),a=je.begin("searchPseudoElements");Or(),Promise.all(r).then(()=>{a(),be(),e()}).catch(()=>{a(),be(),n()})})}var Bo={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=mn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;p.searchPseudoElements&&mn(n)}}};let dn=!1;var Wo={mixout(){return{dom:{unwatch(){Or(),dn=!0}}}},hooks(){return{bootstrap(){sn(de("mutationObserverCallbacks",{}))},noAuto(){Oo()},watch(t){const{observeMutationsRoot:e}=t;dn?be():sn(de("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const yn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var Go={mixout(){return{parse:{transform:t=>yn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=yn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(l," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},u={outer:i,inner:f,path:m};return{tag:"g",attributes:{...u.outer},children:[{tag:"g",attributes:{...u.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...u.path}}]}]}}}};const qt={x:0,y:0,width:"100%",height:"100%"};function gn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Yo(t){return t.tag==="g"?t.children:[t]}var Ho={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Dt(n.split(" ").map(a=>a.trim())):_e();return r.prefix||(r.prefix=U()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=e;const{width:l,icon:c}=a,{width:f,icon:m}=o,u=Ba({transform:s,containerWidth:f,iconWidth:l}),d={tag:"rect",attributes:{...qt,fill:"white"}},b=c.children?{children:c.children.map(gn)}:{},A={tag:"g",attributes:{...u.inner},children:[gn({tag:c.tag,attributes:{...c.attributes,...u.path},...b})]},h={tag:"g",attributes:{...u.outer},children:[A]},x="mask-".concat(i||ht()),P="clip-".concat(i||ht()),w={tag:"mask",attributes:{...qt,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Yo(m)},w]};return n.push(k,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")"),...qt}}),{children:n,attributes:r}}}},qo={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Xo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Vo=[Ya,Fo,$o,_o,Mo,Bo,Wo,Go,Ho,qo,Xo];oo(Vo,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const xe=C.parse;C.findIconDefinition;C.toHtml;const Ko=C.icon;C.layer;C.text;C.counter;var wr={exports:{}},Jo="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qo=Jo,Zo=Qo;function Er(){}function kr(){}kr.resetWarningCache=Er;var ti=function(){function t(r,a,o,i,s,l){if(l!==Zo){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kr,resetWarningCache:Er};return n.PropTypes=n,n};wr.exports=ti();var ei=wr.exports;const y=ca(ei);function hn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hn(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ni(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ri(t,e){if(t==null)return{};var n=ni(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Pe(t){return ai(t)||oi(t)||ii(t)||si()}function ai(t){if(Array.isArray(t))return Oe(t)}function oi(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ii(t,e){if(t){if(typeof t=="string")return Oe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Oe(t,e)}}function Oe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function si(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function li(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,m=t.pulse,u=t.fixedWidth,d=t.inverse,b=t.border,A=t.listItem,h=t.flip,x=t.size,P=t.rotation,w=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":u,"fa-inverse":d,"fa-border":b,"fa-li":A,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},tt(e,"fa-".concat(x),typeof x<"u"&&x!==null),tt(e,"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),tt(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),tt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(E){return k[E]?E:null}).filter(function(E){return E})}function ci(t){return t=t-0,t===t}function Ir(t){return ci(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var fi=["style"];function ui(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Ir(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[ui(a)]=o:e[a]=o,e},{})}function Nr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Nr(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=pi(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Ir(c)]=f}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=ri(n,fi);return a.attrs.style=T(T({},a.attrs.style),i),t.apply(void 0,[e.tag,T(T({},a.attrs),s)].concat(Pe(r)))}var Cr=!1;try{Cr=!0}catch{}function mi(){if(!Cr&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function vn(t){if(t&&_t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(xe.icon)return xe.icon(t);if(t===null)return null;if(t&&_t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Xt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tt({},t,e):{}}var bn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Tr=qn.forwardRef(function(t,e){var n=T(T({},bn),t),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,c=n.maskId,f=vn(r),m=Xt("classes",[].concat(Pe(li(n)),Pe((i||"").split(" ")))),u=Xt("transform",typeof n.transform=="string"?xe.transform(n.transform):n.transform),d=Xt("mask",vn(a)),b=Ko(f,T(T(T(T({},m),u),d),{},{symbol:o,title:s,titleId:l,maskId:c}));if(!b)return mi("Could not find icon",f),null;var A=b.abstract,h={ref:e};return Object.keys(n).forEach(function(x){bn.hasOwnProperty(x)||(h[x]=n[x])}),di(A[0],h)});Tr.displayName="FontAwesomeIcon";Tr.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var di=Nr.bind(null,qn.createElement);const _l={prefix:"fas",iconName:"circle-minus",icon:[512,512,["minus-circle"],"f056","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ml={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},jl={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Rl={prefix:"fas",iconName:"text-slash",icon:[640,512,["remove-format"],"f87d","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96 503 96 497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32L376.1 32l-.3 0L204.5 32c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96l116.7 0L301.3 210.8l-94.5-74.1zM243.3 416L192 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-42.2 0 17.6-62.1L272.9 311 243.3 416z"]},Ll={prefix:"fas",iconName:"arrows-to-dot",icon:[512,512,[],"e4be","M256 0c17.7 0 32 14.3 32 32l0 32 32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0 0-32c0-17.7 14.3-32 32-32zM169.4 393.4l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9zM32 224l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 32 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Dl={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},zl={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},yi={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ul=yi,Bl={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},Wl={prefix:"fas",iconName:"font",icon:[448,512,[],"f031","M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]},Gl={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Yl={prefix:"fas",iconName:"ruler-combined",icon:[512,512,[],"f546","M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"]},Hl={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},ql={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Xl={prefix:"fas",iconName:"magnifying-glass-plus",icon:[512,512,["search-plus"],"f00e","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"]},Vl={prefix:"fas",iconName:"magnifying-glass-minus",icon:[512,512,["search-minus"],"f010","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};var An=Object.prototype.toString,Fr=function(e){var n=An.call(e),r=n==="[object Arguments]";return r||(r=n!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&An.call(e.callee)==="[object Function]"),r},Vt,xn;function gi(){if(xn)return Vt;xn=1;var t;if(!Object.keys){var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Fr,a=Object.prototype.propertyIsEnumerable,o=!a.call({toString:null},"toString"),i=a.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(u){var d=u.constructor;return d&&d.prototype===u},c={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if(typeof window>"u")return!1;for(var u in window)try{if(!c["$"+u]&&e.call(window,u)&&window[u]!==null&&typeof window[u]=="object")try{l(window[u])}catch{return!0}}catch{return!0}return!1}(),m=function(u){if(typeof window>"u"||!f)return l(u);try{return l(u)}catch{return!1}};t=function(d){var b=d!==null&&typeof d=="object",A=n.call(d)==="[object Function]",h=r(d),x=b&&n.call(d)==="[object String]",P=[];if(!b&&!A&&!h)throw new TypeError("Object.keys called on a non-object");var w=i&&A;if(x&&d.length>0&&!e.call(d,0))for(var k=0;k<d.length;++k)P.push(String(k));if(h&&d.length>0)for(var E=0;E<d.length;++E)P.push(String(E));else for(var ct in d)!(w&&ct==="prototype")&&e.call(d,ct)&&P.push(String(ct));if(o)for(var ft=m(d),W=0;W<s.length;++W)!(ft&&s[W]==="constructor")&&e.call(d,s[W])&&P.push(s[W]);return P}}return Vt=t,Vt}var hi=Array.prototype.slice,vi=Fr,Pn=Object.keys,Nt=Pn?function(e){return Pn(e)}:gi(),On=Object.keys;Nt.shim=function(){if(Object.keys){var e=function(){var n=Object.keys(arguments);return n&&n.length===arguments.length}(1,2);e||(Object.keys=function(r){return vi(r)?On(hi.call(r)):On(r)})}else Object.keys=Nt;return Object.keys||Nt};var bi=Nt,Ct=Object.defineProperty||!1;if(Ct)try{Ct({},"a",{value:1})}catch{Ct=!1}var Ut=Ct,$r=SyntaxError,st=TypeError,Ai=Object.getOwnPropertyDescriptor,Tt=Ai;if(Tt)try{Tt([],"length")}catch{Tt=null}var lt=Tt,Sn=Ut,xi=$r,K=st,wn=lt,Le=function(e,n,r){if(!e||typeof e!="object"&&typeof e!="function")throw new K("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new K("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new K("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new K("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new K("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new K("`loose`, if provided, must be a boolean");var a=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,s=arguments.length>6?arguments[6]:!1,l=!!wn&&wn(e,n);if(Sn)Sn(e,n,{configurable:i===null&&l?l.configurable:!i,enumerable:a===null&&l?l.enumerable:!a,value:r,writable:o===null&&l?l.writable:!o});else if(s||!a&&!o&&!i)e[n]=r;else throw new xi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Se=Ut,_r=function(){return!!Se};_r.hasArrayLengthDefineBug=function(){if(!Se)return null;try{return Se([],"length",{value:1}).length!==1}catch{return!0}};var De=_r,Pi=bi,Oi=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",Si=Object.prototype.toString,wi=Array.prototype.concat,En=Le,Ei=function(t){return typeof t=="function"&&Si.call(t)==="[object Function]"},Mr=De(),ki=function(t,e,n,r){if(e in t){if(r===!0){if(t[e]===n)return}else if(!Ei(r)||!r())return}Mr?En(t,e,n,!0):En(t,e,n)},jr=function(t,e){var n=arguments.length>2?arguments[2]:{},r=Pi(e);Oi&&(r=wi.call(r,Object.getOwnPropertySymbols(e)));for(var a=0;a<r.length;a+=1)ki(t,r[a],e[r[a]],n[r[a]])};jr.supportsDescriptors=!!Mr;var Pt=jr,Rr={exports:{}},Lr=Object,Dr=Error,Ii=EvalError,Ni=RangeError,Ci=ReferenceError,Ti=URIError,Fi=Math.abs,$i=Math.floor,_i=Math.max,Mi=Math.min,ji=Math.pow,Ri=Math.round,Li=Number.isNaN||function(e){return e!==e},Di=Li,zi=function(e){return Di(e)||e===0?e:e<0?-1:1},zr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var a=42;e[n]=a;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,n);if(s.value!==a||s.enumerable!==!0)return!1}return!0},kn=typeof Symbol<"u"&&Symbol,Ui=zr,Bi=function(){return typeof kn!="function"||typeof Symbol!="function"||typeof kn("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Ui()},Kt,In;function Ur(){return In||(In=1,Kt=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),Kt}var Jt,Nn;function Br(){if(Nn)return Jt;Nn=1;var t=Lr;return Jt=t.getPrototypeOf||null,Jt}var Qt,Cn;function Wi(){if(Cn)return Qt;Cn=1;var t="Function.prototype.bind called on incompatible ",e=Object.prototype.toString,n=Math.max,r="[object Function]",a=function(l,c){for(var f=[],m=0;m<l.length;m+=1)f[m]=l[m];for(var u=0;u<c.length;u+=1)f[u+l.length]=c[u];return f},o=function(l,c){for(var f=[],m=c,u=0;m<l.length;m+=1,u+=1)f[u]=l[m];return f},i=function(s,l){for(var c="",f=0;f<s.length;f+=1)c+=s[f],f+1<s.length&&(c+=l);return c};return Qt=function(l){var c=this;if(typeof c!="function"||e.apply(c)!==r)throw new TypeError(t+c);for(var f=o(arguments,1),m,u=function(){if(this instanceof m){var x=c.apply(this,a(f,arguments));return Object(x)===x?x:this}return c.apply(l,a(f,arguments))},d=n(0,c.length-f.length),b=[],A=0;A<d;A++)b[A]="$"+A;if(m=Function("binder","return function ("+i(b,",")+"){ return binder.apply(this,arguments); }")(u),c.prototype){var h=function(){};h.prototype=c.prototype,m.prototype=new h,h.prototype=null}return m},Qt}var Zt,Tn;function Ot(){if(Tn)return Zt;Tn=1;var t=Wi();return Zt=Function.prototype.bind||t,Zt}var te,Fn;function ze(){return Fn||(Fn=1,te=Function.prototype.call),te}var ee,$n;function Ue(){return $n||($n=1,ee=Function.prototype.apply),ee}var Gi=typeof Reflect<"u"&&Reflect&&Reflect.apply,Yi=Ot(),Hi=Ue(),qi=ze(),Xi=Gi,Wr=Xi||Yi.call(qi,Hi),Vi=Ot(),Ki=st,Ji=ze(),Qi=Wr,Be=function(e){if(e.length<1||typeof e[0]!="function")throw new Ki("a function is required");return Qi(Vi,Ji,e)},ne,_n;function Zi(){if(_n)return ne;_n=1;var t=Be,e=lt,n;try{n=[].__proto__===Array.prototype}catch(i){if(!i||typeof i!="object"||!("code"in i)||i.code!=="ERR_PROTO_ACCESS")throw i}var r=!!n&&e&&e(Object.prototype,"__proto__"),a=Object,o=a.getPrototypeOf;return ne=r&&typeof r.get=="function"?t([r.get]):typeof o=="function"?function(s){return o(s==null?s:a(s))}:!1,ne}var re,Mn;function Gr(){if(Mn)return re;Mn=1;var t=Ur(),e=Br(),n=Zi();return re=t?function(a){return t(a)}:e?function(a){if(!a||typeof a!="object"&&typeof a!="function")throw new TypeError("getProto: not an object");return e(a)}:n?function(a){return n(a)}:null,re}var ts=Function.prototype.call,es=Object.prototype.hasOwnProperty,ns=Ot(),Yr=ns.call(ts,es),g,rs=Lr,as=Dr,os=Ii,is=Ni,ss=Ci,ot=$r,nt=st,ls=Ti,cs=Fi,fs=$i,us=_i,ps=Mi,ms=ji,ds=Ri,ys=zi,Hr=Function,ae=function(t){try{return Hr('"use strict"; return ('+t+").constructor;")()}catch{}},vt=lt,gs=Ut,oe=function(){throw new nt},hs=vt?function(){try{return arguments.callee,oe}catch{try{return vt(arguments,"callee").get}catch{return oe}}}():oe,J=Bi(),S=Gr(),vs=Br(),bs=Ur(),qr=Ue(),St=ze(),Q={},As=typeof Uint8Array>"u"||!S?g:S(Uint8Array),q={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?g:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?g:ArrayBuffer,"%ArrayIteratorPrototype%":J&&S?S([][Symbol.iterator]()):g,"%AsyncFromSyncIteratorPrototype%":g,"%AsyncFunction%":Q,"%AsyncGenerator%":Q,"%AsyncGeneratorFunction%":Q,"%AsyncIteratorPrototype%":Q,"%Atomics%":typeof Atomics>"u"?g:Atomics,"%BigInt%":typeof BigInt>"u"?g:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?g:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?g:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?g:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":as,"%eval%":eval,"%EvalError%":os,"%Float32Array%":typeof Float32Array>"u"?g:Float32Array,"%Float64Array%":typeof Float64Array>"u"?g:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?g:FinalizationRegistry,"%Function%":Hr,"%GeneratorFunction%":Q,"%Int8Array%":typeof Int8Array>"u"?g:Int8Array,"%Int16Array%":typeof Int16Array>"u"?g:Int16Array,"%Int32Array%":typeof Int32Array>"u"?g:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":J&&S?S(S([][Symbol.iterator]())):g,"%JSON%":typeof JSON=="object"?JSON:g,"%Map%":typeof Map>"u"?g:Map,"%MapIteratorPrototype%":typeof Map>"u"||!J||!S?g:S(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":rs,"%Object.getOwnPropertyDescriptor%":vt,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?g:Promise,"%Proxy%":typeof Proxy>"u"?g:Proxy,"%RangeError%":is,"%ReferenceError%":ss,"%Reflect%":typeof Reflect>"u"?g:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?g:Set,"%SetIteratorPrototype%":typeof Set>"u"||!J||!S?g:S(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?g:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":J&&S?S(""[Symbol.iterator]()):g,"%Symbol%":J?Symbol:g,"%SyntaxError%":ot,"%ThrowTypeError%":hs,"%TypedArray%":As,"%TypeError%":nt,"%Uint8Array%":typeof Uint8Array>"u"?g:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?g:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?g:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?g:Uint32Array,"%URIError%":ls,"%WeakMap%":typeof WeakMap>"u"?g:WeakMap,"%WeakRef%":typeof WeakRef>"u"?g:WeakRef,"%WeakSet%":typeof WeakSet>"u"?g:WeakSet,"%Function.prototype.call%":St,"%Function.prototype.apply%":qr,"%Object.defineProperty%":gs,"%Object.getPrototypeOf%":vs,"%Math.abs%":cs,"%Math.floor%":fs,"%Math.max%":us,"%Math.min%":ps,"%Math.pow%":ms,"%Math.round%":ds,"%Math.sign%":ys,"%Reflect.getPrototypeOf%":bs};if(S)try{null.error}catch(t){var xs=S(S(t));q["%Error.prototype%"]=xs}var Ps=function t(e){var n;if(e==="%AsyncFunction%")n=ae("async function () {}");else if(e==="%GeneratorFunction%")n=ae("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=ae("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var a=t("%AsyncGenerator%");a&&S&&(n=S(a.prototype))}return q[e]=n,n},jn={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},wt=Ot(),Mt=Yr,Os=wt.call(St,Array.prototype.concat),Ss=wt.call(qr,Array.prototype.splice),Rn=wt.call(St,String.prototype.replace),jt=wt.call(St,String.prototype.slice),ws=wt.call(St,RegExp.prototype.exec),Es=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,ks=/\\(\\)?/g,Is=function(e){var n=jt(e,0,1),r=jt(e,-1);if(n==="%"&&r!=="%")throw new ot("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new ot("invalid intrinsic syntax, expected opening `%`");var a=[];return Rn(e,Es,function(o,i,s,l){a[a.length]=s?Rn(l,ks,"$1"):i||o}),a},Ns=function(e,n){var r=e,a;if(Mt(jn,r)&&(a=jn[r],r="%"+a[0]+"%"),Mt(q,r)){var o=q[r];if(o===Q&&(o=Ps(r)),typeof o>"u"&&!n)throw new nt("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:a,name:r,value:o}}throw new ot("intrinsic "+e+" does not exist!")},We=function(e,n){if(typeof e!="string"||e.length===0)throw new nt("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new nt('"allowMissing" argument must be a boolean');if(ws(/^%?[^%]*%?$/,e)===null)throw new ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=Is(e),a=r.length>0?r[0]:"",o=Ns("%"+a+"%",n),i=o.name,s=o.value,l=!1,c=o.alias;c&&(a=c[0],Ss(r,Os([0,1],c)));for(var f=1,m=!0;f<r.length;f+=1){var u=r[f],d=jt(u,0,1),b=jt(u,-1);if((d==='"'||d==="'"||d==="`"||b==='"'||b==="'"||b==="`")&&d!==b)throw new ot("property names with quotes must have matching quotes");if((u==="constructor"||!m)&&(l=!0),a+="."+u,i="%"+a+"%",Mt(q,i))s=q[i];else if(s!=null){if(!(u in s)){if(!n)throw new nt("base intrinsic for "+e+" exists, but the property is not available.");return}if(vt&&f+1>=r.length){var A=vt(s,u);m=!!A,m&&"get"in A&&!("originalValue"in A.get)?s=A.get:s=s[u]}else m=Mt(s,u),s=s[u];m&&!l&&(q[i]=s)}}return s},Cs=We,Ln=Le,Ts=De(),Dn=lt,zn=st,Fs=Cs("%Math.floor%"),$s=function(e,n){if(typeof e!="function")throw new zn("`fn` is not a function");if(typeof n!="number"||n<0||n>4294967295||Fs(n)!==n)throw new zn("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],a=!0,o=!0;if("length"in e&&Dn){var i=Dn(e,"length");i&&!i.configurable&&(a=!1),i&&!i.writable&&(o=!1)}return(a||o||!r)&&(Ts?Ln(e,"length",n,!0,!0):Ln(e,"length",n)),e},_s=Ot(),Ms=Ue(),js=Wr,Rs=function(){return js(_s,Ms,arguments)};(function(t){var e=$s,n=Ut,r=Be,a=Rs;t.exports=function(i){var s=r(arguments),l=i.length-(arguments.length-1);return e(s,1+(l>0?l:0),!0)},n?n(t.exports,"apply",{value:a}):t.exports.apply=a})(Rr);var Ge=Rr.exports,Xr=We,Vr=Be,Ls=Vr([Xr("%String.prototype.indexOf%")]),Kr=function(e,n){var r=Xr(e,!!n);return typeof r=="function"&&Ls(e,".prototype.")>-1?Vr([r]):r},Jr=We,Qr=Ge,Ds=Qr(Jr("String.prototype.indexOf")),zs=function(e,n){var r=Jr(e,!!n);return typeof r=="function"&&Ds(e,".prototype.")>-1?Qr(r):r},bt=function(){return typeof(function(){}).name=="string"},yt=Object.getOwnPropertyDescriptor;if(yt)try{yt([],"length")}catch{yt=null}bt.functionsHaveConfigurableNames=function(){if(!bt()||!yt)return!1;var e=yt(function(){},"name");return!!e&&!!e.configurable};var Us=Function.prototype.bind;bt.boundFunctionsHaveNames=function(){return bt()&&typeof Us=="function"&&(function(){}).bind().name!==""};var Bs=bt,Un=Le,Ws=De(),Gs=Bs.functionsHaveConfigurableNames(),Ys=st,Hs=function(e,n){if(typeof e!="function")throw new Ys("`fn` is not a function");var r=arguments.length>2&&!!arguments[2];return(!r||Gs)&&(Ws?Un(e,"name",n,!0,!0):Un(e,"name",n)),e},qs=Hs,Xs=st,Vs=Object,Zr=qs(function(){if(this==null||this!==Vs(this))throw new Xs("RegExp.prototype.flags getter called on non-object");var e="";return this.hasIndices&&(e+="d"),this.global&&(e+="g"),this.ignoreCase&&(e+="i"),this.multiline&&(e+="m"),this.dotAll&&(e+="s"),this.unicode&&(e+="u"),this.unicodeSets&&(e+="v"),this.sticky&&(e+="y"),e},"get flags",!0),Ks=Zr,Js=Pt.supportsDescriptors,Qs=Object.getOwnPropertyDescriptor,ta=function(){if(Js&&/a/mig.flags==="gim"){var e=Qs(RegExp.prototype,"flags");if(e&&typeof e.get=="function"&&"dotAll"in RegExp.prototype&&"hasIndices"in RegExp.prototype){var n="",r={};if(Object.defineProperty(r,"hasIndices",{get:function(){n+="d"}}),Object.defineProperty(r,"sticky",{get:function(){n+="y"}}),e.get.call(r),n==="dy")return e.get}}return Ks},Zs=Pt.supportsDescriptors,tl=ta,el=lt,nl=Object.defineProperty,rl=Dr,Bn=Gr(),al=/a/,ol=function(){if(!Zs||!Bn)throw new rl("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var e=tl(),n=Bn(al),r=el(n,"flags");return(!r||r.get!==e)&&nl(n,"flags",{configurable:!0,enumerable:!1,get:e}),e},il=Pt,sl=Ge,ll=Zr,ea=ta,cl=ol,na=sl(ea());il(na,{getPolyfill:ea,implementation:ll,shim:cl});var Kl=na,fl=zr,Ye=function(){return fl()&&!!Symbol.toStringTag},ul=Ye(),pl=zs,we=pl("Object.prototype.toString"),Bt=function(e){return ul&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:we(e)==="[object Arguments]"},ra=function(e){return Bt(e)?!0:e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&we(e)!=="[object Array]"&&we(e.callee)==="[object Function]"},ml=function(){return Bt(arguments)}();Bt.isLegacyArguments=ra;var Jl=ml?Bt:ra,Wn=function(t){return t!==t},aa=function(e,n){return e===0&&n===0?1/e===1/n:!!(e===n||Wn(e)&&Wn(n))},dl=aa,oa=function(){return typeof Object.is=="function"?Object.is:dl},yl=oa,gl=Pt,hl=function(){var e=yl();return gl(Object,{is:e},{is:function(){return Object.is!==e}}),e},vl=Pt,bl=Ge,Al=aa,ia=oa,xl=hl,sa=bl(ia(),Object);vl(sa,{getPolyfill:ia,implementation:Al,shim:xl});var Ql=sa,la=Kr,Pl=la("Date.prototype.getDay"),Ol=function(e){try{return Pl(e),!0}catch{return!1}},Sl=la("Object.prototype.toString"),wl="[object Date]",El=Ye(),Zl=function(e){return typeof e!="object"||e===null?!1:El?Ol(e):Sl(e)===wl},Gn=Kr,kl=Ye(),Il=Yr,Nl=lt,Ee;if(kl){var Cl=Gn("RegExp.prototype.exec"),Yn={},ie=function(){throw Yn},Hn={toString:ie,valueOf:ie};typeof Symbol.toPrimitive=="symbol"&&(Hn[Symbol.toPrimitive]=ie),Ee=function(e){if(!e||typeof e!="object")return!1;var n=Nl(e,"lastIndex"),r=n&&Il(n,"value");if(!r)return!1;try{Cl(e,Hn)}catch(a){return a===Yn}}}else{var Tl=Gn("Object.prototype.toString"),Fl="[object RegExp]";Ee=function(e){return!e||typeof e!="object"&&typeof e!="function"?!1:Tl(e)===Fl}}var tc=Ee;export{Ul as A,Yl as B,zl as C,Dl as D,jl as E,Tr as F,Wl as G,Rl as H,ei as I,Ml as J,y as P,Ge as a,Ye as b,Kr as c,Pt as d,Lr as e,Bi as f,We as g,Yr as h,zs as i,Jl as j,tc as k,lt as l,Ql as m,Zl as n,bi as o,Xl as p,Vl as q,Kl as r,zr as s,st as t,Hl as u,_l as v,Gl as w,Bl as x,ql as y,Ll as z};
