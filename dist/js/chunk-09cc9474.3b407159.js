(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09cc9474"],{"84bc":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[1==t.id?i("div",{staticClass:"top"},[t._v("消息队列练习")]):t._e(),1==t.id?i("h2",{staticStyle:{"margin-top":"30px","padding-left":"5%","font-size":"20px"}},[t._v("第1大题(共10题,100.00分)")]):t._e(),t._l(t.list,(function(e,n){return 1==t.id?i("div",{key:n,staticClass:"body"},[i("p",{staticClass:"body_title"},[i("span",[t._v(t._s(e.id)+".")]),t._v(" "+t._s(e.name)+"? (问答题,10.0分) ")]),t._m(0,!0),t.currentActive!=n?i("button",{staticClass:"btn",on:{click:function(e){t.currentActive=n}}},[t._v("查看答案")]):t._e(),t.currentActive==n?i("div",{staticClass:"hides"},[i("span",[t._v("X")]),t._v("答错了"),i("br"),t._v(" 得分: "),i("span",[t._v("0.0")]),t._v("分"),i("br"),t._v(" 标准答案:"),i("br"),t._v(" 消息提供方->路由->-至多个队列消息发布到交换器时,消 息将拥有一个路由键(routing key),在消息创建时设定。通 过队列路由键,可以把队列绑定到交换器上。消息到达交换 器后,RabbitMQ会将消息的路由键与队列的路由键进行匹配 (针对不同的交换器有不同的路由规则);常用的交换器主要 分为以下三种: fanout:如果交换器收到消息，将会广播到所有 绑定的队列上direct:如果路由键完全匹配,消息就被投递到 相应的队列topic:可以使来自不同源头的消息能够到达同一 个队列。使用topic交换 器时,可以使用通配符。 ")]):t._e()]):t._e()})),2==t.id?i("div",[i("div",{staticClass:"top"},[t._v(" ▦ 答题卡 ")]),i("div",{staticStyle:{padding:"8px 8px 8px 20px"}},[t._v(" 第 1 大题"),i("br"),t._l(t.list,(function(e,n){return i("a",{key:n,staticClass:"tishu",staticStyle:{border:"solid 1px #bababc"}},[t._v(" "+t._s(e.id)+" ")])}))],2)]):t._e(),i("div",{staticStyle:{"margin-top":"20%"}}),i("div",{staticClass:"bottom"},[1==t.id?i("a",{staticClass:"bottom-item",staticStyle:{"border-right":"#e2e1e1 1px solid",color:"#000000","background-color":"#e5e5e5"},attrs:{href:"#"},on:{click:function(e){t.id=2}}},[t._v("答题卡")]):t._e(),2==t.id?i("a",{staticClass:"bottom-item",staticStyle:{"border-right":"#e2e1e1 1px solid",color:"#000000","background-color":"#e5e5e5"},attrs:{href:"#"},on:{click:function(e){t.id=1}}},[t._v("返回到试卷")]):t._e(),i("a",{staticClass:"bottom-item",staticStyle:{"background-color":"#e64240",color:"white"},attrs:{href:"#"},on:{click:t.commit}},[t._v("交卷"),i("span",{staticStyle:{"font-size":"12px","margin-left":"10px"}},[t._v(t._s(t.minutes)+"分"+t._s(t.seconds)+"秒")])])])],2)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("textarea",{attrs:{rows:"10",cols:"40"}})])}],a=i("76a0"),c={data:function(){return{list:[{id:1,name:"消息怎么路由"},{id:2,name:"什么是应用解耦"},{id:3,name:"什么是异步处理"},{id:4,name:"消息如何分发"},{id:5,name:"activemq的几种通信方式"},{id:6,name:"日志收集系统的消息中间件介绍"},{id:7,name:"如何设置消息的过期时间"},{id:8,name:"消息基于什么传输"},{id:9,name:"三种广播模式"},{id:10,name:"如何指定消息的优先级"}],value:null,minutes:60,seconds:0,id:1,currentActive:-1}},methods:{commit:function(){var t=this;console.log("123"),Object(a["MessageBox"])({title:"",message:"确认交卷吗?",showCancelButton:!0}),a["MessageBox"].confirm("确认交卷吗?").then((function(e){t.$router.push("/jjcg")}))},num:function(t){return t<10?"0"+t:""+t},timer:function(){var t=this,e=setInterval((function(){0===t.seconds&&0!==t.minutes?(t.seconds=59,t.minutes-=1):0===t.minutes&&0===t.seconds?(t.seconds=0,clearInterval(e)):t.seconds-=1}),1e3)}},mounted:function(){this.timer()},watch:{second:{handler:function(t){this.num(t)}},minute:{handler:function(t){this.num(t)}}}},o=c,r=(i("d7bf"),i("2877")),d=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=d.exports},ab75:function(t,e,i){},d7bf:function(t,e,i){"use strict";var n=i("ab75"),s=i.n(n);s.a}}]);
//# sourceMappingURL=chunk-09cc9474.3b407159.js.map