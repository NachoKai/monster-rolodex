(this["webpackJsonpmonster-app"]=this["webpackJsonpmonster-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n.n(c),a=n(4),o=n.n(a),i=n(3),j=function(e){var t=e.onSearchChange,n=e.placeholder;return Object(s.jsx)("input",{className:"search-box",type:"search",placeholder:n,onChange:t})},h=(n(10),n(11),function(e){var t=e.monster;return Object(s.jsxs)("div",{className:"card-container",children:[Object(s.jsxs)("h2",{className:"card-name",children:[" ",t.name," "]}),Object(s.jsx)("img",{className:"monster-img",alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),Object(s.jsxs)("p",{children:[" ",t.username," "]}),Object(s.jsxs)("p",{children:[" ",t.email," "]}),Object(s.jsxs)("p",{children:[" ",t.website," "]}),Object(s.jsxs)("span",{children:[" ",t.id," "]})]})}),l=function(e){var t=e.monsters;return Object(s.jsx)("div",{className:"card-list",children:t.map((function(e){return Object(s.jsx)(h,{monster:e},e.id)}))})},u=(n(12),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),o=Object(i.a)(a,2),h=o[0],u=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(h.toLowerCase())}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{className:"app-title",children:"Monsters Rolodex"}),Object(s.jsx)(j,{onSearchChange:function(e){u(e.target.value)},placeholder:"Search monsters..."}),Object(s.jsx)(l,{monsters:d})]})});o.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.221b1050.chunk.js.map