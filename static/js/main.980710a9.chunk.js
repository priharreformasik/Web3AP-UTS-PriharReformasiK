(this.webpackJsonpcodeuts=this.webpackJsonpcodeuts||[]).push([[0],{22:function(e,a,t){e.exports=t(36)},27:function(e,a,t){},28:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},29:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),o=(t(27),t(28),t(29),t(4)),s=t(6),i=t(16);var m=function(){var e=r.a.useState(!1),a=Object(i.a)(e,2),t=a[0],n=a[1],l=r.a.useState(""),c=Object(i.a)(l,2),m=c[0],u=c[1],d=Object(s.f)().pathname;return r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-4"},r.a.createElement("a",{className:"navbar-brand",href:"#!"},"Top navbar"),r.a.createElement("button",{onClick:function(){n(!t)},className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ".concat(t?"show":""),id:"navbarCollapse"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item ".concat("/"===d?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/blog")>-1?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/blog"},"Blog")),r.a.createElement("li",{className:"nav-item ".concat(d.indexOf("/about")>-1?"active":"")},r.a.createElement(o.b,{className:"nav-link",to:"/about"},"About")),r.a.createElement("li",{className:"nav-item ".concat("/#!"===d?"active":"")},r.a.createElement("a",{className:"nav-link disabled",href:"#!",tabIndex:"-1","aria-disabled":"true"},"Disabled"))),r.a.createElement("form",{className:"form-inline mt-2 mt-md-0",onSubmit:function(e){e.preventDefault(),fetch("/api/search/?searchValue="+m).then((function(e){return e.json()})).then((function(e){return e.search})).then((function(e){return alert(e)})).catch((function(e){return console.log(e)}))}},r.a.createElement("input",{className:"form-control mr-sm-2",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(e){var a=e.target.value;u(a)},value:m}),r.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",type:"submit"},"Search"))))},u=t(9),d=t(10),h=t(12),b=t(11);function v(e){var a=e.id,t=e.categoryName,n=e.title,l=e.postedAt,c=e.summary,s=e.imageUrl;return r.a.createElement("div",{className:"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"},r.a.createElement("div",{className:"col p-4 d-flex flex-column position-static"},r.a.createElement("strong",{className:"d-inline-block mb-2 text-primary"},t),r.a.createElement("h3",{className:"mb-0"},n),r.a.createElement("div",{className:"mb-1 text-muted"},l),r.a.createElement("p",{className:"card-text mb-auto"},c),r.a.createElement(o.b,{to:"/blog/"+a,className:"stretched-link"},"Continue reading")),r.a.createElement("div",{className:"col-auto d-none d-lg-block"},r.a.createElement("img",{className:"bd-placeholder-img",width:"200",height:"250","aria-label":"Placeholder: Thumbnail",src:s,alt:n})))}var g=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:[],isLoading:!0,error:null},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://dev-reservasi.technow.id/api/blog").then((function(e){return e.json()})).then((function(a){return e.setState({data:a.data,isLoading:!1,error:null})})).catch((function(a){e.setState({data:[],isLoading:!1,error:a.message})}))}},{key:"render",value:function(){return this.state.isLoading?"Loading...":null!==this.state.error?this.state.error:r.a.createElement("div",{className:"row mb-2"},this.state.data.map((function(e,a){return r.a.createElement("div",{className:"col-md-6",key:a},r.a.createElement(v,{id:e.id,categoryName:e.categoryName,title:e.title,postedAt:e.postedAt,summary:e.summary,imageUrl:e.imageUrl}))})))}}]),t}(r.a.Component);t(35);function p(e){var a=e.title,t=e.summary,n=e.imageUrl;return r.a.createElement("div",{className:"col-lg-8"},r.a.createElement("h1",{className:"mt-4"},a),r.a.createElement("img",{className:"img-fluid rounded",src:n,alt:a}),r.a.createElement("hr",null),r.a.createElement("p",{className:"lead"},t),r.a.createElement("hr",null))}var f=function(e){Object(h.a)(t,e);var a=Object(b.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={data:{},isLoading:!0,error:null},n}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.articleId;fetch("https://dev-reservasi.technow.id/api/blog/"+a).then((function(e){return e.json()})).then((function(a){return e.setState({data:a.data,isLoading:!1,error:null})})).catch((function(a){e.setState({data:[],isLoading:!1,error:a.message})}))}},{key:"render",value:function(){if(this.state.isLoading)return"Loading...";if(null!==this.state.error)return this.state.error;var e=this.state.data||{};return r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(p,{title:e.title,summary:e.summary,imageUrl:e.imageUrl})))}}]),t}(r.a.Component);var E=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(m,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/about"},"About"),r.a.createElement(s.a,{path:"/blog/:articleId",component:f}),r.a.createElement(s.a,{path:"/blog"},r.a.createElement(g,null)),r.a.createElement(s.a,{path:"/"},"Home"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(o.a,{basename:"/Web3AP-UTS-PriharReformasiK"},r.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.980710a9.chunk.js.map