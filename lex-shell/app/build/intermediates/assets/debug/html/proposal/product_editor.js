!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=24)}({24:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={planId:common.param("planId"),index:common.param("index"),form:[]},e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,React.Component),r(t,[{key:"componentDidMount",value:function(){var e=this;this.state.form=[],APP.proposal.editProduct(this.state.planId,this.state.index,function(t){e.state.form.push({name:t.name,form:e.formOf(t.factors)}),e.setState({form:e.state.form})}),APP.proposal.viewPlan(this.state.planId,function(t){APP.proposal.listRiders(e.state.planId,e.state.index,function(n){n.map(function(n){var r={name:n.name,productId:n.code,form:null};t.product.map(function(t,o){t.productId==n.code&&t.parent==e.state.index&&APP.proposal.editProduct(e.state.planId,o,function(t){r.form=e.formOf(t.factors),e.setState({form:e.state.form})})}),e.state.form.push(r)}),e.setState({form:e.state.form})})})}},{key:"addRider",value:function(e,t){var n=this,r=t.productId,o=this.state.form[e];null==o.form?APP.proposal.addProduct(this.state.planId,this.state.index,r,function(e){e.product.map(function(e,t){e.productId==r&&e.parent==n.state.index&&APP.proposal.editProduct(n.state.planId,t,function(e){o.form=n.formOf(e.factors),n.setState({form:n.state.form})})})}):APP.proposal.deleteProduct(this.state.planId,this.state.index,r,function(e){o.form=null,n.setState({form:n.state.form})})}},{key:"close",value:function(){APP.back()}},{key:"formOf",value:function(e){return e.map(function(e){var t={};return e.detail&&e.detail.map(function(e){t[e[0]]=e[1]}),{widget:e.widget,label:e.label,detail:t,value:e.value}})}},{key:"onValChange",value:function(e,t,n,r){var o=this,a={};a[e.name]=e.detail[r],APP.proposal.saveProduct(this.state.planId,t,a,function(e){o.state.form[t].form[n].value=r,o.setState({form:o.state.form})})}},{key:"render",value:function(){var e=this;return React.createElement("div",null,this.state.form.map(function(t,n){return React.createElement("div",{class:"div"},n>0?null:React.createElement("div",{className:"text18",style:{height:"80px",lineHeight:"80px",textAlign:"center",borderBottom:"#ddd solid 1px",backgroundColor:"#fff"}},t.name),0==n?null:React.createElement("div",{className:"divx",style:{height:"80px",verticalAlign:"middle",borderBottom:"#ddd solid 1px",backgroundColor:"#fff",marginTop:"10px"},onClick:e.addRider.bind(e,n,t)},React.createElement("img",{style:{margin:"10px 0 0 20px",width:"60px",height:"60px"},src:"../images/"+(null==t.form?"unchecked":"checked")+".png"}),React.createElement("div",{className:"text16",style:{marginLeft:"10px",lineHeight:"80px",color:null==t.form?"gray":"black"}},t.name)),null==t.form?null:t.form.map(function(t,r){return React.createElement("div",{className:"form-item",style:{backgroundColor:"#fff"}},React.createElement("div",{className:"form-item-label text17",style:{width:"300px",margin:"10px 0 0 20px"}},t.label),React.createElement("div",{className:"form-item-widget",style:{width:"410px",margin:"10px 20px 0 0",textAlign:"right"}},"number"==t.widget?React.createElement("input",{type:"number",placeholder:"请输入"+t.label}):"switch"==t.widget||"select"==t.widget?React.createElement("div",{style:{display:"flex"},onClick:function(o){APP.pick("select",t.detail,e.onValChange.bind(e,t,n,r))}},React.createElement("div",{className:"text17",style:{width:"350px",lineHeight:"60px"}},t.detail[t.value]),React.createElement("img",{style:{width:"60px",height:"60px"},src:"../images/arrow-7-down.png"})):null))}))}),React.createElement("div",{className:"btn-fl text18",style:{color:"#fff",backgroundColor:"#1aad19"},onClick:this.close.bind(this)},"确定"))}}]),t}();$(document).ready(function(){ReactDOM.render(React.createElement(o,null),document.getElementById("root"))})}});