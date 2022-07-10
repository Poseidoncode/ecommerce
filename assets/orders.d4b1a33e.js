var q=Object.defineProperty;var F=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var j=(e,s,d)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[s]=d,B=(e,s)=>{for(var d in s||(s={}))J.call(s,d)&&j(e,d,s[d]);if(F)for(var d of F(s))L.call(s,d)&&j(e,d,s[d]);return e};import{d as G,i as K,r as f,f as Q,o as W,as as N,B as C,k as r,l as o,F as A,q as Y,m as D,C as i,t as b,at as T,aD as X,z as Z,A as x,j as u,x as ee,p as O,aC as E,au as te}from"./vendor.2a61fe6d.js";import{_ as se,h as z,i as oe,j as H,k as ae,f as ne}from"./index.ce415212.js";const le=G({name:"function",components:{},setup(){K("emitter").on("deleteOrders",a=>{t()});const s=f([{name:"Operate",key:"",sortDesc:null},{name:"\u6A19\u984C",key:"title",sortDesc:null},{name:"Percent",key:"percent",sortDesc:null},{name:"\u5230\u671F\u65E5",key:"due_date",sortDesc:null},{name:"\u6298\u6263\u78BC",key:"code",sortDesc:null},{name:"\u662F\u5426\u555F\u7528",key:"is_enabled",sortDesc:null}]),d=f([]),I=f(0),w=f(10),$=f(1),l=Q();async function g(){var a,n,V;try{const p=+I.value/+w.value+1,P=(p-1)*w.value,U=w.value,m=await oe(`?page=${p}`);d.value=[...(a=m.data)==null?void 0:a.orders],$.value=+((V=(n=m.data)==null?void 0:n.pagination)==null?void 0:V.total_pages)*10}catch(p){l.error(`${p.response?p.response.data.message:p}`,{timeout:2e3,hideProgressBar:!0})}}W(async()=>{await g()}),N(I,(a,n)=>{g()}),N(w,(a,n)=>{g()});const v=f(!1),c=f(1),_=f({});function M(a,n){a==2||a==3?_.value=B({},n):_.value={title:"",is_enabled:!0,percent:90,due_date:null,code:""},c.value=a,v.value=!0}const t=async()=>{try{await z(),l.info("Delete\u5168\u90E8OrdersSuccess",{timeout:2e3,hideProgressBar:!0})}catch(a){l.error(`${a.response?a.response.data.message:a}`,{timeout:2e3,hideProgressBar:!0})}},k=async()=>{const a=B({},_.value);a.due_date=X(a.due_date).format("YYYY-MM-DD");try{if(c.value==1){const n=await z({data:a})}if(c.value==2){const n=await H({data:a},a.id)}if(c.value==3){const n=await ae(a.id)}l.info(`${c.value==1?"Add":c.value==2?"Edit":"Delete"}Success`,{timeout:2e3,hideProgressBar:!0})}catch(n){l.error(`${n.response?n.response.data.message:n}`,{timeout:2e3,hideProgressBar:!0})}g(),v.value=!1},y=async a=>{const n=B({},a);await H({data:n},n.id),g(),l.info("Coupon\u8ABF\u6574Success",{timeout:2e3,hideProgressBar:!0})},R=f("");return{onUpload:()=>{l.info("\u5716\u7247\u4E0A\u50B3Success",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async a=>{var p,P,U;const n=a.target.files[0],V=Boolean(a.target.files[0])?a.target.files[0].name.split(".")[0]:"";try{if(!Boolean(V)){l.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let m=new FormData;m.append("File",n);const S=await ne(m);((p=S.data)==null?void 0:p.info)?(_.value.imagesArr[0].url=S.data.imageUrl,l.info("\u4E0A\u50B3\u5716\u7247Success",{timeout:2e3,hideProgressBar:!0})):l.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(U=(P=S.data)==null?void 0:P.message)==null?void 0:U.code}`,{timeout:2e3,hideProgressBar:!0})}catch(m){l.error(`${m.response?m.response.data.message:m}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:R,headers:s,items:d,toast:l,getData:g,offset:I,rows:w,totalItemsCount:$,editModal:v,modalItem:_,nowType:c,showEditModal:M,saveEditModal:k,setStatus:y}}}),h=e=>(Z("data-v-7df9d320"),e=e(),x(),e),de={class:"main-section px-3"},re=h(()=>o("section",{class:"search-block"},[o("h5",{class:"big-title"},"OrderManagement")],-1)),ie={class:"ecommerce-grid my-dark"},ue=["onClick"],ce={key:0},pe=h(()=>o("i",{class:"pi pi-sort"},null,-1)),me=[pe],fe={key:1},he=h(()=>o("i",{class:"pi pi-caret-up"},null,-1)),ge=[he],_e={key:2},ve=h(()=>o("i",{class:"pi pi-caret-down"},null,-1)),ye=[ve],be={class:"content",style:{cursor:"pointer","padding-top":"3px"}},we=["onClick"],ke=["onClick"],Ce=["title"],De=["title"],Ie=["title"],Ve=["title"],Be=["title"],$e={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},Me={class:"grid grid-flow-col auto-cols-max justify-center"},Pe={class:"mt-4"},Ue={class:"modal-main-content"},Se={key:0,class:"mb-2 font-black text-xl"},Te={class:"p-inputgroup mt-2 col-span-full"},Oe=h(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u6A19\u984C",-1)),Ee={class:"p-inputgroup mt-2"},Fe=h(()=>o("span",{class:"p-inputgroup-addon red-star"},"Percent",-1)),je={class:"p-inputgroup mt-2"},Ne=h(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u5230\u671F\u65E5",-1)),Ae={class:"p-inputgroup mt-2"},Ye=h(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u6298\u6263\u78BC",-1)),ze={class:"p-inputgroup mt-2"},He=h(()=>o("span",{class:"p-inputgroup-addon"},"\u662F\u5426\u555F\u7528",-1));function Re(e,s,d,I,w,$){const l=C("Checkbox"),g=C("Paginator"),v=C("InputText"),c=C("Calendar"),_=C("Button"),M=C("Dialog");return u(),r("section",de,[re,o("header",ie,[(u(!0),r(A,null,Y(e.headers,(t,k)=>(u(),r("div",{key:`headers${k}`,class:"header",onClick:y=>e.sort(t)},[ee(b(t.name)+" ",1),t.key?O((u(),r("span",ce,me,512)),[[E,t.sortDesc===null]]):D("",!0),t.key?O((u(),r("span",fe,ge,512)),[[E,t.sortDesc===!1]]):D("",!0),t.key?O((u(),r("span",_e,ye,512)),[[E,t.sortDesc]]):D("",!0)],8,ue))),128))]),(u(!0),r(A,null,Y(e.items,(t,k)=>(u(),r("main",{class:"ecommerce-grid",key:`content${k}`,style:te([{color:"#39312e"},k%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[o("div",be,[o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:y=>e.showEditModal(2,t)}," Edit ",8,we),o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:y=>e.showEditModal(3,t)}," Delete ",8,ke)]),o("div",{class:"content",title:t.title},b(t.title||""),9,Ce),o("div",{class:"content",title:t.percent},b(t.percent||""),9,De),o("div",{class:"content",title:t.due_date},b(t.due_date||""),9,Ie),o("div",{class:"content",title:t.code},b(t.code||""),9,Ve),o("div",{class:"content",title:t.is_enabled},[i(l,{binary:!0,modelValue:t.is_enabled,"onUpdate:modelValue":y=>t.is_enabled=y,onChange:y=>e.setStatus(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,Be)],4))),128)),e.items.length?D("",!0):(u(),r("main",$e," No Data ")),o("footer",Me,[i(g,{first:e.offset,"onUpdate:first":s[0]||(s[0]=t=>e.offset=t),rows:e.rows,"onUpdate:rows":s[1]||(s[1]=t=>e.rows=t),rowsPerPageOptions:[5,10,50],totalRecords:e.totalItemsCount},null,8,["first","rows","totalRecords"]),o("div",Pe,"\u5171"+b(e.totalItemsCount)+"\u7B46",1)]),i(M,{visible:e.editModal,"onUpdate:visible":s[8]||(s[8]=t=>e.editModal=t),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:T(()=>[o("h3",null,b(e.nowType==1?"AddCoupon":e.nowType==2?"EditCoupon":"DeleteCoupon"),1)]),footer:T(()=>[i(_,{label:"Confirm",onClick:e.saveEditModal},null,8,["onClick"]),i(_,{label:"Cancel",class:"p-button-success",onClick:s[7]||(s[7]=t=>e.editModal=!1)})]),default:T(()=>[o("section",Ue,[e.nowType==3?(u(),r("h2",Se," Delete This Order? ")):D("",!0),o("div",Te,[Oe,i(v,{type:"text",modelValue:e.modalItem.title,"onUpdate:modelValue":s[2]||(s[2]=t=>e.modalItem.title=t),modelModifiers:{trim:!0},disabled:e.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),o("div",Ee,[Fe,i(v,{modelValue:e.modalItem.percent,"onUpdate:modelValue":s[3]||(s[3]=t=>e.modalItem.percent=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3,type:"Number"},null,8,["modelValue","disabled"])]),o("div",je,[Ne,i(c,{modelValue:e.modalItem.due_date,"onUpdate:modelValue":s[4]||(s[4]=t=>e.modalItem.due_date=t),showIcon:!0,dateFormat:"yy-mm-dd",style:{height:"40px"},class:"hidden-item",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),o("div",Ae,[Ye,i(v,{modelValue:e.modalItem.code,"onUpdate:modelValue":s[5]||(s[5]=t=>e.modalItem.code=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),o("div",ze,[He,i(l,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:e.modalItem.is_enabled,"onUpdate:modelValue":s[6]||(s[6]=t=>e.modalItem.is_enabled=t)},null,8,["modelValue"])])])]),_:1},8,["visible"])])}var We=se(le,[["render",Re],["__scopeId","data-v-7df9d320"]]);export{We as default};
