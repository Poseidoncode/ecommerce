import{r as g,aj as w,ak as H,al as I,am as j,u as O,b as L,i as P,f as A,o as G,k as _,l as t,F as R,q as V,s as b,an as W,ao as q,j as y,ap as z,w as F,t as M}from"./vendor.cf51d8c8.js";import{_ as U,g as Y,p as J,a as K}from"./index.ba7ff14d.js";function T(e){return H()?(I(e),!0):!1}var D;const p=typeof window!="undefined",X=e=>typeof e=="string",k=()=>{};p&&((D=window==null?void 0:window.navigator)==null?void 0:D.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function $(e,o,d={}){const{immediate:n=!0}=d,i=g(!1);let l=null;function s(){l&&(clearTimeout(l),l=null)}function c(){i.value=!1,s()}function u(...v){s(),i.value=!0,l=setTimeout(()=>{i.value=!1,l=null,e(...v)},w(o))}return n&&(i.value=!0,p&&u()),T(c),{isPending:i,start:u,stop:c}}function Q(e){var o;const d=w(e);return(o=d==null?void 0:d.$el)!=null?o:d}const Z=p?window:void 0;p&&window.document;const tt=p?window.navigator:void 0;p&&window.location;function et(...e){let o,d,n,i;if(X(e[0])?([d,n,i]=e,o=Z):[o,d,n,i]=e,!o)return k;let l=k;const s=j(()=>Q(o),u=>{l(),!!u&&(u.addEventListener(d,n,i),l=()=>{u.removeEventListener(d,n,i),l=k})},{immediate:!0,flush:"post"}),c=()=>{s(),l()};return T(c),c}function ot(e={}){const{navigator:o=tt,read:d=!1,source:n,copiedDuring:i=1500}=e,l=["copy","cut"],s=Boolean(o&&"clipboard"in o),c=g(""),u=g(!1),v=$(()=>u.value=!1,i);function x(){o.clipboard.readText().then(a=>{c.value=a})}if(s&&d)for(const a of l)et(a,x);async function h(a=w(n)){s&&a!=null&&(await o.clipboard.writeText(a),c.value=a,u.value=!0,v.start())}return{isSupported:s,text:c,copied:u,copy:h}}const C=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},S="__vueuse_ssr_handlers__";C[S]=C[S]||{};C[S];var N;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(N||(N={}));const st={setup(){const{copy:e}=ot(),o=O(),d=L(),n=P("emitter"),i=A(),l=g([]),s=g([]),c=async()=>{var h;try{if(sessionStorage.getItem("needs")){let f=JSON.parse(sessionStorage.getItem("needs"));l.value=[...f],s.value=f.filter(E=>E.category=="Mens");return}let m=[...(h=(await Y("")).data)==null?void 0:h.products];m=m.filter(f=>f.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),l.value=[...m],s.value=m.filter(f=>f.category=="Mens"),sessionStorage.setItem("needs",JSON.stringify(m))}catch(a){i.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}},u=async h=>{try{let a={};if(!!o.state.cart.find(f=>f.product_id==h.id)){let f=o.state.cart.find(B=>B.product_id==h.id);a={product_id:f.product_id,qty:+f.qty+1};const E=await J({data:a},f.id);n.emit("getCartData")}else{a={product_id:h.id,qty:1};const f=await K({data:a});n.emit("getCartData")}i.info("The Item has already been added to cart.",{timeout:2e3,hideProgressBar:!0})}catch(a){i.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}},v=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),d.push("/productslist")},x=()=>{e("SuperCampain"),i.info("Successfully Copy Coupon Code : SuperCampain!",{timeout:2e3,hideProgressBar:!0})};return G(async()=>{c()}),{getData:c,goShop:v,items:l,itemsClassic:s,addToCart:u,copyCoupon:x}}},r=e=>(W("data-v-37f07f32"),e=e(),q(),e),nt={class:"bg-white main-content"},at=b('<section data-v-37f07f32><div class="text-white py-20 bg-setting" data-v-37f07f32><div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-v-37f07f32><div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8" data-v-37f07f32><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose" data-v-37f07f32> Luxury </h1><h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2" data-v-37f07f32> Watches : The Timeless Infinity </h2><p class="text-sm md:text-base text-gray-50 mb-4" data-v-37f07f32> Explore your favourite events and register now to showcase your talent and win exciting prizes. </p><a href="#" class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent" data-v-37f07f32> Explore Now</a></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-37f07f32></div></div></div></section>',1),it={class:"mb-8"},rt={class:"container mx-auto px-6"},lt=b('<div class="mb-6 featrue-word" data-v-37f07f32><div class="featrue-word-content" data-v-37f07f32><div data-v-37f07f32>DISCOVER ALL BRANDS</div></div><div class="featrue-word-content" data-v-37f07f32><div data-v-37f07f32>CERTIFIED PRE-OWNED</div></div><div class="featrue-word-content" data-v-37f07f32><div data-v-37f07f32>SELL YOUR WATCH</div></div><div class="featrue-word-content" data-v-37f07f32><div data-v-37f07f32>CUSTOMER SERVICE</div></div></div>',1),dt={class:"h-64 rounded-md overflow-hidden bg-cover bg-center",style:{"background-image":"url('https://images.unsplash.com/photo-1641471979402-0d40f068e06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')"}},ct={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},ut={class:"px-10 max-w-xl"},ft=r(()=>t("h2",{class:"text-2xl text-white font-semibold"},"High Precision",-1)),ht=r(()=>t("p",{class:"mt-2 text-gray-400"}," The ultimate reference in luxury chronograph watches, high-precision timing innovations since 1860. ",-1)),mt=r(()=>t("span",null,"Shop Now",-1)),pt=r(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),vt=[mt,pt],gt={class:"md:flex mt-8 md:-mx-4"},xt={class:"w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1600897425543-5369a38bd193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80')"}},wt={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},_t={class:"px-10 max-w-xl"},bt=r(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Luxury",-1)),yt=r(()=>t("p",{class:"mt-2 text-gray-400"}," Swiss luxury watch and clock manufacturer founded in 1839, located in Canton of Geneva and the Vall\xE9e de Joux. ",-1)),kt=r(()=>t("span",null,"Shop Now",-1)),Ct=r(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),St=[kt,Ct],Et={class:"w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1579172260981-30de4eabb80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}},Mt={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},Tt={class:"px-10 max-w-xl"},Dt=r(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Aesthetic",-1)),Nt=r(()=>t("p",{class:"mt-2 text-gray-400"}," Its ability to endure the challenges of time and embraces its simple purpose and aesthetic appeal. ",-1)),Bt=r(()=>t("span",null,"Shop Now",-1)),Ht=r(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),It=[Bt,Ht],jt={class:"mt-16"},Ot=r(()=>t("h3",{class:"text-2xl font-medium text-center theme-color-main"}," Classic ",-1)),Lt={class:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"},Pt=["onClick"],At=r(()=>t("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),Gt=[At],Rt=r(()=>t("div",{class:"itemCat-hover"},[t("div",{class:"itemCat-hover-content"},"More")],-1)),Vt={class:"px-5 py-3 mt-2"},Wt={class:"uppercase text-center theme-color7"},qt={class:"text-black-500 mt-2 text-center theme-color7"},zt=r(()=>t("div",{class:"word-one"},"25% Off on All products at Vigilero Stores",-1)),Ft=r(()=>t("p",{class:"word-two mb-8"}," Get an incredible 25% discount on all types of watches at Vigilero Store. Only for single use. ",-1)),Ut=r(()=>t("div",{className:"coupon-item"},[t("div",{className:"coupon-intro"},[t("h4",null,"Campaign: Super Month"),t("ul",null,[t("li",null,"Coupon Codes: EJ23K4"),t("li",null,"Expires: 2022/08/23")])]),t("div",{className:"allcoupon-value"},"40% Off")],-1)),Yt=[zt,Ft,Ut],Jt=b('<section class="text-gray-600 body-font" data-v-37f07f32><div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center" data-v-37f07f32><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036" data-v-37f07f32><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" data-v-37f07f32></path></svg><p class="leading-relaxed text-lg" data-v-37f07f32> Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&#39;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90&#39;s pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar. </p><span class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6" data-v-37f07f32></span><h2 class="text-gray-900 font-medium title-font tracking-wider text-sm" data-v-37f07f32> HOLDEN CAULFIELD </h2><p class="text-gray-500" data-v-37f07f32>Senior Product Designer</p></div></section>',1);function Kt(e,o,d,n,i,l){return y(),_("div",nt,[at,t("main",it,[t("div",rt,[lt,t("div",dt,[t("div",ct,[t("div",ut,[ft,ht,t("button",{class:"flex items-center mt-4 px-3 py-2 bg-blue-800 text-white text-sm uppercase font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700",onClick:o[0]||(o[0]=(...s)=>n.goShop&&n.goShop(...s))},vt)])])]),t("div",gt,[t("div",xt,[t("div",wt,[t("div",_t,[bt,yt,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:o[1]||(o[1]=(...s)=>n.goShop&&n.goShop(...s))},St)])])]),t("div",Et,[t("div",Mt,[t("div",Tt,[Dt,Nt,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:o[2]||(o[2]=(...s)=>n.goShop&&n.goShop(...s))},It)])])])]),t("div",jt,[Ot,t("div",Lt,[(y(!0),_(R,null,V(n.itemsClassic.slice(0,4),(s,c)=>(y(),_("div",{class:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden",key:`itemCat${c}`},[t("div",{class:"h-56 w-full product-background",style:z(s.imageUrl?`background:url(${s.imageUrl})`:"")},[t("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:F(u=>n.addToCart(s),["prevent"])},Gt,8,Pt),Rt],4),t("div",Vt,[t("h3",Wt,M(s.title||""),1),t("h4",qt," $"+M(s.price),1)])]))),128))])])]),t("section",{class:"allcoupons",onClick:o[3]||(o[3]=(...s)=>n.copyCoupon&&n.copyCoupon(...s))},Yt),Jt])])}var Qt=U(st,[["render",Kt],["__scopeId","data-v-37f07f32"]]);export{Qt as default};
