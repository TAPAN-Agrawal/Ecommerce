(window.webpackJsonp=window.webpackJsonp||[]).push([[287,416],{1231:function(t){t.exports=JSON.parse('{"title":"Your slogan (optional)","intro_text":"<p>Enter a tagline, other text you\'d like, or nothing at all.</p>","show_intro":true,"input":{"label":"Enter your slogan (optional):","placeholder":"Ex: Real Estate, The Freshest Coffee, ...","field_name":"slogan","id":"slogan","prompt":"","tippy":""},"button":{"text":"Continue","empty_text":"Skip"},"meta":{"title":"Enter Your Slogan","description":""}}')},1363:function(t,e,n){"use strict";var r=n(151);e.a={filters:{render:r.a},methods:{render:function(t){return this.$options.filters.render(t,this.ctx||this._self)}}}},1375:function(t,e,n){"use strict";var r=n(1363),o=n(35),l={mixins:[r.a],props:{page:{type:Object,default:function(){return{}}},ctx:{type:Object,default:function(){return null}},align:{type:String,default:"text-center"}},computed:Object(o.e)(["enterprise"])},c=n(11),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("header",{directives:[{name:"show",rawName:"v-show",value:t.page.show_intro,expression:"page.show_intro"}],staticClass:"mb-6",class:t.align},[e("div",{class:{"flex flex-col-reverse sm:flex-row sm:justify-between sm:items-center":t.$slots["header-content"]}},[e("h1",{staticClass:"text-3xl md:text-4xl"},[t._v(t._s(t.render(t.page.title)))]),t._v(" "),t._t("header-content")],2),t._v(" "),t.page.intro_text?e("div",{staticClass:"mb-6 mt-2 article",domProps:{innerHTML:t._s(t.render(t.page.intro_text))}}):t._e()])}),[],!1,null,null,null);e.a=component.exports},1410:function(t,e,n){"use strict";var r=n(169),o=n.n(r),l=n(1375),c={components:{ArrowRight:o.a,Intro:l.a},props:{input:{type:[String,Array],default:""},page:{type:Object,default:function(){return{}}},name:{type:String,required:!0},loading:Boolean},beforeDestroy:function(){window.removeEventListener("keypress",this.onKeyPress)},mounted:function(){window.addEventListener("keypress",this.onKeyPress)},computed:{skip:function(){var t;return!(null!==(t=this.input)&&void 0!==t&&t.length)},buttonText:function(){var t,e,n,r;return this.skip?null===(t=this.page)||void 0===t||null===(e=t.button)||void 0===e?void 0:e.empty_text:null===(n=this.page)||void 0===n||null===(r=n.button)||void 0===r?void 0:r.text}},methods:{handleContinue:function(t){this.$emit("continue",t)},onKeyPress:function(t){"Enter"===(null==t?void 0:t.key)&&this.handleContinue()}}},d=n(11),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"mb-auto pt-6 pb-12"},[e("div",{staticClass:"max-w-xl mx-auto"},[e("Intro",{attrs:{page:t.page,align:"text-left"}},[e("button",{staticClass:"btn text-left justify-start -ml-2 sm:ml-2",attrs:{slot:"header-content",type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue},slot:"header-content"},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"w-3.5 h-3.5 ml-1 flex-shrink-0"})],1)]),t._v(" "),t.$slots.default?e("div",{staticClass:"mb-5"},[t._t("default")],2):t._e(),t._v(" "),t._t("button",(function(){return[e("button",{staticClass:"btn btn-primary btn-large w-full",attrs:{type:"button",disabled:t.loading,loading:t.loading},on:{click:t.handleContinue}},[t._v("\n        "+t._s(t.buttonText)+"\n\n        "),e("ArrowRight",{staticClass:"btn-icon-right"})],1)]}))],2)])}),[],!1,null,null,null);e.a=component.exports},1598:function(t,e,n){"use strict";var r=n(1);n(22);e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return{data:function(){return{pageReady:!1,delay:t}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:setTimeout((function(){t.pageReady=!0}),t.delay);case 3:case"end":return e.stop()}}),e)})))()}}}},2321:function(t,e,n){"use strict";n.r(e);n(16),n(15),n(13),n(18),n(19);var r=n(1),o=n(3),l=(n(22),n(26),n(28),n(87),n(35)),c=n(1363),d=n(421),f=n(414),content=n(133),h=n(12),m=n(1410),v=n(1598),w=n(112),y=n(1231);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O={transition:"fade",layout:"progress",components:{TextInput:f.a,StepPage:m.a},mixins:[c.a,Object(v.a)(),content.e],data:function(){return{submittingForm:!1,slogan:"",wordmark:"",pendingAssetsPromise:Promise.resolve(),page:y}},computed:_({showSloganNameWarning:function(){return this.slogan.length>20},sloganValidationMessage:function(){return this.sloganValidationError.length>0?this.sloganValidationError:this.showSloganNameWarning?"The best slogans are short and sweet.":""},sloganValidationError:function(){var t,e;return Object(d.a)(this.$v.slogan,null===(t=this.page)||void 0===t||null===(e=t.input)||void 0===e?void 0:e.name)},sloganValidationStatus:function(){return 0===this.sloganValidationError.length?"":"error"},loading:function(){return this.submittingForm||!this.pageReady}},Object(l.e)(["flags","session"])),validations:{slogan:w.n,wordmark:w.p},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wordmark=t.session.wordmark||"",t.wordmark||t.redirectToBusinessName(),t.wordmark&&(t.$v.wordmark.$touch(),null!==(n=t.$v)&&void 0!==n&&null!==(r=n.wordmark)&&void 0!==r&&r.$error&&t.redirectToBusinessName()),t.slogan=t.session.slogan||"",t.slogan&&(null===(o=t.$v)||void 0===o||null===(l=o.slogan)||void 0===l||l.$touch()),e.next=7,t.$store.dispatch("session/sendSessionToKeyworder");case 7:h.a.$emit(h.b.StepSetProgress,30);case 8:case"end":return e.stop()}}),e)})))()},methods:{redirectToBusinessName:function(){this.$router.push({path:this.localePath("/business-name"),query:_({},this.$route.query)})},saveSlogan:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,path;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$invalidInput()&&!t.submittingForm){e.next=2;break}return e.abrupt("return");case 2:t.submittingForm=!0,n=t.slogan;try{n!==t.session.slogan&&(t.$store.commit("session/setSlogan",n),t.$store.commit("editor/SET_UNVALIDATED_SLOGAN",n),t.$store.dispatch("app/refreshLogos")),path="/editor",t.flags.enable_enhanced_flow?path="/flow/industry":t.flags.skip_editor_ideas?path=t.flags.editor_start_with_colors?"/editor/colors":"/editor/templates":t.flags.enable_standalone_ideas&&(path="/ideas"),t.$router.push(t.localePath(path)),t.$store.dispatch("session/sendSessionToKeyworder")}catch(e){t.submittingForm=!1}case 5:case"end":return e.stop()}}),e)})))()}}},j=O,k=n(11),component=Object(k.a)(j,(function(){var t=this,e=t._self._c;return e("StepPage",{attrs:{page:t.page,name:"Slogan",input:t.slogan,loading:t.loading},on:{continue:t.saveSlogan}},[e("TextInput",{attrs:{autofocus:"",maxlength:"40","data-hj-whitelist":"",status:t.sloganValidationStatus,"status-message":t.sloganValidationMessage,label:t.render(t.page.input.label),placeholder:t.render(t.page.input.placeholder),prompt:t.page.input.prompt,disabled:t.loading,"input-styles":"form-input-large"},on:{enter:t.saveSlogan},model:{value:t.slogan,callback:function(e){t.slogan=e},expression:"slogan"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=2a16f7d.js.map