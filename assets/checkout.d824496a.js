import{d as A,r as m,i as D,b as U,f as O,u as z,o as G,x as V,k as $,l as e,z as a,at as H,F as R,q as L,t as b,s as E,ao as X,ap as Y,j as T,n as x,au as w}from"./vendor.7da88915.js";import{_ as J,y as K,B as Q}from"./index.c347b747.js";const W=A({props:{},setup(s,{emit:o}){const F=m([{label:"Cart",to:"/cart"},{label:"Checkout",to:"/checkout"},{label:"Payment",to:"/payment"}]),S=D("emitter"),I=U(),k=O(),P=z(),d=m([]),i=m(""),C=m(""),t=m(""),f=async()=>{var p,v,g,h,_,c,y,B,M,N;try{const r=await K();d.value=[...(v=(p=r.data)==null?void 0:p.data)==null?void 0:v.carts],i.value=(h=(g=r.data)==null?void 0:g.data)==null?void 0:h.total,C.value=(c=(_=r.data)==null?void 0:_.data)==null?void 0:c.final_total,t.value=(+((B=(y=r.data)==null?void 0:y.data)==null?void 0:B.total.toFixed(2))-+((N=(M=r.data)==null?void 0:M.data)==null?void 0:N.final_total.toFixed(2))).toFixed(2),P.commit("m_setCartData",d.value)}catch(r){k.error(`${r.response?r.response.data.message:r}`,{timeout:2e3,hideProgressBar:!0})}},u=m({}),n=m(null),j=()=>{document.getElementById("v-form-button").click()},q=async()=>{var p,v,g,h,_;try{const c={user:{name:(p=u.value)==null?void 0:p.name,email:(v=u.value)==null?void 0:v.email,tel:(g=u.value)==null?void 0:g.phone,address:(h=u.value)==null?void 0:h.address},message:(_=u.value)==null?void 0:_.message},y=await Q({data:c});S.emit("getCartData"),console.log("res"),S.emit("getCartData"),I.push({name:"payment",params:{datakey:`${y.data.orderId}`}}),sessionStorage.setItem("ordnow",`${y.data.orderId}`),k.info("Order Update Success",{timeout:2e3,hideProgressBar:!0})}catch(c){k.error(`${c.response?c.response.data.message:c}`,{timeout:2e3,hideProgressBar:!0})}};return G(async()=>{await f()}),{stepItems:F,items:d,itemsTotal:i,itemsFinalTotal:C,itemsDiscount:t,getData:f,user:u,myForm:n,onSubmit:q,onSubmitClick:j}}}),l=s=>(X("data-v-01b86e9a"),s=s(),Y(),s),Z=E('<section class="bg-section" data-v-01b86e9a><div class="text-white bg-setting bg-setting-local" data-v-01b86e9a><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-01b86e9a><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-01b86e9a><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-01b86e9a> Checkout </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-01b86e9a> More time, Great Time </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-01b86e9a></div></div></div></section>',1),ee={class:"card"},se={class:"card-main"},te={class:"min-w-screen min-h-screen bg-gray-50 py-5"},oe={class:"bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800 main-checkout-content"},ae={class:"w-full"},le={class:"-mx-3 md:flex items-start"},ne={class:"px-3 md:w-8/12"},de=l(()=>e("div",{class:"w-full mx-auto rounded-lg bg-white p-3 text-gray-800 font-light mb-3"},[e("div",{class:"w-full flex items-center"},[e("div",null,[e("span",{class:"text-gray-600 font-semibold text-2xl"},"Billing Details")])])],-1)),re={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},ie=w("Name "),ce={class:"mb-3"},ue={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},me=w("Email "),be={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},fe=w("Phone "),pe={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},ve=w("Address "),ge={class:"mb-3",style:{"grid-column":"1 / -1"}},he={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},_e=w("Message "),ye=l(()=>e("button",{id:"v-form-button",hidden:""},"Submit",-1)),xe={class:"px-3 md:w-4/12"},we={class:"w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6"},ke=E('<div class="w-full flex mb-3 items-center" data-v-01b86e9a><div class="w-full" data-v-01b86e9a><span class="text-gray-600 font-semibold text-2xl" data-v-01b86e9a>Your Order</span></div></div><div class="w-full cart-content" data-v-01b86e9a><div data-v-01b86e9a><span class="text-gray-600 font-semibold" data-v-01b86e9a>ITEM</span></div><div data-v-01b86e9a><span class="text-gray-600 font-semibold" data-v-01b86e9a>PRICE</span></div></div>',2),Ce=l(()=>e("hr",{class:"col-span-full my-3"},null,-1)),Ve={class:"w-full mb-2 cart-content"},Se=l(()=>e("div",null,[e("span",{class:"text-gray-600"},"Total")],-1)),Pe={class:"font-semibold"},$e={class:"w-full mb-2 cart-content"},Te=l(()=>e("div",null,[e("span",{class:"text-gray-600"},"Discount")],-1)),Fe={class:"font-semibold"},Ie=l(()=>e("div",{class:"w-full cart-content"},[e("div",null,[e("span",{class:"text-gray-600"},"Taxes (GST)")]),e("div",null,[e("span",{class:"font-semibold"},"$00.00")])],-1)),Be=l(()=>e("hr",{class:"col-span-full my-3"},null,-1)),Me={class:"w-full cart-content"},Ne=l(()=>e("div",null,[e("span",{class:"text-gray-600"},"Final Total")],-1)),Ee={class:"font-semibold"},je=l(()=>e("span",null,"Pay Now",-1)),qe=l(()=>e("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),Ae=[je,qe],De=l(()=>e("span",{style:{transform:"scaleX(-1)"}},[e("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})])],-1)),Ue=l(()=>e("span",null,"Cart",-1)),Oe=[De,Ue];function ze(s,o,F,S,I,k){const P=V("Steps"),d=V("v-field"),i=V("error-message"),C=V("v-form");return T(),$("div",null,[Z,e("div",ee,[e("div",se,[a(P,{model:s.stepItems,readonly:!0},null,8,["model"])])]),e("div",te,[e("div",oe,[e("div",ae,[e("div",le,[e("div",ne,[de,a(C,{class:"contact-form-section w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6 p-3",onSubmit:o[5]||(o[5]=t=>s.onSubmit(s.errors))},{default:H(({errors:t,values:f,validate:u})=>[e("div",null,[e("label",re,[ie,a(d,{name:"Name",type:"name",class:x(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Name,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Name}]),placeholder:"Please enter Name",rules:"required",modelValue:s.user.name,"onUpdate:modelValue":o[0]||(o[0]=n=>s.user.name=n)},null,8,["class","modelValue"])]),a(i,{name:"Name",class:"invalid-feedback"})]),e("div",ce,[e("label",ue,[me,a(d,{name:"Email",type:"email",class:x(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Email,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Email}]),placeholder:"Please enter  Email",rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":o[1]||(o[1]=n=>s.user.email=n)},null,8,["class","modelValue"])]),a(i,{name:"Email",class:"invalid-feedback"})]),e("div",null,[e("label",be,[fe,a(d,{name:"Phone",type:"phone",class:x(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Phone,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Phone}]),placeholder:"Please enter  Phone",rules:"numeric|required",modelValue:s.user.phone,"onUpdate:modelValue":o[2]||(o[2]=n=>s.user.phone=n)},null,8,["class","modelValue"])]),a(i,{name:"Phone",class:"invalid-feedback"})]),e("div",null,[e("label",pe,[ve,a(d,{name:"Address",type:"Address",class:x(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Address,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Address}]),placeholder:"Please enter Address",rules:"required",modelValue:s.user.address,"onUpdate:modelValue":o[3]||(o[3]=n=>s.user.address=n)},null,8,["class","modelValue"])]),a(i,{name:"Address",class:"invalid-feedback"})]),e("div",ge,[e("label",he,[_e,a(d,{name:"Message",type:"message",class:x(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Message,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Message}]),placeholder:"Please enter  Message",rules:"required",modelValue:s.user.message,"onUpdate:modelValue":o[4]||(o[4]=n=>s.user.message=n),as:"textarea",rows:"10"},null,8,["class","modelValue"])]),a(i,{name:"Message",class:"invalid-feedback"})]),ye]),_:1})]),e("div",xe,[e("div",we,[ke,(T(!0),$(R,null,L(s.items,(t,f)=>(T(),$("div",{class:"w-full cart-content theme-color1",key:`itemData${f}`},[e("div",null,b(t.product.title||"")+" x "+b(t.qty||""),1),e("div",null," $"+b(t.total?t.total.toFixed(2):""),1),Ce]))),128)),e("div",Ve,[Se,e("div",null,[e("span",Pe,"$"+b(s.itemsTotal?s.itemsTotal.toFixed(2):""),1)])]),e("div",$e,[Te,e("div",null,[e("span",Fe,b(s.itemsDiscount),1)])]),Ie,Be,e("div",Me,[Ne,e("div",null,[e("span",Ee,"$"+b(s.itemsFinalTotal?s.itemsFinalTotal.toFixed(2):""),1)])])]),e("div",null,[e("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex",type:"button",style:{background:"#0d4a9e"},onClick:o[6]||(o[6]=(...t)=>s.onSubmitClick&&s.onSubmitClick(...t))},Ae),e("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex mr-3",type:"button",style:{background:"#f1b82b"},onClick:o[7]||(o[7]=t=>{s.cartOpen=!1,s.$router.push("/cart")})},Oe)])])])])])])])}var Re=J(W,[["render",ze],["__scopeId","data-v-01b86e9a"]]);export{Re as default};
