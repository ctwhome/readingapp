(window.webpackJsonp=window.webpackJsonp||[]).push([[10,7],{353:function(e,t,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(54).default)("bad8e090",content,!0,{sourceMap:!1})},365:function(e,t,n){"use strict";n.r(t);var r=n(354),o={name:"Ebook",layout:"reader",data:function(){return{book:null}},mounted:function(){this.showEpub()},methods:{showEpub:function(){var e=Object(r.a)("https://s3.amazonaws.com/moby-dick/OPS/package.opf").renderTo("area",{flow:"scrolled-doc",width:"100%",height:"100vh"});e.display(12),e.themes.default({body:{"column-count":4},h2:{"font-size":"32px",color:"purple"},p:{margin:"10px",color:"currentColor","text-align":"left"}});var t=function(t){37===(t.keyCode||t.which)&&e.prev(),39===(t.keyCode||t.which)&&e.next()};e.on("keyup",t),document.addEventListener("keyup",t,!1),e.on("rendered",(function(section){document.getElementById("next").addEventListener("click",(function(t){e.next(),t.preventDefault()}),!1),document.getElementById("prev").addEventListener("click",(function(t){e.prev(),t.preventDefault()}),!1)})),e.themes.register("dark","themes.css"),e.themes.register("light","themes.css"),e.themes.register("tan","themes.css"),e.themes.select("dark"),e.themes.fontSize("100%")}}},c=n(13),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"flex absolute bottom z-50"},[n("div",{staticClass:"btn btn-sm",attrs:{id:"prev"}},[e._v("\n      prev\n    ")]),e._v(" "),n("div",{staticClass:"btn btn-sm ml-2",attrs:{id:"next"}},[e._v("\n      NEXT\n    ")])]),e._v(" "),n("div",{staticClass:"text-white",attrs:{id:"area"}})])}],!1,null,null,null);t.default=component.exports},370:function(e,t,n){"use strict";n(353)},371:function(e,t,n){var r=n(53)((function(i){return i[1]}));r.push([e.i,".boc{\n  content:var(--b3)\n}",""]),r.locals={},e.exports=r},425:function(e,t,n){"use strict";n.r(t);var r=n(7),o=(n(31),{layout:"reader",asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,e.params,t.next=3,n("posts").limit(4).sortBy("date","asc").fetch();case 3:return r=t.sent,t.abrupt("return",{posts:r});case 5:case"end":return t.stop()}}),t)})))()}}),c=(n(370),n(13)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container mx-auto"},[t("reader")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Reader:n(365).default})}}]);