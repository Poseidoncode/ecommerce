var z=Object.defineProperty;var O=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var E=(e,o,d)=>o in e?z(e,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[o]=d,$=(e,o)=>{for(var d in o||(o={}))J.call(o,d)&&E(e,d,o[d]);if(O)for(var d of O(o))L.call(o,d)&&E(e,d,o[d]);return e};import{d as G,i as K,r as h,f as Q,o as W,al as S,s as C,j as i,k as s,F as Y,p as A,l as I,y as u,t as b,an as j,aq as X,ah as Z,ai as x,h as c,ao as ee,m as F,ap as N,aj as te}from"./vendor.9007db54.js";import{_ as oe,h as H,i as se,j as R,k as ae,f as ne}from"./index.a74ad88d.js";const le=G({name:"function",components:{},setup(){K("emitter").on("deleteOrders",a=>{t()});const o=h([{name:"\u64CD\u4F5C",key:"",sortDesc:null},{name:"\u6A19\u984C",key:"title",sortDesc:null},{name:"Percent",key:"percent",sortDesc:null},{name:"\u5230\u671F\u65E5",key:"due_date",sortDesc:null},{name:"\u6298\u6263\u78BC",key:"code",sortDesc:null},{name:"\u662F\u5426\u555F\u7528",key:"is_enabled",sortDesc:null}]),d=h([]),V=h(0),w=h(10),P=h(1),l=Q();async function _(){var a,n,B;try{const m=+V.value/+w.value+1,U=(m-1)*w.value,T=w.value,r=await se(`?page=${m}`);console.log("res",r),d.value=[...(a=r.data)==null?void 0:a.orders],P.value=+((B=(n=r.data)==null?void 0:n.pagination)==null?void 0:B.total_pages)*10}catch(m){l.error(`${m.response?m.response.data:m}`,{timeout:2e3,hideProgressBar:!0})}}W(async()=>{await _()}),S(V,(a,n)=>{_()}),S(w,(a,n)=>{_()});const y=h(!1),p=h(1),g=h({});function M(a,n){a==2||a==3?g.value=$({},n):g.value={title:"",is_enabled:!0,percent:90,due_date:null,code:""},p.value=a,y.value=!0}const t=async()=>{try{await H(),l.info("\u522A\u9664\u5168\u90E8Orders\u6210\u529F",{timeout:2e3,hideProgressBar:!0})}catch(a){l.error(`${a.response?a.response.data:a}`,{timeout:2e3,hideProgressBar:!0})}},k=async()=>{const a=$({},g.value);a.due_date=X(a.due_date).format("YYYY-MM-DD");try{if(p.value==1){const n=await H({data:a})}if(p.value==2){const n=await R({data:a},a.id)}if(p.value==3){const n=await ae(a.id)}l.info(`${p.value==1?"\u65B0\u589E":p.value==2?"\u7DE8\u8F2F":"\u522A\u9664"}\u6210\u529F`,{timeout:2e3,hideProgressBar:!0})}catch(n){l.error(`${n.response?n.response.data:n}`,{timeout:2e3,hideProgressBar:!0})}_(),y.value=!1},v=async a=>{const n=$({},a);await R({data:n},n.id),_(),l.info("\u512A\u60E0\u5238\u8ABF\u6574\u6210\u529F",{timeout:2e3,hideProgressBar:!0})},q=h("");return{onUpload:()=>{l.info("\u5716\u7247\u4E0A\u50B3\u6210\u529F",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async a=>{var m,U,T;const n=a.target.files[0],B=Boolean(a.target.files[0])?a.target.files[0].name.split(".")[0]:"";try{if(!Boolean(B)){l.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let r=new FormData;r.append("File",n);const D=await ne(r);console.log("res",D),((m=D.data)==null?void 0:m.info)?(g.value.imagesArr[0].url=D.data.imageUrl,l.info("\u4E0A\u50B3\u5716\u7247\u6210\u529F",{timeout:2e3,hideProgressBar:!0})):l.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(T=(U=D.data)==null?void 0:U.message)==null?void 0:T.code}`,{timeout:2e3,hideProgressBar:!0})}catch(r){l.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:q,headers:o,items:d,toast:l,getData:_,offset:V,rows:w,totalItemsCount:P,editModal:y,modalItem:g,nowType:p,showEditModal:M,saveEditModal:k,setStatus:v}}}),f=e=>(Z("data-v-2f24d850"),e=e(),x(),e),de={class:"main-section px-3"},re=f(()=>s("section",{class:"search-block"},[s("h5",{class:"big-title"},"\u8A02\u55AE\u7BA1\u7406")],-1)),ie={class:"ecommerce-grid my-dark"},ue=["onClick"],ce={key:0},pe=f(()=>s("i",{class:"pi pi-sort"},null,-1)),me=[pe],he={key:1},fe=f(()=>s("i",{class:"pi pi-caret-up"},null,-1)),_e=[fe],ge={key:2},ye=f(()=>s("i",{class:"pi pi-caret-down"},null,-1)),ve=[ye],be={class:"content",style:{cursor:"pointer","padding-top":"3px"}},we=["onClick"],ke=["onClick"],Ce=["title"],Ie=["title"],Ve=["title"],Be=["title"],De=["title"],$e={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},Pe={class:"grid grid-flow-col auto-cols-max justify-center"},Me={class:"mt-4"},Ue={class:"modal-main-content"},Te={key:0,class:"mb-2 font-black text-xl"},je={class:"p-inputgroup mt-2 col-span-full"},Fe=f(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u6A19\u984C",-1)),Ne={class:"p-inputgroup mt-2"},Oe=f(()=>s("span",{class:"p-inputgroup-addon red-star"},"Percent",-1)),Ee={class:"p-inputgroup mt-2"},Se=f(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u5230\u671F\u65E5",-1)),Ye={class:"p-inputgroup mt-2"},Ae=f(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u6298\u6263\u78BC",-1)),He={class:"p-inputgroup mt-2"},Re=f(()=>s("span",{class:"p-inputgroup-addon"},"\u662F\u5426\u555F\u7528",-1));function qe(e,o,d,V,w,P){const l=C("Checkbox"),_=C("Paginator"),y=C("InputText"),p=C("Calendar"),g=C("Button"),M=C("Dialog");return c(),i("section",de,[re,s("header",ie,[(c(!0),i(Y,null,A(e.headers,(t,k)=>(c(),i("div",{key:`headers${k}`,class:"header",onClick:v=>e.sort(t)},[ee(b(t.name)+" ",1),t.key?F((c(),i("span",ce,me,512)),[[N,t.sortDesc===null]]):I("",!0),t.key?F((c(),i("span",he,_e,512)),[[N,t.sortDesc===!1]]):I("",!0),t.key?F((c(),i("span",ge,ve,512)),[[N,t.sortDesc]]):I("",!0)],8,ue))),128))]),(c(!0),i(Y,null,A(e.items,(t,k)=>(c(),i("main",{class:"ecommerce-grid",key:`content${k}`,style:te([{color:"#39312e"},k%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[s("div",be,[s("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:v=>e.showEditModal(2,t)}," \u7DE8\u8F2F ",8,we),s("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:v=>e.showEditModal(3,t)}," \u522A\u9664 ",8,ke)]),s("div",{class:"content",title:t.title},b(t.title||""),9,Ce),s("div",{class:"content",title:t.percent},b(t.percent||""),9,Ie),s("div",{class:"content",title:t.due_date},b(t.due_date||""),9,Ve),s("div",{class:"content",title:t.code},b(t.code||""),9,Be),s("div",{class:"content",title:t.is_enabled},[u(l,{binary:!0,modelValue:t.is_enabled,"onUpdate:modelValue":v=>t.is_enabled=v,onChange:v=>e.setStatus(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,De)],4))),128)),e.items.length?I("",!0):(c(),i("main",$e," No Data ")),s("footer",Pe,[u(_,{first:e.offset,"onUpdate:first":o[0]||(o[0]=t=>e.offset=t),rows:e.rows,"onUpdate:rows":o[1]||(o[1]=t=>e.rows=t),rowsPerPageOptions:[5,10,50],totalRecords:e.totalItemsCount},null,8,["first","rows","totalRecords"]),s("div",Me,"\u5171"+b(e.totalItemsCount)+"\u7B46",1)]),u(M,{visible:e.editModal,"onUpdate:visible":o[8]||(o[8]=t=>e.editModal=t),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:j(()=>[s("h3",null,b(e.nowType==1?"\u65B0\u589E\u512A\u60E0\u5238":e.nowType==2?"\u7DE8\u8F2F\u512A\u60E0\u5238":"\u522A\u9664\u512A\u60E0\u5238"),1)]),footer:j(()=>[u(g,{label:"\u78BA\u5B9A",onClick:e.saveEditModal},null,8,["onClick"]),u(g,{label:"\u53D6\u6D88",class:"p-button-success",onClick:o[7]||(o[7]=t=>e.editModal=!1)})]),default:j(()=>[s("section",Ue,[e.nowType==3?(c(),i("h2",Te," \u662F\u5426\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u512A\u60E0\u5238? ")):I("",!0),s("div",je,[Fe,u(y,{type:"text",modelValue:e.modalItem.title,"onUpdate:modelValue":o[2]||(o[2]=t=>e.modalItem.title=t),modelModifiers:{trim:!0},disabled:e.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),s("div",Ne,[Oe,u(y,{modelValue:e.modalItem.percent,"onUpdate:modelValue":o[3]||(o[3]=t=>e.modalItem.percent=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3,type:"Number"},null,8,["modelValue","disabled"])]),s("div",Ee,[Se,u(p,{modelValue:e.modalItem.due_date,"onUpdate:modelValue":o[4]||(o[4]=t=>e.modalItem.due_date=t),showIcon:!0,dateFormat:"yy-mm-dd",style:{height:"40px"},class:"hidden-item",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),s("div",Ye,[Ae,u(y,{modelValue:e.modalItem.code,"onUpdate:modelValue":o[5]||(o[5]=t=>e.modalItem.code=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),s("div",He,[Re,u(l,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:e.modalItem.is_enabled,"onUpdate:modelValue":o[6]||(o[6]=t=>e.modalItem.is_enabled=t)},null,8,["modelValue"])])])]),_:1},8,["visible"])])}var We=oe(le,[["render",qe],["__scopeId","data-v-2f24d850"]]);export{We as default};