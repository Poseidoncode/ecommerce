import{r as p,k as l,l as e,p as i,aB as _,F as y,q as u,z as w,A as f,j as r,t as m,m as h}from"./vendor.fab3f04c.js";import{_ as R}from"./index.21da7dad.js";const C={components:{},setup(){const n=p([]),s=p("");return{allDatas:n,addNewComment:o=>{!o||(n.value.unshift({commentData:o,replys:[],nowReply:""}),s.value="")},addNewReply:o=>{!o.nowReply||(o.replys.unshift(o.nowReply),o.nowReply="")},nowComment:s}}},k=n=>(w("data-v-51aae2b2"),n=n(),f(),n),x={class:"main-container"},N={class:"main-input"},D=k(()=>e("label",{class:"main-lebel",for:"story"},"Leave a Message Demo App:",-1)),g={class:"button-area"},V={class:"main-reply-label"},B=["for"],I=["id","name","onUpdate:modelValue"],L={class:"button-area"},S=["onClick"],$={key:0,class:"main-reply-label main-reply-title"};function j(n,s,v,t,o,U){return r(),l("main",x,[e("section",N,[D,i(e("textarea",{id:"story",name:"story",rows:"5",placeholder:" Leave a comment...","onUpdate:modelValue":s[0]||(s[0]=a=>t.nowComment=a)},`
      `,512),[[_,t.nowComment]]),e("div",g,[e("button",{type:"button",onClick:s[1]||(s[1]=a=>t.addNewComment(t.nowComment))},"submit")])]),(r(!0),l(y,null,u(t.allDatas,(a,d)=>(r(),l("section",{class:"main-reply",key:`itemData${d}`},[e("div",V,"Comment "+m(+t.allDatas.length-d),1),e("label",{class:"main-reply-commentData",for:`itemDataReply${d}`},m(a.commentData||""),9,B),i(e("textarea",{id:`itemDataReply${d}`,name:`itemDataReply${d}`,rows:"5",placeholder:" Leave a reply...","onUpdate:modelValue":c=>a.nowReply=c},`
      `,8,I),[[_,a.nowReply]]),e("div",L,[e("button",{type:"button",class:"button-area",onClick:c=>t.addNewReply(a)}," submit ",8,S)]),a.replys.length?(r(),l("div",$," Reply ")):h("",!0),(r(!0),l(y,null,u(a.replys,(c,b)=>(r(),l("div",{class:"main-reply-data",key:`itemReplys${b}`},m(c),1))),128))]))),128))])}var M=R(C,[["render",j],["__scopeId","data-v-51aae2b2"]]);export{M as default};
