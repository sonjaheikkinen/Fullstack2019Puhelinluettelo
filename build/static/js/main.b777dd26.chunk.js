(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=t(2),l=function(e){var n=e.filterValue,t=e.handleFilterValueChange;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},i=function(e){var n=e.addPerson,t=e.newName,a=e.handleNameChange,u=e.newNumber,c=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:u,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.person,t=e.deletePerson;return r.a.createElement("li",{key:n.id},n.name," ",n.number,r.a.createElement("button",{onClick:t},"delete"))},d=function(e){var n=e.namesToShow,t=e.deletePerson;return n.map(function(e){return r.a.createElement(m,{key:e.id,person:e,deletePerson:function(){return t(e.id,e.name)}})})},f=t(3),s=t.n(f),h="/api/persons",b=function(){return s.a.get(h).then(function(e){return e.data})},v=function(e){return s.a.post(h,e).then(function(e){return e.data})},E=function(e,n){return s.a.put("".concat(h,"/").concat(e),n).then(function(e){return e.data})},w=function(e){return s.a.delete("".concat(h,"/").concat(e)).then(function(e){return e.data})},p=(t(37),function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)}),g=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)},j=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(o.a)(c,2),f=m[0],s=m[1],h=Object(a.useState)(""),j=Object(o.a)(h,2),O=j[0],C=j[1],N=Object(a.useState)(!0),S=Object(o.a)(N,2),k=S[0],P=S[1],y=Object(a.useState)(""),T=Object(o.a)(y,2),V=T[0],D=T[1],A=Object(a.useState)(null),F=Object(o.a)(A,2),I=F[0],J=F[1],L=Object(a.useState)(null),x=Object(o.a)(L,2),B=x[0],U=x[1];Object(a.useEffect)(function(){b().then(function(e){u(e)})},[]);var q=k?t:t.filter(function(e){return e.name.toLowerCase().includes(V.toLowerCase())});return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{message:I}),r.a.createElement(g,{message:B}),r.a.createElement(l,{filterValue:V,handleFilterValueChange:function(e){D(e.target.value),P(""===V)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(i,{addPerson:function(e){e.preventDefault();var n={name:f,number:O},a=t.find(function(e){return e.name===f});a?window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))&&E(a.id,n).then(function(e){u(t.map(function(n){return n.name===e.name?e:n}))}).then(function(){J("Updated ".concat(f)),setTimeout(function(){J(null)},5e3)}).catch(function(e){U("Information of ".concat(f," has already been removed from server")),setTimeout(function(){U(null)},5e3)}):v(n).then(function(e){u(t.concat(e))}).then(function(){J("Added ".concat(f)),setTimeout(function(){J(null)},5e3)}),s(""),C("")},newName:f,handleNameChange:function(e){s(e.target.value)},newNumber:O,handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(d,{namesToShow:q,deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&w(e).then(u(t.filter(function(n){return n.id!==e}))).then(function(){J("Deleted ".concat(n)),setTimeout(function(){J(null)},5e3)})}}))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b777dd26.chunk.js.map