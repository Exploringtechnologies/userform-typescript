(this.webpackJsonpuserformtypescript=this.webpackJsonpuserformtypescript||[]).push([[0],{59:function(e,r,t){},68:function(e,r,t){},69:function(e,r,t){"use strict";t.r(r);var s=t(0),n=t.n(s),a=t(23),i=t.n(a),c=(t(59),t(37)),u=t.n(c),o=t(43),l=t(28),d=t(38),m=t(32),j=t(90),b=t(86),f=t(27),h=t(2),g=function(e){var r=e.data,t=e.deleteItem,s=e.editItems;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(j.a,{p:2,borderRadius:10,mb:2,style:{backgroundColor:"#d8f3dc"},children:[Object(h.jsxs)(b.a,{variant:"h6",style:{display:"flex"},children:[" Name : ",r.userName]}),Object(h.jsxs)(b.a,{variant:"h6",style:{display:"flex"},children:["  Email : ",r.userEmail," "]}),Object(h.jsxs)(b.a,{variant:"h6",style:{display:"flex"},children:["  Age : ",r.userAge]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"fas fa-edit",onClick:function(){s(r.userId)}}),Object(h.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){t(Number(r.userId),r.userName)}}),Object(h.jsxs)(f.b,{to:"/information/"+r.userId,children:[Object(h.jsx)("i",{className:"fas fa-arrow-alt-circle-right"})," "]})]})]},Number(r.userId))},Number(r.userId))})},O=t(87),x=t(96),p=t(95),I=t(92),N=t(91),v=t(88),y=t(94),A=t(14),E={users:{items:[],userDetails:{userId:"",userName:"",userEmail:"",userAge:0},createUser:Object(A.b)((function(e,r){e.items.push(r)})),removeUser:Object(A.b)((function(e,r){e.items=e.items.filter((function(e){return e.userId!==r}))})),updateUser:Object(A.b)((function(e,r){var t=e.items.findIndex((function(e){return e.userId===r.userId}));void 0!==t&&(e.items[t].userName=r.userName,e.items[t].userEmail=r.userEmail,e.items[t].userAge=r.userAge)})),setUserInfo:Object(A.b)((function(e,r){var t=e.items.find((function(e){return e.userId===r.userId}));(null===t||void 0===t?void 0:t.userId)===r.userId&&(e.userDetails.userId=t.userId,e.userDetails.userName=t.userName,e.userDetails.userEmail=t.userEmail,e.userDetails.userAge=t.userAge)}))}},S=Object(A.c)(Object(A.e)(E)),C=Object(A.d)(),k=C.useStoreActions,F=(C.useStoreDispatch,C.useStoreState);S.persist.clear();var D=S,w=function(){var e=k((function(e){return e.users.createUser})),r=k((function(e){return e.users.removeUser})),t=k((function(e){return e.users.updateUser})),n=Object(s.useState)(""),a=Object(m.a)(n,2),i=a[0],c=a[1],b=Object(s.useState)({userId:"",userName:"",userEmail:"",userAge:0}),f=Object(m.a)(b,2),A=f[0],E=f[1],S=Object(s.useState)(!1),C=Object(m.a)(S,2),D=C[0],w=C[1],U=Object(s.useState)([]),B=Object(m.a)(U,2),q=B[0],P=B[1],W=F((function(e){return e.users.items})),z=function(e){var r,t=e.target,s=t.name,n=t.value;E(Object(d.a)(Object(d.a)({},A),{},(r={},Object(l.a)(r,s,n),Object(l.a)(r,"userId",String(Number(Math.random().toString().slice(2,11)))),r)))},H=function(e){var r=W.find((function(r){return r.userId===e?(c(e),P(String(i)),console.log(q),w(!0),r):null}));P(r.userId),console.log(r),console.log(q),E({userId:r.userId,userName:r.userName,userEmail:r.userEmail,userAge:r.userAge})},J=function(){var e=Object(o.a)(u.a.mark((function e(t,s){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Deleting a User \nid: ".concat(t," \nName: ").concat(s," \ncan't be restored?"))){e.next=3;break}return e.abrupt("return");case 3:r(String(t));case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(O.a,{container:!0,children:[Object(h.jsx)(O.a,{item:!0,md:6,xs:12,style:{background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"},children:Object(h.jsx)(j.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:Object(h.jsx)(j.a,{p:5,borderRadius:15,boxShadow:3,style:{backgroundColor:"rgba(148,187,233,1) 100%",width:"50%"},children:Object(h.jsxs)("form",{onSubmit:function(r){r.preventDefault(),A.userName&&A.userEmail&&A.userAge?A.userName&&A.userEmail&&A.userAge&&D?(console.log(q),t({userId:q,userName:A.userName,userEmail:A.userEmail,userAge:Number(A.userAge)}),E({userId:"",userName:"",userEmail:"",userAge:0}),w(!1)):(e({userId:A.userId,userName:A.userName,userEmail:A.userEmail,userAge:Number(A.userAge)}),E({userId:"",userName:"",userEmail:"",userAge:0})):alert("Please fill the data")},autoComplete:"off",children:[Object(h.jsxs)(x.a,{variant:"filled",color:"secondary",style:{display:"block",marginBottom:"20px"},children:[Object(h.jsx)(p.a,{htmlFor:"component-filled",children:"Name"}),Object(h.jsx)(I.a,{id:"component-filled",value:A.userName,onChange:z,name:"userName",required:!0,fullWidth:!0,autoComplete:"off"})]}),Object(h.jsxs)(x.a,{variant:"filled",color:"secondary",style:{display:"block",marginBottom:"20px"},children:[Object(h.jsx)(p.a,{htmlFor:"component-outlined",children:"Email"}),Object(h.jsx)(I.a,{id:"component-outlined",value:A.userEmail,onChange:z,name:"userEmail",required:!0,fullWidth:!0,autoComplete:"off"})]}),Object(h.jsxs)(x.a,{variant:"filled",color:"secondary",style:{display:"block",marginBottom:"20px"},children:[Object(h.jsx)(p.a,{htmlFor:"component-outlined",children:"Age"}),Object(h.jsx)(I.a,{id:"component-outlined",value:A.userAge,onChange:z,name:"userAge",required:!0,fullWidth:!0,autoComplete:"off"})]}),D?Object(h.jsx)(N.a,{type:"submit",style:{fontSize:16,color:"#C0392B",padding:"6px 12px",lineHeight:1.5,backgroundColor:"#F4D03F"},endIcon:Object(h.jsx)(y.a,{}),children:" Update"}):Object(h.jsx)(N.a,{type:"submit",style:{fontSize:16,color:"#fff",padding:"6px 12px",backgroundColor:"rgb(240, 21, 13)"},variant:"contained",color:"secondary",endIcon:Object(h.jsx)(v.a,{children:"send"}),children:"Submit"})]})})})}),Object(h.jsx)(O.a,{item:!0,md:6,xs:12,style:{background:"linear-gradient(90deg, rgba(240,28,89,1) 0%, rgba(233,215,153,1) 100%)"},children:Object(h.jsx)(j.a,{p:3,children:W.map((function(e,r){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(g,{data:e,deleteItem:J,editItems:H})})}))})})]})})},U=t(8),B=(t(68),function(){var e=Object(U.f)(),r=F((function(e){return e.users.userDetails}));return k((function(e){return e.users.setUserInfo}))(e),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"showItems",children:Object(h.jsxs)("div",{className:"eachItem",children:[Object(h.jsxs)("h1",{children:["Name: ",r.userName]}),Object(h.jsxs)("h1",{children:["Email: ",r.userEmail]}),Object(h.jsxs)("h1",{children:["Age: ",r.userAge]})]})})})});var q=function(){return Object(h.jsx)(A.a,{store:D,children:Object(h.jsx)(f.a,{basename:"/userform-typescript/",children:Object(h.jsxs)(U.c,{children:[Object(h.jsx)(U.a,{exact:!0,path:"/",component:w}),Object(h.jsx)(U.a,{exact:!0,path:"/information/:userId",component:B})]})})})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,98)).then((function(r){var t=r.getCLS,s=r.getFID,n=r.getFCP,a=r.getLCP,i=r.getTTFB;t(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root")),P()}},[[69,1,2]]]);
//# sourceMappingURL=main.9d700b77.chunk.js.map