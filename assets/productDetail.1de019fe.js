var G=Object.defineProperty;var q=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var H=(i,e,h)=>e in i?G(i,e,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[e]=h,N=(i,e)=>{for(var h in e||(e={}))Q.call(e,h)&&H(i,h,e[h]);if(q)for(var h of q(e))Y.call(e,h)&&H(i,h,e[h]);return i};import{d as K,e as X,b as W,u as ee,i as te,r as E,f as se,ao as oe,o as ie,x as A,k as $,l as s,w as B,t as I,z as V,ap as C,p as ae,v as re,s as z,aq as ne,ar as le,aB as de,j as P,F as j,q as F,y as R,as as ce}from"./vendor.b81db0ac.js";import{_ as ue,x as pe,p as me,a as fe,g as he}from"./index.ce44f1c7.js";import{i as ve,$ as Z,n as O,S as we,a as ge,N as U,K as xe,M as be,P as ye}from"./navigation.min.5bc6a11e.js";function _e(i){let{swiper:e,extendParams:h,on:_}=i;h({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let k=!1,M=!1;e.thumbs={swiper:null};function T(){const r=e.thumbs.swiper;if(!r||r.destroyed)return;const t=r.clickedIndex,d=r.clickedSlide;if(d&&Z(d).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof t=="undefined"||t===null)return;let f;if(r.params.loop?f=parseInt(Z(r.clickedSlide).attr("data-swiper-slide-index"),10):f=t,e.params.loop){let v=e.activeIndex;e.slides.eq(v).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,v=e.activeIndex);const p=e.slides.eq(v).prevAll(`[data-swiper-slide-index="${f}"]`).eq(0).index(),y=e.slides.eq(v).nextAll(`[data-swiper-slide-index="${f}"]`).eq(0).index();typeof p=="undefined"?f=y:typeof y=="undefined"?f=p:y-v<v-p?f=y:f=p}e.slideTo(f)}function b(){const{thumbs:r}=e.params;if(k)return!1;k=!0;const t=e.constructor;if(r.swiper instanceof t)e.thumbs.swiper=r.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(ve(r.swiper)){const d=Object.assign({},r.swiper);Object.assign(d,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(d),M=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",T),!0}function m(r){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const d=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView,f=e.params.thumbs.autoScrollOffset,v=f&&!t.params.loop;if(e.realIndex!==t.realIndex||v){let u=t.activeIndex,l,D;if(t.params.loop){t.slides.eq(u).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,u=t.activeIndex);const o=t.slides.eq(u).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),a=t.slides.eq(u).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof o=="undefined"?l=a:typeof a=="undefined"?l=o:a-u==u-o?l=t.params.slidesPerGroup>1?a:u:a-u<u-o?l=a:l=o,D=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,D=l>e.previousIndex?"next":"prev";v&&(l+=D==="next"?f:-1*f),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(l)<0&&(t.params.centeredSlides?l>u?l=l-Math.floor(d/2)+1:l=l+Math.floor(d/2)-1:l>u&&t.params.slidesPerGroup===1,t.slideTo(l,r?0:void 0))}let p=1;const y=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(p=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(p=1),p=Math.floor(p),t.slides.removeClass(y),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let u=0;u<p;u+=1)t.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+u}"]`).addClass(y);else for(let u=0;u<p;u+=1)t.slides.eq(e.realIndex+u).addClass(y)}_("beforeInit",()=>{const{thumbs:r}=e.params;!r||!r.swiper||(b(),m(!0))}),_("slideChange update resize observerUpdate",()=>{m()}),_("setTransition",(r,t)=>{const d=e.thumbs.swiper;!d||d.destroyed||d.setTransition(t)}),_("beforeDestroy",()=>{const r=e.thumbs.swiper;!r||r.destroyed||M&&r.destroy()}),Object.assign(e.thumbs,{init:b,update:m})}function Se(i){let{swiper:e,extendParams:h,emit:_,once:k}=i;h({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function M(){const m=e.getTranslate();e.setTranslate(m),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function T(){const{touchEventsData:m,touches:r}=e;m.velocities.length===0&&m.velocities.push({position:r[e.isHorizontal()?"startX":"startY"],time:m.touchStartTime}),m.velocities.push({position:r[e.isHorizontal()?"currentX":"currentY"],time:O()})}function b(m){let{currentPos:r}=m;const{params:t,$wrapperEl:d,rtlTranslate:f,snapGrid:v,touchEventsData:p}=e,u=O()-p.touchStartTime;if(r<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(r>-e.maxTranslate()){e.slides.length<v.length?e.slideTo(v.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(p.velocities.length>1){const c=p.velocities.pop(),S=p.velocities.pop(),J=c.position-S.position,L=c.time-S.time;e.velocity=J/L,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(L>150||O()-c.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,p.velocities.length=0;let l=1e3*t.freeMode.momentumRatio;const D=e.velocity*l;let o=e.translate+D;f&&(o=-o);let a=!1,x;const n=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let w;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-n&&(o=e.maxTranslate()-n),x=e.maxTranslate(),a=!0,p.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(w=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>n&&(o=e.minTranslate()+n),x=e.minTranslate(),a=!0,p.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(w=!0);else if(t.freeMode.sticky){let c;for(let S=0;S<v.length;S+=1)if(v[S]>-o){c=S;break}Math.abs(v[c]-o)<Math.abs(v[c-1]-o)||e.swipeDirection==="next"?o=v[c]:o=v[c-1],o=-o}if(w&&k("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(f?l=Math.abs((-o-e.translate)/e.velocity):l=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const c=Math.abs((f?-o:o)-e.translate),S=e.slidesSizesGrid[e.activeIndex];c<S?l=t.speed:c<2*S?l=t.speed*1.5:l=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&a?(e.updateProgress(x),e.setTransition(l),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||!p.allowMomentumBounce||(_("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(x),d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(_("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(l),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,d.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&_("_freeModeNoMomentumRelease");(!t.freeMode.momentum||u>=t.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:M,onTouchMove:T,onTouchEnd:b}})}const Te=K({props:{},components:{Swiper:we,SwiperSlide:ge},setup(i,{emit:e}){const h=X(),_=W(),k=ee(),M=te("emitter"),T=E(1),b=se(),m=E({}),r=async()=>{var o,a,x;try{const n=await pe(`${h.params.productId}`);((a=(o=n.data)==null?void 0:o.product)==null?void 0:a.imagesUrl.length)&&(n.data.product.imagesUrl=n.data.product.imagesUrl.filter(c=>!!c)),m.value=N({},(x=n.data)==null?void 0:x.product),m.value.contentreplace=m.value.content.replace(/\n/g,"<br>");const w=localStorage.getItem("favorData")?JSON.parse(localStorage.getItem("favorData")):[];m.value.isFavorProduct=!!w.find(c=>c==h.params.productId)}catch(n){b.error(`${n.response?n.response.data.message:n}`,{timeout:2e3,hideProgressBar:!0})}},t=E(null),d=(o=null)=>{t.value=o},f=o=>{k.commit("m_setSearchData",{category:o,title:"",price:""}),window.scrollTo({top:400,left:0}),_.push("/productslist")},v=o=>{let a=[];!!localStorage.getItem("favorData")?(a=JSON.parse(localStorage.getItem("favorData")),!!a.find(w=>w==o.id)?(a=a.filter(w=>w!=o.id),b.info("The Item has been removed from favorite.",{timeout:2e3,hideProgressBar:!0})):(a.push(o.id),b.info("The Item has  been added to favorite.",{timeout:2e3,hideProgressBar:!0}))):(a=[o.id],b.info("The Item has  been added to favorite.",{timeout:2e3,hideProgressBar:!0})),localStorage.setItem("favorData",JSON.stringify(a)),M.emit("getFavorData"),r()},p=async o=>{try{let a={};if(!!k.state.cart.find(n=>n.product_id==o.id)){let n=k.state.cart.find(c=>c.product_id==o.id);a={product_id:n.product_id,qty:+n.qty+ +T.value};const w=await me({data:a},n.id);M.emit("getCartData")}else{a={product_id:o.id,qty:+T.value};const n=await fe({data:a});M.emit("getCartData")}b.info("The Item has already been added to cart. ",{timeout:2e3,hideProgressBar:!0})}catch(a){b.error(`${a.response?a.response.data.message:a}`,{timeout:2e3,hideProgressBar:!0})}},y=o=>{let a=[];const x=!!localStorage.getItem("recentlyData"),n=h.params.productId;x?(a=JSON.parse(localStorage.getItem("recentlyData")),!!a.find(c=>c==n)&&(a=a.filter(c=>c!=n)),a.unshift(n)):a=[n],a.length>10&&(a=a.slice(0,10)),localStorage.setItem("recentlyData",JSON.stringify(a))},u=E([]),l=async()=>{var n;let o=localStorage.getItem("recentlyData")?JSON.parse(localStorage.getItem("recentlyData")):[];if(sessionStorage.getItem("needs")){let w=JSON.parse(sessionStorage.getItem("needs"));o=o.map(c=>w.find(S=>c==S.id)),u.value=[...o];return}let x=[...(n=(await he()).data)==null?void 0:n.products];x=x.filter(w=>w.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),o=o.map(w=>x.find(c=>w==c.id)),u.value=[...o],sessionStorage.setItem("needs",JSON.stringify(x))},D=o=>{window.scrollTo({top:0,left:0}),_.replace({name:"productdetail",params:{productId:o.id}})};return oe(()=>h.params.productId,async(o,a)=>{o&&(await r(),await d(),await y(),l())}),ie(async()=>{await r(),await d(),await y(),l()}),{product:m,getData:r,setRecentlyViewData:y,getRecentlyViewData:l,itemsRecently:u,showDetail:D,thumbsSwiper:t,setThumbsSwiper:d,goSpecialCategory:f,modules:[Se,U,_e],modules2:[xe,be,ye,U],addToFavorite:v,addToCart:p,selectedQty:T}}}),g=i=>(ne("data-v-1cde53c6"),i=i(),le(),i),Ce={class:"pb-6"},ke=z('<section class="bg-section" data-v-1cde53c6><div class="text-white bg-setting bg-setting-local" data-v-1cde53c6><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-1cde53c6><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-1cde53c6><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-1cde53c6> Shop </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-1cde53c6> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-1cde53c6></div></div></div></section>',1),Me={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3"},Ie={class:"flex items-center space-x-2 text-gray-800 text-sm"},Pe=g(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)),De=[Pe],Be=g(()=>s("span",null,[s("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),Ve=g(()=>s("span",null,[s("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),$e=g(()=>s("span",null,[s("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),Ee={class:"text-gray-400"},Ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"},je={class:"flex flex-col md:flex-row -mx-4"},Fe={class:"md:flex-1 px-4"},Re={class:"product-img"},Oe=["src"],Le=["src"],qe={class:"md:flex-1 px-4"},He={class:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"},Ne={class:"flex items-center space-x-4 my-4"},ze={class:"rounded-lg bg-gray-100 flex py-2 px-3"},Ze=g(()=>s("span",{class:"mr-1 mt-1",style:{color:"red"}},"$",-1)),Ue={class:"font-bold text-3xl",style:{color:"red"}},Je={class:"flex-1"},Ge={class:"flex"},Qe=de(" $ "),Ye={class:"old-price ml-1"},Ke={class:"theme-color5 text-xl font-semibold"},Xe=g(()=>s("p",{class:"text-gray-400 text-sm"},"Inclusive of all Taxes.",-1)),We={class:"text-gray-500"},et={class:"flex py-4 space-x-4"},tt={class:"relative"},st=g(()=>s("div",{class:"text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold"}," Qty ",-1)),ot=z("<option data-v-1cde53c6>1</option><option data-v-1cde53c6>2</option><option data-v-1cde53c6>3</option><option data-v-1cde53c6>4</option><option data-v-1cde53c6>5</option><option data-v-1cde53c6>6</option><option data-v-1cde53c6>7</option><option data-v-1cde53c6>8</option><option data-v-1cde53c6>9</option><option data-v-1cde53c6>10</option>",10),it=[ot],at=g(()=>s("svg",{class:"w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M8 9l4-4 4 4m0 6l-4 4-4-4"})],-1)),rt=["fill","stroke"],nt=g(()=>s("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},null,-1)),lt=[nt],dt={class:"card mt-10"},ct=g(()=>s("i",{class:"pi pi-tag"},null,-1)),ut=g(()=>s("span",{style:{display:"inline-block"},class:"ml-1"}," Specifications",-1)),pt=["innerHTML"],mt=g(()=>s("i",{class:"pi pi-wallet"},null,-1)),ft=g(()=>s("span",{style:{display:"inline-block"},class:"ml-1"}," Returns Policy",-1)),ht=g(()=>s("div",{class:"specifications-content"},[s("p",null," \u25CF Items with a value of $35 or more must be returned using a trackable shipping method. "),s("p",null," \u25CF All product packaging (boxes, manuals, warranty cards, etc.) and certificates of authenticity, grading, and appraisal must be returned with the item. "),s("p",null,"\u25CF Any items returned without original documentation will be rejected."),s("p",null," \u25CF Items that have been resized, damaged, or otherwise altered after delivery won't be accepted for return. ")],-1)),vt=g(()=>s("h2",{class:"heading-line",style:{margin:"50px 0 25px"}},[s("span",null,"Your recently viewed items")],-1)),wt={class:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden"},gt=["onClick"],xt=g(()=>s("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[s("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),bt=[xt],yt=["onClick"],_t=g(()=>s("div",{class:"itemCat-hover-content"},[s("svg",{width:"36",height:"36",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M19.4697 20.5304C19.7626 20.8232 20.2374 20.8232 20.5303 20.5304C20.8232 20.2375 20.8232 19.7626 20.5303 19.4697L19.4697 20.5304ZM7 9.25C6.58579 9.25 6.25 9.58579 6.25 10C6.25 10.4142 6.58579 10.75 7 10.75V9.25ZM13 10.75C13.4142 10.75 13.75 10.4142 13.75 10C13.75 9.58579 13.4142 9.25 13 9.25V10.75ZM10.75 7C10.75 6.58579 10.4142 6.25 10 6.25C9.58579 6.25 9.25 6.58579 9.25 7H10.75ZM9.25 13C9.25 13.4142 9.58579 13.75 10 13.75C10.4142 13.75 10.75 13.4142 10.75 13H9.25ZM20.5303 19.4697L15.4801 14.4194L14.4194 15.4801L19.4697 20.5304L20.5303 19.4697ZM10 16.25C6.54822 16.25 3.75 13.4518 3.75 10H2.25C2.25 14.2802 5.71979 17.75 10 17.75V16.25ZM3.75 10C3.75 6.54822 6.54822 3.75 10 3.75V2.25C5.71979 2.25 2.25 5.71979 2.25 10H3.75ZM10 3.75C13.4518 3.75 16.25 6.54822 16.25 10H17.75C17.75 5.71979 14.2802 2.25 10 2.25V3.75ZM16.25 10C16.25 11.7261 15.5513 13.2876 14.4194 14.4194L15.4801 15.4801C16.8817 14.0784 17.75 12.1399 17.75 10H16.25ZM14.4194 14.4194C13.2876 15.5513 11.7261 16.25 10 16.25V17.75C12.1399 17.75 14.0784 16.8818 15.4801 15.4801L14.4194 14.4194ZM7 10.75H13V9.25H7V10.75ZM9.25 7V13H10.75V7H9.25Z",fill:"#fff"})])],-1)),St=[_t],Tt={class:"px-5 py-3 mt-2"},Ct={class:"uppercase text-center theme-color7"},kt={class:"text-black-500 mt-2 text-center theme-color7"};function Mt(i,e,h,_,k,M){const T=A("swiper-slide"),b=A("swiper"),m=A("TabPanel"),r=A("TabView");return P(),$("div",Ce,[ke,s("div",Me,[s("div",Ie,[s("div",{class:"hover:underline hover:text-gray-800 cursor-pointer",onClick:e[0]||(e[0]=B(t=>i.$router.push("/"),["prevent"]))},De),Be,s("div",{class:"text-gray-800 hover:underline hover:text-gray-900 cursor-pointer",onClick:e[1]||(e[1]=B(t=>i.$router.push("/productslist"),["prevent"]))}," Shop "),Ve,s("div",{href:"#",class:"text-gray-800 hover:underline hover:text-gray-900 cursor-pointer",onClick:e[2]||(e[2]=t=>i.goSpecialCategory(i.product.category))},I(i.product.category),1),$e,s("span",Ee,I(i.product.title),1)])]),s("div",Ae,[s("div",je,[s("div",Fe,[s("div",Re,[V(b,{loop:!1,onSwiper:i.setThumbsSwiper,spaceBetween:0,slidesPerView:5,freeMode:!1,watchSlidesProgress:!1,modules:i.modules,class:"mySwiper",direction:"vertical"},{default:C(()=>[(P(!0),$(j,null,F(i.product.imagesUrl,(t,d)=>(P(),R(T,{key:`content${d}`},{default:C(()=>[s("img",{src:t},null,8,Oe)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),V(b,{style:{"--swiper-navigation-color":"gray","--swiper-pagination-color":"gray","--swiper-navigation-size":"32px"},loop:!1,spaceBetween:10,navigation:!0,thumbs:{swiper:i.thumbsSwiper},modules:i.modules,class:"mySwiper2"},{default:C(()=>[(P(!0),$(j,null,F(i.product.imagesUrl,(t,d)=>(P(),R(T,{key:`content${d}`},{default:C(()=>[s("img",{src:t},null,8,Le)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"])])]),s("div",qe,[s("h2",He,I(i.product.title),1),s("div",Ne,[s("div",null,[s("div",ze,[Ze,s("span",Ue,I(i.product.price||""),1)])]),s("div",Je,[s("div",Ge,[Qe,s("p",Ye,I(i.product.origin_price||""),1),s("p",Ke," Save "+I(((+i.product.origin_price-+i.product.price)/+i.product.origin_price*100).toFixed(1))+"% ",1)]),Xe])]),s("p",We,I(i.product.description||""),1),s("div",et,[s("div",tt,[st,ae(s("select",{class:"cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1","onUpdate:modelValue":e[3]||(e[3]=t=>i.selectedQty=t)},it,512),[[re,i.selectedQty]]),at]),s("button",{type:"button",class:"h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white",onClick:e[4]||(e[4]=B(t=>i.addToCart(i.product),["stop"]))}," Add to Cart "),s("button",{onClick:e[5]||(e[5]=B(t=>i.addToFavorite(i.product),["stop"])),class:"focus:outline-none mx-8 sm:mx-0 item-hover-content item-hover-content2"},[(P(),$("svg",{class:"h-6 w-6",fill:i.product.isFavorProduct?"#FCD34D":"none",viewBox:"0 0 24 24",stroke:i.product.isFavorProduct?"#FCD34D":"currentColor"},lt,8,rt))])])])]),s("div",dt,[V(r,{class:"tabview-custom",ref:"tabview4"},{default:C(()=>[V(m,null,{header:C(()=>[ct,ut]),default:C(()=>[s("div",{class:"specifications-content",innerHTML:i.product.contentreplace},null,8,pt)]),_:1}),V(m,null,{header:C(()=>[mt,ft]),default:C(()=>[ht]),_:1})]),_:1},512)]),vt,V(b,{ref:"{swiperRef}",mousewheel:{invert:!0},slidesPerView:1,spaceBetween:30,loop:!1,speed:1200,centeredSlides:!1,lazy:!0,navigation:{nextEl:".arrow-next",prevEl:".arrow-previous"},initialSlide:1,keyboard:{enabled:!0},class:"product-slide",breakpoints:{0:{slidesPerView:1.5,spaceBetween:15},478:{slidesPerView:3,spaceBetween:15},767:{slidesPerView:2.25,spaceBetween:30},988:{slidesPerView:4.25,spaceBetween:50},1920:{slidesPerView:4.25,spaceBetween:50}},modules:i.modules2,scrollbar:{delay:3e3}},{default:C(()=>[(P(!0),$(j,null,F(i.itemsRecently,(t,d)=>(P(),R(T,{key:`itemCat${d}`},{default:C(()=>[s("div",wt,[s("div",{class:"h-56 w-full product-background",style:ce(t.imageUrl?`background:url(${t.imageUrl})`:"")},[s("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:B(f=>i.addToCart(t),["prevent"])},bt,8,gt),s("div",{class:"itemCat-hover cursor-pointer",onClick:B(f=>i.showDetail(t),["prevent"])},St,8,yt)],4),s("div",Tt,[s("h3",Ct,I(t.title||""),1),s("h4",kt," $"+I(t.price),1)])])]),_:2},1024))),128))]),_:1},8,["navigation","breakpoints","modules"])])])}var Vt=ue(Te,[["render",Mt],["__scopeId","data-v-1cde53c6"]]);export{Vt as default};
