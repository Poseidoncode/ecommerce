import{u as y,b as k,i as S,f as C,r as b,o as M,j as p,k as t,F as D,m as E,p as v,a3 as B,a4 as H,h as g,a5 as j,w as I,t as _}from"./vendor.42c359b2.js";import{_ as N,g as O,p as L,a as A}from"./index.9d11ece7.js";const T={setup(){const r=y(),n=k(),h=S("emitter"),i=C(),c=b([]),u=b([]),s=async()=>{var d;try{if(sessionStorage.getItem("needs")){let a=JSON.parse(sessionStorage.getItem("needs"));c.value=[...a],u.value=a.filter(f=>f.category=="Mens");return}let l=[...(d=(await O("")).data)==null?void 0:d.products];l=l.filter(a=>a.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),c.value=[...l],u.value=l.filter(a=>a.category=="Mens"),sessionStorage.setItem("needs",JSON.stringify(l))}catch(o){i.error(`${o.response?o.response.data:o}`,{timeout:2e3,hideProgressBar:!0})}},m=async d=>{try{let o={};if(!!r.state.cart.find(a=>a.product_id==d.id)){let a=r.state.cart.find(w=>w.product_id==d.id);o={product_id:a.product_id,qty:+a.qty+1};const f=await L({data:o},a.id);h.emit("getCartData")}else{o={product_id:d.id,qty:1};const a=await A({data:o});h.emit("getCartData")}i.success("\u5546\u54C1\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(o){i.error(`${o.response?o.response.data:o}`,{timeout:2e3,hideProgressBar:!0})}},x=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"}),n.push("/productslist")};return M(async()=>{s()}),{getData:s,goShop:x,items:c,itemsClassic:u,addToCart:m}}},e=r=>(B("data-v-b86268a0"),r=r(),H(),r),V={class:"bg-white main-content"},P=v('<section data-v-b86268a0><div class="text-white py-20 bg-setting" data-v-b86268a0><div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-v-b86268a0><div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8" data-v-b86268a0><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose" data-v-b86268a0> Luxury </h1><h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2" data-v-b86268a0> Watches : The Timeless Infinity </h2><p class="text-sm md:text-base text-gray-50 mb-4" data-v-b86268a0> Explore your favourite events and register now to showcase your talent and win exciting prizes. </p><a href="#" class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent" data-v-b86268a0> Explore Now</a></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-b86268a0></div></div></div></section>',1),G={class:"mb-8"},R={class:"container mx-auto px-6"},q=v('<div class="mb-6 featrue-word" data-v-b86268a0><div class="featrue-word-content" data-v-b86268a0><div data-v-b86268a0>DISCOVER ALL BRANDS</div></div><div class="featrue-word-content" data-v-b86268a0><div data-v-b86268a0>CERTIFIED PRE-OWNED</div></div><div class="featrue-word-content" data-v-b86268a0><div data-v-b86268a0>SELL YOUR WATCH</div></div><div class="featrue-word-content" data-v-b86268a0><div data-v-b86268a0>CUSTOMER SERVICE</div></div></div>',1),z={class:"h-64 rounded-md overflow-hidden bg-cover bg-center",style:{"background-image":"url('https://images.unsplash.com/photo-1641471979402-0d40f068e06f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80')"}},W={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},U={class:"px-10 max-w-xl"},Y=e(()=>t("h2",{class:"text-2xl text-white font-semibold"},"High Precision",-1)),F=e(()=>t("p",{class:"mt-2 text-gray-400"}," The ultimate reference in luxury chronograph watches, high-precision timing innovations since 1860. ",-1)),J=e(()=>t("span",null,"Shop Now",-1)),K=e(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),X=[J,K],$={class:"md:flex mt-8 md:-mx-4"},Q={class:"w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1600897425543-5369a38bd193?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80')"}},Z={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},tt={class:"px-10 max-w-xl"},et=e(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Luxury",-1)),st=e(()=>t("p",{class:"mt-2 text-gray-400"}," Swiss luxury watch and clock manufacturer founded in 1839, located in Canton of Geneva and the Vall\xE9e de Joux. ",-1)),ot=e(()=>t("span",null,"Shop Now",-1)),at=e(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),it=[ot,at],nt={class:"w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2",style:{"background-image":"url('https://images.unsplash.com/photo-1579172260981-30de4eabb80c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}},rt={class:"bg-gray-900 bg-opacity-50 flex items-center h-full"},dt={class:"px-10 max-w-xl"},lt=e(()=>t("h2",{class:"text-2xl text-white font-semibold"},"Aesthetic",-1)),ct=e(()=>t("p",{class:"mt-2 text-gray-400"}," Its ability to endure the challenges of time and embraces its simple purpose and aesthetic appeal. ",-1)),ut=e(()=>t("span",null,"Shop Now",-1)),ht=e(()=>t("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),mt=[ut,ht],pt={class:"mt-16"},vt=e(()=>t("h3",{class:"text-gray-600 text-2xl font-medium text-center"}," Classic ",-1)),gt={class:"grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6"},xt=["onClick"],ft=e(()=>t("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[t("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),bt=[ft],_t=e(()=>t("div",{class:"itemCat-hover"},[t("div",{class:"itemCat-hover-content"},"More")],-1)),wt={class:"px-5 py-3 mt-2"},yt={class:"uppercase text-center theme-color7"},kt={class:"text-black-500 mt-2 text-center theme-color7"},St=e(()=>t("section",{class:"allcoupons"},[t("div",{class:"word-one"},"25% Off on All products at Vigilero Stores"),t("p",{class:"word-two mb-8"}," Get an incredible 25% discount on all types of watches at Vigilero Store. Only for single use. "),t("div",{className:"coupon-item"},[t("div",{className:"coupon-intro"},[t("h4",null,"Campaign: Super Month"),t("ul",null,[t("li",null,"Coupon Codes: EJ23K4"),t("li",null,"Expires: 2022/08/23")])]),t("div",{className:"allcoupon-value"},"40% Off")])],-1)),Ct=v('<section class="text-gray-600 body-font" data-v-b86268a0><div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center" data-v-b86268a0><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036" data-v-b86268a0><path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" data-v-b86268a0></path></svg><p class="leading-relaxed text-lg" data-v-b86268a0> Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90&#39;s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90&#39;s pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar. </p><span class="inline-block h-1 w-10 rounded bg-blue-500 mt-8 mb-6" data-v-b86268a0></span><h2 class="text-gray-900 font-medium title-font tracking-wider text-sm" data-v-b86268a0> HOLDEN CAULFIELD </h2><p class="text-gray-500" data-v-b86268a0>Senior Product Designer</p></div></section>',1);function Mt(r,n,h,i,c,u){return g(),p("div",V,[P,t("main",G,[t("div",R,[q,t("div",z,[t("div",W,[t("div",U,[Y,F,t("button",{class:"flex items-center mt-4 px-3 py-2 bg-blue-800 text-white text-sm uppercase font-medium rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700",onClick:n[0]||(n[0]=(...s)=>i.goShop&&i.goShop(...s))},X)])])]),t("div",$,[t("div",Q,[t("div",Z,[t("div",tt,[et,st,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:n[1]||(n[1]=(...s)=>i.goShop&&i.goShop(...s))},it)])])]),t("div",nt,[t("div",rt,[t("div",dt,[lt,ct,t("button",{class:"flex items-center mt-4 text-white text-sm uppercase font-medium rounded hover:underline focus:outline-none",onClick:n[2]||(n[2]=(...s)=>i.goShop&&i.goShop(...s))},mt)])])])]),t("div",pt,[vt,t("div",gt,[(g(!0),p(D,null,E(i.itemsClassic.slice(0,4),(s,m)=>(g(),p("div",{class:"w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden",key:`itemCat${m}`},[t("div",{class:"h-56 w-full product-background",style:j(s.imageUrl?`background:url(${s.imageUrl})`:"")},[t("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:I(x=>i.addToCart(s),["prevent"])},bt,8,xt),_t],4),t("div",wt,[t("h3",yt,_(s.title||""),1),t("h4",kt," $"+_(s.price),1)])]))),128))])])]),St,Ct])])}var Bt=N(T,[["render",Mt],["__scopeId","data-v-b86268a0"]]);export{Bt as default};
