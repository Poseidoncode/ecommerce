var x=Object.defineProperty;var m=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var p=(e,s,t)=>s in e?x(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,i=(e,s)=>{for(var t in s||(s={}))b.call(s,t)&&p(e,t,s[t]);if(m)for(var t of m(s))u.call(s,t)&&p(e,t,s[t]);return e};import{d as _,f,e as y,b as C,r as H,o as M,k as d,l as a,t as n,F as j,q as k,aD as B,s as w,j as v}from"./vendor.b81db0ac.js";import{_ as D,w as $}from"./index.2e7d3b79.js";const S=_({props:{},setup(e,{emit:s}){const t=f(),h=y();C();const l=H({}),g=async()=>{var r;try{const o=await $(`${h.params.newsId}`);console.log(o);let c=i({},(r=o.data)==null?void 0:r.article);console.log("obj",c),c.timeforshow=B(new Date(+c.create_at)).format("YYYY/MM/DD HH:mm:ss"),c.contentreplace=c.content.replace(/\n/g,"<br>"),l.value=i({},c),console.log("news.value",l.value)}catch(o){t.error(`${o.response?o.response.data.message:o}`,{timeout:2e3,hideProgressBar:!0})}};return M(async()=>{await g()}),{news:l}}}),T={class:"pb-6"},V=w('<section class="bg-section" data-v-3581b13e><div class="text-white bg-setting bg-setting-local" data-v-3581b13e><div class="container mx-auto flex flex-col md:flex-row items-center" data-v-3581b13e><div class="flex flex-col w-full lg:w-1/3 justify-center p-8 items-center md:items-start" data-v-3581b13e><h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose bg-section-word1" data-v-3581b13e> News </h1><h2 class="text-3xl md:text-3xl p-2 leading-relaxed md:leading-snug mb-2 bg-section-word2" data-v-3581b13e> Get your Luxurious Elegence </h2></div><div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3 justify-center" data-v-3581b13e></div></div></div></section>',1),z={class:"px-4 py-24 mx-auto max-w-7xl",itemid:"#",itemscope:"",itemtype:"http://schema.org/BlogPosting"},F={class:"w-full mx-auto mb-10 text-left md:w-3/4 lg:w-1/2"},L={class:"pb-6 mb-6 border-b border-gray-200"},Y={class:"mb-3 text-3xl font-bold text-gray-900 md:leading-tight md:text-4xl",itemprop:"headline",title:"Rise of Tailwind - A Utility First CSS Framework"},N={class:"text-base text-gray-500"},R=w('<div class="flex items-center mb-6 space-x-2" data-v-3581b13e><p class="text-gray-600" data-v-3581b13e>Share this article</p><a href="#" class="text-gray-600 hover:text-gray-900" data-v-3581b13e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor" data-v-3581b13e><path d="M13.397,20.997v-8.196h2.765l0.411-3.209h-3.176V7.548c0-0.926,0.258-1.56,1.587-1.56h1.684V3.127	C15.849,3.039,15.025,2.997,14.201,3c-2.444,0-4.122,1.492-4.122,4.231v2.355H7.332v3.209h2.753v8.202H13.397z" data-v-3581b13e></path></svg></a><a href="#" class="text-gray-600 hover:text-gray-900" data-v-3581b13e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor" data-v-3581b13e><path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z" data-v-3581b13e></path></svg></a><a href="#" class="text-gray-600 hover:text-gray-900" data-v-3581b13e><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="flex-none w-5 h-5" fill="currentColor" data-v-3581b13e><circle cx="4.983" cy="5.009" r="2.188" data-v-3581b13e></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zM3.095 8.855H6.87V20.994H3.095z" data-v-3581b13e></path></svg></a></div>',1),A=["src"],E={class:"w-full mx-auto prose md:w-3/4 lg:w-1/2"},I=["innerHTML"],P=["onClick"];function q(e,s,t,h,l,g){return v(),d("div",T,[V,a("article",z,[a("div",F,[a("div",L,[a("h1",Y,n(e.news.title||""),1),a("p",N,n(e.news.timeforshow||"")+" \u2014 Written by "+n(e.news.author||""),1)]),R,a("img",{src:e.news.image},null,8,A)]),a("div",E,[a("div",{class:"specifications-content",innerHTML:e.news.contentreplace},null,8,I),(v(!0),d(j,null,k(e.news.tag,(r,o)=>(v(),d("span",{class:"tage-data",key:`articles${o}`},[a("span",{class:"cursor-pointer",onClick:c=>e.editTag(r,2)},"\xA0#"+n(r)+"\xA0\xA0\xA0",9,P)]))),128))])])])}var J=D(S,[["render",q],["__scopeId","data-v-3581b13e"]]);export{J as default};
