(this.webpackJsonphospital_template=this.webpackJsonphospital_template||[]).push([[0],{102:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){},110:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},136:function(e,t,c){},137:function(e,t,c){},138:function(e,t,c){},140:function(e,t,c){"use strict";c.r(t);var a=c(4),s=c(1),n=c.n(s),i=c(21),l=c.n(i),r=(c(79),c(5)),j=c(8),o=c(11),d=c.n(o),b=c(22),m=(c(98),c(23)),h=c(0);var O=function(){var e=Object(s.useState)(""),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(b.a)(),l=i.register,r=i.handleSubmit,o=Object(m.d)(),O=new FormData;return O.append("file",c),O.append("upload_preset","medical_img"),O.append("cloud_name","rks"),Object(h.jsx)("div",{className:"data_entry_bg",children:Object(h.jsx)("div",{className:"data_entry_container",children:Object(h.jsxs)("form",{onSubmit:r((function(e){console.log(e),d.a.post("http://localhost:8000/post",e,{withCredentials:!0}).then((function(e){console.log(e.data.postData),200===e.status?o.success("Data Posted Successfully"):o.error("Data Not Posted"),d.a.post("https://api.cloudinary.com/v1_1/rks/image/upload",O).then((function(t){console.log(t.data.secure_url),d.a.patch("http://localhost:8000/imgupload/patch/".concat(e.data.postData._id),{img:t.data.secure_url},{withCredentials:!0}).then((function(e){console.log(e.data),200===e.status?o.success("Image Uploaded Successfully And Saved"):o.error("Image Not Uploaded Successfully")})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))})),children:[Object(h.jsxs)("div",{className:"data_entry_basic_info",children:[Object(h.jsx)("h3",{children:"Basic Info"}),Object(h.jsxs)("div",{className:"data_entry_basic_info_flex",children:[Object(h.jsxs)("div",{className:"data_entry_basic_info_section1",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Hospital Name"},l("hospital_name"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Latitude"},l("latitude"))),Object(h.jsx)("br",{}),Object(h.jsxs)("select",Object(a.a)(Object(a.a)({},l("sector")),{},{children:[Object(h.jsx)("option",{value:"",children:"Sector"}),Object(h.jsx)("option",{value:"Pvt",children:"Pvt"}),Object(h.jsx)("option",{value:"Govt",children:"Govt"})]}))]}),Object(h.jsxs)("div",{className:"data_entry_basic_info_section2",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Location"},l("location"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Longitude"},l("longitude"))),Object(h.jsx)("br",{}),Object(h.jsxs)("select",Object(a.a)(Object(a.a)({},l("covid_19")),{},{children:[Object(h.jsx)("option",{value:"",children:"COVID-19"}),Object(h.jsx)("option",{value:"true",children:"Yes"}),Object(h.jsx)("option",{value:"false",children:"No"})]}))]})]}),Object(h.jsx)("textarea",Object(a.a)({rows:"3",placeholder:"Full Address"},l("full_address")))]}),Object(h.jsxs)("div",{className:"data_entry_contact",children:[Object(h.jsx)("h3",{children:"Contact"}),Object(h.jsxs)("div",{className:"data_entry_contact_flex",children:[Object(h.jsxs)("div",{className:"data_entry_contact_section1",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Mobile Number 1"},l("mob_no_1"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Mobile Number 2"},l("mob_no_2"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Mobile Number 3"},l("mob_no_3")))]}),Object(h.jsxs)("div",{className:"data_entry_contact_section2",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Email Address 1"},l("email_1"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Email Address 2"},l("email_2"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Email Address 3"},l("email_3")))]})]})]}),Object(h.jsxs)("div",{className:"data_entry_treatment",children:[Object(h.jsx)("h3",{children:"Treatment"}),Object(h.jsxs)("div",{className:"data_entry_treatment_flex",children:[Object(h.jsxs)("div",{className:"data_entry_treatment_sector1",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 1"},l("treatment_1"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 2"},l("treatment_2"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 3"},l("treatment_3"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 4"},l("treatment_4"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 5"},l("treatment_5"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 6"},l("treatment_6"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 7"},l("treatment_7"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 8"},l("treatment_8"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 9"},l("treatment_9"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 10"},l("treatment_10")))]}),Object(h.jsxs)("div",{className:"data_entry_treatment_sector2",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 11"},l("treatment_11"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 12"},l("treatment_12"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 13"},l("treatment_13"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 14"},l("treatment_14"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 15"},l("treatment_15"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 16"},l("treatment_16"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 17"},l("treatment_17"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 18"},l("treatment_18"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 19"},l("treatment_19"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Treatment 20"},l("treatment_20")))]})]})]}),Object(h.jsxs)("div",{className:"data_entry_doctor",children:[Object(h.jsx)("h3",{children:"Doctor"}),Object(h.jsxs)("div",{className:"data_entry_doctor_flex",children:[Object(h.jsxs)("div",{className:"data_entry_doctor_sector1",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 1"},l("doctor_1"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 2"},l("doctor_2"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 3"},l("doctor_3")))]}),Object(h.jsxs)("div",{className:"data_entry_doctor_sector2",children:[Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 4"},l("doctor_4"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 5"},l("doctor_5"))),Object(h.jsx)("br",{}),Object(h.jsx)("input",Object(a.a)({placeholder:"Doctor Name 6"},l("doctor_6")))]})]})]}),Object(h.jsx)("div",{className:"data_entry_img",children:Object(h.jsx)("input",{type:"file",placeholder:"Choose Image",onChange:function(e){return n(e.target.files[0])}})}),Object(h.jsxs)("div",{className:"data_entry_about",children:[Object(h.jsx)("h3",{children:"About"}),Object(h.jsx)("textarea",Object(a.a)({rows:"7",placeholder:"Enter All About of Hospital"},l("about")))]}),Object(h.jsx)("div",{className:"data_entry_submit_btn",children:Object(h.jsx)("input",{type:"submit",value:"Submit"})})]})})})};c(102);var x=function(){var e=Object(b.a)(),t=e.register,c=e.handleSubmit,s=Object(r.g)();return Object(h.jsx)("div",{className:"Login",children:Object(h.jsxs)("div",{className:"login_detail ",children:[Object(h.jsx)("div",{className:"Log_img"}),Object(h.jsxs)("div",{className:"log_info",children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsx)("p",{children:"Welcomeback!Log in to your account to view today's clients:"}),Object(h.jsxs)("form",{onSubmit:c((function(e){d.a.post("http://localhost:8000/admin/login",e,{withCredentials:!0}).then((function(e){console.log(e),s.push("/admin/dataEntry")})).catch((function(e){console.log(e)}))})),children:[Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"far fa-envelope"}),Object(h.jsx)("input",Object(a.a)({type:"text",placeholder:"Email"},t("email")))]}),Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"fas fa-lock"}),Object(h.jsx)("input",Object(a.a)({type:"password",placeholder:"Password"},t("password")))]}),Object(h.jsx)("div",{className:"log_button",children:Object(h.jsx)("input",{type:"submit",value:"Login"})})]})]})]})})};c(105);var p=function(){var e=Object(b.a)(),t=e.register,c=e.handleSubmit;return Object(h.jsx)("div",{className:"Signup",children:Object(h.jsxs)("div",{className:"Signup_detail ",children:[Object(h.jsx)("div",{className:"Signup_img"}),Object(h.jsxs)("div",{className:"Signup_info",children:[Object(h.jsx)("h2",{children:"Sign up"}),Object(h.jsx)("p",{children:"Welcomeback!Log in to your account to view today's clients:"}),Object(h.jsxs)("form",{onSubmit:c((function(e){d.a.post("http://localhost:8000/admin/signup",e).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))})),children:[Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"far fa-user"}),Object(h.jsx)("input",Object(a.a)({type:"text",placeholder:"Name"},t("name")))]}),Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"far fa-envelope"}),Object(h.jsx)("input",Object(a.a)({type:"text",placeholder:"Email"},t("email")))]}),Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"fas fa-lock"}),Object(h.jsx)("input",Object(a.a)({type:"password",placeholder:"Password"},t("password")))]}),Object(h.jsxs)("div",{className:"txt_field",children:[Object(h.jsx)("i",{className:"fas fa-lock"}),Object(h.jsx)("input",Object(a.a)({type:"password",placeholder:"Confirm Password"},t("confirmPassword")))]}),Object(h.jsx)("div",{className:"sign_button",children:Object(h.jsx)("input",{type:"submit",value:"Sign up"})})]})]})]})})},u=c(10),_=c.n(u),v=c(19),f=(c(106),c(17));var g=function(){var e=Object(r.i)().id,t=Object(s.useState)([]),c=Object(j.a)(t,2),a=c[0],n=c[1];return Object(s.useEffect)((function(){d.a.get("http://localhost:8000/oneHospitalInfo/".concat(e)).then(function(){var e=Object(v.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(t.data.detals);case 2:console.log(t.data.detals);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e)}))}),[e]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"card_info_img",children:Object(h.jsx)("img",{src:a.img,alt:"logo"})}),Object(h.jsx)("div",{className:"card_info_details_bg",children:Object(h.jsxs)("div",{className:"card_info_details_container",children:[Object(h.jsx)("h2",{children:a.hospital_name}),Object(h.jsx)("p",{children:a.full_address}),Object(h.jsxs)("div",{className:"card_info_section1_flex",children:[Object(h.jsxs)("div",{className:"card_info_contact",children:[Object(h.jsx)("h3",{children:"Contact"}),a.mob_no?Object(h.jsxs)(h.Fragment,{children:[a.mob_no[0]?Object(h.jsx)("p",{children:a.mob_no[0]}):null,a.mob_no[1]?Object(h.jsx)("p",{children:a.mob_no[1]}):null,a.mob_no[2]?Object(h.jsx)("p",{children:a.mob_no[2]}):null]}):null,a.email?Object(h.jsxs)(h.Fragment,{children:[a.email[0]?Object(h.jsx)("p",{children:a.email[0]}):null,a.email[1]?Object(h.jsx)("p",{children:a.email[1]}):null,a.email[2]?Object(h.jsx)("p",{children:a.email[2]}):null]}):null]}),Object(h.jsx)("div",{className:"card_info_btn_map",children:Object(h.jsx)(f.b,{to:"/mapView?lat=".concat(a.latitude,"&long=").concat(a.longitude),children:Object(h.jsx)("p",{children:"Map"})})})]}),Object(h.jsx)("hr",{className:"horizontal_hr"}),Object(h.jsxs)("div",{className:"card_info_treatment",children:[Object(h.jsx)("h3",{children:"Treatment"}),a.treatment?Object(h.jsxs)("div",{className:"card_info_section2_flex",children:[Object(h.jsxs)("div",{className:"card_info_treatment1",children:[Object(h.jsx)("p",{children:a.treatment[0]}),Object(h.jsx)("p",{children:a.treatment[2]}),Object(h.jsx)("p",{children:a.treatment[4]}),Object(h.jsx)("p",{children:a.treatment[6]}),Object(h.jsx)("p",{children:a.treatment[8]}),Object(h.jsx)("p",{children:a.treatment[10]}),Object(h.jsx)("p",{children:a.treatment[12]}),Object(h.jsx)("p",{children:a.treatment[14]}),Object(h.jsx)("p",{children:a.treatment[16]}),Object(h.jsx)("p",{children:a.treatment[18]})]}),Object(h.jsx)("hr",{className:"vertical_hr"}),Object(h.jsxs)("div",{className:"card_info_treatment2",children:[Object(h.jsx)("p",{children:a.treatment[1]}),Object(h.jsx)("p",{children:a.treatment[3]}),Object(h.jsx)("p",{children:a.treatment[5]}),Object(h.jsx)("p",{children:a.treatment[7]}),Object(h.jsx)("p",{children:a.treatment[9]}),Object(h.jsx)("p",{children:a.treatment[11]}),Object(h.jsx)("p",{children:a.treatment[13]}),Object(h.jsx)("p",{children:a.treatment[15]}),Object(h.jsx)("p",{children:a.treatment[17]}),Object(h.jsx)("p",{children:a.treatment[19]})]})]}):null]}),Object(h.jsx)("hr",{className:"horizontal_hr"}),Object(h.jsxs)("div",{className:"card_info_doctor",children:[Object(h.jsx)("h3",{children:"Doctor"}),a.doctor?Object(h.jsxs)(h.Fragment,{children:[a.doctor[0]?Object(h.jsxs)("p",{children:["Dr. ",a.doctor[0]]}):null,a.doctor[1]?Object(h.jsxs)("p",{children:["Dr. ",a.doctor[1]]}):null,a.doctor[2]?Object(h.jsxs)("p",{children:["Dr. ",a.doctor[2]]}):null,a.doctor[3]?Object(h.jsxs)("p",{children:["Dr. ",a.doctor[3]]}):null,a.doctor[4]?Object(h.jsxs)("p",{children:["Dr. ",a.doctor[4]]}):null]}):null]}),Object(h.jsx)("hr",{className:"horizontal_hr"}),Object(h.jsxs)("div",{className:"card_info_about",children:[Object(h.jsx)("h3",{children:"About"}),Object(h.jsx)("p",{className:"card_info_about_container",children:a.about})]}),Object(h.jsx)("hr",{className:"horizontal_hr card_info_end_hr"})]})})]})};c(107);var N=function(){var e=Object(m.d)(),t=Object(b.a)(),c=t.register,s=t.handleSubmit,n=Object(r.g)();return Object(h.jsxs)("div",{className:"contact",children:[Object(h.jsx)("div",{className:"contact_polygon"}),Object(h.jsxs)("div",{className:"contact_rapper",children:[Object(h.jsxs)("div",{className:"contact_text",children:[Object(h.jsx)("h2",{children:"We Welcome Your Questions"}),Object(h.jsx)("h4",{children:"Email: email@gmail.com"})]}),Object(h.jsxs)("div",{className:"feedback_form",children:[Object(h.jsx)("h3",{children:"How Was Your Experience ?"}),Object(h.jsx)("p",{children:"Demo Line"}),Object(h.jsx)("div",{className:"feedback_form_rapper",children:Object(h.jsxs)("form",{onSubmit:s((function(t){console.log(t),d.a.post("http://localhost:8000/feedback/dataPost",t).then((function(t){console.log(t),200===t.status&&e.success(t.data.msg),400===t.status&&e.error(t.data.msg),n.push("/")})).catch((function(e){console.log(e)}))})),children:[Object(h.jsx)("div",{className:"ContactName",children:Object(h.jsx)("input",Object(a.a)({type:"text",placeholder:"Name"},c("name")))}),Object(h.jsx)("div",{className:"ContactEmail",children:Object(h.jsx)("input",Object(a.a)({type:"text",placeholder:"Email"},c("email")))}),Object(h.jsx)("div",{className:"ContactFeedback",children:Object(h.jsx)("textarea",Object(a.a)({maxLength:"300",rows:"6",placeholder:"FeedBack"},c("feedback")))}),Object(h.jsx)("div",{className:"Contact_button_rapper",children:Object(h.jsx)("button",{className:"Contact_button",type:"submit",children:"Submit"})})]})})]})]})]})};c(108);var y=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(s.useEffect)((function(){d.a.get("http://localhost:8000/feedback/dataGet",{withCredentials:!0}).then((function(e){console.log(e.data),a(e.data.feedbackData)})).catch((function(e){console.log(e)}))}),[]),Object(h.jsx)("div",{className:"feedback_view_bg",children:Object(h.jsx)("div",{className:"feedback_view_rapper",children:c.map((function(e){return Object(h.jsx)("div",{className:"feedback_view_card_rapper",children:Object(h.jsxs)("div",{className:"feedback_view_card",children:[Object(h.jsx)("h2",{children:e.name}),Object(h.jsxs)("h4",{children:["Email: ",e.email]}),Object(h.jsx)("p",{children:e.feedback})]})},e._id)}))})})};c(109);var w=function(){return Object(h.jsx)("div",{className:"footer_bg",children:Object(h.jsxs)("div",{className:"footer_main",children:[Object(h.jsxs)("div",{className:"col_logo",children:[Object(h.jsx)("h3",{children:"Logo"}),Object(h.jsx)("p",{children:"Tag Line"})]}),Object(h.jsxs)("div",{className:"col_contact",children:[Object(h.jsx)("h3",{children:"Contact"}),Object(h.jsx)("p",{children:"Email: sagnik@gmail.com"}),Object(h.jsx)("p",{children:"Phone: +91 6454665456"})]}),Object(h.jsxs)("div",{className:"col_about",children:[Object(h.jsx)("h3",{children:"About"}),Object(h.jsx)("p",{children:"In this website we are providing a detailed information of doctor name, treatment and hospital basic information with a simple and attractive UI design."})]})]})})},k=(c(110),c(69)),S=c.p+"static/media/logo.1b84ed02.png";c(116);var D=function(e){return Object(h.jsx)("div",{className:"hos_card",children:Object(h.jsx)("div",{className:"hos_card_bg",children:Object(h.jsxs)("div",{className:"hos_card_text",children:[Object(h.jsx)("h3",{children:e.hospital_name}),Object(h.jsx)("p",{children:e.full_address}),Object(h.jsxs)("div",{className:"hos_card_treatment_rapper",children:[Object(h.jsx)("p",{className:"hos_card_treatment_headline",children:"Treatment"}),Object(h.jsxs)("div",{className:"hos_card_treatment_flex",children:[Object(h.jsxs)("div",{className:"hos_card_treatment_section1",children:[Object(h.jsx)("p",{children:e.treatment_1}),Object(h.jsx)("p",{children:e.treatment_2}),Object(h.jsx)("p",{children:e.treatment_3}),Object(h.jsx)("p",{children:e.treatment_4}),Object(h.jsx)("p",{children:e.treatment_5}),Object(h.jsx)("p",{children:e.treatment_6}),Object(h.jsx)("p",{children:e.treatment_7}),Object(h.jsx)("p",{children:e.treatment_8}),Object(h.jsx)("p",{children:e.treatment_9}),Object(h.jsx)("p",{children:e.treatment_10})]}),Object(h.jsxs)("div",{className:"hos_card_treatment_section2",children:[Object(h.jsx)("p",{children:e.treatment_11}),Object(h.jsx)("p",{children:e.treatment_12}),Object(h.jsx)("p",{children:e.treatment_13}),Object(h.jsx)("p",{children:e.treatment_14}),Object(h.jsx)("p",{children:e.treatment_15}),Object(h.jsx)("p",{children:e.treatment_16}),Object(h.jsx)("p",{children:e.treatment_17}),Object(h.jsx)("p",{children:e.treatment_18}),Object(h.jsx)("p",{children:e.treatment_19}),Object(h.jsx)("p",{children:e.treatment_20})]})]})]})]})})})},A=(c(117),c(70)),T=c.n(A);var C=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],n=Object(s.useState)(0),i=Object(j.a)(n,2),l=i[0],r=i[1],o=Object(s.useState)(""),b=Object(j.a)(o,2),m=b[0],O=b[1],x=Object(s.useState)(""),p=Object(j.a)(x,2),u=p[0],_=p[1],v=Object(s.useState)(""),g=Object(j.a)(v,2),N=g[0],y=g[1],w=Object(s.useState)(""),k=Object(j.a)(w,2),S=k[0],A=k[1];return Object(s.useEffect)((function(){d.a.get("http://localhost:8000/getAllData").then((function(e){console.log(e.data),a(e.data.getDetails),r(Math.ceil(e.data.number_of_item/10))})).catch((function(e){console.log(e)}))}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{id:"filter",className:"hos_filter_bg",children:Object(h.jsxs)("div",{className:"hos_filter",children:[Object(h.jsx)("div",{className:"type",children:Object(h.jsxs)("select",{className:"input_type",onChange:function(e){return y(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Treatment"}),Object(h.jsx)("option",{value:"eye",children:"Eye"}),Object(h.jsx)("option",{value:"nose",children:"Nose"}),Object(h.jsx)("option",{value:"BBC",children:"BBC"})]})}),Object(h.jsx)("div",{className:"sector",children:Object(h.jsxs)("select",{onChange:function(e){return _(e.target.value)},className:"input_sector",children:[Object(h.jsx)("option",{value:"",children:"Sector"}),Object(h.jsx)("option",{value:"govt",children:"Government"}),Object(h.jsx)("option",{value:"pvt",children:"Private"})]})}),Object(h.jsx)("div",{className:"location",children:Object(h.jsxs)("select",{className:"input_sector",children:[Object(h.jsx)("option",{value:"",children:"Location"}),Object(h.jsx)("option",{value:"kolkata",children:"Kolkata"}),Object(h.jsx)("option",{value:"none",children:"None"})]})}),Object(h.jsx)("div",{className:"hospital_name_search",children:Object(h.jsx)("input",{className:"input_name_search",placeholder:"Hospital Name",value:m,onChange:function(e){return O(e.target.value)},type:"text"})}),Object(h.jsx)("div",{className:"search",children:Object(h.jsx)("input",{className:"search_btn",value:"Search",type:"button",onClick:function(){var e="";N&&(e+="treatment=".concat(N,"&")),u&&(e+="sector=".concat(u,"&")),m&&(e+="name=".concat(m,"&")),e&&A(e),console.log(e),d.a.get("http://localhost:8000/getAllData?".concat(e)).then((function(e){console.log(e.data),a(e.data.getDetails),console.log(e.data.getDetails.length),r(Math.ceil(e.data.number_of_item_search/10))})).catch((function(e){console.log(e)}))}})})]})}),Object(h.jsxs)("div",{className:"main_container_bg",children:[Object(h.jsx)("div",{className:"main_container",children:c.map((function(e){return Object(h.jsx)(f.b,{to:"/cardInfo/".concat(e._id),children:Object(h.jsx)(D,{hospital_name:e.hospital_name,full_address:e.full_address,treatment_1:e.treatment[0],treatment_2:e.treatment[1],treatment_3:e.treatment[2],treatment_4:e.treatment[3],treatment_5:e.treatment[4],treatment_6:e.treatment[5],treatment_7:e.treatment[6],treatment_8:e.treatment[7],treatment_9:e.treatment[8],treatment_10:e.treatment[9],treatment_11:e.treatment[10],treatment_12:e.treatment[11],treatment_13:e.treatment[12],treatment_14:e.treatment[13],treatment_15:e.treatment[14],treatment_16:e.treatment[15],treatment_17:e.treatment[16],treatment_18:e.treatment[17],treatment_19:e.treatment[18],treatment_20:e.treatment[19]})},e._id)}))}),l>1?Object(h.jsx)(T.a,{previousLabel:"Previous",nextLabel:"Next",containerClassName:"pagination",pageCount:l,forcePage:0,onPageChange:function(e){var t=e.selected;d.a.get("http://localhost:8000/getAllData?page=".concat(t+1,"&").concat(S)).then((function(e){console.log(e.data),a(e.data.getDetails)})).catch((function(e){console.log(e)})),console.log(t)},activeClassName:"active_page_link",disabledClassName:"disable_page_link"}):null]})]})};var E=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"on_carousel",children:[Object(h.jsx)("div",{className:"carousel",children:Object(h.jsxs)(k.Carousel,{showStatus:!1,showArrows:!1,autoPlay:!0,infiniteLoop:!0,showThumbs:!1,showIndicators:!1,children:[Object(h.jsx)("div",{className:"carousel_img",children:Object(h.jsx)("img",{src:S,alt:"logo"})}),Object(h.jsx)("div",{className:"carousel_img",children:Object(h.jsx)("img",{src:S,alt:"logo"})}),Object(h.jsx)("div",{className:"carousel_img",children:Object(h.jsx)("img",{src:S,alt:"logo"})})]})}),Object(h.jsxs)("div",{className:"heading_text",children:[Object(h.jsx)("p",{children:"Providing Information"}),Object(h.jsxs)("p",{children:["In ",Object(h.jsx)("span",{children:"Emergency Case"})]}),Object(h.jsx)("div",{className:"btn_lern_more",children:Object(h.jsx)("a",{href:"#filter",children:Object(h.jsx)("p",{children:"Learn more"})})})]})]}),Object(h.jsx)(C,{})]})},I=c(71),L=c.n(I),F=c(40);var P=function(){var e=Object(r.h)().search,t=L.a.parse(e),c=t.lat,i=t.long,l=n.a.useState({latitude:22,longitude:88,zoom:12}),o=Object(j.a)(l,2),d=o[0],b=o[1];return Object(s.useEffect)((function(){b({latitude:parseFloat(c),longitude:parseFloat(i),zoom:12})}),[c,i]),Object(h.jsx)("div",{children:Object(h.jsx)(F.b,Object(a.a)(Object(a.a)({},d),{},{mapboxApiAccessToken:"pk.eyJ1Ijoid2VibG9vcDAwNyIsImEiOiJja3BmY3pvb20wMjVxMm5tbGs2MnNmcGlrIn0.7twXmO_AG1DfFttdtzEfhg",mapStyle:"mapbox://styles/mapbox/streets-v11",width:"100%",height:"calc(100vh - 70px)",onViewportChange:function(e){return b(e)},children:c&&i?Object(h.jsx)(F.a,{latitude:parseFloat(c),longitude:parseFloat(i),children:Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#D0312D",children:[Object(h.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(h.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"})]})}):null}))})};c(136);var W=function(){var e=Object(s.useState)(!1),t=Object(j.a)(e,2),c=t[0],a=t[1];return Object(h.jsx)("div",{className:"nav_bg",children:Object(h.jsxs)("div",{className:"nav_container",children:[Object(h.jsx)("div",{className:"nav_img",children:Object(h.jsx)("img",{src:S,alt:"Logo"})}),Object(h.jsxs)("div",{id:c?"mobile_nav_links":"",className:"nav_links",children:[Object(h.jsx)("div",{className:"nav_home",children:Object(h.jsx)(f.b,{to:"/",children:Object(h.jsx)("p",{children:"Home"})})}),Object(h.jsx)("div",{className:"nav_about",children:Object(h.jsx)(f.b,{to:"/about",children:Object(h.jsx)("p",{children:"About"})})}),Object(h.jsx)("div",{className:"nav_contact",children:Object(h.jsx)(f.b,{to:"/feedback",children:Object(h.jsx)("p",{children:"FeedBack"})})})]}),Object(h.jsx)("div",{className:"nav_btn",children:Object(h.jsx)("p",{onClick:function(){return a(!c)},children:"Button"})})]})})},B=c.p+"static/media/unnamed.812d56d8.png",M=c.p+"static/media/kg.6276c6b5.jpeg",z=c.p+"static/media/sagnik.783bceb9.jpeg",G=c.p+"static/media/amartya.5c9deb23.jpeg",H=c.p+"static/media/rahul.da8a333f.jpeg",V=(c(137),c(138),function(e){var t=e.img,c=e.name,a=e.designation;return Object(h.jsx)("div",{className:"Team_card_col",children:Object(h.jsxs)("div",{className:"Team_card_rapper",children:[Object(h.jsx)("div",{className:"Team_card_img",children:Object(h.jsx)("img",{src:t,alt:"logo"})}),Object(h.jsxs)("div",{className:"Team_card_info",children:[Object(h.jsx)("h3",{children:c}),Object(h.jsx)("p",{children:a})]})]})})}),Y=function(){return Object(h.jsxs)("div",{className:"about",children:[Object(h.jsx)("h2",{children:"About"}),Object(h.jsxs)("div",{className:"About_rapper",children:[Object(h.jsxs)("div",{className:"About_selection1",children:[Object(h.jsxs)("div",{className:"About_selction1_text",children:[Object(h.jsx)("h3",{children:"What We Are Doing?"}),Object(h.jsx)("p",{children:"We are providing a vast hospital analysis website with a detailed information of doctor name and treatment with a simple and attractive UI design."}),Object(h.jsx)("h3",{children:"What Matters To You (visitor) ?"}),Object(h.jsx)("p",{children:"In emergency, you will get a detail analytics of hospitals to admit your closest person in least time."})]}),Object(h.jsx)("div",{className:"About_selection1_image",children:Object(h.jsx)("img",{src:B,alt:"About"})})]}),Object(h.jsxs)("div",{className:"About_selection2",children:[Object(h.jsx)("div",{className:"About_selection2_image",children:Object(h.jsx)("img",{src:B,alt:"About"})}),Object(h.jsxs)("div",{className:"About_selction2_text",children:[Object(h.jsx)("h3",{children:"What We Are?"}),Object(h.jsx)("p",{children:"We are team of four members with a graduation on Bcs CS and we want to help our society with a website has a valuable data."}),Object(h.jsx)("h3",{children:"How You Do It ?"}),Object(h.jsx)("p",{children:"We visit hospitals and use online source to fullfill the details."})]})]})]}),Object(h.jsxs)("div",{className:"About_team",children:[Object(h.jsx)("h2",{children:"Team"}),Object(h.jsxs)("div",{className:"About_row",children:[Object(h.jsx)(V,{img:z,name:"Sagnik Biswas",designation:"Web Developer"}),Object(h.jsx)(V,{img:M,name:"Kajol Ghosh",designation:"Web Developer"}),Object(h.jsx)(V,{img:H,name:"Rahul Banik",designation:"Web Developer"}),Object(h.jsx)(V,{img:G,name:"Amartya Barman",designation:"Web Developer"})]})]})]})};var J=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(W,{}),Object(h.jsxs)(r.d,{children:[Object(h.jsx)(r.b,{exact:!0,path:"/",component:E}),Object(h.jsx)(r.b,{path:"/cardInfo/:id",component:g}),Object(h.jsx)(r.b,{path:"/mapView",component:P}),Object(h.jsx)(r.b,{path:"/feedback",component:N}),Object(h.jsx)(r.b,{path:"/about",component:Y}),Object(h.jsx)(r.b,{path:"/admin/feedbackView",component:y}),Object(h.jsx)(r.b,{path:"/admin/dataEntry",component:O}),Object(h.jsx)(r.b,{path:"/admin/login",component:x}),Object(h.jsx)(r.b,{path:"/admin/signup",component:p}),Object(h.jsx)(r.a,{to:"/"})]}),Object(h.jsx)(w,{})]})},U=(c(139),c(74)),K={position:m.b.TOP_RIGHT,timeout:5e3,offset:"30px",transition:m.c.SCALE};l.a.render(Object(h.jsx)(m.a,Object(a.a)(Object(a.a)({template:U.a},K),{},{children:Object(h.jsx)(f.a,{children:Object(h.jsx)(J,{})})})),document.getElementById("root"))},79:function(e,t,c){},98:function(e,t,c){}},[[140,1,2]]]);
//# sourceMappingURL=main.46b55d8b.chunk.js.map