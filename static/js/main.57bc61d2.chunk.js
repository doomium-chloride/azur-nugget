(this["webpackJsonpazur-nugget"]=this["webpackJsonpazur-nugget"]||[]).push([[0],{119:function(e,t,a){e.exports=a(240)},124:function(e,t,a){},145:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),c=a.n(i),l=(a(124),a(27)),s=a(28),o=a(29),u=a(63),m=a(62),h=a(280),d=a(287),p=a(283),v=a(289),f=a(286),E=a(290),g=["light","heavy","aviation","limited"],b=a(275),y=a(277),j=a(278),x=a(279),w=a(242),N=a(10),k=a(272),O=Object(k.a)((function(e){return{root:{display:"flex",padding:"5%"},details:{display:"flex",flexDirection:"row"},content:{flex:"1 0 auto"},cover:{width:151},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}}));function C(e,t){return function(){return e.push("/ship/".concat(t.names.en,"/").concat(t.names.code))}}var S=function(e){var t=e.ship,a=Object(N.e)(),n=function(e){for(var t=[],a=e.construction.availableIn,n=0;n<g.length;n++){var r=g[n];a[r]&&("limited"==r?t.push(a.limited):"aviation"==r?t.push("special"):t.push(r))}return t.join(", ")}(t),i=O();return r.a.createElement(b.a,{className:i.root},r.a.createElement(y.a,{className:i.details,onClick:C(a,t)},r.a.createElement(j.a,{title:t.names.code},r.a.createElement("img",{src:t.thumbnail,width:"166px",height:"166px"})),r.a.createElement(x.a,{className:i.content},r.a.createElement(w.a,{gutterBottom:!0,variant:"h5",component:"h2"},t.names.en),r.a.createElement(w.a,{variant:"h6",color:"textSecondary",component:"h4"},t.rarity),r.a.createElement(w.a,{variant:"h6",component:"h4"},n),r.a.createElement(w.a,{variant:"caption",component:"h5"},t.construction.constructionTime))))};function I(e){return e<10?"0"+e:""+e}function H(e){var t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])+parseInt(t[2])/60}function L(e,t){var a=H(e),n=H(t);return Math.abs(a-n)}var A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={seconds:0,minutes:0,hours:0,data:e.ships,filter:"none"},n}return Object(o.a)(a,[{key:"hourHandler",value:function(e){var t=e.target.value;t||(t=0),this.setState({hours:t})}},{key:"minuteHandler",value:function(e){var t=e.target.value;t||(t=0),this.setState({minutes:t})}},{key:"secondHandler",value:function(e){var t=e.target.value;t||(t=0),this.setState({seconds:t})}},{key:"filterHandler",value:function(e){var t=e.target.value;this.setState({filter:t})}},{key:"searchShip",value:function(e){var t=[];return this.state.data.forEach((function(a){var n,r=a.construction.constructionTime;n=5,L(e,r)<n&&t.push(a)})),t.sort((function(t,a){return L(t.construction.constructionTime,e)-L(a.construction.constructionTime,e)})),t}},{key:"render",value:function(){var e=[];if(this.state.data){var t=function(e,t,a){var n=I(e),r=I(t),i=I(a);return"".concat(n,":").concat(r,":").concat(i)}(this.state.hours,this.state.minutes,this.state.seconds);"00:00:00"!=t&&(e=this.searchShip(t));var a=this.state.filter;switch(a){case"light":case"heavy":case"aviation":case"limited":e=function(e,t){for(var a=e.length,n=[],r=0;r<a;r++){var i=e[r];i.construction.availableIn[t]&&n.push(i)}return n}(e,a)}}return r.a.createElement("div",null,r.a.createElement("h1",null,"Enter build time"),r.a.createElement(h.a,{container:!0,spacing:1,style:{paddingLeft:"5%",width:"100%"}},r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(d.a,{id:"build-hours",label:"Hours",type:"number",InputProps:{inputProps:{min:0,max:99}},variant:"outlined",onChange:this.hourHandler.bind(this),fullWidth:!0})),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(d.a,{id:"build-minutes",label:"Minutes",type:"number",InputProps:{inputProps:{min:0,max:59}},variant:"outlined",onChange:this.minuteHandler.bind(this),fullWidth:!0})),r.a.createElement(h.a,{item:!0,xs:5},r.a.createElement(p.a,{fullWidth:!0},r.a.createElement(v.a,{id:"build-filter-label"},"Build filter"),r.a.createElement(f.a,{labelId:"build-filter",id:"select-build-filter",value:this.state.filter,onChange:this.filterHandler.bind(this),variant:"outlined"},r.a.createElement(E.a,{value:"none"},"No Filter"),r.a.createElement(E.a,{value:"light"},"Light"),r.a.createElement(E.a,{value:"heavy"},"Heavy"),r.a.createElement(E.a,{value:"aviation"},"Special"),r.a.createElement(E.a,{value:"limited"},"Event"))))),r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(S,{key:"ship-"+t,ship:e})}))))}}]),a}(r.a.Component),P=a(241),B=Object(k.a)((function(e){return{layer:{padding:"auto",height:"100%",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center"},content:{flex:"1 0 auto"},section:{marginBottom:"1vh"},title:{padding:"auto",height:"100%",width:"95%",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center"},main:{padding:"0 1vw"}}}));function W(e,t){var a=t.split("skills/"),n="skills/"+e+"/";return a&&2==a.length&&function(e){var t=e.split("/");if(t.length>0){var a=t[0];return isNaN(a)}return!1}(a[1])?a[0]+n+a[1]:t}function z(e,t){return e.names.en.toLowerCase()===t.toLowerCase()||(!(!e.names.jp||e.names.jp!==t)||!(!e.names.en||e.names.en!==t))}var M=function(){var e=B(),t=Object(n.useContext)(ce),a=Object(N.f)(),i=a.name,c=a.code;if(!i)return null;var l=t.byNameSearcher.search(i);if(l.length<=0)return null;var s=function(e,t,a){if(a)for(var n=0;n<e.length;n++){var r=e[n];if(r.names.code===a&&z(r,t))return r}return e[0]}(l,i,c);return r.a.createElement("div",{className:e.main},r.a.createElement(h.a,{container:!0,spacing:3,alignItems:"stretch",justify:"center",className:e.section},r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(P.a,null,r.a.createElement("img",{src:s.thumbnail,width:"166px",height:"166px"}))),r.a.createElement(h.a,{container:!0,spacing:1,item:!0,xs:8,alignItems:"stretch",direction:"row",justify:"space-evenly"},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(P.a,{className:e.layer},r.a.createElement(w.a,{component:"h4",variant:"h4"},function(e){switch(e.nationality.toLowerCase()){case"sakura empire":return e.names.jp||e.names.en;case"dragon empery":return e.names.cn||e.names.en;default:return e.names.en}}(s)))),r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(P.a,{className:e.layer},r.a.createElement(w.a,{component:"h4",variant:"h4"},s.names.code))))),r.a.createElement("div",{id:"ship-skills"},r.a.createElement(h.a,{container:!0,spacing:3,alignItems:"stretch",justify:"center",className:e.section},r.a.createElement(P.a,{className:e.title},r.a.createElement(w.a,{component:"h3",variant:"h3"},"Skills"))),s.skills.map((function(t,a){return r.a.createElement(h.a,{container:!0,spacing:3,alignItems:"stretch",justify:"center",className:e.section},r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(P.a,null,r.a.createElement("img",{src:W(s.id,t.icon),width:"128px",height:"128px"}))),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(P.a,{className:e.layer,style:{backgroundColor:t.color}},r.a.createElement(w.a,{component:"h5",variant:"h5"},t.names.en||t.names.jp||t.names.cn||t.names.kr||"No name?"))),r.a.createElement(h.a,{item:!0,xs:6},r.a.createElement(P.a,{className:e.layer},r.a.createElement(w.a,{component:"p",variant:"body1"},t.description))))}))))};var D=a(108),T=a.n(D),F=Object(k.a)((function(e){return{main:{padding:"0 1vw"}}}));var J=function(){var e=Object(n.useContext)(ce),t=Object(N.e)(),a=F(),i=Object(N.f)().name,c=Object(n.useState)(i||""),s=Object(l.a)(c,2),o=s[0],u=s[1],m=Object(n.useState)([]),p=Object(l.a)(m,2),v=p[0],f=p[1],E=Object(n.useCallback)(T()((function(a){if(a){var n=e.byNameSearcher.search(a);f(n)}else f([]);!function(e,t){e.push("/".concat("ships","/").concat(t))}(t,a)}),500),[]);Object(n.useEffect)((function(){return E(o),E.cancel}),[o,E]);var g=function(e,t){var a=-1;if(e.forEach((function(e,n){z(e,t)&&(a=n)})),-1!==a){var n=e.splice(a,1),r=Object(l.a)(n,1)[0];return e.unshift(r),e}return e}(v,o);return r.a.createElement("div",{className:a.main},r.a.createElement("h1",null,"Enter ship name"),r.a.createElement(h.a,{container:!0,spacing:1},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement(d.a,{id:"search4ship",label:"Ship name",type:"text",variant:"outlined",onChange:function(e){return u(e.target.value)},value:o,fullWidth:!0}))),r.a.createElement("div",null,g.map((function(e,t){return r.a.createElement(S,{key:"ship-"+t,ship:e})}))))},R=a(45),U=a(284),X=Object(k.a)((function(e){return{navbar:{padding:"0 1vw",width:"100vw"}}}));var Y=function(){var e=Object(N.e)(),t=X();return r.a.createElement(h.a,{container:!0,spacing:2,alignItems:"center",className:t.navbar},r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){return e.push("/")}},"Home")),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){return e.push("/ships")}},"Ships")),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){return e.push("/build")}},"Build time")),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){return e.push("/rate")}},"Build rate")),r.a.createElement(h.a,{item:!0,xs:!0},r.a.createElement(U.a,{onClick:function(){return e.push("/juust")}},"Juust")))},$=a(61),q=a.n($);var G=function e(t){var a=t.data,n=a.name,i=(a.icon,a.post),c="undefined"===typeof a.replies?[]:a.replies;return r.a.createElement("div",{className:"juust-reply"},r.a.createElement("div",{className:"juust-reply-main"},n),r.a.createElement("div",{className:"juust-reply-content"},i),r.a.createElement("div",{className:"juust-subreply"},c.map((function(t,a){return r.a.createElement(e,{data:t,key:"reply-"+n+a})}))))};var K=function(e){var t=e.data,a=t.replies,n=t.picture,i=t.post,c=t.name;return r.a.createElement("div",{className:"juust-post"},r.a.createElement("div",{className:"juust-main"},r.a.createElement("div",{className:"juust-name"},c),r.a.createElement("div",{className:"juust-text"},i),r.a.createElement("div",{className:"juust-pic"},r.a.createElement("img",{src:n}))),r.a.createElement("div",{className:"juust-replies"},a.map((function(e,t){return r.a.createElement(G,{data:e,key:"comment-"+c+t})}))))},Q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={data:null,limit:5},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;q.a.get("https://nimii.now.sh/api/social/").then((function(t){var a=t.data.entries;e.setState({data:a})})).catch((function(){console.error("Problem loading Jusstagram")}))}},{key:"loadMore",value:function(){var e=this.state.limit+5;this.setState({limit:e})}},{key:"render",value:function(){var e=[],t=this.state.data,a=this.state.limit;return t&&(e=t.slice(0,a)),r.a.createElement("div",{className:"juustagram"},r.a.createElement("div",{className:"juustagram-posts"},e.map((function(e,t){return r.a.createElement(K,{data:e,key:"post-"+t})}))),r.a.createElement("div",{className:"extra-top-margin extra-bottom-margin"},r.a.createElement(U.a,{variant:"outlined",onClick:this.loadMore.bind(this)},"Load more")))}}]),a}(r.a.Component),V=a(110);a(145);var Z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Azur Nugget"),r.a.createElement("p",null,"This is still work in progress. You can navigate using the nav bar on top."),r.a.createElement("p",null,"Uses AzurAPI and nimii."))},_=a(109),ee=a(291),te=a(285),ae=Object(k.a)((function(e){return{layer:{padding:"auto",height:"100%",margin:"auto",display:"flex",flexDirection:"column",justifyContent:"center"},content:{flex:"1 0 auto"},section:{marginBottom:"1vh"},title:{marginBottom:"3%"},main:{padding:"1vw"},chart:{padding:"0 5vh",overflowX:"hidden"}}})),ne={maintainAspectRatio:!1,scales:{yAxes:[{scaleLabel:{display:!0,labelString:"Chance to get at least one ship"},ticks:{callback:function(e,t,a){return re(e)}}}],xAxes:[{scaleLabel:{display:!0,labelString:"Number of builds"}}]},tooltips:{callbacks:{label:function(e,t){var a=t.datasets[e.datasetIndex].label||"";return a&&(a+=" = "),a+=re(e.yLabel,2),a}}}};function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=100*e;return null!==t&&(a=a.toFixed(t),parseFloat(a)>=100&&(a="almost 100")),"".concat(a,"%")}var ie=function(){var e=ae(),t=Object(n.useState)(100),a=Object(l.a)(t,2),i=a[0],c=a[1],s=Object(n.useState)(2),o=Object(l.a)(s,2),u=o[0],m=o[1],p=parseFloat(u+"")/100,v=function(e){if(e<=0)return[];for(var t=new Array,a=0;a<e;a++)t.push(a);return t}(i),f=function(e,t){var a=new Array;return e.forEach((function(e){var n=t(e);a.push(n)})),a}(v,(function(e){return t=p,a=e,1-Math.pow(1-t,a);var t,a})),E={labels:v,datasets:[{label:"Chance of getting a ship of rate ".concat(u,"%"),data:f}]},g=function(e){var t;t=void 0!==window.innerHeight?window.innerHeight:document.documentElement.clientHeight;return t*e/100}(60),b=function(e){var t;t=void 0!==window.innerWidth?window.innerWidth:document.documentElement.clientWidth;return t*e/100}(90);return r.a.createElement("div",{className:e.main},r.a.createElement("h1",{className:e.title},"Chance to get at least one rate up ship"),r.a.createElement(h.a,{container:!0,spacing:3,alignItems:"stretch",justify:"center"},r.a.createElement(h.a,{item:!0,xs:5},r.a.createElement(ee.a,{"aria-labelledby":"discrete-slider",valueLabelDisplay:"auto",value:i,onChange:function(e,t){c(t)},step:1,marks:!0,min:0,max:600})),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(d.a,{label:"Number of builds",type:"number",variant:"outlined",value:i,onChange:function(e){c(e.target.value)},InputProps:{inputProps:{min:0}}})),r.a.createElement(h.a,{item:!0,xs:3},r.a.createElement(d.a,{label:"Build rate",type:"number",variant:"outlined",value:u,InputProps:{inputProps:{min:0,max:100,step:.5},endAdornment:r.a.createElement(te.a,{position:"end"},"%")},onChange:function(e){m(e.target.value)}}))),r.a.createElement("div",{className:e.chart},r.a.createElement(_.Line,{data:E,options:ne,width:b,height:g})))},ce=Object(n.createContext)({ships:[]}),le={sort:!0,caseSensitive:!1},se=["names.code","names.en","names.jp","names.cn"];var oe=function(){var e=Object(n.useState)(void 0),t=Object(l.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)((function(){q.a.get("https://raw.githubusercontent.com/AzurAPI/azurapi-js-setup/master/ships.json").then((function(e){var t=e.data;i({ships:t,byNameSearcher:new V.a(t,se,le)})})).catch((function(){console.error("shipInfoURL fetch error")}))}),[]),a?r.a.createElement(ce.Provider,{value:a},r.a.createElement(R.a,{basename:"/azur-nugget"},r.a.createElement(Y,null),r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{path:"/build",render:function(e){return r.a.createElement(A,Object.assign({},e,{ships:a.ships}))}}),r.a.createElement(N.a,{path:"/juust",component:Q}),r.a.createElement(N.a,{path:"/rate",component:ie}),r.a.createElement(N.a,{exact:!0,path:"/ship/:name/:code?",component:M}),r.a.createElement(N.a,{path:"/ships/:name?",component:J}),r.a.createElement(N.a,{exact:!0,path:"/",component:Z})))):(console.log("no data"),null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[119,1,2]]]);
//# sourceMappingURL=main.57bc61d2.chunk.js.map