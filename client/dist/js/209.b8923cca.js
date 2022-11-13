(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[209],{96428:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});n(26699);var i,s=n(66210),a=n(46952),r=n(19131),o=n(48085),l=n(4589),c=n(20144),p=n(73325);function d(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function u(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(i||(i={}));const h=(0,p.Z)(s.Z,a.Z,r.Z,o.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,l.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,l.XP)(e).find((t=>e[t]));return t&&i[t]||(0,l.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],i=this.getDefaultData();let s="material-icons";const a=e.indexOf("-"),r=a<=-1;r?n.push(e):(s=e.slice(0,a),d(s)&&(s="")),i.class[s]=!0,i.class[e]=!r;const o=this.getSize();return o&&(i.style={fontSize:o}),this.applyColors(i),t(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const s=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(s,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?u(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var m=c.Z.extend({name:"v-icon",$_wrapperFor:h,functional:!0,render(e,{data:t,children:n}){let i="";return t.domProps&&(i=t.domProps.textContent||t.domProps.innerHTML||i,delete t.domProps.textContent,delete t.domProps.innerHTML),e(h,t,i?[i]:n)}})},69798:function(e,t,n){"use strict";var i=n(96428);t["Z"]=i.Z},24622:function(e,t,n){"use strict";n.d(t,{y:function(){return l}});var i=n(34419),s=n(41431),a=n(48085),r=n(73325),o=n(71824);const l=(0,r.Z)(i.Z,s.Z,a.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((e,t)=>this.toggleMethod(this.getValue(e,t))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some((e=>this.valueComparator(e,t))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,o.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",(()=>this.onClick(e))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((e=>e!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const n=t.find((e=>!e.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),i=n.findIndex((t=>t===e));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(e),this.internalValue=n)},updateSingle(e){const t=e===this.internalValue;this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});l.extend({name:"v-item-group",provide(){return{itemGroup:this}}})},85827:function(e,t,n){"use strict";n.d(t,{Fx:function(){return h},Zq:function(){return m},Z5:function(){return d},Qn:function(){return u},YV:function(){return p},n6:function(){return c}});var i=n(76290);function s(e=[],...t){return Array().concat(e,...t)}function a(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const a="transition"+(n.props.group?"-group":""),r={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(r.on.leave=s(r.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:s}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=i+"px",e.style.height=s+"px"})),r.on.afterLeave=s(r.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:i,width:s,height:a}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=i||"",e.style.width=s||"",e.style.height=a||""}}))),n.props.hideOnLeave&&(r.on.leave=s(r.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(a,(0,i.ZP)(n.data,r),n.children)}}}function r(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,s){return n("transition",(0,i.ZP)(s.data,{props:{name:e},on:t}),s.children)}}}var o=n(4589);function l(e="",t=!1){const n=t?"width":"height",i=`offset${(0,o.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const s=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const a=`${t[i]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=s.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=a}))},afterEnter:a,enterCancelled:a,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[i]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:s,leaveCancelled:s};function s(t){e&&t._parent&&t._parent.classList.remove(e),a(t)}function a(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}a("carousel-transition"),a("carousel-reverse-transition");const c=a("tab-transition"),p=a("tab-reverse-transition"),d=(a("menu-transition"),a("fab-transition","center center","out-in"),a("dialog-transition"),a("dialog-bottom-transition"),a("dialog-top-transition"),a("fade-transition")),u=(a("scale-transition"),a("scroll-x-transition"),a("scroll-x-reverse-transition"),a("scroll-y-transition"),a("scroll-y-reverse-transition"),a("slide-x-transition")),h=(a("slide-x-reverse-transition"),a("slide-y-transition"),a("slide-y-reverse-transition"),r("expand-transition",l())),m=r("expand-x-transition",l("",!0))},46286:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var i=n(4589);const s=80;function a(e,t){e.style.transform=t,e.style.webkitTransform=t}function r(e){return"TouchEvent"===e.constructor.name}function o(e){return"KeyboardEvent"===e.constructor.name}const l=(e,t,n={})=>{let i=0,s=0;if(!o(e)){const n=t.getBoundingClientRect(),a=r(e)?e.touches[e.touches.length-1]:e;i=a.clientX-n.left,s=a.clientY-n.top}let a=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((i-a)**2+(s-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const c=(t.clientWidth-2*a)/2+"px",p=(t.clientHeight-2*a)/2+"px",d=n.center?c:i-a+"px",u=n.center?p:s-a+"px";return{radius:a,scale:l,x:d,y:u,centerX:c,centerY:p}},c={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const i=document.createElement("span"),s=document.createElement("span");i.appendChild(s),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:r,scale:o,x:c,y:p,centerX:d,centerY:u}=l(e,t,n),h=2*r+"px";s.className="v-ripple__animation",s.style.width=h,s.style.height=h,t.appendChild(i);const m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),a(s,`translate(${c}, ${p}) scale3d(${o},${o},${o})`),s.dataset.activated=String(performance.now()),setTimeout((()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),a(s,`translate(${d}, ${u}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),s=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{const t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),s)}};function p(e){return"undefined"===typeof e||!!e}function d(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,r(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||o(e),n._ripple.class&&(t.class=n._ripple.class),r(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{c.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),s)}else c.show(e,n,t)}}function u(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{u(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),c.hide(t)}}function h(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let m=!1;function v(e){m||e.keyCode!==i.Do.enter&&e.keyCode!==i.Do.space||(m=!0,d(e))}function f(e){m=!1,u(e)}function g(e){!0===m&&(m=!1,u(e))}function y(e,t,n){const i=p(t.value);i||c.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;const s=t.value||{};s.center&&(e._ripple.centered=!0),s.class&&(e._ripple.class=t.value.class),s.circle&&(e._ripple.circle=s.circle),i&&!n?(e.addEventListener("touchstart",d,{passive:!0}),e.addEventListener("touchend",u,{passive:!0}),e.addEventListener("touchmove",h,{passive:!0}),e.addEventListener("touchcancel",u),e.addEventListener("mousedown",d),e.addEventListener("mouseup",u),e.addEventListener("mouseleave",u),e.addEventListener("keydown",v),e.addEventListener("keyup",f),e.addEventListener("blur",g),e.addEventListener("dragstart",u,{passive:!0})):!i&&n&&x(e)}function x(e){e.removeEventListener("mousedown",d),e.removeEventListener("touchstart",d),e.removeEventListener("touchend",u),e.removeEventListener("touchmove",h),e.removeEventListener("touchcancel",u),e.removeEventListener("mouseup",u),e.removeEventListener("mouseleave",u),e.removeEventListener("keydown",v),e.removeEventListener("keyup",f),e.removeEventListener("dragstart",u),e.removeEventListener("blur",g)}function b(e,t,n){y(e,t,!1)}function k(e){delete e._ripple,x(e)}function C(e,t){if(t.value===t.oldValue)return;const n=p(t.oldValue);y(e,t,n)}const _={bind:b,unbind:k,update:C};var w=_},66210:function(e,t,n){"use strict";var i=n(20144);function s(e){return function(t,n){for(const i in n)Object.prototype.hasOwnProperty.call(t,i)||this.$delete(this.$data[e],i);for(const i in t)this.$set(this.$data[e],i,t[i])}}t["Z"]=i.Z.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",s("attrs$"),{immediate:!0}),this.$watch("$listeners",s("listeners$"),{immediate:!0})}})},88625:function(e,t,n){"use strict";var i=n(71824),s=n(20144);t["Z"]=s.Z.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},46952:function(e,t,n){"use strict";var i=n(20144),s=n(71824),a=n(17093);t["Z"]=i.Z.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,s.N6)("style must be an object",this),t):"string"===typeof t.class?((0,s.N6)("class must be an object",this),t):((0,a.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,s.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,s.N6)("class must be an object",this),t;if((0,a.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,i]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},i&&(t.class["text--"+i]=!0)}return t}}})},34419:function(e,t,n){"use strict";var i=n(20144),s=n(4589);t["Z"]=i.Z.extend({name:"comparable",props:{valueComparator:{type:Function,default:s.vZ}}})},17352:function(e,t,n){"use strict";n.d(t,{d:function(){return s}});var i=n(96257);function s(e,t,n){return(0,i.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}s("itemGroup")},41431:function(e,t,n){"use strict";var i=n(20144);function s(e="value",t="change"){return i.Z.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const a=s();t["Z"]=a},96257:function(e,t,n){"use strict";n.d(t,{J:function(){return o},f:function(){return r}});var i=n(20144),s=n(71824);function a(e,t){return()=>(0,s.Kd)(`The ${e} component must be used inside a ${t}`)}function r(e,t,n){const s=t&&n?{register:a(t,n),unregister:a(t,n)}:null;return i.Z.extend({name:"registrable-inject",inject:{[e]:{default:s}}})}function o(e,t=!1){return i.Z.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},19131:function(e,t,n){"use strict";var i=n(20144);t["Z"]=i.Z.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},48085:function(e,t,n){"use strict";n.d(t,{X:function(){return a}});var i=n(20144);const s=i.Z.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function a(e){const t={...e.props,...e.injections},n=s.options.computed.isDark.call(t);return s.options.computed.themeClasses.call({isDark:n})}t["Z"]=s},76290:function(e,t,n){"use strict";n.d(t,{ZP:function(){return r},ze:function(){return l}});var i=n(4589);const s={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function a(e){const t={};for(const n of e.split(s.styleList)){let[e,a]=n.split(s.styleProp);e=e.trim(),e&&("string"===typeof a&&(a=a.trim()),t[(0,i._A)(e)]=a)}return t}function r(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=l(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=o(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function o(e,t){return e?t?(e=(0,i.TI)("string"===typeof e?a(e):e),e.concat("string"===typeof t?a(t):t)):e:t}function l(e,t){return t?e&&e?(0,i.TI)(e).concat(t):t:e}function c(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const i=e[n];for(const e in i)i[e]&&(t[e]?t[e]=[].concat(i[e],t[e]):t[e]=i[e])}return t}},73325:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(20144);function s(...e){return i.Z.extend({mixins:e})}},44209:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"container "},[n("br"),n("br"),n("br"),n("h1",[e._v("Información acerca del funcionamiento de la trazabililidad Vinos Ambrosia")]),n("br"),n("v-expansion-panels",{attrs:{accordion:""}},e._l(e.preguntas,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",{staticStyle:{"font-size":"18px"}},[e._v(e._s(i+1)+". "+e._s(t.titulo)+" ")]),n("v-expansion-panel-content",{staticStyle:{color:"grey","padding-left":"20px","text-align":"start","font-size":"15px"}},[n("div",{domProps:{innerHTML:e._s(t.cuerpo)}})])],1)})),1)],1)},s=[],a={name:"Inicio_Informacion",components:{},data:()=>({preguntas:[{titulo:"¿Qué es Metamask?",cuerpo:"MetaMask es una aplicación (extensión web o app móvil) \n                que permite administrar las claves privadas de Ethereum a través de su navegador web. \n                Al hacerlo, se convierte en una billetera para tokens Ether y ERC-20."},{titulo:"¿Cómo instalar Metamasken Chrome?",cuerpo:'\n                <ol>\n                    <li>Visita <a href="https://metamask.io/" target="_blank">https://metamask.io/</a>.</li>\n                    <li>Haz clic en “Descargar”.</li>\n                    <li>Haz clic en “Instalar MetaMask”. Se te dirigirá a la extensión de Chrome Web Store.</li>\n                    <li>Haz clic en “Agregar a Chrome”.</li>\n                    <li>En la ventana emergente, haz clic en “Agregar extensión”.</li>\n                </ol>\n                <p>Después de agregar la extensión de MetaMask a tu navegador basado en Chrome, \n                    el icono de MetaMask va aparecer en la bara de tu navegador y \n                    puedes hacer Clic sobre él para abrir la billetera de MetaMask./p>\n                '},{titulo:"¿Cómo agregar Sepolia Testnet Network a Metamask ?",cuerpo:'\n                <ol>\n                    <li>Visita <a href="https://sepolia.dev" target="_blank">\n                        https://sepolia.dev</a> página oficial.</li>\n                    <li>Hacer click en "+ ADD TO METAMASk"</li>\n                    <li>Se agregará a la lista de redes en Metamask</li>\n                    <p style="font-size: 12px;"> \n                             Nombre de la red: Sepolia test network\n                        <br/>Nueva dirección URL de RPC: https://sepolia.infura.io/v3/\n                        <br/>Identificador de cadena: 11155111\n                        <br/>Símbolo de moneda: SepoliaETH\n                        <br/>Dirección URL del explorador de bloques(Opcional): https://sepolia.etherscan.io\n                    </p>\n                </ol>\n                '},{titulo:"¿Cómo obtener ETHERS en Sepolia Testnet Network ?",cuerpo:'\n                <ol>\n                    <li>Visita <a href="https://faucet.sepolia.dev" target="_blank">\n                        https://faucet.sepolia.dev</a>.</li>\n                    <li>Abrir Metamask</li>\n                    <li>Copiar dirección de wallet(billetera)</li>\n                    <li>Pegar en el formulario de sepolia</li>\n                    <li>Lennar el Captcha</li>\n                    <li>Hacer click en "Request funds"</li>\n                    \n                    <p style="font-size: 12px;">Nota: Se enviaran fondos a tu wallet(billetera) \n                    en caso de necesitar mas fondos repetir el proceso después de 60 minutos.</p>\n                </ol>\n                '},{titulo:"¿Para qué me sirve la Trazabilidad Vinos Ambrosia (TVA)?",cuerpo:'TVA es las siglas de "Trazabilidad Vinos Ambrosia" siendo un sistema que permite controlar la trazabilidad de los\n                7 procesos mas importantes durante la cadena de suministro de producción de vinos tales como: \n                    <ol>\n                        <li>Materia Prima</li>\n                        <li>Extracción del mosto</li>\n                        <li>Pasteurización</li>\n                        <li>Fermentación</li>\n                        <li>Clarificación</li>\n                        <li>Trasiego</li>\n                        <li>Envasado</li>\n                    </ol>\n                    <p>Esto permite tener control de cada una de las botellas producidas con un hash único \n                    que informa al cliente final de toda la trazabilidad perteneciente a la botella comprada</p>\n                '},{titulo:"¿Qué es TVA Token?",cuerpo:'\n                    TVA Token es las siglas de "Trazabilidad Vinos Ambrosia" es un smart contract que \n                    cuenta con una estructura de datos ya preestablecida. Esta estructura está pensada en \n                    facilitar la implementación de diversas funcionalidades sobre la blockchain de Ethereum. <br>\n                    Cada vez que un consumidor de vinos Ambrosia compre una botella de vino tendra la capacidad \n                    de leer el codigo qr, y en recompensa se le asignará una única vez un token denominado \n                    <b>TVA Token</b> con el cual podra guardar en su billetera Metamask.\n                '},{titulo:"¿Puedo recibir mas de un TVA token por botella?",cuerpo:"\n                    Una vez que se haya asignado el TVA token de la botella al usuario, ya no habrá la posibilidad \n                    que se vuelva asignar otro token por la misma botella. \n                "},{titulo:"¿Cómo importar TVA Token a mi billetera Metamask?",cuerpo:'\n                    Se debe llevar a cabo los siguientes procesos.\n                    <ol>\n                        <li>Abrir la extexión Metamask</li>\n                        <li>Hacer click en Agregar Activo</li>\n                        <li>Escribir la dirección de contrato:\n                            <a href="https://sepolia.etherscan.io/tx/0xD00FFdD650264c2EB04b1A065C1405f09afCba92" \n                            data-wpel-link="external" target="_blank" rel="nofollow external noopener noreferrer">\n                            0xD00FFdD650264c2EB04b1A065C1405f09afCba92</a>.\n                            </li>\n                        <li>Hacer click en añadir token personalizado</li>\n                    </ol>\n                    Listo podrás ver los tokens que se te hayan asignado en recompensa de comprar tu botella\n                '}]})},r=a,o=n(1001),l=n(43453),c=n.n(l),p=n(17352),d=n(96257),u=n(4589),h=n(73325),m=(0,h.Z)((0,p.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,d.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,u.z9)(this))}}),v=n(85827),f=n(88625),g=n(46952);const y=(0,h.Z)(f.Z,g.Z,(0,d.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));var x=y.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(v.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,u.z9)(this))])])))}}),b=n(69798),k=n(46286);const C=(0,h.Z)(g.Z,(0,d.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));var _=C.extend().extend({name:"v-expansion-panel-header",directives:{ripple:k.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,u.z9)(this,"actions")||[this.$createElement(b.Z,this.expandIcon)];return this.$createElement(v.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,u.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),w=n(24622),A=n(71824),S=w.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...w.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,A.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,A.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}}),L=(0,o.Z)(r,i,s,!1,null,null,null),T=L.exports;c()(L,{VExpansionPanel:m,VExpansionPanelContent:x,VExpansionPanelHeader:_,VExpansionPanels:S})},43453:function(e){e.exports=function(e,t){var n="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var i in"function"===typeof e.exports&&(n.components=e.exports.options.components),n.components=n.components||{},t)n.components[i]=n.components[i]||t[i]}}}]);
//# sourceMappingURL=209.b8923cca.js.map