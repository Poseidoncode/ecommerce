import{i as d,b as p,e as m,r as u,s as c,h as f,j as _,k as b,y as l}from"./vendor.c5c7b6b3.js";import{_ as w}from"./index.ade2bb55.js";const k={setup(){const e=d("emitter"),s=p(),t=m(),a=u([{key:"0",label:"Products",icon:"pi pi-fw pi-file",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addProducts")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/products"}]},{key:"1",label:"Orders",icon:"pi pi-fw pi-pencil",items:[{key:"0_0",label:"Delete",icon:"pi pi-fw pi-trash",command:()=>i("deleteOrders")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/orders"}]},{key:"2",label:"Coupons",icon:"pi pi-fw pi-user",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addCoupons")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/coupons"}]},{key:"3",label:"Articles",icon:"pi pi-fw pi-calendar",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addArticles")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/articles"}]},{key:"4",label:"Logout",icon:"pi pi-fw pi-calendar",to:"/",command:()=>n()}]),i=async o=>{o=="addProducts"?t.name!="products"?(s.push({name:"products"}),setTimeout(()=>{e.emit("addProducts")},40)):e.emit("addProducts"):o=="deleteOrders"?e.emit("deleteOrders"):o=="addCoupons"?t.name!="coupons"?(s.push({name:"coupons"}),setTimeout(()=>{e.emit("addCoupons")},40)):e.emit("addCoupons"):o=="addArticles"&&(t.name!="articles"?(s.push({name:"articles"}),setTimeout(()=>{e.emit("addArticles")},40)):e.emit("addArticles"))},n=()=>{sessionStorage.clear(),s.push({name:"home"})};return{items:a,callFunction:i}}},h={class:"main-content"},y={class:"left-bar"};function v(e,s,t,a,i,n){const o=c("PanelMenu"),r=c("router-view");return f(),_("div",h,[b("div",y,[l(o,{model:a.items},null,8,["model"])]),l(r,{class:"right-content"})])}var C=w(k,[["render",v],["__scopeId","data-v-e5289766"]]);export{C as default};