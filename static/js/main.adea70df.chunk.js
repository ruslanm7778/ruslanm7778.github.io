(this["webpackJsonptable-app-v1"]=this["webpackJsonptable-app-v1"]||[]).push([[0],{28:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(20),i=n.n(r),s=(n(28),n(8)),l=n(9),o=n(11),d=n(10),h=n(15),j=n(2),u=n(0);function b(){return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:"Greeting"})})}n(30);var f=n(13),m=n(7),O={up:{class:"\u2228",fn:function(t,e){return t.birth_data-e.birth_data}},down:{class:"\u2227",fn:function(t,e){return e.birth_data-t.birth_data}},default:{class:"\u2b0d",fn:function(t,e){return t.birth_data-e.birth_data}}},x={up:{class:"\u2228",fn:function(t,e){return t.name.localeCompare(e.name)}},down:{class:"\u2227",fn:function(t,e){return e.name.localeCompare(t.name)}},default:{class:"\u2b0d",fn:function(t,e){return t.name.localeCompare(e.name)}}},p={up:{class:"\u2228",fn:function(t,e){return t.height-e.height}},down:{class:"\u2227",fn:function(t,e){return e.height-t.height}},default:{class:"\u2b0d",fn:function(t,e){return t.height-e.height}}},_={up:{class:"\u2228",fn:function(t,e){return t.mass-e.mass}},down:{class:"\u2227",fn:function(t,e){return e.mass-t.mass}},default:{class:"\u2b0d",fn:function(t,e){return t.mass-e.mass}}},g=void 0,C=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={currentSort:"default"},t.onSortChange=function(){var e,n=t.state.currentSort;"down"===n?e="up":"up"===n?e="default":"default"===n&&(e="down"),t.setState({currentSort:e})},t.onClick_name=function(e){t.onSortChange(e),g="name"},t.onClick_birth_year=function(e){t.onSortChange(e),g="birth_data"},t.onClick_height=function(e){t.onSortChange(e),g="height"},t.onClick_mass=function(e){t.onSortChange(e),g="mass"},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.data,e=this.state.currentSort;return t.length>0&&Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("th",{children:["Name",Object(u.jsx)("button",{onClick:this.onClick_name,children:"".concat(x[e].class)})]}),Object(u.jsxs)("th",{children:["Birth year",Object(u.jsx)("button",{onClick:this.onClick_birth_year,children:"".concat(O[e].class)})]}),Object(u.jsxs)("th",{children:["Height",Object(u.jsx)("button",{onClick:this.onClick_height,children:"".concat(O[e].class)})]}),Object(u.jsxs)("th",{children:["Mass",Object(u.jsx)("button",{onClick:this.onClick_mass,children:"".concat(O[e].class)})]})]})}),"name"===g?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(x[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.height}),Object(u.jsx)("td",{children:t.mass})]})}))}):"birth_data"===g?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(O[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.height}),Object(u.jsx)("td",{children:t.mass})]})}))}):"height"===g?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(p[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.height}),Object(u.jsx)("td",{children:t.mass})]})}))}):"mass"===g?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(_[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.height}),Object(u.jsx)("td",{children:t.mass})]})}))}):Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(O[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.height}),Object(u.jsx)("td",{children:t.mass})]})}))})]})}}]),n}(c.a.Component),v=C,y=[{name:"Amancio Ortega",birth_data:1990,height:177,mass:65},{name:"Bernard Arnault",birth_data:1991,height:178,mass:67},{name:"Bill Gates",birth_data:1992,height:178,mass:68},{name:"Carlos Sim Helu",birth_data:1993,height:188,mass:69},{name:"Jeff Bezos",birth_data:1994,height:184,mass:70},{name:"Larry Ellison",birth_data:1995,height:177,mass:71},{name:"Larry Page",birth_data:1996,height:173,mass:72},{name:"Mark Zuckerberg",birth_data:1997,height:171,mass:73},{name:"Michael Bloomberg",birth_data:1998,height:170,mass:74},{name:"Warren Buffet",birth_data:1999,height:190,mass:75}],k=y,S=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={name:void 0,birth_data:void 0,height:void 0,mass:void 0,reload:!1},a.refreshPage=function(){a.setState({reload:!0},(function(){return a.setState({reload:!1})}))},a.onChange=function(t){a.filterList(t),a.refreshPage(t)},a.filterList=a.filterList.bind(Object(f.a)(a)),a}return Object(l.a)(n,[{key:"filterList",value:function(t){k=[],y.filter((function(e){return e.name.toLowerCase().includes("".concat(t.target.value.toLowerCase()))})).map((function(t){return k.push(t)})),console.log(k)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"text-left",children:[Object(u.jsx)("input",{placeholder:"Search",onChange:this.onChange}),Object(u.jsx)(v,{data:k})]})}}]),n}(c.a.Component),w=n(18),L=n.n(w),B=n(21),A={up:{class:"\u2228",fn:function(t,e){return t.last_name.localeCompare(e.last_name)}},down:{class:"\u2227",fn:function(t,e){return e.last_name.localeCompare(t.last_name)}},default:{class:"\u2b0d",fn:function(t,e){return t.last_name.localeCompare(e.last_name)}}},P={up:{class:"\u2228",fn:function(t,e){return t.first_name.localeCompare(e.first_name)}},down:{class:"\u2227",fn:function(t,e){return e.first_name.localeCompare(t.first_name)}},default:{class:"\u2b0d",fn:function(t,e){return t.first_name.localeCompare(e.first_name)}}},M={up:{class:"\u2228",fn:function(t,e){return t.id-e.id}},down:{class:"\u2227",fn:function(t,e){return e.id-t.id}},default:{class:"\u2b0d",fn:function(t,e){return t.id-e.id}}},N={up:{class:"\u2228",fn:function(t,e){return t.email.localeCompare(e.email)}},down:{class:"\u2227",fn:function(t,e){return e.email.localeCompare(t.email)}},default:{class:"\u2b0d",fn:function(t,e){return t.email.localeCompare(e.email)}}},T=void 0,D=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={currentSort:"default"},t.onSortChange=function(){var e,n=t.state.currentSort;"down"===n?e="up":"up"===n?e="default":"default"===n&&(e="down"),t.setState({currentSort:e})},t.onClick_name=function(e){t.onSortChange(e),T="first_name"},t.onClick_birth_year=function(e){t.onSortChange(e),T="last_name"},t.onClick_height=function(e){t.onSortChange(e),T="id"},t.onClick_mass=function(e){t.onSortChange(e),T="email"},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.data,e=this.state.currentSort;return t.length>0&&Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsxs)("th",{children:["first_name",Object(u.jsx)("button",{onClick:this.onClick_name,children:"".concat(P[e].class)})]}),Object(u.jsxs)("th",{children:["last_name",Object(u.jsx)("button",{onClick:this.onClick_birth_year,children:"".concat(A[e].class)})]}),Object(u.jsxs)("th",{children:["id",Object(u.jsx)("button",{onClick:this.onClick_height,children:"".concat(A[e].class)})]}),Object(u.jsxs)("th",{children:["email",Object(u.jsx)("button",{onClick:this.onClick_mass,children:"".concat(A[e].class)})]})]})}),"first_name"===T?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(P[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.first_name}),Object(u.jsx)("td",{children:t.last_name}),Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.email})]})}))}):"last_name"===T?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(A[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.first_name}),Object(u.jsx)("td",{children:t.last_name}),Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.email})]})}))}):"id"===T?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(M[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.first_name}),Object(u.jsx)("td",{children:t.last_name}),Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.email})]})}))}):"email"===T?Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(N[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.first_name}),Object(u.jsx)("td",{children:t.last_name}),Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.email})]})}))}):Object(u.jsx)("tbody",{children:Object(m.a)(t).sort(A[e].fn).map((function(t){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:t.first_name}),Object(u.jsx)("td",{children:t.birth_data}),Object(u.jsx)("td",{children:t.id}),Object(u.jsx)("td",{children:t.email})]})}))})]})}}]),n}(c.a.Component),F=D,H=[],J=[],E=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).state={first_name:void 0,last_name:void 0,id:void 0,email:void 0,reload:!1},a.getDataApp=function(){var t=Object(B.a)(L.a.mark((function t(e){var n,c,r;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H=[],n=0;case 2:if(!(n<6)){t.next=16;break}return t.next=5,fetch("https://reqres.in/api/users?page=1");case 5:return c=t.sent,t.next=8,c.json();case 8:r=t.sent,a.setState({first_name:r.data[n].first_name,last_name:r.data[n].last_name,id:r.data[n].id,email:r.data[n].email}),console.log(r),console.log(a.state),H.push(a.state);case 13:n++,t.next=2;break;case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a.refreshPage=function(){a.setState({reload:!0},(function(){return a.setState({reload:!1})}))},a.onChange=function(t){a.filterList(t),a.refreshPage(t)},a.filterList=a.filterList.bind(Object(f.a)(a)),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getDataApp().then((function(t){}))}},{key:"filterList",value:function(t){J=[],H.filter((function(e){return e.first_name.toLowerCase().includes("".concat(t.target.value.toLowerCase()))})).map((function(t){return J.push(t)}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"text-left",children:[Object(u.jsx)("input",{placeholder:"Search",onChange:this.onChange}),Object(u.jsx)(F,{data:J})]})}}]),n}(c.a.Component),G=E,I=[{path:"/",exact:!0,main:function(){return Object(u.jsx)(b,{})}},{path:"/table_outside",main:function(){return Object(u.jsx)(S,{})}},{path:"/table1",main:function(){return Object(u.jsx)(G,{})}}],q=function(t){Object(o.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:void 0,birth_year:void 0,height:void 0,mass:void 0},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(u.jsx)(h.a,{children:Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)("div",{style:{padding:"10px",width:"10%",background:"#f0f0f0"},children:Object(u.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:[Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/table_outside",children:"Table_local"})}),Object(u.jsx)("li",{children:Object(u.jsx)(h.b,{to:"/table1",children:"Table_remote"})})]})}),Object(u.jsx)("div",{style:{flex:1,padding:"10px"},children:Object(u.jsx)(j.c,{children:I.map((function(t,e){return Object(u.jsx)(j.a,{path:t.path,exact:t.exact,children:Object(u.jsx)(t.main,{})},e)}))})})]})})}}]),n}(c.a.Component),z=q,W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(z,{})}),document.getElementById("root")),W()}},[[40,1,2]]]);
//# sourceMappingURL=main.adea70df.chunk.js.map