(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2qYH":function(t,s,e){"use strict";e.r(s);var a={components:{PostCard:e("BA+P").a},metaInfo:function(){return this.$seo({title:this.$page.tag.title,description:this.$page.tag.title,keywords:"Software Testing, QA, Automation, Security, Performance, Accessibility, Devops, TDD",openGraph:{title:"Pritesh Usadadiya",type:"website"},twitter:{title:"Pritesh Usadadiya",type:"summary"},link:[],script:[]})}},i=e("KHd+"),n=null,o=Object(i.a)(a,(function(){var t=this.$createElement,s=this._self._c||t;return s("Layout",[s("div",{staticClass:"hero is-grey"},[s("div",{staticClass:"hero-body has-text-centered"},[s("h1",{staticClass:"subtitle is-size-3 is-size-4-mobile"},[this._v("Tag : "+this._s(this.$page.tag.title))])])]),s("div",{staticClass:"section container"},[s("div",{staticClass:"container"},[s("div",{staticClass:"columns is-multiline is-max-desktop"},[s("div",{staticClass:"column"}),s("div",{staticClass:"column is-two-thirds"},[this._l(this.$page.tag.belongsTo.edges,(function(t){return s("PostCard",{key:t.node.id,attrs:{post:t.node}})})),s("div",{staticClass:"grid-item"}),s("div",{staticClass:"grid-item"})],2),s("div",{staticClass:"column"})])])])])}),[],!1,null,null,null);"function"==typeof n&&n(o);s.default=o.exports},"BA+P":function(t,s,e){"use strict";var a=e("n6yM"),i=e("PpWc"),n=e("jsWL"),o={components:{PostMeta:a.a,PostTags:i.a,PostCategory:n.a},props:["post"]},r=e("KHd+"),c=Object(r.a)(o,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"card mb-3"},[t.post.cover_image?e("g-link",{staticClass:"card-image",attrs:{to:t.post.path}},[e("figure",{staticClass:"image is-16by9"},[e("g-image",{attrs:{alt:"Cover image",src:t.post.cover_image}})],1)]):t._e(),e("div",{staticClass:"card-content"},[e("g-link",{staticClass:"is-size-4 has-text-weight-bold",attrs:{to:t.post.path}},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),e("PostCategory",{attrs:{post:t.post}}),e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"content",domProps:{innerHTML:t._s(t.post.description)}}),e("PostMeta",{attrs:{post:t.post}})],1),t.post.tags?e("div",{staticClass:"card-footer"},[e("PostTags",{staticClass:"card-footer-item",attrs:{post:t.post}})],1):t._e(),t.post.category?e("div",{staticClass:"card-footer"}):t._e()],1)}),[],!1,null,null,null);s.a=c.exports},PpWc:function(t,s,e){"use strict";var a={props:{post:{type:Object,default:function(){return{}}}}},i=e("KHd+"),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tags"},t._l(t.post.tags,(function(s){return e("g-link",{key:s.id,staticClass:"tag is-link",attrs:{to:s.path}},[t._v("\n    #"+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=n.exports},jsWL:function(t,s,e){"use strict";var a={props:{post:{type:Object,default:function(){return{}}}}},i=e("KHd+"),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"tags"},t._l(t.post.category,(function(s){return e("g-link",{key:s.id,staticClass:"tag is-success",attrs:{to:s.path}},[t._v("\n    #"+t._s(s.title)+"\n  ")])})),1)}),[],!1,null,null,null);s.a=n.exports},n6yM:function(t,s,e){"use strict";var a={props:["post"]},i=e("KHd+"),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("small",[t._v("Posted")]),t._v(" "+t._s(t.post.date)+" •\n   "),t.post.timeToRead?[t._v("\n     ☕️ "+t._s(t.post.timeToRead)+" min read.\n   ")]:t._e()],2)}),[],!1,null,null,null);s.a=n.exports}}]);