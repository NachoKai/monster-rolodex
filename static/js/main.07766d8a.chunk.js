(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),s=n.n(c),o=n(1),l=function(e){return r.a.createElement("input",{className:"search-box",type:"search",placeholder:"Search monsters...",onChange:e.onSearchChange})},m=(n(9),n(10),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("h2",{className:"card-name"}," ",e.monster.name," "),r.a.createElement("img",{className:"monster-img",alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),r.a.createElement("p",null," ",e.monster.username," "),r.a.createElement("p",null," ",e.monster.email," "),r.a.createElement("p",null," ",e.monster.website," "),r.a.createElement("span",null," ",e.monster.id," "))}),u=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(m,{key:e.id,monster:e})})))},i=(n(11),function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),i=m[0],p=m[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var h=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"app-title"},"Monsters Rolodex"),r.a.createElement(l,{onSearchChange:function(e){p(e.target.value)}}),r.a.createElement(u,{monsters:h}))});s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i,null)),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.07766d8a.chunk.js.map