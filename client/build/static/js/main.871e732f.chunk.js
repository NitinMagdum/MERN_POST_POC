(this.webpackJsonpfileupload=this.webpackJsonpfileupload||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),s=(a(77),a(63)),o=a(10),m=(a(78),a(135)),c=a(139),u=a(140);var p=function(){return l.a.createElement("div",null,l.a.createElement(m.a,{position:"static"},l.a.createElement(c.a,null,l.a.createElement(u.a,{variant:"h6",style:{flexFrow:1}},"File Upload Webapp"))))},d=a(28),h=a(25),g=a(40),E=a(41),v=a(20),y=a(45),b=a(44),x=a(42),f=a.n(x),C=(n.Component,a(142)),k=a(143),w=a(144),S=a(146),T=a(148),D=a(147),F=a(145),I=a(5),N=a(141),R=Object(I.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(N.a),P=function(e){Object(y.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(g.a)(this,a),(n=t.call(this,e)).state={formData:{tenant:"Next",level:"Rakuten 1",level2:"Shipping\xa0Transaction\xa01",selectFile:"",testType:"",testName:"",testDate:"",serialNumber:"",supplierCode:"",cellId:"",testSite:""},showProgressBar:!1,progressValue:0},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n.submitForm=n.submitForm.bind(Object(v.a)(n)),n.resetForm=n.resetForm.bind(Object(v.a)(n)),n}return Object(E.a)(a,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState({formData:Object(h.a)(Object(h.a)({},this.state.formData),{},Object(d.a)({},a,"selectFile"!==a?n:e.target.files))})}},{key:"submitForm",value:function(){var e=this;console.log(this.state);var t=new FormData(document.querySelector("form"));console.log(this.state.formData.selectFile[0]),console.log(t),f()({method:"post",headers:{"Content-Type":"multipart/form-data"},data:t,url:"http://localhost:8000/upload",onUploadProgress:function(t){var a=t.loaded,n=t.total,l=Math.floor(a/n*100);console.log(l),l<100&&e.setState(Object(h.a)(Object(h.a)({},e.state.formData),{},{showProgressBar:!0,progressValue:l}))}}).then((function(t){console.log(t.statusText),e.setState({progressValue:100},(function(){setTimeout((function(){e.setState({progressValue:0}),e.resetForm()}),500)}))})).catch((function(e){console.error(e)}))}},{key:"resetForm",value:function(){console.log("reset form"),document.getElementById("selectFile").value="",this.setState({formData:{tenant:"Next",level:"Rakuten 1",level2:"Shipping\xa0Transaction\xa01",selectFile:"",testType:"",testName:"",testDate:"",serialNumber:"",supplierCode:"",cellId:"",testSite:""}})}},{key:"render",value:function(){var e=this.state.formData,t=e.tenant,a=e.level,n=e.level2,r=(e.selectFile,e.testType),i=e.testName,s=e.testDate,o=e.serialNumber,m=e.supplierCode,c=e.cellId,u=e.testSite,p=this.state.progressValue,d=p+"%";return l.a.createElement(C.a,{variant:"outlined",style:{backgroundColor:"#ffffff",width:"70%",margin:"2% auto"}},l.a.createElement(k.a,null,l.a.createElement("form",{id:"myForm",encType:"multipart/form-data"},l.a.createElement(w.a,{container:!0,spacing:2,style:{marginTop:"0px"}},l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{select:!0,label:"Select Tenant",id:"tenant",name:"tenant",value:t,onChange:this.handleChange,variant:"outlined",style:{margin:"8px",width:"80%"},InputLabelProps:{shrink:!0}},l.a.createElement(T.a,{key:"Next",value:"Next"},"Next"),l.a.createElement(T.a,{key:"BCA",value:"BCA"},"BCA"),l.a.createElement(T.a,{key:"Instiu",value:"Instiu"},"Instiu"))),l.a.createElement(D.a,{xsDown:!0,smDown:!0},l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{select:!0,label:"Level 1",id:"level",name:"level",value:a,onChange:this.handleChange,variant:"outlined",style:{margin:"8px",width:"80%"},InputLabelProps:{shrink:!0}},l.a.createElement(T.a,{key:"Rakuten 1",value:"Rakuten 1"},"Rakuten 1"),l.a.createElement(T.a,{key:"Rakuten 2",value:"Rakuten 2"},"Rakuten 2"),l.a.createElement(T.a,{key:"Rakuten 3",value:"Rakuten 3"},"Rakuten 3"))),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{select:!0,label:"Level 2",id:"level2",name:"level2",value:n,onChange:this.handleChange,variant:"outlined",style:{margin:"8px",width:"80%"},InputLabelProps:{shrink:!0}},l.a.createElement(T.a,{key:"Shipping\xa0Transaction\xa01",value:"Shipping\xa0Transaction\xa01"},"Shipping\xa0Transaction\xa01"),l.a.createElement(T.a,{key:"Shipping\xa0Transaction 2",value:"Shipping\xa0Transaction 2"},"Shipping\xa0Transaction 2"),l.a.createElement(T.a,{key:"Shipping\xa0Transaction 3",value:"Shipping\xa0Transaction 3"},"Shipping\xa0Transaction 3"))),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"file",inputProps:{multiple:!0},id:"selectFile",name:"selectFile",label:"Select\xa0File(s)",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(D.a,{xsDown:!0,smDown:!0},l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6})),l.a.createElement(w.a,{item:!0,xs:12,sm:12},l.a.createElement("h3",{style:{textAlign:"center"}},"Enter Metadata")),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"testType",value:r,name:"testType",label:"Test Type",placeholder:"Enter Test Type",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"testName",value:i,name:"testName",label:"Test Name",placeholder:"Enter Test Name",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"date",id:"testDate",value:s,name:"testDate",label:"Test Date",placeholder:"Select Test Date",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"serialNumber",value:o,name:"serialNumber",label:"Serial Number",placeholder:"Enter Serial Number",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"supplierCode",value:m,name:"supplierCode",label:"Supplier Code",placeholder:"Enter Supplier Code",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"cellId",value:c,name:"cellId",label:"Cell Id",placeholder:"Enter Cell Id",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6},l.a.createElement(S.a,{type:"text",id:"testSite",value:u,name:"testSite",label:"Test Site",placeholder:"Enter Test Site",style:{margin:"8px",width:"80%"},margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:this.handleChange})),l.a.createElement(D.a,{xsDown:!0,smDown:!0},l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6})),l.a.createElement(w.a,{item:!0,xs:12},p>0&&l.a.createElement("h5",{style:{textAlign:"center"}},d),p>0&&l.a.createElement(R,{style:{width:"98%",margin:"auto"},variant:"determinate",value:p})),l.a.createElement(D.a,{xsDown:!0,smDown:!0},l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6})),l.a.createElement(w.a,{item:!0,xs:12,sm:12,md:6,style:{display:"flex",justifyContent:"end"}},l.a.createElement(F.a,{variant:"contained",id:"ResetForm",onClick:this.resetForm,style:{marginRight:"20px",marginLeft:"15px"}},"Reset"),l.a.createElement(F.a,{variant:"contained",color:"primary",id:"submitForm",onClick:this.submitForm,style:{marginRight:"10px"}},"Upload"))))))}}]),a}(n.Component);var j=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/"},l.a.createElement(P,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},72:function(e,t,a){e.exports=a(101)},77:function(e,t,a){},78:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.871e732f.chunk.js.map