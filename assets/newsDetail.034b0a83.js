var b=Object.defineProperty;var u=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(e,s,o)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,w=(e,s)=>{for(var o in s||(s={}))y.call(s,o)&&x(e,o,s[o]);if(u)for(var o of u(s))k.call(s,o)&&x(e,o,s[o]);return e};import{d as C,i as $,f as H,e as M,b as D,r as L,o as S,k as m,l as t,t as c,w as p,F as j,q as B,aD as _,s as Y,z,A as I,j as g}from"./vendor.2a61fe6d.js";import{_ as T,w as V}from"./index.ce415212.js";const A=C({props:{},setup(e,{emit:s}){const o=$("emitter"),v=H(),f=M();D();const d=L({}),i=async()=>{var n;try{const a=await V(`${f.params.newsId}`);let r=w({},(n=a.data)==null?void 0:n.article);r.timeforshow=r.category=="Weeks"?_(new Date).subtract(8,"hour").format("YYYY/MM/DD HH:mm:ss"):_(new Date(+r.create_at)).format("YYYY/MM/DD HH:mm:ss"),r.contentreplace=r.content.replace(/\n/g,"<br>"),d.value=w({},r)}catch(a){v.error(`${a.response?a.response.data.message:a}`,{timeout:2e3,hideProgressBar:!0})}},h=n=>{const a=window.location.href;n=="facebook"?window.open(`https://www.facebook.com/sharer/sharer.php?u=${a}`):n=="twitter"?window.open(`https://twitter.com/intent/tweet?url=${a}&text=`):window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${a}`)};return S(async()=>{o.emit("toggleLoader"),await i(),o.emit("toggleLoader")}),{news:d,shareLink:h}}}),l=e=>(z("data-v-898f83b0"),e=e(),I(),e),F={class:"pb-6"},N=Y('<section class="bg-section" data-v-898f83b0><div class="text-white bg-setting bg-setting-local" data-v-898f83b0><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-898f83b0><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-898f83b0><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-898f83b0> News </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-898f83b0> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-898f83b0></div></div></div></section>',1),R={class:"px-4 py-24 mx-auto max-w-7xl",itemid:"#",itemscope:"",itemtype:"http://schema.org/BlogPosting"},E={class:"w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2"},P={class:"pb-6 mb-6 border-b border-gray-200"},W={class:"mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl",itemprop:"headline",title:"Rise of Tailwind - A Utility First CSS Framework"},q={class:"text-base text-gray-500"},G={class:"flex items-center mb-6 space-x-2"},U=l(()=>t("p",{class:"text-gray-600"},"Share this article",-1)),J=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",class:"flex-none w-5 h-5",fill:"currentColor"},[t("path",{d:"M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z"})],-1)),K=[J],O=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",class:"flex-none w-5 h-5",fill:"currentColor"},[t("path",{d:"M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"})],-1)),Q=[O],X=l(()=>t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",class:"flex-none w-5 h-5",fill:"currentColor"},[t("circle",{cx:"4.983",cy:"5.009",r:"2.188"}),t("path",{d:"M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z"})],-1)),Z=[X],ee=["src"],te={class:"w-full mx-auto prose md:w-3/4 lg:w-1/2"},se=["innerHTML"],oe=["onClick"];function ae(e,s,o,v,f,d){return g(),m("div",F,[N,t("article",R,[t("div",E,[t("div",P,[t("h1",W,c(e.news.title||""),1),t("p",q,c(e.news.timeforshow||"")+" \u2014 Written by "+c(e.news.author||""),1)]),t("div",G,[U,t("a",{href:"#",class:"text-gray-600 hover:text-gray-900",onClick:s[0]||(s[0]=p(i=>e.shareLink("facebook"),["prevent"]))},K),t("a",{href:"#",class:"text-gray-600 hover:text-gray-900",onClick:s[1]||(s[1]=p(i=>e.shareLink("twitter"),["prevent"]))},Q),t("a",{href:"#",class:"text-gray-600 hover:text-gray-900",onClick:s[2]||(s[2]=p(i=>e.shareLink("linkin"),["prevent"]))},Z)]),t("img",{src:e.news.image},null,8,ee)]),t("div",te,[t("div",{class:"specifications-content mb-2",innerHTML:e.news.contentreplace},null,8,se),(g(!0),m(j,null,B(e.news.tag,(i,h)=>(g(),m("span",{class:"tage-data theme-color7",key:`articles${h}`},[t("span",{class:"cursor-pointer",onClick:n=>e.editTag(i,2)},"\xA0#"+c(i)+"\xA0\xA0\xA0",9,oe)]))),128))])])])}var ce=T(A,[["render",ae],["__scopeId","data-v-898f83b0"]]);export{ce as default};
