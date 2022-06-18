import{d as F,u as V,b as N,e as P,f as L,r as S,i as R,o as A,s as k,g as E,j as g,k as e,y as _,l as j,F as I,p as T,t as u,q as O,a6 as z,a7 as U,h,ag as q,ad as M,w as x,a8 as J}from"./vendor.22f6fc7a.js";import{_ as H,g as W,p as G,a as Y}from"./index.a279a585.js";const K=F({props:{},setup(t,{emit:l}){const y=V(),C=N();P();const p=L(),w=S([]),v=R("emitter"),b=[{label:"Mens",value:"Mens"},{label:"Womens",value:"Womens"},{label:"Dive",value:"Dive"},{label:"Classic",value:"Classic"},{label:"Ceramic",value:"Ceramic"}],i=S({category:"",title:"",price:[100,1600]}),m=async()=>{var a;let o=[];if(sessionStorage.getItem("needs"))o=JSON.parse(sessionStorage.getItem("needs"));else try{o=[...(a=(await W("")).data)==null?void 0:a.products]}catch(r){p.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}o=o.filter(r=>r.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),i.value.title&&(o=o.filter(r=>r.title.includes(i.value.title))),i.value.category&&(o=o.filter(r=>r.category==i.value.category)),i.value.price[0]&&(o=o.filter(r=>+r.price>=+i.value.price[0])),i.value.price[1]&&(o=o.filter(r=>+r.price<=+i.value.price[1])),w.value=[...o]},s=()=>{i.value={category:"",title:"",price:[100,3e3]},m()},f=o=>{window.scrollTo({top:0,left:0}),C.push({name:"productdetail",params:{productId:o.id}})},n=o=>{let a=[];const r=!!localStorage.getItem("favorData");console.log("existFavorArr",r),r?(a=JSON.parse(localStorage.getItem("favorData")),!!a.find(D=>D==o.id)||(a.push(o.id),localStorage.setItem("favorData",JSON.stringify(a)))):(a=[o.id],localStorage.setItem("favorData",JSON.stringify(a))),p.info("The Item has  been added favorite. ",{timeout:2e3,hideProgressBar:!0})},$=async o=>{try{let a={};if(!!y.state.cart.find(d=>d.product_id==o.id)){let d=y.state.cart.find(B=>B.product_id==o.id);a={product_id:d.product_id,qty:+d.qty+1};const D=await G({data:a},d.id);v.emit("getCartData")}else{a={product_id:o.id,qty:1};const d=await Y({data:a});v.emit("getCartData")}p.info("The Item has already been added cart. ",{timeout:2e3,hideProgressBar:!0})}catch(a){p.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}};return A(async()=>{await m()}),{searchData:i,categoryOptions:b,items:w,getData:m,clearData:s,showDetail:f,addToFavorite:n,addToCart:$}}}),c=t=>(z("data-v-26f058cf"),t=t(),U(),t),Q=O('<section data-v-26f058cf></section><section class="bg-section" data-v-26f058cf><div class="text-white bg-setting bg-setting-local" data-v-26f058cf><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-26f058cf><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-26f058cf><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-26f058cf> Shop </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-26f058cf> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-26f058cf></div></div></div></section>',2),X={class:"flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50"},Z={class:"w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex"},ee={class:"p-inputgroup"},te={class:"w-full flex flex-col lg:flex-row lg:px-6"},se={class:"w-full lg:w-56 relative"},oe=c(()=>e("div",{class:"py-3 bg-white w-full flex items-center justify-center lg:hidden cursor-pointer font-bold"},[M(" Change Filters "),e("svg",{class:"h-8 w-8 text-gray-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})])],-1)),ae={class:"lg:sticky lg:top-96"},re={open:"",class:"overflow-hidden border border-gray-200 rounded"},le=c(()=>e("summary",{class:"flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"},[e("span",{class:"text-sm font-medium"}," Toggle Filters "),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1)),ie={class:"border-t border-gray-200 lg:border-t-0"},ne=c(()=>e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Type ",-1)),ce={class:"px-5 py-6 space-y-2"},de={class:"form-check-label inline-block text-gray-800 cursor-pointer"},ue=["value"],pe=c(()=>e("fieldset",null,[e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Price ")],-1)),me={class:"px-5 py-6 space-y-2"},fe={class:"flex justify-between px-5 py-3 border-t border-gray-200"},ge={class:"flex-1 lg:pl-12 py-6 px-6 lg:px-0"},he={class:"mt-12"},ve=c(()=>e("h1",{class:"text-3xl font-bold"},"Recommended For You",-1)),be={class:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"},_e=["onClick"],xe={class:"mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease w-72 max-w-full rounded-sm bg-white product-item-main"},ye=["onClick"],we=c(()=>e("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),ke=[we],Ce={class:"item-hover"},De=["onClick"],Se=["onClick"],je=c(()=>e("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1)),Ie=[je],Te={class:"p-6 pt-1"},Me={class:"text-sm"},$e={class:"font-bold text-base text-center"},Be={class:"font-bold text-base text-center"},Fe={class:"font-bold text-base text-center"},Ve={class:"theme-color9 line-through inline-block mr-2"},Ne={class:"theme-color8"},Pe=c(()=>e("div",{class:"product-item-hover"},"123",-1));function Le(t,l,y,C,p,w){const v=k("InputText"),b=k("Button"),i=k("Slider"),m=E("tooltip");return h(),g("div",null,[Q,e("div",X,[e("div",Z,[e("div",ee,[_(v,{placeholder:"Search Product Name / Product Content",modelValue:t.searchData.title,"onUpdate:modelValue":l[0]||(l[0]=s=>t.searchData.title=s)},null,8,["modelValue"]),_(b,{icon:"pi pi-search",class:"p-button-warning",style:{margin:"0 5px 0 0"},onClick:t.getData},null,8,["onClick"]),j(_(b,{icon:"pi pi-replay",class:"p-button-primary",onClick:t.clearData},null,8,["onClick"]),[[m,"Reset Data",void 0,{top:!0}]])])])]),e("div",te,[e("div",se,[oe,e("div",ae,[e("details",re,[le,e("aside",ie,[e("fieldset",null,[ne,e("div",ce,[(h(!0),g(I,null,T(t.categoryOptions,(s,f)=>(h(),g("div",{class:"flex items-center h-full ml-1",key:f},[e("label",de,[j(e("input",{class:"form-check-input rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none align-top bg-no-repeat bg-center bg-contai mr-2 cursor-pointer no-ring",type:"radio","onUpdate:modelValue":l[1]||(l[1]=n=>t.searchData.category=n),value:s.value,onChange:l[2]||(l[2]=(...n)=>t.getData&&t.getData(...n))},null,40,ue),[[q,t.searchData.category]]),M(" "+u(s.label),1)])]))),128))])]),pe,e("div",me,[e("h5",null," Range: "+u(t.searchData.price[0])+" \u2574"+u(t.searchData.price[1]),1),_(i,{modelValue:t.searchData.price,"onUpdate:modelValue":l[3]||(l[3]=s=>t.searchData.price=s),range:!0,max:1700},null,8,["modelValue"])]),e("div",fe,[e("button",{name:"reset",type:"button",class:"text-xs font-medium text-gray-600 underline rounded",onClick:l[4]||(l[4]=(...s)=>t.clearData&&t.clearData(...s))}," Reset All "),e("button",{name:"commit",type:"button",class:"px-5 py-3 text-xs font-medium text-white bg-green-600 rounded",onClick:l[5]||(l[5]=(...s)=>t.getData&&t.getData(...s))}," Apply Filters ")])])])])]),e("div",ge,[e("div",he,[ve,e("div",be,[(h(!0),g(I,null,T(t.items,(s,f)=>(h(),g("div",{href:"#",key:`content${f}`,onClick:x(n=>t.showDetail(s),["prevent"]),class:"product-item"},[e("div",xe,[e("div",{class:"h-56 w-full product-background",style:J(s.imageUrl?`background:url(${s.imageUrl})`:"")},[e("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:x(n=>t.addToCart(s),["stop"])},ke,8,ye),e("div",Ce,[e("div",{class:"item-hover-content",onClick:x(n=>t.showDetail(s),["prevent"])}," More ",8,De),e("button",{onClick:x(n=>t.addToFavorite(s),["stop"]),class:"focus:outline-none mx-8 sm:mx-0 item-hover-content item-hover-content2"},Ie,8,Se)])],4),e("div",Te,[e("div",Me,[e("h4",$e,u(s.category||""),1),e("h3",Be,u(s.title||""),1),e("p",Fe,[e("span",Ve," $"+u(s.origin_price),1),e("span",Ne,"$"+u(s.price),1)])])])]),Pe],8,_e))),128))])])])])])}var Ee=H(K,[["render",Le],["__scopeId","data-v-26f058cf"]]);export{Ee as default};
