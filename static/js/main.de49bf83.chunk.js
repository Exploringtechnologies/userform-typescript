(this.webpackJsonpuserformtypescript=this.webpackJsonpuserformtypescript||[]).push([[0],{64:function(e,r,t){},73:function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),s=t(23),i=t.n(s),c=(t(64),t(27)),o=t.n(c),u=t(33),l=t(34),d=t(40),m=t(53),b=t(92),j=t(99),f=t(93),h=t(94),p=t(95),x=t(29),g=t(15),O={users:{users:[],userDetails:{userId:"",userName:"",userEmail:"",userAge:void 0},createUser:Object(g.b)((function(e,r){e.users.push(r)})),removeUser:Object(g.b)((function(e,r){e.users=e.users.filter((function(e){return e.userId!==r}))})),updateUser:Object(g.b)((function(e,r){var t=e.users.findIndex((function(e){return e.userId===r.userId}));-1!==t&&(e.users[t]=r)})),setUserInfo:Object(g.b)((function(e,r){var t=e.users.find((function(e){return e.userId===r.userId}));(null===t||void 0===t?void 0:t.userId)===r.userId&&(e.userDetails=t)}))}},y=Object(g.c)(Object(g.e)(O)),N=Object(g.d)(),v=N.useStoreActions,I=(N.useStoreDispatch,N.useStoreState),C=y,S=t(2),F=Object(b.a)({Box:{background:"rgb(85, 41, 220)"}}),k=function(e){var r=e.info,t=e.editItems,a=F(),n=v((function(e){return e.users.removeUser})),s=function(){var e=Object(u.a)(o.a.mark((function e(r,t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Deleting a User \nid: ".concat(r," \nName: ").concat(t," \ncan't be restored?"))){e.next=3;break}return e.abrupt("return");case 3:n(String(r));case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}();return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)("div",{children:Object(S.jsxs)(j.a,{p:2,borderRadius:10,mb:2,className:a.Box,children:[Object(S.jsxs)(f.a,{variant:"h6",style:{display:"flex"},children:[" Name  : ",r.userName]}),Object(S.jsxs)(f.a,{variant:"h6",style:{display:"flex"},children:[" Email : ",r.userEmail," "]}),Object(S.jsxs)(f.a,{variant:"h6",style:{display:"flex"},children:[" Age : ",r.userAge]}),Object(S.jsx)(h.a,{size:"medium",onClick:function(){t(r)},"aria-label":"edit",children:Object(S.jsx)(p.a,{fontSize:"large",color:"secondary",className:"fas fa-pencil-alt"})}),Object(S.jsx)(h.a,{size:"medium",onClick:function(){s(Number(r.userId),r.userName)},"aria-label":"edit",children:Object(S.jsx)(p.a,{fontSize:"large",color:"primary",className:"fas fa-trash"})}),Object(S.jsx)(x.b,{to:"/information/"+r.userId,children:Object(S.jsx)(h.a,{size:"medium","aria-label":"edit",children:Object(S.jsx)(p.a,{fontSize:"large",color:"error",className:"fas fa-arrow-circle-right"})})})]},Number(r.userId))},Number(r.userId))})},A=t(96),E=t(104),w=t(103),B=t(100),D=t(97),U=t(102),z=Object(b.a)({SubmitButton:{fontSize:16,color:"#fff",padding:"6px 12px",backgroundColor:"rgb(240, 21, 13)",lineHeight:1.5,"&:hover":{backgroundColor:"#F4D03F",borderColor:"#21618C",color:"#C0392B",boxShadow:"none"}},UpdateButton:{fontSize:16,color:"#C0392B",padding:"6px 12px",lineHeight:1.5,backgroundColor:"#F4D03F","&:hover":{backgroundColor:"rgb(240, 21, 13)",borderColor:"#21618C",color:"#fff",boxShadow:"none"}},GridForm:{background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"},GridDisplay:{background:"linear-gradient(90deg, rgba(240,28,89,1) 0%, rgba(233,215,153,1) 100%)"},BoxForm:{backgroundColor:"rgba(148,187,233,1) 100%",width:"50%"},FormControl:{display:"block",marginBottom:"20px"},Reset:{marginBottom:"10px",fontSize:16,color:"#C0392B",padding:"6px 12px",lineHeight:1.5,backgroundColor:"#F4D03F",width:"100%","&:hover":{backgroundColor:"rgb(240, 21, 13)",borderColor:"#21618C",color:"#fff",boxShadow:"none"}}}),T=function(){var e=z(),r=I((function(e){return e.users.users})),t=v((function(e){return e.users.createUser})),n=v((function(e){return e.users.updateUser})),s=Object(a.useState)({userId:"",userName:"",userEmail:"",userAge:void 0}),i=Object(m.a)(s,2),c=i[0],b=i[1],f=function(e){var r=e.target,t=r.name,a=r.value;b(Object(d.a)(Object(d.a)({},c),{},Object(l.a)({},t,a)))},h=function(e){return e.userId?(b({userId:e.userId,userName:e.userName,userEmail:e.userEmail,userAge:e.userAge}),e.userId):null},x=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.persist.clear();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(A.a,{container:!0,children:[Object(S.jsx)(A.a,{item:!0,md:8,xs:12,className:e.GridForm,children:Object(S.jsx)(j.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:Object(S.jsx)(j.a,{p:5,borderRadius:15,boxShadow:3,className:e.BoxForm,children:Object(S.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c.userId?(n({userId:String(c.userId),userName:c.userName,userEmail:c.userEmail,userAge:Number(c.userAge)}),b({userId:"",userName:"",userEmail:"",userAge:0}),C.persist.flush()):(t({userId:String(Number(Math.random().toString().slice(2,11))),userName:c.userName,userEmail:c.userEmail,userAge:Number(c.userAge)}),b({userId:"",userName:"",userEmail:"",userAge:0}),C.persist.flush())},autoComplete:"off",children:[Object(S.jsxs)(E.a,{variant:"filled",color:"primary",className:e.FormControl,children:[Object(S.jsx)(w.a,{htmlFor:"component-filled",children:"Name"}),Object(S.jsx)(B.a,{type:"text",id:"component-filled",value:c.userName,onChange:f,name:"userName",required:!0,fullWidth:!0,autoComplete:"off"})]}),Object(S.jsxs)(E.a,{variant:"filled",color:"primary",className:e.FormControl,children:[Object(S.jsx)(w.a,{htmlFor:"component-outlined",children:"Email"}),Object(S.jsx)(B.a,{type:"text",id:"component-outlined",value:c.userEmail,onChange:f,name:"userEmail",required:!0,fullWidth:!0,autoComplete:"off"})]}),Object(S.jsxs)(E.a,{variant:"filled",color:"primary",className:e.FormControl,children:[Object(S.jsx)(w.a,{htmlFor:"component-outlined",children:"Age"}),Object(S.jsx)(B.a,{type:"number",id:"component-outlined",value:c.userAge,onChange:f,name:"userAge",required:!0,fullWidth:!0,autoComplete:"off"})]}),c.userId?Object(S.jsx)(D.a,{type:"submit",className:e.UpdateButton,endIcon:Object(S.jsx)(U.a,{}),children:" Update"}):Object(S.jsx)(D.a,{type:"submit",className:e.SubmitButton,variant:"contained",color:"secondary",endIcon:Object(S.jsx)(p.a,{children:"send"}),children:"Submit"})]})})})}),Object(S.jsx)(A.a,{item:!0,md:4,xs:12,className:e.GridDisplay,children:Object(S.jsxs)(j.a,{p:2,children:[r.length>1?Object(S.jsx)(D.a,{type:"reset",className:e.Reset,variant:"contained",color:"secondary",onClick:function(){x()},endIcon:Object(S.jsx)("i",{className:"fas fa-broom"}),children:"Clear All"}):null,r.map((function(e,r){return Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(k,{info:e,editItems:h})})}))]})})]})})},G=t(8),H=Object(b.a)({Grid:{background:"radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"},Box:{background:"rgb(85, 41, 220)"},Typography:{display:"flex"}}),R=function(){var e=H(),r=Object(G.f)(),t=I((function(e){return e.users.userDetails}));return(0,v((function(e){return e.users})).setUserInfo)(r),Object(S.jsx)(S.Fragment,{children:null!==t.userId?Object(S.jsx)(A.a,{container:!0,children:Object(S.jsx)(A.a,{item:!0,md:12,xs:12,className:e.Grid,children:Object(S.jsx)(j.a,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",children:Object(S.jsxs)(j.a,{p:2,borderRadius:10,mb:2,className:e.Box,children:[Object(S.jsxs)(f.a,{variant:"h6",className:e.Typography,children:[" Name : ",t.userName]}),Object(S.jsxs)(f.a,{variant:"h6",className:e.Typography,children:["  Email : ",t.userEmail," "]}),Object(S.jsxs)(f.a,{variant:"h6",className:e.Typography,children:["  Age : ",t.userAge]})]},Number(t.userId))})})}):Object(S.jsx)("h1",{children:"Sorry! the page your are visiting does'nt contain any information or the id is invalid. Try again later"})})},q=t(52),W=t(98),J=Object(q.a)({palette:{primary:{main:"#ff1744"},secondary:{main:"#69f0ae"},error:{main:"#cddc39"}},spacing:15});var L=function(){return Object(S.jsx)(W.a,{theme:J,children:Object(S.jsx)(g.a,{store:C,children:Object(S.jsx)(x.a,{basename:"/userform-typescript/",children:Object(S.jsxs)(G.c,{children:[Object(S.jsx)(G.a,{exact:!0,path:"/",component:T}),Object(S.jsx)(G.a,{exact:!0,path:"/information/:userId",component:R})]})})})})},M=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,105)).then((function(r){var t=r.getCLS,a=r.getFID,n=r.getFCP,s=r.getLCP,i=r.getTTFB;t(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(S.jsx)(n.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),M()}},[[73,1,2]]]);
//# sourceMappingURL=main.de49bf83.chunk.js.map