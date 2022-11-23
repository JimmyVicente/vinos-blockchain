"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[670],{11418:function(t,e,i){i.d(e,{Z:function(){return n}});var s=i(48085),n=s.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(t){let e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":e,...this.$attrs},on:this.$listeners})}})},549:function(t,e,i){function s(t,e,i){const s=e.value,n=e.options||{passive:!0};window.addEventListener("resize",s,n),t._onResize=Object(t._onResize),t._onResize[i.context._uid]={callback:s,options:n},e.modifiers&&e.modifiers.quiet||s()}function n(t,e,i){var s;if(null==(s=t._onResize)||!s[i.context._uid])return;const{callback:n,options:o}=t._onResize[i.context._uid];window.removeEventListener("resize",n,o),delete t._onResize[i.context._uid]}const o={inserted:s,unbind:n};e["Z"]=o},95500:function(t,e,i){var s=i(4589);const n=t=>{const{touchstartX:e,touchendX:i,touchstartY:s,touchendY:n}=t,o=.5,a=16;t.offsetX=i-e,t.offsetY=n-s,Math.abs(t.offsetY)<o*Math.abs(t.offsetX)&&(t.left&&i<e-a&&t.left(t),t.right&&i>e+a&&t.right(t)),Math.abs(t.offsetX)<o*Math.abs(t.offsetY)&&(t.up&&n<s-a&&t.up(t),t.down&&n>s+a&&t.down(t))};function o(t,e){const i=t.changedTouches[0];e.touchstartX=i.clientX,e.touchstartY=i.clientY,e.start&&e.start(Object.assign(t,e))}function a(t,e){const i=t.changedTouches[0];e.touchendX=i.clientX,e.touchendY=i.clientY,e.end&&e.end(Object.assign(t,e)),n(e)}function r(t,e){const i=t.changedTouches[0];e.touchmoveX=i.clientX,e.touchmoveY=i.clientY,e.move&&e.move(Object.assign(t,e))}function h(t){const e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:t=>o(t,e),touchend:t=>a(t,e),touchmove:t=>r(t,e)}}function c(t,e,i){const n=e.value,o=n.parent?t.parentElement:t,a=n.options||{passive:!0};if(!o)return;const r=h(e.value);o._touchHandlers=Object(o._touchHandlers),o._touchHandlers[i.context._uid]=r,(0,s.XP)(r).forEach((t=>{o.addEventListener(t,r[t],a)}))}function l(t,e,i){const n=e.value.parent?t.parentElement:t;if(!n||!n._touchHandlers)return;const o=n._touchHandlers[i.context._uid];(0,s.XP)(o).forEach((t=>{n.removeEventListener(t,o[t])})),delete n._touchHandlers[i.context._uid]}const d={inserted:c,unbind:l};e["Z"]=d},5936:function(t,e,i){var s=i(95703),n=i(93536),o=i(25795),a=i(83944),r=i(73325),h=i(4589);const c=(0,r.Z)(s.Z,(0,n.d)(["top","right","bottom","left","absolute"]),o.Z,a.Z);e["Z"]=c.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:()=>({activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}),computed:{computedLeft(){const t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,s=Math.max(t.width,e.width);let n=0;if(n+=i,(this.left||this.$vuetify.rtl&&!this.right)&&(n-=s-t.width),this.offsetX){const e=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));n+=this.left?-e:t.width}return this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),n},computedTop(){const t=this.dimensions.activator,e=this.dimensions.content;let i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled(t){t&&this.callDeactivate()},isActive(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition(){return{offsetTop:this.positionY||this.absoluteY,offsetLeft:this.positionX||this.absoluteX,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate(){},calcLeft(t){return(0,h.kb)(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop(){return(0,h.kb)(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow(t,e){const i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow(t){const e=this.getInnerHeight(),i=this.absoluteYOffset+e,s=this.dimensions.activator,n=this.dimensions.content.height,o=t+n,a=i<o;return a&&this.offsetOverflow&&s.top>n?t=this.pageYOffset+(s.top-n):a&&!this.allowOverflow?t=i-n-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate(){this.hasWindow&&this.activate()},callDeactivate(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed(){if(!1!==this.attach)return;let t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1},deactivate(){},genActivatorListeners(){const t=o.Z.options.methods.genActivatorListeners.call(this),e=t.click;return e&&(t.click=t=>{this.openOnClick&&e&&e(t),this.absoluteX=t.clientX,this.absoluteY=t.clientY}),t},getInnerHeight(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect(t){const e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure(t){if(!t||!this.hasWindow)return null;const e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){const i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek(t){requestAnimationFrame((()=>{const e=this.$refs.content;e&&"none"===e.style.display?(e.style.display="inline-block",t(),e.style.display="none"):t()}))},startTransition(){return new Promise((t=>requestAnimationFrame((()=>{this.isContentActive=this.hasJustFocused=this.isActive,t()}))))},updateDimensions(){this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;const t={activator:{...this.dimensions.activator},content:{...this.dimensions.content}};if(!this.hasActivator||this.absolute)t.activator=this.absolutePosition();else{const e=this.getActivator();if(!e)return;t.activator=this.measure(e),t.activator.offsetLeft=e.offsetLeft,!1!==this.attach?t.activator.offsetTop=e.offsetTop:t.activator.offsetTop=0}this.sneakPeek((()=>{if(this.$refs.content){if(this.$refs.content.offsetParent){const e=this.getRoundedBoundedClientRect(this.$refs.content.offsetParent);this.relativeYOffset=window.pageYOffset+e.top,t.activator.top-=this.relativeYOffset,t.activator.left-=window.pageXOffset+e.left}t.content=this.measure(this.$refs.content)}this.dimensions=t}))}}})},96341:function(t,e,i){i(26699);var s=i(71824),n=i(20144);e["Z"]=n.Z.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:t=>!isNaN(Number(t))||["xs","sm","md","lg","xl"].includes(String(t))}},computed:{isMobile(){const{mobile:t,width:e,name:i,mobileBreakpoint:s}=this.$vuetify.breakpoint;if(s===this.mobileBreakpoint)return t;const n=parseInt(this.mobileBreakpoint,10),o=!isNaN(n);return o?e<n:i===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,s.Rn)("mobile-break-point","mobile-breakpoint",this)}})},60277:function(t,e,i){i.r(e),i.d(e,{default:function(){return tt}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",[s("v-navigation-drawer",{staticClass:" drawer",attrs:{app:"",height:"50%",width:"300px"},scopedSlots:t._u([{key:"append",fn:function(){return[s("div",{staticClass:"pa-2"},[s("v-btn",{staticClass:"primary_app",attrs:{dark:"",color:"white",to:{name:"Inicio"}}},[s("v-tooltip",{attrs:{right:"",color:"white"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,n=e.attrs;return[s("v-icon",t._g(t._b({attrs:{left:"",dark:""}},"v-icon",n,!1),i),[t._v(" mdi-logout ")])]}}])},[s("strong",[t._v("CERRAR SESION")])]),s("strong",[t._v("Cerrar sesion")])],1)],1)]},proxy:!0}]),model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[s("v-layout",{attrs:{"align-center":"","justify-center":""}},[s("v-flex",{attrs:{md12:""}},[s("br"),s("v-list-item",[s("v-list-item-content",[s("v-list-item-subtitle",[t._v("Balance")]),s("v-list-item-subtitle",{staticStyle:{color:"green"}},[t._v(t._s(t.balanceETHER)+" ETH")])],1)],1)],1)],1),s("v-divider"),s("v-list",{attrs:{dense:"",nav:""}},[s("v-list-item-group",{attrs:{color:"primary_app"}},t._l(t.menu,(function(e,i){return s("v-list-item",{key:i,attrs:{link:"",to:e.to}},[s("v-list-item-icon",[s("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),s("v-list-item-content",[s("v-list-item-title",{staticStyle:{"text-align":"left !important"},domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),s("v-app-bar",{attrs:{fixed:"",dark:"",color:"primary_app","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[s("v-btn",{attrs:{icon:"",color:"white",to:{name:"Inicio Administrador"}}},[s("v-avatar",{staticStyle:{"margin-left":"5px"},attrs:{size:"40"}},[s("img",{attrs:{src:i(82885)}})])],1),s("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),s("v-spacer"),s("v-list-item-subtitle",[t._v("Direccioón de cuenta: "+t._s(t.cuenta))])],1),s("v-main",{staticStyle:{"margin-left":"3%","margin-right":"3%"}},[s("v-container",[s("router-view")],1)],1),s("v-footer",{attrs:{app:""}})],1)},n=[],o=i(22893),a=i(27288),r={name:"Base_Administrador",data:()=>({drawer:!0,loading:!0,cuenta:"",balanceETHER:0,menu:[{title:"Inicio",icon:"mdi-view-dashboard",to:{name:"Inicio Administrador"}},{title:"Perfil",icon:"mdi-account-box",to:{name:"Perfil"}},{title:"Procesos",icon:"mdi-glass-tulip",to:{name:"Proceso"}},{title:"Usuarios",icon:"mdi-account-multiple-outline",to:{name:"Usuario"}}]}),methods:{async getBalance(){try{let{cuenta:i,balanceETHER:s}=await(0,a.yN)();this.cuenta=i,this.balanceETHER=s;var t=await(0,o.Z)()??{},e=t.esMiCuenta??!1;e||window.location.reload()}catch(i){console.log(i)}}},async mounted(){this.getBalance(),(0,a.jA)((t=>{console.log(t),0==t?window.location.reload():this.getBalance()}))}},h=r,c=i(1001),l=i(43453),d=i.n(l),u=i(17524),p=i(60426),v=i(69798),f=i(680),m=i(20144),g=m.Z.extend({name:"v-app-bar-nav-icon",functional:!0,render(t,{slots:e,listeners:i,props:s,data:n}){const o=Object.assign(n,{staticClass:`v-app-bar__nav-icon ${n.staticClass||""}`.trim(),props:{...s,icon:!0},on:i}),a=e().default;return t(f.Z,o,a||[t(v.Z,"$menu")])}}),b=i(26370),w=i(4228),y=i(11418),A=(i(68582),i(88006)),x=(0,A.Z)("flex"),k=i(30899),O=i(96428),_=(0,A.Z)("layout"),T=i(16816),B=i(97620),Z=i(17044),C=i(73123),M=i(10459),Y=i(67877),$=i(97047),L=i(3358),X=i(46952),R=i(65907),V=i(96341),E=i(90390),I=i(39177),N=i(48085),S=i(45600),W=i(549),H=i(95500),z=i(4589),D=i(73325);const P=(0,D.Z)((0,L.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),X.Z,R.Z,V.Z,E.Z,I.Z,N.Z);var F=P.extend({name:"v-navigation-drawer",directives:{ClickOutside:S.Z,Resize:W.Z,Touch:H.Z},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const t=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?t+this.$vuetify.application.top:t},computedTop(){if(!this.hasApp)return 0;let t=this.$vuetify.application.bar;return t+=this.clipped?this.$vuetify.application.top:0,t},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&V.Z.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const t=this.isBottom?"translateY":"translateX";return{height:(0,z.kb)(this.height),top:this.isBottom?"auto":(0,z.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,z.kb)(this.computedMaxHeight)})`:void 0,transform:`${t}(${(0,z.kb)(this.computedTransform,"%")})`,width:(0,z.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(t){this.$emit("input",t)},isMobile(t,e){!t&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=e&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!t)},permanent(t){t&&(this.isActive=!0)},showOverlay(t){t?this.genOverlay():this.removeOverlay()},value(t){this.permanent||(null!=t?t!==this.isActive&&(this.isActive=t):this.init())},expandOnHover:"updateMiniVariant",isMouseover(t){this.updateMiniVariant(!t)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const t=this.$el.parentNode;if(!t)return;const e=t.getBoundingClientRect();this.touchArea={left:e.left+50,right:e.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const t={height:"100%",width:"100%",src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img(t):this.$createElement($.Z,{props:t});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[e])},genDirectives(){const t=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||t.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),t},genListeners(){const t={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:t=>{if(t.target!==t.currentTarget)return;this.$emit("transitionend",t);const e=document.createEvent("UIEvents");e.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(e)}};return this.miniVariant&&(t.click=()=>this.$emit("update:mini-variant",!1)),t},genPosition(t){const e=(0,z.z9)(this,t);return e?this.$createElement("div",{staticClass:`v-navigation-drawer__${t}`},e):e},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(t){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(this.right&&t.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(t){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(t.touchendX-t.touchstartX)<100||(!this.right&&t.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const t=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(t)?this.$el.clientWidth:t},updateMiniVariant(t){this.expandOnHover&&this.miniVariant!==t&&this.$emit("update:mini-variant",t)}},render(t){const e=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,z.z9)(this,"img"))&&e.unshift(this.genBackground()),t(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),e)}}),j=i(99762),q=i(25795),U=i(44561),J=i(5936),G=i(71824),K=(0,D.Z)(X.Z,U.Z,R.Z,J.Z).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},openOnFocus:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let n=0;return this.top||this.bottom||i?n=s+t.width/2-e.width/2:(this.left||this.right)&&(n=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(n-=parseInt(this.nudgeLeft)),this.nudgeRight&&(n+=parseInt(this.nudgeRight)),`${this.calcXOverflow(n,this.dimensions.content.width)}px`},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),!1===this.attach&&(s+=this.pageYOffset),`${this.calcYOverflow(s)}px`},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:(0,z.kb)(this.maxWidth),minWidth:(0,z.kb)(this.minWidth),top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick((()=>{this.value&&this.callActivate()}))},mounted(){"v-slot"===(0,z.sp)(this,"activator",!0)&&(0,G.N6)("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=q.Z.options.methods.genActivatorListeners.call(this);return this.openOnFocus&&(t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")}),t.keydown=t=>{t.keyCode===z.Do.esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((()=>[this.genTransition()])),this.genActivator()])}}),Q=(0,c.Z)(h,s,n,!1,null,"26ba10d2",null),tt=Q.exports;d()(Q,{VApp:u.Z,VAppBar:p.Z,VAppBarNavIcon:g,VAvatar:b.Z,VBtn:f.Z,VContainer:w.Z,VDivider:y.Z,VFlex:x,VFooter:k.Z,VIcon:O.Z,VLayout:_,VList:T.Z,VListItem:B.Z,VListItemContent:Z.km,VListItemGroup:C.Z,VListItemIcon:M.Z,VListItemSubtitle:Z.oZ,VListItemTitle:Z.V9,VMain:Y.Z,VNavigationDrawer:F,VSpacer:j.Z,VTooltip:K})}}]);
//# sourceMappingURL=670.aac4e9a9.js.map