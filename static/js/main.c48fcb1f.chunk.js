(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,,,,,,function(e,t,a){},,,function(e,t,a){e.exports=a.p+"static/media/check.5f340c4d.svg"},function(e,t,a){e.exports=a.p+"static/media/close.d1ac71d7.svg"},function(e,t,a){e.exports=a.p+"static/media/restore.11e8554a.svg"},function(e,t,a){e.exports=a.p+"static/media/add.f1008644.svg"},function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(8),o=a.n(l),r=(a(19),a(4)),s=a(1),i=a(9),m=a(5),u=a(10),d=a.n(u),p=a(11),v=a.n(p),E=a(12),g=a.n(E);function b(e){return c.a.createElement("div",{className:"task"},c.a.createElement("div",{onClick:function(){return e.delete(e.date)},className:"close"},c.a.createElement("img",{src:v.a,alt:""})),c.a.createElement("div",{style:e.isComplete?{opacity:"0.2"}:{opacity:"1"},className:"task-content"},c.a.createElement("div",{className:"task-text"},c.a.createElement("h4",null," ",e.task," ")),c.a.createElement("hr",{className:"divider"}),c.a.createElement("div",{className:"task-info"},c.a.createElement("span",null," importance: ",e.importance," ")," ",c.a.createElement("span",null,"by: ",e.by," "),c.a.createElement("span",null," added: ",e.date," "))),c.a.createElement("div",{onClick:function(){return e.complete(e.index)},className:"task-button"},c.a.createElement("img",{src:e.isComplete?g.a:d.a,alt:""})))}function f(e){return c.a.createElement("div",{className:"counter"},c.a.createElement("h3",null,"Total Tasks: ",e.count," "))}a(7);var h=a(13),k=a.n(h);function y(e){return console.log(e.by),c.a.createElement("div",{className:"control"},c.a.createElement("div",{className:"control-data"},c.a.createElement("div",{className:"user-info"},c.a.createElement("div",{className:"user-name"},c.a.createElement("input",{name:"by",value:e.by,onChange:e.changer,type:"text",placeholder:"Your name..."})),c.a.createElement("div",{className:"user-select"},c.a.createElement("select",{name:"importance",onChange:e.changer,id:"slc"},c.a.createElement("option",{value:"",disabled:!0,selected:!0}," ","Select importance"," "),c.a.createElement("option",{value:"high"}," high "),c.a.createElement("option",{value:"medium"}," medium "),c.a.createElement("option",{value:"low"}," low")))),c.a.createElement("div",{className:"user-task"},c.a.createElement("input",{value:e.task,name:"task",onChange:e.changer,type:"text-area",placeholder:"Type your task..."}))),c.a.createElement("div",{onClick:e.submit,className:"control-btn"},c.a.createElement("div",null,c.a.createElement("img",{src:k.a,alt:""})," ADD"," ")))}function N(){var e=new Date,t=e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),a=Object(n.useState)([]),l=Object(m.a)(a,2),o=l[0],u=l[1],d=Object(n.useState)({by:"",task:"",date:""}),p=Object(m.a)(d,2),v=p[0],E=p[1],g=function(e){var t=o.filter((function(t){return t.date!==e}));console.log(t),u(t)},h=function(e){var t=Object(r.a)(o);t[e].completed?t[e].completed=!1:t[e].completed=!0,console.log(t),u(t)};return c.a.createElement("div",{className:"warp"},c.a.createElement(f,{count:o.length}),o.map((function(e,t){return c.a.createElement(b,{index:t,isComplete:e.completed,complete:h,delete:g,key:e.date,date:e.date,by:e.by,task:e.task,importance:e.importance})})),c.a.createElement(y,{task:v.task,by:v.by,submit:function(){v.task?u([].concat(Object(r.a)(o),[v])):alert("Please add task"),E({by:"",task:""})},changer:function(e){var a;E(Object(i.a)({},v,(a={},Object(s.a)(a,e.target.name,e.target.value),Object(s.a)(a,"date",t),Object(s.a)(a,"completed",!1),a)))}}))}var w=function(){return c.a.createElement("div",null,c.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.c48fcb1f.chunk.js.map