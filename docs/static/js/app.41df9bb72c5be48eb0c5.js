webpackJsonp([1],Array(26).concat([function(t,e,n){"use strict";var s=n(15),a=n(85),r=n(78),i=n.n(r);s.a.use(a.a),e.a=new a.a({routes:[{path:"/",name:"Hello",component:i.a}]})},function(t,e,n){function s(t){n(67)}var a=n(2)(n(29),n(81),s,null,null);t.exports=a.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(15),a=n(27),r=n.n(a),i=n(26);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:r.a}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(75),a=n.n(s),r=n(76),i=n.n(r);e.default={name:"app",components:{TaskList:a.a,Tender:i.a},data:function(){return{tasks:[{title:"Credit Guarantee Fund Trust for Micro and Small Enterprises (hereinafter referred to as Trust) is a trust formed by Govt. of India and SIDBI for providing guarantee to the credit facilities extended by banks and financial institutions to Micro and Small Enterprises. The Trust is operating from its Mumbai Office and Chennai cell.",completed:!0},{title:"In order to meet the hardware requirement at its Mumbai Office, the Trust invites\nsealed bids from eligible bidders for the supply, installation and commissioning of\ncomputer hardware (Desktop PCs / Laptops / Monitors) along with operating system\nand other peripherals to its office at Mumbai against buyback of existing Desktop\nPCs in as is where is condition. The number of old PCs available under buyback is\ngiven in Annexure VI.",completed:!1},{title:"Tender methodology proposed to be adopted by the Trust will be “TWO Bid\nsystem” i.e. Technical Bid and Commercial Bid with Technical bid containing prequalification\nalso. The Trust would enter into contract with the bidder who qualify prequalification,\ntechnical bid and whose commercial bid is found to be Lowest\nCommercial Bid [L-1].",completed:!1},{title:"Minimum Eligibility Criteria / Pre-qualification criteria:\n       Should be Original Equipment Manufacturers (OEM) / Authorised Dealer\n(AUD)/Distributor of OEM.\n ",completed:!1},{title:"The Bidder as authorised agent, has supplied installed and commissioned\ncomputer hardware and peripherals of the kind required by the Trust and\nhas provided after sales service satisfactorily and such computer hardware\nand peripherals must be in satisfactory operation for at least 2 years on\nthe date of Bid opening and must be providing annual maintenance\nservices for the above installations.",completed:!1},{title:"Should be a Registered Company.",completed:!0},{title:"Should be in existence in core Computer hardware sales and services\nbusiness for the last five (5) years.",completed:!1},{title:"should have minimum average turnover or 1 Crore per annum out of Indian\nOperations from the sale of computer hardware during the last three (3) years\nending March 2010. In case of Bidder not himself the manufacturer, the\nturnover should be of its own and not that of the principal.",completed:!1}]}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"task-item",props:["task"],computed:{className:function(){var t=["tasks__item__toggle"];return this.task.completed&&t.push("tasks__item__toggle--completed"),t.join(" ")}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(35),a=n.n(s),r=n(74),i=n.n(r);e.default={name:"task-list",props:{tasks:{default:[]}},data:function(){return{newTask:""}},components:{TaskItem:i.a},computed:{incomplete:function(){return this.tasks.filter(this.inProgress).length}},methods:{addTask:function(){this.newTask&&(this.tasks.push({title:this.newTask,completed:!1}),this.newTask="")},completeTask:function(t){t.completed=!t.completed},removeTask:function(t){this.tasks.splice(t,1)},clearCompleted:function(){this.tasks=this.tasks.filter(this.inProgress)},clearAll:function(){var t=!0,e=!1,n=void 0;try{for(var s,r=a()(this.tasks);!(t=(s=r.next()).done);t=!0){s.value.completed=!1}}catch(t){e=!0,n=t}finally{try{!t&&r.return&&r.return()}finally{if(e)throw n}}},inProgress:function(t){return!this.isCompleted(t)},isCompleted:function(t){return t.completed}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(77),a=n.n(s);e.default={name:"tender",props:{tasks:{default:[]}},data:function(){return{newTask:""}},components:{TenderItem:a.a},computed:{incomplete:function(){return this.tasks.filter(this.inProgress).length}},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tende-item",props:["task"],computed:{isAdded:function(){return this.task.completed}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){function s(t){n(69)}var a=n(2)(n(30),n(83),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(68)}var a=n(2)(n(31),n(82),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(65)}var a=n(2)(n(32),n(79),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(66)}var a=n(2)(n(33),n(80),s,null,null);t.exports=a.exports},function(t,e,n){function s(t){n(70)}var a=n(2)(n(34),n(84),s,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tasks"},[t._m(0),t._v(" "),n("div",{staticClass:"task-item-list"},[n("ol",t._l(t.tasks,function(e,s){return n("tender-item",{key:s,attrs:{task:e},on:{remove:function(e){t.removeTask(s)},complete:function(n){t.completeTask(e)}}})}))]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"title"},[n("h1",[t._v("\n      BANK OF CEYLON\n    ")]),t._v(" "),n("h3",[t._v("\n      INVITATION FOR BIDS\n    ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("table",[n("tr",[n("td",{staticStyle:{"text-align":"right",padding:"1em"}},[n("img",{staticClass:"logo",attrs:{src:"static/img/boc_logo.png"}})]),t._v(" "),n("td",{staticStyle:{padding:"1em"}},[t._v("\n          Chief Manager, "),n("br"),t._v("\n          Name of the Department, "),n("br"),t._v("\n          Address Line 1, "),n("br"),t._v("\n          Address Line 2,"),n("br"),t._v("\n          Street, "),n("br"),t._v("\n          City.\n        ")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isAdded?n("li",{staticClass:"tender__item"},[t._v("\n    "+t._s(t.task.title)+"\n")]):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("table",{staticClass:"row"},[n("tr",[n("td",{attrs:{width:"50%"}},[n("task-list",{attrs:{tasks:t.tasks}})],1),t._v(" "),n("td",{attrs:{width:"50%"}},[n("tender",{attrs:{tasks:t.tasks}})],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"tasks"},[n("h3",[t._v("\n    Electronic Equipments\n    "),n("transition",{attrs:{name:"fade"}},[t.incomplete?n("small",[t._v("("+t._s(t.incomplete)+")")]):t._e()])],1),t._v(" "),n("div",{staticClass:"tasks__new input-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],staticClass:"input-group-field",attrs:{type:"text",placeholder:"New task"},domProps:{value:t.newTask},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addTask(e)},input:function(e){e.target.composing||(t.newTask=e.target.value)}}}),t._v(" "),n("span",{staticClass:"input-group-button"},[n("button",{staticClass:"button",on:{click:t.addTask}},[n("i",{staticClass:"fa fa-plus"}),t._v(" Add\n      ")])])]),t._v(" "),n("div",{staticClass:"tasks__clear button-group pull-right"},[n("button",{staticClass:"button warning small",on:{click:t.clearAll}},[n("i",{staticClass:"fa fa-check"}),t._v(" Clear All\n    ")])]),t._v(" "),n("transition-group",{staticClass:"tasks__list no-bullet",attrs:{name:"fade",tag:"ul"}},t._l(t.tasks,function(e,s){return n("task-item",{key:s,attrs:{task:e},on:{remove:function(e){t.removeTask(s)},complete:function(n){t.completeTask(e)}}})}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"tasks__item"},[n("button",{class:t.className,on:{click:function(e){if(e.target!==e.currentTarget)return null;t.$emit("complete")}}},[t._v("\n    "+t._s(t.task.title)+"\n  ")]),t._v(" "),n("button",{staticClass:"tasks__item__remove button alert pull-right",on:{click:function(e){t.$emit("remove")}}},[t._v("\n    x\n  ")])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}]}}]),[28]);
//# sourceMappingURL=app.41df9bb72c5be48eb0c5.js.map