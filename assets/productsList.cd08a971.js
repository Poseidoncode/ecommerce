import{d as $,u as B,b as I,e as T,f as N,r as v,i as P,o as F,s as y,j as d,k as e,y as w,F as k,p as C,q as R,a6 as L,a7 as V,h as u,l as q,ag as z,ad as j,t as p,w as S,a8 as E}from"./vendor.22f6fc7a.js";import{_ as O,g as A,p as U,a as H}from"./index.0c782fc7.js";const J=$({props:{},setup(o,{emit:_}){const f=B(),x=I();T();const m=N(),h=v([]),g=P("emitter"),b=[{label:"Mens",value:"Mens"},{label:"Womens",value:"Womens"},{label:"Dive",value:"Dive"},{label:"Classic",value:"Classic"},{label:"Ceramic",value:"Ceramic"}],t=v({category:"",title:"",price:""}),n=async()=>{var r;try{if(sessionStorage.getItem("needs")){h.value=JSON.parse(sessionStorage.getItem("needs"));return}let c=[...(r=(await A("")).data)==null?void 0:r.products];c=c.filter(l=>l.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),h.value=[...c],sessionStorage.setItem("needs",JSON.stringify(c))}catch(s){m.error(`${s.response?s.response.data:s}`,{timeout:2e3,hideProgressBar:!0})}},i=r=>{window.scrollTo({top:0,left:0}),x.push({name:"productdetail",params:{productId:r.id}})},D=async r=>{try{let s={};if(!!f.state.cart.find(l=>l.product_id==r.id)){let l=f.state.cart.find(M=>M.product_id==r.id);s={product_id:l.product_id,qty:+l.qty+1};const Be=await U({data:s},l.id);g.emit("getCartData")}else{s={product_id:r.id,qty:1};const l=await H({data:s});g.emit("getCartData")}m.info("\u5546\u54C1\u52A0\u5165\u8CFC\u7269\u8ECA\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(s){m.error(`${s.response?s.response.data:s}`,{timeout:2e3,hideProgressBar:!0})}};return F(async()=>{await n()}),{searchData:t,categoryOptions:b,items:h,getData:n,showDetail:i,addToCart:D}}}),a=o=>(L("data-v-09ca3616"),o=o(),V(),o),W=R('<section data-v-09ca3616></section><section class="bg-section" data-v-09ca3616><div class="text-white bg-setting bg-setting-local" data-v-09ca3616><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-09ca3616><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-09ca3616><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-09ca3616> Shop </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-09ca3616> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-09ca3616></div></div></div></section>',2),G={class:"flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50"},Y={class:"w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex"},K={class:"p-inputgroup"},Q={class:"w-full flex flex-col lg:flex-row lg:px-6"},X={class:"w-full lg:w-56 relative"},Z=a(()=>e("div",{class:"py-3 bg-white w-full flex items-center justify-center lg:hidden cursor-pointer font-bold"},[j(" Change Filters "),e("svg",{class:"h-8 w-8 text-gray-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})])],-1)),ee={class:"lg:sticky lg:top-96"},te={open:"",class:"overflow-hidden border border-gray-200 rounded"},se=a(()=>e("summary",{class:"flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"},[e("span",{class:"text-sm font-medium"}," Toggle Filters "),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1)),oe={class:"border-t border-gray-200 lg:border-t-0"},ae=a(()=>e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Type ",-1)),re={class:"px-5 py-6 space-y-2"},le={class:"form-check-label inline-block text-gray-800 cursor-pointer"},ne=["value"],ie=a(()=>e("div",{class:"pt-2"},[e("button",{type:"button",class:"text-xs text-gray-500 underline"}," Reset Type ")],-1)),ce=a(()=>e("fieldset",null,[e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Price ")],-1)),de=a(()=>e("div",{class:"flex justify-between px-5 py-3 border-t border-gray-200"},[e("button",{name:"reset",type:"button",class:"text-xs font-medium text-gray-600 underline rounded"}," Reset All "),e("button",{name:"commit",type:"button",class:"px-5 py-3 text-xs font-medium text-white bg-green-600 rounded"}," Apply Filters ")],-1)),ue={class:"flex-1 lg:pl-12 py-6 px-6 lg:px-0"},pe={class:"mt-12"},me=a(()=>e("h1",{class:"text-3xl font-bold"},"Recommended For You",-1)),he={class:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"},ge=["onClick"],_e={class:"mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease w-72 max-w-full rounded-sm bg-white product-item-main"},fe=["onClick"],be=a(()=>e("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),xe=[be],ve=a(()=>e("div",{class:"item-hover"},[e("div",{class:"item-hover-content"},"More")],-1)),ye={class:"p-6 pt-1"},we={class:"text-sm"},ke={class:"font-bold text-base text-center"},Ce={class:"font-bold text-base text-center"},je={class:"font-bold text-base text-center"},Se={class:"theme-color8 mr-2"},De={class:"theme-color9 line-through"},Me=a(()=>e("div",{class:"product-item-hover"},"123",-1));function $e(o,_,f,x,m,h){const g=y("InputText"),b=y("Button");return u(),d("div",null,[W,e("div",G,[e("div",Y,[e("div",K,[w(g,{placeholder:"Search Product Name or Product Content"}),w(b,{icon:"pi pi-search",class:"p-button-warning"})])])]),e("div",Q,[e("div",X,[Z,e("div",ee,[e("details",te,[se,e("aside",oe,[e("fieldset",null,[ae,e("div",re,[(u(!0),d(k,null,C(o.categoryOptions,(t,n)=>(u(),d("div",{class:"flex items-center h-full ml-1",key:n},[e("label",le,[q(e("input",{class:"form-check-input rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none align-top bg-no-repeat bg-center bg-contai mr-2 cursor-pointer no-ring",type:"radio","onUpdate:modelValue":_[0]||(_[0]=i=>o.searchData.category=i),value:t.value},null,8,ne),[[z,o.searchData.category]]),j(" "+p(t.label),1)])]))),128)),ie])]),ce,de])])])]),e("div",ue,[e("div",pe,[me,e("div",he,[(u(!0),d(k,null,C(o.items,(t,n)=>(u(),d("a",{href:"#",key:`content${n}`,onClick:S(i=>o.showDetail(t),["prevent"]),class:"product-item"},[e("div",_e,[e("div",{class:"h-56 w-full product-background",style:E(t.imageUrl?`background:url(${t.imageUrl})`:"")},[e("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:S(i=>o.addToCart(t),["stop","prevent"])},xe,8,fe),ve],4),e("div",ye,[e("div",we,[e("h4",ke,p(t.category||""),1),e("h3",Ce,p(t.title||""),1),e("p",je,[e("span",Se,"$"+p(t.origin_price),1),e("span",De," $"+p(t.price),1)])])])]),Me],8,ge))),128))])])])])])}var Ne=O(J,[["render",$e],["__scopeId","data-v-09ca3616"]]);export{Ne as default};
