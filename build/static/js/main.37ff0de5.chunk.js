(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,a){e.exports=a(416)},193:function(e,t,a){},332:function(e,t,a){},416:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(7),i=a.n(l),s=a(11),o=a(10),m=a(16),c=a(12),d=a(17),u=a(434),p=(a(193),a(433)),g=a(425),h=a(432),v=a(420),f=a(421),k=a(65),b=a(419),E=a(422),y=a(37),j=a(418),O=a(13),w=a(169),D=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={viewportWidth:0,menuVisible:!1},a.handleMenuVisibility=function(e){a.setState({menuVisible:e})},a.saveViewportDimensions=Object(w.throttle)(function(){a.setState({viewportWidth:window.innerWidth})},a.props.applyViewportChange),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.saveViewportDimensions(),window.addEventListener("resize",this.saveViewportDimensions)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.saveViewportDimensions)}},{key:"render",value:function(){var e=this,t=this.props.menuMarkup;return this.state.viewportWidth>this.props.mobileBreakPoint?r.a.createElement(t,{activeLinkKey:this.props.activeLinkKey}):r.a.createElement(j.a,{content:r.a.createElement(t,{onLinkClick:function(){return e.handleMenuVisibility(!1)},activeLinkKey:this.props.activeLinkKey,mobileVersion:!0}),trigger:"click",placement:this.props.placement,visible:this.state.menuVisible,onVisibleChange:this.handleMenuVisibility},r.a.createElement(O.a,{className:"iconHamburger",type:"menu"}))}}]),t}(n.Component);D.defaultProps={mobileBreakPoint:575,applyViewportChange:250,placement:"bottom"};var S=D,C=function(e){var t=e.mobileVersion,a=e.activeLinkKey,n=e.onLinkClick,l=e.className;return r.a.createElement("div",null,r.a.createElement(h.a,{mode:t?"vertical":"horizontal",selectedKeys:["".concat(a)],className:l,style:{lineHeight:"62px"}},r.a.createElement(h.a.Item,{key:"/"},r.a.createElement(b.a,{onClick:n,to:"/"},"Startsida")),r.a.createElement(h.a.Item,{key:"/om-oss"},r.a.createElement(b.a,{onClick:n,to:"/om-oss"},"Om oss")),r.a.createElement(h.a.Item,{key:"/verksamhet"},r.a.createElement(b.a,{onClick:n,to:"/verksamhet"},"Verksamhet"))))},x=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.location,t=(this.props.Auth.username||r.a.createElement(v.a,{xs:{span:0},sm:{span:4},md:{span:7},xl:{span:5}},r.a.createElement(f.a,{type:"flex",justify:"space-around"},r.a.createElement(v.a,{xs:{span:0},md:{span:12},style:{textAlign:"center"}},r.a.createElement(b.a,{to:"/logga-in"},r.a.createElement(k.a,null,"Logga in"))),r.a.createElement(v.a,{xs:{span:0},sm:{span:0},md:{span:12},style:{textAlign:"center"}},r.a.createElement(b.a,{to:"/bli-medlem"},r.a.createElement(k.a,{type:"primary"},"Bli medlem"))))),r.a.createElement(v.a,{xs:{span:0},sm:{span:1}}));return r.a.createElement(f.a,{style:{height:"100%"},type:"flex",justify:"space-between"},r.a.createElement(v.a,{xs:{span:0},sm:{span:7,offset:1},md:{span:6,offset:1},lg:{span:4}},r.a.createElement(b.a,{to:"/"},r.a.createElement("h1",{style:{lineHeight:"63px",marginTop:0,color:"rgb(24,144,255)",height:"100%",fontSize:23}},"Digital Ungdom"))),r.a.createElement(v.a,{xs:{span:10,offset:1},sm:{span:0}},r.a.createElement(b.a,{to:"/"},r.a.createElement("h1",{style:{lineHeight:"63px",marginTop:0,color:"rgb(24,144,255)",height:"100%"}},"Digital Ungdom"))),r.a.createElement(v.a,{xs:{span:2},sm:{span:16},md:{span:9}},r.a.createElement(S,{menuMarkup:C,activeLinkKey:e.pathname,placement:"bottom"})),t)}}]),t}(n.Component),N=(n.Component,Object(E.a)(x)),L=Object(y.b)(function(e){return{Auth:e.Auth}})(N),A=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e={xs:24,sm:12,md:8,lg:6};return r.a.createElement(f.a,{type:"flex",justify:"center",gutter:20,style:{width:"100%",padding:0,margin:0}},r.a.createElement(v.a,e,r.a.createElement("h3",null,"Om oss"),r.a.createElement("p",null,"Digital Ungdom \xe4r ett ideellt ungdomsf\xf6rbund med syfte att i Sverige utveckla och underh\xe5lla ungdomars intresse f\xf6r och kunskaper om digital teknik och datavetenskap samt hur detta kan anv\xe4ndas.")),r.a.createElement(v.a,e,r.a.createElement("h3",null,"Kontakt"),r.a.createElement("p",null,"E-post: ",r.a.createElement("a",{href:"mailto:styrelse@digitalungdom.se"},"digitalungdom@gmail.com")),r.a.createElement("p",null,"Telefonnummer: ",r.a.createElement("a",{href:"tel:***REMOVED***"},"***REMOVED***")),r.a.createElement("p",null,"Discord-server: ",r.a.createElement("a",{href:"https://discord.gg/2Cankhw"},"https://discord.gg/2Cankhw"))))}}]),t}(n.Component),U=a(184),V=a.n(U),B=a(435),T=a(424),F=a(185),I=a(423),M=function(e){e.currentSlide,e.slideCount,e.type;var t=Object(F.a)(e,["currentSlide","slideCount","type"]);return r.a.createElement("button",t)},R=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(I.a,{arrows:"true",nextArrow:r.a.createElement(M,{type:"arrow-right"}),prevArrow:r.a.createElement(M,{type:"arrow-left"})},r.a.createElement("div",null,r.a.createElement("h1",{className:"background-rgba",style:{marginTop:50,marginBottom:25}},"Gillar du programmering?"),r.a.createElement("p",{className:"background-rgba",style:{width:"75%",margin:"0 auto",marginBottom:50}},"Vi \xe4lskar ocks\xe5 programmering och digital teknik. L\xe4s mer om vilka vi genom att trycka p\xe5 knappen."),r.a.createElement(b.a,{to:"/om-oss"},r.a.createElement(k.a,{style:{marginBottom:20}},"L\xe4s mer om oss"))),r.a.createElement("div",null,r.a.createElement("h1",{className:"background-rgba",style:{marginTop:50,marginBottom:25}},"Vad g\xf6r Digital Ungdom?"),r.a.createElement("p",{className:"background-rgba",style:{width:"75%",margin:"0 auto",marginBottom:50}},"Digital Ungdom har flera delm\xe5l som \xe4r direkt l\xe4nkade till v\xe5r planerad verksamhet."),r.a.createElement(b.a,{style:{display:"block"},to:"/verksamhet"},r.a.createElement(k.a,{style:{marginBottom:20}},"L\xe4s om verksamhet"))))}}]),t}(n.Component),q=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement(R,null)))}}]),t}(n.Component),K=a(426),P=a(429),J=function(e){return{type:"LOGIN",credentials:e}},H=a(77),z=a(42),W=a(430),G=(r.a.Component,function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[]},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("Received values of form: ",t),console.log({username:t.email,password:t.password}),a.props.login({username:t.email,password:t.password}))})},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{sm:{span:7,offset:0}},wrapperCol:{xs:{span:20},sm:{span:15}}},a={wrapperCol:{xs:{span:10,offset:0},sm:{span:15,offset:7}}};return r.a.createElement(f.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{xs:{span:24},sm:{span:20},md:{span:15},lg:{span:11}},r.a.createElement(K.a,{className:"window",style:{padding:30},onSubmit:this.handleSubmit},r.a.createElement(f.a,null,r.a.createElement(v.a,a.wrapperCol,r.a.createElement("h1",null,"Logga in"))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"E-mail/anv\xe4ndarnamn"}),e("email",{rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Fyll i din e-mail eller ditt anv\xe4ndarnamn"}]})(r.a.createElement(P.a,null))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"L\xf6senord"}),e("password",{rules:[{required:!0,message:"Fyll i ditt l\xf6senord"},{validator:this.validateToNextPassword}]})(r.a.createElement(P.a,{type:"password"}))),r.a.createElement(K.a.Item,a,r.a.createElement(k.a,{style:{width:"100%"},type:"primary",htmlType:"submit"},"Logga in")))))}}]),t}(r.a.Component)),Y=K.a.create()(G),_=Object(y.b)(null,function(e){return{login:function(t){return e(J(t))}}})(Y),$=a(427),Q=a(431),X=a(428),Z=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!1,visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(){a.setState({loading:!1,visible:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.visible,a=e.loading;return r.a.createElement("div",null,r.a.createElement(Q.a,{style:{fontSize:"0.9em"},onChange:this.props.onChange},"Jag accepterar Digital Ungdoms anv\xe4ndarvillkor. ",r.a.createElement("a",{onClick:this.showModal},"L\xe4s mer.")),r.a.createElement(X.a,{visible:t,title:"Digital Ungdoms anv\xe4ndarvillkor",onOk:this.handleOk,onCancel:this.handleOk,footer:[r.a.createElement(k.a,{key:"submit",type:"primary",loading:a,onClick:this.handleOk},"St\xe4ng")]},r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents..."),r.a.createElement("p",null,"Some contents...")))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(r)))).state={confirmDirty:!1,autoCompleteResult:[],acceptedTOS:!1},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("Received values of form: ",t),console.log({username:t.email,password:t.password}),a.props.login({username:t.email,password:t.password}))})},a.validateToNextPassword=function(e,t,n){var r=a.props.form;t&&a.state.confirmDirty&&r.validateFields(["confirm"],{force:!0}),n()},a.handleConfirmBlur=function(e){var t=e.target.value;a.setState({confirmDirty:a.state.confirmDirty||!!t})},a.compareToFirstPassword=function(e,t,n){var r=a.props.form;t&&t!==r.getFieldValue("password")?n("L\xf6senorden st\xe4mmer inte \xf6verrens!"):n()},a.TOS=function(e){a.setState({acceptedTOS:e.target.checked})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.form.getFieldDecorator,t={labelCol:{sm:{span:7,offset:0}},wrapperCol:{xs:{span:20},sm:{span:15}}},a={wrapperCol:{xs:{span:10,offset:0},sm:{span:15,offset:7}}};return r.a.createElement(f.a,{type:"flex",justify:"center"},r.a.createElement(v.a,{xs:{span:24},sm:{span:20},md:{span:15},lg:{span:11}},r.a.createElement(K.a,{className:"window",style:{padding:30},onSubmit:this.handleSubmit},r.a.createElement(f.a,null,r.a.createElement(v.a,a.wrapperCol,r.a.createElement("h1",null,"Bli medlem"))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"Namn"}),e("Namn",{rules:[{required:!0,message:"Fyll i ditt namn",whitespace:!0}]})(r.a.createElement(P.a,null))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"Anv\xe4ndarnamn"}),e("Username",{rules:[{required:!0,message:"Fyll i ditt anv\xe4ndarnamn",whitespace:!0}]})(r.a.createElement(P.a,null))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"F\xf6delsedatum"}),e("Birthdate",{rules:[{required:!0,message:"V\xe4lj ditt f\xf6delsedatum"}]})(r.a.createElement($.a,{placeholder:"\xc5\xc5\xc5\xc5-MM-DD",style:{width:"100%"}}))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"E-mail"}),e("email",{rules:[{type:"email",message:"Ogiltig e-mail!"},{required:!0,message:"Fyll i din e-mail!"}]})(r.a.createElement(P.a,null))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"L\xf6senord"}),e("password",{rules:[{required:!0,message:"V\xe4lj ett l\xf6senord!"},{validator:this.validateToNextPassword}]})(r.a.createElement(P.a,{type:"password"}))),r.a.createElement(K.a.Item,Object.assign({},t,{label:"Bekr\xe4fta l\xf6senord"}),e("confirm",{rules:[{required:!0,message:"Bekr\xe4fta ditt l\xf6senord"},{validator:this.compareToFirstPassword}]})(r.a.createElement(P.a,{type:"password",onBlur:this.handleConfirmBlur}))),r.a.createElement(K.a.Item,a,e("agreement",{rules:[{required:!0,message:"F\xf6r att bli medlem beh\xf6ver du acceptera Digital Ungdoms anv\xe4ndarvillkor"}]},{valuePropName:"checked"})(r.a.createElement(Z,{onChange:this.TOS}))),r.a.createElement(K.a.Item,a,r.a.createElement(k.a,{style:{width:"100%"},type:"primary",htmlType:"submit",disabled:!this.state.acceptedTOS},"Bli medlem")))))}}]),t}(r.a.Component),te=K.a.create()(ee),ae=Object(y.b)(null,function(e){return{login:function(t){return e(J(t))}}})(te),ne=a(74),re={login:{username:"douglas",password:"kelvin"}},le=(a(332),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(c.a)(t).call(this,e))).state={selected:"nothing",value:""},a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(ne.a)(Object(ne.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"select",value:function(e){for(var t=e.target.options,a=0;a<t.length;a++)t[a].selected&&this.setState({selected:t[a].value,value:JSON.stringify(re[t[a].value],null,2)})}},{key:"handleTextAreaChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("select",{style:{display:"block"},onChange:function(t){return e.select(t)}},r.a.createElement("option",{value:"nothing"}),Object.keys(re).map(function(e,t){return r.a.createElement("option",{key:t,value:e},e)})),r.a.createElement("div",{className:"inline"},r.a.createElement("textarea",{style:{width:350,height:400},value:this.state.value,onChange:this.handleTextAreaChange}),r.a.createElement("button",{onClick:function(){return e.props[e.state.selected](JSON.parse(e.state.value))}},"Do action")),r.a.createElement("div",{className:"inline"},r.a.createElement("textarea",{style:{width:350,height:400},onChange:function(){return""},value:"PAYLOAD\n\n"+this.props.log.route+"\n"+JSON.stringify(this.props.log.payload,null,2)})),r.a.createElement("div",{className:"inline"},r.a.createElement("textarea",{style:{width:350,height:400},onChange:function(){return""},value:"RESULT\n\n"+this.props.log.route+"\n"+JSON.stringify(this.props.log.result,null,2)})),r.a.createElement("div",{className:"inline"},r.a.createElement("textarea",{style:{width:350,height:400},onChange:function(){return""},value:JSON.stringify(this.props.state,null,2)})))}}]),t}(n.Component)),ie=Object(y.b)(function(e){var t=Object.assign({},e);return delete t.Log,{state:t,log:e.Log}},function(e){return{login:function(t){return e(J(t))}}})(le),se=a(182),oe=a.n(se);var me=[{user:"Douglas Bengtsson",date:new Date,text:"\nHej\n\n```js\nvar React = require('react');\nvar Markdown = require('react-markdown');\n\nReact.render(\n  <Markdown source=\"# Your markdown here\" />,\n  document.getElementById('content')\n);\n```\n",title:"Hello, world!"}],ce=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"formatDate",value:function(e){var t=e.getDate(),a=e.getMonth(),n=e.getFullYear();return t+" "+["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"][a]+" "+n}},{key:"render",value:function(){var e=this,t={style:{padding:40},lg:{span:12},md:{span:18},sm:{span:24},xs:{span:24}};return me.map(function(a){return r.a.createElement(f.a,{type:"flex",justify:"center",key:a.date},r.a.createElement(v.a,Object.assign({},t,{className:"window blog-post"}),r.a.createElement("code",{className:"date"},e.formatDate(a.date)),r.a.createElement("h1",{className:"title"},a.title),r.a.createElement("h4",{className:"user"},a.user),r.a.createElement(oe.a,{source:a.text})))})}}]),t}(n.Component),de={style:{padding:40},lg:{span:12},md:{span:18},sm:{span:24},xs:{span:24}},ue=function(){return r.a.createElement(f.a,{type:"flex",justify:"center"},r.a.createElement(v.a,Object.assign({className:"window"},de),r.a.createElement("h1",null,"Om Digital Ungdom"),r.a.createElement("p",null,"Digital Ungdom \xe4r ett nationellt allm\xe4nnyttigt ideellt f\xf6rbund i Sverige. Digital Ungdoms syfte \xe4r att i Sverige utveckla och underh\xe5lla ungdomars intresse f\xf6r och kunskaper om digital teknik och datavetenskap, samt hur detta kan anv\xe4ndas. Digital Ungdoms vision \xe4r att verka genom ett brett kontaktn\xe4t av ungdomar och d\xe4rigenom aktivt bidra till att Sverige blir v\xe4rldsledande inom digital teknik och datavetenskap."),r.a.createElement("p",null,"Digital Ungdom samarbetar med den nationella handlingsplanen f\xf6r digitalisering av skolv\xe4sendet. Sveriges Kommuner och Landsting har efter en \xf6verrenskommelse med regeringen, ansvaret att ta fram denna handlingsplan. Digital Ungdom bidrar med ett elevperspektiv i fr\xe5gor som r\xf6r digital kompetens, digitaliserings utveckling, och de f\xf6rslag som kommer l\xe4ggas fram till regeringen i samband med handlingsplanen."),r.a.createElement("p",null,"Digital Ungdom har startat p\xe5 initiativ fr\xe5n Douglas Bengtsson som \xe4r f\xf6rbundsstyrelsens ordf\xf6rande. Douglas har l\xe4nge inspirerats av det nationella f\xf6rbundet Astronomisk Ungdom, och har saknat en motsvarighet f\xf6r teknik- och programmeringsintresserade ungdomar. Sommaren 2018 deltog Douglas i den svenska sommarforskarskolan Rays, d\xe4r han fick tr\xe4ffa andra likasinnade och engagerade ungdomar. Under Rays tr\xe4ffade han bland andra de tv\xe5 engagerade eleverna Simon Sond\xe9n och Kelvin Szolnoky. Simon Sond\xe9n som \xe4r vice ordf\xf6rande i styrelsen bor i Ume\xe5 och har bland annat deltagit i Robocup Junior VM. Kelvin Szolnoky som \xe4r vice ordf\xf6rande i styrelsen bor i G\xf6teborg och har bland annat varit mycket aktiv inom Astronomisk Ungdoms verksamhet.")))},pe={style:{padding:40},lg:{span:12},md:{span:18},sm:{span:24},xs:{span:24}},ge=function(){return r.a.createElement(f.a,{type:"flex",justify:"center"},r.a.createElement(v.a,Object.assign({},pe,{className:"window"}),r.a.createElement("h1",null,"Verksamhet"),r.a.createElement("p",null,"Digital Ungdom som nystartat f\xf6rbund har tagit fram flera delm\xe5l och planer p\xe5 verksamhet."),r.a.createElement("h2",null,"Delm\xe5l 1: N\xe4tverk av elever"),r.a.createElement("p",null,"Ett av Digital Ungdoms viktigaste delm\xe5l \xe4r att utveckla ett n\xe4tverk av teknik- och programmeringsintresserade ungdomar. F\xf6r att uppfylla detta m\xe5l utvecklas en plattform f\xf6r intresserade ungdomar d\xe4r de aktivt kan diskutera, samarbeta i projekt, utvecklas, och l\xe4ra sig av varandra."),r.a.createElement("h2",null,"Delm\xe5l 2: \xd6ka f\xf6rst\xe5else f\xf6r p\xe5verkan av digitalisering"),r.a.createElement("p",null,"Det \xe4r av yttersta vikt att ungdomar, och allm\xe4nheten i sin helhet, f\xf6rst\xe5r hur dagens digitala teknik p\xe5verkar oss och hur de kommer p\xe5verka oss i framtiden. Idag \xe4r det viktigt att vara medveten om hur f\xf6retag beh\xe5ller anv\xe4ndares integritet. F\xf6r framtiden \xe4r det viktigt att veta artificiell intelligens och automatisering kommer p\xe5verka samh\xe4llet. F\xf6r att uppfylla detta planeras spridning av l\xe4ttf\xf6rst\xe5eliga videor, artiklar, och f\xf6rel\xe4sningar som sprider s\xe5dan medvetenhet."),r.a.createElement("h2",null,"Delm\xe5l 3: Skapande av digital teknik"),r.a.createElement("p",null,"F\xf6r att Sverige ska ligga i framkanten av digital utveckling kr\xe4vs att fler ungdomar l\xe4r sig programmering, och speciellt viktigt \xe4r att utveckla avancerade programmeringskunskaper hos de ungdomar som \xe4r intresserade. F\xf6r att g\xf6ra detta planeras p\xe5 l\xe5ng sikt sommarskolor, som f\xf6rbundsstyrelsen har erfarenhet fr\xe5n Rays och Rymdforskarskolan."),r.a.createElement("h2",null,"Delm\xe5l 4: Anv\xe4ndande av digital teknik"),r.a.createElement("p",null,"M\xe5nga anst\xe4llare f\xf6ruts\xe4tter i dag att ungdomar har essentiella f\xf6rkunskaper f\xf6r att anv\xe4nda digitala milj\xf6er. Digital Ungdom har som m\xe5l att ungdomar generellt ska ha dessa essentiella f\xf6rm\xe5gorna, samt att h\xe5lla dessa f\xf6rm\xe5gor uppdaterade allt eftersom nya tekniker utvecklas."),r.a.createElement("h2",null,"Delm\xe5l 5: Verktyg f\xf6r studier"),r.a.createElement("p",null,"Digital Ungdom har som avsikt att alla ungdomar ska kunna anv\xe4nda sig av metoder som st\xf6djer deras studier, samt att k\xe4nna till vilka distraktionsmoment som kan uppst\xe5. Med detta inkluderas bland annat informationss\xf6kning och k\xe4llkritik."),r.a.createElement("h2",null,"Delm\xe5l 6: Fr\xe4mja tjejers intresse"),r.a.createElement("p",null,"Alla tjejer b\xf6r f\xe5 samma m\xf6jligheter som killar att utveckla ett intresse f\xf6r teknik och programmering. Detta planeras att g\xf6ras genom att fr\xe4mja en blandad och v\xe4lkomnande milj\xf6 som alla kan k\xe4nna sig hemma i.")))},he=function(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(B.a,null,r.a.createElement(T.a,{path:"/",exact:!0,component:q}),r.a.createElement(T.a,{path:"/bli-medlem",component:ae}),r.a.createElement(T.a,{path:"/logga-in",component:_}),r.a.createElement(T.a,{path:"/state",component:ie}),r.a.createElement(T.a,{path:"/blog",component:ce}),r.a.createElement(T.a,{path:"/om-oss",component:ue}),r.a.createElement(T.a,{path:"/verksamhet",component:ge})))},ve=p.a.Header,fe=p.a.Content,ke=p.a.Footer,be=function(){return r.a.createElement(u.a,null,r.a.createElement(p.a,{style:{minHeight:"100vh"}},r.a.createElement(ve,{style:{padding:0}},r.a.createElement(L,null)),r.a.createElement(fe,{style:{marginBottom:"20px"}},r.a.createElement(he,null)),r.a.createElement(ke,{style:{padding:0}},r.a.createElement(A,null))))},Ee=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{locale:V.a},r.a.createElement(be,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ye=a(59),je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_PAYLOAD":return Object(z.a)({},e,{payload:Object(z.a)({},t.payload),route:t.route});case"SAVE_RESULT":return Object(z.a)({},e,{result:Object(z.a)({},t.result)});default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return Object(z.a)({},e,t.credentials);default:return e}},we=Object(ye.b)({Log:je,Auth:Oe}),De=Object(ye.c)(we);i.a.render(r.a.createElement(y.a,{store:De},r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[188,2,1]]]);
//# sourceMappingURL=main.37ff0de5.chunk.js.map