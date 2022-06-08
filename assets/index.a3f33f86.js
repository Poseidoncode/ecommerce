import{c as z,a as H,d as M,i as q,u as Z,r as k,b as J,e as U,f as Y,o as W,g as A,h as v,j as f,k as o,n as g,w as _,l as $,m as C,t as P,F as j,p as G,v as K,q as O,s as L,x as D,y as Q,z as X,A as ee,B as te,C as oe,D as se,E as re,G as ne,H as ae,I as ie,J as le,K as ce,L as de,M as ue,N as me,O as pe,P as he,Q as ve,R as ge,S as fe,T as _e,U as ye,V as be,W as xe,X as we,Y as ke,Z as $e,_ as Ce,$ as Pe,a0 as Ee,a1 as Ae,a2 as je,a3 as Oe,a4 as Le}from"./vendor.c5c7b6b3.js";const Te=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=c(s);fetch(s.href,n)}};Te();var Ie={user:{token:"",functions:["groupMaintains","groupMaintain","deviceMaintain","warningMaintain","motivationMaintain","deviceIDMaintain"],locationName:""},cart:{},options:{gateway:[]}},Me={m_setCartData(e,t){e.cart=t},m_clearData(e){e.user.id="",e.user.name="",e.user.token="",sessionStorage.clear()}},De={a_getwayList(e){const t="gateway";return new Promise(c=>{localStorage.getItem(t)&&(e.commit("m_setOptionsList",{key:t,items:JSON.parse(localStorage.getItem(t))}),c())})}},Se={g_userName(e){return e.user.name}},Be=z({state:Ie,mutations:Me,actions:De,getters:Se,modules:{}});function i({url:e,method:t="get",data:c=null}){return new Promise((l,s)=>{let n=Object.assign({"Content-Type":"application/json",Authorization:`${sessionStorage.getItem("token")?sessionStorage.getItem("token").replace(/\"/g,""):""}`});const r=H.create({headers:n,baseURL:"https://vue3-course-api.hexschool.io/v2/api/poseidoncode/",timeout:8e3});(t==="get"?r.get:t==="post"?r.post:t==="put"?r.put:r.delete)(e,c).then(p=>{l(p)}).catch(function(p){s(p)})})}const Jt=(e="")=>i({url:"admin/products/all"+e}),Ut=e=>i({url:"admin/product",method:"post",data:e}),Yt=e=>i({url:`admin/product/${e}`,method:"delete"}),Wt=(e,t)=>i({url:`admin/product/${t}`,method:"put",data:e}),Gt=e=>i({url:"admin/upload",method:"post",data:e}),Kt=(e="")=>i({url:"admin/orders"+e}),Qt=(e,t)=>i({url:`admin/order/${t}`,method:"put",data:e}),Xt=e=>i({url:`admin/order/${e}`,method:"delete"}),eo=e=>i({url:"admin/orders/all",method:"delete"}),to=(e="")=>i({url:"admin/coupons"+e}),oo=e=>i({url:"admin/coupon",method:"post",data:e}),so=(e,t)=>i({url:`admin/coupon/${t}`,method:"put",data:e}),ro=e=>i({url:`admin/coupon/${e}`,method:"delete"}),no=(e="")=>i({url:"admin/articles"+e}),ao=e=>i({url:`admin/article/${e}`}),io=e=>i({url:"admin/article",method:"post",data:e}),lo=(e,t)=>i({url:`admin/article/${t}`,method:"put",data:e}),co=e=>i({url:`admin/article/${e}`,method:"delete"}),uo=()=>i({url:"products/all"}),mo=e=>i({url:`product/${e}`}),Ve=()=>i({url:"cart"}),po=e=>i({url:"cart",method:"post",data:e}),Ne=(e,t)=>i({url:`cart/${t}`,method:"put",data:e}),Fe=e=>i({url:`cart/${e}`,method:"delete"});var Re="./assets/brand8.png",ze="./assets/brand7.png";var T=(e,t)=>{const c=e.__vccOpts||e;for(const[l,s]of t)c[l]=s;return c};const He=M({setup(){q("emitter").on("getCartData",h=>{w()});const t=Z(),c=()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},l=k(!1),s=k(!1),n=k(!1),r=J();U();const m=Y(),p=()=>{window.scrollY<50?n.value=!0:n.value=!1},a=(h="home")=>{switch(l.value=!1,window.scrollTo({top:0,left:0}),h){case"home":r.push({name:"home"});break;case"productslist":r.push({name:"productslist"});break;case"faq":r.push({name:"faq"});break;case"news":r.push({name:"news"});break;case"about":r.push({name:"about"});break;default:console.log("Sorry, no data")}};window.addEventListener("scroll",p,!0);const x=k([]),y=k(""),w=async()=>{var h,u,E,I;try{const b=await Ve();x.value=[...(u=(h=b.data)==null?void 0:h.data)==null?void 0:u.carts],y.value=(I=(E=b.data)==null?void 0:E.data)==null?void 0:I.final_total,t.commit("m_setCartData",x.value)}catch(b){m.error(`${b.response?b.response.data:b}`,{timeout:2e3,hideProgressBar:!0})}},V=async h=>{try{const u=await Fe(h.id);await w(),m.info("\u522A\u9664\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(u){m.error(`${u.response?u.response.data:u}`,{timeout:2e3,hideProgressBar:!0})}},N=async h=>{try{const u={product_id:h.product_id,qty:+h.qty},E=await Ne({data:u},h.id);await w(),m.info("\u8CFC\u7269\u8ECA\u66F4\u65B0\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(u){m.error(`${u.response?u.response.data:u}`,{timeout:2e3,hideProgressBar:!0})}},F=()=>{setTimeout(()=>{s.value=!0},0)},R=()=>{s.value=!1};return W(async()=>{window.scrollY<50?n.value=!0:n.value=!1,await w()}),{isOpen:l,cartOpen:s,openCart:F,handleScroll:p,scrollIsZero:n,redirctPage:a,scrollToTop:c,items:x,itemsTotal:y,getData:w,deleteData:V,putData:N,outsideEvent:R}}}),qe={class:"container mx-auto px-6 py-3"},Ze={class:"flex items-center justify-between"},Je=o("div",{class:"hidden w-full text-gray-600 md:flex md:items-center"},null,-1),Ue={class:"w-full text-gray-700 md:text-center text-2xl font-semibold flex justify-center"},Ye={class:"flex items-center justify-end w-full"},We=o("svg",{class:"h-6 w-6",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[o("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o("circle",{cx:"12",cy:"7",r:"4"})],-1),Ge=[We],Ke=o("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})],-1),Qe=[Ke],Xe=o("svg",{class:"h-6 w-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),et=[Xe],tt=o("svg",{class:"h-6 w-6",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"})],-1),ot=[tt],st={class:"flex sm:hidden"},rt=o("svg",{viewBox:"0 0 24 24",class:"h-6 w-6 fill-current"},[o("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})],-1),nt=[rt],at={class:"flex flex-col sm:flex-row"},it=o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#"},"Contact",-1),lt={class:"flex items-center justify-between"},ct={class:"text-md font-medium text-gray-700"},dt=o("svg",{class:"h-5 w-5",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[o("path",{d:"M6 18L18 6M6 6l12 12"})],-1),ut=[dt],mt=o("hr",{class:"my-3"},null,-1),pt={class:"flex"},ht=["src"],vt={class:"mx-3"},gt={class:"text-sm text-gray-600"},ft={class:"flex items-center mt-2"},_t={class:"mr-2"},yt=["onUpdate:modelValue","onChange"],bt=O('<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option>',10),xt=[bt],wt=["onClick"],kt=o("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[o("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})],-1),$t=[kt],Ct={class:"text-gray-600"},Pt=O('<div class="mt-8"><form class="flex items-center justify-center"><input class="form-input w-48" type="text" placeholder="Add promocode"><button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><span>Apply</span></button></form></div><a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"><span>Chechout</span><svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a><hr class="my-6">',3),Et={class:"text-right theme-color-main"};function At(e,t,c,l,s,n){const r=A("badge"),m=A("tooltip"),p=A("click-outside");return v(),f(j,null,[o("div",{class:g(["scroll-btn-item",e.scrollIsZero?"btn-fade-out":"btn-fade-show"]),onClick:t[0]||(t[0]=_((...a)=>e.scrollToTop&&e.scrollToTop(...a),["stop"])),variant:"primary",pill:""},null,2),o("header",{class:g(["header-content",e.scrollIsZero?"":"addBg"])},[o("div",qe,[o("div",Ze,[Je,o("div",Ue,[o("img",{class:g(["logo mr-2 logo1",e.scrollIsZero?"":"addLogo"]),style:{height:"78px"},src:Re},null,2),o("img",{class:g(["logo mr-2 logo2",e.scrollIsZero?"":"addLogo"]),style:{height:"78px"},src:ze},null,2)]),o("div",Ye,[o("button",{onClick:t[1]||(t[1]=a=>e.$router.push("/login")),style:{"margin-right":"16px"},class:g(["focus:outline-none mx-8 sm:mx-0 mr-10",e.scrollIsZero?"theme-color1":"theme-color3"])},Ge,2),o("button",{onClick:t[2]||(t[2]=a=>e.$router.push("/login")),style:{"margin-right":"16px"},class:g(["focus:outline-none mx-8 sm:mx-0",e.scrollIsZero?"theme-color1":"theme-color3"])},Qe,2),e.items.length?$((v(),f("button",{key:0,onClick:t[3]||(t[3]=(...a)=>e.openCart&&e.openCart(...a)),class:g(["focus:outline-none mx-4 sm:mx-0",e.scrollIsZero?"theme-color1":"theme-color3"])},et,2)),[[r,`${e.items.length}`,void 0,{warning:!0}]]):C("",!0),e.items.length?C("",!0):(v(),f("button",{key:1,onClick:t[4]||(t[4]=(...a)=>e.openCart&&e.openCart(...a)),class:g(["text-gray-400 focus:outline-none mx-4 sm:mx-0",e.scrollIsZero?"":"text-gray-600"])},ot,2)),o("div",st,[o("button",{onClick:t[5]||(t[5]=a=>e.isOpen=!e.isOpen),type:"button",class:"text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500","aria-label":"toggle menu"},nt)])])]),o("nav",{class:g([e.isOpen?"":"hidden","sm:flex sm:justify-center sm:items-center mt-4"])},[o("div",at,[o("a",{onClick:t[6]||(t[6]=_(a=>e.redirctPage("home"),["prevent"])),class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#"},"Home"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[7]||(t[7]=_(a=>e.redirctPage("productslist"),["prevent"]))},"Shop"),it,o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",onClick:t[8]||(t[8]=_(a=>e.redirctPage("faq"),["prevent"])),href:"#"},"FAQ"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[9]||(t[9]=_(a=>e.redirctPage("news"),["prevent"]))},"News"),o("a",{class:"mt-3 nav-color hover:underline sm:mx-3 sm:mt-0",href:"#",onClick:t[10]||(t[10]=_(a=>e.redirctPage("about"),["prevent"]))},"About")])],2)])],2),$((v(),f("div",{class:g([e.cartOpen?"translate-x-0 ease-out":"translate-x-full ease-in","fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300"]),style:{"z-index":"100"}},[o("div",lt,[o("h3",ct," Shopping bag ("+P(e.items.length)+" items) ",1),o("button",{onClick:t[11]||(t[11]=a=>e.cartOpen=!e.cartOpen),class:"text-gray-600 focus:outline-none"},ut)]),mt,(v(!0),f(j,null,G(e.items,(a,x)=>(v(),f("div",{class:"flex justify-between mt-6",key:`itemData${x}`},[o("div",pt,[o("img",{class:"h-20 w-20 object-cover rounded",src:a.product.imageUrl,alt:""},null,8,ht),o("div",vt,[o("h3",gt,P(a.product.title||""),1),o("div",ft,[o("div",_t,[$(o("select",{class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500","onUpdate:modelValue":y=>a.qty=y,onChange:y=>e.putData(a)},xt,40,yt),[[K,a.qty]])]),$((v(),f("button",{class:"text-gray-500 focus:outline-none focus:text-gray-600",onClick:_(y=>e.deleteData(a),["prevent"])},$t,8,wt)),[[m,"delete",void 0,{top:!0}]])])])]),o("span",Ct," $"+P(a.product.price||""),1)]))),128)),Pt,o("div",Et," Total: $"+P(e.itemsTotal?e.itemsTotal.toFixed(2):""),1)],2)),[[p,e.outsideEvent]])],64)}var jt=T(He,[["render",At]]);const Ot=M({props:{},setup(e,{emit:t}){return{}}}),Lt=O('<div class="bg-gray-200"><div class="container mx-auto px-6 py-3 flex justify-center items-center"><p class="py-2 text-gray-500 sm:py-0 text-sm"><a href="#"> \xA0 </a></p></div></div><div class="pt-8 bg-gradient-to-b from-gray-100 to-sky-900 md:pt-20"><div class="container m-auto px-6 space-y-8 text-gray-400 md:px-12 lg:px-20"><div><div class="mb-6 gap-6 items-center justify-between py-6 sm:flex md:mb-16 md:py-0 md:space-y-6"><div class="flex flex-wrap flex-col-reverse gap-6 mt-6 sm:flex-row sm:mt-0 sm:items-center"><select name="langage" id="langae" class="px-4 py-2 w-full rounded-xl bg-gray-900 sm:w-max"><option value="en">English</option><option value="fr">French</option><option value="sw">Swahili</option></select><div class="flex gap-6"><a href="#" target="blank" aria-label="github" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg></a><a href="#" target="blank" aria-label="twitter" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></a><a href="#" target="blank" aria-label="medium" class="hover:text-cyan-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"></path></svg></a></div></div></div><div><div class="pb-16 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5"><div><h6 class="text-lg font-medium text-white">Contact</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div><h6 class="text-lg font-medium text-white">Products</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div><h6 class="text-lg font-medium text-white">Ressources</h6><ul class="list-inside mt-4 space-y-4"><li><a href="#" class="hover:text-cyan-400 transition">About</a></li><li><a href="#" class="hover:text-cyan-400 transition">Customers</a></li><li><a href="#" class="hover:text-cyan-400 transition">Enterprise</a></li><li><a href="#" class="hover:text-cyan-400 transition">Partners</a></li><li><a href="#" class="hover:text-cyan-400 transition">Jobs</a></li></ul></div><div class="col-span-2 sm:col-span-3 md:col-span-2"><h6 class="text-lg font-medium text-white">Contact</h6><ul class="list-inside mt-4 space-y-4"><li><a href="tel:+243996660436" class="hover:text-cyan-400 transition">+243 996 660 436</a></li><li><a href="mailto:meschacirung@gmail.com" class="hover:text-cyan-400 transition">contact@tailus.com</a></li><li><form action=""><label for="newsletter" class="text-lg text-white">Subscribe to our newsletter</label><div class="relative mt-4"><input type="email" name="newsletter" id="newsletter" placeholder="Your email" class="w-full px-4 py-3 ring-1 ring-cyan-700 rounded-xl bg-gray-900 bg-opacity-20 invalid:ring-red-400 invalid:outline-none"><button type="submit" title="Submit" class="absolute right-0 w-max py-3 px-6 text-center rounded-r-xl transition bg-cyan-400 hover:bg-cyan-300 active:bg-cyan-600 focus:bg-cyan-300"><span class="text-gray-900 font-semibold"> Send </span></button></div></form></li></ul></div></div><div class="py-8 border-t border-cyan-800 text-gray-200 flex justify-between"><span>\xA9 tailus 2003 - <span id="year"></span></span><span>All right reserved</span></div></div></div></div></div><div class="bg-gray-200" style="font-family:Microsoft JhengHei, Helvetica;"><div class="container mx-auto px-6 py-3 flex justify-center items-center"><p class="py-2 text-gray-500 sm:py-0 text-sm"><a href="#"> Copyright \xA9 2022 Vigilero All rights resevered. Images are for educational use only, no commercial use. </a></p></div></div>',3),Tt=[Lt];function It(e,t,c,l,s,n){return v(),f("footer",null,Tt)}var Mt=T(Ot,[["render",It]]);const Dt={components:{headercontent:jt,footercontent:Mt},setup(){return{}}};function St(e,t,c,l,s,n){const r=L("headercontent"),m=L("router-view"),p=L("footercontent");return v(),f(j,null,[e.$route.meta.needNav?(v(),D(r,{key:0})):C("",!0),o("div",null,[Q(m)]),e.$route.meta.needFooter?(v(),D(p,{key:1})):C("",!0)],64)}var Bt=T(Dt,[["render",St]]);const Vt="modulepreload",S={},Nt="./",d=function(t,c){return!c||c.length===0?t():Promise.all(c.map(l=>{if(l=`${Nt}${l}`,l in S)return;S[l]=!0;const s=l.endsWith(".css"),n=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${n}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":Vt,s||(r.as="script",r.crossOrigin=""),r.href=l,document.head.appendChild(r),s)return new Promise((m,p)=>{r.addEventListener("load",m),r.addEventListener("error",p)})})).then(()=>t())};const Ft=[{path:"/",name:"home",meta:{title:"home page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./homePage.9222216b.js"),["assets/homePage.9222216b.js","assets/homePage.02dee79a.css","assets/vendor.c5c7b6b3.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./Login.85df6ac2.js"),["assets/Login.85df6ac2.js","assets/vendor.c5c7b6b3.js"]),meta:{title:"home page",needNav:!1,needFooter:!1}},{path:"/dashboard",component:()=>d(()=>import("./dashBoard.7fdb534d.js"),["assets/dashBoard.7fdb534d.js","assets/vendor.c5c7b6b3.js"]),name:"dashboard",redirect:"/dashboard/products",meta:{title:"\u5F8C\u81FA\u7BA1\u7406",needNav:!1,needFooter:!1},children:[{path:"products",component:()=>d(()=>import("./products.e752f382.js"),["assets/products.e752f382.js","assets/products.aa3a4413.css","assets/vendor.c5c7b6b3.js"]),name:"products",meta:{title:"\u7522\u54C1\u7BA1\u7406",needFooter:!1}},{path:"orders",component:()=>d(()=>import("./orders.819f7ac7.js"),["assets/orders.819f7ac7.js","assets/orders.4d6d57c2.css","assets/vendor.c5c7b6b3.js"]),name:"orders",meta:{title:"\u8A02\u55AE\u7BA1\u7406",needFooter:!1}},{path:"coupons",component:()=>d(()=>import("./coupons.3ebcbf90.js"),["assets/coupons.3ebcbf90.js","assets/coupons.8c036f03.css","assets/vendor.c5c7b6b3.js"]),name:"coupons",meta:{title:"\u512A\u60E0\u5238\u7BA1\u7406",needFooter:!1}},{path:"articles",component:()=>d(()=>import("./articles.d5aa34d1.js"),["assets/articles.d5aa34d1.js","assets/articles.d93020d0.css","assets/vendor.c5c7b6b3.js"]),name:"articles",meta:{title:"\u6587\u7AE0\u7BA1\u7406",needFooter:!1}}]},{path:"/about",name:"about",meta:{title:"about page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./about.8e4f4d25.js"),["assets/about.8e4f4d25.js","assets/about.72f223bb.css","assets/vendor.c5c7b6b3.js"])},{path:"/news",name:"news",meta:{title:"news page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./news.8d5116b2.js"),["assets/news.8d5116b2.js","assets/news.8c3c4452.css","assets/vendor.c5c7b6b3.js"])},{path:"/article",name:"article",meta:{title:"article page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./article.c7ca04d5.js"),["assets/article.c7ca04d5.js","assets/vendor.c5c7b6b3.js"])},{path:"/faq",name:"faq",meta:{title:"faq page",needNav:!0,needFooter:!0},component:()=>d(()=>import("./faq.a4d30cb4.js"),["assets/faq.a4d30cb4.js","assets/faq.7ad4244c.css","assets/vendor.c5c7b6b3.js"])},{path:"/productslist",name:"productslist",meta:{title:"productslist",needNav:!0,needFooter:!0},component:()=>d(()=>import("./productsList.76023311.js"),["assets/productsList.76023311.js","assets/productsList.3fa8f001.css","assets/vendor.c5c7b6b3.js"])},{path:"/productdetail/:productId",name:"productdetail",meta:{title:"productdetail",needNav:!0,needFooter:!0},component:()=>d(()=>import("./productDetail.722515f1.js"),["assets/productDetail.722515f1.js","assets/productDetail.7ba485d3.css","assets/vendor.c5c7b6b3.js","assets/thumbs.min.5e85996a.js","assets/thumbs.min.d4344d30.css"])},{path:"/testpage",name:"testpage",meta:{title:"testpage",needNav:!1,needFooter:!1},component:()=>d(()=>import("./testpage.aba448f4.js"),["assets/testpage.aba448f4.js","assets/testpage.5d7d1862.css","assets/vendor.c5c7b6b3.js"])},{path:"/testpage2",name:"testpage2",meta:{title:"testpage2",needNav:!1,needFooter:!1},component:()=>d(()=>import("./testpage2.486c8a7a.js"),["assets/testpage2.486c8a7a.js","assets/testpage2.b3827835.css","assets/vendor.c5c7b6b3.js","assets/thumbs.min.5e85996a.js","assets/thumbs.min.d4344d30.css"])}],Rt=X({history:ee(),routes:Ft});var zt=e=>(e.component("InputText",te),e.component("InputSwitch",oe),e.component("Button",se),e.component("Paginator",re),e.component("Dropdown",ne),e.component("PanelMenu",ae),e.component("Dialog",ie),e.component("Menubar",le),e.component("OverlayPanel",ce),e.component("Calendar",de),e.component("Checkbox",ue),e.component("RadioButton",me),e.component("MultiSelect",pe),e.component("AutoComplete",he),e.component("Textarea",ve),e.component("DataTable",ge),e.component("Column",fe),e.component("InputNumber",_e),e.component("Password",ye),e.component("Galleria",be),e.component("FileUpload",xe),e.component("TabView",we),e.component("TabPanel",ke),e.component("Sidebar",$e),e.component("Editor",Ce),e.directive("tooltip",Pe),e.directive("click-outside",{mounted(t,c,l){t.clickOutsideEvent=function(s){t===s.target||t.contains(s.target)||c.value(s,t)},document.body.addEventListener("click",t.clickOutsideEvent)},unmounted(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}),e.directive("badge",Ee),e.use(Ae),e);const Ht={transition:"Vue-Toastification__fade",maxToasts:20,newestOnTop:!0},qt=Le(),B=zt(je(Bt).use(Be).use(Rt).use(Oe,Ht));B.mount("#app");B.provide("emitter",qt);export{T as _,po as a,Jt as b,Ut as c,Wt as d,Yt as e,Gt as f,uo as g,eo as h,Kt as i,Qt as j,Xt as k,to as l,oo as m,so as n,ro as o,Ne as p,ao as q,no as r,io as s,lo as t,co as u,mo as v};
