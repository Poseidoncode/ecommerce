var H=Object.defineProperty;var F=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var T=(e,o,l)=>o in e?H(e,o,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[o]=l,$=(e,o)=>{for(var l in o||(o={}))R.call(o,l)&&T(e,l,o[l]);if(F)for(var l of F(o))q.call(o,l)&&T(e,l,o[l]);return e};import{d as z,a0 as J,r as m,U as L,o as O,a1 as N,g as C,c as v,e as s,F as E,V as S,i as A,j as i,Z as y,a3 as U,W,X,b,Y as Z,w as G}from"./vendor.136a34f0.js";import{n as K,o as Q,q as Y,r as x,c as ee}from"./apis.d83aefd7.js";import{d as te}from"./dayjs.min.b172dca0.js";import{_ as oe}from"./index.4e565176.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";const se=z({name:"function",components:{},setup(){J("emitter").on("addArticles",a=>{V(1)});const o=m([{name:"\u64CD\u4F5C",key:"",sortDesc:null},{name:"\u6A19\u984C",key:"title",sortDesc:null},{name:"Percent",key:"percent",sortDesc:null},{name:"\u5230\u671F\u65E5",key:"due_date",sortDesc:null},{name:"\u6298\u6263\u78BC",key:"code",sortDesc:null},{name:"\u662F\u5426\u555F\u7528",key:"is_enabled",sortDesc:null}]),l=m([]),I=m(0),w=m(10),P=m(1),d=L();async function f(){var a,n,B;try{const p=+I.value/+w.value+1,j=(p-1)*w.value,D=w.value,r=await K(`?page=${p}`);console.log("res",r),l.value=[...(a=r.data)==null?void 0:a.coupons],P.value=+((B=(n=r.data)==null?void 0:n.pagination)==null?void 0:B.total_pages)*10}catch(p){d.error(`${p.response?p.response.data:p}`,{timeout:2e3,hideProgressBar:!0})}}O(async()=>{await f()}),N(I,(a,n)=>{f()}),N(w,(a,n)=>{f()});const g=m(!1),u=m(1),c=m({});function V(a,n){a==2||a==3?c.value=$({},n):c.value={title:"",is_enabled:!0,percent:90,due_date:null,code:""},u.value=a,g.value=!0}const t=async()=>{const a=$({},c.value);a.due_date=te(a.due_date).format("YYYY-MM-DD");try{if(u.value==1){const n=await Q({data:a})}if(u.value==2){const n=await Y({data:a},a.id)}if(u.value==3){const n=await x(a.id)}d.success(`${u.value==1?"\u65B0\u589E":u.value==2?"\u7DE8\u8F2F":"\u522A\u9664"}\u6210\u529F`,{timeout:2e3,hideProgressBar:!0})}catch(n){d.error(`${n.response?n.response.data:n}`,{timeout:2e3,hideProgressBar:!0})}f(),g.value=!1},k=async a=>{const n=$({},a);await Y({data:n},n.id),f(),d.success("\u6587\u7AE0\u8ABF\u6574\u6210\u529F",{timeout:2e3,hideProgressBar:!0})},h=m("");return{onUpload:()=>{d.success("\u5716\u7247\u4E0A\u50B3\u6210\u529F",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async a=>{var p,j,D;const n=a.target.files[0],B=Boolean(a.target.files[0])?a.target.files[0].name.split(".")[0]:"";try{if(!Boolean(B)){d.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let r=new FormData;r.append("File",n);const M=await ee(r);console.log("res",M),((p=M.data)==null?void 0:p.success)?(c.value.imagesArr[0].url=M.data.imageUrl,d.success("\u4E0A\u50B3\u5716\u7247\u6210\u529F",{timeout:2e3,hideProgressBar:!0})):d.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(D=(j=M.data)==null?void 0:j.message)==null?void 0:D.code}`,{timeout:2e3,hideProgressBar:!0})}catch(r){d.error(`${r.response?r.response.data:r}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:h,headers:o,items:l,toast:d,getData:f,offset:I,rows:w,totalItemsCount:P,editModal:g,modalItem:c,nowType:u,showEditModal:V,saveEditModal:t,setStatus:k}}}),_=e=>(W("data-v-f3ed1d90"),e=e(),X(),e),ae={class:"main-section px-3"},ne=_(()=>s("section",{class:"search-block"},[s("h5",{class:"big-title"},"\u6587\u7AE0\u7BA1\u7406")],-1)),le={class:"ecommerce-grid my-dark"},de=["onClick"],ie={class:"content",style:{cursor:"pointer","padding-top":"3px"}},re=["onClick"],ue=["onClick"],ce=["title"],pe=["title"],me=["title"],fe=["title"],ge=["title"],he={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},ve={class:"grid grid-flow-col auto-cols-max justify-center"},ye={class:"mt-4"},be={class:"modal-main-content"},_e={key:0,class:"mb-2 font-black text-xl"},we={class:"p-inputgroup mt-2 col-span-full"},ke=_(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u6A19\u984C",-1)),Ce={class:"p-inputgroup mt-2"},Ie=_(()=>s("span",{class:"p-inputgroup-addon red-star"},"Percent",-1)),Ve={class:"p-inputgroup mt-2"},Be=_(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u5230\u671F\u65E5",-1)),Me={class:"p-inputgroup mt-2"},$e=_(()=>s("span",{class:"p-inputgroup-addon red-star"},"\u6298\u6263\u78BC",-1)),Pe={class:"p-inputgroup mt-2"},je=_(()=>s("span",{class:"p-inputgroup-addon"},"\u662F\u5426\u555F\u7528",-1)),De={class:"p-inputgroup mt-2"},Ue=_(()=>s("span",{class:"p-inputgroup-addon"},"\u4E0A\u50B3\u4E3B\u5716\u5716\u7247",-1));function Fe(e,o,l,I,w,P){const d=C("Checkbox"),f=C("Paginator"),g=C("InputText"),u=C("Calendar"),c=C("Button"),V=C("Dialog");return b(),v("section",ae,[ne,s("header",le,[(b(!0),v(E,null,S(e.headers,(t,k)=>(b(),v("div",{key:`headers${k}`,class:"header",onClick:h=>e.sort(t)},y(t.name),9,de))),128))]),(b(!0),v(E,null,S(e.items,(t,k)=>(b(),v("main",{class:"ecommerce-grid",key:`content${k}`,style:Z([{color:"#39312e"},k%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[s("div",ie,[s("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:h=>e.showEditModal(2,t)}," \u7DE8\u8F2F ",8,re),s("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:h=>e.showEditModal(3,t)}," \u522A\u9664 ",8,ue)]),s("div",{class:"content",title:t.title},y(t.title||""),9,ce),s("div",{class:"content",title:t.percent},y(t.percent||""),9,pe),s("div",{class:"content",title:t.due_date},y(t.due_date||""),9,me),s("div",{class:"content",title:t.code},y(t.code||""),9,fe),s("div",{class:"content",title:t.is_enabled},[i(d,{binary:!0,modelValue:t.is_enabled,"onUpdate:modelValue":h=>t.is_enabled=h,onChange:h=>e.setStatus(t)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,ge)],4))),128)),e.items.length?A("",!0):(b(),v("main",he," No Data ")),s("footer",ve,[i(f,{first:e.offset,"onUpdate:first":o[0]||(o[0]=t=>e.offset=t),rows:e.rows,"onUpdate:rows":o[1]||(o[1]=t=>e.rows=t),rowsPerPageOptions:[5,10,50],totalRecords:e.totalItemsCount},null,8,["first","rows","totalRecords"]),s("div",ye,"\u5171"+y(e.totalItemsCount)+"\u7B46",1)]),i(V,{visible:e.editModal,"onUpdate:visible":o[9]||(o[9]=t=>e.editModal=t),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:U(()=>[s("h3",null,y(e.nowType==1?"\u65B0\u589E\u6587\u7AE0":e.nowType==2?"\u7DE8\u8F2F\u6587\u7AE0":"\u522A\u9664\u6587\u7AE0"),1)]),footer:U(()=>[i(c,{label:"\u78BA\u5B9A",onClick:e.saveEditModal},null,8,["onClick"]),i(c,{label:"\u53D6\u6D88",class:"p-button-success",onClick:o[8]||(o[8]=t=>e.editModal=!1)})]),default:U(()=>[s("section",be,[e.nowType==3?(b(),v("h2",_e," \u662F\u5426\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u6587\u7AE0? ")):A("",!0),s("div",we,[ke,i(g,{type:"text",modelValue:e.modalItem.title,"onUpdate:modelValue":o[2]||(o[2]=t=>e.modalItem.title=t),modelModifiers:{trim:!0},disabled:e.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),s("div",Ce,[Ie,i(g,{modelValue:e.modalItem.percent,"onUpdate:modelValue":o[3]||(o[3]=t=>e.modalItem.percent=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3,type:"Number"},null,8,["modelValue","disabled"])]),s("div",Ve,[Be,i(u,{modelValue:e.modalItem.due_date,"onUpdate:modelValue":o[4]||(o[4]=t=>e.modalItem.due_date=t),showIcon:!0,dateFormat:"yy-mm-dd",style:{height:"40px"},class:"hidden-item",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),s("div",Me,[$e,i(g,{modelValue:e.modalItem.code,"onUpdate:modelValue":o[5]||(o[5]=t=>e.modalItem.code=t),modelModifiers:{trim:!0},class:"custom-search",disabled:e.nowType==3},null,8,["modelValue","disabled"])]),s("div",Pe,[je,i(d,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:e.modalItem.is_enabled,"onUpdate:modelValue":o[6]||(o[6]=t=>e.modalItem.is_enabled=t)},null,8,["modelValue"])]),s("div",De,[Ue,i(c,{onClick:G(e.uploadNewFile,["stop"]),title:"\u4E0A\u50B3\u4E3B\u5716\u5716\u7247",label:"Submit",icon:"pi pi-box",iconPos:"left",style:{"margin-left":"10px"}},null,8,["onClick"]),s("input",{id:"file-upload",type:"file",onChange:o[7]||(o[7]=t=>e.fileChange(t)),ref:"inputFile",accept:"image/bmp,image/x-bmp,image/jpeg,image/png,.pdf",hidden:""},null,544)])])]),_:1},8,["visible"])])}var Je=oe(se,[["render",Fe],["__scopeId","data-v-f3ed1d90"]]);export{Je as default};
