import{c as z,a as H,d as T,i as q,u as Z,r as k,b as J,e as U,f as Y,o as W,g as A,h as v,j as f,k as o,n as g,w as _,l as $,m as C,t as P,F as j,p as G,v as K,q as M,s as O,x as D,y as Q,z as X,A as ee,B as te,C as oe,D as se,E as re,G as ne,H as ae,I as ie,J as le,K as ce,L as de,M as ue,N as me,O as pe,P as he,Q as ve,R as ge,S as fe,T as _e,U as ye,V as be,W as we,X as xe,Y as ke,Z as $e,_ as Ce,$ as Pe,a0 as Ee,a1 as Ae,a2 as je,a3 as Oe,a4 as Ie,a5 as Le}from"./vendor.22f6fc7a.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=c(s);fetch(s.href,i)}};Te();var Me={user:{token:"",functions:["groupMaintains","groupMaintain","deviceMaintain","warningMaintain","motivationMaintain","deviceIDMaintain"],locationName:""},cart:{},options:{gateway:[]}},De={m_setCartData(e,t){e.cart=t},m_clearData(e){e.user.id="",e.user.name="",e.user.token="",sessionStorage.clear()}},Se={a_getwayList(e){const t="gateway";return new Promise(c=>{localStorage.getItem(t)&&(e.commit("m_setOptionsList",{key:t,items:JSON.parse(localStorage.getItem(t))}),c())})}},Ve={g_userName(e){return e.user.name}},Ne=z({state:Me,mutations:De,actions:Se,getters:Ve,modules:{}});function a({url:e,method:t="get",data:c=null}){return new Promise((l,s)=>{let i=Object.assign({"Content-Type":"application/json",Authorization:`${sessionStorage.getItem("token")?sessionStorage.getItem("token").replace(/\"/g,""):""}`});const r=H.create({headers:i,baseURL:"https://vue3-course-api.hexschool.io/v2/api/poseidoncode/",timeout:8e3});(t==="get"?r.get:t==="post"?r.post:t==="put"?r.put:r.delete)(e,c).then(p=>{l(p)}).catch(function(p){s(p)})})}const Wt=(e="")=>a({url:"admin/products/all"+e}),Gt=e=>a({url:"admin/product",method:"post",data:e}),Kt=e=>a({url:`admin/product/${e}`,method:"delete"}),Qt=(e,t)=>a({url:`admin/product/${t}`,method:"put",data:e}),Xt=e=>a({url:"admin/upload",method:"post",data:e}),eo=(e="")=>a({url:"admin/orders"+e}),to=(e,t)=>a({url:`admin/order/${t}`,method:"put",data:e}),oo=e=>a({url:`admin/order/${e}`,method:"delete"}),so=e=>a({url:"admin/orders/all",method:"delete"}),ro=(e="")=>a({url:"admin/coupons"+e}),no=e=>a({url:"admin/coupon",method:"post",data:e}),ao=(e,t)=>a({url:`admin/coupon/${t}`,method:"put",data:e}),io=e=>a({url:`admin/coupon/${e}`,method:"delete"}),lo=(e="")=>a({url:"admin/articles"+e}),co=e=>a({url:`admin/article/${e}`}),uo=e=>a({url:"admin/article",method:"post",data:e}),mo=(e,t)=>a({url:`admin/article/${t}`,method:"put",data:e}),po=e=>a({url:`admin/article/${e}`,method:"delete"}),ho=()=>a({url:"products/all"}),vo=e=>a({url:`product/${e}`}),Be=()=>a({url:"cart"}),go=e=>a({url:"cart",method:"post",data:e}),Fe=(e,t)=>a({url:`cart/${t}`,method:"put",data:e}),Re=e=>a({url:`cart/${e}`,method:"delete"}),fo=(e="")=>a({url:"articles"+e}),_o=e=>a({url:`article/${e}`});var ze="./assets/brand8.png",He="./assets/brand7.png";var I=(e,t)=>{const c=e.__vccOpts||e;for(const[l,s]of t)c[l]=s;return c};const qe=T({setup(){q("emitter").on("getCartData",h=>{x()});const t=Z(),c=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},l=k(!1),s=k(!1),i=k(!1),r=J();U();const m=Y(),p=()=>{window.scrollY<50?i.value=!0:i.value=!1},n=(h="home")=>{switch(l.value=!1,window.scrollTo({top:0,left:0}),h){case"home":r.push({name:"home"});break;case"productslist":r.push({name:"productslist"});break;case"faq":r.push({name:"faq"});break;case"news":r.push({name:"news"});break;case"contact":r.push({name:"contact"});break;case"about":r.push({name:"about"});break;default:console.log("Sorry, no data")}};window.addEventListener("scroll",p,!0);const w=k([]),y=k(""),x=async()=>{var h,u,E,L;try{const b=await Be();w.value=[...(u=(h=b.data)==null?void 0:h.data)==null?void 0:u.carts],y.value=(L=(E=b.data)==null?void 0:E.data)==null?void 0:L.final_total,t.commit("m_setCartData",w.value)}catch(b){m.error(`${b.response?b.response.data:b}`,{timeout:2e3,hideProgressBar:!0})}},N=async h=>{try{const u=await Re(h.id);await x(),m.info("\u522A\u9664\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(u){m.error(`${u.response?u.response.data:u}`,{timeout:2e3,hideProgressBar:!0})}},B=async h=>{try{const u={product_id:h.product_id,qty:+h.qty},E=await Fe({data:u},h.id);await x(),m.info("\u8CFC\u7269\u8ECA\u66F4\u65B0\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(u){m.error(`${u.response?u.response.data:u}`,{timeout:2e3,hideProgressBar:!0})}},F=()=>{setTimeout(()=>{s.value=!0},0)},R=()=>{s.value=!1};return W(async()=>{window.scrollY<50?i.value=!0:i.value=!1,await x()}),{isOpen:l,cartOpen:s,openCart:F,handleScroll:p,scrollIsZero:i,redirctPage:n,scrollToTop:c,items:w,itemsTotal:y,getData:x,deleteData:N,putData:B,outsideEvent:R}}}),Ze={class:"container mx-auto px-6 py-3"},Je={class:"flex items-center justify-between"},Ue=o("div",{class:"hidden w-full text-gray-600 md:flex md:items-center"},null,-1),Ye={class:"w-full text-gray-700 md:text-center text-2xl font-semibold flex justify-center"},We={class:"flex items-center justify-end w-full"},Ge=o("svg",{class:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o("circle",{cx:"12",cy:"7",r:"4"})],-1),Ke=[Ge],Qe=o("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Xe=[Qe],et=o("svg",{class:"h-6 w-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),tt=[et],ot=o("svg",{class:"h-6 w-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),st=[ot],rt={class:"flex sm:hidden"},nt=o("svg",{viewBox:"0 0 24 24",class:"h-6 w-6 fill-current"},[o("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})],-1),at=[nt],it={class:"flex flex-col sm:flex-row"},lt={class:"flex items-center justify-between"},ct={class:"text-md font-medium text-gray-700"},dt=o("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M6 18L18 6M6 6l12 12"})],-1),ut=[dt],mt=o("hr",{class:"my-3"},null,-1),pt={class:"flex"},ht=["src"],vt={class:"mx-3"},gt={class:"text-sm text-gray-600"},ft={class:"flex items-center mt-2"},_t={class:"mr-2"},yt=["onUpdate:modelValue","onChange"],bt=M('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',10),wt=[bt],xt=["onClick"],kt=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),$t=[kt],Ct={class:"text-gray-600"},Pt=o("div",{class:"mt-8"},[o("form",{class:"flex items-center justify-center"},[o("input",{class:"form-input w-48",type:"text",placeholder:"Add promocode"}),o("button",{class:"ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"},[o("span",null,"Apply")])])],-1),Et={class:"flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"},At=o("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1),jt=o("hr",{class:"my-6"},null,-1),Ot={class:"text-right theme-color-main"};function It(e,t,c,l,s,i){const r=A("badge"),m=A("tooltip"),p=A("click-outside");return v(),f(j,null,[o("div",{class:g(["scroll-btn-item",e.scrollIsZero?"btn-fade-out":"btn-fade-show"]),onClick:t[0]||(t[0]=_((...n)=>e.scrollToTop&&e.scrollToTop(...n),["stop"])),variant:"primary",pill:""},null,2),o("header",{class:g(["header-content",e.scrollIsZero?"":"addBg"])},[o("div",Ze,[o("div",Je,[Ue,o("div",Ye,[o("img",{class:g(["logo mr-2 logo1",e.scrollIsZero?"":"addLogo"]),style:{height:"78px"},src:ze},null,2),o("img",{class:g(["logo mr-2 logo2",e.scrollIsZero?"":"addLogo"]),style:{height:"78px"},src:He},null,2)]),o("div",We,[o("button",{onClick:t[1]||(t[1]=n=>e.$router.push("/login")),style:{"margin-right":"16px"},class:g(["focus:outline-none mx-8 sm:mx-0 mr-10",e.scrollIsZero?"theme-color1":"theme-color3"])},Ke,2),o("button",{onClick:t[2]||(t[2]=n=>e.$router.push("/favourite")),style:{"margin-right":"16px"},class:g(["focus:outline-none mx-8 sm:mx-0",e.scrollIsZero?"theme-color1":"theme-color3"])},Xe,2),e.items.length?$((v(),f("button",{key:0,onClick:t[3]||(t[3]=(...n)=>e.openCart&&e.openCart(...n)),class:g(["focus:outline-none mx-4 sm:mx-0",e.scrollIsZero?"theme-color1":"theme-color3"])},tt,2)),[[r,`${e.items.length}`,void 0,{warning:!0}]]):C("",!0),e.items.length?C("",!0):(v(),f("button",{key:1,onClick:t[4]||(t[4]=(...n)=>e.openCart&&e.openCart(...n)),class:g(["focus:outline-none mx-4 sm:mx-0",e.scrollIsZero?"theme-color1":"theme-color3"])},st,2)),o("div",rt,[o("button",{onClick:t[5]||(t[5]=n=>e.isOpen=!e.isOpen),type:"button",class:"text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500","aria-label":"toggle menu"},at)])])]),o("nav",{class:g([e.isOpen?"":"hidden","sm:flex sm:justify-center sm:items-center mt-4"])},[o("div",it,[o("a",{onClick:t[6]||(t[6]=_(n=>e.redirctPage("home"),["prevent"])),class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#"},"Home"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[7]||(t[7]=_(n=>e.redirctPage("productslist"),["prevent"]))},"Shop"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[8]||(t[8]=_(n=>e.redirctPage("contact"),["prevent"]))},"Contact"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",onClick:t[9]||(t[9]=_(n=>e.redirctPage("faq"),["prevent"])),href:"#"},"FAQ"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[10]||(t[10]=_(n=>e.redirctPage("news"),["prevent"]))},"News"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[11]||(t[11]=_(n=>e.redirctPage("about"),["prevent"]))},"About")])],2)])],2),$((v(),f("div",{class:g([e.cartOpen?"translate-x-0 ease-out":"translate-x-full ease-in","fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"]),style:{"z-index":"100"}},[o("div",lt,[o("h3",ct," Shopping bag ("+P(e.items.length)+" items) ",1),o("button",{onClick:t[12]||(t[12]=n=>e.cartOpen=!e.cartOpen),class:"text-gray-600 focus:outline-none"},ut)]),mt,(v(!0),f(j,null,G(e.items,(n,w)=>(v(),f("div",{class:"flex justify-between mt-6",key:`itemData${w}`},[o("div",pt,[o("img",{class:"h-20 w-20 object-cover rounded",src:n.product.imageUrl,alt:""},null,8,ht),o("div",vt,[o("h3",gt,P(n.product.title||""),1),o("div",ft,[o("div",_t,[$(o("select",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":y=>n.qty=y,onChange:y=>e.putData(n)},wt,40,yt),[[K,n.qty]])]),$((v(),f("button",{class:"text-gray-500 focus:outline-none focus:text-gray-600",onClick:_(y=>e.deleteData(n),["prevent"])},$t,8,xt)),[[m,"delete",void 0,{top:!0}]])])])]),o("span",Ct," $"+P(n.product.price||""),1)]))),128)),Pt,o("a",Et,[o("span",{onClick:t[13]||(t[13]=n=>{e.cartOpen=!1,e.$router.push("/checkout")})},"Chechout"),At]),jt,o("div",Ot," Total: $"+P(e.itemsTotal?e.itemsTotal.toFixed(2):""),1)],2)),[[p,e.outsideEvent]])],64)}var Lt=I(qe,[["render",It]]);const Tt=T({props:{},setup(e,{emit:t}){return{}}}),Mt=M('<div class="bg-gray-200"><div class="container mx-auto px-6 py-3 flex justify-center items-center"><p class="py-2 text-gray-500 sm:py-0 text-sm"><a href="#"> \xA0 </a></p></div></div><div class="pt-8 bg-gradient-to-b from-gray-100 to-sky-900 md:pt-20"><div class="container m-auto px-6 space-y-8 text-gray-400 md:px-12 lg:px-20"><div><div class="mb-6 gap-6 items-center justify-between py-6 sm:flex md:mb-16 md:py-0 md:space-y-6"><div class="flex flex-wrap flex-col-reverse gap-6 mt-6 sm:flex-row sm:mt-0 sm:items-center"><select name="langage" id="langae" class="px-4 py-2 w-full rounded-xl bg-gray-900 sm:w-max"><option value="en">English</option><option value="fr">French</option><option value="sw">Swahili</option></select><div class="flex gap-6"><a href="#" target="blank" aria-label="github" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a><a href="#" target="blank" aria-label="twitter" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a><a href="#" target="blank" aria-label="medium" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"></path></svg></a></div></div></div><div><div class="pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5"><div><h6 class="text-lg font-medium text-white">Contact</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div><h6 class="text-lg font-medium text-white">Products</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div><h6 class="text-lg font-medium text-white">Ressources</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div class="col-span-2 sm:col-span-3 md:col-span-2"><h6 class="text-lg font-medium text-white">Contact</h6><ul class="list-inside mt-4 space-y-4"><li><a href="tel:+243996660436" class="hover:text-cyan-400 transition">+243 996 660 436</a></li><li><a href="mailto:meschacirung@gmail.com" class="hover:text-cyan-400 transition">contact@tailus.com</a></li><li><form action=""><label for="newsletter" class="text-lg text-white">Subscribe to our newsletter</label><div class="relative mt-4"><input type="email" name="newsletter" id="newsletter" placeholder="Your email" class="w-full px-4 py-3 ring-1 ring-cyan-700 rounded-xl bg-gray-900 bg-opacity-20 invalid:ring-red-400 invalid:outline-none"><button type="submit" title="Submit" class="absolute right-0 w-max py-3 px-6 text-center rounded-r-xl transition bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-600 focus:bg-cyan-300"><span class="text-gray-900 font-semibold"> Send </span></button></div></form></li></ul></div></div><div class="py-8 border-t border-cyan-800 text-gray-200 flex justify-between"><span>\xA9 tailus 2003 - <span id="year"></span></span><span>All right reserved</span></div></div></div></div></div><div class="bg-gray-200" style="font-family:Microsoft JhengHei, Helvetica;"><div class="container mx-auto px-6 py-3 flex justify-center items-center"><p class="py-2 text-gray-500 sm:py-0 text-sm"><a href="#"> Copyright \xA9 2022 Vigilero All rights resevered. Images are for educational use only, no commercial use. </a></p></div></div>',3),Dt=[Mt];function St(e,t,c,l,s,i){return v(),f("footer",null,Dt)}var Vt=I(Tt,[["render",St]]);const Nt={components:{headercontent:Lt,footercontent:Vt},setup(){return{}}};function Bt(e,t,c,l,s,i){const r=O("headercontent"),m=O("router-view"),p=O("footercontent");return v(),f(j,null,[e.$route.meta.needNav?(v(),D(r,{key:0})):C("",!0),o("div",null,[Q(m)]),e.$route.meta.needFooter?(v(),D(p,{key:1})):C("",!0)],64)}var Ft=I(Nt,[["render",Bt]]);const Rt="modulepreload",S={},zt="./",d=function(t,c){return!c||c.length===0?t():Promise.all(c.map(l=>{if(l=`${zt}${l}`,l in S)return;S[l]=!0;const s=l.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Rt,s||(r.as="script",r.crossOrigin=""),r.href=l,document.head.appendChild(r),s)return new Promise((m,p)=>{r.addEventListener("load",m),r.addEventListener("error",p)})})).then(()=>t())};const Ht=[{path:"/",name:"home",meta:{title:"home page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./homePage.32c0c04d.js"),["assets/homePage.32c0c04d.js","assets/homePage.02dee79a.css","assets/vendor.22f6fc7a.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./Login.234e04cc.js"),["assets/Login.234e04cc.js","assets/vendor.22f6fc7a.js"]),meta:{title:"home page",needNav:!1,needFooter:!1}},{path:"/dashboard",component:()=>d(()=>import("./dashBoard.aacd9c8a.js"),["assets/dashBoard.aacd9c8a.js","assets/vendor.22f6fc7a.js"]),name:"dashboard",redirect:"/dashboard/products",meta:{title:"\u5F8C\u81FA\u7BA1\u7406",needNav:!1,needFooter:!1},children:[{path:"products",component:()=>d(()=>import("./products.448bce80.js"),["assets/products.448bce80.js","assets/products.aa3a4413.css","assets/vendor.22f6fc7a.js"]),name:"products",meta:{title:"\u7522\u54C1\u7BA1\u7406",needFooter:!1}},{path:"orders",component:()=>d(()=>import("./orders.deebf3ed.js"),["assets/orders.deebf3ed.js","assets/orders.4d6d57c2.css","assets/vendor.22f6fc7a.js"]),name:"orders",meta:{title:"\u8A02\u55AE\u7BA1\u7406",needFooter:!1}},{path:"coupons",component:()=>d(()=>import("./coupons.d4b95c95.js"),["assets/coupons.d4b95c95.js","assets/coupons.8c036f03.css","assets/vendor.22f6fc7a.js"]),name:"coupons",meta:{title:"\u512A\u60E0\u5238\u7BA1\u7406",needFooter:!1}},{path:"articles",component:()=>d(()=>import("./articles.0ecdb55a.js"),["assets/articles.0ecdb55a.js","assets/articles.9de563a5.css","assets/vendor.22f6fc7a.js"]),name:"articles",meta:{title:"\u6587\u7AE0\u7BA1\u7406",needFooter:!1}}]},{path:"/about",name:"about",meta:{title:"about page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./about.2bbd253f.js"),["assets/about.2bbd253f.js","assets/about.e818c4f8.css","assets/vendor.22f6fc7a.js"])},{path:"/contact",name:"contact",meta:{title:"contact page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./contact.36d2c7a8.js"),["assets/contact.36d2c7a8.js","assets/contact.3f5d26bf.css","assets/vendor.22f6fc7a.js"])},{path:"/news",name:"news",meta:{title:"news page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./news.53017f47.js"),["assets/news.53017f47.js","assets/news.56266cf9.css","assets/vendor.22f6fc7a.js"])},{path:"/newsdetail/:newsId",name:"newsdetail",meta:{title:"newsdetail",needNav:!0,needFooter:!0},component:()=>d(()=>import("./newsDetail.e8a9b6ca.js"),["assets/newsDetail.e8a9b6ca.js","assets/newsDetail.d5806d4f.css","assets/vendor.22f6fc7a.js"])},{path:"/faq",name:"faq",meta:{title:"faq page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./faq.19bca8ec.js"),["assets/faq.19bca8ec.js","assets/faq.7ad4244c.css","assets/vendor.22f6fc7a.js"])},{path:"/productslist",name:"productslist",meta:{title:"productslist",needNav:!0,needFooter:!0},component:()=>d(()=>import("./productsList.23b96302.js"),["assets/productsList.23b96302.js","assets/productsList.45ddea82.css","assets/vendor.22f6fc7a.js"])},{path:"/productdetail/:productId",name:"productdetail",meta:{title:"productdetail",needNav:!0,needFooter:!0},component:()=>d(()=>import("./productDetail.4c7d1fb4.js"),["assets/productDetail.4c7d1fb4.js","assets/productDetail.343c5b1c.css","assets/vendor.22f6fc7a.js","assets/thumbs.min.92940c76.js","assets/thumbs.min.d4344d30.css"])},{path:"/favourite",name:"favourite",meta:{title:"favourite page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./favourite.b2266283.js"),["assets/favourite.b2266283.js","assets/favourite.9cecee3f.css","assets/vendor.22f6fc7a.js"])},{path:"/checkout",name:"checkout",meta:{title:"checkout page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./checkout.98a75ef5.js"),["assets/checkout.98a75ef5.js","assets/checkout.3ee475eb.css","assets/vendor.22f6fc7a.js"])},{path:"/testpage",name:"testpage",meta:{title:"testpage",needNav:!1,needFooter:!1},component:()=>d(()=>import("./testpage.8c3488df.js"),["assets/testpage.8c3488df.js","assets/testpage.5d7d1862.css","assets/vendor.22f6fc7a.js"])},{path:"/testpage2",name:"testpage2",meta:{title:"testpage2",needNav:!1,needFooter:!1},component:()=>d(()=>import("./testpage2.1e398b16.js"),["assets/testpage2.1e398b16.js","assets/testpage2.b3827835.css","assets/vendor.22f6fc7a.js","assets/thumbs.min.92940c76.js","assets/thumbs.min.d4344d30.css"])}],qt=X({history:ee(),routes:Ht});var Zt=e=>(e.component("InputText",te),e.component("InputSwitch",oe),e.component("Button",se),e.component("Paginator",re),e.component("Dropdown",ne),e.component("PanelMenu",ae),e.component("Dialog",ie),e.component("Menubar",le),e.component("OverlayPanel",ce),e.component("Calendar",de),e.component("Checkbox",ue),e.component("RadioButton",me),e.component("MultiSelect",pe),e.component("AutoComplete",he),e.component("Textarea",ve),e.component("DataTable",ge),e.component("Column",fe),e.component("InputNumber",_e),e.component("Password",ye),e.component("Galleria",be),e.component("FileUpload",we),e.component("TabView",xe),e.component("TabPanel",ke),e.component("Sidebar",$e),e.component("Editor",Ce),e.component("Slider",Pe),e.directive("tooltip",Ee),e.directive("click-outside",{mounted(t,c,l){t.clickOutsideEvent=function(s){t===s.target||t.contains(s.target)||c.value(s,t)},document.body.addEventListener("click",t.clickOutsideEvent)},unmounted(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}),e.directive("badge",Ae),e.use(je),e);const Jt={transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!0},Ut=Le(),V=Zt(Oe(Ft).use(Ne).use(qt).use(Ie,Jt));V.mount("#app");V.provide("emitter",Ut);export{I as _,go as a,Wt as b,Gt as c,Qt as d,Kt as e,Xt as f,ho as g,so as h,eo as i,to as j,oo as k,ro as l,no as m,ao as n,io as o,Fe as p,co as q,lo as r,uo as s,mo as t,po as u,fo as v,_o as w,vo as x};
