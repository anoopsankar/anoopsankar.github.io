webpackJsonp([1],{"1KN+":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-details"},[n("router-link",{attrs:{to:{name:"home"}}},[n("button",{staticStyle:{float:"right"}},[e._v("X")])]),e._v(" "),n("page-title",{attrs:{title:e.title,subtitle:"Edit info and role"}}),e._v(" "),e._m(0),n("form",{on:{submit:function(t){t.preventDefault(),e.updateUser(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.firstname,expression:"user.firstname"}],attrs:{type:"text"},domProps:{value:e.user.firstname},on:{input:function(t){t.target.composing||(e.user.firstname=t.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.lastname,expression:"user.lastname"}],attrs:{type:"text"},domProps:{value:e.user.lastname},on:{input:function(t){t.target.composing||(e.user.lastname=t.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],attrs:{type:"text"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||(e.user.email=t.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],attrs:{type:"text"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||(e.user.phone=t.target.value)}}}),n("br"),e._v(" "),e._m(1)]),e._v(" "),e.isNewUser?e._e():n("p",[n("button",{staticClass:"button danger",on:{click:e.deleteUser}},[e._v("Delete")])]),e._v(" "),n("p")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("label",[e._v("Info")]),e._v(" "),n("br")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("input",{staticClass:"button",staticStyle:{float:"right"},attrs:{type:"submit",value:"Save"}})])}],s={render:a,staticRenderFns:r};t.a=s},DapC:function(e,t,n){"use strict";function a(e){n("Ekvu")}var r=n("YeRF"),s=n("wg5P"),i=n("VU/8"),u=a,o=i(r.a,s.a,u,"data-v-45896214",null);t.a=o.exports},Ekvu:function(e,t){},GPCN:function(e,t){},K2bt:function(e,t){},M93x:function(e,t,n){"use strict";function a(e){n("XOH3")}var r=n("xJD8"),s=n("yiix"),i=n("VU/8"),u=a,o=i(r.a,s.a,u,null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),s=n("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:s.a,template:"<App/>",components:{App:r.a}})},"RC+j":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"userList"},[n("router-link",{attrs:{to:{name:"user_new"}}},[n("button",{staticStyle:{float:"right"}},[e._v("+")])]),e._v(" "),n("page-title",{attrs:{title:"Team Members",subtitle:e.description}}),e._v(" "),n("ul",e._l(e.users,function(t){return n("li",[n("router-link",{attrs:{to:{name:"user_edit",params:{id:t.id}}}},[n("p"),n("h5",[e._v(e._s(t.firstname)+" "+e._s(t.lastname))]),e._v("\n\t\t\t\t    "+e._s(t.phone)),n("br"),e._v("\n\t\t\t\t    "+e._s(t.email)+"\n\t\t\t"),n("p")])],1)}))],1)},r=[],s={render:a,staticRenderFns:r};t.a=s},UA8m:function(e,t,n){"use strict";var a=n("woOf"),r=n.n(a),s=n("DapC"),i=n("olkN");t.a={name:"user-details",components:{PageTitle:s.a},props:["id","isNewUser"],data:function(){return{user:r()({},i.a.getUserById(this.id))}},methods:{updateUser:function(){i.a.createOrUpdateUser(this.user),this.$router.push("/")},deleteUser:function(){i.a.deleteUser(this.user),this.$router.push("/")}},computed:{title:function(){return this.isNewUser?"Create Team Member":"Edit Team Member"}}}},XOH3:function(e,t){},YaEn:function(e,t,n){"use strict";var a=n("7+uW"),r=n("/ocq"),s=n("smCU"),i=n("s2FU");a.a.use(r.a),t.a=new r.a({mode:"history",routes:[{name:"home",path:"/",component:s.a},{name:"user_new",path:"/user/new",component:i.a,props:{isNewUser:!0}},{name:"user_edit",path:"/user/:id",component:i.a,props:!0}]})},YeRF:function(e,t,n){"use strict";t.a={name:"page-title",props:["title","subtitle"]}},olkN:function(e,t,n){"use strict";var a=n("Gu7T"),r=n.n(a),s={users:[{id:0,firstname:"Elizabeth",lastname:"Jennings",phone:"123-11-23",email:"elizabeth@mail.com"},{id:1,firstname:"Stan",lastname:"Beeman",phone:"413-44-11",email:"beeman@mail.com"},{id:2,firstname:"Nina",lastname:"Krilova",phone:"214-74-82",email:"nina@mail.com"},{id:3,firstname:"Oleg",lastname:"Burov",phone:"213-24-199",email:"oburov@mail.com"}],getUserById:function(e){return s.users.filter(function(t){return t.id==e})[0]||{}},createOrUpdateUser:function(e){var t=s.users.findIndex(function(t){return t.id===e.id});t<0?(e.id=s.getNextId(),s.users.push(e)):s.users[t]=e},deleteUser:function(e){var t=s.users.findIndex(function(t){return t.id===e.id});s.users.splice(t,1)},getNextId:function(){return Math.max.apply(Math,r()(s.users.map(function(e){return e.id})))+1}};t.a=s},qdDG:function(e,t,n){"use strict";var a=n("DapC"),r=n("olkN");t.a={name:"userList",components:{PageTitle:a.a},data:function(){return{users:r.a.users}},computed:{description:function(){return"You have "+this.users.length+" team members"}}}},s2FU:function(e,t,n){"use strict";function a(e){n("GPCN")}var r=n("UA8m"),s=n("1KN+"),i=n("VU/8"),u=a,o=i(r.a,s.a,u,"data-v-4c8149a4",null);t.a=o.exports},smCU:function(e,t,n){"use strict";function a(e){n("K2bt")}var r=n("qdDG"),s=n("RC+j"),i=n("VU/8"),u=a,o=i(r.a,s.a,u,"data-v-ce539aa8",null);t.a=o.exports},wg5P:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-title"},[n("h1",[e._v(e._s(e.title))]),e._v(" "),n("h2",[e._v(e._s(e.subtitle))])])},r=[],s={render:a,staticRenderFns:r};t.a=s},xJD8:function(e,t,n){"use strict";t.a={name:"app"}},yiix:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s={render:a,staticRenderFns:r};t.a=s}},["NHnr"]);
//# sourceMappingURL=app.765aa08d0dd984b9104d.js.map