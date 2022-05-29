var ee=Object.defineProperty;var z=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var L=(t,s,c)=>s in t?ee(t,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[s]=c,j=(t,s)=>{for(var c in s||(s={}))te.call(s,c)&&L(t,c,s[c]);if(z)for(var c of z(s))oe.call(s,c)&&L(t,c,s[c]);return t};import{d as se,U as le,r as p,W as ne,X as ae,Y as W,e as k,c as m,a as o,F,Z as E,h as d,_ as J,g as B,$ as y,a0 as O,a1 as ie,a2 as re,o as g,a3 as de,S as R,a4 as G,a5 as ue,w as pe}from"./vendor.86b11e5a.js";import{g as ce,p as me,a as X,d as ge,b as fe}from"./apis.2d8a3703.js";import{_ as he}from"./index.2c6fdd8b.js";import"./index.c644ebda.js";import"./axios.31af0f42.js";import"./dayjs.min.b172dca0.js";const ve=se({name:"function",components:{},setup(){le("emitter").on("addProducts",n=>{H(1)});const s=p([{name:"\u64CD\u4F5C",key:"",sortDesc:null},{name:"\u6A19\u984C",key:"title",sortDesc:null},{name:"\u63CF\u8FF0",key:"description",sortDesc:null},{name:"\u8AAA\u660E",key:"content",sortDesc:null},{name:"\u5206\u985E",key:"category",sortDesc:null},{name:"\u55AE\u4F4D",key:"unit",sortDesc:null},{name:"\u539F\u50F9",key:"origin_price",sortDesc:null},{name:"\u552E\u50F9",key:"price",sortDesc:null},{name:"\u662F\u5426\u555F\u7528",key:"is_enabled",sortDesc:null}]),c=p([]),M=p([]),A=p(0),U=p(10),N=p(1),f=p([]),v=ne();async function V(){var n;try{const l=await ce();let i=Object.values((n=l.data)==null?void 0:n.products);i=i.filter(r=>r.title!="\u6E2C\u8A66\u7684\u7522\u54C1s"),c.value=[...i],M.value=[...i],_()}catch(l){v.error(`${l.response?l.response.data:l}`,{timeout:2e3,hideProgressBar:!0})}}const _=()=>{const l=(+A.value/+U.value+1-1)*U.value,i=U.value;let r=JSON.parse(JSON.stringify(c.value));typeof S.value=="boolean"&&(r=r.filter(a=>a.is_enabled==S.value)),D.value&&(r=r.filter(a=>a.title.includes(D.value))),e.value&&(r=r.filter(a=>a.content.includes(e.value))),h.value&&(r=r.filter(a=>a.category.includes(h.value))),N.value=r.length,r=r.slice(l,i+l),M.value=JSON.parse(JSON.stringify(r))},T=n=>{if(!n.key)return;n.sortDesc?n.sortDesc=null:n.sortDesc===!1?n.sortDesc=!0:n.sortDesc===null&&(n.sortDesc=!1),f.value=[],s.value.forEach(i=>{i.sortDesc!==null&&f.value.push(i.sortDesc?`${i.key} desc`:`${i.key}`)});let l=f.value.map(i=>({prop:i.includes("desc")?i.split(" ")[0]:i,direction:i.includes("desc")?1:-1}));c.value.sort(function(i,r){let a=0,C=0;for(;a<l.length&&C===0;)isNaN(+r[l[a].prop].toString())?C=l[a].direction*(i[l[a].prop].toString()<r[l[a].prop].toString()?-1:i[l[a].prop].toString()>r[l[a].prop].toString()?1:0):C=l[a].direction*(+i[l[a].prop].toString()<+r[l[a].prop].toString()?-1:+i[l[a].prop].toString()>+r[l[a].prop].toString()?1:0),a++;return C}),_()},S=p(null),D=p(""),e=p(""),h=p(""),b=p([{value:!0,text:"\u555F\u7528"},{value:!1,text:"\u5DF2\u505C\u7528"}]);function Y(){S.value="",D.value="",e.value="",h.value="",V()}ae(async()=>{await V()}),W(A,(n,l)=>{_()}),W(U,(n,l)=>{_()});const K=p(!1),I=p(1),w=p({});function H(n,l){let i=new Array(6).fill().map((r,a)=>({url:"",index:`\u7DB2\u5740${a+1}`}));n==2||n==3?(w.value=j({},l),(l==null?void 0:l.imagesUrl)?(w.value.imagesArr=l.imagesUrl.map((r,a)=>({url:r,index:`\u7DB2\u5740${a+1}`})),w.value.imagesArr.unshift({url:l.imageUrl,index:"\u4E3B\u5716\u7DB2\u5740"})):(w.value.imagesArr=i,w.value.imagesArr.unshift({url:l.imageUrl,index:"\u4E3B\u5716\u7DB2\u5740"}))):w.value={category:"",content:"",description:"",imageUrl:"",imagesArr:i,is_enabled:!0,origin_price:0,price:0,title:"",unit:""},I.value=n,K.value=!0}const Z=async()=>{const n=j({},w.value);n.imagesUrl=n.imagesArr.slice(1).map(l=>`${l.url}`),n.imageUrl=n.imagesArr[0].url,delete n.imagesArr;try{if(I.value==1){const l=await me({data:n})}if(I.value==2){const l=await X({data:n},n.id)}if(I.value==3){const l=await ge(n.id)}v.success(`${I.value==1?"\u65B0\u589E":I.value==2?"\u7DE8\u8F2F":"\u522A\u9664"}\u6210\u529F`,{timeout:2e3,hideProgressBar:!0})}catch(l){v.error(`${l.response?l.response.data:l}`,{timeout:2e3,hideProgressBar:!0})}V(),K.value=!1},q=async n=>{const l=j({},n);await X({data:l},l.id),V(),v.success("\u7522\u54C1\u8ABF\u6574\u6210\u529F",{timeout:2e3,hideProgressBar:!0})},Q=p(""),x=p([{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]);return{onUpload:()=>{v.success("\u5716\u7247\u4E0A\u50B3\u6210\u529F",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async n=>{var r,a,C;const l=n.target.files[0],i=Boolean(n.target.files[0])?n.target.files[0].name.split(".")[0]:"";try{if(!Boolean(i)){v.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let $=new FormData;$.append("File",l);const P=await fe($);console.log("res",P),((r=P.data)==null?void 0:r.success)?(w.value.imagesArr[0].url=P.data.imageUrl,v.success("\u4E0A\u50B3\u5716\u7247\u6210\u529F",{timeout:2e3,hideProgressBar:!0})):v.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(C=(a=P.data)==null?void 0:a.message)==null?void 0:C.code}`,{timeout:2e3,hideProgressBar:!0})}catch($){v.error(`${$.response?$.response.data:$}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:Q,responsiveOptions:x,headers:s,items:c,itemsForShow:M,toast:v,getData:V,filterItems:_,sort:T,offset:A,rows:U,totalItemsCount:N,orderByArr:f,selectedActivate:S,selectedTitle:D,selectedContent:e,selectedCat:h,activates:b,clearSearch:Y,editModal:K,modalItem:w,nowType:I,showEditModal:H,saveEditModal:Z,setStatus:q}}}),u=t=>(ie("data-v-3f61e3ba"),t=t(),re(),t),ye={class:"main-section px-3"},be={class:"search-block"},we=u(()=>o("h5",{class:"big-title"},"\u7522\u54C1\u7BA1\u7406",-1)),_e={class:"p-2 search-section"},ke={class:"p-inputgroup"},Ve=u(()=>o("span",{class:"p-inputgroup-addon"},"\u555F\u7528\u72C0\u614B",-1)),Ie=["for"],Ce={class:"p-inputgroup"},Ue=u(()=>o("span",{class:"p-inputgroup-addon"},"\u7522\u54C1\u6A19\u984C",-1)),Se={class:"p-inputgroup"},De=u(()=>o("span",{class:"p-inputgroup-addon"},"\u7522\u54C1\u63CF\u8FF0 ",-1)),$e={class:"p-inputgroup"},Te=u(()=>o("span",{class:"p-inputgroup-addon"},"\u7522\u54C1\u5206\u985E",-1)),Be={class:"ecommerce-grid my-dark"},Me=["onClick"],Ae={key:0},Ne=u(()=>o("i",{class:"pi pi-sort"},null,-1)),Pe=[Ne],je={key:1},Fe=u(()=>o("i",{class:"pi pi-caret-up"},null,-1)),Ee=[Fe],Oe={key:2},Ke=u(()=>o("i",{class:"pi pi-caret-down"},null,-1)),Je=[Ke],Re={class:"content",style:{cursor:"pointer","padding-top":"3px"}},Ge=["onClick"],He=["onClick"],ze=["title"],Le=["title"],We=["title"],Xe=["title"],Ye=["title"],Ze=["title"],qe=["title"],Qe=["title"],xe={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},et={class:"grid grid-flow-col auto-cols-max justify-center"},tt={class:"mt-4"},ot={class:"modal-main-content"},st={key:0,class:"mb-2 font-black text-xl"},lt={class:"p-inputgroup mt-2 col-span-full"},nt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u6A19\u984C",-1)),at={class:"p-inputgroup mt-2 col-span-full"},it=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u63CF\u8FF0",-1)),rt={class:"p-inputgroup mt-2 col-span-full"},dt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u8AAA\u660E",-1)),ut={class:"p-inputgroup mt-2"},pt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u5206\u985E",-1)),ct={class:"p-inputgroup mt-2"},mt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u55AE\u4F4D",-1)),gt={class:"p-inputgroup mt-2"},ft=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u539F\u50F9",-1)),ht={class:"p-inputgroup mt-2"},vt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"\u552E\u50F9",-1)),yt={class:"p-inputgroup mt-2"},bt=u(()=>o("span",{class:"p-inputgroup-addon"},"\u4E3B\u5716\u7DB2\u5740",-1)),wt={class:"p-inputgroup-addon"},_t={class:"p-inputgroup mt-2"},kt=u(()=>o("span",{class:"p-inputgroup-addon"},"\u662F\u5426\u555F\u7528",-1)),Vt={class:"p-inputgroup mt-2"},It=u(()=>o("span",{class:"p-inputgroup-addon"},"\u4E0A\u50B3\u4E3B\u5716\u5716\u7247",-1)),Ct={class:"col-span-full flex justify-center mt-2"},Ut=["src","title"],St={key:1,style:{width:"500px",height:"310px",border:"1px solid #e1e0e0"}};function Dt(t,s,c,M,A,U){const N=k("RadioButton"),f=k("InputText"),v=k("Checkbox"),V=k("Paginator"),_=k("Textarea"),T=k("Button"),S=k("Galleria"),D=k("Dialog");return g(),m("section",ye,[o("section",be,[we,o("div",_e,[o("div",ke,[Ve,(g(!0),m(F,null,E(t.activates,e=>(g(),m("div",{key:e.text,class:"p-field-radiobutton mr-3 mt-2"},[d(N,{id:e.text,name:"item",value:e.value,modelValue:t.selectedActivate,"onUpdate:modelValue":s[0]||(s[0]=h=>t.selectedActivate=h),onChange:t.filterItems},null,8,["id","value","modelValue","onChange"]),o("label",{for:e.text},y(e.text),9,Ie)]))),128))]),o("div",Ce,[Ue,d(f,{type:"text",modelValue:t.selectedTitle,"onUpdate:modelValue":s[1]||(s[1]=e=>t.selectedTitle=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("div",Se,[De,d(f,{type:"text",modelValue:t.selectedContent,"onUpdate:modelValue":s[2]||(s[2]=e=>t.selectedContent=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("div",$e,[Te,d(f,{type:"text",modelValue:t.selectedCat,"onUpdate:modelValue":s[3]||(s[3]=e=>t.selectedCat=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("button",{class:"text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#0c69e1"},onClick:s[4]||(s[4]=(...e)=>t.filterItems&&t.filterItems(...e))}," \u67E5\u8A62 "),o("button",{class:"text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#6a9f3e"},onClick:s[5]||(s[5]=(...e)=>t.clearSearch&&t.clearSearch(...e))}," \u6E05\u9664 "),o("button",{class:"text-gray-700 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#f9be4a"},onClick:s[6]||(s[6]=e=>t.showEditModal(1))}," \u65B0\u589E\u7522\u54C1 ")])]),o("header",Be,[(g(!0),m(F,null,E(t.headers,(e,h)=>(g(),m("div",{key:`headers${h}`,class:"header",onClick:b=>t.sort(e)},[de(y(e.name)+" ",1),e.key?R((g(),m("span",Ae,Pe,512)),[[G,e.sortDesc===null]]):B("",!0),e.key?R((g(),m("span",je,Ee,512)),[[G,e.sortDesc===!1]]):B("",!0),e.key?R((g(),m("span",Oe,Je,512)),[[G,e.sortDesc]]):B("",!0)],8,Me))),128))]),(g(!0),m(F,null,E(t.itemsForShow,(e,h)=>(g(),m("main",{class:"ecommerce-grid",key:`content${h}`,style:ue([{color:"#39312e"},h%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[o("div",Re,[o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:b=>t.showEditModal(2,e)}," \u7DE8\u8F2F ",8,Ge),o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:b=>t.showEditModal(3,e)}," \u522A\u9664 ",8,He)]),o("div",{class:"content",title:e.title},y(e.title||""),9,ze),o("div",{class:"content",title:e.description},y(e.description||""),9,Le),o("div",{class:"content",title:e.content},y(e.content||""),9,We),o("div",{class:"content",title:e.category},y(e.category||""),9,Xe),o("div",{class:"content",title:e.unit},y(e.unit||""),9,Ye),o("div",{class:"content",title:e.origin_price},y(e.origin_price||""),9,Ze),o("div",{class:"content",title:e.price},y(e.price||""),9,qe),o("div",{class:"content",title:e.is_enabled},[d(v,{binary:!0,modelValue:e.is_enabled,"onUpdate:modelValue":b=>e.is_enabled=b,onChange:b=>t.setStatus(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,Qe)],4))),128)),t.items.length?B("",!0):(g(),m("main",xe," No Data ")),o("footer",et,[d(V,{first:t.offset,"onUpdate:first":s[7]||(s[7]=e=>t.offset=e),rows:t.rows,"onUpdate:rows":s[8]||(s[8]=e=>t.rows=e),rowsPerPageOptions:[5,10,50],totalRecords:t.totalItemsCount},null,8,["first","rows","totalRecords"]),o("div",tt,"\u5171"+y(t.totalItemsCount)+"\u7B46",1)]),d(D,{visible:t.editModal,"onUpdate:visible":s[20]||(s[20]=e=>t.editModal=e),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:O(()=>[o("h3",null,y(t.nowType==1?"\u65B0\u589E\u7522\u54C1":t.nowType==2?"\u7DE8\u8F2F\u7522\u54C1":"\u522A\u9664\u7522\u54C1"),1)]),footer:O(()=>[d(T,{label:"\u78BA\u5B9A",onClick:t.saveEditModal},null,8,["onClick"]),d(T,{label:"\u53D6\u6D88",class:"p-button-success",onClick:s[19]||(s[19]=e=>t.editModal=!1)})]),default:O(()=>[o("section",ot,[t.nowType==3?(g(),m("h2",st," \u662F\u5426\u78BA\u5B9A\u8981\u522A\u9664\u6B64\u7522\u54C1? ")):B("",!0),o("div",lt,[nt,d(f,{type:"text",modelValue:t.modalItem.title,"onUpdate:modelValue":s[9]||(s[9]=e=>t.modalItem.title=e),modelModifiers:{trim:!0},disabled:t.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),o("div",at,[it,d(_,{modelValue:t.modalItem.description,"onUpdate:modelValue":s[10]||(s[10]=e=>t.modalItem.description=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",rt,[dt,d(_,{modelValue:t.modalItem.content,"onUpdate:modelValue":s[11]||(s[11]=e=>t.modalItem.content=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ut,[pt,d(f,{modelValue:t.modalItem.category,"onUpdate:modelValue":s[12]||(s[12]=e=>t.modalItem.category=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ct,[mt,d(f,{modelValue:t.modalItem.unit,"onUpdate:modelValue":s[13]||(s[13]=e=>t.modalItem.unit=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",gt,[ft,d(f,{type:"Number",modelValue:t.modalItem.origin_price,"onUpdate:modelValue":s[14]||(s[14]=e=>t.modalItem.origin_price=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ht,[vt,d(f,{type:"Number",modelValue:t.modalItem.price,"onUpdate:modelValue":s[15]||(s[15]=e=>t.modalItem.price=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",yt,[bt,d(f,{modelValue:t.modalItem.imagesArr[0].url,"onUpdate:modelValue":s[16]||(s[16]=e=>t.modalItem.imagesArr[0].url=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),(g(!0),m(F,null,E(t.modalItem.imagesArr.slice(1),(e,h)=>(g(),m("div",{class:"p-inputgroup mt-2",key:`headers${h}`},[o("span",wt,"\u8F38\u5165\u5716\u7247\u7DB2\u5740 "+y(h+1),1),d(f,{modelValue:e.url,"onUpdate:modelValue":b=>e.url=b,class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","onUpdate:modelValue","disabled"])]))),128)),o("div",_t,[kt,d(v,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:t.modalItem.is_enabled,"onUpdate:modelValue":s[17]||(s[17]=e=>t.modalItem.is_enabled=e)},null,8,["modelValue"])]),o("div",Vt,[It,d(T,{onClick:pe(t.uploadNewFile,["stop"]),title:"\u4E0A\u50B3\u4E3B\u5716\u5716\u7247",label:"Submit",icon:"pi pi-box",iconPos:"left",style:{"margin-left":"10px"}},null,8,["onClick"]),o("input",{id:"file-upload",type:"file",onChange:s[18]||(s[18]=e=>t.fileChange(e)),ref:"inputFile",accept:"image/bmp,image/x-bmp,image/jpeg,image/png,.pdf",hidden:""},null,544)]),o("div",Ct,[d(S,{circular:!0,showItemNavigators:!0,value:t.modalItem.imagesArr,responsiveOptions:t.responsiveOptions,numVisible:6,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0},{item:O(e=>[e.item.url?(g(),m("img",{key:0,src:e.item.url,style:{height:"400px",display:"block"},title:e.item.index},null,8,Ut)):(g(),m("div",St))]),_:1},8,["value","responsiveOptions"])])])]),_:1},8,["visible"])])}var Ot=he(ve,[["render",Dt],["__scopeId","data-v-3f61e3ba"]]);export{Ot as default};
