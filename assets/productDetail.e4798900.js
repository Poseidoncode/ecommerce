var T=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(t,s,a)=>s in t?T(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,k=(t,s)=>{for(var a in s||(s={}))I.call(s,a)&&y(t,a,s[a]);if(b)for(var a of b(s))P.call(s,a)&&y(t,a,s[a]);return t};import{d as V,a as D,u as H,X as N,r as S,o as U,g,c as _,e,w as x,$ as l,j as m,a0 as d,f as j,a1 as A,a2 as Y,b as h,F as $,Z as M,h as B}from"./vendor.bd448381.js";import{s as z}from"./apis.18ded106.js";import{S as F,a as G,f as L,N as R,T as E}from"./thumbs.min.c3eedf03.js";import{_ as q}from"./index.62836e88.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";import"./dayjs.min.b172dca0.js";const Q=V({props:{},components:{Swiper:F,SwiperSlide:G},setup(t,{emit:s}){const a=D();H();const w=N(),c=S({}),f=async()=>{var i,v,n;try{const r=await z(`${a.params.productId}`);((v=(i=r.data)==null?void 0:i.product)==null?void 0:v.imagesUrl.length)&&(r.data.product.imagesUrl=r.data.product.imagesUrl.filter(C=>!!C)),c.value=k({},(n=r.data)==null?void 0:n.product),c.value.contentreplace=c.value.content.replace(/\n/g,"<br>"),console.log("product.value",c.value)}catch(r){w.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}};U(async()=>{await f(),u()});const p=S(null),u=(i=null)=>{p.value=i};return{product:c,getData:f,thumbsSwiper:p,setThumbsSwiper:u,modules:[L,R,E]}}}),o=t=>(A("data-v-6ddfbaa0"),t=t(),Y(),t),W={class:"py-6"},X=j('<section data-v-6ddfbaa0><div class="text-white bg-setting bg-setting-local" style="background:url(&#39;https://images.unsplash.com/photo-1617317376997-8748e6862c01?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1170&amp;q=80&#39;);background-position:50% 65%;background-size:cover;" data-v-6ddfbaa0><div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24" data-v-6ddfbaa0><div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8" data-v-6ddfbaa0><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose" data-v-6ddfbaa0> Shop </h1><h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2" data-v-6ddfbaa0> Get Your Epic time </h2><p class="text-sm md:text-base text-gray-50 mb-4" data-v-6ddfbaa0> You\u2019re in good hands on our watch. </p></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-6ddfbaa0></div></div></div></section>',1),Z={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},J={class:"flex items-center space-x-2 text-gray-800 text-sm"},K=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)),O=[K],ee=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),te=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),se=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-800",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),oe={class:"text-gray-400"},ae={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"},re={class:"flex flex-col md:flex-row -mx-4"},ne={class:"md:flex-1 px-4"},de={class:"product-img"},ie=["src"],le=["src"],ce={class:"md:flex-1 px-4"},pe={class:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"},ue={class:"flex items-center space-x-4 my-4"},me={class:"rounded-lg bg-gray-100 flex py-2 px-3"},he=o(()=>e("span",{class:"mr-1 mt-1",style:{color:"red"}},"$",-1)),ve={class:"font-bold text-3xl",style:{color:"red"}},ge={class:"flex-1"},fe={class:"flex"},_e={class:"old-price"},xe={class:"text-green-500 text-xl font-semibold"},we=o(()=>e("p",{class:"text-gray-400 text-sm"},"Inclusive of all Taxes.",-1)),be={class:"text-gray-500"},ye=j('<div class="flex py-4 space-x-4" data-v-6ddfbaa0><div class="relative" data-v-6ddfbaa0><div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold" data-v-6ddfbaa0> Qty </div><select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1" data-v-6ddfbaa0><option data-v-6ddfbaa0>1</option><option data-v-6ddfbaa0>2</option><option data-v-6ddfbaa0>3</option><option data-v-6ddfbaa0>4</option><option data-v-6ddfbaa0>5</option></select><svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-6ddfbaa0><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" data-v-6ddfbaa0></path></svg></div><button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white" data-v-6ddfbaa0> Add to Cart </button></div>',1),ke={class:"card"},Se=o(()=>e("i",{class:"pi pi-calendar"},null,-1)),je=o(()=>e("span",null,"Specifications",-1)),$e=["innerHTML"],Me=o(()=>e("i",{class:"pi pi-user"},null,-1)),Be=o(()=>e("span",null,"Returns Policy",-1)),Ce=o(()=>e("p",null," \u25CF Items with a value of $35 or more must be returned using a trackable shipping method. ",-1)),Te=o(()=>e("p",null," \u25CF All product packaging (boxes, manuals, warranty cards, etc.) and certificates of authenticity, grading, and appraisal must be returned with the item. ",-1)),Ie=o(()=>e("p",null," \u25CF Any items returned without original documentation will be rejected. ",-1)),Pe=o(()=>e("p",null," \u25CF Items that have been resized, damaged, or otherwise altered after delivery won't be accepted for return. ",-1)),Ve=o(()=>e("h2",{class:"heading-line",style:{margin:"0 0 5px"}},[e("span",null,"Your recently viewed items")],-1));function De(t,s,a,w,c,f){const p=g("swiper-slide"),u=g("swiper"),i=g("TabPanel"),v=g("TabView");return h(),_("div",W,[X,e("div",Z,[e("div",J,[e("a",{href:"#",class:"hover:underline hover:text-gray-800",onClick:s[0]||(s[0]=x(n=>t.$router.push("/"),["prevent"]))},O),ee,e("a",{href:"#",class:"text-gray-800 hover:underline hover:text-gray-900",onClick:s[1]||(s[1]=x(n=>t.$router.push("/productslist"),["prevent"]))},"Shop"),te,e("a",{href:"#",class:"text-gray-800 hover:underline hover:text-gray-900",onClick:s[2]||(s[2]=x(n=>t.$router.push("/productslist"),["prevent"]))},l(t.product.category),1),se,e("span",oe,l(t.product.title),1)])]),e("div",ae,[e("div",re,[e("div",ne,[e("div",de,[m(u,{loop:!1,onSwiper:t.setThumbsSwiper,spaceBetween:0,slidesPerView:5,freeMode:!1,watchSlidesProgress:!1,modules:t.modules,class:"mySwiper",direction:"vertical"},{default:d(()=>[(h(!0),_($,null,M(t.product.imagesUrl,(n,r)=>(h(),B(p,{key:`content${r}`},{default:d(()=>[e("img",{src:n},null,8,ie)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),m(u,{style:{"--swiper-navigation-color":"gray","--swiper-pagination-color":"gray","--swiper-navigation-size":"32px"},loop:!1,spaceBetween:10,navigation:!0,thumbs:{swiper:t.thumbsSwiper},modules:t.modules,class:"mySwiper2"},{default:d(()=>[(h(!0),_($,null,M(t.product.imagesUrl,(n,r)=>(h(),B(p,{key:`content${r}`},{default:d(()=>[e("img",{src:n},null,8,le)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"])])]),e("div",ce,[e("h2",pe,l(t.product.title),1),e("div",ue,[e("div",null,[e("div",me,[he,e("span",ve,l(t.product.price||""),1)])]),e("div",ge,[e("div",fe,[e("p",_e,"$"+l(t.product.origin_price||""),1),e("p",xe," Save "+l(((+t.product.origin_price-+t.product.price)/+t.product.origin_price*100).toFixed(1))+"% ",1)]),we])]),e("p",be,l(t.product.description||""),1),ye])]),e("div",ke,[m(v,{class:"tabview-custom",ref:"tabview4"},{default:d(()=>[m(i,null,{header:d(()=>[Se,je]),default:d(()=>[e("div",{innerHTML:t.product.contentreplace},null,8,$e)]),_:1}),m(i,null,{header:d(()=>[Me,Be]),default:d(()=>[Ce,Te,Ie,Pe]),_:1})]),_:1},512)]),Ve])])}var Le=q(Q,[["render",De],["__scopeId","data-v-6ddfbaa0"]]);export{Le as default};
