import{i as d,b as p,e as m,r as u,q as l,h as f,j as _,k as w,x as c}from"./vendor.b4416f57.js";import{_ as b}from"./index.642d3148.js";const k={setup(){const e=d("emitter"),s=p(),t=m(),a=u([{key:"0",label:"Products",icon:"pi pi-fw pi-file",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addProducts")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/products"}]},{key:"1",label:"Orders",icon:"pi pi-fw pi-pencil",items:[{key:"0_0",label:"Delete",icon:"pi pi-fw pi-trash",command:()=>i("deleteOrders")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/orders"}]},{key:"2",label:"Coupons",icon:"pi pi-fw pi-user",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addCoupons")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/coupons"}]},{key:"3",label:"Articles",icon:"pi pi-fw pi-calendar",items:[{key:"0_0",label:"New",icon:"pi pi-fw pi-plus",command:()=>i("addArticles")},{key:"0_1",label:"View",icon:"pi pi-fw pi-external-link",to:"/dashboard/articles"}]},{key:"4",label:"Logout",icon:"pi pi-fw pi-calendar",to:"/",command:()=>n()}]),i=async o=>{o=="addProducts"?t.name!="products"?(s.push({name:"products"}),setTimeout(()=>{e.emit("addProducts")},40)):e.emit("addProducts"):o=="deleteOrders"?e.emit("deleteOrders"):o=="addCoupons"?t.name!="coupons"?(s.push({name:"coupons"}),setTimeout(()=>{e.emit("addCoupons")},40)):e.emit("addCoupons"):o=="addArticles"&&(t.name!="articles"?(s.push({name:"articles"}),setTimeout(()=>{e.emit("addArticles")},40)):e.emit("addArticles"))},n=()=>{sessionStorage.clear(),s.push({name:"home"})};return{items:a,callFunction:i}}},h={class:"main-content"},y={class:"left-bar"};function x(e,s,t,a,i,n){const o=l("PanelMenu"),r=l("router-view");return f(),_("div",h,[w("div",y,[c(o,{model:a.items},null,8,["model"])]),c(r,{class:"right-content"})])}var C=b(k,[["render",x],["__scopeId","data-v-e5289766"]]);export{C as default};
