var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(t,s,a)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,k=(t,s)=>{for(var a in s||(s={}))I.call(s,a)&&y(t,a,s[a]);if(b)for(var a of b(s))P.call(s,a)&&y(t,a,s[a]);return t};import{d as V,a as U,u as N,Z as D,r as S,o as L,g,c as w,e,w as x,a1 as d,j as m,a2 as i,f as $,U as A,V as F,b as h,F as j,$ as C,h as B}from"./vendor.8eef0a9d.js";import{s as R}from"./apis.81b8b6f5.js";import{S as z,a as E,f as H,N as G,T as Q}from"./thumbs.min.4974e5da.js";import{_ as Y}from"./index.880d2f94.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";import"./dayjs.min.b172dca0.js";const Z=V({props:{},components:{Swiper:z,SwiperSlide:E},setup(t,{emit:s}){const a=U();N();const f=D(),c=S({}),_=async()=>{var l,v,n;try{const r=await R(`${a.params.productId}`);((v=(l=r.data)==null?void 0:l.product)==null?void 0:v.imagesUrl.length)&&(r.data.product.imagesUrl=r.data.product.imagesUrl.filter(M=>!!M)),c.value=k({},(n=r.data)==null?void 0:n.product),c.value.contentreplace=c.value.content.replace(/\n/g,"<br>"),console.log("product.value",c.value)}catch(r){f.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}};L(async()=>{await _(),u()});const p=S(null),u=(l=null)=>{p.value=l};return{product:c,getData:_,thumbsSwiper:p,setThumbsSwiper:u,modules:[H,G,Q]}}}),o=t=>(A("data-v-a2810e0c"),t=t(),F(),t),q={class:"pb-6"},J=$('<section class="bg-section" data-v-a2810e0c><div class="text-white bg-setting bg-setting-local" data-v-a2810e0c><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-a2810e0c><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-a2810e0c><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-a2810e0c> Shop </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-a2810e0c> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-a2810e0c></div></div></div></section>',1),K={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},O={class:"flex items-center space-x-2 text-gray-800 text-sm"},W=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)),X=[W],ee=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),te=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),se=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),oe={class:"text-gray-400"},ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"},re={class:"flex flex-col md:flex-row -mx-4"},ne={class:"md:flex-1 px-4"},ie={class:"product-img"},le=["src"],de=["src"],ce={class:"md:flex-1 px-4"},pe={class:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"},ue={class:"flex items-center space-x-4 my-4"},me={class:"rounded-lg bg-gray-100 flex py-2 px-3"},he=o(()=>e("span",{class:"mr-1 mt-1",style:{color:"red"}},"$",-1)),ve={class:"font-bold text-3xl",style:{color:"red"}},ge={class:"flex-1"},_e={class:"flex"},we={class:"old-price"},xe={class:"text-green-500 text-xl font-semibold"},fe=o(()=>e("p",{class:"text-gray-400 text-sm"},"Inclusive of all Taxes.",-1)),be={class:"text-gray-500"},ye=$('<div class="flex py-4 space-x-4" data-v-a2810e0c><div class="relative" data-v-a2810e0c><div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold" data-v-a2810e0c> Qty </div><select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1" data-v-a2810e0c><option data-v-a2810e0c>1</option><option data-v-a2810e0c>2</option><option data-v-a2810e0c>3</option><option data-v-a2810e0c>4</option><option data-v-a2810e0c>5</option></select><svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-a2810e0c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" data-v-a2810e0c></path></svg></div><button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white" data-v-a2810e0c> Add to Cart </button></div>',1),ke={class:"card"},Se=o(()=>e("i",{class:"pi pi-calendar"},null,-1)),$e=o(()=>e("span",null,"Specifications",-1)),je=["innerHTML"],Ce=o(()=>e("i",{class:"pi pi-user"},null,-1)),Be=o(()=>e("span",null,"Returns Policy",-1)),Me=o(()=>e("p",null," \u25CF Items with a value of $35 or more must be returned using a trackable shipping method. ",-1)),Te=o(()=>e("p",null," \u25CF All product packaging (boxes, manuals, warranty cards, etc.) and certificates of authenticity, grading, and appraisal must be returned with the item. ",-1)),Ie=o(()=>e("p",null," \u25CF Any items returned without original documentation will be rejected. ",-1)),Pe=o(()=>e("p",null," \u25CF Items that have been resized, damaged, or otherwise altered after delivery won't be accepted for return. ",-1)),Ve=o(()=>e("h2",{class:"heading-line",style:{margin:"0 0 5px"}},[e("span",null,"Your recently viewed items")],-1));function Ue(t,s,a,f,c,_){const p=g("swiper-slide"),u=g("swiper"),l=g("TabPanel"),v=g("TabView");return h(),w("div",q,[J,e("div",K,[e("div",O,[e("a",{href:"#",class:"hover:underline hover:text-gray-800",onClick:s[0]||(s[0]=x(n=>t.$router.push("/"),["prevent"]))},X),ee,e("a",{href:"#",class:"text-gray-800 hover:underline hover:text-gray-900",onClick:s[1]||(s[1]=x(n=>t.$router.push("/productslist"),["prevent"]))},"Shop"),te,e("a",{href:"#",class:"text-gray-800 hover:underline hover:text-gray-900",onClick:s[2]||(s[2]=x(n=>t.$router.push("/productslist"),["prevent"]))},d(t.product.category),1),se,e("span",oe,d(t.product.title),1)])]),e("div",ae,[e("div",re,[e("div",ne,[e("div",ie,[m(u,{loop:!1,onSwiper:t.setThumbsSwiper,spaceBetween:0,slidesPerView:5,freeMode:!1,watchSlidesProgress:!1,modules:t.modules,class:"mySwiper",direction:"vertical"},{default:i(()=>[(h(!0),w(j,null,C(t.product.imagesUrl,(n,r)=>(h(),B(p,{key:`content${r}`},{default:i(()=>[e("img",{src:n},null,8,le)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),m(u,{style:{"--swiper-navigation-color":"gray","--swiper-pagination-color":"gray","--swiper-navigation-size":"32px"},loop:!1,spaceBetween:10,navigation:!0,thumbs:{swiper:t.thumbsSwiper},modules:t.modules,class:"mySwiper2"},{default:i(()=>[(h(!0),w(j,null,C(t.product.imagesUrl,(n,r)=>(h(),B(p,{key:`content${r}`},{default:i(()=>[e("img",{src:n},null,8,de)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"])])]),e("div",ce,[e("h2",pe,d(t.product.title),1),e("div",ue,[e("div",null,[e("div",me,[he,e("span",ve,d(t.product.price||""),1)])]),e("div",ge,[e("div",_e,[e("p",we,"$"+d(t.product.origin_price||""),1),e("p",xe," Save "+d(((+t.product.origin_price-+t.product.price)/+t.product.origin_price*100).toFixed(1))+"% ",1)]),fe])]),e("p",be,d(t.product.description||""),1),ye])]),e("div",ke,[m(v,{class:"tabview-custom",ref:"tabview4"},{default:i(()=>[m(l,null,{header:i(()=>[Se,$e]),default:i(()=>[e("div",{innerHTML:t.product.contentreplace},null,8,je)]),_:1}),m(l,null,{header:i(()=>[Ce,Be]),default:i(()=>[Me,Te,Ie,Pe]),_:1})]),_:1},512)]),Ve])])}var He=Y(Z,[["render",Ue],["__scopeId","data-v-a2810e0c"]]);export{He as default};
