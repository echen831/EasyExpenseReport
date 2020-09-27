(this.webpackJsonpaccount_sum=this.webpackJsonpaccount_sum||[]).push([[0],{15:function(e,t,a){e.exports=a(26)},25:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),u=a.n(r),o=a(4),l=a(9),i=a(2),m=function(e){var t=Object(n.useState)(""),a=Object(i.a)(t,2),r=a[0],u=a[1];return c.a.createElement("div",{className:"add-form-container"},c.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e.addAccount(r),u("")}},c.a.createElement("input",{type:"text",placeholder:"Enter report title",value:r,onChange:function(e){u(e.currentTarget.value)}}),c.a.createElement("button",{type:"submit"},"Add Report")))},d=function(e){return c.a.createElement("div",{className:"header-container"},c.a.createElement("h1",null,"Easy Expense Report"),c.a.createElement(m,{addAccount:e.addAccount}),c.a.createElement("div",{className:"report-control"},c.a.createElement("p",{onClick:function(){return e.toggle("all")}},"All"),c.a.createElement("p",{onClick:function(){return e.toggle("day")}},"Day"),c.a.createElement("p",{onClick:function(){return e.toggle("week")}},"Week"),c.a.createElement("p",{onClick:function(){return e.toggle("month")}},"Month")))},s=a(3),p=function(e){var t=Object(n.useState)(e.date),a=Object(i.a)(t,2),r=a[0],u=a[1],o=Object(n.useState)(e.desc),l=Object(i.a)(o,2),m=l[0],d=l[1],p=Object(n.useState)(e.cat),f=Object(i.a)(p,2),E=f[0],v=f[1],b=Object(n.useState)(e.ammt),h=Object(i.a)(b,2),y=h[0],j=h[1],O=Object(n.useRef)(),k=Object(n.useRef)(),g=Object(n.useRef)(),w=Object(n.useRef)();return c.a.createElement("div",{className:"item-container"},c.a.createElement("form",{action:"",onSubmit:function(t){t.preventDefault(),e.update(e.idx,r,m,E,y),O.current.blur(),k.current.blur(),g.current.blur(),w.current.blur()}},c.a.createElement("input",{type:"date",ref:O,value:r,onChange:function(e){u(e.currentTarget.value)}}),c.a.createElement("input",{type:"text",ref:k,value:m,onChange:function(e){d(e.currentTarget.value)}}),c.a.createElement("input",{type:"text",ref:g,value:E,onChange:function(e){v(e.currentTarget.value)}}),c.a.createElement("input",{type:"text",ref:w,value:"0"!==y?y:"",onChange:function(e){j(e.currentTarget.value)}}),c.a.createElement("button",{type:"submit"},c.a.createElement(s.a,{icon:"user-edit"}))),c.a.createElement("p",{onClick:function(){return e.remove(e.idx)}},c.a.createElement(s.a,{icon:"trash"})))},f=a(7),E=function(e){var t=Object(n.useState)({date:"",desc:"",cat:"",ammt:"0"}),a=Object(i.a)(t,2),r=a[0],u=a[1],l=function(e,t){var a=Object(o.a)(Object(o.a)({},r),{},Object(f.a)({},t,e.currentTarget.value));u(a)};return c.a.createElement("div",{className:"item-container"},c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.add(r),u({date:"",desc:"",cat:"",ammt:"0"})}},c.a.createElement("input",{type:"date",required:!0,value:r.date,onChange:function(e){return l(e,"date")}}),c.a.createElement("input",{type:"text",required:!0,value:r.desc,onChange:function(e){return l(e,"desc")}}),c.a.createElement("input",{type:"text",required:!0,value:r.cat,onChange:function(e){return l(e,"cat")}}),c.a.createElement("input",{type:"text",required:!0,value:"0"!==r.ammt?r.ammt:"",onChange:function(e){return l(e,"ammt")}}),c.a.createElement("button",{type:"submit"},c.a.createElement(s.a,{icon:"user-plus"}))))},v=function(e){var t=Object(n.useState)(e.data),a=Object(i.a)(t,2),r=a[0],u=a[1],o=function(t,a,n,c,o){var l=r.map((function(e,r){return t===r?{date:a,desc:n,cat:c,ammt:o}:e}));u(l),e.updateAccount(e.idx,l)},m=function(e){var t=r.slice(0,e).concat(r.slice(e+1));u(t)};return c.a.createElement("div",{className:e.show?"report-container":"hide"},c.a.createElement("ul",null,r.sort((function(e,t){return e.date>t.date})).map((function(e,t){return c.a.createElement(p,{date:e.date,desc:e.desc,cat:e.cat,ammt:e.ammt,update:o,remove:m,idx:t,key:t})})),c.a.createElement(E,{add:function(t){if(""!==t.desc.trim()&&"0"!==t.ammt){var a=[].concat(Object(l.a)(r),[t]);u(a),e.updateAccount(e.idx,a)}}})),c.a.createElement("p",null,"Total Expenses: $".concat(function(e){return e.reduce((function(e,t){return e+parseFloat(t.ammt)}),0).toFixed(2)}(r))))},b=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],u=a[1];return c.a.createElement("div",{className:"account-container"},c.a.createElement("div",{className:"account-header"},c.a.createElement("h3",null,e.data.title),c.a.createElement("p",{onClick:function(){return u(!r)}},r?c.a.createElement(s.a,{icon:"chevron-up"}):c.a.createElement(s.a,{icon:"chevron-down"})),c.a.createElement("p",{onClick:function(){return e.removeAccount(e.idx)}},c.a.createElement(s.a,{icon:"trash"}))),c.a.createElement(v,{data:e.data.items,idx:e.idx,updateAccount:e.updateAccount,show:r}))},h=function(e){var t=e.data,a=e.updateAccount,n=e.removeAccount,r=e.showAll;return c.a.createElement("div",{className:r?"":"hide"},c.a.createElement("ul",null,t.map((function(e,t){return c.a.createElement(b,{data:e,idx:t,key:t,updateAccount:a,removeAccount:n})}))))},y=function(e){return c.a.createElement("div",{className:e.showWeek?"":"hide"},"Weekly Report")},j=function(e){return c.a.createElement("div",{className:e.showDay?"":"hide"},"Today's Report")},O=function(e){return c.a.createElement("div",{className:e.showMonth?"":"hide"},"Monthly Report")},k=[{title:"My first report",items:[{date:"2019-10-01",desc:"Dog chewing toy",cat:"Pets",ammt:100},{date:"2020-08-31",desc:"Cake for birthday",cat:"Food",ammt:50},{date:"2020-09-20",desc:"Costco Run",cat:"Groceries",ammt:200}]},{title:"My second report",items:[{date:"2020-08-01",desc:"Milk",cat:"Grocery",ammt:4.99},{date:"2020-08-31",desc:"Gas",cat:"Transportation",ammt:40},{date:"2020-08-25",desc:"Movie Tickets",cat:"Entertainment",ammt:36.29}]}],g=a(6),w=a(13),x=a(14);a(25);g.b.add(w.a,x.a);var A=function(){var e=Object(n.useState)(k),t=Object(i.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)({all:!0,month:!1,week:!1,day:!1}),m=Object(i.a)(u,2),s=m[0],p=m[1];return c.a.createElement("div",{className:"App"},c.a.createElement(d,{addAccount:function(e){if(""!==e.trim()){var t=[].concat(Object(l.a)(a),[{title:e,items:[]}]);r(t)}},toggle:function(e){switch(e){case"all":p({all:!0,month:!1,week:!1,day:!1});break;case"week":p({all:!1,month:!1,week:!0,day:!1});break;case"day":p({all:!1,month:!1,week:!1,day:!0});break;case"month":p({all:!1,month:!0,week:!1,day:!1})}}}),c.a.createElement(h,{updateAccount:function(e,t){var n=a.map((function(a,n){return e===n?Object(o.a)(Object(o.a)({},a),{},{items:t}):a}));r(n)},removeAccount:function(e){var t=a.slice(0,e).concat(a.slice(e+1));r(t)},data:a,showAll:s.all}),c.a.createElement(y,{showWeek:s.week}),c.a.createElement(O,{showMonth:s.month}),c.a.createElement(j,{showDay:s.day}))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(A,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0cee678d.chunk.js.map