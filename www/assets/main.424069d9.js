import{g as u}from"./axios.2d3c1b90.js";import{d as p,r as i,o as h,a as o,c as s,b as e,e as m,u as v,H as g,F as y,f,t as l,g as b,h as _,i as k}from"./vendor.0971ceaf.js";const x={class:"banner"},V=b(" Welcome "),w=e("h1",null,"Show some server environment variables!",-1),B={class:"panel"},M={key:0},N=e("tr",null,[e("th",null,"Key"),e("th",null,"Value")],-1),A={key:1,class:"error"},C=p({setup(E){const n=i(""),a=i(null);async function r(){try{const t=await _.get("/api/echo");a.value=t.data}catch(t){a.value=null,n.value=u(t)}setTimeout(()=>{r()},1e3)}async function d(){try{const t=await _.get("/api/auth/logout");location.reload()}catch(t){n.value=u(t)}}return h(()=>{r()}),(t,F)=>(o(),s("main",null,[e("div",x,[m(v(g),{style:{margin:"0 20px"}}),V]),w,e("div",B,[a.value?(o(),s("table",M,[N,(o(!0),s(y,null,f(Object.keys(a.value),c=>(o(),s("tr",null,[e("td",null,l(c),1),e("td",null,l(a.value[c]),1)]))),256))])):(o(),s("div",A,l(n.value),1))]),e("button",{name:"logout",onClick:d},"Logout")]))}});k(C).mount("#app");
//# sourceMappingURL=main.424069d9.js.map
