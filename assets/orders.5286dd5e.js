var J=Object.defineProperty;var O=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var E=(e,s,d)=>s in e?J(e,s,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[s]=d,D=(e,s)=>{for(var d in s||(s={}))L.call(s,d)&&E(e,d,s[d]);if(O)for(var d of O(s))W.call(s,d)&&E(e,d,s[d]);return e};import{d as X,Z,r as h,U as q,o as G,_ as S,g as C,c as i,e as o,F as Y,$ as A,i as I,j as c,a1 as b,a2 as T,V as K,W as Q,b as u,a3 as x,X as F,a4 as N,a5 as ee}from"./vendor.d3125004.js";import{e as H,f as te,h as R,i as se,c as oe}from"./apis.c7a3eadc.js";import{d as ae}from"./dayjs.min.b172dca0.js";import{_ as ne}from"./index.df22db78.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";const le=X({name:"function",components:{},setup(){Z("emitter").on("deleteOrders",a=>{t()});const s=h([{name:"\u64CD\u4F5C",key:"",sortDesc:null},{name:"\u6A19\u984C",key:"title",sortDesc:null},{name:"Percent",key:"percent",sortDesc:null},{name:"\u5230\u671F\u65E5",key:"due_date",sortDesc:null},{name:"\u6298\u6263\u78BC",key:"code",sortDesc:null},{name:"\u662F\u5426\u555F\u7528",key:"is_enabled",sortDesc:null}]),d=h([]),V=h(0),w=h(10),P=h(1),l=q();async function _(){var a,n,B;try{const m=+V.value/+w.value+1,U=(m-1)*w.value,j=w.value,r=await te(`?page=${m}`);console.log("res",r),d.value=[...(a=r.data)==null?void 0:a.orders],P.value=+((B=(n=r.data)==null?void 0:n.pagination)==null?void 0:B.total_pages)*10}catch(m){l.error(`${m.response?m.response.data:m}`,{timeout:2e3,hideProgressBar:!0})}}G(async()=>{await _()}),S(V,(a,n)=>{_()}),S(w,(a,n)=>{_()});const y=h(!1),p=h(1),g=h({});function M(a,n){a==2||a==3?g.value=D({},n):g.value={title:"",is_enabled:!0,percent:90,due_date:null,code:""},p.value=a,y.value=!0}const t=async()=>{try{await H(),l.success("\u522A\u9664\u5168\u90E8Orders\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(a){l.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}},k=async()=>{const a=D({},g.value);a.due_date=ae(a.due_date).format("YYYY-MM-DD");try{if(p.value==1){const n=await H({data:a})}if(p.value==2){const n=await R({data:a},a.id)}if(p.value==3){const n=await se(a.id)}l.success(`${p.value==1?"\u65B0\u589E":p.value==2?"\u7DE8\u8F2F":"\u522A\u9664"}\u6210\u529F`,{timeout:2e3,hideProgressBar:!0})}catch(n){l.error(`${n.response?n.response.data:n}`,{timeout:2e3,hideProgressBar:!0})}_(),y.value=!1},v=async a=>{const n=D({},a);await R({data:n},n.id),_(),l.success("\u512A\u60E0\u5238\u8ABF\u6574\u6210\u529F",{timeout:2e3,hideProgressBar:!0})},z=h("");return{onUpload:()=>{l.success("\u5716\u7247\u4E0A\u50B3\u6210\u529F",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async a=>{var m,U,j;const n=a.target.files[0],B=Boolean(a.target.files[0])?a.target.files[0].name.split(".")[0]:"";try{if(!Boolean(B)){l.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let r=new FormData;r.append("File",n);const $=await oe(r);console.log("res",$),((m=$.data)==null?void 0:m.success)?(g.value.imagesArr[0].url=$.data.imageUrl,l.success("\u4E0A\u50B3\u5716\u7247\u6210\u529F",{timeout:2e3,hideProgressBar:!0})):l.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(j=(U=$.data)==null?void 0:U.message)==null?void 0:j.code}`,{timeout:2e3,hideProgressBar:!0})}catch(r){l.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:z,headers:s,items:d,toast:l,getData:_,offset:V,rows:w,totalItemsCount:P,editModal:y,modalItem:g,nowType:p,showEditModal:M,saveEditModal:k,setStatus:v}}}),f=e=>(K("data-v-498035d8"),e=e(),Q(),e),de={class:"main-section px-3"},re=f(()=>o("section",{class:"search-block"},[o("h5",{class:"big-title"},"\u8A02\u55AE\u7BA1\u7406")],-1)),ie={class:"ecommerce-grid my-dark"},ce=["onClick"],ue={key:0},pe=f(()=>o("i",{class:"pi pi-sort"},null,-1)),me=[pe],he={key:1},fe=f(()=>o("i",{class:"pi pi-caret-up"},null,-1)),_e=[fe],ge={key:2},ye=f(()=>o("i",{class:"pi pi-caret-down"},null,-1)),ve=[ye],be={class:"content",style:{cursor:"pointer","padding-top":"3px"}},we=["onClick"],ke=["onClick"],Ce=["title"],Ie=["title"],Ve=["title"],Be=["title"],$e=["title"],De={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},Pe={class:"grid grid-flow-col auto-cols-max justify-center"},Me={class:"mt-4"},Ue={class:"modal-main-content"},je={key:0,class:"mb-2 font-black text-xl"},Te={class:"p-inputgroup mt-2 col-span-full"},Fe=f(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u6A19\u984C",-1)),Ne={class:"p-inputgroup mt-2"},Oe=f(()=>o("span",{class:"p-inputgroup-addon red-star"},"Percent",-1)),Ee={class:"p-inputgroup mt-2"},Se=f(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u5230\u671F\u65E5",-1)),Ye={class:"p-inputgroup mt-2"},Ae=f(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u6298\u6263\u78BC",-1)),He={class:"p-inputgroup mt-2"},Re=f(()=>o("span",{class:"p-inputgroup-addon"},"\u662F\u5426\u555F\u7528",-1));function ze(e,s,d,V,w,P){const l=C("Checkbox"),_=C("Paginator"),y=C("InputText"),p=C("Calendar"),g=C("Button"),M=C("Dialog");return u(),i("section",de,[re,o("header",ie,[(u(!0),i(Y,null,A(e.headers,(t,k)=>(u(),i("div",{key:`headers${k}`,class:"header",onClick:v=>e.sort(t)},[x(b(t.name)+" ",1),t.key?F((u(),i("span",ue,me,512)),[[N,t.sortDesc===null]]):I("",!0),t.key?F((u(),i("span",he,_e,512)),[[N,t.sortDesc===!1]]):I("",!0),t.key?F((u(),i("span",ge,ve,512)),[[N,t.sortDesc]]):I("",!0)],8,ce))),128))]),(u(!0),i(Y,null,A(e.items,(t,k)=>(u(),i("main",{class:"ecommerce-grid",key:`content${k}`,style:ee([{color:"#39312e"},k%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[o("div",be,[o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:v=>e.showEditModal(2,t)}," \u7DE8\u8F2F ",8,we),o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:v=>e.showEditModal(3,t)}," \u522A\u9664 ",8,ke)]),o("div",{class:"content",title:t.title},b(t.title||""),9,Ce),o("div",{class:"content",title:t.percent},b(t.percent||""),9,Ie),o("div",{class:"content",title:t.due_date},b(t.due_date||""),9,Ve),o("div",{class:"content",title:t.code},b(t.code||""),9,Be),o("div",{class:"content",title:t.is_enabled},[c(l,{binary:!0,modelValue:t.is_enabled,"onUpdate:modelValue":v=>t.is_enabled=v,onChange:v=>e.setStatus(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,$e)],4))),128)),e.items.length?I("",!0):(u(),i("main",De," No Data ")),o("footer",Pe,[c(_,{first:e.offset,"onUpdate:first":s[0]||(s[0]=t=>e.offset=t),rows:e.rows,"onUpdate:rows":s[1]||(s[1]=t=>e.rows=t),rowsPerPageOptions:[5,10,50],totalRecords:e.totalItemsCount},null,8,["first","rows","totalRecords"]),o("div",Me,"\u5171"+b(e.totalItemsCount)+"\u7B46",1)]),c(M,{visible:e.editModal,"onUpdate:visible":s[8]||(s[8]=t=>e.editModal=t),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:T(()=>[o("h3",null,b(e.nowType==1?"\u65B0\u589E\u512A\u60E0\u5238":e.nowType==2?"\u7DE8\u8F2F\u512A\u60E0\u5238":"\u522A\u9664\u512A\u60E0\u5238"),1)]),footer:T(()=>[c(g,{label:"\u78BA\u5B9A",onClick:e.saveEditModal},null,8,["onClick"]),c(g,{label:"\u53D6\u6D88",class:"p-button-success",onClick:s[7]||(s[7]=t=>e.editModal=!1)})]),default:T(()=>[o("section",Ue,[e.nowType==3?(u(),i("h2",je," \u662F\u5426\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u512A\u60E0\u5238? ")):I("",!0),o("div",Te,[Fe,c(y,{type:"text",modelValue:e.modalItem.title,"onUpdate:modelValue":s[2]||(s[2]=t=>e.modalItem.title=t),modelModifiers:{trim:!0},disabled:e.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),o("div",Ne,[Oe,c(y,{modelValue:e.modalItem.percent,"onUpdate:modelValue":s[3]||(s[3]=t=>e.modalItem.percent=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3,type:"Number"},null,8,["modelValue","disabled"])]),o("div",Ee,[Se,c(p,{modelValue:e.modalItem.due_date,"onUpdate:modelValue":s[4]||(s[4]=t=>e.modalItem.due_date=t),showIcon:!0,dateFormat:"yy-mm-dd",style:{height:"40px"},class:"hidden-item",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),o("div",Ye,[Ae,c(y,{modelValue:e.modalItem.code,"onUpdate:modelValue":s[5]||(s[5]=t=>e.modalItem.code=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),o("div",He,[Re,c(l,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:e.modalItem.is_enabled,"onUpdate:modelValue":s[6]||(s[6]=t=>e.modalItem.is_enabled=t)},null,8,["modelValue"])])])]),_:1},8,["visible"])])}var et=ne(le,[["render",ze],["__scopeId","data-v-498035d8"]]);export{et as default};
