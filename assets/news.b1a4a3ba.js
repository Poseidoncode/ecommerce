import{d as $,b as B,e as R,f as W,r as c,o as A,k as f,l as e,t as i,w as n,F as I,q as N,aD as S,s as C,aq as T,ar as Y,j as b}from"./vendor.b81db0ac.js";import{_ as q,v as M}from"./index.60e1ad3d.js";const P=$({props:{},setup(t,{emit:o}){const _=B();R();const k=W(),y=c(0),j=c(10),u=c(1),w=c([]),m=c([]),h=c([]),p=async()=>{var d,v;try{const a=await M("?page=1"),x=await M("?page=2");let r=[...(d=a.data)==null?void 0:d.articles,...(v=x.data)==null?void 0:v.articles];r=r.map(s=>(s.timeforshow=S(new Date(+s.create_at)).format("D MMMM, YYYY"),s)),m.value=r.filter(s=>s.category=="Popular"),h.value=r.filter(s=>s.category=="Weeks")}catch(a){k.error(`${a.response?a.response.data.message:a}`,{timeout:2e3,hideProgressBar:!0})}},g=d=>{window.scrollTo({top:0,left:0}),_.push({name:"newsdetail",params:{newsId:d.id}})};return A(async()=>{await p()}),{offset:y,rows:j,totalItemsCount:u,items:w,getData:p,showDetail:g,popular:m,weeks:h}}}),l=t=>(T("data-v-e27b238e"),t=t(),Y(),t),X=C('<section class="bg-section" data-v-e27b238e><div class="text-white bg-setting bg-setting-local" data-v-e27b238e><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-e27b238e><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-e27b238e><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-e27b238e> News </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-e27b238e> Get Your Epic time </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-e27b238e></div></div></div></section>',1),E={class:"flex justify-center items-center"},F={class:"2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"},G=l(()=>e("div",{role:"main",class:"flex flex-col items-center justify-center"},[e("h1",{class:"mb-6 text-xl font-bold md:text-4xl theme-color7 text-center"}," This Week Watches News "),e("p",{class:"text-xl leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12"}," All About Watches And Good Life! ")],-1)),J={class:"lg:flex items-stretch md:mt-12 mt-8"},V={class:"lg:w-1/2"},Z={class:"sm:flex items-center justify-between xl:gap-x-8 gap-x-6"},z={class:"sm:w-1/2 relative content-block"},H={class:"content-block-inside"},K={class:"p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"},O={class:"absolute bottom-0 left-0 p-6"},Q={class:"text-xl font-semibold 5 text-white title-outline2"},U={class:"text-base leading-4 text-white mt-2 title-outline2"},ee=l(()=>e("p",{class:"pr-2 text-sm font-medium leading-none"},"Read More",-1)),te=l(()=>e("svg",{class:"fill-stroke",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M5.75 12.5L10.25 8L5.75 3.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),se=[ee,te],oe=["src"],ie={class:"sm:w-1/2 sm:mt-0 mt-4 relative content-block"},le={class:"p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"},ae={class:"absolute bottom-0 left-0 p-6"},ne={class:"text-xl font-semibold 5 text-white title-outline2"},de={class:"text-base leading-4 text-white mt-2 title-outline2"},re=l(()=>e("p",{class:"pr-2 text-sm font-medium leading-none"},"Read More",-1)),ce=l(()=>e("svg",{class:"fill-stroke",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M5.75 12.5L10.25 8L5.75 3.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),me=[re,ce],he=["src"],pe={class:"relative"},ve={class:"md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0"},ue={class:"absolute bottom-0 left-0 md:p-10 p-6"},we={class:"text-xl font-semibold 5 text-white title-outline2"},ge={class:"text-base leading-4 text-white mt-2 title-outline2"},xe=l(()=>e("p",{class:"pr-2 text-sm font-medium leading-none"},"Read More",-1)),fe=l(()=>e("svg",{class:"fill-stroke",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M5.75 12.5L10.25 8L5.75 3.5",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),be=[xe,fe],_e=l(()=>e("img",{src:"https://i.ibb.co/Ms4qyXp/img-3.png",alt:"sitting place",class:"w-full mt-8 md:mt-6 hidden sm:block"},null,-1)),ke=l(()=>e("img",{class:"w-full mt-4 sm:hidden",src:"https://i.ibb.co/6XYbN7f/Rectangle-29.png",alt:"sitting place"},null,-1)),ye=C('<div class="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between" data-v-e27b238e><div class="relative" data-v-e27b238e><div data-v-e27b238e><p class="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0" data-v-e27b238e> 12 April 2021 </p><div class="absolute bottom-0 left-0 md:p-10 p-6" data-v-e27b238e><h2 class="text-xl font-semibold 5 text-white" data-v-e27b238e>The Decorated Ways</h2><p class="text-base leading-4 text-white mt-2" data-v-e27b238e>Dive into minimalism</p><a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline" data-v-e27b238e><p class="pr-2 text-sm font-medium leading-none" data-v-e27b238e>Read More</p><svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e27b238e><path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e27b238e></path></svg></a></div></div><img src="https://i.ibb.co/6Wfjf2w/img-4.png" alt="sitting place" class="w-full sm:block hidden" data-v-e27b238e><img class="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" data-v-e27b238e></div><div class="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4" data-v-e27b238e><div class="relative w-full" data-v-e27b238e><div data-v-e27b238e><p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0" data-v-e27b238e> 12 April 2021 </p><div class="absolute bottom-0 left-0 p-6" data-v-e27b238e><h2 class="text-xl font-semibold 5 text-white" data-v-e27b238e>The Decorated Ways</h2><p class="text-base leading-4 text-white mt-2" data-v-e27b238e> Dive into minimalism </p><a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline" data-v-e27b238e><p class="pr-2 text-sm font-medium leading-none" data-v-e27b238e>Read More</p><svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e27b238e><path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e27b238e></path></svg></a></div></div><img src="https://i.ibb.co/3yvZBpm/img-5.png" class="w-full" alt="chair" data-v-e27b238e></div><div class="relative w-full sm:mt-0 mt-4" data-v-e27b238e><div data-v-e27b238e><p class="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0" data-v-e27b238e> 12 April 2021 </p><div class="absolute bottom-0 left-0 p-6" data-v-e27b238e><h2 class="text-xl font-semibold 5 text-white" data-v-e27b238e>The Decorated Ways</h2><p class="text-base leading-4 text-white mt-2" data-v-e27b238e> Dive into minimalism </p><a href="javascript:void(0)" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline" data-v-e27b238e><p class="pr-2 text-sm font-medium leading-none" data-v-e27b238e>Read More</p><svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-e27b238e><path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-e27b238e></path></svg></a></div></div><img src="https://i.ibb.co/gDdnJb5/img-6.png" class="w-full" alt="wall design" data-v-e27b238e></div></div></div>',1),je={class:"container mx-auto 2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto"},De=l(()=>e("h1",{class:"heading-line text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50 my-10",style:{margin:"0 0 5px"}},[e("span",null,"Popular News")],-1)),Ce={class:"news-content"},Me={class:"bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mx-3"},Le=["onClick"],$e=["src","alt"],Be={class:"p-5"},Re=["onClick"],We=["title"],Ae={class:"wrapper-outline"},Ie={class:"content-outline"},Ne={class:"flex justify-end mt-2"},Se=["onClick"];function Te(t,o,_,k,y,j){var u,w,m,h,p,g,d,v,a,x,r;return b(),f("div",null,[X,e("div",E,[e("div",F,[G,e("div",J,[e("div",V,[e("div",Z,[e("div",z,[e("div",H,[e("p",K,i(((u=t.weeks[0])==null?void 0:u.timeforshow)||""),1),e("div",O,[e("h2",Q,i(((w=t.weeks[0])==null?void 0:w.title)||""),1),e("p",U,i(((m=t.weeks[0])==null?void 0:m.outline)||""),1),e("a",{href:"javascript:void(0)",class:"focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",onClick:o[0]||(o[0]=n(s=>t.showDetail(t.weeks[0]),["prevent"]))},se)])]),e("img",{src:(h=t.weeks[0])==null?void 0:h.image,class:"w-full content-block-img",onClick:o[1]||(o[1]=n(s=>t.showDetail(t.weeks[0]),["prevent"]))},null,8,oe)]),e("div",ie,[e("div",null,[e("p",le,i(((p=t.weeks[1])==null?void 0:p.timeforshow)||""),1),e("div",ae,[e("h2",ne,i(((g=t.weeks[1])==null?void 0:g.title)||""),1),e("p",de,i(((d=t.weeks[1])==null?void 0:d.outline)||""),1),e("a",{href:"javascript:void(0)",class:"focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",onClick:o[2]||(o[2]=n(s=>t.showDetail(t.weeks[1]),["prevent"]))},me)])]),e("img",{src:(v=t.weeks[1])==null?void 0:v.image,class:"w-full content-block-img",onClick:o[3]||(o[3]=n(s=>t.showDetail(t.weeks[1]),["prevent"]))},null,8,he)])]),e("div",pe,[e("div",null,[e("p",ve,i(((a=t.weeks[2])==null?void 0:a.timeforshow)||""),1),e("div",ue,[e("h2",we,i(((x=t.weeks[2])==null?void 0:x.title)||""),1),e("p",ge,i(((r=t.weeks[2])==null?void 0:r.outline)||""),1),e("a",{href:"javascript:void(0)",class:"focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline",onClick:o[4]||(o[4]=n(s=>t.showDetail(t.weeks[2]),["prevent"]))},be)])]),_e,ke])]),ye])])]),e("div",je,[De,e("div",Ce,[(b(!0),f(I,null,N(t.popular.slice(0,4),(s,L)=>(b(),f("div",{class:"main-content",key:`news${L}`},[e("div",Me,[e("div",{class:"news-img cursor-pointer",onClick:n(D=>t.showDetail(s),["prevent"])},[e("img",{class:"rounded-t-lg",src:s.image,alt:s.title},null,8,$e)],8,Le),e("div",Be,[e("a",{href:"#",onClick:n(D=>t.showDetail(s),["prevent"])},[e("h5",{class:"text-gray-900 font-bold text-xl tracking-tight mb-2 title-outline",title:s.title},i(s.title||""),9,We)],8,Re),e("div",Ae,[e("p",Ie,i(s.outline||""),1)]),e("div",Ne,[e("a",{class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center mr-1",href:"#",onClick:n(D=>t.showDetail(s),["prevent"])}," Read more ",8,Se)])])])]))),128))])])])}var Pe=q(P,[["render",Te],["__scopeId","data-v-e27b238e"]]);export{Pe as default};
