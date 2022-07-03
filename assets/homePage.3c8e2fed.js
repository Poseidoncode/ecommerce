import{r as z,al as Z,am as re,an as de,ao as ce,u as ue,b as pe,i as fe,f as he,o as me,x as X,k as U,l as t,z as N,ap as V,s as O,aq as ge,ar as ve,j as G,F as we,q as xe,y as be,as as Ce,w as K,t as J}from"./vendor.b81db0ac.js";import{_ as ye,g as _e,p as ke,a as Me}from"./index.2b458e47.js";import{g as Be,a as Q,$ as P,n as ee,b as A,c as Te,S as Ee,d as Se,N as te}from"./navigation.min.c9bfc870.js";function se(u){return re()?(de(u),!0):!1}var ae;const D=typeof window!="undefined",$e=u=>typeof u=="string",W=()=>{};D&&((ae=window==null?void 0:window.navigator)==null?void 0:ae.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function He(u,e,k={}){const{immediate:o=!0}=k,w=z(!1);let r=null;function g(){r&&(clearTimeout(r),r=null)}function x(){w.value=!1,g()}function n(...f){g(),w.value=!0,r=setTimeout(()=>{w.value=!1,r=null,u(...f)},Z(e))}return o&&(w.value=!0,D&&n()),se(x),{isPending:w,start:n,stop:x}}function Le(u){var e;const k=Z(u);return(e=k==null?void 0:k.$el)!=null?e:k}const Pe=D?window:void 0;D&&window.document;const Ve=D?window.navigator:void 0;D&&window.location;function De(...u){let e,k,o,w;if($e(u[0])?([k,o,w]=u,e=Pe):[e,k,o,w]=u,!e)return W;let r=W;const g=ce(()=>Le(e),n=>{r(),!!n&&(n.addEventListener(k,o,w),r=()=>{n.removeEventListener(k,o,w),r=W})},{immediate:!0,flush:"post"}),x=()=>{g(),r()};return se(x),x}function Ie(u={}){const{navigator:e=Ve,read:k=!1,source:o,copiedDuring:w=1500}=u,r=["copy","cut"],g=Boolean(e&&"clipboard"in e),x=z(""),n=z(!1),f=He(()=>n.value=!1,w);function E(){e.clipboard.readText().then(d=>{x.value=d})}if(g&&k)for(const d of r)De(d,E);async function $(d=Z(o)){g&&d!=null&&(await e.clipboard.writeText(d),x.value=d,n.value=!0,f.start())}return{isSupported:g,text:x,copied:n,copy:$}}const q=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Y="__vueuse_ssr_handlers__";q[Y]=q[Y]||{};q[Y];var le;(function(u){u.UP="UP",u.RIGHT="RIGHT",u.DOWN="DOWN",u.LEFT="LEFT",u.NONE="NONE"})(le||(le={}));function ze(u){let{swiper:e,extendParams:k,on:o,emit:w}=u;const r=Be(),g=Q();e.keyboard={enabled:!1},k({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function x(E){if(!e.enabled)return;const{rtlTranslate:$}=e;let d=E;d.originalEvent&&(d=d.originalEvent);const C=d.keyCode||d.charCode,a=e.params.keyboard.pageUpDown,s=a&&C===33,v=a&&C===34,c=C===37,p=C===39,l=C===38,i=C===40;if(!e.allowSlideNext&&(e.isHorizontal()&&p||e.isVertical()&&i||v)||!e.allowSlidePrev&&(e.isHorizontal()&&c||e.isVertical()&&l||s))return!1;if(!(d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)&&!(r.activeElement&&r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(s||v||c||p||l||i)){let B=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;const M=e.$el,S=M[0].clientWidth,h=M[0].clientHeight,y=g.innerWidth,m=g.innerHeight,T=e.$el.offset();$&&(T.left-=e.$el[0].scrollLeft);const b=[[T.left,T.top],[T.left+S,T.top],[T.left,T.top+h],[T.left+S,T.top+h]];for(let L=0;L<b.length;L+=1){const H=b[L];if(H[0]>=0&&H[0]<=y&&H[1]>=0&&H[1]<=m){if(H[0]===0&&H[1]===0)continue;B=!0}}if(!B)return}e.isHorizontal()?((s||v||c||p)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),((v||p)&&!$||(s||c)&&$)&&e.slideNext(),((s||c)&&!$||(v||p)&&$)&&e.slidePrev()):((s||v||l||i)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),(v||i)&&e.slideNext(),(s||l)&&e.slidePrev()),w("keyPress",C)}}function n(){e.keyboard.enabled||(P(r).on("keydown",x),e.keyboard.enabled=!0)}function f(){!e.keyboard.enabled||(P(r).off("keydown",x),e.keyboard.enabled=!1)}o("init",()=>{e.params.keyboard.enabled&&n()}),o("destroy",()=>{e.keyboard.enabled&&f()}),Object.assign(e.keyboard,{enable:n,disable:f})}function Ne(u){let{swiper:e,extendParams:k,on:o,emit:w}=u;const r=Q();k({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let g,x=A(),n;const f=[];function E(l){const i=10,B=40,M=800;let S=0,h=0,y=0,m=0;return"detail"in l&&(h=l.detail),"wheelDelta"in l&&(h=-l.wheelDelta/120),"wheelDeltaY"in l&&(h=-l.wheelDeltaY/120),"wheelDeltaX"in l&&(S=-l.wheelDeltaX/120),"axis"in l&&l.axis===l.HORIZONTAL_AXIS&&(S=h,h=0),y=S*i,m=h*i,"deltaY"in l&&(m=l.deltaY),"deltaX"in l&&(y=l.deltaX),l.shiftKey&&!y&&(y=m,m=0),(y||m)&&l.deltaMode&&(l.deltaMode===1?(y*=B,m*=B):(y*=M,m*=M)),y&&!S&&(S=y<1?-1:1),m&&!h&&(h=m<1?-1:1),{spinX:S,spinY:h,pixelX:y,pixelY:m}}function $(){!e.enabled||(e.mouseEntered=!0)}function d(){!e.enabled||(e.mouseEntered=!1)}function C(l){return e.params.mousewheel.thresholdDelta&&l.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&A()-x<e.params.mousewheel.thresholdTime?!1:l.delta>=6&&A()-x<60?!0:(l.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),w("scroll",l.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),w("scroll",l.raw)),x=new r.Date().getTime(),!1)}function a(l){const i=e.params.mousewheel;if(l.direction<0){if(e.isEnd&&!e.params.loop&&i.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&i.releaseOnEdges)return!0;return!1}function s(l){let i=l,B=!0;if(!e.enabled)return;const M=e.params.mousewheel;e.params.cssMode&&i.preventDefault();let S=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(S=P(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!S[0].contains(i.target)&&!M.releaseOnEdges)return!0;i.originalEvent&&(i=i.originalEvent);let h=0;const y=e.rtlTranslate?-1:1,m=E(i);if(M.forceToAxis)if(e.isHorizontal())if(Math.abs(m.pixelX)>Math.abs(m.pixelY))h=-m.pixelX*y;else return!0;else if(Math.abs(m.pixelY)>Math.abs(m.pixelX))h=-m.pixelY;else return!0;else h=Math.abs(m.pixelX)>Math.abs(m.pixelY)?-m.pixelX*y:-m.pixelY;if(h===0)return!0;M.invert&&(h=-h);let T=e.getTranslate()+h*M.sensitivity;if(T>=e.minTranslate()&&(T=e.minTranslate()),T<=e.maxTranslate()&&(T=e.maxTranslate()),B=e.params.loop?!0:!(T===e.minTranslate()||T===e.maxTranslate()),B&&e.params.nested&&i.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){const b={time:A(),delta:Math.abs(h),direction:Math.sign(h),raw:l};f.length>=2&&f.shift();const L=f.length?f[f.length-1]:void 0;if(f.push(b),L?(b.direction!==L.direction||b.delta>L.delta||b.time>L.time+150)&&C(b):C(b),a(b))return!0}else{const b={time:A(),delta:Math.abs(h),direction:Math.sign(h)},L=n&&b.time<n.time+500&&b.delta<=n.delta&&b.direction===n.direction;if(!L){n=void 0,e.params.loop&&e.loopFix();let H=e.getTranslate()+h*M.sensitivity;const ne=e.isBeginning,oe=e.isEnd;if(H>=e.minTranslate()&&(H=e.minTranslate()),H<=e.maxTranslate()&&(H=e.maxTranslate()),e.setTransition(0),e.setTranslate(H),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!ne&&e.isBeginning||!oe&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(g),g=void 0,f.length>=15&&f.shift();const F=f.length?f[f.length-1]:void 0,R=f[0];if(f.push(b),F&&(b.delta>F.delta||b.direction!==F.direction))f.splice(0);else if(f.length>=15&&b.time-R.time<500&&R.delta-b.delta>=1&&b.delta<=6){const j=h>0?.8:.2;n=b,f.splice(0),g=ee(()=>{e.slideToClosest(e.params.speed,!0,void 0,j)},0)}g||(g=ee(()=>{const j=.5;n=b,f.splice(0),e.slideToClosest(e.params.speed,!0,void 0,j)},500))}if(L||w("scroll",i),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),H===e.minTranslate()||H===e.maxTranslate())return!0}}return i.preventDefault?i.preventDefault():i.returnValue=!1,!1}function v(l){let i=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(i=P(e.params.mousewheel.eventsTarget)),i[l]("mouseenter",$),i[l]("mouseleave",d),i[l]("wheel",s)}function c(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",s),!0):e.mousewheel.enabled?!1:(v("on"),e.mousewheel.enabled=!0,!0)}function p(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,s),!0):e.mousewheel.enabled?(v("off"),e.mousewheel.enabled=!1,!0):!1}o("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&p(),e.params.mousewheel.enabled&&c()}),o("destroy",()=>{e.params.cssMode&&c(),e.mousewheel.enabled&&p()}),Object.assign(e.mousewheel,{enable:c,disable:p})}function I(u){return u===void 0&&(u=""),`.${u.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function ie(u){let{swiper:e,extendParams:k,on:o,emit:w}=u;const r="swiper-pagination";k({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`}}),e.pagination={el:null,$el:null,bullets:[]};let g,x=0;function n(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function f(a,s){const{bulletActiveClass:v}=e.params.pagination;a[s]().addClass(`${v}-${s}`)[s]().addClass(`${v}-${s}-${s}`)}function E(){const a=e.rtl,s=e.params.pagination;if(n())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let p;const l=e.params.loop?Math.ceil((v-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(p=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),p>v-1-e.loopedSlides*2&&(p-=v-e.loopedSlides*2),p>l-1&&(p-=l),p<0&&e.params.paginationType!=="bullets"&&(p=l+p)):typeof e.snapIndex!="undefined"?p=e.snapIndex:p=e.activeIndex||0,s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const i=e.pagination.bullets;let B,M,S;if(s.dynamicBullets&&(g=i.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",`${g*(s.dynamicMainBullets+4)}px`),s.dynamicMainBullets>1&&e.previousIndex!==void 0&&(x+=p-(e.previousIndex-e.loopedSlides||0),x>s.dynamicMainBullets-1?x=s.dynamicMainBullets-1:x<0&&(x=0)),B=Math.max(p-x,0),M=B+(Math.min(i.length,s.dynamicMainBullets)-1),S=(M+B)/2),i.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(h=>`${s.bulletActiveClass}${h}`).join(" ")),c.length>1)i.each(h=>{const y=P(h),m=y.index();m===p&&y.addClass(s.bulletActiveClass),s.dynamicBullets&&(m>=B&&m<=M&&y.addClass(`${s.bulletActiveClass}-main`),m===B&&f(y,"prev"),m===M&&f(y,"next"))});else{const h=i.eq(p),y=h.index();if(h.addClass(s.bulletActiveClass),s.dynamicBullets){const m=i.eq(B),T=i.eq(M);for(let b=B;b<=M;b+=1)i.eq(b).addClass(`${s.bulletActiveClass}-main`);if(e.params.loop)if(y>=i.length){for(let b=s.dynamicMainBullets;b>=0;b-=1)i.eq(i.length-b).addClass(`${s.bulletActiveClass}-main`);i.eq(i.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else f(m,"prev"),f(T,"next");else f(m,"prev"),f(T,"next")}}if(s.dynamicBullets){const h=Math.min(i.length,s.dynamicMainBullets+4),y=(g*h-g)/2-S*g,m=a?"right":"left";i.css(e.isHorizontal()?m:"top",`${y}px`)}}if(s.type==="fraction"&&(c.find(I(s.currentClass)).text(s.formatFractionCurrent(p+1)),c.find(I(s.totalClass)).text(s.formatFractionTotal(l))),s.type==="progressbar"){let i;s.progressbarOpposite?i=e.isHorizontal()?"vertical":"horizontal":i=e.isHorizontal()?"horizontal":"vertical";const B=(p+1)/l;let M=1,S=1;i==="horizontal"?M=B:S=B,c.find(I(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${M}) scaleY(${S})`).transition(e.params.speed)}s.type==="custom"&&s.renderCustom?(c.html(s.renderCustom(e,p+1,l)),w("paginationRender",c[0])):w("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](s.lockClass)}function $(){const a=e.params.pagination;if(n())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,v=e.pagination.$el;let c="";if(a.type==="bullets"){let p=e.params.loop?Math.ceil((s-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&p>s&&(p=s);for(let l=0;l<p;l+=1)a.renderBullet?c+=a.renderBullet.call(e,l,a.bulletClass):c+=`<${a.bulletElement} class="${a.bulletClass}"></${a.bulletElement}>`;v.html(c),e.pagination.bullets=v.find(I(a.bulletClass))}a.type==="fraction"&&(a.renderFraction?c=a.renderFraction.call(e,a.currentClass,a.totalClass):c=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`,v.html(c)),a.type==="progressbar"&&(a.renderProgressbar?c=a.renderProgressbar.call(e,a.progressbarFillClass):c=`<span class="${a.progressbarFillClass}"></span>`,v.html(c)),a.type!=="custom"&&w("paginationRender",e.pagination.$el[0])}function d(){e.params.pagination=Te(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let s=P(a.el);s.length!==0&&(e.params.uniqueNavElements&&typeof a.el=="string"&&s.length>1&&(s=e.$el.find(a.el),s.length>1&&(s=s.filter(v=>P(v).parents(".swiper")[0]===e.el))),a.type==="bullets"&&a.clickable&&s.addClass(a.clickableClass),s.addClass(a.modifierClass+a.type),s.addClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(s.addClass(`${a.modifierClass}${a.type}-dynamic`),x=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&s.addClass(a.progressbarOppositeClass),a.clickable&&s.on("click",I(a.bulletClass),function(c){c.preventDefault();let p=P(this).index()*e.params.slidesPerGroup;e.params.loop&&(p+=e.loopedSlides),e.slideTo(p)}),Object.assign(e.pagination,{$el:s,el:s[0]}),e.enabled||s.addClass(a.lockClass))}function C(){const a=e.params.pagination;if(n())return;const s=e.pagination.$el;s.removeClass(a.hiddenClass),s.removeClass(a.modifierClass+a.type),s.removeClass(e.isHorizontal()?a.horizontalClass:a.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(a.bulletActiveClass),a.clickable&&s.off("click",I(a.bulletClass))}o("init",()=>{d(),$(),E()}),o("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex=="undefined")&&E()}),o("snapIndexChange",()=>{e.params.loop||E()}),o("slidesLengthChange",()=>{e.params.loop&&($(),E())}),o("snapGridLengthChange",()=>{e.params.loop||($(),E())}),o("destroy",()=>{C()}),o("enable disable",()=>{const{$el:a}=e.pagination;a&&a[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),o("lock unlock",()=>{E()}),o("click",(a,s)=>{const v=s.target,{$el:c}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&c.length>0&&!P(v).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&v===e.navigation.nextEl||e.navigation.prevEl&&v===e.navigation.prevEl))return;const p=c.hasClass(e.params.pagination.hiddenClass);w(p===!0?"paginationShow":"paginationHide"),c.toggleClass(e.params.pagination.hiddenClass)}}),Object.assign(e.pagination,{render:$,update:E,init:d,destroy:C})}const Oe={components:{Swiper:Ee,SwiperSlide:Se},setup(){const{copy:u}=Ie(),e=ue(),k=pe(),o=fe("emitter"),w=he(),r=z([]),g=z([]),x=async()=>{var d;try{if(sessionStorage.getItem("needs")){let s=JSON.parse(sessionStorage.getItem("needs"));r.value=[...s],g.value=s.filter(v=>v.category=="Mens");return}let a=[...(d=(await _e("")).data)==null?void 0:d.products];a=a.filter(s=>s.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),r.value=[...a],g.value=a.filter(s=>s.category=="Mens"),sessionStorage.setItem("needs",JSON.stringify(a))}catch(C){w.error(`${C.response?C.response.data.message:C}`,{timeout:2e3,hideProgressBar:!0})}},n=async d=>{try{let C={};if(!!e.state.cart.find(s=>s.product_id==d.id)){let s=e.state.cart.find(c=>c.product_id==d.id);C={product_id:s.product_id,qty:+s.qty+1};const v=await ke({data:C},s.id);o.emit("getCartData")}else{C={product_id:d.id,qty:1};const s=await Me({data:C});o.emit("getCartData")}w.info("The Item has already been added to cart.",{timeout:2e3,hideProgressBar:!0})}catch(C){w.error(`${C.response?C.response.data.message:C}`,{timeout:2e3,hideProgressBar:!0})}},f=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),k.push("/productslist")},E=()=>{u("SuperCampain"),w.info("Successfully Copy Coupon Code : SuperCampain!",{timeout:2e3,hideProgressBar:!0})},$=d=>{window.scrollTo({top:0,left:0}),k.push({name:"productdetail",params:{productId:d.id}})};return me(async()=>{x()}),{showDetail:$,getData:x,goShop:f,items:r,itemsClassic:g,addToCart:n,copyCoupon:E,modules:[ie,te],modules2:[ze,Ne,ie,te]}}},_=u=>(ge("data-v-63568539"),u=u(),ve(),u),Ae={class:"bg-white main-content"},Fe=O('<section data-v-63568539><div class="text-white py-20 bg-setting" data-v-63568539><div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-v-63568539><div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8" data-v-63568539><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose" data-v-63568539> Luxury </h1><h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2" data-v-63568539> Watches : The Timeless Infinity </h2><p class="text-sm md:text-base text-gray-50 mb-4" data-v-63568539> Explore your favourite events and register now to showcase your talent and win exciting prizes. </p><a href="#" class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent" data-v-63568539> Explore Now</a></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-63568539></div></div></div></section>',1),je={class:"mb-8"},Ze={class:"container mx-auto px-6"},Ge=O('<div class="mb-6 featrue-word" data-v-63568539><div class="featrue-word-content" data-v-63568539><div data-v-63568539>DISCOVER ALL BRANDS</div></div><div class="featrue-word-content" data-v-63568539><div data-v-63568539>CERTIFIED PRE-OWNED</div></div><div class="featrue-word-content" data-v-63568539><div data-v-63568539>SELL YOUR WATCH</div></div><div class="featrue-word-content" data-v-63568539><div data-v-63568539>CUSTOMER SERVICE</div></div></div>',1),We={class:"h-64 rounded-md overflow-hidden bg-cover bg-center",style:{"background-image":"url('https://images.unsplash.com/photo-1641471979402-0d40f068e06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')"}},qe={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},Ye={class:"px-10 max-w-xl"},Re=_(()=>t("h2",{class:"text-2xl text-white font-semibold"},"High Precision",-1)),Xe=_(()=>t("p",{class:"mt-2 text-gray-300"}," The ultimate reference in luxury chronograph watches, high-precision timing innovations since 1960. ",-1)),Ue=_(()=>t("span",null,"Shop Now",-1)),Ke=_(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),Je=[Ue,Ke],Qe={class:"md:flex mt-8 md:-mx-4 mb-12"},et={class:"w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1600897425543-5369a38bd193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80')"}},tt={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},st={class:"px-10 max-w-xl"},at=_(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Luxury",-1)),lt=_(()=>t("p",{class:"mt-2 text-gray-300"}," Swiss luxury watch and clock manufacturer founded in 1839, located in Canton of Geneva and the Vall\xE9e de Joux. ",-1)),it=_(()=>t("span",null,"Shop Now",-1)),nt=_(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),ot=[it,nt],rt={class:"w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1579172260981-30de4eabb80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}},dt={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},ct={class:"px-10 max-w-xl"},ut=_(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Aesthetic",-1)),pt=_(()=>t("p",{class:"mt-2 text-gray-300"}," Its ability to endure the challenges of time and embraces its simple purpose and aesthetic appeal. ",-1)),ft=_(()=>t("span",null,"Shop Now",-1)),ht=_(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),mt=[ft,ht],gt=_(()=>t("h1",{class:"heading-line font-semibold leading-9 text-center dark:text-gray-50 theme-color-main"},[t("span",{style:{"font-size":"24px"}},"FEATURED WATCHES")],-1)),vt={class:"swiper-container mb-12"},wt=O('<div class="swiper-arrow arrow-previous" data-v-63568539><div class="ball" data-v-63568539><div class="arrow-left" data-v-63568539><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M7 11.5C6.72386 11.5 6.5 11.7239 6.5 12C6.5 12.2761 6.72386 12.5 7 12.5V11.5ZM21 12.5C21.2761 12.5 21.5 12.2761 21.5 12C21.5 11.7239 21.2761 11.5 21 11.5V12.5ZM7 12.5H21V11.5H7V12.5Z" fill="#F9F9F9" data-v-63568539></path><path d="M2.35729 11.7856L5.7884 9.72696C6.32162 9.40703 7 9.79112 7 10.413V13.587C7 14.2089 6.32162 14.593 5.7884 14.273L2.35729 12.2144C2.19545 12.1173 2.19545 11.8827 2.35729 11.7856Z" fill="#F9F9F9" data-v-63568539></path></svg></div></div></div><div class="swiper-arrow arrow-next" data-v-63568539><div class="ball" data-v-63568539><div class="arrow-right" data-v-63568539><svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M17 11.5C17.2761 11.5 17.5 11.7239 17.5 12C17.5 12.2761 17.2761 12.5 17 12.5V11.5ZM3 12.5C2.72386 12.5 2.5 12.2761 2.5 12C2.5 11.7239 2.72386 11.5 3 11.5V12.5ZM17 12.5H3V11.5H17V12.5Z" fill="#F9F9F9" data-v-63568539></path><path d="M21.6427 11.7856L18.2116 9.72696C17.6784 9.40703 17 9.79112 17 10.413V13.587C17 14.2089 17.6784 14.593 18.2116 14.273L21.6427 12.2144C21.8045 12.1173 21.8045 11.8827 21.6427 11.7856Z" fill="#F9F9F9" data-v-63568539></path></svg></div></div></div>',2),xt={class:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"},bt=["onClick"],Ct=_(()=>t("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),yt=[Ct],_t={class:"itemCat-hover"},kt=["onClick"],Mt=_(()=>t("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M19.4697 20.5304C19.7626 20.8232 20.2374 20.8232 20.5303 20.5304C20.8232 20.2375 20.8232 19.7626 20.5303 19.4697L19.4697 20.5304ZM7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75V9.25ZM13 10.75C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58579 13.4142 9.25 13 9.25V10.75ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7H10.75ZM9.25 13C9.25 13.4142 9.58579 13.75 10 13.75C10.4142 13.75 10.75 13.4142 10.75 13H9.25ZM20.5303 19.4697L15.4801 14.4194L14.4194 15.4801L19.4697 20.5304L20.5303 19.4697ZM10 16.25C6.54822 16.25 3.75 13.4518 3.75 10H2.25C2.25 14.2802 5.71979 17.75 10 17.75V16.25ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75V2.25C5.71979 2.25 2.25 5.71979 2.25 10H3.75ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10H17.75C17.75 5.71979 14.2802 2.25 10 2.25V3.75ZM16.25 10C16.25 11.7261 15.5513 13.2876 14.4194 14.4194L15.4801 15.4801C16.8817 14.0784 17.75 12.1399 17.75 10H16.25ZM14.4194 14.4194C13.2876 15.5513 11.7261 16.25 10 16.25V17.75C12.1399 17.75 14.0784 16.8818 15.4801 15.4801L14.4194 14.4194ZM7 10.75H13V9.25H7V10.75ZM9.25 7V13H10.75V7H9.25Z",fill:"#fff"})],-1)),Bt=[Mt],Tt={class:"px-5 py-3 mt-2"},Et={class:"uppercase text-center theme-color7"},St={class:"text-black-500 mt-2 text-center theme-color7"},$t=_(()=>t("div",{class:"word-one"},"25% Off on All products at Vigilero Stores",-1)),Ht=_(()=>t("p",{class:"word-two mb-8"}," Get an incredible 25% discount on all types of watches at Vigilero Store. Only for single use. ",-1)),Lt=_(()=>t("div",{className:"coupon-item"},[t("div",{className:"coupon-intro"},[t("h4",null,"Campaign: Super Month"),t("ul",null,[t("li",null,"Coupon Codes: SuperCampain"),t("li",null,"Expires: 2022/12/25")])]),t("div",{className:"allcoupon-value"},"25% Off")],-1)),Pt=[$t,Ht,Lt],Vt=_(()=>t("div",{class:"container mx-auto mt-16"},[t("h1",{class:"heading-line font-semibold leading-9 text-center dark:text-gray-50 theme-color-main"},[t("span",{style:{"font-size":"24px"}},"Vigilero Reviews")])],-1)),Dt={style:{background:"#fff"}},It={class:"px-4 mx-auto sm:px-6 lg:pl-8 lg:pr-0 lg:mr-0 sm:py-4 max-w-[1340px]"},zt={class:"grid grid-cols-1 lg:grid-cols-3 lg:gap-x-16 gap-y-8 lg:items-center"},Nt=O('<div class="max-w-xl text-center sm:text-left" data-v-63568539><h2 class="text-3xl font-bold tracking-tight sm:text-4xl theme-color-main" data-v-63568539> Overview <br class="hidden sm:block lg:hidden" data-v-63568539></h2><p class="mt-4 text-gray-500" data-v-63568539> Vigilero has a consumer rating of 4.8 stars from 16 reviews indicating that most customers are generally satisfied with their purchases. Vigilero ranks 49th among Watch sites. </p><div class="hidden lg:mt-8 lg:flex lg:gap-4" data-v-63568539><button aria-label="Previous slide" class="p-3 review-text2 border review rounded-full hover:text-white prev-button" data-v-63568539><svg class="w-5 h-5 transform -rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-63568539></path></svg></button><button aria-label="Next slide" class="p-3 review-text2 border review rounded-full hover:text-white next-button" data-v-63568539><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-63568539></path></svg></button></div></div>',1),Ot={class:"-mx-6 lg:col-span-2 lg:mx-0"},At={class:"swiper-container"},Ft={class:"swiper-wrapper"},jt=_(()=>t("li",{class:"swiper-slide reviews-swiper"},[t("blockquote",{class:"flex flex-col justify-between h-full p-12 bg-white"},[t("div",null,[t("div",{class:"flex gap-0.5 theme-color8"},[t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})])]),t("div",{class:"mt-4"},[t("p",{class:"text-2xl font-bold review-text sm:text-3xl"}," David Louis "),t("p",{class:"mt-4 leading-relaxed text-gray-500"}," I really like shopping at your website because I have purchased three SiSU watches and really like two of them but never wear the second one because my wrist is way to small and I even went to a watch place to have them remove a link but it's still too big. ")])]),t("footer",{class:"mt-8 text-sm text-gray-500",style:{"text-align":"end"}}," \u2014 Posted 3 days ago ")])],-1)),Zt=_(()=>t("li",{class:"swiper-slide reviews-swiper"},[t("blockquote",{class:"flex flex-col justify-between h-full p-12 bg-white"},[t("div",null,[t("div",{class:"flex gap-0.5 theme-color8"},[t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"none",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})])]),t("div",{class:"mt-4"},[t("p",{class:"text-2xl font-bold review-text sm:text-3xl"}," Nixon watch "),t("p",{class:"mt-4 leading-relaxed text-gray-500"}," Best service I received in a long time postal to ireland was super speedy watch was so beautiful as described highly recommend Vigilero will purchase again from this seller thank you for your wonderful service regards eddie ")])]),t("footer",{class:"mt-8 text-sm text-gray-500",style:{"text-align":"end"}}," \u2014 Posted 4 days ago ")])],-1)),Gt=_(()=>t("li",{class:"swiper-slide reviews-swiper"},[t("blockquote",{class:"flex flex-col justify-between h-full p-12 bg-white"},[t("div",null,[t("div",{class:"flex gap-0.5 theme-color8"},[t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})]),t("svg",{class:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"})])]),t("div",{class:"mt-4"},[t("p",{class:"text-2xl font-bold review-text sm:text-3xl"}," Christian M "),t("p",{class:"mt-4 leading-relaxed text-gray-500"}," Great selection and prices. These are interesting watches. They aren't the most precise or collectable, but they are the coolest. ")])]),t("footer",{class:"mt-8 text-sm text-gray-500",style:{"text-align":"end"}}," \u2014 Posted 5 days ago ")])],-1)),Wt=O('<div class="flex justify-center gap-4 mt-8 lg:hidden" data-v-63568539><button aria-label="Previous slide" class="p-4 review-text2 border review rounded-full hover:text-white prev-button" data-v-63568539><svg class="w-5 h-5 transform -rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-63568539></path></svg></button><button aria-label="Next slide" class="p-4 review-text2 border review rounded-full hover:text-white next-button" data-v-63568539><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-63568539><path d="M9 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" data-v-63568539></path></svg></button></div>',1),qt=_(()=>t("p",{class:"append-buttons"},null,-1));function Yt(u,e,k,o,w,r){const g=X("swiper-slide"),x=X("swiper");return G(),U("div",Ae,[Fe,t("main",je,[t("div",Ze,[Ge,t("div",We,[t("div",qe,[t("div",Ye,[Re,Xe,t("button",{class:"flex items-center mt-4 px-3 py-2 bg-blue-800 text-white text-sm uppercase font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700",onClick:e[0]||(e[0]=(...n)=>o.goShop&&o.goShop(...n))},Je)])])]),t("div",Qe,[t("div",et,[t("div",tt,[t("div",st,[at,lt,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:e[1]||(e[1]=(...n)=>o.goShop&&o.goShop(...n))},ot)])])]),t("div",rt,[t("div",dt,[t("div",ct,[ut,pt,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:e[2]||(e[2]=(...n)=>o.goShop&&o.goShop(...n))},mt)])])])]),gt,t("div",vt,[wt,N(x,{ref:"{swiperRef}",mousewheel:{invert:!0},slidesPerView:1,spaceBetween:30,loop:!0,speed:1200,centeredSlides:!0,lazy:!0,navigation:{nextEl:".arrow-next",prevEl:".arrow-previous"},initialSlide:3,keyboard:{enabled:!0},class:"product-slide",breakpoints:{0:{slidesPerView:1.5,spaceBetween:15},478:{slidesPerView:3,spaceBetween:15},767:{slidesPerView:2.25,spaceBetween:30},988:{slidesPerView:4.25,spaceBetween:50},1920:{slidesPerView:5.25,spaceBetween:50}},modules:o.modules2,scrollbar:{delay:3e3}},{default:V(()=>[(G(!0),U(we,null,xe(o.itemsClassic,(n,f)=>(G(),be(g,{key:`itemCat${f}`},{default:V(()=>[t("div",xt,[t("div",{class:"h-56 w-full product-background",style:Ce(n.imageUrl?`background:url(${n.imageUrl})`:"")},[t("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:K(E=>o.addToCart(n),["prevent"])},yt,8,bt),t("div",_t,[t("div",{class:"itemCat-hover-content cursor-pointer",onClick:K(E=>o.showDetail(n),["prevent"])},Bt,8,kt)])],4),t("div",Tt,[t("h3",Et,J(n.title||""),1),t("h4",St," $"+J(n.price),1)])])]),_:2},1024))),128))]),_:1},8,["navigation","breakpoints","modules"])])]),t("section",{class:"allcoupons mt-16",onClick:e[3]||(e[3]=(...n)=>o.copyCoupon&&o.copyCoupon(...n))},Pt),Vt,t("section",Dt,[t("div",It,[t("div",zt,[Nt,t("div",Ot,[t("div",At,[t("ul",Ft,[N(x,{class:"mySwiper",ref:"{swiperRef}",loop:!0,slidesPerView:1,centeredSlides:!0,spaceBetween:30,autoplay:{delay:8e3},breakpoints:{640:{centeredSlides:!0,slidesPerView:1.25},1024:{centeredSlides:!1,slidesPerView:1.5}},navigation:{nextEl:".next-button",prevEl:".prev-button"},modules:o.modules},{default:V(()=>[N(g,null,{default:V(()=>[jt]),_:1}),N(g,null,{default:V(()=>[Zt]),_:1}),N(g,null,{default:V(()=>[Gt]),_:1})]),_:1},8,["breakpoints","navigation","modules"])])])])]),Wt])]),qt])])}var Kt=ye(Oe,[["render",Yt],["__scopeId","data-v-63568539"]]);export{Kt as default};
