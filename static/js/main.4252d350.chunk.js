(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),l=n.n(i),s=(n(14),n(6)),c=n(9),d=n(4),m=(n(15),n(8)),h=n(0),o=function(e){var t=e.contact,n=e.handleEditClick,a=e.handleDeleteClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:t.firstName}),Object(h.jsx)("td",{children:t.lastName}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{children:t.role}),Object(h.jsx)("td",{children:t.phonenumber}),Object(h.jsx)("td",{children:t.address}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"button",onClick:function(e){return n(e,t)},children:"Edit"}),Object(h.jsx)("button",{type:"button",onClick:function(){return a(t.firstName)},children:"Delete"})]})]})},j=function(e){var t=e.editFormData,n=e.handleEditFormChange,a=e.handleCancelClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"FirstName",name:"firstName",value:t.firstName,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"LasttName",name:"lastName",value:t.lastName,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"email",required:"required",placeholder:"Email",name:"email",value:t.email,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"Role",name:"role",value:t.role,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"PhoneNumber",name:"phonenumber",value:t.phonenumber,onChange:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"text",required:"required",placeholder:"Address",name:"address",value:t.address,onChange:n})}),Object(h.jsxs)("td",{children:[Object(h.jsx)("button",{type:"submit",children:"Save"}),Object(h.jsx)("button",{type:"button",onClick:a,children:"Cancel"})]})]})},u=function(){var e=Object(a.useState)(m),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)({firstName:"",lastName:"",email:"",role:"",phonenumber:"",address:""}),l=Object(d.a)(i,2),u=l[0],b=l[1],p=Object(a.useState)(null),O=Object(d.a)(p,2),x=O[0],f=O[1],N=function(e){e.preventDefault();var t=e.target.getAttribute("name"),n=e.target.value,a=Object(c.a)({},u);a[t]=n,b(a)},g=function(e,t){e.preventDefault(),f(t.firstName);var n={firstName:t.firstName,lastName:t.lastName,email:t.email,role:t.role,phonenumber:t.phonenumber,address:t.address};b(n)},v=function(){f(null)},C=function(e){var t=Object(s.a)(n),a=n.findIndex((function(t){return t.firstName===e}));t.splice(a,1),r(t)};return Object(h.jsx)("div",{className:"app-container",children:Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={firstName:x,lastName:u.lastName,email:u.email,role:u.role,phonenumber:u.phonenumber,address:u.address},a=Object(s.a)(n);a[n.findIndex((function(e){return e.firstName===x}))]=t,r(a),f(null)},children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"First Name"}),Object(h.jsx)("th",{children:"Last Name"}),Object(h.jsx)("th",{children:"Email"}),Object(h.jsx)("th",{children:"Role"}),Object(h.jsx)("th",{children:"Phone Number"}),Object(h.jsx)("th",{children:"Address"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:n.map((function(e){return Object(h.jsx)(a.Fragment,{children:x===e.firstName?Object(h.jsx)(j,{editFormData:u,handleEditFormChange:N,handleCancelClick:v}):Object(h.jsx)(o,{contact:e,handleEditClick:g,handleDeleteClick:C})})}))})]})})})};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(u,{})}),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"firstName":"Sachin","lastName":"Singh","email":"sachin.singh@gmail.com","role":"Designer","phonenumber":"8965237899","address":"Delhi"},{"firstName":"Aman","lastName":"Mishra","email":"aman.mishra@gmail.com","role":"Analyst","phonenumber":"9834567091","address":"Pune"},{"firstName":"Satyam","lastName":"Singh","email":"satyam.singh@gmail.com","role":"Developer","phonenumber":"6711109632","address":"Bhopal"},{"firstName":"Mohit","lastName":"Sheik","email":"mohit.sheik@gmail.com","role":"Designer","phonenumber":"6636754860","address":"Delhi"},{"firstName":"Vihaan","lastName":"Singh","email":"vihaan.singh@gmail.com","role":"Analyst","phonenumber":"7754289651","address":"Hyderabad"},{"firstName":"Ankit","lastName":"Jain","email":"ankit.jain@gmail.com","role":"Designer","phonenumber":"9914573822","address":"Chennai"}]')}},[[17,1,2]]]);
//# sourceMappingURL=main.4252d350.chunk.js.map