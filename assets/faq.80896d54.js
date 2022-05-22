import{r as d,c as o,a as e,n as r,Q as c,a1 as p,a0 as a,o as s}from"./vendor.b4fe1ce8.js";import{_ as h}from"./index.7a1e8a5f.js";const m={props:{},setup(i,{emit:n}){return{open:d(!1)}}},x={class:"px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2"},u=e("h1",{class:"mb-6 text-xl font-bold md:text-3xl"}," Frequently Asked Questions ",-1),f={class:"text-sm border-t border-b border-gray-200 divide-y divide-gray-200"},w={"x-data":"collapse()"},y=a(" Why doesn't my CSS, which is valid, render correctly? "),_=e("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),b=e("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),v=[_,b],g={"x-spread":"collapse","x-cloak":"",class:"pb-5 pr-0 text-gray-700 md:pr-40",id:"faq1"},k={"x-data":"collapse()"},C={"x-spread":"trigger",class:"flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none",role:"button","aria-controls":"faq2","aria-expanded":"false"},T=a(" What is the difference between id and class? "),j=e("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),q=e("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),B=[j,q],S=e("div",{"x-spread":"collapse","x-cloak":"",class:"pb-5 pr-0 text-gray-700 md:pr-40",id:"faq2"}," HTML elements can have an id and/or class attribute. The id attribute assigns a name to the element it is applied to, and for valid markup, there can be only one element with that name. The class attribute assigns a class name to the element, and that name can be used on many elements within the page. CSS allows you to apply styles to particular id and/or class names. ",-1),W={"x-data":"collapse()"},D={"x-spread":"trigger",class:"flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none",role:"button","aria-controls":"faq3","aria-expanded":"false"},E=a(" What do the -moz-*, -ms-*, -webkit-*, -o-* and -khtml-* properties do? "),L=e("line",{x1:"12",y1:"5",x2:"12",y2:"19"},null,-1),z=e("line",{x1:"5",y1:"12",x2:"19",y2:"12"},null,-1),F=[L,z],H=e("div",{"x-spread":"collapse","x-cloak":"",class:"pb-5 pr-0 text-gray-700 md:pr-40",id:"faq3"}," The use of such properties on production websites is not recommended \u2014 they have already created a huge web compatibility mess. For example, many developers only using the -webkit- prefixed version of a property when the non-prefixed version is supported across all browsers meant that a feature relying on that property would break in non-webkit-based browsers, completely needlessly. This problem got so bad that other browsers started to implement -webkit- prefixed aliases to improve web compatibility, as specified in the Compatibility Living Standard. ",-1);function M(i,n,l,t,N,O){return s(),o("section",x,[u,e("div",f,[e("div",w,[e("button",{onClick:n[0]||(n[0]=P=>t.open=!t.open),"x-spread":"trigger",class:"flex items-center justify-between w-full py-4 pr-1 font-semibold text-left text-gray-800 outline-none hover:text-primary focus:text-primary focus:outline-none",role:"button","aria-controls":"faq1","aria-expanded":"false"},[y,(s(),o("svg",{class:r([{"rotate-45":t.open},"flex-none w-4 h-4 ml-4 transition transform"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},v,2))]),c(e("div",g," Browsers use the DOCTYPE declaration to choose whether to show the document using a mode that is more compatible with Web standards or with old browser bugs. Using a correct and modern DOCTYPE declaration at the start of your HTML will improve browser standards compliance. ",512),[[p,t.open]])]),e("div",k,[e("button",C,[T,(s(),o("svg",{class:r([{"rotate-45":t.open},"flex-none w-4 h-4 ml-4 transition transform"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},B,2))]),S]),e("div",W,[e("button",D,[E,(s(),o("svg",{class:r([{"rotate-45":t.open},"flex-none w-4 h-4 ml-4 transition transform"]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true"},F,2))]),H])])])}var Y=h(m,[["render",M]]);export{Y as default};
