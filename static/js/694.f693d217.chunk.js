"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{694:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,c=t(683),o=t(439),i=t(87),a=t(689),s=t(969),u=t(791),l=t(168),d=t(128),h=t(444),p=t(184),f=(0,h.ZP)(i.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n  :hover {\n    color: orangered;\n  }\n"]))),v=function(e){var n=e.to,t=e.children;return(0,p.jsxs)(f,{to:n,children:[(0,p.jsx)(d.jTe,{size:"24"}),t]})},j=function(){var e,n,t=(0,a.UO)().id,r=(0,a.TH)(),l=null!==(e=null===(n=r.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movie",d=(0,u.useState)([]),h=(0,o.Z)(d,2),f=h[0],j=h[1],x=(0,u.useState)(null),g=(0,o.Z)(x,2),m=g[0],w=g[1];return(0,u.useEffect)((function(){(0,s.wR)(t).then((function(e){j(e)})).catch((function(e){w(e),console.log(e)}))}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)(v,{to:l,children:"Back to movies"}),(0,p.jsxs)("div",{children:[!f&&(0,p.jsx)("div",{children:m}),(0,p.jsx)("img",{src:f.poster_path?"".concat("https://image.tmdb.org/t/p/w500").concat(f.poster_path):"https://via.placeholder.com/500x750",alt:""}),(0,p.jsxs)("div",{children:[(0,p.jsxs)("h2",{children:[f.title," (",t,")"]}),(0,p.jsxs)("p",{children:["User Score: ",f.vote_average]}),(0,p.jsx)("h3",{children:"Overview"}),(0,p.jsx)("p",{children:f.overview}),(0,p.jsx)("h3",{children:"Geners"}),(0,p.jsx)("ul",{children:f.genres&&f.genres.map((function(e){return(0,p.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"cast",state:(0,c.Z)({},r.state),children:"Cast"})}),(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"reviews",state:(0,c.Z)({},r.state),children:"Reviews"})})]}),(0,p.jsx)(u.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading subpage..."}),children:(0,p.jsx)(a.j3,{})})]})}},969:function(e,n,t){t.d(n,{Fg:function(){return l},Hx:function(){return p},KH:function(){return u},uV:function(){return f},wR:function(){return h}});var r=t(861),c=t(757),o=t.n(c),i=t(243),a="https://api.themoviedb.org/3/",s="5d369441bd67a61471936fd86df9d048",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return fetch("".concat(a,"trending/movie/day?api_key=").concat(s,"&page=").concat(e)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Sorry, something went wrong. Please, try againe later"))}))};function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function e(n){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(a,"search/movie?api_key=").concat(s,"&language=en-US&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=function(e){return fetch("".concat(a,"movie/").concat(e,"?api_key=").concat(s,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oopps...no movies info"))}))},p=function(e){return fetch("".concat(a,"movie/").concat(e,"/reviews?api_key=").concat(s,"&language=en-US")).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oopps...no reviews"))}))},f=function(e){return fetch("".concat(a,"movie/").concat(e,"/credits?api_key=").concat(s)).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oopps...no cast"))}))}}}]);
//# sourceMappingURL=694.f693d217.chunk.js.map