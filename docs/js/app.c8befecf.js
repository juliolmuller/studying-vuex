(function(e){function t(t){for(var n,c,s=t[0],r=t[1],d=t[2],u=0,b=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);l&&l(t);while(b.length)b.shift()();return a.push.apply(a,d||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,s=1;s<o.length;s++){var r=o[s];0!==i[r]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},i={app:0},a=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var l=r;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},1527:function(e,t,o){},"37b1":function(e,t,o){"use strict";o("41d8")},"38b4":function(e,t,o){"use strict";o("f0f3")},"41d8":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),i=o("5502"),a=o("bc3a"),c=o.n(a);const s="https://jsonplaceholder.typicode.com/todos",r=c.a.create({baseURL:s});var d={namespaced:!0,state:{limit:100,todos:[]},getters:{limit(e){return e.limit},todos(e){return e.todos.filter((t,o)=>o<e.limit)}},mutations:{setLimit(e,t){e.limit=Number(t)},setTodos(e,t){e.todos=t},addTodo(e,t){e.todos=[t,...e.todos]},removeTodo(e,t){e.todos=e.todos.filter(e=>e.id!==t)},updateTodo(e,t){e.todos=e.todos.map(e=>e.id===t.id?t:e)}},actions:{async fetchTodos({commit:e}){const{data:t}=await r.get("/");await new Promise(o=>{setTimeout(o,1e3),e("setTodos",t)})},async addTodo({commit:e},t){const{data:o}=await r.post("/",{title:t,completed:!1});e("addTodo",o)},deleteTodo({commit:e},t){r.delete("/"+t),e("removeTodo",t)},updateTodo({commit:e},t){r.put("/"+t.id,t),e("updateTodo",t)}}};const l=Object(i["a"])({modules:{todos:d}});var u=l;const b={class:"container"},p=Object(n["h"])("h1",{class:"title"}," Lista de Tarefas VUEX ",-1);function m(e,t,o,i,a,c){const s=Object(n["n"])("TodoForm"),r=Object(n["n"])("TodoFilter"),d=Object(n["n"])("Todos"),l=Object(n["n"])("Loading");return Object(n["j"])(),Object(n["e"])("div",b,[p,Object(n["h"])(s),Object(n["h"])(r),(Object(n["j"])(),Object(n["e"])(n["b"],null,{default:Object(n["s"])(()=>[Object(n["h"])(d)]),fallback:Object(n["s"])(()=>[Object(n["h"])(l)]),_:1}))])}const f={class:"todo-form"},j=Object(n["h"])("h3",null,"Adicionar Tarefa",-1),O={class:"add"},h=Object(n["h"])("i",{class:"fa fa-save"},null,-1),v=Object(n["g"])(" Salvar ");function g(e,t,o,i,a,c){return Object(n["j"])(),Object(n["e"])("div",f,[j,Object(n["h"])("div",O,[Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["u"])((...e)=>i.handleSubmit&&i.handleSubmit(...e),["prevent"]))},[Object(n["t"])(Object(n["h"])("input",{type:"text",placeholder:"Tarefa a ser adicionada...","onUpdate:modelValue":t[1]||(t[1]=e=>i.title=e)},null,512),[[n["q"],i.title]]),Object(n["h"])("button",{type:"submit",disabled:i.isLoading},[h,v],8,["disabled"])],32)])])}var y={name:"TodoForm",setup(){const e=Object(n["l"])(""),t=Object(n["l"])(!1),o=Object(i["b"])();async function a(){t.value=!0,await o.dispatch("todos/addTodo",e.value),t.value=!1,e.value=""}return{title:e,isLoading:t,handleSubmit:a}}};o("5bd6");y.render=g;var T=y;const w={class:"todos-filter"},k=Object(n["h"])("label",{for:"todo-filter-input"},[Object(n["h"])("i",{class:"fa fa-filter"}),Object(n["g"])(" Quantidade de itens: ")],-1),x=Object(n["f"])('<option value="200">200</option><option value="100">100</option><option value="50">50</option><option value="20">20</option><option value="10">10</option>',5);function S(e,t,o,i,a,c){return Object(n["j"])(),Object(n["e"])("div",w,[k,Object(n["t"])(Object(n["h"])("select",{id:"todo-filter-input","onUpdate:modelValue":t[1]||(t[1]=e=>i.limitCount=e)},[x],512),[[n["p"],i.limitCount,void 0,{number:!0}]])])}var C={name:"TodoFilter",setup(){const e=Object(i["b"])(),t=Object(n["c"])({get:()=>e.getters["todos/limit"],set:t=>e.commit("todos/setLimit",t)});return{limitCount:t}}};o("38b4");C.render=S;var M=C;const L={class:"loading"},P=Object(n["h"])("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"200px",height:"200px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},[Object(n["h"])("rect",{x:"17.5",y:"30",width:"15",height:"40",fill:"#41b883"},[Object(n["h"])("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"18;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"}),Object(n["h"])("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"64;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.2s"})]),Object(n["h"])("rect",{x:"42.5",y:"30",width:"15",height:"40",fill:"#41b883"},[Object(n["h"])("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"}),Object(n["h"])("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1",begin:"-0.1s"})]),Object(n["h"])("rect",{x:"67.5",y:"30",width:"15",height:"40",fill:"#41b883"},[Object(n["h"])("animate",{attributeName:"y",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"20.999999999999996;30;30",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"}),Object(n["h"])("animate",{attributeName:"height",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keyTimes:"0;0.5;1",values:"58.00000000000001;40;40",keySplines:"0 0.5 0.5 1;0 0.5 0.5 1"})])],-1);function N(e,t,o,i,a,c){return Object(n["j"])(),Object(n["e"])("div",L,[P])}var _={name:"Loading"};o("9192");_.render=N;var F=_;const q={class:"todos-cards"},U=Object(n["h"])("legend",null,[Object(n["h"])("span",null," Dê duplo-clique para marcar a tarefa como completa/incompleta "),Object(n["h"])("span",null,[Object(n["h"])("span",{class:"incomplete-box"}),Object(n["g"])(" = Incompleta ")]),Object(n["h"])("span",null,[Object(n["h"])("span",{class:"complete-box"}),Object(n["g"])(" = Completa ")])],-1),A={class:"todos"};function D(e,t,o,i,a,c){return Object(n["j"])(),Object(n["e"])("div",q,[U,Object(n["h"])("div",A,[(Object(n["j"])(!0),Object(n["e"])(n["a"],null,Object(n["m"])(i.todos,e=>(Object(n["j"])(),Object(n["e"])("div",{key:e.id,class:["todo",{"is-complete":e.completed}],onDblclick:t=>i.toggleComplete(e)},[Object(n["g"])(Object(n["o"])(e.title)+" ",1),Object(n["h"])("i",{class:"fa fa-trash-o",onClick:t=>i.deleteTodo(e)},null,8,["onClick"])],42,["onDblclick"]))),128))])])}var V={name:"Todos",async setup(){const e=Object(i["b"])(),t=Object(n["c"])(()=>e.getters["todos/todos"]);function o(t){confirm("Tem certeza que quer excluir esta tarefa?")&&e.dispatch("todos/deleteTodo",t.id)}function a(t){e.dispatch("todos/updateTodo",{...t,completed:!t.completed})}return await e.dispatch("todos/fetchTodos"),{todos:t,deleteTodo:o,toggleComplete:a}}};o("37b1");V.render=D;var J=V,R={name:"App",components:{TodoForm:T,TodoFilter:M,Loading:F,Todos:J}};o("7295");R.render=m;var z=R;Object(n["d"])(z).use(u).mount("#app")},"5bd6":function(e,t,o){"use strict";o("fc9b")},7295:function(e,t,o){"use strict";o("d13b")},9192:function(e,t,o){"use strict";o("1527")},d13b:function(e,t,o){},f0f3:function(e,t,o){},fc9b:function(e,t,o){}});
//# sourceMappingURL=app.c8befecf.js.map