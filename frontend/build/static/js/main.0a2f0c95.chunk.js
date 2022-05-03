(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(33),s=n.n(r),i=n(17),o=n(18),j=n(19),l=n(20),h=n(22),d=n(15),u=(n(12),n(9)),b=n.n(u),O=(n(23),n(60)),m=n(0);var x=n(14),p=n(6),f=n(10),g=n(52),v=n(53),y=n(54),C=n(55),w=n(50),S=n(51),k=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.toggle=a.toggle.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return Object(m.jsx)(w.a,{color:"dark",dark:!0,expand:"md",children:Object(m.jsx)(S.a,{tag:x.b,to:"/",children:"Home"})})}}]),n}(a.Component),T=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={tfgs:[]},a.remove=a.remove.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("/tfgs").then((function(e){return e.json()})).then((function(t){return e.setState({tfgs:t})}))}},{key:"remove",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/tfgs/".concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(){var e=Object(h.a)(n.state.tfgs).filter((function(e){return e.email!==t}));n.setState({tfgs:e})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.tfgs.map((function(t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{style:{whiteSpace:"nowrap"},children:t.nombre}),Object(m.jsx)("td",{children:t.email}),Object(m.jsx)("td",{children:t.titulo}),Object(m.jsx)("td",{children:t.tutor}),Object(m.jsx)("td",{children:t.status}),Object(m.jsx)("td",{children:Object(m.jsxs)(g.a,{children:[Object(m.jsx)(v.a,{size:"sm",color:"primary",tag:x.b,to:"/tfgs/"+t.email,children:"Edit"}),Object(m.jsx)(v.a,{size:"sm",color:"danger",onClick:function(){return e.remove(t.email)},children:"Delete"})]})})]},t.email)}));return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{}),Object(m.jsxs)(y.a,{fluid:!0,children:[Object(m.jsx)("div",{className:"float-right",children:Object(m.jsx)(v.a,{color:"success",tag:x.b,to:"/tfgs/new",children:"Add TFG"})}),Object(m.jsx)("h3",{children:"TFGs"}),Object(m.jsxs)(C.a,{className:"mt-4",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{width:"15%",children:"Nombre"}),Object(m.jsx)("th",{width:"15%",children:"Email"}),Object(m.jsx)("th",{width:"15%",children:"Titulo"}),Object(m.jsx)("th",{width:"15%",children:"Tutor"}),Object(m.jsx)("th",{width:"10%",children:"Estado"}),Object(m.jsx)("th",{width:"30%",children:"Actions"})]})}),Object(m.jsx)("tbody",{children:t})]})]})]})}}]),n}(a.Component),E=T,I=n(16),F=n(56),D=n(57),N=n(58),A=n(59),G=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).emptyItem={nombre:"",email:"",titulo:"",tutor:"",pass:"",status:1,memoria:null,nota:0},a.state={item:a.emptyItem},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"===this.props.match.params.email){e.next=7;break}return e.next=3,fetch("/tfgs/".concat(this.props.match.params.email));case 3:return e.next=5,e.sent.json();case 5:t=e.sent,this.setState({item:t});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target,n=t.value,a=t.name,c=Object(I.a)({},this.state.item);c[a]=n,this.setState({item:c})}},{key:"handleSubmit",value:function(){var e=Object(d.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state.item,e.next=4,fetch("/tfgs"+("new"!==this.props.match.params.email?"/"+n.email:""),{method:"new"!==this.props.match.params.email?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)});case 4:this.props.history.push("/tfgs");case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.item,t=Object(m.jsx)("h2",{children:e.email?"Edit TFG":"Add TFG"});return Object(m.jsxs)("div",{children:[Object(m.jsx)(k,{}),Object(m.jsxs)(y.a,{children:[t,Object(m.jsxs)(F.a,{onSubmit:this.handleSubmit,children:[Object(m.jsxs)(D.a,{children:[Object(m.jsx)(N.a,{for:"nombre",children:"Nombre"}),Object(m.jsx)(A.a,{type:"text",name:"nombre",id:"nombre",value:e.nombre||"",onChange:this.handleChange,autoComplete:"nombre"})]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(N.a,{for:"email",children:"Email"}),Object(m.jsx)(A.a,{type:"text",name:"email",id:"email",value:e.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(N.a,{for:"titulo",children:"Titulo"}),Object(m.jsx)(A.a,{type:"text",name:"titulo",id:"titulo",value:e.titulo||"",onChange:this.handleChange,autoComplete:"titulo"})]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(N.a,{for:"tutor",children:"Tutor"}),Object(m.jsx)(A.a,{type:"text",name:"tutor",id:"tutor",value:e.tutor||"",onChange:this.handleChange,autoComplete:"tutor"})]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(N.a,{for:"status",children:"Status"}),Object(m.jsx)(A.a,{type:"number",name:"status",id:"status",value:e.status||"",onChange:this.handleChange,autoComplete:"status"})]}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(v.a,{color:"primary",type:"submit",children:"Save"})," ",Object(m.jsx)(v.a,{color:"secondary",tag:x.b,to:"/tfgs",children:"Cancel"})]})]})]})]})}}]),n}(a.Component),L=Object(p.f)(G);var P=function(){return Object(m.jsxs)("div",{class:"login",children:[Object(m.jsx)("h2",{children:Object(m.jsx)("img",{src:"/images/Logo.png"})}),Object(m.jsxs)("div",{class:"container",id:"container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{align:"center",children:"Iniciar Sesi\xf3n"}),Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Usuario o Email"})})}),Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Contrase\xf1a"})})}),Object(m.jsx)("h2",{children:Object(m.jsx)(O.a,{align:"center",children:"INICIAR SESI\xd3N"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"\xbfTodav\xeda no te has registrado?"}),Object(m.jsx)("h5",{children:"Date de alta en nuestro servicio"}),Object(m.jsx)("h2",{children:Object(m.jsx)(O.a,{align:"center",children:"Registrarse"})})]})]})},J=function(e){Object(j.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(m.jsx)(x.a,{children:Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/",exact:!0,component:P}),Object(m.jsx)(p.a,{path:"/tfgs",exact:!0,component:E}),Object(m.jsx)(p.a,{path:"/tfgs/:email",component:L})]})})}}]),n}(a.Component),M=J,z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(48);s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root")),z()}},[[49,1,2]]]);
//# sourceMappingURL=main.0a2f0c95.chunk.js.map