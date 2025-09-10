import{b as ma,R as Vn}from"./index-BXbp0x8x.js";const Ye=()=>{};let Ee={},Kn={},Jn=null,Qn={mark:Ye,measure:Ye};try{typeof window<"u"&&(Ee=window),typeof document<"u"&&(Kn=document),typeof MutationObserver<"u"&&(Jn=MutationObserver),typeof performance<"u"&&(Qn=performance)}catch{}const{userAgent:He=""}=Ee.navigator||{},z=Ee,v=Kn,Xe=Jn,Et=Qn;z.document;const R=!!v.documentElement&&!!v.head&&typeof v.addEventListener=="function"&&typeof v.createElement=="function",Zn=~He.indexOf("MSIE")||~He.indexOf("Trident/");var O="classic",tr="duotone",I="sharp",N="sharp-duotone",da=[O,tr,I,N],ya={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds"}},qe={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},ga=["kit"],ha=/fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/,va=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,ba={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},Aa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds"}},xa={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds"}},Pa={classic:["fas","far","fal","fat"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds"]},Oa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid"}},Sa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds"}},er={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid"}},wa=["solid","regular","light","thin","duotone","brands"],nr=[1,2,3,4,5,6,7,8,9,10],Ea=nr.concat([11,12,13,14,15,16,17,18,19,20]),ut={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=[...Object.keys(Pa),...wa,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ut.GROUP,ut.SWAP_OPACITY,ut.PRIMARY,ut.SECONDARY].concat(nr.map(t=>"".concat(t,"x"))).concat(Ea.map(t=>"w-".concat(t))),Ia={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Na={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},Ca={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},Ve={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}};const M="___FONT_AWESOME___",ie=16,rr="fa",ar="svg-inline--fa",q="data-fa-i2svg",se="data-fa-pseudo-element",Ta="data-fa-pseudo-element-pending",ke="data-prefix",Ie="data-icon",Ke="fontawesome-i2svg",Fa="async",$a=["HTML","HEAD","STYLE","SCRIPT"],or=(()=>{try{return!0}catch{return!1}})(),ir=[O,I,N];function At(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[O]}})}const sr={...er};sr[O]={...er[O],...qe.kit,...qe["kit-duotone"]};const Y=At(sr),le={...Sa};le[O]={...le[O],...Ve.kit,...Ve["kit-duotone"]};const gt=At(le),ce={...Oa};ce[O]={...ce[O],...Ca.kit};const H=At(ce),fe={...xa};fe[O]={...fe[O],...Na.kit};const _a=At(fe),Ma=ha,lr="fa-layers-text",ja=va,Ra={...ya};At(Ra);const La=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Wt=ut,rt=new Set;Object.keys(gt[O]).map(rt.add.bind(rt));Object.keys(gt[I]).map(rt.add.bind(rt));Object.keys(gt[N]).map(rt.add.bind(rt));const Da=[...ga,...ka],mt=z.FontAwesomeConfig||{};function za(t){var e=v.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ua(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}v&&typeof v.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,r]=e;const a=Ua(za(n));a!=null&&(mt[r]=a)});const cr={styleDefault:"solid",familyDefault:"classic",cssPrefix:rr,replacementClass:ar,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mt.familyPrefix&&(mt.cssPrefix=mt.familyPrefix);const at={...cr,...mt};at.autoReplaceSvg||(at.observeMutations=!1);const p={};Object.keys(cr).forEach(t=>{Object.defineProperty(p,t,{enumerable:!0,set:function(e){at[t]=e,dt.forEach(n=>n(p))},get:function(){return at[t]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(t){at.cssPrefix=t,dt.forEach(e=>e(p))},get:function(){return at.cssPrefix}});z.FontAwesomeConfig=p;const dt=[];function Ba(t){return dt.push(t),()=>{dt.splice(dt.indexOf(t),1)}}const L=ie,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Wa(t){if(!t||!R)return;const e=v.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=v.head.childNodes;let r=null;for(let a=n.length-1;a>-1;a--){const o=n[a],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(r=o)}return v.head.insertBefore(e,r),t}const Ga="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){let t=12,e="";for(;t-- >0;)e+=Ga[Math.random()*62|0];return e}function it(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ne(t){return t.classList?it(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function fr(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ya(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(fr(t[n]),'" '),"").trim()}function Rt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ce(t){return t.size!==F.size||t.x!==F.x||t.y!==F.y||t.rotate!==F.rotate||t.flipX||t.flipY}function Ha(t){let{transform:e,containerWidth:n,iconWidth:r}=t;const a={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Xa(t){let{transform:e,width:n=ie,height:r=ie,startCentered:a=!1}=t,o="";return a&&Zn?o+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-r/2,"em) "):a?o+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):o+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),o+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var qa=`:root, :host {
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
}`;function ur(){const t=rr,e=ar,n=p.cssPrefix,r=p.replacementClass;let a=qa;if(n!==t||r!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(r))}return a}let Je=!1;function Gt(){p.autoAddCss&&!Je&&(Wa(ur()),Je=!0)}var Va={mixout(){return{dom:{css:ur,insertCss:Gt}}},hooks(){return{beforeDOMElementCreation(){Gt()},beforeI2svg(){Gt()}}}};const j=z||{};j[M]||(j[M]={});j[M].styles||(j[M].styles={});j[M].hooks||(j[M].hooks={});j[M].shims||(j[M].shims=[]);var $=j[M];const pr=[],mr=function(){v.removeEventListener("DOMContentLoaded",mr),Ft=1,pr.map(t=>t())};let Ft=!1;R&&(Ft=(v.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(v.readyState),Ft||v.addEventListener("DOMContentLoaded",mr));function Ka(t){R&&(Ft?setTimeout(t,0):pr.push(t))}function xt(t){const{tag:e,attributes:n={},children:r=[]}=t;return typeof t=="string"?fr(t):"<".concat(e," ").concat(Ya(n),">").concat(r.map(xt).join(""),"</").concat(e,">")}function Qe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Yt=function(e,n,r,a){var o=Object.keys(e),i=o.length,s=n,l,c,f;for(r===void 0?(l=1,f=e[o[0]]):(l=0,f=r);l<i;l++)c=o[l],f=s(f,e[c],c,e);return f};function Ja(t){const e=[];let n=0;const r=t.length;for(;n<r;){const a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((a&1023)<<10)+(o&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function ue(t){const e=Ja(t);return e.length===1?e[0].toString(16):null}function Qa(t,e){const n=t.length;let r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ze(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return!!r.icon?e[r.iconName]=r.icon:e[n]=r,e},{})}function pe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:r=!1}=n,a=Ze(e);typeof $.hooks.addPack=="function"&&!r?$.hooks.addPack(t,Ze(e)):$.styles[t]={...$.styles[t]||{},...a},t==="fas"&&pe("fa",e)}const{styles:G,shims:Za}=$,to={[O]:Object.values(H[O]),[I]:Object.values(H[I]),[N]:Object.values(H[N])};let Te=null,dr={},yr={},gr={},hr={},vr={};const eo={[O]:Object.keys(Y[O]),[I]:Object.keys(Y[I]),[N]:Object.keys(Y[N])};function no(t){return~Da.indexOf(t)}function ro(t,e){const n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!no(a)?a:null}const br=()=>{const t=r=>Yt(G,(a,o,i)=>(a[i]=Yt(o,r,{}),a),{});dr=t((r,a,o)=>(a[3]&&(r[a[3]]=o),a[2]&&a[2].filter(s=>typeof s=="number").forEach(s=>{r[s.toString(16)]=o}),r)),yr=t((r,a,o)=>(r[o]=o,a[2]&&a[2].filter(s=>typeof s=="string").forEach(s=>{r[s]=o}),r)),vr=t((r,a,o)=>{const i=a[2];return r[o]=o,i.forEach(s=>{r[s]=o}),r});const e="far"in G||p.autoFetchSvg,n=Yt(Za,(r,a)=>{const o=a[0];let i=a[1];const s=a[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(r.names[o]={prefix:i,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:i,iconName:s}),r},{names:{},unicodes:{}});gr=n.names,hr=n.unicodes,Te=Lt(p.styleDefault,{family:p.familyDefault})};Ba(t=>{Te=Lt(t.styleDefault,{family:p.familyDefault})});br();function Fe(t,e){return(dr[t]||{})[e]}function ao(t,e){return(yr[t]||{})[e]}function D(t,e){return(vr[t]||{})[e]}function Ar(t){return gr[t]||{prefix:null,iconName:null}}function oo(t){const e=hr[t],n=Fe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function U(){return Te}const $e=()=>({prefix:null,iconName:null,rest:[]});function Lt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=O}=e,r=Y[n][t],a=gt[n][t]||gt[n][r],o=t in $.styles?t:null;return a||o||null}const io={[O]:Object.keys(H[O]),[I]:Object.keys(H[I]),[N]:Object.keys(H[N])};function Dt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e,r={[O]:"".concat(p.cssPrefix,"-").concat(O),[I]:"".concat(p.cssPrefix,"-").concat(I),[N]:"".concat(p.cssPrefix,"-").concat(N)};let a=null,o=O;const i=da.filter(l=>l!==tr);i.forEach(l=>{(t.includes(r[l])||t.some(c=>io[l].includes(c)))&&(o=l)});const s=t.reduce((l,c)=>{const f=ro(p.cssPrefix,c);if(G[c]?(c=to[o].includes(c)?_a[o][c]:c,a=c,l.prefix=c):eo[o].indexOf(c)>-1?(a=c,l.prefix=Lt(c,{family:o})):f?l.iconName=f:c!==p.replacementClass&&!i.some(m=>c===r[m])&&l.rest.push(c),!n&&l.prefix&&l.iconName){const m=a==="fa"?Ar(l.iconName):{},u=D(l.prefix,l.iconName);m.prefix&&(a=null),l.iconName=m.iconName||u||l.iconName,l.prefix=m.prefix||l.prefix,l.prefix==="far"&&!G.far&&G.fas&&!p.autoFetchSvg&&(l.prefix="fas")}return l},$e());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&o===I&&(G.fass||p.autoFetchSvg)&&(s.prefix="fass",s.iconName=D(s.prefix,s.iconName)||s.iconName),!s.prefix&&o===N&&(G.fasds||p.autoFetchSvg)&&(s.prefix="fasds",s.iconName=D(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=U()||"fas"),s}class so{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];const a=n.reduce(this._pullDefinitions,{});Object.keys(a).forEach(o=>{this.definitions[o]={...this.definitions[o]||{},...a[o]},pe(o,a[o]);const i=H[O][o];i&&pe(i,a[o]),br()})}reset(){this.definitions={}}_pullDefinitions(e,n){const r=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(r).map(a=>{const{prefix:o,iconName:i,icon:s}=r[a],l=s[2];e[o]||(e[o]={}),l.length>0&&l.forEach(c=>{typeof c=="string"&&(e[o][c]=s)}),e[o][i]=s}),e}}let tn=[],Z={};const et={},lo=Object.keys(et);function co(t,e){let{mixoutsTo:n}=e;return tn=t,Z={},Object.keys(et).forEach(r=>{lo.indexOf(r)===-1&&delete et[r]}),tn.forEach(r=>{const a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(o=>{typeof a[o]=="function"&&(n[o]=a[o]),typeof a[o]=="object"&&Object.keys(a[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=a[o][i]})}),r.hooks){const o=r.hooks();Object.keys(o).forEach(i=>{Z[i]||(Z[i]=[]),Z[i].push(o[i])})}r.provides&&r.provides(et)}),n}function me(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];return(Z[t]||[]).forEach(i=>{e=i.apply(null,[e,...r])}),e}function V(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];(Z[t]||[]).forEach(o=>{o.apply(null,n)})}function B(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return et[t]?et[t].apply(null,e):void 0}function de(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||U();if(e)return e=D(n,e)||e,Qe(xr.definitions,n,e)||Qe($.styles,n,e)}const xr=new so,fo=()=>{p.autoReplaceSvg=!1,p.observeMutations=!1,V("noAuto")},uo={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(V("beforeI2svg",t),B("pseudoElements2svg",t),B("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,Ka(()=>{mo({autoReplaceSvgRoot:e}),V("watch",t)})}},po={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:D(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=Lt(t[0]);return{prefix:n,iconName:D(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(p.cssPrefix,"-"))>-1||t.match(Ma))){const e=Dt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||U(),iconName:D(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=U();return{prefix:e,iconName:D(e,t)||t}}}},C={noAuto:fo,config:p,dom:uo,parse:po,library:xr,findIconDefinition:de,toHtml:xt},mo=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=v}=t;(Object.keys($.styles).length>0||p.autoFetchSvg)&&R&&p.autoReplaceSvg&&C.dom.i2svg({node:e})};function zt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>xt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!R)return;const n=v.createElement("div");return n.innerHTML=t.html,n.children}}),t}function yo(t){let{children:e,main:n,mask:r,attributes:a,styles:o,transform:i}=t;if(Ce(i)&&n.found&&!r.found){const{width:s,height:l}=n,c={x:s/l/2,y:.5};a.style=Rt({...o,"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")})}return[{tag:"svg",attributes:a,children:e}]}function go(t){let{prefix:e,iconName:n,children:r,attributes:a,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(p.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:{...a,id:i},children:r}]}]}function _e(t){const{icons:{main:e,mask:n},prefix:r,iconName:a,transform:o,symbol:i,title:s,maskId:l,titleId:c,extra:f,watchable:m=!1}=t,{width:u,height:d}=n.found?n:e,b=r==="fak",A=[p.replacementClass,a?"".concat(p.cssPrefix,"-").concat(a):""].filter(E=>f.classes.indexOf(E)===-1).filter(E=>E!==""||!!E).concat(f.classes).join(" ");let h={children:[],attributes:{...f.attributes,"data-prefix":r,"data-icon":a,class:A,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(u," ").concat(d)}};const x=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(u/d*16*.0625,"em")}:{};m&&(h.attributes[q]=""),s&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(c||ht())},children:[s]}),delete h.attributes.title);const P={...h,prefix:r,iconName:a,main:e,mask:n,maskId:l,transform:o,symbol:i,styles:{...x,...f.styles}},{children:w,attributes:k}=n.found&&e.found?B("generateAbstractMask",P)||{children:[],attributes:{}}:B("generateAbstractIcon",P)||{children:[],attributes:{}};return P.children=w,P.attributes=k,i?go(P):yo(P)}function en(t){const{content:e,width:n,height:r,transform:a,title:o,extra:i,watchable:s=!1}=t,l={...i.attributes,...o?{title:o}:{},class:i.classes.join(" ")};s&&(l[q]="");const c={...i.styles};Ce(a)&&(c.transform=Xa({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);const f=Rt(c);f.length>0&&(l.style=f);const m=[];return m.push({tag:"span",attributes:l,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}function ho(t){const{content:e,title:n,extra:r}=t,a={...r.attributes,...n?{title:n}:{},class:r.classes.join(" ")},o=Rt(r.styles);o.length>0&&(a.style=o);const i=[];return i.push({tag:"span",attributes:a,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:Ht}=$;function ye(t){const e=t[0],n=t[1],[r]=t.slice(4);let a=null;return Array.isArray(r)?a={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(Wt.PRIMARY),fill:"currentColor",d:r[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:a}}const vo={found:!1,width:512,height:512};function bo(t,e){!or&&!p.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ge(t,e){let n=e;return e==="fa"&&p.styleDefault!==null&&(e=U()),new Promise((r,a)=>{if(n==="fa"){const o=Ar(t);t=o.iconName||t,e=o.prefix||e}if(t&&e&&Ht[e]&&Ht[e][t]){const o=Ht[e][t];return r(ye(o))}bo(t,e),r({...vo,icon:p.showMissingIcons&&t?B("missingIconAbstract")||{}:{}})})}const nn=()=>{},he=p.measurePerformance&&Et&&Et.mark&&Et.measure?Et:{mark:nn,measure:nn},pt='FA "6.6.0"',Ao=t=>(he.mark("".concat(pt," ").concat(t," begins")),()=>Pr(t)),Pr=t=>{he.mark("".concat(pt," ").concat(t," ends")),he.measure("".concat(pt," ").concat(t),"".concat(pt," ").concat(t," begins"),"".concat(pt," ").concat(t," ends"))};var Me={begin:Ao,end:Pr};const kt=()=>{};function rn(t){return typeof(t.getAttribute?t.getAttribute(q):null)=="string"}function xo(t){const e=t.getAttribute?t.getAttribute(ke):null,n=t.getAttribute?t.getAttribute(Ie):null;return e&&n}function Po(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(p.replacementClass)}function Oo(){return p.autoReplaceSvg===!0?It.replace:It[p.autoReplaceSvg]||It.replace}function So(t){return v.createElementNS("http://www.w3.org/2000/svg",t)}function wo(t){return v.createElement(t)}function Or(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?So:wo}=e;if(typeof t=="string")return v.createTextNode(t);const r=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){r.appendChild(Or(o,{ceFn:n}))}),r}function Eo(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const It={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore(Or(n),e)}),e.getAttribute(q)===null&&p.keepOriginalSource){let n=v.createComment(Eo(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~Ne(e).indexOf(p.replacementClass))return It.replace(t);const r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,s)=>(s===p.replacementClass||s.match(r)?i.toSvg.push(s):i.toNode.push(s),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const a=n.map(o=>xt(o)).join(`
`);e.setAttribute(q,""),e.innerHTML=a}};function an(t){t()}function Sr(t,e){const n=typeof e=="function"?e:kt;if(t.length===0)n();else{let r=an;p.mutateApproach===Fa&&(r=z.requestAnimationFrame||an),r(()=>{const a=Oo(),o=Me.begin("mutate");t.map(a),o(),n()})}}let je=!1;function wr(){je=!0}function ve(){je=!1}let $t=null;function on(t){if(!Xe||!p.observeMutations)return;const{treeCallback:e=kt,nodeCallback:n=kt,pseudoElementsCallback:r=kt,observeMutationsRoot:a=v}=t;$t=new Xe(o=>{if(je)return;const i=U();it(o).forEach(s=>{if(s.type==="childList"&&s.addedNodes.length>0&&!rn(s.addedNodes[0])&&(p.searchPseudoElements&&r(s.target),e(s.target)),s.type==="attributes"&&s.target.parentNode&&p.searchPseudoElements&&r(s.target.parentNode),s.type==="attributes"&&rn(s.target)&&~La.indexOf(s.attributeName))if(s.attributeName==="class"&&xo(s.target)){const{prefix:l,iconName:c}=Dt(Ne(s.target));s.target.setAttribute(ke,l||i),c&&s.target.setAttribute(Ie,c)}else Po(s.target)&&n(s.target)})}),R&&$t.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function ko(){$t&&$t.disconnect()}function Io(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((r,a)=>{const o=a.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(r[i]=s.join(":").trim()),r},{})),n}function No(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"";let a=Dt(Ne(t));return a.prefix||(a.prefix=U()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=ao(a.prefix,t.innerText)||Fe(a.prefix,ue(t.innerText))),!a.iconName&&p.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function Co(t){const e=it(t.attributes).reduce((a,o)=>(a.name!=="class"&&a.name!=="style"&&(a[o.name]=o.value),a),{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return p.autoA11y&&(n?e["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(r||ht()):(e["aria-hidden"]="true",e.focusable="false")),e}function To(){return{iconName:null,title:null,titleId:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:r,rest:a}=No(t),o=Co(t),i=me("parseNodeAttributes",{},t);let s=e.styleParser?Io(t):[];return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:s,attributes:o},...i}}const{styles:Fo}=$;function Er(t){const e=p.autoReplaceSvg==="nest"?sn(t,{styleParser:!1}):sn(t);return~e.extra.classes.indexOf(lr)?B("generateLayersText",t,e):B("generateSvgReplacementMutation",t,e)}let _=new Set;ir.map(t=>{_.add("fa-".concat(t))});Object.keys(Y[O]).map(_.add.bind(_));Object.keys(Y[I]).map(_.add.bind(_));Object.keys(Y[N]).map(_.add.bind(_));_=[..._];function ln(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();const n=v.documentElement.classList,r=f=>n.add("".concat(Ke,"-").concat(f)),a=f=>n.remove("".concat(Ke,"-").concat(f)),o=p.autoFetchSvg?_:ir.map(f=>"fa-".concat(f)).concat(Object.keys(Fo));o.includes("fa")||o.push("fa");const i=[".".concat(lr,":not([").concat(q,"])")].concat(o.map(f=>".".concat(f,":not([").concat(q,"])"))).join(", ");if(i.length===0)return Promise.resolve();let s=[];try{s=it(t.querySelectorAll(i))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();const l=Me.begin("onTree"),c=s.reduce((f,m)=>{try{const u=Er(m);u&&f.push(u)}catch(u){or||u.name==="MissingIcon"&&console.error(u)}return f},[]);return new Promise((f,m)=>{Promise.all(c).then(u=>{Sr(u,()=>{r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),f()})}).catch(u=>{l(),m(u)})})}function $o(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Er(t).then(n=>{n&&Sr([n],e)})}function _o(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=(e||{}).icon?e:de(e||{});let{mask:a}=n;return a&&(a=(a||{}).icon?a:de(a||{})),t(r,{...n,mask:a})}}const Mo=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,symbol:r=!1,mask:a=null,maskId:o=null,title:i=null,titleId:s=null,classes:l=[],attributes:c={},styles:f={}}=e;if(!t)return;const{prefix:m,iconName:u,icon:d}=t;return zt({type:"icon",...t},()=>(V("beforeDOMElementCreation",{iconDefinition:t,params:e}),p.autoA11y&&(i?c["aria-labelledby"]="".concat(p.replacementClass,"-title-").concat(s||ht()):(c["aria-hidden"]="true",c.focusable="false")),_e({icons:{main:ye(d),mask:a?ye(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:m,iconName:u,transform:{...F,...n},symbol:r,title:i,maskId:o,titleId:s,extra:{attributes:c,styles:f,classes:l}})))};var jo={mixout(){return{icon:_o(Mo)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=ln,t.nodeCallback=$o,t}}},provides(t){t.i2svg=function(e){const{node:n=v,callback:r=()=>{}}=e;return ln(n,r)},t.generateSvgReplacementMutation=function(e,n){const{iconName:r,title:a,titleId:o,prefix:i,transform:s,symbol:l,mask:c,maskId:f,extra:m}=n;return new Promise((u,d)=>{Promise.all([ge(r,i),c.iconName?ge(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(b=>{let[A,h]=b;u([e,_e({icons:{main:A,mask:h},prefix:i,iconName:r,transform:s,symbol:l,maskId:f,title:a,titleId:o,extra:m,watchable:!0})])}).catch(d)})},t.generateAbstractIcon=function(e){let{children:n,attributes:r,main:a,transform:o,styles:i}=e;const s=Rt(i);s.length>0&&(r.style=s);let l;return Ce(o)&&(l=B("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),n.push(l||a.icon),{children:n,attributes:r}}}},Ro={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return zt({type:"layer"},()=>{V("beforeDOMElementCreation",{assembler:t,params:e});let r=[];return t(a=>{Array.isArray(a)?a.map(o=>{r=r.concat(o.abstract)}):r=r.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers"),...n].join(" ")},children:r}]})}}}},Lo={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:r=[],attributes:a={},styles:o={}}=e;return zt({type:"counter",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),ho({content:t.toString(),title:n,extra:{attributes:a,styles:o,classes:["".concat(p.cssPrefix,"-layers-counter"),...r]}})))}}}},Do={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=F,title:r=null,classes:a=[],attributes:o={},styles:i={}}=e;return zt({type:"text",content:t},()=>(V("beforeDOMElementCreation",{content:t,params:e}),en({content:t,transform:{...F,...n},title:r,extra:{attributes:o,styles:i,classes:["".concat(p.cssPrefix,"-layers-text"),...a]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:r,transform:a,extra:o}=n;let i=null,s=null;if(Zn){const l=parseInt(getComputedStyle(e).fontSize,10),c=e.getBoundingClientRect();i=c.width/l,s=c.height/l}return p.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,en({content:e.innerHTML,width:i,height:s,transform:a,title:r,extra:o,watchable:!0})])}}};const zo=new RegExp('"',"ug"),cn=[1105920,1112319],fn={FontAwesome:{normal:"fas",400:"fas"},...Aa,...ba,...Ia},be=Object.keys(fn).reduce((t,e)=>(t[e.toLowerCase()]=fn[e],t),{}),Uo=Object.keys(be).reduce((t,e)=>{const n=be[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function Bo(t){const e=t.replace(zo,""),n=Qa(e,0),r=n>=cn[0]&&n<=cn[1],a=e.length===2?e[0]===e[1]:!1;return{value:ue(a?e[0]:e),isSecondary:r||a}}function Wo(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),r=parseInt(e),a=isNaN(r)?"normal":r;return(be[n]||{})[a]||Uo[n]}function un(t,e){const n="".concat(Ta).concat(e.replace(":","-"));return new Promise((r,a)=>{if(t.getAttribute(n)!==null)return r();const i=it(t.children).filter(u=>u.getAttribute(se)===e)[0],s=z.getComputedStyle(t,e),l=s.getPropertyValue("font-family"),c=l.match(ja),f=s.getPropertyValue("font-weight"),m=s.getPropertyValue("content");if(i&&!c)return t.removeChild(i),r();if(c&&m!=="none"&&m!==""){const u=s.getPropertyValue("content");let d=Wo(l,f);const{value:b,isSecondary:A}=Bo(u),h=c[0].startsWith("FontAwesome");let x=Fe(d,b),P=x;if(h){const w=oo(b);w.iconName&&w.prefix&&(x=w.iconName,d=w.prefix)}if(x&&!A&&(!i||i.getAttribute(ke)!==d||i.getAttribute(Ie)!==P)){t.setAttribute(n,P),i&&t.removeChild(i);const w=To(),{extra:k}=w;k.attributes[se]=e,ge(x,d).then(E=>{const ct=_e({...w,icons:{main:E,mask:$e()},prefix:d,iconName:P,extra:k,watchable:!0}),ft=v.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(ft,t.firstChild):t.appendChild(ft),ft.outerHTML=ct.map(W=>xt(W)).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Go(t){return Promise.all([un(t,"::before"),un(t,"::after")])}function Yo(t){return t.parentNode!==document.head&&!~$a.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(se)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function pn(t){if(R)return new Promise((e,n)=>{const r=it(t.querySelectorAll("*")).filter(Yo).map(Go),a=Me.begin("searchPseudoElements");wr(),Promise.all(r).then(()=>{a(),ve(),e()}).catch(()=>{a(),ve(),n()})})}var Ho={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=pn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=v}=e;p.searchPseudoElements&&pn(n)}}};let mn=!1;var Xo={mixout(){return{dom:{unwatch(){wr(),mn=!0}}}},hooks(){return{bootstrap(){on(me("mutationObserverCallbacks",{}))},noAuto(){ko()},watch(t){const{observeMutationsRoot:e}=t;mn?ve():on(me("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const dn=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,r)=>{const a=r.toLowerCase().split("-"),o=a[0];let i=a.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var qo={mixout(){return{parse:{transform:t=>dn(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=dn(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:r,containerWidth:a,iconWidth:o}=e;const i={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(l," ").concat(c)},m={transform:"translate(".concat(o/2*-1," -256)")},u={outer:i,inner:f,path:m};return{tag:"g",attributes:{...u.outer},children:[{tag:"g",attributes:{...u.inner},children:[{tag:n.icon.tag,children:n.icon.children,attributes:{...n.icon.attributes,...u.path}}]}]}}}};const Xt={x:0,y:0,width:"100%",height:"100%"};function yn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Vo(t){return t.tag==="g"?t.children:[t]}var Ko={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),r=n?Dt(n.split(" ").map(a=>a.trim())):$e();return r.prefix||(r.prefix=U()),t.mask=r,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:r,main:a,mask:o,maskId:i,transform:s}=e;const{width:l,icon:c}=a,{width:f,icon:m}=o,u=Ha({transform:s,containerWidth:f,iconWidth:l}),d={tag:"rect",attributes:{...Xt,fill:"white"}},b=c.children?{children:c.children.map(yn)}:{},A={tag:"g",attributes:{...u.inner},children:[yn({tag:c.tag,attributes:{...c.attributes,...u.path},...b})]},h={tag:"g",attributes:{...u.outer},children:[A]},x="mask-".concat(i||ht()),P="clip-".concat(i||ht()),w={tag:"mask",attributes:{...Xt,id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"},children:[d,h]},k={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Vo(m)},w]};return n.push(k,{tag:"rect",attributes:{fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(x,")"),...Xt}}),{children:n,attributes:r}}}},Jo={provides(t){let e=!1;z.matchMedia&&(e=z.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:{...r,d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}});const o={...a,attributeName:"opacity"},i={tag:"circle",attributes:{...r,cx:"256",cy:"364",r:"28"},children:[]};return e||i.children.push({tag:"animate",attributes:{...a,attributeName:"r",values:"28;14;28;28;14;28;"}},{tag:"animate",attributes:{...o,values:"1;0;1;1;0;1;"}}),n.push(i),n.push({tag:"path",attributes:{...r,opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"},children:e?[]:[{tag:"animate",attributes:{...o,values:"1;0;0;0;0;1;"}}]}),e||n.push({tag:"path",attributes:{...r,opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"},children:[{tag:"animate",attributes:{...o,values:"0;0;1;1;0;0;"}}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},Qo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),r=n===null?!1:n===""?!0:n;return t.symbol=r,t}}}},Zo=[Va,jo,Ro,Lo,Do,Ho,Xo,qo,Ko,Jo,Qo];co(Zo,{mixoutsTo:C});C.noAuto;C.config;C.library;C.dom;const Ae=C.parse;C.findIconDefinition;C.toHtml;const ti=C.icon;C.layer;C.text;C.counter;var kr={exports:{}},ei="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ni=ei,ri=ni;function Ir(){}function Nr(){}Nr.resetWarningCache=Ir;var ai=function(){function t(r,a,o,i,s,l){if(l!==ri){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Nr,resetWarningCache:Ir};return n.PropTypes=n,n};kr.exports=ai();var oi=kr.exports;const y=ma(oi);function gn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?gn(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):gn(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function _t(t){"@babel/helpers - typeof";return _t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_t(t)}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ii(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,o;for(o=0;o<r.length;o++)a=r[o],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function si(t,e){if(t==null)return{};var n=ii(t,e),r,a;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function xe(t){return li(t)||ci(t)||fi(t)||ui()}function li(t){if(Array.isArray(t))return Pe(t)}function ci(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function fi(t,e){if(t){if(typeof t=="string")return Pe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pe(t,e)}}function Pe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function ui(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pi(t){var e,n=t.beat,r=t.fade,a=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,l=t.spin,c=t.spinPulse,f=t.spinReverse,m=t.pulse,u=t.fixedWidth,d=t.inverse,b=t.border,A=t.listItem,h=t.flip,x=t.size,P=t.rotation,w=t.pull,k=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":a,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":u,"fa-inverse":d,"fa-border":b,"fa-li":A,"fa-flip":h===!0,"fa-flip-horizontal":h==="horizontal"||h==="both","fa-flip-vertical":h==="vertical"||h==="both"},tt(e,"fa-".concat(x),typeof x<"u"&&x!==null),tt(e,"fa-rotate-".concat(P),typeof P<"u"&&P!==null&&P!==0),tt(e,"fa-pull-".concat(w),typeof w<"u"&&w!==null),tt(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(k).map(function(E){return k[E]?E:null}).filter(function(E){return E})}function mi(t){return t=t-0,t===t}function Cr(t){return mi(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var di=["style"];function yi(t){return t.charAt(0).toUpperCase()+t.slice(1)}function gi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Cr(n.slice(0,r)),o=n.slice(r+1).trim();return a.startsWith("webkit")?e[yi(a)]=o:e[a]=o,e},{})}function Tr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Tr(t,l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var f=e.attributes[c];switch(c){case"class":l.attrs.className=f,delete e.attributes.class;break;case"style":l.attrs.style=gi(f);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?l.attrs[c.toLowerCase()]=f:l.attrs[Cr(c)]=f}return l},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=si(n,di);return a.attrs.style=T(T({},a.attrs.style),i),t.apply(void 0,[e.tag,T(T({},a.attrs),s)].concat(xe(r)))}var Fr=!1;try{Fr=!0}catch{}function hi(){if(!Fr&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function hn(t){if(t&&_t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ae.icon)return Ae.icon(t);if(t===null)return null;if(t&&_t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function qt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?tt({},t,e):{}}var vn={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},$r=Vn.forwardRef(function(t,e){var n=T(T({},vn),t),r=n.icon,a=n.mask,o=n.symbol,i=n.className,s=n.title,l=n.titleId,c=n.maskId,f=hn(r),m=qt("classes",[].concat(xe(pi(n)),xe((i||"").split(" ")))),u=qt("transform",typeof n.transform=="string"?Ae.transform(n.transform):n.transform),d=qt("mask",hn(a)),b=ti(f,T(T(T(T({},m),u),d),{},{symbol:o,title:s,titleId:l,maskId:c}));if(!b)return hi("Could not find icon",f),null;var A=b.abstract,h={ref:e};return Object.keys(n).forEach(function(x){vn.hasOwnProperty(x)||(h[x]=n[x])}),vi(A[0],h)});$r.displayName="FontAwesomeIcon";$r.propTypes={beat:y.bool,border:y.bool,beatFade:y.bool,bounce:y.bool,className:y.string,fade:y.bool,flash:y.bool,mask:y.oneOfType([y.object,y.array,y.string]),maskId:y.string,fixedWidth:y.bool,inverse:y.bool,flip:y.oneOf([!0,!1,"horizontal","vertical","both"]),icon:y.oneOfType([y.object,y.array,y.string]),listItem:y.bool,pull:y.oneOf(["right","left"]),pulse:y.bool,rotation:y.oneOf([0,90,180,270]),shake:y.bool,size:y.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:y.bool,spinPulse:y.bool,spinReverse:y.bool,symbol:y.oneOfType([y.bool,y.string]),title:y.string,titleId:y.string,transform:y.oneOfType([y.string,y.object]),swapOpacity:y.bool};var vi=Tr.bind(null,Vn.createElement);const Dl={prefix:"fas",iconName:"circle-minus",icon:[512,512,["minus-circle"],"f056","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},zl={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},Ul={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},Bl={prefix:"fas",iconName:"text-slash",icon:[640,512,["remove-format"],"f87d","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L355.7 253.5 400.2 96 503 96 497 120.2c-4.3 17.1 6.1 34.5 23.3 38.8s34.5-6.1 38.8-23.3l11-44.1C577.6 61.3 554.7 32 523.5 32L376.1 32l-.3 0L204.5 32c-22 0-41.2 15-46.6 36.4l-6.3 25.2L38.8 5.1zm168 131.7c.1-.3 .2-.7 .3-1L217 96l116.7 0L301.3 210.8l-94.5-74.1zM243.3 416L192 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-42.2 0 17.6-62.1L272.9 311 243.3 416z"]},Wl={prefix:"fas",iconName:"arrows-to-dot",icon:[512,512,[],"e4be","M256 0c17.7 0 32 14.3 32 32l0 32 32 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-64 64c-12.5 12.5-32.8 12.5-45.3 0l-64-64c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l32 0 0-32c0-17.7 14.3-32 32-32zM169.4 393.4l64-64c12.5-12.5 32.8-12.5 45.3 0l64 64c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-32 0 0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32-32 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9zM32 224l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm297.4 54.6c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 32 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0 0 32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Gl={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Yl={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},bi={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Hl=bi,Xl={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},ql={prefix:"fas",iconName:"font",icon:[448,512,[],"f031","M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416 32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-1.8 0 18-48 159.6 0 18 48-1.8 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-25.8 0L254 52.8zM279.8 304l-111.6 0L224 155.1 279.8 304z"]},Vl={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},Kl={prefix:"fas",iconName:"ruler-combined",icon:[512,512,[],"f546","M.2 468.9C2.7 493.1 23.1 512 48 512l96 0 320 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-48 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-64 0 0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-64-80 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l80 0 0-48c0-26.5-21.5-48-48-48L48 0C21.5 0 0 21.5 0 48L0 368l0 96c0 1.7 .1 3.3 .2 4.9z"]},Jl={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},Ql={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Zl={prefix:"fas",iconName:"magnifying-glass-plus",icon:[512,512,["search-plus"],"f00e","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0 0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 64-64 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l64 0 0 64z"]},tc={prefix:"fas",iconName:"magnifying-glass-minus",icon:[512,512,["search-minus"],"f010","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]};var bn=Object.prototype.toString,_r=function(e){var n=bn.call(e),r=n==="[object Arguments]";return r||(r=n!=="[object Array]"&&e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&bn.call(e.callee)==="[object Function]"),r},Vt,An;function Ai(){if(An)return Vt;An=1;var t;if(!Object.keys){var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=_r,a=Object.prototype.propertyIsEnumerable,o=!a.call({toString:null},"toString"),i=a.call(function(){},"prototype"),s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],l=function(u){var d=u.constructor;return d&&d.prototype===u},c={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$onmozfullscreenchange:!0,$onmozfullscreenerror:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},f=function(){if(typeof window>"u")return!1;for(var u in window)try{if(!c["$"+u]&&e.call(window,u)&&window[u]!==null&&typeof window[u]=="object")try{l(window[u])}catch{return!0}}catch{return!0}return!1}(),m=function(u){if(typeof window>"u"||!f)return l(u);try{return l(u)}catch{return!1}};t=function(d){var b=d!==null&&typeof d=="object",A=n.call(d)==="[object Function]",h=r(d),x=b&&n.call(d)==="[object String]",P=[];if(!b&&!A&&!h)throw new TypeError("Object.keys called on a non-object");var w=i&&A;if(x&&d.length>0&&!e.call(d,0))for(var k=0;k<d.length;++k)P.push(String(k));if(h&&d.length>0)for(var E=0;E<d.length;++E)P.push(String(E));else for(var ct in d)!(w&&ct==="prototype")&&e.call(d,ct)&&P.push(String(ct));if(o)for(var ft=m(d),W=0;W<s.length;++W)!(ft&&s[W]==="constructor")&&e.call(d,s[W])&&P.push(s[W]);return P}}return Vt=t,Vt}var xi=Array.prototype.slice,Pi=_r,xn=Object.keys,Nt=xn?function(e){return xn(e)}:Ai(),Pn=Object.keys;Nt.shim=function(){if(Object.keys){var e=function(){var n=Object.keys(arguments);return n&&n.length===arguments.length}(1,2);e||(Object.keys=function(r){return Pi(r)?Pn(xi.call(r)):Pn(r)})}else Object.keys=Nt;return Object.keys||Nt};var Oi=Nt,Ct=Object.defineProperty||!1;if(Ct)try{Ct({},"a",{value:1})}catch{Ct=!1}var Ut=Ct,Mr=SyntaxError,st=TypeError,Si=Object.getOwnPropertyDescriptor,Tt=Si;if(Tt)try{Tt([],"length")}catch{Tt=null}var lt=Tt,On=Ut,wi=Mr,K=st,Sn=lt,Re=function(e,n,r){if(!e||typeof e!="object"&&typeof e!="function")throw new K("`obj` must be an object or a function`");if(typeof n!="string"&&typeof n!="symbol")throw new K("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new K("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new K("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new K("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new K("`loose`, if provided, must be a boolean");var a=arguments.length>3?arguments[3]:null,o=arguments.length>4?arguments[4]:null,i=arguments.length>5?arguments[5]:null,s=arguments.length>6?arguments[6]:!1,l=!!Sn&&Sn(e,n);if(On)On(e,n,{configurable:i===null&&l?l.configurable:!i,enumerable:a===null&&l?l.enumerable:!a,value:r,writable:o===null&&l?l.writable:!o});else if(s||!a&&!o&&!i)e[n]=r;else throw new wi("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Oe=Ut,jr=function(){return!!Oe};jr.hasArrayLengthDefineBug=function(){if(!Oe)return null;try{return Oe([],"length",{value:1}).length!==1}catch{return!0}};var Le=jr,Ei=Oi,ki=typeof Symbol=="function"&&typeof Symbol("foo")=="symbol",Ii=Object.prototype.toString,Ni=Array.prototype.concat,wn=Re,Ci=function(t){return typeof t=="function"&&Ii.call(t)==="[object Function]"},Rr=Le(),Ti=function(t,e,n,r){if(e in t){if(r===!0){if(t[e]===n)return}else if(!Ci(r)||!r())return}Rr?wn(t,e,n,!0):wn(t,e,n)},Lr=function(t,e){var n=arguments.length>2?arguments[2]:{},r=Ei(e);ki&&(r=Ni.call(r,Object.getOwnPropertySymbols(e)));for(var a=0;a<r.length;a+=1)Ti(t,r[a],e[r[a]],n[r[a]])};Lr.supportsDescriptors=!!Rr;var Pt=Lr,Dr={exports:{}},zr=Object,Ur=Error,Fi=EvalError,$i=RangeError,_i=ReferenceError,Mi=URIError,ji=Math.abs,Ri=Math.floor,Li=Math.max,Di=Math.min,zi=Math.pow,Ui=Math.round,Bi=Number.isNaN||function(e){return e!==e},Wi=Bi,Gi=function(e){return Wi(e)||e===0?e:e<0?-1:1},Br=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var e={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var a=42;e[n]=a;for(var o in e)return!1;if(typeof Object.keys=="function"&&Object.keys(e).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(e).length!==0)return!1;var i=Object.getOwnPropertySymbols(e);if(i.length!==1||i[0]!==n||!Object.prototype.propertyIsEnumerable.call(e,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var s=Object.getOwnPropertyDescriptor(e,n);if(s.value!==a||s.enumerable!==!0)return!1}return!0},En=typeof Symbol<"u"&&Symbol,Yi=Br,Hi=function(){return typeof En!="function"||typeof Symbol!="function"||typeof En("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:Yi()},Kt,kn;function Wr(){return kn||(kn=1,Kt=typeof Reflect<"u"&&Reflect.getPrototypeOf||null),Kt}var Jt,In;function Gr(){if(In)return Jt;In=1;var t=zr;return Jt=t.getPrototypeOf||null,Jt}var Qt,Nn;function Xi(){if(Nn)return Qt;Nn=1;var t="Function.prototype.bind called on incompatible ",e=Object.prototype.toString,n=Math.max,r="[object Function]",a=function(l,c){for(var f=[],m=0;m<l.length;m+=1)f[m]=l[m];for(var u=0;u<c.length;u+=1)f[u+l.length]=c[u];return f},o=function(l,c){for(var f=[],m=c,u=0;m<l.length;m+=1,u+=1)f[u]=l[m];return f},i=function(s,l){for(var c="",f=0;f<s.length;f+=1)c+=s[f],f+1<s.length&&(c+=l);return c};return Qt=function(l){var c=this;if(typeof c!="function"||e.apply(c)!==r)throw new TypeError(t+c);for(var f=o(arguments,1),m,u=function(){if(this instanceof m){var x=c.apply(this,a(f,arguments));return Object(x)===x?x:this}return c.apply(l,a(f,arguments))},d=n(0,c.length-f.length),b=[],A=0;A<d;A++)b[A]="$"+A;if(m=Function("binder","return function ("+i(b,",")+"){ return binder.apply(this,arguments); }")(u),c.prototype){var h=function(){};h.prototype=c.prototype,m.prototype=new h,h.prototype=null}return m},Qt}var Zt,Cn;function Ot(){if(Cn)return Zt;Cn=1;var t=Xi();return Zt=Function.prototype.bind||t,Zt}var te,Tn;function De(){return Tn||(Tn=1,te=Function.prototype.call),te}var ee,Fn;function ze(){return Fn||(Fn=1,ee=Function.prototype.apply),ee}var qi=typeof Reflect<"u"&&Reflect&&Reflect.apply,Vi=Ot(),Ki=ze(),Ji=De(),Qi=qi,Yr=Qi||Vi.call(Ji,Ki),Zi=Ot(),ts=st,es=De(),ns=Yr,Ue=function(e){if(e.length<1||typeof e[0]!="function")throw new ts("a function is required");return ns(Zi,es,e)},rs=Ue,$n=lt,Hr;try{Hr=[].__proto__===Array.prototype}catch(t){if(!t||typeof t!="object"||!("code"in t)||t.code!=="ERR_PROTO_ACCESS")throw t}var ne=!!Hr&&$n&&$n(Object.prototype,"__proto__"),Xr=Object,_n=Xr.getPrototypeOf,as=ne&&typeof ne.get=="function"?rs([ne.get]):typeof _n=="function"?function(e){return _n(e==null?e:Xr(e))}:!1,Mn=Wr(),jn=Gr(),Rn=as,qr=Mn?function(e){return Mn(e)}:jn?function(e){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("getProto: not an object");return jn(e)}:Rn?function(e){return Rn(e)}:null,os=Function.prototype.call,is=Object.prototype.hasOwnProperty,ss=Ot(),Vr=ss.call(os,is),g,ls=zr,cs=Ur,fs=Fi,us=$i,ps=_i,ot=Mr,nt=st,ms=Mi,ds=ji,ys=Ri,gs=Li,hs=Di,vs=zi,bs=Ui,As=Gi,Kr=Function,re=function(t){try{return Kr('"use strict"; return ('+t+").constructor;")()}catch{}},vt=lt,xs=Ut,ae=function(){throw new nt},Ps=vt?function(){try{return arguments.callee,ae}catch{try{return vt(arguments,"callee").get}catch{return ae}}}():ae,J=Hi(),S=qr,Os=Gr(),Ss=Wr(),Jr=ze(),St=De(),Q={},ws=typeof Uint8Array>"u"||!S?g:S(Uint8Array),X={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?g:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?g:ArrayBuffer,"%ArrayIteratorPrototype%":J&&S?S([][Symbol.iterator]()):g,"%AsyncFromSyncIteratorPrototype%":g,"%AsyncFunction%":Q,"%AsyncGenerator%":Q,"%AsyncGeneratorFunction%":Q,"%AsyncIteratorPrototype%":Q,"%Atomics%":typeof Atomics>"u"?g:Atomics,"%BigInt%":typeof BigInt>"u"?g:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?g:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?g:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?g:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":cs,"%eval%":eval,"%EvalError%":fs,"%Float32Array%":typeof Float32Array>"u"?g:Float32Array,"%Float64Array%":typeof Float64Array>"u"?g:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?g:FinalizationRegistry,"%Function%":Kr,"%GeneratorFunction%":Q,"%Int8Array%":typeof Int8Array>"u"?g:Int8Array,"%Int16Array%":typeof Int16Array>"u"?g:Int16Array,"%Int32Array%":typeof Int32Array>"u"?g:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":J&&S?S(S([][Symbol.iterator]())):g,"%JSON%":typeof JSON=="object"?JSON:g,"%Map%":typeof Map>"u"?g:Map,"%MapIteratorPrototype%":typeof Map>"u"||!J||!S?g:S(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":ls,"%Object.getOwnPropertyDescriptor%":vt,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?g:Promise,"%Proxy%":typeof Proxy>"u"?g:Proxy,"%RangeError%":us,"%ReferenceError%":ps,"%Reflect%":typeof Reflect>"u"?g:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?g:Set,"%SetIteratorPrototype%":typeof Set>"u"||!J||!S?g:S(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?g:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":J&&S?S(""[Symbol.iterator]()):g,"%Symbol%":J?Symbol:g,"%SyntaxError%":ot,"%ThrowTypeError%":Ps,"%TypedArray%":ws,"%TypeError%":nt,"%Uint8Array%":typeof Uint8Array>"u"?g:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?g:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?g:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?g:Uint32Array,"%URIError%":ms,"%WeakMap%":typeof WeakMap>"u"?g:WeakMap,"%WeakRef%":typeof WeakRef>"u"?g:WeakRef,"%WeakSet%":typeof WeakSet>"u"?g:WeakSet,"%Function.prototype.call%":St,"%Function.prototype.apply%":Jr,"%Object.defineProperty%":xs,"%Object.getPrototypeOf%":Os,"%Math.abs%":ds,"%Math.floor%":ys,"%Math.max%":gs,"%Math.min%":hs,"%Math.pow%":vs,"%Math.round%":bs,"%Math.sign%":As,"%Reflect.getPrototypeOf%":Ss};if(S)try{null.error}catch(t){var Es=S(S(t));X["%Error.prototype%"]=Es}var ks=function t(e){var n;if(e==="%AsyncFunction%")n=re("async function () {}");else if(e==="%GeneratorFunction%")n=re("function* () {}");else if(e==="%AsyncGeneratorFunction%")n=re("async function* () {}");else if(e==="%AsyncGenerator%"){var r=t("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(e==="%AsyncIteratorPrototype%"){var a=t("%AsyncGenerator%");a&&S&&(n=S(a.prototype))}return X[e]=n,n},Ln={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},wt=Ot(),Mt=Vr,Is=wt.call(St,Array.prototype.concat),Ns=wt.call(Jr,Array.prototype.splice),Dn=wt.call(St,String.prototype.replace),jt=wt.call(St,String.prototype.slice),Cs=wt.call(St,RegExp.prototype.exec),Ts=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Fs=/\\(\\)?/g,$s=function(e){var n=jt(e,0,1),r=jt(e,-1);if(n==="%"&&r!=="%")throw new ot("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new ot("invalid intrinsic syntax, expected opening `%`");var a=[];return Dn(e,Ts,function(o,i,s,l){a[a.length]=s?Dn(l,Fs,"$1"):i||o}),a},_s=function(e,n){var r=e,a;if(Mt(Ln,r)&&(a=Ln[r],r="%"+a[0]+"%"),Mt(X,r)){var o=X[r];if(o===Q&&(o=ks(r)),typeof o>"u"&&!n)throw new nt("intrinsic "+e+" exists, but is not available. Please file an issue!");return{alias:a,name:r,value:o}}throw new ot("intrinsic "+e+" does not exist!")},Be=function(e,n){if(typeof e!="string"||e.length===0)throw new nt("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new nt('"allowMissing" argument must be a boolean');if(Cs(/^%?[^%]*%?$/,e)===null)throw new ot("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var r=$s(e),a=r.length>0?r[0]:"",o=_s("%"+a+"%",n),i=o.name,s=o.value,l=!1,c=o.alias;c&&(a=c[0],Ns(r,Is([0,1],c)));for(var f=1,m=!0;f<r.length;f+=1){var u=r[f],d=jt(u,0,1),b=jt(u,-1);if((d==='"'||d==="'"||d==="`"||b==='"'||b==="'"||b==="`")&&d!==b)throw new ot("property names with quotes must have matching quotes");if((u==="constructor"||!m)&&(l=!0),a+="."+u,i="%"+a+"%",Mt(X,i))s=X[i];else if(s!=null){if(!(u in s)){if(!n)throw new nt("base intrinsic for "+e+" exists, but the property is not available.");return}if(vt&&f+1>=r.length){var A=vt(s,u);m=!!A,m&&"get"in A&&!("originalValue"in A.get)?s=A.get:s=s[u]}else m=Mt(s,u),s=s[u];m&&!l&&(X[i]=s)}}return s},Ms=Be,zn=Re,js=Le(),Un=lt,Bn=st,Rs=Ms("%Math.floor%"),Ls=function(e,n){if(typeof e!="function")throw new Bn("`fn` is not a function");if(typeof n!="number"||n<0||n>4294967295||Rs(n)!==n)throw new Bn("`length` must be a positive 32-bit integer");var r=arguments.length>2&&!!arguments[2],a=!0,o=!0;if("length"in e&&Un){var i=Un(e,"length");i&&!i.configurable&&(a=!1),i&&!i.writable&&(o=!1)}return(a||o||!r)&&(js?zn(e,"length",n,!0,!0):zn(e,"length",n)),e},Ds=Ot(),zs=ze(),Us=Yr,Bs=function(){return Us(Ds,zs,arguments)};(function(t){var e=Ls,n=Ut,r=Ue,a=Bs;t.exports=function(i){var s=r(arguments),l=i.length-(arguments.length-1);return e(s,1+(l>0?l:0),!0)},n?n(t.exports,"apply",{value:a}):t.exports.apply=a})(Dr);var We=Dr.exports,Qr=Be,Zr=Ue,Ws=Zr([Qr("%String.prototype.indexOf%")]),ta=function(e,n){var r=Qr(e,!!n);return typeof r=="function"&&Ws(e,".prototype.")>-1?Zr([r]):r},ea=Be,na=We,Gs=na(ea("String.prototype.indexOf")),Ys=function(e,n){var r=ea(e,!!n);return typeof r=="function"&&Gs(e,".prototype.")>-1?na(r):r},bt=function(){return typeof(function(){}).name=="string"},yt=Object.getOwnPropertyDescriptor;if(yt)try{yt([],"length")}catch{yt=null}bt.functionsHaveConfigurableNames=function(){if(!bt()||!yt)return!1;var e=yt(function(){},"name");return!!e&&!!e.configurable};var Hs=Function.prototype.bind;bt.boundFunctionsHaveNames=function(){return bt()&&typeof Hs=="function"&&(function(){}).bind().name!==""};var Xs=bt,Wn=Re,qs=Le(),Vs=Xs.functionsHaveConfigurableNames(),Ks=st,Js=function(e,n){if(typeof e!="function")throw new Ks("`fn` is not a function");var r=arguments.length>2&&!!arguments[2];return(!r||Vs)&&(qs?Wn(e,"name",n,!0,!0):Wn(e,"name",n)),e},Qs=Js,Zs=st,tl=Object,ra=Qs(function(){if(this==null||this!==tl(this))throw new Zs("RegExp.prototype.flags getter called on non-object");var e="";return this.hasIndices&&(e+="d"),this.global&&(e+="g"),this.ignoreCase&&(e+="i"),this.multiline&&(e+="m"),this.dotAll&&(e+="s"),this.unicode&&(e+="u"),this.unicodeSets&&(e+="v"),this.sticky&&(e+="y"),e},"get flags",!0),el=ra,nl=Pt.supportsDescriptors,rl=Object.getOwnPropertyDescriptor,aa=function(){if(nl&&/a/mig.flags==="gim"){var e=rl(RegExp.prototype,"flags");if(e&&typeof e.get=="function"&&"dotAll"in RegExp.prototype&&"hasIndices"in RegExp.prototype){var n="",r={};if(Object.defineProperty(r,"hasIndices",{get:function(){n+="d"}}),Object.defineProperty(r,"sticky",{get:function(){n+="y"}}),e.get.call(r),n==="dy")return e.get}}return el},al=Pt.supportsDescriptors,ol=aa,il=lt,sl=Object.defineProperty,ll=Ur,Gn=qr,cl=/a/,fl=function(){if(!al||!Gn)throw new ll("RegExp.prototype.flags requires a true ES5 environment that supports property descriptors");var e=ol(),n=Gn(cl),r=il(n,"flags");return(!r||r.get!==e)&&sl(n,"flags",{configurable:!0,enumerable:!1,get:e}),e},ul=Pt,pl=We,ml=ra,oa=aa,dl=fl,ia=pl(oa());ul(ia,{getPolyfill:oa,implementation:ml,shim:dl});var ec=ia,yl=Br,Ge=function(){return yl()&&!!Symbol.toStringTag},gl=Ge(),hl=Ys,Se=hl("Object.prototype.toString"),Bt=function(e){return gl&&e&&typeof e=="object"&&Symbol.toStringTag in e?!1:Se(e)==="[object Arguments]"},sa=function(e){return Bt(e)?!0:e!==null&&typeof e=="object"&&typeof e.length=="number"&&e.length>=0&&Se(e)!=="[object Array]"&&Se(e.callee)==="[object Function]"},vl=function(){return Bt(arguments)}();Bt.isLegacyArguments=sa;var nc=vl?Bt:sa,Yn=function(t){return t!==t},la=function(e,n){return e===0&&n===0?1/e===1/n:!!(e===n||Yn(e)&&Yn(n))},bl=la,ca=function(){return typeof Object.is=="function"?Object.is:bl},Al=ca,xl=Pt,Pl=function(){var e=Al();return xl(Object,{is:e},{is:function(){return Object.is!==e}}),e},Ol=Pt,Sl=We,wl=la,fa=ca,El=Pl,ua=Sl(fa(),Object);Ol(ua,{getPolyfill:fa,implementation:wl,shim:El});var rc=ua,pa=ta,kl=pa("Date.prototype.getDay"),Il=function(e){try{return kl(e),!0}catch{return!1}},Nl=pa("Object.prototype.toString"),Cl="[object Date]",Tl=Ge(),ac=function(e){return typeof e!="object"||e===null?!1:Tl?Il(e):Nl(e)===Cl},Hn=ta,Fl=Ge(),$l=Vr,_l=lt,we;if(Fl){var Ml=Hn("RegExp.prototype.exec"),Xn={},oe=function(){throw Xn},qn={toString:oe,valueOf:oe};typeof Symbol.toPrimitive=="symbol"&&(qn[Symbol.toPrimitive]=oe),we=function(e){if(!e||typeof e!="object")return!1;var n=_l(e,"lastIndex"),r=n&&$l(n,"value");if(!r)return!1;try{Ml(e,qn)}catch(a){return a===Xn}}}else{var jl=Hn("Object.prototype.toString"),Rl="[object RegExp]";we=function(e){return!e||typeof e!="object"&&typeof e!="function"?!1:jl(e)===Rl}}var oc=we;export{Hl as A,Kl as B,Yl as C,Gl as D,Ul as E,$r as F,ql as G,Bl as H,oi as I,zl as J,y as P,We as a,Ge as b,ta as c,Pt as d,zr as e,Hi as f,Be as g,Vr as h,Ys as i,nc as j,oc as k,lt as l,rc as m,ac as n,Oi as o,Zl as p,tc as q,ec as r,Br as s,st as t,Jl as u,Dl as v,Vl as w,Xl as x,Ql as y,Wl as z};
