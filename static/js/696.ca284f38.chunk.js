"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[696],{7696:function(e,t,n){n.r(t),n.d(t,{ContactsPage:function(){return xe}});var o=n(885),r=n(2791),a=n(5302),i=n(4942),s=n(1413);function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=n(2982);function l(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function d(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(o&&(o+=" "),o+=t);return o}var f=["delay","staleId"],p=["theme","type"];function m(e){return"number"==typeof e&&!isNaN(e)}function g(e){return"boolean"==typeof e}function v(e){return"string"==typeof e}function h(e){return"function"==typeof e}function y(e){return v(e)||h(e)?e:null}function T(e){return 0===e||e}function b(e){return(0,r.isValidElement)(e)||v(e)||h(e)||m(e)}var E={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},x={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function C(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var o=e.children,i=e.position,c=e.preventExitTransition,l=e.done,d=e.nodeRef,f=e.isIn,p=a?t+"--"+i:t,m=a?n+"--"+i:n,g=(0,r.useRef)(),v=(0,r.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===v.current&&"animationcancel"!==e.type&&(t.className=g.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),s?function(e,t,n){void 0===n&&(n=300);var o=e.scrollHeight,r=e.style;requestAnimationFrame((function(){r.minHeight="initial",r.height=o+"px",r.transition="all "+n+"ms",requestAnimationFrame((function(){r.height="0",r.padding="0",r.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,r.useLayoutEffect)((function(){!function(){var e=d.current;g.current=e.className,e.className+=" "+p,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,r.useEffect)((function(){f||(c?y():function(){v.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[f]),r.createElement(r.Fragment,null,o)}}function Z(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var _={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var r=setTimeout((function(){o.apply(void 0,(0,u.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(r)}))}};function O(e){var t=(0,r.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],a=(0,r.useState)([]),i=(0,o.Z)(a,2),s=i[0],l=i[1],d=(0,r.useRef)(null),p=(0,r.useRef)(new Map).current,E=function(e){return-1!==s.indexOf(e)},x=(0,r.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:E,getToast:function(e){return p.get(e)}}).current;function C(e){var t=e.containerId;!x.props.limit||t&&x.containerId!==t||(x.count-=x.queue.length,x.queue=[])}function O(e){l((function(t){return T(e)?t.filter((function(t){return t!==e})):[]}))}function I(){var e=x.queue.shift();P(e.toastContent,e.toastProps,e.staleId)}function L(e,t){var o=t.delay,a=t.staleId,i=c(t,f);if(b(e)&&!function(e){return!d.current||x.props.enableMultiContainer&&e.containerId!==x.props.containerId||p.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,u=i.updateId,l=i.data,E=x.props,C=function(){return O(s)},L=null==u;L&&x.count++;var N,w,R={toastId:s,updateId:u,containerId:i.containerId,isLoading:i.isLoading,theme:i.theme||E.theme,icon:null!=i.icon?i.icon:E.icon,isIn:!1,key:i.key||x.toastKey++,type:i.type,closeToast:C,closeButton:i.closeButton,rtl:E.rtl,position:i.position||E.position,transition:i.transition||E.transition,className:y(i.className||E.toastClassName),bodyClassName:y(i.bodyClassName||E.bodyClassName),style:i.style||E.toastStyle,bodyStyle:i.bodyStyle||E.bodyStyle,onClick:i.onClick||E.onClick,pauseOnHover:g(i.pauseOnHover)?i.pauseOnHover:E.pauseOnHover,pauseOnFocusLoss:g(i.pauseOnFocusLoss)?i.pauseOnFocusLoss:E.pauseOnFocusLoss,draggable:g(i.draggable)?i.draggable:E.draggable,draggablePercent:i.draggablePercent||E.draggablePercent,draggableDirection:i.draggableDirection||E.draggableDirection,closeOnClick:g(i.closeOnClick)?i.closeOnClick:E.closeOnClick,progressClassName:y(i.progressClassName||E.progressClassName),progressStyle:i.progressStyle||E.progressStyle,autoClose:!i.isLoading&&(N=i.autoClose,w=E.autoClose,!1===N||m(N)&&N>0?N:w),hideProgressBar:g(i.hideProgressBar)?i.hideProgressBar:E.hideProgressBar,progress:i.progress,role:i.role||E.role,deleteToast:function(){var e=Z(p.get(s),"removed");p.delete(s),_.emit(4,e);var t=x.queue.length;if(x.count=T(s)?x.count-1:x.count-x.displayedToast,x.count<0&&(x.count=0),t>0){var o=T(s)?1:x.props.limit;if(1===t||1===o)x.displayedToast++,I();else{var r=o>t?t:o;x.displayedToast=r;for(var a=0;a<r;a++)I()}}else n()}};h(i.onOpen)&&(R.onOpen=i.onOpen),h(i.onClose)&&(R.onClose=i.onClose),R.closeButton=E.closeButton,!1===i.closeButton||b(i.closeButton)?R.closeButton=i.closeButton:!0===i.closeButton&&(R.closeButton=!b(E.closeButton)||E.closeButton);var k=e;(0,r.isValidElement)(e)&&!v(e.type)?k=(0,r.cloneElement)(e,{closeToast:C,toastProps:R,data:l}):h(e)&&(k=e({closeToast:C,toastProps:R,data:l})),E.limit&&E.limit>0&&x.count>E.limit&&L?x.queue.push({toastContent:k,toastProps:R,staleId:a}):m(o)?setTimeout((function(){P(k,R,a)}),o):P(k,R,a)}}function P(e,t,n){var o=t.toastId;n&&p.delete(n);var r={content:e,props:t};p.set(o,r),l((function(e){return[].concat((0,u.Z)(e),[o]).filter((function(e){return e!==n}))})),_.emit(4,Z(r,null==r.props.updateId?"added":"updated"))}return(0,r.useEffect)((function(){return x.containerId=e.containerId,_.cancelEmit(3).on(0,L).on(1,(function(e){return d.current&&O(e)})).on(5,C).emit(2,x),function(){return _.emit(3,x)}}),[]),(0,r.useEffect)((function(){x.props=e,x.isToastActive=E,x.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,o=Array.from(p.values());return e.newestOnTop&&o.reverse(),o.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:d,isToastActive:E}}function I(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function P(e){var t=(0,r.useState)(!1),n=(0,o.Z)(t,2),a=n[0],i=n[1],s=(0,r.useState)(!1),c=(0,o.Z)(s,2),u=c[0],l=c[1],d=(0,r.useRef)(null),f=(0,r.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,r.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,y=e.onClick,T=e.closeOnClick;function b(t){if(e.draggable){f.didMove=!1,document.addEventListener("mousemove",Z),document.addEventListener("mouseup",_),document.addEventListener("touchmove",Z),document.addEventListener("touchend",_);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=I(t.nativeEvent),f.y=L(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function E(){if(f.boundingRect){var t=f.boundingRect,n=t.top,o=t.bottom,r=t.left,a=t.right;e.pauseOnHover&&f.x>=r&&f.x<=a&&f.y>=n&&f.y<=o?C():x()}}function x(){i(!0)}function C(){i(!1)}function Z(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&C(),f.x=I(t),f.y=L(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+f.delta+"px)",n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function _(){document.removeEventListener("mousemove",Z),document.removeEventListener("mouseup",_),document.removeEventListener("touchmove",Z),document.removeEventListener("touchend",_);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,r.useEffect)((function(){p.current=e})),(0,r.useEffect)((function(){return d.current&&d.current.addEventListener("d",x,{once:!0}),h(e.onOpen)&&e.onOpen((0,r.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;h(e.onClose)&&e.onClose((0,r.isValidElement)(e.children)&&e.children.props)}}),[]),(0,r.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||C(),window.addEventListener("focus",x),window.addEventListener("blur",C)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",C))}}),[e.pauseOnFocusLoss]);var O={onMouseDown:b,onTouchStart:b,onMouseUp:E,onTouchEnd:E};return m&&g&&(O.onMouseEnter=C,O.onMouseLeave=x),T&&(O.onClick=function(e){y&&y(e),f.canCloseOnClick&&v()}),{playToast:x,pauseToast:C,isRunning:a,preventExitTransition:u,toastRef:d,eventHandlers:O}}function N(e){var t=e.closeToast,n=e.theme,o=e.ariaLabel,a=void 0===o?"close":o;return r.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":a},r.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){var t=e.delay,n=e.isRunning,o=e.closeToast,a=e.type,c=e.hide,u=e.className,l=e.style,f=e.controlledProgress,p=e.progress,m=e.rtl,g=e.isIn,v=e.theme,y=(0,s.Z)((0,s.Z)({},l),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:c?0:1});f&&(y.transform="scaleX("+p+")");var T=d("Toastify__progress-bar",f?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+a,{"Toastify__progress-bar--rtl":m}),b=h(u)?u({rtl:m,type:a,defaultClassName:T}):d(T,u);return r.createElement("div",(0,i.Z)({role:"progressbar","aria-hidden":c?"true":"false","aria-label":"notification timer",className:b,style:y},f&&p>=1?"onTransitionEnd":"onAnimationEnd",f&&p<1?null:function(){g&&o()}))}w.defaultProps={type:x.DEFAULT,hide:!1};var R=function(e){var t=e.theme,n=e.type,o=c(e,p);return r.createElement("svg",(0,s.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},o))},k={info:function(e){return r.createElement(R,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return r.createElement(R,(0,s.Z)({},e),r.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return r.createElement(R,(0,s.Z)({},e),r.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return r.createElement(R,(0,s.Z)({},e),r.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return r.createElement("div",{className:"Toastify__spinner"})}},B=function(e){var t=P(e),n=t.isRunning,o=t.preventExitTransition,a=t.toastRef,i=t.eventHandlers,c=e.closeButton,u=e.children,l=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,y=e.transition,T=e.position,b=e.className,E=e.style,x=e.bodyClassName,C=e.bodyStyle,Z=e.progressClassName,_=e.progressStyle,O=e.updateId,I=e.role,L=e.progress,N=e.rtl,R=e.toastId,B=e.deleteToast,A=e.isIn,D=e.isLoading,j=e.icon,M=e.theme,S=d("Toastify__toast","Toastify__toast-theme--"+M,"Toastify__toast--"+p,{"Toastify__toast--rtl":N}),F=h(b)?b({rtl:N,position:T,type:p,defaultClassName:S}):d(S,b),z=!!L,H=k[p],q={theme:M,type:p},U=H&&H(q);return!1===j?U=void 0:h(j)?U=j(q):r.isValidElement(j)?U=r.cloneElement(j,q):v(j)?U=j:D&&(U=k.spinner()),r.createElement(y,{isIn:A,done:B,position:T,preventExitTransition:o,nodeRef:a},r.createElement("div",(0,s.Z)((0,s.Z)({id:R,onClick:f,className:F},i),{},{style:E,ref:a}),r.createElement("div",(0,s.Z)((0,s.Z)({},A&&{role:I}),{},{className:h(x)?x({type:p}):d("Toastify__toast-body",x),style:C}),U&&r.createElement("div",{className:d("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},U),r.createElement("div",null,u)),function(e){if(e){var t={closeToast:g,type:p,theme:M};return h(e)?e(t):r.isValidElement(e)?r.cloneElement(e,t):void 0}}(c),(l||z)&&r.createElement(w,(0,s.Z)((0,s.Z)({},O&&!z?{key:"pb-"+O}:{}),{},{rtl:N,theme:M,delay:l,isRunning:n,isIn:A,closeToast:g,hide:m,type:p,style:_,className:Z,controlledProgress:z,progress:L}))))},A=C({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),D=(C({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),C({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),C({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,r.forwardRef)((function(e,t){var n=O(e),o=n.getToastToRender,a=n.containerRef,i=n.isToastActive,c=e.className,u=e.style,l=e.rtl,f=e.containerId;function p(e){var t=d("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":l});return h(c)?c({position:e,rtl:l,defaultClassName:t}):d(t,y(c))}return(0,r.useEffect)((function(){t&&(t.current=a.current)}),[]),r.createElement("div",{ref:a,className:"Toastify",id:f},o((function(e,t){var n=t.length?(0,s.Z)({},u):(0,s.Z)((0,s.Z)({},u),{},{pointerEvents:"none"});return r.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var o=e.content,a=e.props;return r.createElement(B,(0,s.Z)((0,s.Z)({},a),{},{isIn:i(a.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+a.key,closeButton:!0===a.closeButton?N:a.closeButton}),o)})))})))})));D.displayName="ToastContainer",D.defaultProps={position:E.TOP_RIGHT,transition:A,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:N,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var j,M=new Map,S=[];function F(){return Math.random().toString(36).substring(2,9)}function z(e){return e&&(v(e.toastId)||m(e.toastId))?e.toastId:F()}function H(e,t){return M.size>0?_.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function q(e,t){return(0,s.Z)((0,s.Z)({},t),{},{type:t&&t.type||e,toastId:z(t)})}function U(e){return function(t,n){return H(t,q(e,n))}}function Q(e,t){return H(e,q(x.DEFAULT,t))}Q.loading=function(e,t){return H(e,q(x.DEFAULT,(0,s.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Q.promise=function(e,t,n){var o,r=t.pending,a=t.error,i=t.success;r&&(o=v(r)?Q.loading(r,n):Q.loading(r.render,(0,s.Z)((0,s.Z)({},n),r)));var c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},u=function(e,t,r){if(null!=t){var a=(0,s.Z)((0,s.Z)((0,s.Z)({type:e},c),n),{},{data:r}),i=v(t)?{render:t}:t;return o?Q.update(o,(0,s.Z)((0,s.Z)({},a),i)):Q(i.render,(0,s.Z)((0,s.Z)({},a),i)),r}Q.dismiss(o)},l=h(e)?e():e;return l.then((function(e){return u("success",i,e)})).catch((function(e){return u("error",a,e)})),l},Q.success=U(x.SUCCESS),Q.info=U(x.INFO),Q.error=U(x.ERROR),Q.warning=U(x.WARNING),Q.warn=Q.warning,Q.dark=function(e,t){return H(e,q(x.DEFAULT,(0,s.Z)({theme:"dark"},t)))},Q.dismiss=function(e){return _.emit(1,e)},Q.clearWaitingQueue=function(e){return void 0===e&&(e={}),_.emit(5,e)},Q.isActive=function(e){var t=!1;return M.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Q.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,o=M.get(n||j);return o?o.getToast(e):null}(e,t);if(n){var o=n.props,r=n.content,a=(0,s.Z)((0,s.Z)((0,s.Z)({},o),t),{},{toastId:t.toastId||e,updateId:F()});a.toastId!==e&&(a.staleId=e);var i=a.render||r;delete a.render,H(i,a)}}),0)},Q.done=function(e){Q.update(e,{progress:1})},Q.onChange=function(e){return _.on(4,e),function(){_.off(4,e)}},Q.POSITION=E,Q.TYPE=x,_.on(2,(function(e){j=e.containerId||e,M.set(j,e),S.forEach((function(e){_.emit(0,e.content,e.options)})),S=[]})).on(3,(function(e){M.delete(e.containerId||e),0===M.size&&_.off(0).off(1).off(5)}));var V,G,W,X,Y,J,K,$,ee,te,ne=n(168),oe=n(6031),re=oe.ZP.li(V||(V=(0,ne.Z)(["\n  display: flex;\n\n  align-items: center;\n"]))),ae=oe.ZP.p(G||(G=(0,ne.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n"]))),ie=oe.ZP.button(W||(W=(0,ne.Z)(["\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  cursor: pointer;\n  align-self: center;\n  padding: 5px 25px;\n  margin-left: 30px;\n"]))),se=n(3329),ce=function(e){var t=e.id,n=e.name,r=e.number,i=(0,a.Nt)(),s=(0,o.Z)(i,2),c=s[0],u=s[1].isLoading;return(0,se.jsxs)(re,{children:[(0,se.jsxs)(ae,{children:[n,":\xa0 ",r]}),(0,se.jsx)(ie,{type:"button",onClick:function(){return c(t)},children:u?"Deleting...":"Delete"})]})},ue=function(e){var t=e.filter,n=e.contacts,o=t.toLowerCase(),r=n.filter((function(e){return e.name.toLowerCase().includes(o)}));return(0,se.jsx)(se.Fragment,{children:r&&(0,se.jsx)("ul",{children:r.map((function(e){var t=e.name,n=e.id,o=e.number;return(0,se.jsx)(ce,{id:n,name:t,number:o},n)}))})})},le=oe.ZP.div(X||(X=(0,ne.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n"]))),de=oe.ZP.label(Y||(Y=(0,ne.Z)(["\n  font-weight: 400;\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),fe=oe.ZP.input(J||(J=(0,ne.Z)(["\n  width: 200px;\n  height: 25px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  margin-bottom: 20px;\n"]))),pe=function(e){var t=e.value,n=e.changeFilter;return(0,se.jsxs)(le,{children:[(0,se.jsx)(de,{children:"Find contacts by name"}),(0,se.jsx)(fe,{type:"text",value:t,onChange:n})]})},me=n(5861),ge=n(7757),ve=n.n(ge),he=oe.ZP.form(K||(K=(0,ne.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 400px;\n  padding: 20px;\n  border: 2px solid;\n"]))),ye=oe.ZP.label($||($=(0,ne.Z)(["\n  font-weight: 500;\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),Te=oe.ZP.input(ee||(ee=(0,ne.Z)(["\n  width: 200px;\n  height: 25px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  margin-bottom: 25px;\n"]))),be=oe.ZP.button(te||(te=(0,ne.Z)(["\n  background: #ffffff;\n  border-radius: 4px;\n  border: 1px solid rgba(33, 33, 33, 0.2);\n  cursor: pointer;\n  align-self: center;\n  padding: 5px 25px;\n"])));function Ee(){var e=(0,a.Lr)(),t=(0,o.Z)(e,1)[0],n=function(){var e=(0,me.Z)(ve().mark((function e(n){var o,r;return ve().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),o=n.currentTarget.elements.name.value,r=n.currentTarget.elements.number.value,n.currentTarget.reset(),e.prev=4,e.next=7,t({name:o,number:r});case 7:Q.success("New contact created!",{position:Q.POSITION.TOP_CENTER,autoClose:2e3}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[4,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,se.jsxs)(he,{onSubmit:n,children:[(0,se.jsx)(ye,{children:"Name"}),(0,se.jsx)(Te,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,se.jsx)(ye,{children:"Number"}),(0,se.jsx)(Te,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,se.jsx)(be,{type:"submit",children:"Add contact"})]})}var xe=function(){var e=(0,r.useState)(""),t=(0,o.Z)(e,2),n=t[0],i=t[1],s=(0,a.Jx)(),c=s.data,u=s.error,l=s.isError;return(0,se.jsxs)("div",{style:{padding:"20px"},children:[l&&(0,se.jsx)("p",{children:u.data}),(0,se.jsx)("h1",{children:"Phonebook"}),(0,se.jsx)(Ee,{}),(0,se.jsx)("h2",{children:"Contacts"}),(0,se.jsx)(pe,{value:n,changeFilter:function(e){i(e.currentTarget.value)}}),c&&(0,se.jsx)(ue,{filter:n,contacts:c}),(0,se.jsx)(D,{})]})}}}]);
//# sourceMappingURL=696.ca284f38.chunk.js.map