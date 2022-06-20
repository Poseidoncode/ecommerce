import{d as P,u as V,b as N,e as A,f as L,r as F,i as R,o as E,s as C,g as O,j as v,k as e,y as w,m as I,F as T,p as j,t as m,q as z,ah as U,ai as q,h as f,ar as J,ao as B,w as k,aj as H}from"./vendor.9007db54.js";import{_ as W,g as G,p as Y,a as K}from"./index.a74ad88d.js";const Q=P({props:{},setup(t,{emit:l}){const h=V(),S=N();A();const u=L(),D=F([]),b=R("emitter"),y=[{label:"Mens",value:"Mens"},{label:"Womens",value:"Womens"},{label:"Dive",value:"Dive"},{label:"Classic",value:"Classic"},{label:"Ceramic",value:"Ceramic"}],i=F({category:"",title:"",price:[0,1600]}),g=async()=>{var x,n,p;let o=[];if(sessionStorage.getItem("needs"))o=JSON.parse(sessionStorage.getItem("needs"));else try{o=[...(x=(await G("")).data)==null?void 0:x.products]}catch(a){u.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}const r=localStorage.getItem("favorData")?JSON.parse(localStorage.getItem("favorData")):[];o=o.filter(a=>a.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),o=o.map(a=>(a.isFavorProduct=!!r.find($=>$==a.id),a)),((p=(n=h.state)==null?void 0:n.searchData)==null?void 0:p.category)&&(i.value.category=h.state.searchData.category,h.commit("m_setSearchData",{category:"",title:"",price:[0,1600]})),i.value.title&&(o=o.filter(a=>a.title.includes(i.value.title))),i.value.category&&(o=o.filter(a=>a.category==i.value.category)),i.value.price[0]&&(o=o.filter(a=>+a.price>=+i.value.price[0])),i.value.price[1]&&(o=o.filter(a=>+a.price<=+i.value.price[1])),D.value=[...o]},s=()=>{i.value={category:"",title:"",price:[0,1600]},g()},_=o=>{window.scrollTo({top:0,left:0}),S.push({name:"productdetail",params:{productId:o.id}})},c=o=>{let r=[];!!localStorage.getItem("favorData")?(r=JSON.parse(localStorage.getItem("favorData")),!!r.find(p=>p==o.id)?(r=r.filter(p=>p!=o.id),u.info("The Item has been removed from favorite.",{timeout:2e3,hideProgressBar:!0})):(r.push(o.id),u.info("The Item has  been added to favorite.",{timeout:2e3,hideProgressBar:!0}))):(r=[o.id],u.info("The Item has  been added to favorite.",{timeout:2e3,hideProgressBar:!0})),localStorage.setItem("favorData",JSON.stringify(r)),b.emit("getFavorData"),g()},M=async o=>{try{let r={};if(!!h.state.cart.find(n=>n.product_id==o.id)){let n=h.state.cart.find(a=>a.product_id==o.id);r={product_id:n.product_id,qty:+n.qty+1};const p=await Y({data:r},n.id);b.emit("getCartData")}else{r={product_id:o.id,qty:1};const n=await K({data:r});b.emit("getCartData")}u.info("The Item has already been added to cart. ",{timeout:2e3,hideProgressBar:!0})}catch(r){u.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}};return E(async()=>{await g()}),{searchData:i,categoryOptions:y,items:D,getData:g,clearData:s,showDetail:_,addToFavorite:c,addToCart:M}}}),d=t=>(U("data-v-83674bc0"),t=t(),q(),t),X=z('<section data-v-83674bc0></section><section class="bg-section" data-v-83674bc0><div class="text-white bg-setting bg-setting-local" data-v-83674bc0><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-83674bc0><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-83674bc0><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-83674bc0> Shop </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-83674bc0> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-83674bc0></div></div></div></section>',2),Z={class:"flex flex-col sm:flex-row sm:h-20 px-6 border-b border-gray-300 bg-white relative z-50"},ee={class:"w-full mx-auto mt-2 mb-4 sm:mx-0 sm:mb-0 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-1/2 sm:h-full justify-center items-center block sm:flex"},te={class:"p-inputgroup"},oe={class:"w-full flex flex-col lg:flex-row lg:px-6"},se={class:"w-full lg:w-56 relative"},ae=d(()=>e("div",{class:"py-3 bg-white w-full flex items-center justify-center lg:hidden cursor-pointer font-bold"},[B(" Change Filters "),e("svg",{class:"h-8 w-8 text-gray-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"})])],-1)),re={class:"lg:sticky lg:top-96"},le={open:"",class:"overflow-hidden border border-gray-200 rounded"},ie=d(()=>e("summary",{class:"flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"},[e("span",{class:"text-sm font-medium"}," Toggle Filters "),e("svg",{class:"w-5 h-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])],-1)),ne={class:"border-t border-gray-200 lg:border-t-0"},ce=d(()=>e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Type ",-1)),de={class:"px-5 py-6 space-y-2"},ue={class:"form-check-label inline-block text-gray-800 cursor-pointer"},pe=["value"],me=d(()=>e("fieldset",null,[e("legend",{class:"block w-full px-5 py-3 text-xs font-medium bg-gray-50"}," Price ")],-1)),he={class:"px-5 py-6 space-y-2"},ge={class:"flex justify-between px-5 py-3 border-t border-gray-200"},ve={class:"flex-1 lg:pl-12 py-6 px-6 lg:px-0"},fe={class:"mt-12"},be=d(()=>e("h1",{class:"text-3xl font-bold"},"Recommended For You",-1)),_e={class:"grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-4 gap-6 mt-12"},ye=["onClick"],xe={class:"mx-auto cursor-pointer h-full hover:border-gray-400 transform transition-all duration-200 ease w-72 max-w-full rounded-sm bg-white product-item-main"},we=["onClick"],ke=d(()=>e("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1)),De=[ke],Ce={class:"item-hover"},Se=["onClick"],Fe=["onClick"],Ie=["fill","stroke"],Te=d(()=>e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"},null,-1)),je=[Te],Be={class:"p-6 pt-1"},Me={class:"text-sm"},$e={class:"font-bold text-base text-center"},Pe={class:"font-bold text-base text-center"},Ve={class:"font-bold text-base text-center"},Ne={class:"theme-color9 line-through inline-block mr-2"},Ae={class:"theme-color8"},Le=d(()=>e("div",{class:"product-item-hover"},"123",-1));function Re(t,l,h,S,u,D){const b=C("InputText"),y=C("Button"),i=C("Slider"),g=O("tooltip");return f(),v("div",null,[X,e("div",Z,[e("div",ee,[e("div",te,[w(b,{placeholder:"Search Product Name / Product Content",modelValue:t.searchData.title,"onUpdate:modelValue":l[0]||(l[0]=s=>t.searchData.title=s)},null,8,["modelValue"]),w(y,{icon:"pi pi-search",class:"p-button-warning",style:{margin:"0 5px 0 0"},onClick:t.getData},null,8,["onClick"]),I(w(y,{icon:"pi pi-replay",class:"p-button-primary",onClick:t.clearData},null,8,["onClick"]),[[g,"Reset Data",void 0,{top:!0}]])])])]),e("div",oe,[e("div",se,[ae,e("div",re,[e("details",le,[ie,e("aside",ne,[e("fieldset",null,[ce,e("div",de,[(f(!0),v(T,null,j(t.categoryOptions,(s,_)=>(f(),v("div",{class:"flex items-center h-full ml-1",key:_},[e("label",ue,[I(e("input",{class:"form-check-input rounded-full h-5 w-5 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none align-top bg-no-repeat bg-center bg-contai mr-2 cursor-pointer no-ring",type:"radio","onUpdate:modelValue":l[1]||(l[1]=c=>t.searchData.category=c),value:s.value,onChange:l[2]||(l[2]=(...c)=>t.getData&&t.getData(...c))},null,40,pe),[[J,t.searchData.category]]),B(" "+m(s.label),1)])]))),128))])]),me,e("div",he,[e("h5",null," Range: "+m(t.searchData.price[0])+" \u2574"+m(t.searchData.price[1]),1),w(i,{modelValue:t.searchData.price,"onUpdate:modelValue":l[3]||(l[3]=s=>t.searchData.price=s),range:!0,max:1700},null,8,["modelValue"])]),e("div",ge,[e("button",{name:"reset",type:"button",class:"text-xs font-medium text-gray-600 underline rounded",onClick:l[4]||(l[4]=(...s)=>t.clearData&&t.clearData(...s))}," Reset All "),e("button",{name:"commit",type:"button",class:"px-5 py-3 text-xs font-medium text-white bg-green-600 rounded",onClick:l[5]||(l[5]=(...s)=>t.getData&&t.getData(...s))}," Apply Filters ")])])])])]),e("div",ve,[e("div",fe,[be,e("div",_e,[(f(!0),v(T,null,j(t.items,(s,_)=>(f(),v("div",{href:"#",key:`content${_}`,onClick:k(c=>t.showDetail(s),["prevent"]),class:"product-item"},[e("div",xe,[e("div",{class:"h-56 w-full product-background",style:H(s.imageUrl?`background:url(${s.imageUrl})`:"")},[e("button",{class:"p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500 cart-btn",onClick:k(c=>t.addToCart(s),["stop"])},De,8,we),e("div",Ce,[e("div",{class:"item-hover-content",onClick:k(c=>t.showDetail(s),["prevent"])}," More ",8,Se),e("button",{onClick:k(c=>t.addToFavorite(s),["stop"]),class:"focus:outline-none mx-8 sm:mx-0 item-hover-content item-hover-content2"},[(f(),v("svg",{class:"h-6 w-6",fill:s.isFavorProduct?"#FCD34D":"none",viewBox:"0 0 24 24",stroke:s.isFavorProduct?"#FCD34D":"currentColor"},je,8,Ie))],8,Fe)])],4),e("div",Be,[e("div",Me,[e("h4",$e,m(s.category||""),1),e("h3",Pe,m(s.title||""),1),e("p",Ve,[e("span",Ne," $"+m(s.origin_price),1),e("span",Ae,"$"+m(s.price),1)])])])]),Le],8,ye))),128))])])])])])}var ze=W(Q,[["render",Re],["__scopeId","data-v-83674bc0"]]);export{ze as default};
