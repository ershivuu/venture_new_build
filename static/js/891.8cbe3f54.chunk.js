"use strict";(self.webpackChunknew_venture=self.webpackChunknew_venture||[]).push([[891],{8525:(t,e,a)=>{a.d(e,{H:()=>r});const r="https://corusviewventure.com/api"},6349:(t,e,a)=>{a.d(e,{A:()=>i});a(5043);var r=a(4836),n=a(5397),o=a(1386),c=a(579);const i=function(t){let{open:e,handleClose:a,alertMessage:i,alertSeverity:s}=t;return s=s||"default",(0,c.jsx)(n.A,{open:e,autoHideDuration:3e3,onClose:a,anchorOrigin:{vertical:"top",horizontal:"right"},sx:{width:"25%",marginTop:"3.5em","@media (max-width: 600px)":{width:"95%",maxWidth:"95%"}},variant:"filled",TransitionComponent:r.A,children:(0,c.jsx)(o.A,{onClose:a,severity:s,sx:{width:"100%"},children:i})})}},4891:(t,e,a)=>{a.r(e),a.d(e,{default:()=>S});var r=a(5043),n=a(1563),o=a(6446),c=a(5865),i=a(9650),s=a(3336),d=a(1806),l=a(4882),u=a(8076),h=a(2420),g=a(3460),m=a(1906),p=a(35),y=a(6600),A=a(5316),w=a(5795),f=a(9347),E=a(5540),x=a(3471),v=a(6349),C=a(579);const S=function(){const[t,e]=(0,r.useState)([]),[a,S]=(0,r.useState)(!1),[j,b]=(0,r.useState)(!1),[I,_]=(0,r.useState)(null),[T,F]=(0,r.useState)(null),[k,H]=(0,r.useState)(null),[D,M]=(0,r.useState)({open:!1,message:"",severity:"info"}),[N,B]=(0,r.useState)(""),P=async()=>{try{const t=await(0,n.$h)();console.log(t,"Fetched slider images");const a=t.flatMap((t=>t.slider_images));e(a)}catch(t){console.error("Error fetching slider images:",t)}};(0,r.useEffect)((()=>{P()}),[]);const z=()=>{S(!1),F(null),B("")},R=()=>{b(!1),H(null)};return(0,C.jsxs)(o.A,{sx:{p:2},children:[(0,C.jsx)(c.A,{variant:"h4",gutterBottom:!0,children:"Slider Images"}),(0,C.jsx)(i.A,{component:s.A,children:(0,C.jsxs)(d.A,{children:[(0,C.jsx)(l.A,{children:(0,C.jsxs)(u.A,{children:[(0,C.jsx)(h.A,{children:"S No."}),(0,C.jsx)(h.A,{children:"File Name"}),(0,C.jsx)(h.A,{children:"Image"}),(0,C.jsx)(h.A,{children:"Edit"}),(0,C.jsx)(h.A,{children:"Delete"})]})}),(0,C.jsx)(g.A,{children:t.map(((t,e)=>(0,C.jsxs)(u.A,{children:[(0,C.jsx)(h.A,{children:e+1}),(0,C.jsx)(h.A,{children:t.file_name}),(0,C.jsx)(h.A,{children:(0,C.jsx)("img",{src:t.slider_img_path,alt:t.file_name,width:"100"})}),(0,C.jsx)(h.A,{children:(0,C.jsx)(m.A,{startIcon:(0,C.jsx)(E.A,{}),onClick:()=>(_(t),void S(!0)),children:"Edit"})}),(0,C.jsx)(h.A,{children:(0,C.jsx)(m.A,{startIcon:(0,C.jsx)(x.A,{}),onClick:()=>{return e=t.id,H(e),void b(!0);var e},color:"error",children:"Delete"})})]},t.id)))})]})}),(0,C.jsxs)(p.A,{open:a,onClose:z,children:[(0,C.jsx)(y.A,{children:"Edit Slider Image"}),(0,C.jsxs)(A.A,{children:[(0,C.jsx)(w.A,{type:"file",onChange:t=>{const e=t.target.files[0];return["image/jpeg","image/png","image/jpg"].includes(e.type)?e.size>20971520?(M({open:!0,message:"File size exceeds 20MB limit.",severity:"error"}),F(null),void B("")):(F(e),void B("")):(M({open:!0,message:"Invalid file type. Only JPG, JPEG, and PNG are allowed.",severity:"error"}),F(null),void B(""))},fullWidth:!0}),N&&(0,C.jsx)(c.A,{color:"error",children:N})]}),(0,C.jsxs)(f.A,{children:[(0,C.jsx)(m.A,{onClick:z,children:"Cancel"}),(0,C.jsx)(m.A,{onClick:async()=>{if(T)try{const t=await(0,n.IG)(I.id,T),a=(await(0,n.$h)()).flatMap((t=>t.slider_images));e(a),M({open:!0,message:t.message,severity:"success"}),z()}catch(r){var t,a;console.error("Error updating slider image:",r),M({open:!0,message:(null===(t=r.response)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.message)||"Error updating image",severity:"error"})}else B("This field is required")},variant:"contained",color:"primary",children:"Update"})]})]}),(0,C.jsxs)(p.A,{open:j,onClose:R,children:[(0,C.jsx)(y.A,{children:"Delete Slider Image"}),(0,C.jsx)(A.A,{children:"Are you sure you want to delete this image?"}),(0,C.jsxs)(f.A,{children:[(0,C.jsx)(m.A,{onClick:R,children:"Cancel"}),(0,C.jsx)(m.A,{onClick:async()=>{try{const t=await(0,n.wf)(k);P(),M({open:!0,message:t.message,severity:"success"}),R()}catch(a){var t,e;console.error("Error deleting slider image:",a),M({open:!0,message:(null===(t=a.response)||void 0===t||null===(e=t.data)||void 0===e?void 0:e.message)||"Error deleting image",severity:"error"})}},variant:"contained",color:"secondary",children:"Delete"})]})]}),(0,C.jsx)(v.A,{open:D.open,handleClose:()=>{M({...D,open:!1})},alertMessage:D.message,alertSeverity:D.severity})]})}},1563:(t,e,a)=>{a.d(e,{$h:()=>u,BD:()=>q,Bt:()=>rt,Cg:()=>O,Cl:()=>T,E0:()=>i,ET:()=>at,G:()=>I,Hh:()=>o,IG:()=>h,J1:()=>L,JL:()=>E,Jz:()=>C,KJ:()=>S,M$:()=>et,RI:()=>tt,RM:()=>G,TF:()=>y,Te:()=>D,Tx:()=>l,Vv:()=>_,XA:()=>N,XR:()=>Z,Xk:()=>d,Yb:()=>b,Yg:()=>U,Z3:()=>s,_1:()=>K,_c:()=>c,aK:()=>B,ac:()=>Q,as:()=>z,dp:()=>k,dt:()=>V,fH:()=>w,g9:()=>ot,hT:()=>R,k3:()=>A,mh:()=>j,nQ:()=>nt,pD:()=>x,qI:()=>v,qP:()=>M,ql:()=>p,r8:()=>Y,sK:()=>W,sL:()=>$,tK:()=>J,vB:()=>P,vO:()=>m,wf:()=>g,xu:()=>H,yM:()=>f,z_:()=>F,zb:()=>X});var r=a(6213);const n=a(8525).H,o=async()=>{try{return(await r.A.get("".concat(n,"/getSectionFirstContent"))).data}catch(t){throw console.error("Error fetching data:",t),t}},c=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateOnlyContent/").concat(t),e)).data}catch(a){throw console.error("Error updating data:",a),a}},i=async()=>{try{return(await r.A.get("".concat(n,"/getAllSectionFirst"))).data}catch(t){throw console.error("Error fetching banner images:",t),t}},s=async(t,e)=>{try{const a=new FormData;a.append("image",e);return(await r.A.put("".concat(n,"/updateBannerImages/").concat(t),a,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(a){throw console.error("Error updating banner image:",a),a}},d=async t=>{try{const e=new FormData;e.append("banner_img",t);return(await r.A.put("".concat(n,"/addSectionFirstImages/1"),e,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){throw console.error("Error adding banner image:",e),e}},l=async t=>{try{return(await r.A.delete("".concat(n,"/deleteBannerImage/").concat(t))).data}catch(e){throw console.error("Error deleting banner image:",e),e}},u=async()=>{try{return(await r.A.get("".concat(n,"/getAllSliderImages"))).data}catch(t){throw console.error("Error fetching slider images:",t),t}},h=async(t,e)=>{try{const a=new FormData;a.append("slider_img",e);return(await r.A.put("".concat(n,"/updateSliderImages/").concat(t),a,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(a){throw console.error("Error updating slider image:",a),a}},g=async t=>{try{return(await r.A.delete("".concat(n,"/deleteSliderImage/").concat(t))).data}catch(e){throw console.error("Error deleting slider image:",e),e}},m=async()=>{try{return(await r.A.get("".concat(n,"/getAllContentWithSliderImages"))).data}catch(t){throw console.error("Error fetching data:",t),t}},p=async t=>{try{return(await r.A.post("".concat(n,"/addSliderImage"),t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){throw console.error("Error adding slider image:",e),e}},y=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateContentWithVideo/").concat(t),e)).data}catch(a){throw console.error("Error updating data:",a),a}},A=async t=>{try{return(await r.A.post("".concat(n,"/addContentWithVideo"),t,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(e){throw console.error("Error adding slider image:",e),e}},w=async t=>{try{return(await r.A.delete("".concat(n,"/deleteContainerData/").concat(t))).data}catch(e){throw console.error("Error deleting container data:",e),e}},f=async()=>{try{return(await r.A.get("".concat(n,"/getHome"))).data}catch(t){throw console.error("Error fetching home data:",t),t}},E=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateHome"),e)).data}catch(a){throw console.error("Error updating home data:",a),a}},x=async()=>{try{return(await r.A.get("".concat(n,"/getHomeSectionFirst"))).data.data}catch(t){throw console.error("Error fetching data:",t),t}},v=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateHomeSectionFirst"),e)).data}catch(a){throw new Error("Error updating home section first data:",a)}},C=async()=>{try{return(await r.A.get("".concat(n,"/homeSectionSecond"))).data}catch(t){return console.error("Error fetching HomeSectionSecond data:",t),null}},S=async(t,e)=>{try{return(await r.A.put("".concat(n,"/homeSectionSecond/").concat(t),e)).data}catch(a){return console.error("Error updating HomeSectionSecond data:",a),null}},j=async t=>{try{return await r.A.post("".concat(n,"/homeSectionSecond"),t)}catch(e){return console.error("Error adding Home Section Second image:",e),null}},b=async t=>{try{return(await r.A.delete("".concat(n,"/homeSectionSecond/").concat(t))).data}catch(e){throw e}},I=async()=>{try{return(await r.A.get("".concat(n,"/getHomeSectionThird"))).data.data}catch(t){return console.error("Error fetching data:",t),null}},_=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateHomeSectionThird"),e)).data}catch(a){throw new Error("Error updating home section first data:",a)}},T=async()=>{try{return(await r.A.get("".concat(n,"/aboutus_banner"))).data.data}catch(t){throw console.error("Error fetching about us banner data:",t),t}},F=async(t,e)=>{try{return(await r.A.put("".concat(n,"/aboutus_banner/").concat(t),e)).data}catch(a){throw console.error("Error updating About Us Banner data:",a),a}},k=async t=>{try{return(await r.A.post("".concat(n,"/aboutus_banner"),t)).data}catch(e){throw new Error("Error adding about us banner:",e)}},H=async t=>{try{return(await r.A.delete("".concat(n,"/aboutus_banner/").concat(t))).data}catch(e){throw new Error("Error deleting about us banner:",e)}},D=async()=>{try{return(await r.A.get("".concat(n,"/getAboutUsSectionFirst"))).data}catch(t){throw new Error("Error fetching about us section first:",t)}},M=async t=>{try{return(await r.A.put("".concat(n,"/updateAboutUsSectionFirst"),t)).data}catch(e){throw console.error("Error updating About Us Section First data:",e),e}},N=async()=>{try{return(await r.A.get("".concat(n,"/getAboutUsSectionSecond"))).data.data}catch(t){return console.error("Error fetching data:",t),null}},B=async t=>{try{return(await r.A.put("".concat(n,"/updateAboutUsSectionSecond"),t)).data}catch(e){throw console.error("Error updating data:",e),e}},P=async()=>{try{return(await r.A.get("".concat(n,"/getNriPage"))).data.data}catch(t){return console.error("Error fetching data:",t),null}},z=async t=>{try{return(await r.A.put("".concat(n,"/updateNriPage"),t)).data}catch(e){throw console.error("Error updating data:",e),e}},R=async()=>{try{return(await r.A.get("".concat(n,"/getNriPageForm"))).data.data}catch(t){return console.error("Error fetching data:",t),[]}},U=async()=>{try{return(await r.A.get("".concat(n,"/getContactPage"))).data.data}catch(t){return console.error("Error fetching data:",t),null}},L=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateContactPage"),e)).data}catch(a){return console.error("Error updating data:",a),null}},G=async()=>{try{return(await r.A.get("".concat(n,"/getAllFooterData"))).data}catch(t){return console.error("Error fetching footer data:",t),null}},V=async(t,e)=>{try{return(await r.A.put("".concat(n,"/updateFooter"),e)).data}catch(a){throw console.error("Error updating footer data",a),a}},W=async()=>(await r.A.get("".concat(n,"/getAllGalleryImages"))).data,J=async(t,e)=>(await r.A.put("".concat(n,"/updateMainHeading/").concat(t),{main_heading:e})).data,q=async(t,e,a)=>{const o=new FormData;o.append("image1",e),o.append("main_table_id",a);return(await r.A.put("".concat(n,"/galleryImages/container1_image/").concat(t),o,{headers:{"Content-Type":"multipart/form-data"}})).data},O=async(t,e,a)=>{const o=new FormData;o.append("image2",e),o.append("main_table_id",a);return(await r.A.put("".concat(n,"/galleryImages/container2_image/").concat(t),o,{headers:{"Content-Type":"multipart/form-data"}})).data},X=async(t,e)=>(await r.A.delete("".concat(n,"/galleryImages/container1_image/").concat(t,"/").concat(e))).data,K=async(t,e)=>await r.A.delete("".concat(n,"/galleryImages/container2_image/").concat(t,"/").concat(e)),Y=async(t,e)=>{const a=new FormData;a.append("image1",t),a.append("main_table_id",e);return(await r.A.post("".concat(n,"/galleryImages/container1_image"),a,{headers:{"Content-Type":"multipart/form-data"}})).data},$=async(t,e)=>{const a=new FormData;a.append("image2",t),a.append("main_table_id",e);return(await r.A.post("".concat(n,"/galleryImages/container2_image"),a,{headers:{"Content-Type":"multipart/form-data"}})).data},Q=async t=>(await r.A.post("".concat(n,"/addAllHeadingWithImages"),t)).data,Z=async t=>(await r.A.delete("".concat(n,"/deleteMainData/").concat(t))).data,tt=async()=>(await r.A.get("".concat(n,"/galleryBanner"))).data,et=async(t,e)=>(await r.A.put("".concat(n,"/galleryBanner/"),e,{headers:{"Content-Type":"multipart/form-data"}})).data,at=async t=>{try{await r.A.delete("".concat(n,"/deleteNriPageForm/").concat(t))}catch(e){throw console.error("Error deleting NRI page form data with id ".concat(t,":"),e),e}},rt=async t=>{try{await r.A.delete("".concat(n,"/deleteFooterEmail/").concat(t))}catch(e){throw console.error("Error deleting footer email with id ".concat(t,":"),e),e}},nt=async()=>{try{return(await r.A.get("".concat(n,"/getAllContactUsForms"))).data.data}catch(t){return console.error("Error fetching data:",t),[]}},ot=async t=>{try{await r.A.delete("".concat(n,"/deleteContactUsForm/").concat(t))}catch(e){throw console.error("Error deleting Contact form data with id ".concat(t,":"),e),e}}},3471:(t,e,a)=>{var r=a(4994);e.A=void 0;var n=r(a(39)),o=a(579);e.A=(0,n.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},5540:(t,e,a)=>{var r=a(4994);e.A=void 0;var n=r(a(39)),o=a(579);e.A=(0,n.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit")},6446:(t,e,a)=>{a.d(e,{A:()=>f});var r=a(8168),n=a(8587),o=a(5043),c=a(8387),i=a(3174),s=a(8812),d=a(8698),l=a(8653),u=a(579);const h=["className","component"];var g=a(5430),m=a(8279),p=a(3375);const y=(0,a(7056).A)("MuiBox",["root"]),A=(0,m.A)(),w=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:e,defaultTheme:a,defaultClassName:g="MuiBox-root",generateClassName:m}=t,p=(0,i.default)("div",{shouldForwardProp:t=>"theme"!==t&&"sx"!==t&&"as"!==t})(s.A);return o.forwardRef((function(t,o){const i=(0,l.A)(a),s=(0,d.A)(t),{className:y,component:A="div"}=s,w=(0,n.A)(s,h);return(0,u.jsx)(p,(0,r.A)({as:A,ref:o,className:(0,c.A)(y,m?m(g):g),theme:e&&i[e]||i},w))}))}({themeId:p.A,defaultTheme:A,defaultClassName:y.root,generateClassName:g.A.generate}),f=w},4836:(t,e,a)=>{a.d(e,{A:()=>p});var r=a(8168),n=a(8587),o=a(5043),c=a(9998),i=a(950),s=a(5849),d=a(6240),l=a(653),u=a(6078),h=a(579);const g=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function m(t,e,a){var r;const n=function(t,e,a){const r=e.getBoundingClientRect(),n=a&&a.getBoundingClientRect(),o=(0,u.A)(e);let c;if(e.fakeTransform)c=e.fakeTransform;else{const t=o.getComputedStyle(e);c=t.getPropertyValue("-webkit-transform")||t.getPropertyValue("transform")}let i=0,s=0;if(c&&"none"!==c&&"string"===typeof c){const t=c.split("(")[1].split(")")[0].split(",");i=parseInt(t[4],10),s=parseInt(t[5],10)}return"left"===t?"translateX(".concat(n?n.right+i-r.left:o.innerWidth+i-r.left,"px)"):"right"===t?"translateX(-".concat(n?r.right-n.left-i:r.left+r.width-i,"px)"):"up"===t?"translateY(".concat(n?n.bottom+s-r.top:o.innerHeight+s-r.top,"px)"):"translateY(-".concat(n?r.top-n.top+r.height-s:r.top+r.height-s,"px)")}(t,e,"function"===typeof(r=a)?r():r);n&&(e.style.webkitTransform=n,e.style.transform=n)}const p=o.forwardRef((function(t,e){const a=(0,d.A)(),p={enter:a.transitions.easing.easeOut,exit:a.transitions.easing.sharp},y={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{addEndListener:A,appear:w=!0,children:f,container:E,direction:x="down",easing:v=p,in:C,onEnter:S,onEntered:j,onEntering:b,onExit:I,onExited:_,onExiting:T,style:F,timeout:k=y,TransitionComponent:H=c.Ay}=t,D=(0,n.A)(t,g),M=o.useRef(null),N=(0,s.A)(f.ref,M,e),B=t=>e=>{t&&(void 0===e?t(M.current):t(M.current,e))},P=B(((t,e)=>{m(x,t,E),(0,l.q)(t),S&&S(t,e)})),z=B(((t,e)=>{const n=(0,l.c)({timeout:k,style:F,easing:v},{mode:"enter"});t.style.webkitTransition=a.transitions.create("-webkit-transform",(0,r.A)({},n)),t.style.transition=a.transitions.create("transform",(0,r.A)({},n)),t.style.webkitTransform="none",t.style.transform="none",b&&b(t,e)})),R=B(j),U=B(T),L=B((t=>{const e=(0,l.c)({timeout:k,style:F,easing:v},{mode:"exit"});t.style.webkitTransition=a.transitions.create("-webkit-transform",e),t.style.transition=a.transitions.create("transform",e),m(x,t,E),I&&I(t)})),G=B((t=>{t.style.webkitTransition="",t.style.transition="",_&&_(t)})),V=o.useCallback((()=>{M.current&&m(x,M.current,E)}),[x,E]);return o.useEffect((()=>{if(C||"down"===x||"right"===x)return;const t=(0,i.A)((()=>{M.current&&m(x,M.current,E)})),e=(0,u.A)(M.current);return e.addEventListener("resize",t),()=>{t.clear(),e.removeEventListener("resize",t)}}),[x,C,E]),o.useEffect((()=>{C||V()}),[C,V]),(0,h.jsx)(H,(0,r.A)({nodeRef:M,onEnter:P,onEntered:R,onEntering:z,onExit:L,onExited:G,onExiting:U,addEndListener:t=>{A&&A(M.current,t)},appear:w,in:C,timeout:k},D,{children:(t,e)=>o.cloneElement(f,(0,r.A)({ref:N,style:(0,r.A)({visibility:"exited"!==t||C?void 0:"hidden"},F,f.props.style)},e))}))}))}}]);
//# sourceMappingURL=891.8cbe3f54.chunk.js.map