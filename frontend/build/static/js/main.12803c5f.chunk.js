(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,n){},62:function(e,t){},90:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),s=n.n(r),i=n(44),j=n(45),o=n(46),b=n(50),l=n(39),u=n(14),O=n(3),h=n(7),d=n.n(h),p=(n(18),n(4)),x=n(16),f=n(112),m=n(1);function g(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(f.a,{onClick:function(){e.clickDetails()},children:"Detalles"}),e.details?Object(m.jsx)("div",{}):Object(m.jsxs)("div",{class:"container",id:"container",children:[Object(m.jsxs)("h4",{children:["Peso: ",e.parcel.shipment_weight," kg"]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h4",{children:["Pa\xeds de Origen: ",e.parcel.origin_country_iso3]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h4",{children:["D\xeda de recogida: ",e.parcel.shipment_pickup_date]}),Object(m.jsx)("br",{}),Object(m.jsxs)("h4",{children:["D\xeda de entrega: ",e.parcel.shipment_delivery_date]})]})]})}function v(e){var t=Object(c.useState)([{}]),n=Object(O.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!0),i=Object(O.a)(s,2),j=i[0],o=i[1],b="https://api.aftership.com/v4/trackings/"+e.company+"/"+e.number+"/";return Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json","aftership-api-key":"3f7f21d6-0de5-4505-8eec-84f61d4359df"}},e.next=3,fetch(b,t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,r(c),setTimeout((function(){o(!1)}),750);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(m.jsx)("tbody",{align:"justify",children:Object(m.jsxs)("tr",{align:"center",children:[Object(m.jsx)("td",{children:j?Object(m.jsx)("div",{}):a.data.tracking?Object(m.jsx)("img",{src:"/images/"+a.data.tracking.slug+".png",height:"200",widht:"200"}):Object(m.jsx)("div",{})}),Object(m.jsx)("td",{}),Object(m.jsx)("td",{children:j?Object(m.jsx)("div",{}):a.data.tracking?Object(m.jsx)("p",{children:a.data.tracking.subtag_message}):Object(m.jsx)("div",{})}),Object(m.jsx)("td",{children:j?Object(m.jsx)("div",{}):a.data.tracking?Object(m.jsx)(g,{details:e.details,parcel:a.data.tracking,clickDetails:function(){return e.clickDetails()}}):Object(m.jsx)("div",{})})]},"number"+e.index)})}function y(e){return Object(m.jsxs)("div",{class:"row",children:[Object(m.jsx)("input",{type:"text",className:"form",value:e.ship_number,autoComplete:"off",placeholder:"Introduzca numero de pedido",onChange:function(t){return function(t){e.handleShipNumber(t)}(t.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",className:"form",value:e.company,autoComplete:"off",onChange:function(t){return function(t){e.handleCompany(t)}(t.target.value)}}),Object(m.jsx)("br",{}),Object(m.jsx)(f.a,{className:"itemNarrow",onClick:function(){e.clickSearch()},children:" Buscar Pedido "}),Object(m.jsx)(f.a,{className:"itemNarrow",onClick:function(){e.clickSave()},children:" Confirmar "})]})}var S=function(){var e=Object(c.useState)([]),t=Object(O.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),s=Object(O.a)(r,2),i=s[0],j=s[1],o=Object(c.useState)(""),b=Object(O.a)(o,2),h=b[0],g=b[1],S=Object(c.useState)([]),k=Object(O.a)(S,2),C=k[0],w=k[1],T=Object(c.useState)([]),N=Object(O.a)(T,2),P=N[0],F=N[1],D=Object(c.useState)(!1),E=Object(O.a)(D,2),I=E[0],R=E[1],_=Object(p.g)().state.email;function A(){return(A=Object(u.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={pedidos:n.shipnumber.toString(),"compa\xf1ias":n.company.toString()},e.next=3,fetch("/ships"+_,{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(){return(J=Object(u.a)(d.a.mark((function e(){var t,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json","aftership-api-key":"3f7f21d6-0de5-4505-8eec-84f61d4359df"},body:JSON.stringify({tracking:{tracking_number:i}})},e.next=3,fetch("https://api.aftership.com/v4/trackings",t);case 3:return n=e.sent,e.next=6,n.json();case 6:c=e.sent,g(c.data.tracking.slug);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(){var e={shipnumber:i,company:h},t=[].concat(Object(l.a)(n),[e]);a(t),function(){A.apply(this,arguments)}(),j(""),g("")}Object(c.useEffect)((function(){function e(){return(e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/ships/"+_);case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,w(n.pedidos.split(",")),F(n.compa\u00f1ias.split(","));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}document.title="Home",function(){e.apply(this,arguments)}()}),[]);var B=Object(c.useState)(!0),U=Object(O.a)(B,2),H=U[0],K=U[1],W=Object(c.useState)(!0),z=Object(O.a)(W,2),G=z[0],M=z[1];return Object(m.jsxs)("div",{class:"login",children:[Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"            ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:Object(m.jsx)("img",{src:"/images/Logo.png",height:"150",widht:"150",alt:"Image",align:"center"})}),Object(m.jsx)("div",{class:"row",children:Object(m.jsx)("button",{type:"button",children:Object(m.jsx)(x.b,{to:"/Login",style:{color:"#FFF"},children:"Cerrar sesion"})})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("h2",{children:["Hola ",_," !"]}),Object(m.jsx)(f.a,{onClick:function(){return function(){var e=n;C.map((function(t,n){var c={shipnumber:t,company:P[n]};console.log(c),e=[].concat(Object(l.a)(e),[c])})),a(e)}()},children:"Cargar"})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(y,{ship_number:i,company:h,handleShipNumber:function(e){return function(e){j(e)}(e)},handleCompany:function(e){},clickSearch:function(){return function(){return J.apply(this,arguments)}()},clickSave:function(){return L()}}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{class:"col-12  mainPagecontainer ",children:[Object(m.jsx)("h2",{class:"blog-post-title",children:"Pedidos"}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",value:"upsTrue",onChange:function(e){return K(!H)}}),"UPS"]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",value:"seurTrue",onChange:function(e){return M(!G)}}),"SEUR"]}),Object(m.jsx)("div",{class:"aside",children:Object(m.jsx)("table",{children:n.map((function(e,t){return Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",value:e.company,onChange:function(e){return K(!H)}}),"UPS"]})}))})}),Object(m.jsx)("div",{children:Object(m.jsx)("table",{children:n.map((function(e,t){return Object(m.jsx)(v,{index:t,number:e.shipnumber,company:e.company,details:I,clickDetails:function(){R(!I)}})}))})})]})]})},k=(n(9),n(110));n(26),n(111);var C=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(O.a)(s,2),j=i[0],o=i[1],b=Object(p.f)();function l(){return(l=Object(u.a)(d.a.mark((function e(t){var c,s,i,l,u,O,h;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c=a,e.next=4,fetch("/ships/"+c);case 4:return s=e.sent,e.next=7,s.json();case 7:i=e.sent,l=i.pass,u=n(26),O=u.AES.decrypt(l,"KeyISST"),h=JSON.parse(O.toString(u.enc.Utf8)),j===h?(r("CORRECTO"),o("PASSWORD"),b.push("/home",{email:c}),r(""),o("")):(r("INCORRECTO"),o("PASSWORD INCORRECTA"));case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{class:"login",children:[Object(m.jsx)("h2",{children:Object(m.jsx)("img",{src:"/images/Logo.png"})}),Object(m.jsxs)("div",{class:"container",id:"container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{align:"center",children:"Iniciar Sesi\xf3n"}),Object(m.jsxs)("form",{onSubmit:function(e){return l.apply(this,arguments)},children:[Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"email",placeholder:"Email",value:a,onChange:function(e){return r(e.target.value)}})}),Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"password",name:"name",placeholder:"Contrase\xf1a",value:j,onChange:function(e){return o(e.target.value)}})}),Object(m.jsx)("h2",{children:Object(m.jsx)("input",{type:"submit",value:"Iniciar sesi\xf3n"})})]}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"\xbfTodav\xeda no te has registrado?"}),Object(m.jsx)("h5",{children:"Date de alta en nuestro servicio"}),Object(m.jsx)("h2",{children:Object(m.jsx)(k.a,{children:Object(m.jsxs)(f.a,{class:"Button",align:"center",children:[" ",Object(m.jsx)(x.b,{to:"/registro",style:{color:"#FFF"},children:" Reg\xedstrate "})]})})})]})]})};var w=function(){var e=Object(c.useState)(""),t=Object(O.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(""),i=Object(O.a)(s,2),j=i[0],o=i[1],b=Object(c.useState)(""),l=Object(O.a)(b,2),h=l[0],p=l[1];function g(){return(g=Object(u.a)(d.a.mark((function e(){var t,c,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n(26),c=t.AES.encrypt(JSON.stringify(j),"KeyISST").toString(),s={name:h,email:a,pass:c,pedidos:"","compa\xf1ias":""},e.next=5,fetch("/ships",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)});case 5:r(""),o(""),p("");case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(m.jsxs)("div",{class:"login",children:[Object(m.jsx)("h2",{children:Object(m.jsx)("img",{src:"/images/Logo.png"})}),Object(m.jsxs)("div",{class:"container",id:"container",children:[Object(m.jsx)("br",{}),Object(m.jsx)("h2",{align:"center",children:"Registrarse"}),Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Nombre",value:h,onChange:function(e){return p(e.target.value)}})})}),Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Email",value:a,onChange:function(e){return r(e.target.value)}})})}),Object(m.jsx)("form",{children:Object(m.jsx)("label",{children:Object(m.jsx)("input",{type:"password",name:"name",placeholder:"Contrase\xf1a",value:j,onChange:function(e){return o(e.target.value)}})})}),Object(m.jsx)("h2",{children:Object(m.jsx)(f.a,{onClick:function(){return function(){return g.apply(this,arguments)}()},align:"center",children:" Reg\xedstrate"})}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("h2",{children:"\xbfYa tienes cuenta?"}),Object(m.jsx)("h5",{children:"Inicia sesi\xf3n con nosotros"}),Object(m.jsx)("h2",{children:Object(m.jsxs)(f.a,{class:"Button",align:"center",children:[" ",Object(m.jsx)(x.b,{to:"/login",style:{color:"#FFF"},children:" Iniciar sesi\xf3n"})]})})]})]})},T=function(e){Object(o.a)(n,e);var t=Object(b.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)(x.a,{children:Object(m.jsxs)(p.c,{children:[Object(m.jsx)(p.a,{path:"/",exact:!0,component:C}),Object(m.jsx)(p.a,{path:"/home",exact:!0,component:S}),Object(m.jsx)(p.a,{path:"/registro",exact:!0,component:w}),Object(m.jsx)(p.a,{path:"/login",exact:!0,component:C}),Object(m.jsx)(p.a,{render:function(){return Object(m.jsx)("h1",{children:"No se encuentra disponible"})}})]})})}}]),n}(c.Component),N=T,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(89);s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),P()}},[[90,1,2]]]);
//# sourceMappingURL=main.12803c5f.chunk.js.map