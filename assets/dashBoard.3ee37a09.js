import{a0 as r,u as p,a as u,r as m,g as n,b as f,c as _,e as w,j as c}from"./vendor.136a34f0.js";import{_ as b}from"./index.4e565176.js";const k={setup(){const o=r("emitter"),s=p(),t=u(),a=m([{key:"0",label:"Products",icon:"pi pi-fw pi-file",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>e("addProducts")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/products"}]},{key:"1",label:"Orders",icon:"pi pi-fw pi-pencil",items:[{key:"0_0",label:"Delete",icon:"pi pi-fw pi-trash",command:()=>e("deleteOrders")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/orders"}]},{key:"2",label:"Coupons",icon:"pi pi-fw pi-user",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>e("addCoupons")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/coupons"}]},{key:"3",label:"Articles",icon:"pi pi-fw pi-calendar",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>e("addArticles")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/articles"}]},{key:"4",label:"Logout",icon:"pi pi-fw pi-calendar",to:"/",command:()=>e("addArticles")}]),e=async i=>{i=="addProducts"?t.name!="products"?(s.push({name:"products"}),setTimeout(()=>{o.emit("addProducts")},40)):o.emit("addProducts"):i=="deleteOrders"?o.emit("deleteOrders"):i=="addCoupons"&&(t.name!="coupons"?(s.push({name:"coupons"}),setTimeout(()=>{o.emit("addCoupons")},40)):o.emit("addCoupons"))};return{items:a,callFunction:e}}},h={class:"main-content"},y={class:"left-bar"};function v(o,s,t,a,e,i){const d=n("PanelMenu"),l=n("router-view");return f(),_("div",h,[w("div",y,[c(d,{model:a.items},null,8,["model"])]),c(l,{class:"right-content"})])}var C=b(k,[["render",v],["__scopeId","data-v-afdeaf8e"]]);export{C as default};
