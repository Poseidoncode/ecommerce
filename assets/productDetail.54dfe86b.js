var C=Object.defineProperty;var f=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var x=(t,s,a)=>s in t?C(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,y=(t,s)=>{for(var a in s||(s={}))M.call(s,a)&&x(t,a,s[a]);if(f)for(var a of f(s))I.call(s,a)&&x(t,a,s[a]);return t};import{d as P,V,R as N,W as U,r as k,X as D,e as v,c as b,a as e,w as S,$ as c,h,a0 as n,a1 as R,a2 as A,b as F,o as m,F as $,Z as j,f as T}from"./vendor.86b11e5a.js";import{s as L}from"./apis.5deb6618.js";import{S as z,a as H,f as E,N as Q,T as W}from"./thumbs.min.d7386bec.js";import{_ as X}from"./index.a0383145.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";import"./dayjs.min.b172dca0.js";const Y=P({props:{},components:{Swiper:z,SwiperSlide:H},setup(t,{emit:s}){const a=V();N();const w=U(),d=k({}),g=async()=>{var l,_,i;try{const r=await L(`${a.params.productId}`);((_=(l=r.data)==null?void 0:l.product)==null?void 0:_.imagesUrl.length)&&(r.data.product.imagesUrl=r.data.product.imagesUrl.filter(B=>!!B)),d.value=y({},(i=r.data)==null?void 0:i.product),d.value.contentreplace=d.value.content.replace(/\n/g,"<br>"),console.log("product.value",d.value)}catch(r){w.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}};D(async()=>{await g(),u()});const p=k(null),u=(l=null)=>{p.value=l};return{product:d,getData:g,thumbsSwiper:p,setThumbsSwiper:u,modules:[E,Q,W]}}}),o=t=>(R("data-v-b9b305d2"),t=t(),A(),t),Z={class:"py-6"},q={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},G={class:"flex items-center space-x-2 text-gray-400 text-sm"},J=o(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"w-4 h-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})],-1)),K=[J],O=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),ee=o(()=>e("span",null,[e("svg",{class:"h-5 w-5 leading-none text-gray-300",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})])],-1)),te={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6"},se={class:"flex flex-col md:flex-row -mx-4"},oe={class:"md:flex-1 px-4"},ae={class:"product-img"},re=["src"],ne=["src"],ie={class:"md:flex-1 px-4"},le={class:"mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl"},de={class:"flex items-center space-x-4 my-4"},ce={class:"rounded-lg bg-gray-100 flex py-2 px-3"},pe=o(()=>e("span",{class:"mr-1 mt-1",style:{color:"red"}},"$",-1)),ue={class:"font-bold text-3xl",style:{color:"red"}},he={class:"flex-1"},me={class:"flex"},_e={class:"old-price"},ve={class:"text-green-500 text-xl font-semibold"},ge=o(()=>e("p",{class:"text-gray-400 text-sm"},"Inclusive of all Taxes.",-1)),be={class:"text-gray-500"},we=F('<div class="flex py-4 space-x-4" data-v-b9b305d2><div class="relative" data-v-b9b305d2><div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold" data-v-b9b305d2> Qty </div><select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1" data-v-b9b305d2><option data-v-b9b305d2>1</option><option data-v-b9b305d2>2</option><option data-v-b9b305d2>3</option><option data-v-b9b305d2>4</option><option data-v-b9b305d2>5</option></select><svg class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-b9b305d2><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" data-v-b9b305d2></path></svg></div><button type="button" class="h-14 px-6 py-2 font-semibold rounded-xl bg-blue-600 hover:bg-blue-500 text-white" data-v-b9b305d2> Add to Cart </button></div>',1),fe={class:"card"},xe=o(()=>e("i",{class:"pi pi-calendar"},null,-1)),ye=o(()=>e("span",null,"Specifications",-1)),ke=["innerHTML"],Se=o(()=>e("i",{class:"pi pi-user"},null,-1)),$e=o(()=>e("span",null,"Returns Policy",-1)),je=o(()=>e("p",null,"\u25CF Items with a value of $35 or more must be returned using a trackable shipping method. ",-1)),Te=o(()=>e("p",null,"\u25CF All product packaging (boxes, manuals, warranty cards, etc.) and certificates of authenticity, grading, and appraisal must be returned with the item. ",-1)),Be=o(()=>e("p",null,"\u25CF Any items returned without original documentation will be rejected. ",-1)),Ce=o(()=>e("p",null,"\u25CF Items that have been resized, damaged, or otherwise altered after delivery won't be accepted for return. ",-1)),Me=o(()=>e("h2",{class:"heading-line",style:{margin:"0 0 5px"}},[e("span",null,"Your recently viewed items")],-1));function Ie(t,s,a,w,d,g){const p=v("swiper-slide"),u=v("swiper"),l=v("TabPanel"),_=v("TabView");return m(),b("div",Z,[e("div",q,[e("div",G,[e("a",{href:"#",class:"hover:underline hover:text-gray-600",onClick:s[0]||(s[0]=S(i=>t.$router.push("/"),["prevent"]))},K),O,e("a",{href:"#",class:"hover:underline hover:text-gray-600",onClick:s[1]||(s[1]=S(i=>t.$router.push("/productslist"),["prevent"]))},"Shop"),ee,e("span",null,c(t.product.category),1)])]),e("div",te,[e("div",se,[e("div",oe,[e("div",ae,[h(u,{loop:!1,onSwiper:t.setThumbsSwiper,spaceBetween:0,slidesPerView:5,freeMode:!1,watchSlidesProgress:!1,modules:t.modules,class:"mySwiper",direction:"vertical"},{default:n(()=>[(m(!0),b($,null,j(t.product.imagesUrl,(i,r)=>(m(),T(p,{key:`content${r}`},{default:n(()=>[e("img",{src:i},null,8,re)]),_:2},1024))),128))]),_:1},8,["onSwiper","modules"]),h(u,{style:{"--swiper-navigation-color":"gray","--swiper-pagination-color":"gray","--swiper-navigation-size":"32px"},loop:!1,spaceBetween:10,navigation:!0,thumbs:{swiper:t.thumbsSwiper},modules:t.modules,class:"mySwiper2"},{default:n(()=>[(m(!0),b($,null,j(t.product.imagesUrl,(i,r)=>(m(),T(p,{key:`content${r}`},{default:n(()=>[e("img",{src:i},null,8,ne)]),_:2},1024))),128))]),_:1},8,["thumbs","modules"])])]),e("div",ie,[e("h2",le,c(t.product.title),1),e("div",de,[e("div",null,[e("div",ce,[pe,e("span",ue,c(t.product.price||""),1)])]),e("div",he,[e("div",me,[e("p",_e,"$"+c(t.product.origin_price||""),1),e("p",ve,"Save "+c(((+t.product.origin_price-+t.product.price)/+t.product.origin_price*100).toFixed(1))+"%",1)]),ge])]),e("p",be,c(t.product.description||""),1),we])]),e("div",fe,[h(_,{class:"tabview-custom",ref:"tabview4"},{default:n(()=>[h(l,null,{header:n(()=>[xe,ye]),default:n(()=>[e("div",{innerHTML:t.product.contentreplace},null,8,ke)]),_:1}),h(l,null,{header:n(()=>[Se,$e]),default:n(()=>[je,Te,Be,Ce]),_:1})]),_:1},512)]),Me])])}var Le=X(Y,[["render",Ie],["__scopeId","data-v-b9b305d2"]]);export{Le as default};
