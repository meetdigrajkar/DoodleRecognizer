(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{225:function(e,t,n){},386:function(e,t,n){},387:function(e,t,n){},388:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(55),o=n.n(r),i=(n(225),n(25)),s=n(22),l=n(26),j=n(27),u=n(422),d=n(410),h=n(407),b=n(23),O=n(3),x=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(b.b,{render:function(t){var n=t.history;return Object(O.jsx)(h.a,{color:"inherit",onClick:function(){n.push(e.props.url)},children:e.props.text})}})}}]),n}(c.a.Component),p=n(408),f=n(409),m=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)(b.b,{render:function(t){var n=t.history;return Object(O.jsx)(p.a,{onClick:function(){n.push(e.props.url)},children:Object(O.jsx)(f.a,{style:{fontSize:30},children:Object(O.jsx)("img",{alt:"edit",src:e.props.icon})})})}})}}]),n}(c.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(O.jsx)("div",{style:{flexGrow:1},children:Object(O.jsx)(u.a,{position:"static",style:{background:"lightblue"},children:Object(O.jsxs)(d.a,{style:{background:"#3298dc"},children:[Object(O.jsx)(m,{url:"/home",icon:"favicon.ico"}),Object(O.jsx)(x,{url:"/draw",text:"Draw"}),Object(O.jsx)(x,{url:"/about",text:"About"})]})})})}}]),n}(c.a.Component),g=n(28),y=n(416),C=n(421),w=n(417),k=n(418),D=c.a.createContext(),R=function(e){var t=e.children,n=Object(a.useState)(!1),c=Object(g.a)(n,2),r=c[0],o=c[1],i=Object(a.useRef)(null),s=Object(a.useRef)(null);return Object(O.jsx)(D.Provider,{value:{canvasRef:i,contextRef:s,prepareCanvas:function(){var e=i.current;e.width=.35*window.innerWidth*2,e.height=window.innerHeight,e.style.width="".concat(.35*window.innerWidth,"px"),e.style.height="".concat(.5*window.innerHeight,"px"),e.style.borderRadius="16px",e.style.boxShadow="rgb(145 158 171 / 24%) 0px 0px 2px 0px, rgb(145 158 171 / 24%) 0px 16px 32px -4px";var t=e.getContext("2d");t.scale(2,2),t.lineCap="round",t.strokeStyle="black",t.lineWidth=2.5,s.current=t},startDrawing:function(e){var t=e.nativeEvent,n=t.offsetX,a=t.offsetY;s.current.beginPath(),s.current.moveTo(n,a),o(!0)},finishDrawing:function(){s.current.closePath(),o(!1)},clearCanvas:function(){var e=i.current,t=e.getContext("2d");t.fillStyle="white",t.fillRect(0,0,e.width,e.height)},draw:function(e){var t=e.nativeEvent;if(r){var n=t.offsetX,a=t.offsetY;s.current.lineTo(n,a),s.current.stroke()}},saveCanvas:function(){return i.current.toDataURL()}},children:t})},B=n(192),S=n.n(B),N=n(411),T=n(415),E=n(208),F=n(209),M=n(95),A=n(212),z=n(207),H=["Bear","Bee","Bird","Cat","Cow","Crocodile","Dog","Elephant","Giraffe","Horse"],P=["#E74C3C","#8E44AD","#3498DB","#16A085","#2ECC71","#F39C12","#D35400","#BDC3C7","#7F8C8D","#2C3E50"],G=[{name:"Bear",count:0},{name:"Bee",count:0},{name:"Bird",count:0},{name:"Cat",count:0},{name:"Cow",count:0},{name:"Crocodile",count:0},{name:"Dog",count:0},{name:"Elephant",count:0},{name:"Giraffe",count:0},{name:"Horse",count:0}],W=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={data:G,render:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)(N.a,{width:.4*window.innerWidth,height:.54*window.innerHeight,data:0===this.props.data.length?G:this.props.data,children:[Object(O.jsx)(T.a,{strokeDasharray:"3 3"}),Object(O.jsx)(E.a,{dataKey:"name"}),Object(O.jsx)(F.a,{}),Object(O.jsx)(M.a,{}),Object(O.jsx)(A.a,{dataKey:"count",fill:"#000000",children:0!==this.props.data.length&&this.props.data.map((function(e,t){return Object(O.jsx)(z.a,{fill:P[t],strokeWidth:2===t?4:1},"cell-".concat(t))}))})]}),"1"===this.props.algorithm?"Count":"Percentage"]})}}]),n}(c.a.Component);function J(){var e=Object(a.useContext)(D),t=e.canvasRef,n=e.prepareCanvas,c=e.startDrawing,r=e.finishDrawing,o=e.saveCanvas,i=e.draw,s=e.clearCanvas,l=Object(a.useState)([]),j=Object(g.a)(l,2),u=j[0],d=j[1],b=Object(a.useState)("1"),x=Object(g.a)(b,2),p=x[0],f=x[1];Object(a.useEffect)((function(){n()}),[]);return Object(O.jsxs)("div",{children:[Object(O.jsxs)(y.a,{style:{marginTop:"5vh"},children:[Object(O.jsxs)(C.a,{value:p,onChange:function(e){f(e.target.value)},children:[Object(O.jsx)("option",{value:1,children:"OpenCV Patched-Base Template Matching"}),Object(O.jsx)("option",{value:2,children:"Neural Network Convolution"})]}),Object(O.jsx)(w.a,{children:"Select Doodle Recognition Algorithm"})]}),Object(O.jsxs)(k.a,{container:!0,justify:"center",style:{flexGrow:1,marginTop:"5vh"},spacing:0,children:[Object(O.jsxs)(k.a,{item:!0,children:[Object(O.jsx)("div",{children:Object(O.jsx)("canvas",{onMouseDown:c,onMouseUp:r,onMouseMove:i,ref:t})}),Object(O.jsx)(h.a,{style:{margin:"5px"},color:"primary",variant:"contained",onClick:function(){!function(e,t){var n={imgBase64:e,algorithm:t};S.a.post("http://localhost:5000/api/doodle/",n).then((function(e){var t=JSON.parse(e.data);console.log(t),n=[{name:"Bear",count:t[0]},{name:"Bee",count:t[1]},{name:"Bird",count:t[2]},{name:"Cat",count:t[3]},{name:"Cow",count:t[4]},{name:"Crocodile",count:t[5]},{name:"Dog",count:t[6]},{name:"Elephant",count:t[7]},{name:"Giraffe",count:t[8]},{name:"Horse",count:t[9]}],console.log(n),d(n)})).catch((function(e){console.log(e)}))}(o(),p)},children:"Recognize"}),Object(O.jsx)(h.a,{style:{margin:"5px"},color:"secondary",variant:"contained",onClick:function(){d([]),s()},children:"Clear Canvas"})]}),Object(O.jsx)(k.a,{item:!0,children:Object(O.jsx)("div",{style:{height:"50vh"},children:Object(O.jsx)(W,{data:u,algorithm:p})})})]})]})}var L=n(49),I=n(419),K=n(210),U=n.n(K),V=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={category:H[0]},a.getRandomCategory=a.getRandomCategory.bind(Object(L.a)(a)),a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getRandomCategory()}},{key:"getRandomCategory",value:function(){var e;do{e=Math.floor(Math.random()*H.length)}while(H[e]===this.state.category);this.setState({category:H[e]})}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(I.a,{style:{paddingTop:"10px",color:"#3298dc",fontFamily:"wearedimdam"},variant:"h2",children:"Welcome to Doodle Recognizer"}),Object(O.jsxs)(k.a,{container:!0,justify:"center",style:{flexGrow:1},spacing:0,children:[Object(O.jsx)(k.a,{item:!0,children:Object(O.jsxs)(I.a,{style:{marginRight:"5px",marginTop:"5px",fontFamily:"rainday"},variant:"h6",children:["Draw ",this.state.category,"!"]})}),Object(O.jsx)(k.a,{item:!0,children:Object(O.jsx)(p.a,{onClick:this.getRandomCategory,children:Object(O.jsx)(U.a,{style:{color:"#3298dc"},fontSize:"small"})})})]})]})}}]),n}(c.a.Component),X=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(V,{}),Object(O.jsx)(J,{})]})}}]),n}(c.a.Component),Y=n(105),q=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(I.a,{style:{paddingTop:"10px",color:"#3298dc",fontFamily:"wearedimdam"},variant:"h2",children:"About Doodle Recognizer"}),Object(O.jsx)("section",{className:"section",style:{textAlign:"start",margin:"20px"},children:Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"content is-normal has-text-primary-light",children:[Object(O.jsx)("h2",{className:"has-text-danger",children:"Algorithms Supported"}),Object(O.jsx)("p",{children:"The doodle recognizer project uses two algorithms neural networks convolution and OpenCV patch based template matching to recognize the doodle drawn by the user."})]})})})]})}}]),n}(c.a.Component),Q=(n(386),function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(I.a,{style:{paddingTop:"10px",color:"#3298dc",fontFamily:"wearedimdam"},variant:"h2",children:"Home Doodle Recognizer"}),Object(O.jsx)("section",{className:"section",style:{textAlign:"start",margin:"20px"},children:Object(O.jsx)("div",{className:"box",children:Object(O.jsxs)("div",{className:"content is-normal has-text-primary-light",children:[Object(O.jsx)("h2",{className:"has-text-danger",children:"Our system"}),Object(O.jsx)("p",{children:"Draw a doodle from a category and we will identify parts of it, and give you data on which category your doodle was from! The categories below are what we support at this moment."}),Object(O.jsx)("ul",{className:"has-text-warning",children:H.map((function(e){return Object(O.jsxs)("li",{children:[" ",e]},e)}))})]})})})]})}}]),n}(c.a.Component)),Z=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{style:{height:"100vh"},children:Object(O.jsxs)(Y.a,{children:[Object(O.jsx)(v,{}),Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/home",exact:!0,component:function(){return Object(O.jsx)(Q,{})}}),Object(O.jsx)(b.b,{path:"/draw",component:function(){return Object(O.jsx)(X,{})}}),Object(O.jsx)(b.b,{path:"/about",component:function(){return Object(O.jsx)(q,{})}}),Object(O.jsx)(b.b,{render:function(){return Object(O.jsx)(b.a,{to:"/home"})}})]})]})})}}]),n}(c.a.Component);n(387);var $=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(Z,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,423)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};o.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(R,{children:Object(O.jsx)($,{})})}),document.getElementById("root")),_()}},[[388,1,2]]]);
//# sourceMappingURL=main.3480656c.chunk.js.map