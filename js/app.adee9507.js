(function(t){function e(e){for(var a,r,s=e[0],c=e[1],l=e[2],p=0,v=[];p<s.length;p++)r=s[p],i[r]&&v.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/vue-eva-icons/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"087e":function(t,e,n){"use strict";var a=n("2ac7"),i=n.n(a);i.a},"2ac7":function(t,e,n){},"2e7d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("span",[t._v("support the developer, put a star to")]),n("a",{attrs:{href:"https://github.com/antonreshetov/vue-eva-icons",target:"_blank"}},[n("app-button",[n("eva-icon",{attrs:{name:"github"}}),t._v("GitHub\n      ")],1)],1),n("span",[t._v("repo :)")])]),n("h1",[t._v("Vue Eva Icons")]),n("p",[t._v("\n    Simply beautiful open source\n    Eva icons as Vue components.\n  ")]),t._m(0),n("div",{staticClass:"demo"},[n("div",{staticClass:"tag"},[t._v('<eva-icon name="github" animation="pulse" fill="limegreen"></eva-icon>')]),n("eva-icon",{attrs:{name:"github",animation:"pulse",fill:"limegreen"}})],1),n("div",{staticClass:"search-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search-input__inner",attrs:{type:"text",placeholder:"Type to search"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),n("eva-icon",{attrs:{name:"search"}})],1),n("div",{staticClass:"icons-toolbar"},[n("div",{staticClass:"icons-toolbar__col"},[n("app-button-group",{model:{value:t.fill,callback:function(e){t.fill=e},expression:"fill"}},[n("app-button",{attrs:{name:"fill"}},[n("eva-icon",{attrs:{name:"star"}}),t._v("Fill\n        ")],1),n("app-button",{attrs:{name:"outline"}},[n("eva-icon",{attrs:{name:"star-outline"}}),t._v("Outline\n        ")],1)],1)],1),n("div",{staticClass:"icons-toolbar__col icons-toolbar__col--right"},[n("span",{staticClass:"label"},[t._v("Animation:")]),n("app-button-group",{model:{value:t.animation,callback:function(e){t.animation=e},expression:"animation"}},[n("app-button",{attrs:{name:"zoom"}},[n("eva-icon",{attrs:{name:"maximize-outline"}}),t._v("Zoom\n        ")],1),n("app-button",{attrs:{name:"pulse"}},[n("eva-icon",{attrs:{name:"activity"}}),t._v("Pulse\n        ")],1),n("app-button",{attrs:{name:"shake"}},[n("eva-icon",{attrs:{name:"radio"}}),t._v("Shake\n        ")],1),n("app-button",{attrs:{name:"flip"}},[n("eva-icon",{attrs:{name:"flip-2"}}),t._v("Flip\n        ")],1)],1)],1)]),n("div",{staticClass:"desc right"},[t._v("Click by icon to copy html tag of component")]),n("div",{staticClass:"icons"},["fill"===t.fill?t._l(t.filled,function(e){return n("div",{key:e.name,staticClass:"icons__item",on:{click:function(n){t.onCopy(e.name)}}},[n("div",{staticClass:"tooltip"},[t._v(t._s(e.name))]),n("eva-icon",{attrs:{name:e.name,animation:t.animation,fill:"#409eff"}})],1)}):t._e(),"outline"===t.fill?t._l(t.outline,function(e){return n("div",{key:e.name,staticClass:"icons__item",on:{click:function(n){t.onCopy(e.name)}}},[n("div",{staticClass:"tooltip"},[t._v(t._s(e.name))]),n("eva-icon",{attrs:{name:e.name,animation:t.animation,fill:"#409eff"}})],1)}):t._e()],2),n("transition",{attrs:{name:"fade"}},[t.alert?n("div",{staticClass:"overlay"},[n("h3",[t._v("Tag copied")])]):t._e()]),n("textarea",{ref:"html",staticStyle:{opacity:"0"},domProps:{innerHTML:t._s(t.html)}}),t._m(1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("\n    Documentation\n    "),n("a",{attrs:{href:"https://github.com/antonreshetov/vue-eva-icons#vue-eva-icons"}},[t._v("here")]),t._v(".\n  ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"projects-list"},[t._v("More by @antonreshetov:\n    "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/antonreshetov/vue-form-components"}},[t._v("Vue Form Components")])]),n("li",[n("a",{attrs:{href:"https://github.com/antonreshetov/vue-glide"}},[t._v("Vue Glide")])])])])}],r=(n("7f7f"),n("386d"),n("3b2b"),n("ac6a"),n("456d"),n("66d7")),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn",class:{"btn--active":t.isActive},on:{click:t.onClick}},[t._t("default")],2)},c=[],l={name:"AppButton",props:{name:String},computed:{isActive:function(){return this.$parent.active===this.name}},methods:{onClick:function(){this.$parent.$emit("change",this.name)}}},u=l,p=(n("087e"),n("2877")),v=Object(p["a"])(u,s,c,!1,null,null,null);v.options.__file="Button.vue";var f=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"btn-group"},[t._t("default")],2)},h=[],d={name:"AppButtonGroup",props:{active:String},model:{prop:"active",event:"change"},data:function(){return{}}},_=d,b=(n("9471"),Object(p["a"])(_,m,h,!1,null,null,null));b.options.__file="ButtonGroup.vue";var g=b.exports,y={name:"app",components:{AppButton:f,AppButtonGroup:g},data:function(){return{eva:r["icons"],search:"",fill:"fill",animation:"zoom",html:"<div></div>",alert:!1}},computed:{icons:function(){var t=this;return Object.keys(this.eva).map(function(e){return t.eva[e]})},searchedIcons:function(){var t=new RegExp(this.search.toLowerCase());return this.icons.filter(function(e){return t.test(e.name)})},filled:function(){return this.searchedIcons.filter(function(t){return!/outline/.test(t.name)})},outline:function(){return this.searchedIcons.filter(function(t){return/outline/.test(t.name)})}},methods:{onCopy:function(t){var e=this;this.html='<eva-icon name="'.concat(t,'"></eva-icon>'),this.showAlert(),setTimeout(function(){e.$refs.html.select(),document.execCommand("copy")},10)},showAlert:function(){var t=this;this.alert=!0,setTimeout(function(){t.alert=!1},500)}}},C=y,w=(n("5c0b"),Object(p["a"])(C,i,o,!1,null,null,null));w.options.__file="App.vue";var x=w.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{staticClass:"eva-hover"},[n("svg",{staticClass:"eva eva-animation",class:"eva-icon-hover-"+t.animation,attrs:{xmlns:"http://www.w3.org/2000/svg",width:t.width,height:t.height,viewBox:"0 0 24 24",fill:t.fill},domProps:{innerHTML:t._s(t.icon)}})])},O=[],S=(n("c5f6"),{name:"EvaIcon",props:{name:String,width:{type:[String,Number],default:24},height:{type:[String,Number],default:24},animation:String,fill:{type:String,default:"inherit"}},computed:{icon:function(){return r["icons"][this.name]?r["icons"][this.name].contents:void console.error("Name of icon is not correct")}}}),j=S,E=Object(p["a"])(j,k,O,!1,null,null,null);E.options.__file="EvaIcon.vue";var $=E.exports,A={install:function(t,e){t.component($.name,$)}};a["a"].config.productionTip=!1,a["a"].use(A),new a["a"]({render:function(t){return t(x)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),i=n.n(a);i.a},"5e27":function(t,e,n){},9471:function(t,e,n){"use strict";var a=n("2e7d"),i=n.n(a);i.a}});
//# sourceMappingURL=app.adee9507.js.map