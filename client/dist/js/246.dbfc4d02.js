"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[246],{60426:function(t,e,i){i.d(e,{Z:function(){return b}});var s=i(83385),r=i(97047),o=i(4589),n=i(71824),a=s.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const t=this.computedContentHeight;if(!this.isExtended)return t;const e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...s.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,o.kb)(this.computedHeight)}}},created(){const t=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];t.forEach((([t,e])=>{this.$attrs.hasOwnProperty(t)&&(0,n.fK)(t,e,this)}))},methods:{genBackground(){const t={height:(0,o.kb)(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(r.Z,{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,o.kb)(this.computedContentHeight)}},(0,o.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,o.kb)(this.extensionHeight)}},(0,o.z9)(this,"extension"))}},render(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;const e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}});function l(t,e,i){const{self:s=!1}=e.modifiers||{},r=e.value,o="object"===typeof r&&r.options||{passive:!0},n="function"===typeof r||"handleEvent"in r?r:r.handler,a=s?t:e.arg?document.querySelector(e.arg):window;a&&(a.addEventListener("scroll",n,o),t._onScroll=Object(t._onScroll),t._onScroll[i.context._uid]={handler:n,options:o,target:s?void 0:a})}function c(t,e,i){var s;if(null==(s=t._onScroll)||!s[i.context._uid])return;const{handler:r,options:o,target:n=t}=t._onScroll[i.context._uid];n.removeEventListener("scroll",r,o),delete t._onScroll[i.context._uid]}const h={inserted:l,unbind:c};var d=h,p=i(3358),u=i(20144),m=u.Z.extend({name:"scrollable",directives:{Scroll:h},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,n.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),g=i(39177),v=i(2936),S=i(73325);const f=(0,S.Z)(a,m,g.Z,v.Z,(0,p.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var b=f.extend({name:"v-app-bar",directives:{Scroll:d},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return m.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...a.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight(){if(!this.shrinkOnScroll)return a.options.computed.computedContentHeight.call(this);const t=this.dense?48:56,e=this.computedOriginalHeight;return t+(e-t)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const t=1.25,e=1.5;return t+(e-t)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let t=a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:a.options.computed.isCollapsed.call(this)},isProminent(){return a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...a.options.computed.styles.call(this),fontSize:(0,o.kb)(this.computedFontSize,"rem"),marginTop:(0,o.kb)(this.computedMarginTop),transform:`translateY(${(0,o.kb)(this.computedTransform)})`,left:(0,o.kb)(this.computedLeft),right:(0,o.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const t=a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(t){const e=a.options.render.call(this,t);return e.data=e.data||{},this.canScroll&&(e.data.directives=e.data.directives||[],e.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),e}})},17524:function(t,e,i){i.d(e,{Z:function(){return o}});i(21703);var s=i(48085),r=i(73325),o=(0,r.Z)(s.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(t){const e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},30899:function(t,e,i){i.d(e,{Z:function(){return l}});var s=i(83385),r=i(3358),o=i(39177),n=i(73325),a=i(4589),l=(0,n.Z)(s.Z,(0,r.Z)("footer",["height","inset"]),o.Z).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty(){return this.inset?"insetFooter":"footer"},classes(){return{...s.Z.options.computed.classes.call(this),"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset}},computedBottom(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned(){return Boolean(this.absolute||this.fixed||this.app)},styles(){const t=parseInt(this.height);return{...s.Z.options.computed.styles.call(this),height:isNaN(t)?t:(0,a.kb)(t),left:(0,a.kb)(this.computedLeft),right:(0,a.kb)(this.computedRight),bottom:(0,a.kb)(this.computedBottom)}}},methods:{updateApplication(){const t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render(t){const e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},99762:function(t,e,i){i(68582);var s=i(4589);e["Z"]=(0,s.Ji)("spacer","div","v-spacer")},97047:function(t,e,i){i.d(e,{Z:function(){return u}});var s=i(68083),r=i(42529),o=i(73325),n=i(4589),a=(0,o.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,n.z9)(this))}},render(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),l=a,c=i(48085),h=i(76290),d=i(71824);const p="undefined"!==typeof window&&"IntersectionObserver"in window;var u=(0,o.Z)(l,c.Z).extend({name:"v-img",directives:{intersect:s.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push(`linear-gradient(${this.gradient})`),e&&t.push(`url("${e}")`);const i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(t,e,i){if(!p||i||this.eager){if(this.normalisedSrc.lazySrc){const t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const t=new Image;this.image=t,t.onload=()=>{t.decode?t.decode().catch((t=>{(0,d.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(t.message?`\nOriginal error: ${t.message}`:""),this)})).then(this.onLoad):this.onLoad()},t.onerror=this.onError,this.hasError=!1,this.sizes&&(t.sizes=this.sizes),this.normalisedSrc.srcset&&(t.srcset=this.normalisedSrc.srcset),t.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(t),this.getSrc()},pollForSize(t,e=100){const i=()=>{const{naturalHeight:s,naturalWidth:r}=t;s||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/s):t.complete||!this.isLoading||this.hasError||null==e||setTimeout(i,e)};i()},genContent(){const t=l.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:`${this.naturalWidth}px`}}),t},__genPlaceholder(){const t=(0,n.z9)(this,"placeholder");if(t){const e=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},t)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},e):e[0]}}},render(t){const e=l.options.render.call(this,t),i=(0,h.ZP)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:p?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,i,e.children)}})},67877:function(t,e,i){i.d(e,{Z:function(){return r}});var s=i(39177),r=s.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:t,top:e,right:i,footer:s,insetFooter:r,bottom:o,left:n}=this.$vuetify.application;return{paddingTop:`${e+t}px`,paddingRight:`${i}px`,paddingBottom:`${s+r+o}px`,paddingLeft:`${n}px`}}},render(t){const e={staticClass:"v-main",style:this.styles,ref:"main"};return t(this.tag,e,[t("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},3358:function(t,e,i){i.d(e,{Z:function(){return o}});var s=i(93536),r=i(73325);function o(t,e=[]){return(0,r.Z)((0,s.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return t}},watch:{app(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated(){this.callUpdate()},created(){for(let t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(t=!1){(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},39177:function(t,e,i){var s=i(20144);e["Z"]=s.Z.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},82885:function(t,e,i){t.exports=i.p+"img/logo.9ed428c0.png"}}]);
//# sourceMappingURL=246.dbfc4d02.js.map