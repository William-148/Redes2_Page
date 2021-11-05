(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{43:function(e,t,r){},82:function(e,t,r){},83:function(e,t,r){},84:function(e,t,r){"use strict";r.r(t);var c=r(1),a=r.n(c),n=r(35),s=r.n(n),i=(r(43),r(15)),o=r(4),l=r(2),u=r(3),j=r.n(u),b=r(5),d=r(13),h=r(14),O=r(20),m=r(19),p=r(9),x=r.n(p),v=r(36),f=r.n(v),g=function(){function e(){Object(d.a)(this,e),this.API_URI="https://servicios.myapplication.systems"}return Object(h.a)(e,[{key:"request",value:function(){var e=Object(b.a)(j.a.mark((function e(t,r){var c,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.length>2&&void 0!==a[2]?a[2]:void 0,e.next=3,f()({method:t,url:r,data:c}).then((function(e){return e})).catch((function(e){return e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"fileToBase64",value:function(e,t){try{var r=new FileReader;r.onload=function(){2===r.readyState&&t(e.name,r.result)},r.readAsDataURL(e)}catch(c){console.error("Error in convert to base 64:",c)}}},{key:"convertDate",value:function(e){var t=new Date(e),r=t.getDate(),c=t.getMonth()+1,a=t.getFullYear(),n=t.getHours(),s=t.getMinutes();return c<10?"".concat(r,"/0").concat(c,"/").concat(a," ").concat(n,":").concat(s):"".concat(r,"/").concat(c,"/").concat(a," ").concat(n,":").concat(s)}}]),e}(),N=function(e){Object(O.a)(r,e);var t=Object(m.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"test",value:function(){x.a.fire("IP Service Network",this.API_URI,"success")}},{key:"saveReport",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.request("POST","".concat(this.API_URI,"/guardarReporte"),{carnet:t.carnet,nombre:t.name,curso:t.proyect,texto:t.report});case 3:if(!(r=e.sent)||200!==r.status){e.next=7;break}return x.a.fire("\xa1Completado!","Su reporte ha sido enviado correctamente","success"),e.abrupt("return",!0);case 7:return x.a.fire("\xa1Error!","Su reporte no se ingres\xf3, intente nuevamente.","error"),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAll",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("GET","".concat(this.API_URI,"/reportes"));case 2:if(!(t=e.sent)||200!==t.status){e.next=5;break}return e.abrupt("return",t.data);case 5:return x.a.fire("\xa1Error!","Ha surgido un problema, intente mas tarde.","error"),console.error("Error al obtener Reportes::",t),e.abrupt("return",{array:[],server:"none"});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getByCarnet",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("GET","".concat(this.API_URI,"/reportes/").concat(t));case 2:if(!(r=e.sent)||200!==r.status){e.next=5;break}return e.abrupt("return",r.data);case 5:return x.a.fire("\xa1Error!","Ha surgido un problema, intente mas tarde.","error"),console.error(r),e.abrupt("return",{array:[],server:"none"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(g),y=new N,w=r(0),k=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(""),s=Object(l.a)(n,2),i=s[0],o=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(c.useState)(""),p=Object(l.a)(m,2),x=p[0],v=p[1],f=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y.saveReport({carnet:r,name:i,proyect:h,report:x});case 3:e.sent&&(a(""),o(""),O(""),v(""));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("form",{className:"tab-content",onSubmit:f,children:[Object(w.jsx)("h3",{className:"register-heading",children:"Reporte De Practicante"}),Object(w.jsxs)("div",{className:"row register-form",children:[Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Carnet:"}),Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Ingrese su carnet",required:!0,value:r,onChange:function(e){a(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Nombre:"}),Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Ingrese su nombre",required:!0,value:i,onChange:function(e){o(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Curso/Proyecto:"}),Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Indique su curso o proyecto",required:!0,value:h,onChange:function(e){O(e.target.value)}})]})]}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Cuerpo del Reporte:"}),Object(w.jsx)("textarea",{name:"mensaje",placeholder:"Escriba su reporte",className:"form-control",rows:"10",required:!0,value:x,onChange:function(e){v(e.target.value)}})]}),Object(w.jsx)("input",{type:"submit",className:"btnRegister",value:"Registrar"})]})]})]})})};var C=function(e){var t=Object(c.useState)(""),r=Object(l.a)(t,2),a=r[0],n=r[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),o=i[0],u=i[1],j=Object(c.useState)(""),b=Object(l.a)(j,2),d=b[0],h=b[1],O=Object(c.useState)(""),m=Object(l.a)(O,2),p=m[0],x=m[1],v=Object(c.useState)(""),f=Object(l.a)(v,2),g=f[0],N=f[1],k=Object(c.useState)(""),C=Object(l.a)(k,2),S=C[0],I=C[1];return Object(c.useEffect)((function(){var t;t=e.report,console.log(t),n(t.carnet),u(t.nombre),h(t.curso),x(t.servidor),N(y.convertDate(t.fecha)),I(t.texto)}),[]),Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("form",{className:"tab-content",children:[Object(w.jsx)("h3",{className:"register-heading",children:"Informaci\xf3n del Reporte"}),Object(w.jsxs)("div",{className:"row register-form",children:[Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Carnet:"}),Object(w.jsx)("input",{type:"text",className:"form-control",required:!0,value:a,readOnly:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Nombre:"}),Object(w.jsx)("input",{type:"text",className:"form-control",required:!0,value:o,readOnly:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Curso/Proyecto:"}),Object(w.jsx)("input",{type:"text",className:"form-control",required:!0,value:d,readOnly:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Procesado Por:"}),Object(w.jsx)("input",{type:"text",className:"form-control",required:!0,value:p,readOnly:!0})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Fecha:"}),Object(w.jsx)("input",{type:"text",className:"form-control",required:!0,value:g,readOnly:!0})]})]}),Object(w.jsx)("div",{className:"col-md-6",children:Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Cuerpo del Reporte:"}),Object(w.jsx)("textarea",{name:"mensaje",className:"form-control",rows:"10",required:!0,value:S,readOnly:!0})]})})]})]})})};var S=function(e){var t=Object(c.useState)(""),r=Object(l.a)(t,2),a=r[0],n=r[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),O=h[0],m=h[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){var t,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=6;break}return e.next=3,y.getAll();case 3:e.t0=e.sent,e.next=9;break;case 6:return e.next=8,y.getByCarnet(a);case 8:e.t0=e.sent;case 9:t=e.t0,r=t.array,c=t.server,u(r),m(c);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("div",{className:"tab-content",children:[Object(w.jsx)("h3",{className:"register-heading",children:"Listado de Reportes"}),Object(w.jsxs)("div",{className:"row search-form",children:[Object(w.jsx)("label",{children:"Carnet:"}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Ingrese un carnet",value:a,onChange:function(e){n(e.target.value)},onKeyUp:function(e){13===e.keyCode&&p()}})}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("button",{className:"btn btn-secondary",onClick:p,children:"Buscar"})})]}),Object(w.jsx)("div",{className:"row report-table",children:Object(w.jsxs)("table",{className:"table table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"col",children:"Carnet"}),Object(w.jsx)("th",{scope:"col",children:"Nombre"}),Object(w.jsx)("th",{scope:"col",children:"Curso/Proyecto"}),Object(w.jsx)("th",{scope:"col",children:"Fecha"}),Object(w.jsx)("th",{scope:"col",children:"Servidor"})]})}),Object(w.jsx)("tbody",{children:o.map((function(t){return Object(w.jsxs)("tr",{onDoubleClick:function(){return r=t,null===e||void 0===e?void 0:e.selectReport(r);var r},children:[Object(w.jsx)("th",{scope:"row",children:t.carnet}),Object(w.jsx)("td",{children:t.nombre}),Object(w.jsx)("td",{children:t.curso}),Object(w.jsx)("td",{children:y.convertDate(t.fecha)}),Object(w.jsx)("td",{children:t.servidor})]},t.idReporte)}))})]})}),Object(w.jsxs)("label",{children:['Solicitud atendida por el servidor "',O,'"']})]})})},I=r.p+"static/media/usac.cb2a510d.png";var E=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(void 0),s=Object(l.a)(n,2),o=s[0],u=s[1],j=function(e){a(Number(e.target.value))};return Object(w.jsx)("div",{className:"register",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-3 register-left",children:[Object(w.jsx)("img",{className:"img-logo",src:I,alt:"Usac"}),Object(w.jsx)("h3",{children:"Bienvenido"}),Object(w.jsx)("p",{children:"Puedes hacer consultas de reportes aqu\xed!"}),Object(w.jsx)("div",{className:"btn-group-vertical",style:{marginBottom:20},children:Object(w.jsx)(i.b,{className:"btn btn-info",to:"/asistencia",children:"Asistencia"})}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"btn-group-vertical",style:{marginBottom:20},children:[Object(w.jsx)("button",{className:"btn btn-primary",value:0,onClick:j,children:"Enviar Reporte"}),Object(w.jsx)("button",{className:"btn btn-primary",value:1,onClick:j,children:"Listar Reportes"})]})]}),0===r?Object(w.jsx)(k,{}):1===r?Object(w.jsx)(S,{selectReport:function(e){u(e),a(2)}}):Object(w.jsx)(C,{report:o})]})})},R=function(e){Object(O.a)(r,e);var t=Object(m.a)(r);function r(){return Object(d.a)(this,r),t.apply(this,arguments)}return Object(h.a)(r,[{key:"create",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("POST","".concat(this.API_URI,"/guardarAsistencia"),t);case 2:if(!(r=e.sent)||200!==r.status){e.next=6;break}return x.a.fire("\xa1Completado!","La asistencia ha sido guardada correctamente","success"),e.abrupt("return",!0);case 6:return x.a.fire("\xa1Error!","Su asistencia no se ingres\xf3, intente nuevamente.","error"),e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getList",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("GET","".concat(this.API_URI,"/reporteidev/").concat(t));case 2:if(!(r=e.sent)||200!==r.status){e.next=5;break}return e.abrupt("return",r.data);case 5:return x.a.fire("\xa1Error!","Ha surgido un problema, intente mas tarde.","error"),console.error("Error al obtener Asistencias::",r),e.abrupt("return",{array:[],server:"none"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getListEvent",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("GET","".concat(this.API_URI,"/reportecar/").concat(t));case 2:if(!(r=e.sent)||200!==r.status){e.next=5;break}return e.abrupt("return",r.data);case 5:return x.a.fire("\xa1Error!","Ha surgido un problema, intente mas tarde.","error"),console.error("Error al obtener Eventos::",r),e.abrupt("return",{array:[],server:"none"});case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),r}(g),q=new R,P=(r(82),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),r=t[0],a=t[1],n=Object(c.useState)(""),s=Object(l.a)(n,2),i=s[0],o=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),h=d[0],O=d[1],m=Object(c.useState)(""),p=Object(l.a)(m,2),v=p[0],f=p[1],g=Object(c.useState)(null),N=Object(l.a)(g,2),y=N[0],k=N[1],C=Object(c.useState)(null),S=Object(l.a)(C,2),I=S[0],E=S[1],R=function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),y){e.next=4;break}return x.a.fire("\xa1Warning!","No se eligi\xf3 ninguna imagen","warning"),e.abrupt("return");case 4:return e.next=6,q.create({carnet:r,estudiante:i,idEvento:h,evento:v,image:y.split(",")[1],ext:I.split(".")[1]});case 6:e.sent&&(a(""),o(""),f(""),O(""));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("form",{className:"tab-content",onSubmit:R,children:[Object(w.jsx)("h3",{className:"register-heading",children:"Registro de Asistencia"}),Object(w.jsxs)("div",{className:"row register-form",children:[Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Carnet:"}),Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Ingrese el carnet",required:!0,value:r,onChange:function(e){return a(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Nombre Estudiante:"}),Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Ingrese nombre del estudiante",required:!0,value:i,onChange:function(e){return o(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Id del Evento:"}),Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Indique el ID del evento",required:!0,value:h,onChange:function(e){return O(e.target.value)}})]}),Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Nombre del Evento:"}),Object(w.jsx)("input",{type:"text",className:"form-control",placeholder:"Ingrese el nombre del evento",required:!0,value:v,onChange:function(e){return f(e.target.value)}})]})]}),Object(w.jsxs)("div",{className:"col-md-6",children:[Object(w.jsxs)("div",{className:"form-group",children:[Object(w.jsx)("label",{children:"Captura de Pantalla:"}),Object(w.jsx)("div",{className:"image-viewer",children:Object(w.jsx)("img",{src:y||"https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif",alt:"profile"})}),Object(w.jsxs)("label",{htmlFor:"btn-file",className:"btn btn-sm btn-info",children:[Object(w.jsx)("i",{className:"fas fa-arrow-circle-up",style:{marginRight:10}}),"Select Image"]}),Object(w.jsx)("input",{type:"file",id:"btn-file",className:"input-image",accept:"image/*",onChange:function(e){var t=e.target;q.fileToBase64(t.files[0],(function(e,t){k(t),E(e)}))}})]}),Object(w.jsx)("input",{type:"submit",className:"btnRegister",value:"Registrar"})]})]})]})})});var A=function(e){var t=Object(c.useState)(""),r=Object(l.a)(t,2),a=r[0],n=r[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),O=h[0],m=h[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){var t,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q.getList(a);case 4:t=e.sent,r=t.array,c=t.server,console.log(r),u(r),m(c);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("div",{className:"tab-content",children:[Object(w.jsx)("h3",{className:"register-heading",children:"Listado de Asistencia"}),Object(w.jsxs)("div",{className:"row search-form",children:[Object(w.jsx)("label",{children:"ID Evento:"}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Ingrese ID del evento",value:a,onChange:function(e){var t=e.target;return n(t.value)},onKeyUp:function(e){13===e.keyCode&&p()}})}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("button",{className:"btn btn-secondary",onClick:p,children:"Buscar"})})]}),Object(w.jsx)("div",{className:"row report-table",children:Object(w.jsxs)("table",{className:"table table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"col",children:"Evento"}),Object(w.jsx)("th",{scope:"col",children:"Carnet"}),Object(w.jsx)("th",{scope:"col",children:"Estudiante"}),Object(w.jsx)("th",{scope:"col",children:"Fecha"}),Object(w.jsx)("th",{scope:"col",children:"Servidor"}),Object(w.jsx)("th",{scope:"col",children:"Captura"})]})}),Object(w.jsx)("tbody",{children:o.map((function(e,t){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"row",children:e.evento}),Object(w.jsx)("td",{children:e.carnet}),Object(w.jsx)("td",{children:e.estudiante}),Object(w.jsx)("td",{children:q.convertDate(e.fecha)}),Object(w.jsx)("td",{children:e.servidor}),Object(w.jsx)("td",{children:Object(w.jsx)("a",{href:e.image&&""===e.image?"https://www.pulsorunner.com/wp-content/uploads/2014/10/default-img.gif":e.image,className:"btn btn-sm btn-secondary",target:"_blank",children:Object(w.jsx)("i",{className:"fas fa-image fa-ms"})})})]},t)}))})]})}),Object(w.jsxs)("label",{children:['Solicitud atendida por el servidor "',O,'"']})]})})};var D=function(e){var t=Object(c.useState)(""),r=Object(l.a)(t,2),a=r[0],n=r[1],s=Object(c.useState)([]),i=Object(l.a)(s,2),o=i[0],u=i[1],d=Object(c.useState)(""),h=Object(l.a)(d,2),O=h[0],m=h[1],p=function(){var e=Object(b.a)(j.a.mark((function e(){var t,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==a){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,q.getListEvent(a);case 4:t=e.sent,r=t.array,c=t.server,u(r),m(c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"col-md-9 register-right",children:Object(w.jsxs)("div",{className:"tab-content",children:[Object(w.jsx)("h3",{className:"register-heading",children:"Listado de Eventos Asistidos"}),Object(w.jsxs)("div",{className:"row search-form",children:[Object(w.jsx)("label",{children:"Carnet:"}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("input",{type:"number",className:"form-control",placeholder:"Ingrese un carnet",value:a,onChange:function(e){var t=e.target;return n(t.value)},onKeyUp:function(e){13===e.keyCode&&p()}})}),Object(w.jsx)("div",{className:"col",children:Object(w.jsx)("button",{className:"btn btn-secondary",onClick:p,children:"Buscar"})})]}),Object(w.jsx)("div",{className:"row report-table",children:Object(w.jsxs)("table",{className:"table table-dark",children:[Object(w.jsx)("thead",{children:Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"col",children:"Carnet"}),Object(w.jsx)("th",{scope:"col",children:"Estudiante"}),Object(w.jsx)("th",{scope:"col",children:"ID Evento"}),Object(w.jsx)("th",{scope:"col",children:"Evento"}),Object(w.jsx)("th",{scope:"col",children:"Fecha"}),Object(w.jsx)("th",{scope:"col",children:"Servidor"}),Object(w.jsx)("th",{scope:"col",children:"Captura"})]})}),Object(w.jsx)("tbody",{children:o.map((function(e){return Object(w.jsxs)("tr",{children:[Object(w.jsx)("th",{scope:"row",children:e.carnet}),Object(w.jsx)("td",{children:e.estudiante}),Object(w.jsx)("td",{children:e.idEvento}),Object(w.jsx)("td",{children:e.evento}),Object(w.jsx)("td",{children:q.convertDate(e.fecha)}),Object(w.jsx)("td",{children:e.servidor}),Object(w.jsx)("td",{children:Object(w.jsx)("a",{href:e.image&&""===e.image?"https://image.ibb.co/n7oTvU/logo_white.png":e.image,className:"btn btn-sm btn-secondary",target:"_blank",children:Object(w.jsx)("i",{className:"fas fa-image fa-ms"})})})]},e.idEvento)}))})]})}),Object(w.jsxs)("label",{children:['Solicitud atendida por el servidor "',O,'"']})]})})};var B=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),r=t[0],a=t[1],n=function(e){a(Number(e.target.value))};return Object(w.jsx)("div",{className:"register",children:Object(w.jsxs)("div",{className:"row",children:[Object(w.jsxs)("div",{className:"col-md-3 register-left",children:[Object(w.jsx)("img",{className:"img-logo",src:I,alt:"Usac"}),Object(w.jsx)("h3",{children:"Bienvenido"}),Object(w.jsx)("p",{children:"Puedes hacer consultas de reportes aqu\xed!"}),Object(w.jsx)("div",{className:"btn-group-vertical",style:{marginBottom:20},children:Object(w.jsx)(i.b,{className:"btn btn-info",to:"/report",children:"Reportes"})}),Object(w.jsx)("br",{}),Object(w.jsxs)("div",{className:"btn-group-vertical",style:{marginBottom:20},children:[Object(w.jsx)("button",{className:"btn btn-primary",value:0,onClick:n,children:"Registrar Asistencia"}),Object(w.jsx)("button",{className:"btn btn-primary",value:1,onClick:n,children:"Asistencias"}),Object(w.jsx)("button",{className:"btn btn-primary",value:2,onClick:n,children:"Eventos"})]})]}),0===r?Object(w.jsx)(P,{}):1===r?Object(w.jsx)(A,{}):Object(w.jsx)(D,{})]})})};r(83);var U=function(){return Object(w.jsx)(i.a,{basename:"/Redes2_Page",children:Object(w.jsxs)(o.d,{children:[Object(w.jsx)(o.b,{exact:!0,path:"/asistencia",children:Object(w.jsx)(B,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/report",children:Object(w.jsx)(E,{})}),Object(w.jsx)(o.b,{exact:!0,path:"/",children:Object(w.jsx)(o.a,{to:"/asistencia"})})]})})},L=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,85)).then((function(t){var r=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,s=t.getTTFB;r(e),c(e),a(e),n(e),s(e)}))};s.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(U,{})}),document.getElementById("root")),L()}},[[84,1,2]]]);
//# sourceMappingURL=main.de1b0ef6.chunk.js.map