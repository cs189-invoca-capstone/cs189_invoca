(this.webpackJsonpmvp_front=this.webpackJsonpmvp_front||[]).push([[0],{128:function(e,t,a){},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},176:function(e,t,a){},195:function(e,t,a){},196:function(e,t,a){},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(49),r=a.n(c),l=(a(138),a(139),a(140),a(161),a(8)),i=(a(162),a(163),a(18)),o=a(13),j=(a(164),a.p+"static/media/index.ffb78d9f.png"),d=a(206),u=a(115),b=a(57),h=a(205),x=a(0);function m(e){var t=Object(o.f)();return Object(x.jsx)("div",{children:null===e.user?Object(x.jsx)(d.a,{bg:"light",sticky:"top",children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(d.a.Brand,{as:i.b,to:"/",children:Object(x.jsx)("img",{src:j,width:"130",height:"30",className:"d-inline-block align-top",alt:"Invoca Logo"})})}),Object(x.jsx)(b.a,{children:Object(x.jsxs)(h.a,{className:"justify-content-end",children:[Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/login",children:"Log In"})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/register",children:"Sign Up"})})]})})]})}):Object(x.jsx)(d.a,{bg:"light",sticky:"top",children:Object(x.jsxs)(u.a,{children:[Object(x.jsx)(b.a,{children:Object(x.jsx)(d.a.Brand,{as:i.b,to:"/",children:Object(x.jsx)("img",{src:j,width:"130",height:"30",className:"d-inline-block align-top",alt:"Invoca Logo"})})}),Object(x.jsx)(b.a,{children:Object(x.jsxs)(h.a,{className:"justify-content-end",children:[Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/profile",children:"Profile"})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/callLogs",children:"Call Logs"})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/add",children:"Add Call"})}),Object(x.jsx)(h.a.Item,{children:Object(x.jsx)(h.a.Link,{as:i.b,to:"/login",onClick:function(){return e.clearUser(),void t.push("/login")},children:"Log Out"})})]})})]})})})}var p=a(28),O=a(12),g=a.n(O),v=(a(176),a(25)),f=a.n(v),y=a(37);var N=function(e){var t=Object(o.f)();function a(){return(a=Object(p.a)(g.a.mark((function a(s,n,c,r){var l;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log(s),console.log(n),console.log(c),console.log(r),s&&n&&c&&r){a.next=8;break}alert("fill in information!"),a.next=20;break;case 8:return a.prev=8,a.next=11,f.a.post("/users/register",{name:s,email:n,password:r,invocaPhone:c});case 11:l=a.sent,console.log(l.data),e.handleLogIn(l.data),t.push("/callLogs"),a.next=20;break;case 17:a.prev=17,a.t0=a.catch(8),console.log(a.t0);case 20:case"end":return a.stop()}}),a,null,[[8,17]])})))).apply(this,arguments)}return Object(x.jsx)("div",{class:"h-screen",children:Object(x.jsx)("div",{className:"backgroundregister",children:Object(x.jsxs)("div",{className:"registersquare",children:[Object(x.jsx)("div",{className:"logintext",children:"Register"}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Full Name"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"name"})]}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Email Address"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"gmail"})]}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Phone Number"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",pattern:"[0-9]*",id:"phone"})]}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Password"}),Object(x.jsx)("input",{className:"filloutbars",type:"password",id:"password"})]}),Object(x.jsx)("div",{className:"createrow",children:Object(x.jsxs)("div",{className:"createcolumn",children:[Object(x.jsx)("div",{className:"newaccount",onClick:function(){return t.push("/login")},children:"Already have an account? Login here."}),Object(x.jsx)(y.a,{variant:"secondary",onClick:function(){return function(e,t,s,n){return a.apply(this,arguments)}(document.getElementById("name").value,document.getElementById("gmail").value,document.getElementById("phone").value,document.getElementById("password").value)},children:"Create Account"})]})})]})})})},C=(a(128),a(41));var k=function(e){var t=Object(o.f)();return console.log(e.user),Object(x.jsx)("div",{class:"h-screen w-screen",children:Object(x.jsx)("div",{className:"backgroundprofile",children:Object(x.jsxs)("div",{className:"profileInfo",children:[Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(C.a,{autoplay:!0,loop:!0,speed:".5",src:"https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json",style:{height:"400px",width:"500px"}}),Object(x.jsx)("div",{className:"profileName",children:e.user.name}),Object(x.jsxs)("div",{className:"profileNumber",children:["Phone: ",e.user.invocaPhone]}),Object(x.jsxs)("div",{className:"profileNumber",children:["Email: ",e.user.email]}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsx)("div",{className:"editbutton",onClick:function(){return t.push("/editProfile")},children:Object(x.jsx)("div",{className:"editText",children:"Edit"})})]})})})};a(195);var S=function(e){var t=Object(o.f)();function a(){return(a=Object(p.a)(g.a.mark((function a(s,n){var c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(s&&n){a.next=4;break}alert("fill in information!"),a.next=15;break;case 4:return a.prev=4,a.next=7,f.a.post("/users/login",{email:s,password:n});case 7:c=a.sent,e.handleLogIn(c.data),t.push("/callLogs"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(4),console.log(a.t0);case 15:case"end":return a.stop()}}),a,null,[[4,12]])})))).apply(this,arguments)}return Object(x.jsx)("div",{className:"backgroundlogin",children:Object(x.jsxs)("div",{className:"loginsquare",children:[Object(x.jsxs)("div",{className:"loginelements",children:[Object(x.jsx)("div",{className:"logintext",children:"Login"}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Email Address"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"gmail"})]}),Object(x.jsxs)("div",{style:{padding:20},children:[Object(x.jsx)("div",{className:"smalltext",children:"Password"}),Object(x.jsx)("input",{className:"filloutbars",type:"password",id:"password"})]}),Object(x.jsx)("div",{className:"createrow",children:Object(x.jsxs)("div",{className:"createcolumn",children:[Object(x.jsx)("div",{className:"newaccount",onClick:function(){return t.push("/register")},children:"New here? Create an account."}),Object(x.jsx)(y.a,{variant:"secondary",onClick:function(){return function(e,t){return a.apply(this,arguments)}(document.getElementById("gmail").value,document.getElementById("password").value)},children:"Login"})]})})]}),Object(x.jsx)("div",{children:Object(x.jsx)(C.a,{autoplay:!0,loop:!0,src:"https://assets7.lottiefiles.com/private_files/lf30_7z3j6ycb.json",style:{height:"400px",width:"500px"}})})]})})},w=(a(196),a.p+"static/media/arrow.cb0d1ffd.svg");function I(e){var t=Object(o.f)();function a(){return(a=Object(p.a)(g.a.mark((function a(s,n,c){var r,l,i;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=!0,!n){a.next=16;break}if(10!==n.length&&12!==n.length){a.next=14;break}l=0;case 4:if(!(l<n.length)){a.next=12;break}if("-"===n[l]||!isNaN(n[l])){a.next=9;break}return alert("please enter a valid phone number"),r=!1,a.abrupt("break",12);case 9:l++,a.next=4;break;case 12:a.next=16;break;case 14:alert("please enter a valid phone number"),r=!1;case 16:if(!r){a.next=36;break}if(s||c||n){a.next=21;break}alert("fill in some information!"),a.next=36;break;case 21:return c||(c=e.user.email),s||(s=e.user.name),n||(n=e.user.invocaPhone),a.prev=24,a.next=27,f.a.put("/users/edit/"+e.user[Object.keys(e.user)[0]],{email:c,name:s,invocaPhone:n});case 27:i=a.sent,e.clearUser(),e.handleLogIn(i.data),t.push("/profile"),a.next=36;break;case 33:a.prev=33,a.t0=a.catch(24),console.log(a.t0);case 36:case"end":return a.stop()}}),a,null,[[24,33]])})))).apply(this,arguments)}return Object(x.jsx)("div",{class:"h-screen w-screen",children:Object(x.jsx)("div",{className:"backgroundprofile",children:Object(x.jsxs)("div",{className:"profileInfo",children:[Object(x.jsx)(C.a,{autoplay:!0,loop:!0,speed:".5",src:"https://assets5.lottiefiles.com/packages/lf20_yqzunqte.json",style:{height:"400px",width:"500px"}}),Object(x.jsxs)("div",{style:{padding:9},children:[Object(x.jsx)("div",{className:"smallEdittext",children:"Name"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"name"})]}),Object(x.jsxs)("div",{style:{padding:9},children:[Object(x.jsx)("div",{className:"smallEdittext",children:"Phone"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"phone"})]}),Object(x.jsxs)("div",{style:{padding:9},children:[Object(x.jsx)("div",{className:"smallEdittext",children:"Email"}),Object(x.jsx)("input",{className:"filloutbars",type:"text",id:"email"})]}),Object(x.jsxs)("div",{className:"createrow",children:[Object(x.jsx)("div",{className:"createcolumn",children:Object(x.jsx)(y.a,{variant:"secondary",onClick:function(){return t.push("/profile")},children:"Back"})}),Object(x.jsx)("div",{className:"jankfix",children:Object(x.jsx)("div",{id:"circle",onClick:function(){return function(e,t,s){return a.apply(this,arguments)}(document.getElementById("name").value,document.getElementById("phone").value,document.getElementById("email").value)},children:Object(x.jsx)("img",{src:w,alt:"arrow",className:"ellipse"})})})]})]})})})}var L=a(7),A=a(2),E=a(133),B=a(43);a(197);function V(e){var t=Object(s.useState)({}),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.f)(),i=function(e){var t=e.target.name,a=e.target.value;c((function(e){return Object(A.a)(Object(A.a)({},e),{},Object(L.a)({},t,a))}))},j=function(){var t=Object(p.a)(g.a.mark((function t(a){var s,l,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f.a.post("transactions/new",{userId:e.user[Object.keys(e.user)[0]],calling_phone_number:n.phoneNumber,transcript:n.entireCall,summary:n.callSummary,keywords:n.keywords,sentiment:n.sentimentAnalysis});case 4:s=t.sent,console.log(s.data),l=sessionStorage.getItem("transactions"),(i=JSON.parse(l)).push(s.data),sessionStorage.setItem("transactions",JSON.stringify(i)),r.push("/callLogs"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:alert("Updated!"),c({});case 18:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"backgroundSubmit",children:Object(x.jsxs)("div",{className:"boxSubmit",children:[Object(x.jsxs)(u.a,{children:[Object(x.jsx)(E.a,{children:Object(x.jsxs)(B.a,{onSubmit:j,id:"submit-form",children:[Object(x.jsxs)(E.a,{children:[Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Phone Number"}),Object(x.jsx)(B.a.Control,{type:"text",name:"phoneNumber",value:n.phoneNumber,onChange:i,placeholder:"Enter phone number"})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Summary"}),Object(x.jsx)(B.a.Control,{type:"text",name:"callSummary",value:n.callSummary,onChange:i,placeholder:"Enter call summary"})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Keywords"}),Object(x.jsx)(B.a.Control,{type:"text",name:"keywords",value:n.keywords,onChange:i,placeholder:"Enter keywords"})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Call Transcript"}),Object(x.jsx)(B.a.Control,{type:"text",name:"entireCall",value:n.entireCall,onChange:i,placeholder:"Enter call transcript"})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Call Sentiment"}),Object(x.jsxs)(B.a.Select,{name:"sentimentAnalysis",value:n.sentimentAnalysis,onChange:i,className:"dropdownbar",children:[Object(x.jsx)("option",{children:"Select..."}),Object(x.jsx)("option",{value:"Very Negative",children:"Very Negative"}),Object(x.jsx)("option",{value:"Negative",children:"Negative"}),Object(x.jsx)("option",{value:"Neutral",children:"Neutral"}),Object(x.jsx)("option",{value:"Positive",children:"Positive"}),Object(x.jsx)("option",{value:"Very Positive",children:"Very Positive"})]})]})]}),Object(x.jsx)(E.a,{children:Object(x.jsx)(y.a,{Style:"width:10%; margin-left:45%; margin-right:45%;",variant:"primary",type:"submit",disabled:!n.phoneNumber||!n.entireCall||!n.callSummary||!n.sentimentAnalysis,children:"Submit"})})]})}),Object(x.jsx)("br",{})]}),Object(x.jsx)(y.a,{Style:"width:14%; margin-left:43%; margin-right:43%;",variant:"secondary",onClick:function(){return r.push("/callLogs")},children:"Exit"})]})})}a(198);function Q(e){var t=Object(s.useState)(e.currCallLog),a=Object(l.a)(t,2),n=a[0],c=a[1],r=Object(o.f)(),i=function(e){var t=e.target.name,a=e.target.value;c((function(e){return Object(A.a)(Object(A.a)({},e),{},Object(L.a)({},t,a))}))},j=function(){var t=Object(p.a)(g.a.mark((function t(a){var s,l,i,o;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f.a.put("transactions/"+e.currCallLog._id,{calling_phone_number:n.calling_phone_number,transcript:n.transcript,summary:n.summary,sentiment:n.sentiment,keywords:n.keywords});case 4:if(s=t.sent,console.log(s.data),l=sessionStorage.getItem("transactions"),i=JSON.parse(l),console.log(i),null==i){t.next=22;break}o=0;case 11:if(!(o<i.length)){t.next=22;break}if(i[o]._id!==e.currCallLog._id){t.next=19;break}return console.log(i[o]),console.log(s.data),i[o]=s.data,console.log(i[o]),sessionStorage.setItem("transactions",JSON.stringify(i)),t.abrupt("break",22);case 19:o++,t.next=11;break;case 22:r.push("/callLogs"),t.next=28;break;case 25:t.prev=25,t.t0=t.catch(1),console.log(t.t0);case 28:alert("Updated!"),c({});case 30:case"end":return t.stop()}}),t,null,[[1,25]])})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsx)("div",{className:"backgroundSubmit",children:Object(x.jsxs)("div",{className:"boxSubmit",children:[Object(x.jsx)("br",{}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)(E.a,{children:Object(x.jsxs)(B.a,{onSubmit:j,id:"submit-form",children:[Object(x.jsxs)(E.a,{children:[Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Phone Number"}),Object(x.jsx)(B.a.Control,{type:"text",name:"calling_phone_number",defaultValue:e.currCallLog.calling_phone_number,onChange:i})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Keywords"}),Object(x.jsx)(B.a.Control,{type:"text",name:"keywords",defaultValue:e.currCallLog.keywords,onChange:i})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Summary"}),Object(x.jsx)(B.a.Control,{type:"text",name:"summary",defaultValue:n.summary,onChange:i})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsx)(B.a.Label,{children:"Call Transcript"}),Object(x.jsx)(B.a.Control,{type:"text",name:"transcript",defaultValue:e.currCallLog.transcript,onChange:i})]}),Object(x.jsxs)(B.a.Group,{className:"mb-3",children:[Object(x.jsxs)(B.a.Label,{children:["Call Sentiment: ",e.currCallLog.sentiment]}),Object(x.jsxs)(B.a.Select,{name:"sentiment",value:n.sentimentAnalysis,onChange:i,className:"dropdownbar",children:[Object(x.jsx)("option",{children:"Select..."}),Object(x.jsx)("option",{value:"Very Negative",children:"Very Negative"}),Object(x.jsx)("option",{value:"Negative",children:"Negative"}),Object(x.jsx)("option",{value:"Neutral",children:"Neutral"}),Object(x.jsx)("option",{value:"Positive",children:"Positive"}),Object(x.jsx)("option",{value:"Very Positive",children:"Very Positive"})]})]})]}),Object(x.jsx)(E.a,{children:Object(x.jsx)(y.a,{Style:"width:10%; margin-left:45%; margin-right:45%;",variant:"primary",type:"submit",disabled:!n.calling_phone_number||!n.transcript||!n.summary||!n.sentiment||!n.keywords,children:"Submit"})})]})}),Object(x.jsx)("br",{})]}),Object(x.jsx)(y.a,{Style:"width:14%; margin-left:43%; margin-right:43%;",variant:"secondary",onClick:function(){return r.push("/callLogs")},children:"Exit"})]})})}var R=a(74);a(199);function P(e){var t=Object(o.f)(),a=Object(s.useState)(!1),n=Object(l.a)(a,2),c=n[0],r=n[1],i=Object(s.useState)(!1),j=Object(l.a)(i,2),d=j[0],h=j[1],m=Object(s.useState)(!0),O=Object(l.a)(m,2),v=O[0],N=O[1],C=Object(s.useState)([{callerID:"Bryan",calling_phone_number:"12345",callSummary:"dummy data",status:"default"}]),k=Object(l.a)(C,2),S=k[0],w=k[1],I=Object(s.useState)([]),V=Object(l.a)(I,2),Q=V[0],P=V[1],G=Object(s.useState)(""),F=Object(l.a)(G,2),Y=F[0],U=F[1],q=Object(s.useState)(""),M=Object(l.a)(q,2),J=M[0],K=M[1],X=function(){N(!0),r(!1)},H=function(){var e=sessionStorage.getItem("lastId");return null==e?"":JSON.parse(e)},T=function(e){sessionStorage.setItem("transactions",JSON.stringify(e)),P(e)},D=function(){var e=sessionStorage.getItem("transactions"),t=JSON.parse(e);null!=t&&P(t)},Z=function(){var t=Object(p.a)(g.a.mark((function t(){var a,s,n,c,r,l,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=H(),D(),t.next=5,f.a.post("transactions/invoca",{id:a});case 5:if(""===(s=t.sent).data){t.next=15;break}return o=s.data,sessionStorage.setItem("lastId",JSON.stringify(o)),n="transactions/all/"+e.user[Object.keys(e.user)[0]],t.next=11,f.a.get(n);case 11:for(c=t.sent,r=0;r<c.data.length;r++)l=c.data[r].transcript.toString(),c.data[r].transcript=l.split(",").join("\n"),i=c.data[r].keywords.toString(),c.data[r].keywords=i.split(",").join("\n");T(c.data);case 15:h(!1),K(""),U(""),t.next=23;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0);case 23:case"end":return t.stop()}var o}),t,null,[[0,20]])})));return function(){return t.apply(this,arguments)}}();Object(s.useEffect)((function(){Z()}),[]);var W=function(t){r(!0),w(t),e.clearCallLog(),e.handleCallLog(t)},z=function(){var t=Object(p.a)(g.a.mark((function t(){var a,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="transactions/search/"+e.user[Object.keys(e.user)[0]],t.next=4,f.a.get(a,{params:{searchType:Y,searchQuery:J}});case 4:s=t.sent,P(s.data),h(!0),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{className:"homepagebackground",children:[Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsxs)("div",{className:"hellotext",children:["Hello ",e.user.name?e.user.name:e.user.email]}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsx)("div",{className:"welcometext",children:"Welcome Back!"}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsx)(u.a,{children:Object(x.jsx)(B.a,{className:"mb-3",children:Object(x.jsxs)(E.a,{children:[Object(x.jsx)(b.a,{lg:2}),Object(x.jsx)(b.a,{lg:2,children:Object(x.jsx)(B.a.Group,{children:Object(x.jsxs)(B.a.Select,{name:"choice",value:Y,onChange:function(e){U(e.target.value)},className:"dropdownbar",children:[Object(x.jsx)("option",{value:"id",children:"Phone Call ID #"}),Object(x.jsx)("option",{value:"calling_phone_number",children:"Phone Number"}),Object(x.jsx)("option",{value:"callSummary",children:"Summary"}),Object(x.jsx)("option",{value:"transcript",children:"Call Transcript"}),Object(x.jsx)("option",{value:"sentimentAnalysis",children:"Sentiment"})]})})}),Object(x.jsx)(b.a,{lg:4,children:Object(x.jsx)(B.a.Group,{children:Object(x.jsx)(B.a.Control,{type:"text",placeholder:"Search call logs",name:"search",value:J,onChange:function(e){K(e.target.value)},className:"searchbar"})})}),Object(x.jsx)(b.a,{lg:3,children:Object(x.jsx)(B.a.Group,{children:d?Object(x.jsx)(y.a,{variant:"outline-secondary",onClick:Z,children:"Return"}):Object(x.jsx)(y.a,{variant:"primary",onClick:z,disabled:!Y||!J,children:"Search"})})})]})})}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsxs)(u.a,{children:[Object(x.jsx)("div",{className:"tablehold",children:Object(x.jsxs)("table",{"data-testid":"display-table",className:"table table-hover table-bordered",children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Phone Call ID #"}),Object(x.jsx)("th",{children:"Phone Number"}),Object(x.jsx)("th",{"data-testid":"summary-table",className:"evenpercent",children:"Summary"}),Object(x.jsx)("th",{children:"Call Transcript"}),Object(x.jsx)("th",{children:"Sentiment Analysis"}),Object(x.jsx)("th",{children:"Delete?"})]})}),Object(x.jsx)("tbody",{children:Q.map((function(t,a){return Object(x.jsxs)("tr",{Style:"cursor: pointer;",children:[Object(x.jsx)("td",{className:"hidden",onClick:function(){return W(t)},children:t._id}),Object(x.jsx)("td",{className:"hidden",onClick:function(){return W(t)},children:t.calling_phone_number}),Object(x.jsx)("td",{onClick:function(){return W(t)},children:t.summary}),Object(x.jsx)("td",{className:"hidden tableStyle",onClick:function(){return W(t)},children:t.transcript}),Object(x.jsx)("td",{className:"hidden",onClick:function(){return W(t)},children:t.sentiment}),Object(x.jsx)("td",{className:"hidden",onClick:function(){return function(t){var a=function(){var a=Object(p.a)(g.a.mark((function a(){var s,n,c;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,s=function(){var e=Object(p.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("transactions/"+t._id).then((function(e){return console.log("Delete successful")})).catch((function(e){console.error("There was an error!",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s(),n="transactions/all/"+e.user[Object.keys(e.user)[0]],a.next=6,f.a.get(n);case 6:c=a.sent,P(c.data),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),console.log(a.t0);case 13:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();a()}(t)},children:Object(x.jsx)(y.a,{variant:"outline-danger",children:"Delete"})})]},a)}))})]})}),Object(x.jsxs)(R.a,{size:"lg",show:c,onHide:X,info:S,scrollable:!0,children:[Object(x.jsx)(R.a.Header,{closeButton:!0,children:Object(x.jsx)(R.a.Title,{children:Object(x.jsxs)("h4",{children:[S.calling_phone_number,": ",S.callSummary]})})}),Object(x.jsxs)(R.a.Body,{children:[Object(x.jsxs)(B.a.Group,{children:[Object(x.jsx)(B.a.Label,{children:"Call Transcript:"}),Object(x.jsx)(B.a.Control,{as:"textarea",rows:5,type:"text",onChange:function(e){var t=e.target.name,a=e.target.value;w((function(e){return Object(A.a)(Object(A.a)({},e),{},Object(L.a)({},t,a))}))},value:S.transcript,placeholder:"Call transcription",readOnly:v,name:"transcript"})]}),Object(x.jsx)(B.a.Group,{children:Object(x.jsxs)(B.a.Label,{children:["Sentiment Analysis: ",S.sentiment]})})]}),Object(x.jsxs)(R.a.Footer,{children:[Object(x.jsx)(y.a,{variant:"primary",onClick:function(){return a=S,e.handleCallLog(a),void t.push("/editCall");var a},children:" Edit "}),Object(x.jsx)(y.a,{variant:"secondary",onClick:X,children:" Close "})]})]})]}),Object(x.jsx)("div",{children:Object(x.jsx)("br",{})}),Object(x.jsx)(y.a,{Style:"width:24%; margin-left:38%; margin-right:38%;",variant:"primary",onClick:function(){return t.push("/add")},children:"Add new call summary"})]})}a(200);var G=function(){return Object(x.jsxs)("div",{className:"backgroundlanding",children:[Object(x.jsxs)("div",{className:"loginSide",children:[Object(x.jsx)("img",{className:"talktext",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAAAzCAYAAADPVi72AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAlXSURBVHgB7Z2/VxRJEMerZ3c5n+eCgYmXyx+goS7+AZifiRkGXiQB3HsiIOzz3lMDLiPQXIwu0cthvfDID/MjMVh+vHvCwvRVDQsuM9Uzs7PTPbNQn0SYYXGZ6f1OdXV9q9XYi8Zt8OAxlJf9nYXWDFxAxpYaj0HB7d5jGmB7d6G1DAIYxuaFHQ95cb3ZmNYaxnuP4fcfdxdbn8Aho8uNhwrgfvg4HltrL7TWoU+qWsFNFfrAlAmlYRsuIFdfNm6CD1Ph43gjYbQ58X53fuMLXHK4sXlRx0OeBEIVvm4Af4NDxpoNeshExjc+jd9mESrCA6EQqoxQneKBfgCCMKTECRVGxe8gIyJWBUBRFT7pjIKEEcXkjVd36yAIQ4YtoSKqnoJ9P4fQGsP1m5GDGvYwB7MPg3Hhwv6aD/GRk4Z658D7Gb8a6OYKgktMQoUa8HF3QKEiqt35Y6Y5ZC/4Rv/Af37qPYZz5xXXSb1hAK/LpFIJP+TBQ4yuPnz99a89EISSEytU860m5IBMAx0zutSYDEehKF6f8K5unvvB79GVIJQa49TPh/W8hIoQsXKNYspElHoPFXgbOY7RFQhCiaHyBAB2VftL7Yqfm1ARIlYO4aIqiqioTGFnrrXJRVf0GhCEElJv3nuA43k6fJyEqjriP8k7hSFi5RC8sZHEuq7AR+7ruNcIQtGQUHmg5sPHMaWxbUOoCBErR4y9bNyOVKvjjd2d+74AEXyNK6jnXoivCSq5BaEkxAnVUQWe2FoUErFyhPYhOp3j8lQVWIscK7cdSrhEXF9u3I8Tqv/mWtZKjUSsHMAVgYajqlNqO/4Hia6EMjLanLilAQoRKkLEygEGa80m97NfX2MIzURX2pPclVAcJFRK61V8cJ5zVrgSKkLEyjIma80RNwXs0gGIRFxKLDhCQZRBqAgRK8twURUVgcbd4OCcjkZeUiQquMYkVJSqcClUhIiVRW7MYiSk4U74eFxUdYahSFSiK8EVQRsjrd9wQqWVcipUhIiVRQ5/9Ca4ItA0N9lUJCrRleACEqrqMawy4zcQqiL6rYlY2YSx1ihPvYe0SHQlFIBRqBBVhWZRjSFFrCxhMCxvt59vbKT9Hd3o6nwZA0ZXh9+8CRAEC8QJFa5IL7eftQbu0JIVEStbcIblNLmq6GsiZQxiwRFskCRUXF2gS0SsLEDWGi6qynKzpUhUcEGcUFGXz6KFihCxssExk6uCqEk5DaYiUbHgCHmRJFQ7OXT5zAMRq5wJlnuZ3YI6Fcj8ZAqiqzASXQk5ECtUJ9yBkiBilTNZikCTCKIrrvW0RFfCAKQQquCheH2pMQ0lQMQqR7JYa1LjMVNBHEhBJCcIfULlLyM+vIkVqi6YXH/Y7QhaKCJWOWIwLK/nUenLFokiOOCk9bHQFyRUR4feqga4FT6HD9st7jXUEbTotIOIVU6cWBOY+f0xExFlhYnQZI9BoR/ihIo2eGjPtx5p02JQFV4XGcmLWOVE9QjYcoWdF61NyAmKrnR4j0ex4AgpSYiozjZ4oB1p2AgLxxrluIoSLBGrvMirCDTpv+HsOmLBEVLQ+ebNm4Qq3De9uuf/opnNj+mBTLmuIsabiFUOmKw1NgrparvHf7IWnANPdsER4niIn/b74YOmnWhoBZpawHCCRYKH4835CqGIVR4otoQgv1xVD8YiUZBEuxBDuM0LJG+ZFSwMKTUTeTjCSTPIsaWG09KZKggDwe4FeML42HJjCiygfKjr8DF8D7Rak2eOTLi4pN3bjzosjL5srOCYW4ic9GCq3ry3vTf/OZM7o19ErAbEZCqmJw9YQptOnBSJPgFBiKHfTUgpnTFGSXU/OoPwlHo62pz4x0XbGJkGDkD9t3vjnLWmMMSCIySQdbdkXIl+p7jUBuZLqZuoixVCEasBUMeqfCUDYsERDAy6rXt7vrXC1WBRCoJKGmyvEMo0MCOBtcaPTgGpPgVXUPbBFeHIDr+nJv9FdXMUygmt6tV+GHxb95E9//ejujeOojXee5wEq3PgvQaLaQgRq4xw1hqlYau90HoEDsEk/mpYsDzQJKIrIAhdqEVRHtu602o0PqhnWQN01/TcXmxZGXsyDcyAybDsV+yUK8ShK9GwXIsFR7AIlTRQDRZX0mDT9CxilYEaM/2zVQSaxMiOv8EViYoFR7AJCRbtcsOds2V6FrHKAApTtCzBgrUmDTGdRMWCI1iF8qLUm509acH0LGLVJyZrzUjVT71rTd6wfdoluhIcEMwmPOZBbcH0PJQJdgoxMS9zU+Xc1SAVvLVmM4/kZVYourrebHzSYcuNF3zfV//sQq/tkEIRLG2P5inYP6zAluudiouGarBw/NXD4+/U9Hz11d2+ViFN13OoxIpUmv54MlKq7jG8SF8OPZhxMUBM1pqjgqaAveA1WKuFG/Hh043e8+5ici7ttMUtkFB1j+FK4yYud88WKcRlh5LJnQOYUt6JBQrvAYwtNd7tLLYKHxMuoRosHC+RIuke0/Nymt9Tb9570DlQT7nrOVTTQPowhVtc0Pe1Y8a3ZAHOWjNof/W8CN4D00k07R6DpqXobu2MwNB9eE1HTMIeTF1GJ0Ft3581tJVJZXqmB6YHap67nvRQGJrIivbiA9/QL9pBIWT3/48MwDJEVWfQe/ExOuqla8GJm9IlXVsaRGWZ2mBC95otgzgHVX23F/hdiBXTcuWMShDlXqppdLcG6wn74EtheqYW3SbfK0ZVkxemKFQda6srX9qHSRU5CJtlyk9QJ1GaukWq2hMMzvoIp34xMXatEwy8cvyd5EVT7ixFvg62UFuPeS8smPO7lBt50OcBA4cZnHKshiOkJNMzzviuKfOvrg/NNNBXOtbCoivKWl7FVATKdu0sGi7SSzA4q2q8EHVqJRGqkoELEf/GnLu01ywQowrMRk4kmJ5RjOI+43tDI1Z7zz5vcTmZLus2p4CGvQC32883CitXMNHdBYerLH6Q8Br22pYlJ1dGMBo1L1x47t0MZSLYL8CLWr7iTM+0SMSNXYLcIUOVYO9UYJnZMGGzNnLS6N4GpqgKypSrCsMUiaoEC47p2o784IvH0EAg8uEaI/yw4XVcCc5dcnbnWmtcDVaP6fkc9FDEz1ozPA7pelI9V8wUsbxQQpjyLDgJ3pLuAvki17Z/gpKaYxjH/Na1kSv+hpR6DEawC8+Bdzt8Pf8HN7R5LBMimZgAAAAASUVORK5CYII=",alt:"talk"}),Object(x.jsx)(C.a,{autoplay:!0,loop:!0,mode:"bounce",speed:".25",src:"https://assets6.lottiefiles.com/private_files/lf30_vrcurbxk.json",style:{height:"400px",width:"500px"}})]}),Object(x.jsxs)("div",{className:"infoSide",children:[Object(x.jsxs)("div",{className:"LandingPage-infobars",children:[Object(x.jsx)(C.a,{autoplay:!0,loop:!0,speed:".5",src:"https://assets1.lottiefiles.com/private_files/lf30_9qdtthec.json",style:{height:"25%",width:"30%"}}),Object(x.jsxs)("p",{children:["Talk to your heart's content as our platform uses state-of-the-art technology to ",Object(x.jsx)("strong",{children:"Transcribe"})," your calls for easy access later on."]})]}),Object(x.jsxs)("div",{className:"LandingPage-infobars",children:[Object(x.jsx)(C.a,{autoplay:!0,loop:!0,speed:".65",src:"https://assets2.lottiefiles.com/datafiles/WLZxDkEn1AQcp9K/data.json",style:{height:"25%",width:"35%"}}),Object(x.jsxs)("p",{children:["Our ",Object(x.jsx)("strong",{children:"Artificial"})," Intelligence helps you stay at the top of your game by generating sentiment analysis, summaries, and keywords that come up most in your calls."]})]}),Object(x.jsxs)("div",{className:"LandingPage-infobars",children:[Object(x.jsx)(C.a,{autoplay:!0,loop:!0,speed:".75",src:"https://assets1.lottiefiles.com/packages/lf20_2FrNS5.json",style:{height:"25%",width:"45%"}}),Object(x.jsxs)("p",{children:["Easily view all of your call ",Object(x.jsx)("strong",{children:"Logs"})," in one neat table and edit the entries as you see fit! You know what's best for your sales calls after all."]})]}),Object(x.jsxs)("div",{className:"LandingPage-infobars",children:[Object(x.jsx)(C.a,{autoplay:!0,loop:!0,src:"https://assets9.lottiefiles.com/private_files/lf30_4p0aandr.json",style:{height:"25%",width:"70%"}}),Object(x.jsxs)("p",{children:["Generate the most used and successful ",Object(x.jsx)("strong",{children:"Keywords"})," with our artificial intelligence platform, and watch as your profits grow!"]})]})]})]})};var F=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],n=t[1],c=function(e){console.log(e),sessionStorage.setItem("user",JSON.stringify(e)),n(e)},r=function(){sessionStorage.removeItem("user"),sessionStorage.removeItem("lastId"),sessionStorage.removeItem("callLog"),sessionStorage.removeItem("transactions"),n(null)},j=Object(s.useState)(null),d=Object(l.a)(j,2),u=d[0],b=d[1];return Object(s.useEffect)((function(){console.log("use effect"),function(){var e=sessionStorage.getItem("user"),t=JSON.parse(e);null!=t&&n(t)}(),function(){var e=sessionStorage.getItem("callLog");console.log(e);var t=JSON.parse(e);console.log(t),null!=t&&(console.log("not null"),b(t))}()}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)("style",{children:"@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');"}),Object(x.jsxs)(i.a,{children:[Object(x.jsx)(m,{user:a,clearUser:r}),Object(x.jsxs)(o.c,{children:[Object(x.jsx)(o.a,{exact:!0,path:"/",children:Object(x.jsx)(G,{})}),Object(x.jsx)(o.a,{path:"/login",children:Object(x.jsx)(S,{handleLogIn:c})}),Object(x.jsx)(o.a,{path:"/register",children:Object(x.jsx)(N,{handleLogIn:c})}),null!=a&&Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(o.a,{path:"/profile",children:Object(x.jsx)(k,{user:a})}),Object(x.jsx)(o.a,{exact:!0,path:"/editProfile",children:Object(x.jsx)(I,{user:a,handleLogIn:c,clearUser:r})}),Object(x.jsx)(o.a,{path:"/add",children:Object(x.jsx)(V,{user:a})}),Object(x.jsx)(o.a,{path:"/callLogs",children:Object(x.jsx)(P,{user:a,handleCallLog:function(e){console.log(e),sessionStorage.setItem("callLog",JSON.stringify(e)),b(e)},clearCallLog:function(){sessionStorage.removeItem("callLog"),b(null)}})}),null!=u&&Object(x.jsx)(o.a,{exact:!0,path:"/editCall",children:Object(x.jsx)(Q,{user:a,currCallLog:u})})]})]})]})]})},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,207)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),Y()}},[[201,1,2]]]);
//# sourceMappingURL=main.5f0f5333.chunk.js.map