(this.webpackJsonpmvp_front=this.webpackJsonpmvp_front||[]).push([[0],{119:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},125:function(e,t,n){},144:function(e,t,n){},145:function(e,t,n){},148:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(32),s=n.n(r),l=(n(96),n(97),n(98),n(119),n(7)),i=(n(120),n(121),n(122),n.p+"static/media/index.ffb78d9f.png"),o=n(18),d=n(0);function j(e){return Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsx)("div",{children:Object(d.jsx)("div",{onClick:function(){return e.handleRouteChange("home")},href:"",children:Object(d.jsx)("img",{src:i,height:"60",alt:"Invoca Logo"})})}),Object(d.jsxs)("div",{className:"dropdown",children:[Object(d.jsx)("button",{className:"dropbtn",children:Object(d.jsxs)("div",{className:"dashrect",children:["Dashboard",Object(d.jsx)("div",{className:"weight1"}),Object(d.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAB6UlEQVR4nO3ZwUrDQBSF4b8urPriBRFcd6EP4UJ8IjcKglpcxkU7UELapunMnXsz54Msmzn3GEvoBRERERERERERERERkQYtdpeZW2AN/AIfwD2wtAxgbAk8AF/AH/AE3FkcvAa63vXKPMtesp2tP+9z6YMXwM/AwXMs+1DJHbABrkoH+D5w+JzKPlZyx7aD4h6PBJhD2adK7th24CJI1LLdzXYNvJwI9AbcWAXKwO1MboNN4H4W9wFHCDNDmKADwmUPF5iYmYFYwSNlHRRhgAgZR/E8iOdsk3gcyGOmLDwN5ilLER4G9JDBRM1Bmyk5qTFwcyUnloM3W3Ji8TNkqTOqLWc3wCfnL2dLll3i3qGXs6UKsbpnqOVszmKs/3DhlrM5Cqrx3xFyOXtJUbW+gsIuZ6fc00uOokq8p55zz9rnm6r5RM3+Se6r9WQ18ST3eSp7tiUnHsqefclJzbKbKTmpUXZzJSeWZTdbclLq1W8FvO+u1YTPu36Fm8rT0+MpSxEeBvSQwYSWs4a0nDWk5awhiwKaLzkpWYRK7mnq9+Tachajkk/IUZBKHumSolTymaYUppInqr2cbUqt5WyTrJezTbNazgrll7Oyp9RyVgbkXs7KEbmWszLCpctZEREREREREREREannH5sKKeMsgg8LAAAAAElFTkSuQmCC",alt:"down",className:"downarrow"})]})}),Object(d.jsxs)("div",{class:"dropdown-content",children:[!1===e.loggedin&&Object(d.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleRouteChange("login")},href:"",children:"Login"}),!0===e.loggedin&&Object(d.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleRouteChange("logout")},href:"",children:"Logout"})]})]})]})})}var u=n(14),b=n.n(u),h=n(26),m=(n(125),n.p+"static/media/arrow.cb0d1ffd.svg"),x=n(27),O=n.n(x);var p=function(e){function t(){return(t=Object(h.a)(b.a.mark((function t(n,a,c){var r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&a&&c){t.next=4;break}alert("fill in information!"),t.next=16;break;case 4:return t.prev=4,t.next=7,O.a.post("/users/register",{email:n,password:c,invocaPhone:a});case 7:r=t.sent,console.log(r.data),e.handleLogIn(r.data),e.handleRouteChange("home"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))).apply(this,arguments)}return Object(d.jsx)("div",{class:"h-screen",children:Object(d.jsx)("div",{className:"backgroundregister",children:Object(d.jsxs)("div",{className:"registersquare",children:[Object(d.jsx)("div",{className:"logintext",children:"Register"}),Object(d.jsx)("div",{className:"welcometext",children:"Glad to finally meet you"}),Object(d.jsxs)("div",{style:{padding:20},children:[Object(d.jsx)("div",{className:"smalltext",children:"Email address"}),Object(d.jsx)("input",{className:"filloutbars",type:"text",id:"gmail"})]}),Object(d.jsxs)("div",{style:{padding:20},children:[Object(d.jsx)("div",{className:"smalltext",children:"Your Phone Number"}),Object(d.jsx)("input",{className:"filloutbars",type:"text",pattern:"[0-9]*",id:"phone"})]}),Object(d.jsxs)("div",{style:{padding:20},children:[Object(d.jsx)("div",{className:"smalltext",children:"Password"}),Object(d.jsx)("input",{className:"filloutbars",type:"password",id:"password"})]}),Object(d.jsxs)("div",{className:"createrow",children:[Object(d.jsxs)("div",{className:"createcolumn",children:[Object(d.jsx)("div",{className:"newaccount",children:"Already have an account?"}),Object(d.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleRouteChange("login")},href:"",children:"Login to Account"})]}),Object(d.jsx)("div",{className:"jankfix",children:Object(d.jsx)("div",{id:"circle",onClick:function(){return function(e,n,a){return t.apply(this,arguments)}(document.getElementById("gmail").value,document.getElementById("phone").value,document.getElementById("password").value)},children:Object(d.jsx)("img",{src:m,alt:"arrow",className:"ellipse"})})})]})]})})})};n(144);var v=function(e){return Object(d.jsx)("div",{class:"h-screen w-screen",children:Object(d.jsx)("div",{className:"backgroundprofile",children:Object(d.jsx)("ul",{children:Object.keys(e.user).map((function(t,n){return("_id"===t||"email"===t||"invocaPhone"===t)&&Object(d.jsx)("li",{children:e.user[t]})}))})})})};n(145);var g=function(e){function t(){return(t=Object(h.a)(b.a.mark((function t(n,a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n&&a){t.next=4;break}alert("fill in information!"),t.next=16;break;case 4:return t.prev=4,t.next=7,O.a.post("/users/login",{email:n,password:a});case 7:c=t.sent,console.log(c.data),e.handleLogIn(c.data),e.handleRouteChange("home"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(4),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[4,13]])})))).apply(this,arguments)}return Object(d.jsx)("div",{className:"backgroundlogin",children:Object(d.jsxs)("div",{className:"loginsquare",children:[Object(d.jsx)("div",{className:"logintext",children:"Login"}),Object(d.jsx)("div",{className:"welcometext",children:"Welcome to Invoca!"}),Object(d.jsxs)("div",{style:{padding:20},children:[Object(d.jsx)("div",{className:"smalltext",children:"Email address"}),Object(d.jsx)("input",{className:"filloutbars",type:"text",id:"gmail"})]}),Object(d.jsxs)("div",{style:{padding:20},children:[Object(d.jsx)("div",{className:"smalltext",children:"Password"}),Object(d.jsx)("input",{className:"filloutbars",type:"password",id:"password"})]}),Object(d.jsxs)("div",{className:"createrow",children:[Object(d.jsxs)("div",{className:"createcolumn",children:[Object(d.jsx)("div",{className:"newaccount",children:"New here?"}),Object(d.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleRouteChange("register")},href:"",children:"Create an Account"})]}),Object(d.jsx)("div",{className:"jankfix",children:Object(d.jsx)("div",{id:"circle",onClick:function(){return function(e,n){return t.apply(this,arguments)}(document.getElementById("gmail").value,document.getElementById("password").value)},children:Object(d.jsx)("img",{src:m,alt:"arrow",className:"ellipse"})})})]})]})})},f=n(10),y=n(2),C=n(34);function k(e){var t=Object(a.useState)({}),n=Object(l.a)(t,2),c=n[0],r=n[1],s=function(e){var t=e.target.name,n=e.target.value;r((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(f.a)({},t,n))}))},i=function(){var t=Object(h.a)(b.a.mark((function t(n){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,O.a.post("callLogs",{userId:e.user[Object.keys(e.user)[0]],phoneNumber:c.phoneNumber,entireCall:c.entireCall,callSummary:c.callSummary,sentimentAnalysis:c.sentimentAnalysis});case 4:a=t.sent,console.log(a.data),e.handleRouteChange("home"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0);case 12:alert("Updated!"),r({});case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{children:Object(d.jsxs)(C.a,{onSubmit:i,id:"submit-form",children:[Object(d.jsxs)(C.a.Group,{className:"mb-3",children:[Object(d.jsx)(C.a.Label,{children:"Phone Number"}),Object(d.jsx)(C.a.Control,{type:"text",name:"phoneNumber",value:c.phoneNumber,onChange:s,placeholder:"Enter phone number"})]}),Object(d.jsxs)(C.a.Group,{className:"mb-3",children:[Object(d.jsx)(C.a.Label,{children:"Summary"}),Object(d.jsx)(C.a.Control,{type:"text",name:"callSummary",value:c.callSummary,onChange:s,placeholder:"Enter call summary"})]}),Object(d.jsxs)(C.a.Group,{className:"mb-3",children:[Object(d.jsx)(C.a.Label,{children:"Call Transcript"}),Object(d.jsx)(C.a.Control,{type:"text",name:"entireCall",value:c.entireCall,onChange:s,placeholder:"Enter call transcript"})]}),Object(d.jsxs)(C.a.Group,{className:"mb-3",children:[Object(d.jsx)(C.a.Label,{children:"Sentiment Analysis"}),Object(d.jsx)(C.a.Control,{type:"text",name:"sentimentAnalysis",value:c.sentimentAnalysis,onChange:s,placeholder:"Enter sentiment analysis"}),Object(d.jsx)(C.a.Text,{className:"text-muted",children:"Sentiment takes in 0 or 1 (to be updated in future)."})]}),Object(d.jsx)(o.a,{variant:"primary",type:"submit",disabled:!c.phoneNumber||!c.entireCall||!c.callSummary||!c.sentimentAnalysis,children:"Submit"})]})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(o.a,{variant:"secondary",onClick:function(){return e.handleRouteChange("home")},href:"",children:"Exit"})})]})}var w=n(51),N=n(72),A=n(73),S=n(38);n(148);function R(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),j=i[0],u=i[1],m=Object(a.useState)(!0),x=Object(l.a)(m,2),p=x[0],v=x[1],g=Object(a.useState)(!0),k=Object(l.a)(g,2),R=k[0],E=k[1],L=Object(a.useState)([{callerID:"Bryan",phone:"12345",summary:"dummy data",status:"default"}]),I=Object(l.a)(L,2),D=I[0],T=I[1],B=Object(a.useState)([]),P=Object(l.a)(B,2),F=P[0],K=P[1],U=Object(a.useState)(""),q=Object(l.a)(U,2),z=q[0],J=q[1],M=Object(a.useState)(""),W=Object(l.a)(M,2),G=W[0],Y=W[1],H=function(){v(!0),r(!1),E(!0)},X=function(){var t=Object(h.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="callLogs/all/"+e.user[Object.keys(e.user)[0]],t.next=4,O.a.get(n);case 4:a=t.sent,K(a.data),u(!1),Y(""),J(""),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){X()}),[]);var Z=function(e){r(!0),T(e)},Q=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),E(!0),e.prev=2,e.next=5,O.a.put("callLogs/"+D._id,{entireCall:D.entireCall});case 5:t=e.sent,console.log(t.data),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:X(),H();case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),_=function(){var t=Object(h.a)(b.a.mark((function t(){var n,a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n="callLogs/search/"+e.user[Object.keys(e.user)[0]],t.next=4,O.a.get(n,{params:{searchType:z,searchQuery:G}});case 4:a=t.sent,K(a.data),u(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Database testing"}),Object(d.jsxs)("p",{className:"card-description",children:["Made by: ",Object(d.jsx)("code",{children:"#Koki's Kookies"})," "]}),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(A.a,{children:[Object(d.jsx)(S.a,{children:Object(d.jsx)(o.a,{variant:"primary",onClick:function(){return e.handleRouteChange("add-new")},href:"",children:"Add new call summary"})}),Object(d.jsx)(S.a,{children:Object(d.jsx)(o.a,{variant:"primary",onClick:function(){return e.handleRouteChange("profile")},href:"",children:"Check your profile"})})]})})}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{children:Object(d.jsx)(C.a,{className:"mb-3",children:Object(d.jsxs)(A.a,{children:[Object(d.jsx)(C.a.Group,{as:S.a,xs:3,children:Object(d.jsxs)(C.a.Select,{name:"choice",value:z,onChange:function(e){J(e.target.value)},children:[Object(d.jsx)("option",{value:"_id",children:"Phone Call ID #"}),Object(d.jsx)("option",{value:"phoneNumber",children:"Phone Number"}),Object(d.jsx)("option",{value:"callSummary",children:"Summary"}),Object(d.jsx)("option",{value:"entireCall",children:"Call Transcript"}),Object(d.jsx)("option",{value:"sentimentAnalysis",children:"Sentiment"})]})}),Object(d.jsx)(C.a.Group,{as:S.a,xs:8,children:Object(d.jsx)(C.a.Control,{type:"text",placeholder:"Search call logs",name:"search",value:G,onChange:function(e){Y(e.target.value)}})}),Object(d.jsx)(C.a.Group,{as:S.a,xs:1,children:j?Object(d.jsx)(o.a,{variant:"outline-secondary",onClick:X,children:"Return"}):Object(d.jsx)(o.a,{variant:"primary",onClick:_,disabled:!z||!G,children:"Search"})})]})})})}),Object(d.jsx)("div",{children:Object(d.jsxs)("table",{"data-testid":"display-table",className:"table table-hover table-bordered",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Phone Call ID #"}),Object(d.jsx)("th",{children:"Phone Number"}),Object(d.jsx)("th",{"data-testid":"summary-table",children:"Summary"}),Object(d.jsx)("th",{children:"Call Transcript"}),Object(d.jsx)("th",{children:"Delete?"})]})}),Object(d.jsx)("tbody",{children:F.map((function(t,n){return Object(d.jsxs)("tr",{Style:"cursor: pointer;",children:[Object(d.jsx)("td",{onClick:function(){return Z(t)},children:t._id}),Object(d.jsx)("td",{onClick:function(){return Z(t)},children:t.phoneNumber}),Object(d.jsx)("td",{onClick:function(){return Z(t)},children:t.callSummary}),Object(d.jsx)("td",{onClick:function(){return Z(t)},className:"tableStyle",children:t.entireCall}),Object(d.jsx)("td",{onClick:function(){return function(t){var n=function(){var n=Object(h.a)(b.a.mark((function n(){var a,c,r,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,c=function(){return(c=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.delete("callLogs/"+t._id).then((function(e){return console.log("Delete successful")})).catch((function(e){console.error("There was an error!",e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)},a=function(){return c.apply(this,arguments)},a(),r="callLogs/all/"+e.user[Object.keys(e.user)[0]],n.next=7,O.a.get(r);case 7:s=n.sent,K(s.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(){return n.apply(this,arguments)}}();n()}(t)},children:Object(d.jsx)(o.a,{variant:"outline-danger",children:"Delete"})})]},n)}))})]})}),Object(d.jsxs)(w.a,{size:"lg",show:c,onHide:H,info:D,scrollable:!0,children:[Object(d.jsx)(w.a.Header,{closeButton:!0,children:Object(d.jsx)(w.a.Title,{children:Object(d.jsxs)("h4",{children:[D.phoneNumber,": ",D.callSummary]})})}),Object(d.jsx)(w.a.Body,{children:Object(d.jsxs)(C.a.Group,{children:[Object(d.jsx)(C.a.Label,{children:"Call Transcript:"}),Object(d.jsx)(C.a.Control,{as:"textarea",rows:5,type:"text",onChange:function(e){var t=e.target.name,n=e.target.value;T((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(f.a)({},t,n))}))},value:D.entireCall,placeholder:"Call transcription",readOnly:p,name:"entireCall"})]})}),Object(d.jsxs)(w.a.Footer,{children:[R?Object(d.jsx)(o.a,{variant:"primary",onClick:function(){v(!1),E(!1)},children:"Edit"}):Object(d.jsx)(o.a,{variant:"success",onClick:Q,children:"Save"}),Object(d.jsx)(o.a,{variant:"secondary",onClick:H,children:" Close "})]})]})]})}var E=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(l.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)("login"),b=Object(l.a)(u,2),h=b[0],m=b[1];function x(e){o(!0),c(e)}function O(e){console.log(e),"logout"===e?(c(null),o(!1),m("login")):(console.log(e),m(e))}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{loggedin:i,handleRouteChange:O}),"home"===h?Object(d.jsx)(R,{user:n,handleRouteChange:O}):"profile"===h?Object(d.jsx)(v,{user:n,loggedin:i}):"add-new"===h?Object(d.jsx)(k,{user:n,handleRouteChange:O}):"login"===h?Object(d.jsx)(g,{handleLogIn:x,handleRouteChange:O}):Object(d.jsx)(p,{handleLogIn:x,handleRouteChange:O})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,154)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),L()}},[[149,1,2]]]);
//# sourceMappingURL=main.abc03bcb.chunk.js.map