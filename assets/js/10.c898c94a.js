(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{175:function(s,t,a){"use strict";a.r(t);var e=a(0),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("p",[s._v("css的引入方式共三种及@import和link的区别")]),s._v(" "),a("h4",{attrs:{id:"一、-行内样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-行内样式"}},[s._v("#")]),s._v(" 一、 行内样式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<p style="color: red">test</p>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("优点：简单、优先级高。"),a("br")]),s._v(" "),a("li",[s._v("缺点：页面不纯净、文件体积大、不易维护")])]),s._v(" "),a("h4",{attrs:{id:"二、-内嵌样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-内嵌样式"}},[s._v("#")]),s._v(" 二、 内嵌样式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("<html>\n    <style>\n        p {color: red;}\n    </style>\n</html>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("优点：文件少、css代码少时适用")]),s._v(" "),a("li",[s._v("缺点：每个页面需要重复定义，工程大时不利于复用和维护")])]),s._v(" "),a("h4",{attrs:{id:"三、-外联样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-外联样式"}},[s._v("#")]),s._v(" 三、 外联样式")]),s._v(" "),a("p",[s._v("外联样式又分为"),a("br")]),s._v(" "),a("h6",{attrs:{id:"_1-链接样式link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-链接样式link"}},[s._v("#")]),s._v(" 1. 链接样式link")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<link type="text/css" rel="stylesheet" href="style.css" />\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("实现了html框架和css样式分离，复用率提高，后期维护方便")])]),s._v(" "),a("h6",{attrs:{id:"_2-导入样式-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-导入样式-import"}},[s._v("#")]),s._v(" 2. 导入样式@import")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<style type="test/css">\n    @import (keyword) url(style.css)\n    @import (keyword) url("style.css")\n    @import (keyword) "style.css"\n    //三种方式结果相同，不使用url()时，必须带引号\n    //keyword=less/css 将文件视为less/css，无论扩展名是什么\n</style>\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h4",{attrs:{id:"四、-import和link的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-import和link的区别"}},[s._v("#")]),s._v(" 四、@import和link的区别")]),s._v(" "),a("ul",[a("li",[s._v("link属于XHTML标签，@import属于css标签。")]),s._v(" "),a("li",[s._v("link是异步加载，与页面加载同时进行；@import是串行加载，在页面加载完成后被加载，因此会有页面闪烁。")]),s._v(" "),a("li",[s._v("link属于XHTML，因此兼容性较好；@import是css2.1提出的，浏览器兼容性差。")]),s._v(" "),a("li",[s._v("link只是JavaScript控制DOM改变样式，而@import不支持")])])])}],!1,null,null,null);t.default=r.exports}}]);