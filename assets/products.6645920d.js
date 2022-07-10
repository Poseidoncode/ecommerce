var ee=Object.defineProperty;var H=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable;var q=(t,s,c)=>s in t?ee(t,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[s]=c,N=(t,s)=>{for(var c in s||(s={}))te.call(s,c)&&q(t,c,s[c]);if(H)for(var c of H(s))oe.call(s,c)&&q(t,c,s[c]);return t};import{d as se,i as le,r as p,f as ne,o as ae,ar as L,A as k,k as g,l as o,F as E,q as O,B as d,aA as J,m as A,t as y,as as F,y as ie,z as re,j as f,aB as de,p as R,aC as z,at as ue,w as pe}from"./vendor.81d289bd.js";import{_ as ce,b as me,c as ge,d as Q,e as fe,f as he}from"./index.cb162684.js";const ve=se({name:"function",components:{},setup(){le("emitter").on("addProducts",n=>{G(1)});const s=p([{name:"Operate",key:"",sortDesc:null},{name:"Title",key:"title",sortDesc:null},{name:"Description",key:"description",sortDesc:null},{name:"Content",key:"content",sortDesc:null},{name:"Category",key:"category",sortDesc:null},{name:"Unit",key:"unit",sortDesc:null},{name:"Origin Price",key:"origin_price",sortDesc:null},{name:"Price",key:"price",sortDesc:null},{name:"IsEnabled",key:"is_enabled",sortDesc:null}]),c=p([]),M=p([]),B=p(0),U=p(10),$=p(1),m=p([]),v=ne();async function V(){var n;try{const l=await me();let i=Object.values((n=l.data)==null?void 0:n.products);i=i.filter(r=>r.title!="\u6E2C\u8A66\u7684Products"),c.value=[...i],M.value=[...i],_()}catch(l){v.error(`${l.response?l.response.data.message:l}`,{timeout:2e3,hideProgressBar:!0})}}const _=()=>{const l=(+B.value/+U.value+1-1)*U.value,i=U.value;let r=JSON.parse(JSON.stringify(c.value));typeof D.value=="boolean"&&(r=r.filter(a=>a.is_enabled==D.value)),S.value&&(r=r.filter(a=>a.title.includes(S.value))),e.value&&(r=r.filter(a=>a.content.includes(e.value))),h.value&&(r=r.filter(a=>a.category.includes(h.value))),$.value=r.length,r=r.slice(l,i+l),M.value=JSON.parse(JSON.stringify(r))},T=n=>{if(!n.key)return;n.sortDesc?n.sortDesc=null:n.sortDesc===!1?n.sortDesc=!0:n.sortDesc===null&&(n.sortDesc=!1),m.value=[],s.value.forEach(i=>{i.sortDesc!==null&&m.value.push(i.sortDesc?`${i.key} desc`:`${i.key}`)});let l=m.value.map(i=>({prop:i.includes("desc")?i.split(" ")[0]:i,direction:i.includes("desc")?1:-1}));c.value.sort(function(i,r){let a=0,C=0;for(;a<l.length&&C===0;)isNaN(+r[l[a].prop].toString())?C=l[a].direction*(i[l[a].prop].toString()<r[l[a].prop].toString()?-1:i[l[a].prop].toString()>r[l[a].prop].toString()?1:0):C=l[a].direction*(+i[l[a].prop].toString()<+r[l[a].prop].toString()?-1:+i[l[a].prop].toString()>+r[l[a].prop].toString()?1:0),a++;return C}),_()},D=p(null),S=p(""),e=p(""),h=p(""),b=p([{value:!0,text:"\u555F\u7528"},{value:!1,text:"\u5DF2\u505C\u7528"}]);function W(){D.value="",S.value="",e.value="",h.value="",V()}ae(async()=>{await V()}),L(B,(n,l)=>{_()}),L(U,(n,l)=>{_()});const j=p(!1),I=p(1),w=p({});function G(n,l){let i=new Array(6).fill().map((r,a)=>({url:"",index:`\u7DB2\u5740${a+1}`}));n==2||n==3?(w.value=N({},l),(l==null?void 0:l.imagesUrl)?(w.value.imagesArr=l.imagesUrl.map((r,a)=>({url:r,index:`\u7DB2\u5740${a+1}`})),w.value.imagesArr.unshift({url:l.imageUrl,index:"\u4E3B\u5716\u7DB2\u5740"})):(w.value.imagesArr=i,w.value.imagesArr.unshift({url:l.imageUrl,index:"\u4E3B\u5716\u7DB2\u5740"}))):w.value={category:"",content:"",description:"",imageUrl:"",imagesArr:i,is_enabled:!0,origin_price:0,price:0,title:"",origintitle:"",unit:""},I.value=n,j.value=!0}const X=async()=>{const n=N({},w.value);n.imagesUrl=n.imagesArr.slice(1).map(l=>`${l.url}`),n.imageUrl=n.imagesArr[0].url,delete n.imagesArr,n.origin_price=+n.origin_price,n.price=+n.price;try{if(I.value==1){const l=await ge({data:n})}if(I.value==2){const l=await Q({data:n},n.id)}if(I.value==3){const l=await fe(n.id)}v.info(`${I.value==1?"Add":I.value==2?"Edit":"Delete"}Success`,{timeout:2e3,hideProgressBar:!0})}catch(l){v.error(`${l.response?l.response.data.message:l}`,{timeout:2e3,hideProgressBar:!0})}V(),j.value=!1},Y=async n=>{const l=N({},n);await Q({data:l},l.id),V(),v.info("Product Updates Successfully",{timeout:2e3,hideProgressBar:!0})},Z=p(""),x=p([{breakpoint:"1024px",numVisible:5},{breakpoint:"768px",numVisible:3},{breakpoint:"560px",numVisible:1}]);return{onUpload:()=>{v.info("\u5716\u7247\u4E0A\u50B3Success",{timeout:3e3,hideProgressBar:!0})},uploadNewFile:async()=>{document.getElementById("file-upload").click()},fileChange:async n=>{var r,a,C;const l=n.target.files[0],i=Boolean(n.target.files[0])?n.target.files[0].name.split(".")[0]:"";try{if(!Boolean(i)){v.error("\u8ACB\u5148\u9078\u64C7\u6A94\u6848",{timeout:2e3,hideProgressBar:!0});return}let P=new FormData;P.append("File",l);const K=await he(P);((r=K.data)==null?void 0:r.info)?(w.value.imagesArr[0].url=K.data.imageUrl,v.info("\u4E0A\u50B3\u5716\u7247Success",{timeout:2e3,hideProgressBar:!0})):v.error(`\u4E0A\u50B3\u5716\u7247\u5931\u6557: ${(C=(a=K.data)==null?void 0:a.message)==null?void 0:C.code}`,{timeout:2e3,hideProgressBar:!0})}catch(P){v.error(`${P.response?P.response.data.message:P}`,{timeout:2e3,hideProgressBar:!0})}document.getElementById("file-upload").value=""},images:Z,responsiveOptions:x,headers:s,items:c,itemsForShow:M,toast:v,getData:V,filterItems:_,sort:T,offset:B,rows:U,totalItemsCount:$,orderByArr:m,selectedActivate:D,selectedTitle:S,selectedContent:e,selectedCat:h,activates:b,clearSearch:W,editModal:j,modalItem:w,nowType:I,showEditModal:G,saveEditModal:X,setStatus:Y}}}),u=t=>(ie("data-v-f575a53c"),t=t(),re(),t),ye={class:"main-section px-3"},be={class:"search-block"},we=u(()=>o("h5",{class:"big-title"},"ProductManagement",-1)),_e={class:"p-2 search-section"},ke={class:"p-inputgroup"},Ve=u(()=>o("span",{class:"p-inputgroup-addon"},"IsEnabled",-1)),Ie=["for"],Ce={class:"p-inputgroup"},Ue=u(()=>o("span",{class:"p-inputgroup-addon"},"Title",-1)),De={class:"p-inputgroup"},Se=u(()=>o("span",{class:"p-inputgroup-addon"},"Content ",-1)),Pe={class:"p-inputgroup"},Te=u(()=>o("span",{class:"p-inputgroup-addon"},"Category",-1)),Ae={class:"ecommerce-grid my-dark"},Me=["onClick"],Be={key:0},$e=u(()=>o("i",{class:"pi pi-sort"},null,-1)),Ne=[$e],Ee={key:1},Oe=u(()=>o("i",{class:"pi pi-caret-up"},null,-1)),Fe=[Oe],je={key:2},Ke=u(()=>o("i",{class:"pi pi-caret-down"},null,-1)),Je=[Ke],Re={class:"content",style:{cursor:"pointer","padding-top":"3px"}},ze=["onClick"],Ge=["onClick"],He=["title"],qe=["title"],Le=["title"],Qe=["title"],We=["title"],Xe=["title"],Ye=["title"],Ze=["title"],xe={key:0,class:"mt-2 text-center text-xl font-semibold col-span-full",style:{"font-family":"Microsoft JhengHei, Helvetica"}},et={class:"grid grid-flow-col auto-cols-max justify-center"},tt={class:"mt-4"},ot={class:"modal-main-content"},st={key:0,class:"mb-2 font-black text-xl"},lt={class:"p-inputgroup mt-2 col-span-full"},nt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Title",-1)),at={class:"p-inputgroup mt-2 col-span-full"},it=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"OriginTitle",-1)),rt={class:"p-inputgroup mt-2 col-span-full"},dt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Description",-1)),ut={class:"p-inputgroup mt-2 col-span-full"},pt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Content",-1)),ct={class:"p-inputgroup mt-2"},mt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Category",-1)),gt={class:"p-inputgroup mt-2"},ft=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Unit",-1)),ht={class:"p-inputgroup mt-2"},vt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Origin Price",-1)),yt={class:"p-inputgroup mt-2"},bt=u(()=>o("span",{class:"p-inputgroup-addon red-star"},"Price",-1)),wt={class:"p-inputgroup mt-2"},_t=u(()=>o("span",{class:"p-inputgroup-addon"},"Main Image",-1)),kt={class:"p-inputgroup-addon"},Vt={class:"p-inputgroup mt-2"},It=u(()=>o("span",{class:"p-inputgroup-addon"},"IsEnabled",-1)),Ct={class:"p-inputgroup mt-2"},Ut=u(()=>o("span",{class:"p-inputgroup-addon"},"Upload Main Image",-1)),Dt={class:"col-span-full flex justify-center mt-2"},St=["src","title"],Pt={key:1,style:{width:"500px",height:"310px",border:"1px solid #e1e0e0"}};function Tt(t,s,c,M,B,U){const $=k("RadioButton"),m=k("InputText"),v=k("Checkbox"),V=k("Paginator"),_=k("Textarea"),T=k("Button"),D=k("Galleria"),S=k("Dialog");return f(),g("section",ye,[o("section",be,[we,o("div",_e,[o("div",ke,[Ve,(f(!0),g(E,null,O(t.activates,e=>(f(),g("div",{key:e.text,class:"p-field-radiobutton mr-3 mt-2"},[d($,{id:e.text,name:"item",value:e.value,modelValue:t.selectedActivate,"onUpdate:modelValue":s[0]||(s[0]=h=>t.selectedActivate=h),onChange:t.filterItems},null,8,["id","value","modelValue","onChange"]),o("label",{for:e.text},y(e.text),9,Ie)]))),128))]),o("div",Ce,[Ue,d(m,{type:"text",modelValue:t.selectedTitle,"onUpdate:modelValue":s[1]||(s[1]=e=>t.selectedTitle=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("div",De,[Se,d(m,{type:"text",modelValue:t.selectedContent,"onUpdate:modelValue":s[2]||(s[2]=e=>t.selectedContent=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("div",Pe,[Te,d(m,{type:"text",modelValue:t.selectedCat,"onUpdate:modelValue":s[3]||(s[3]=e=>t.selectedCat=e),onKeydown:J(t.filterItems,["enter"]),class:"custom-search"},null,8,["modelValue","onKeydown"])]),o("button",{class:"text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#0c69e1"},onClick:s[4]||(s[4]=(...e)=>t.filterItems&&t.filterItems(...e))}," Search "),o("button",{class:"text-white font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#6a9f3e"},onClick:s[5]||(s[5]=(...e)=>t.clearSearch&&t.clearSearch(...e))}," Clear "),o("button",{class:"text-gray-700 font-bold uppercase text-base px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none custom-search",type:"button",style:{background:"#f9be4a"},onClick:s[6]||(s[6]=e=>t.showEditModal(1))}," AddProduct ")])]),o("header",Ae,[(f(!0),g(E,null,O(t.headers,(e,h)=>(f(),g("div",{key:`headers${h}`,class:"header",onClick:b=>t.sort(e)},[de(y(e.name)+" ",1),e.key?R((f(),g("span",Be,Ne,512)),[[z,e.sortDesc===null]]):A("",!0),e.key?R((f(),g("span",Ee,Fe,512)),[[z,e.sortDesc===!1]]):A("",!0),e.key?R((f(),g("span",je,Je,512)),[[z,e.sortDesc]]):A("",!0)],8,Me))),128))]),(f(!0),g(E,null,O(t.itemsForShow,(e,h)=>(f(),g("main",{class:"ecommerce-grid",key:`content${h}`,style:ue([{color:"#39312e"},h%2==0?"background-color:#ffffff ;":"background-color:#e7f2f3;"])},[o("div",Re,[o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-2 mb-1 text-sm",type:"button",style:{background:"#0d4a9e"},onClick:b=>t.showEditModal(2,e)}," Edit ",8,ze),o("button",{class:"text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 text-sm",type:"button",style:{background:"#218be1"},onClick:b=>t.showEditModal(3,e)}," Delete ",8,Ge)]),o("div",{class:"content",title:e.title},y(e.title||""),9,He),o("div",{class:"content",title:e.description},y(e.description||""),9,qe),o("div",{class:"content",title:e.content},y(e.content||""),9,Le),o("div",{class:"content",title:e.category},y(e.category||""),9,Qe),o("div",{class:"content",title:e.unit},y(e.unit||""),9,We),o("div",{class:"content",title:e.origin_price},y(e.origin_price||""),9,Xe),o("div",{class:"content",title:e.price},y(e.price||""),9,Ye),o("div",{class:"content",title:e.is_enabled},[d(v,{binary:!0,modelValue:e.is_enabled,"onUpdate:modelValue":b=>e.is_enabled=b,onChange:b=>t.setStatus(e)},null,8,["modelValue","onUpdate:modelValue","onChange"])],8,Ze)],4))),128)),t.items.length?A("",!0):(f(),g("main",xe," No Data ")),o("footer",et,[d(V,{first:t.offset,"onUpdate:first":s[7]||(s[7]=e=>t.offset=e),rows:t.rows,"onUpdate:rows":s[8]||(s[8]=e=>t.rows=e),rowsPerPageOptions:[5,10,50],totalRecords:t.totalItemsCount},null,8,["first","rows","totalRecords"]),o("div",tt,"\u5171"+y(t.totalItemsCount)+"\u7B46",1)]),d(S,{visible:t.editModal,"onUpdate:visible":s[21]||(s[21]=e=>t.editModal=e),style:{width:"85vw"},draggable:!1,modal:!0,class:"custom-modal"},{header:F(()=>[o("h3",null,y(t.nowType==1?"AddProduct":t.nowType==2?"EditProduct":"DeleteProduct"),1)]),footer:F(()=>[d(T,{label:"Confirm",onClick:t.saveEditModal},null,8,["onClick"]),d(T,{label:"Cancel",class:"p-button-success",onClick:s[20]||(s[20]=e=>t.editModal=!1)})]),default:F(()=>[o("section",ot,[t.nowType==3?(f(),g("h2",st,"Delete This Product?")):A("",!0),o("div",lt,[nt,d(m,{type:"text",modelValue:t.modalItem.title,"onUpdate:modelValue":s[9]||(s[9]=e=>t.modalItem.title=e),modelModifiers:{trim:!0},disabled:t.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),o("div",at,[it,d(m,{type:"text",modelValue:t.modalItem.origintitle,"onUpdate:modelValue":s[10]||(s[10]=e=>t.modalItem.origintitle=e),modelModifiers:{trim:!0},disabled:t.nowType==3,class:"custom-search"},null,8,["modelValue","disabled"])]),o("div",rt,[dt,d(_,{modelValue:t.modalItem.description,"onUpdate:modelValue":s[11]||(s[11]=e=>t.modalItem.description=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ut,[pt,d(_,{modelValue:t.modalItem.content,"onUpdate:modelValue":s[12]||(s[12]=e=>t.modalItem.content=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ct,[mt,d(m,{modelValue:t.modalItem.category,"onUpdate:modelValue":s[13]||(s[13]=e=>t.modalItem.category=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",gt,[ft,d(m,{modelValue:t.modalItem.unit,"onUpdate:modelValue":s[14]||(s[14]=e=>t.modalItem.unit=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",ht,[vt,d(m,{type:"Number",modelValue:t.modalItem.origin_price,"onUpdate:modelValue":s[15]||(s[15]=e=>t.modalItem.origin_price=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",yt,[bt,d(m,{type:"Number",modelValue:t.modalItem.price,"onUpdate:modelValue":s[16]||(s[16]=e=>t.modalItem.price=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),o("div",wt,[_t,d(m,{modelValue:t.modalItem.imagesArr[0].url,"onUpdate:modelValue":s[17]||(s[17]=e=>t.modalItem.imagesArr[0].url=e),modelModifiers:{trim:!0},class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","disabled"])]),(f(!0),g(E,null,O(t.modalItem.imagesArr.slice(1),(e,h)=>(f(),g("div",{class:"p-inputgroup mt-2",key:`headers${h}`},[o("span",kt,"Image Url "+y(h+1),1),d(m,{modelValue:e.url,"onUpdate:modelValue":b=>e.url=b,class:"custom-search",disabled:t.nowType==3},null,8,["modelValue","onUpdate:modelValue","disabled"])]))),128)),o("div",Vt,[It,d(v,{style:{margin:"12px 0 0 10px"},binary:!0,modelValue:t.modalItem.is_enabled,"onUpdate:modelValue":s[18]||(s[18]=e=>t.modalItem.is_enabled=e)},null,8,["modelValue"])]),o("div",Ct,[Ut,d(T,{onClick:pe(t.uploadNewFile,["stop"]),title:"\u4E0A\u50B3\u4E3B\u5716\u5716\u7247",label:"Submit",icon:"pi pi-box",iconPos:"left",style:{"margin-left":"10px"}},null,8,["onClick"]),o("input",{id:"file-upload",type:"file",onChange:s[19]||(s[19]=e=>t.fileChange(e)),ref:"inputFile",accept:"image/bmp,image/x-bmp,image/jpeg,image/png,.pdf",hidden:""},null,544)]),o("div",Dt,[d(D,{circular:!0,showItemNavigators:!0,value:t.modalItem.imagesArr,responsiveOptions:t.responsiveOptions,numVisible:6,containerStyle:"max-width: 640px",showThumbnails:!1,showIndicators:!0},{item:F(e=>[e.item.url?(f(),g("img",{key:0,src:e.item.url,style:{height:"400px",display:"block"},title:e.item.index},null,8,St)):(f(),g("div",Pt))]),_:1},8,["value","responsiveOptions"])])])]),_:1},8,["visible"])])}var Ot=ce(ve,[["render",Tt],["__scopeId","data-v-f575a53c"]]);export{Ot as default};
