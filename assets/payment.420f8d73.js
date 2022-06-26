var A=Object.defineProperty;var M=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var N=(s,o,n)=>o in s?A(s,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[o]=n,j=(s,o)=>{for(var n in o||(o={}))U.call(o,n)&&N(s,n,o[n]);if(M)for(var n of M(o))q.call(o,n)&&N(s,n,o[n]);return s};import{d as F,r as m,i as O,b as R,e as z,f as H,u as K,o as G,x as S,k as X,l as e,z as r,at as Y,p as D,ax as E,t as y,s as J,ao as L,ap as Q,j as W,n as _,au as x}from"./vendor.7da88915.js";import{_ as Z,C as ee,B as se}from"./index.071f9683.js";var oe="./assets/visapicture.png",te="./assets/PayPal.svg";const ae=F({props:{},setup(s,{emit:o}){const n=m([{label:"Cart",to:"/cart"},{label:"Checkout",to:"/checkout"},{label:"Payment",to:"/payment"}]),B=O("emitter"),I=R(),p=z(),f=H();K();const i=m({}),b=m(""),T=m(""),w=m(""),v=async()=>{var g,h,a;try{const d=sessionStorage.getItem("ordnow");console.log("dataKeyData",d);const C=((g=p==null?void 0:p.params)==null?void 0:g.datakey)||d;if(!((h=p==null?void 0:p.params)==null?void 0:h.datakey)&&!d){f.error("There's no order!",{timeout:2e3,hideProgressBar:!0}),I.push("/");return}const c=await ee(C);i.value=j({},(a=c.data)==null?void 0:a.order),console.log("order",i.value,c.data.order)}catch(d){f.error(`${d.response?d.response.data.message:d}`,{timeout:2e3,hideProgressBar:!0})}},u=m({}),k=m(null),P=()=>{document.getElementById("v-form-button").click()},V=async()=>{var g,h,a,d,C;try{const c={user:{name:(g=u.value)==null?void 0:g.name,email:(h=u.value)==null?void 0:h.email,tel:(a=u.value)==null?void 0:a.phone,address:(d=u.value)==null?void 0:d.address},message:(C=u.value)==null?void 0:C.message},$=await se({data:c});B.emit("getCartData"),console.log("res"),B.emit("getCartData"),I.push({name:"payment",params:{datakey:`${$.data.orderId}`}}),sessionStorage.setItem("ordnow",`${$.data.orderId}`),f.info("Order Update Success",{timeout:2e3,hideProgressBar:!0})}catch(c){f.error(`${c.response?c.response.data.message:c}`,{timeout:2e3,hideProgressBar:!0})}},t=m("");return G(async()=>{await v()}),{stepItems:n,order:i,itemsTotal:b,itemsFinalTotal:T,itemsDiscount:w,getData:v,user:u,myForm:k,onSubmit:V,onSubmitClick:P,payType:t}}}),l=s=>(L("data-v-ddec44ea"),s=s(),Q(),s),le=J('<section class="bg-section" data-v-ddec44ea><div class="text-white bg-setting bg-setting-local" data-v-ddec44ea><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-ddec44ea><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-ddec44ea><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-ddec44ea> Payment </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-ddec44ea> More time, Great Time </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-ddec44ea></div></div></div></section>',1),ne={class:"card"},re={class:"card-main"},de={class:"min-w-screen min-h-screen bg-gray-50 py-5"},ie={class:"bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800 main-checkout-content"},ue={class:"w-full"},ce={class:"-mx-3 md:flex items-start"},me={class:"px-3 md:w-8/12"},pe=l(()=>e("div",{class:"w-full mx-auto rounded-lg bg-white p-3 text-gray-800 font-light mb-3"},[e("div",{class:"w-full flex items-center"},[e("div",null,[e("span",{class:"text-gray-600 font-semibold text-2xl"},"Payment Details")])])],-1)),be={class:"mb-5"},fe={for:"type1",class:"flex items-center cursor-pointer"},ge=l(()=>e("img",{src:oe,class:"h-6 ml-3"},null,-1)),he={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},ve=x("Name "),ye={class:"mb-3"},_e={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},xe=x("Email "),we={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},ke=x("Phone "),Pe={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},Ve=x("Address "),Ce={class:"mb-3",style:{"grid-column":"1 / -1"}},Se={class:"form-label text-gray-600 font-semibold text-sm mb-2 ml-1"},Be=x("Message "),Ie=l(()=>e("button",{id:"v-form-button",hidden:""},"Submit",-1)),Te={class:"w-full p-3"},$e={for:"type2",class:"flex items-center cursor-pointer"},Me=l(()=>e("img",{src:te,width:"80",class:"ml-3"},null,-1)),Ne={class:"px-3 md:w-4/12"},je={class:"w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6"},De=l(()=>e("div",{class:"w-full flex mb-3 items-center"},[e("div",{class:"w-full"},[e("span",{class:"text-gray-600 font-semibold text-2xl"},"Your Billing")])],-1)),Ee={class:"w-full cart-content"},Ae=l(()=>e("div",null,[e("span",{class:"text-gray-600 font-semibold"},"Contact")],-1)),Ue={class:"flex-grow pl-3 text-gray-800"},qe=l(()=>e("div",null,[e("span",{class:"text-gray-600 font-semibold"},"Phone")],-1)),Fe={class:"flex-grow pl-3 text-gray-800"},Oe=l(()=>e("div",null,[e("span",{class:"text-gray-600 font-semibold"},"Email")],-1)),Re={class:"flex-grow pl-3 text-gray-800"},ze=l(()=>e("div",null,[e("span",{class:"text-gray-600 font-semibold"},"Billing Address")],-1)),He={class:"flex-grow pl-3 text-gray-800"},Ke=l(()=>e("hr",{class:"col-span-full my-3"},null,-1)),Ge={class:"w-full cart-content"},Xe=l(()=>e("div",null,[e("span",{class:"text-gray-600 font-semibold"},"Final Total")],-1)),Ye={class:"flex-grow pl-3 text-gray-800"},Je=l(()=>e("span",null,"Pay Now",-1)),Le=l(()=>e("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1)),Qe=[Je,Le],We=l(()=>e("span",{style:{transform:"scaleX(-1)"}},[e("svg",{class:"h-5 w-5 mx-2",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{d:"M17 8l4 4m0 0l-4 4m4-4H3"})])],-1)),Ze=l(()=>e("span",null,"Cart",-1)),es=[We,Ze];function ss(s,o,n,B,I,p){var w,v,u,k,P,V;const f=S("Steps"),i=S("v-field"),b=S("error-message"),T=S("v-form");return W(),X("div",null,[le,e("div",ne,[e("div",re,[r(f,{model:s.stepItems,readonly:!0},null,8,["model"])])]),e("div",de,[e("div",ie,[e("div",ue,[e("div",ce,[e("div",me,[pe,r(T,{class:"contact-form-section w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light p-3",onSubmit:o[6]||(o[6]=t=>s.onSubmit(s.errors))},{default:Y(({errors:t,values:g,validate:h})=>[e("div",be,[e("label",fe,[D(e("input",{type:"radio",class:"form-radio h-5 w-5 text-indigo-500",name:"type",id:"type1",value:"visa","onUpdate:modelValue":o[0]||(o[0]=a=>s.payType=a)},null,512),[[E,s.payType]]),ge])]),e("div",null,[e("label",he,[ve,r(i,{name:"Name",type:"name",class:_(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Name,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Name}]),placeholder:"Please enter Name",rules:"required",modelValue:s.user.name,"onUpdate:modelValue":o[1]||(o[1]=a=>s.user.name=a)},null,8,["class","modelValue"])]),r(b,{name:"Name",class:"invalid-feedback"})]),e("div",ye,[e("label",_e,[xe,r(i,{name:"Email",type:"email",class:_(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Email,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Email}]),placeholder:"Please enter  Email",rules:"email|required",modelValue:s.user.email,"onUpdate:modelValue":o[2]||(o[2]=a=>s.user.email=a)},null,8,["class","modelValue"])]),r(b,{name:"Email",class:"invalid-feedback"})]),e("div",null,[e("label",we,[ke,r(i,{name:"Phone",type:"phone",class:_(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Phone,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Phone}]),placeholder:"Please enter  Phone",rules:"numeric|required",modelValue:s.user.phone,"onUpdate:modelValue":o[3]||(o[3]=a=>s.user.phone=a)},null,8,["class","modelValue"])]),r(b,{name:"Phone",class:"invalid-feedback"})]),e("div",null,[e("label",Pe,[Ve,r(i,{name:"Address",type:"Address",class:_(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Address,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Address}]),placeholder:"Please enter Address",rules:"required",modelValue:s.user.address,"onUpdate:modelValue":o[4]||(o[4]=a=>s.user.address=a)},null,8,["class","modelValue"])]),r(b,{name:"Address",class:"invalid-feedback"})]),e("div",Ce,[e("label",Se,[Be,r(i,{name:"Message",type:"message",class:_(["form-control w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500 transition-colors",{"is-invalid":t.Message,"focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 ":!t.Message}]),placeholder:"Please enter  Message",rules:"required",modelValue:s.user.message,"onUpdate:modelValue":o[5]||(o[5]=a=>s.user.message=a),as:"textarea",rows:"10"},null,8,["class","modelValue"])]),r(b,{name:"Message",class:"invalid-feedback"})]),Ie]),_:1}),e("div",Te,[e("label",$e,[D(e("input",{type:"radio",class:"form-radio h-5 w-5 text-indigo-500",name:"type",id:"type2",value:"paypal","onUpdate:modelValue":o[7]||(o[7]=t=>s.payType=t)},null,512),[[E,s.payType]]),Me])])]),e("div",Ne,[e("div",je,[De,e("div",Ee,[Ae,e("div",Ue,[e("span",null,y((w=s.order.user)==null?void 0:w.name),1)]),qe,e("div",Fe,[e("span",null,y((v=s.order.user)==null?void 0:v.tel),1)]),Oe,e("div",Re,[e("span",null,y((u=s.order.user)==null?void 0:u.email),1)]),ze,e("div",He,[e("span",null,y((k=s.order.user)==null?void 0:k.address),1)])]),Ke,e("div",Ge,[Xe,e("div",Ye,[e("span",null,"$"+y(((P=s.order)==null?void 0:P.total)?(V=s.order)==null?void 0:V.total.toFixed(2):""),1)])])]),e("div",null,[e("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex",type:"button",style:{background:"#0d4a9e"},onClick:o[8]||(o[8]=(...t)=>s.onSubmitClick&&s.onSubmitClick(...t))},Qe),e("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mb-1 text-sm float-right flex mr-3",type:"button",style:{background:"#f1b82b"},onClick:o[9]||(o[9]=t=>{s.cartOpen=!1,s.$router.push("/cart")})},es)])])])])])])])}var ls=Z(ae,[["render",ss],["__scopeId","data-v-ddec44ea"]]);export{ls as default};
