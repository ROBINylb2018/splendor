!function(e){var t={};function s(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var a=this&&this.__awaiter||function(e,t,s,a){return new(s||(s=Promise))((function(n,i){function r(e){try{l(a.next(e))}catch(e){i(e)}}function o(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof s?t:new s((function(e){e(t)}))).then(r,o)}l((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const n=s(1),i=s(2);s(3);let r=e=>!1;!function(){let e=0;const t=["b","u","w","g","r"],s=t.concat(["*"]),o=["level1","level2","level3"];function l(e,t,a,i,r){return s.map(s=>{var o=s+"chip";return"*"===s&&(o="schip"),n.createElement("div",{className:"gem "+o,key:s+"_colors_"+r,onClick:a.bind(t,s)},n.createElement("div",{className:"bubble",onClick:a.bind(t,s)},e[s]),n.createElement("div",{className:"underlay",onClick:a.bind(t,s)},i))})}function c(e,t){return e.map(e=>n.createElement(u,{key:e.uuid,noble:e,game:t}))}function d(e,t,s="0"){for(e=String(e);e.length<t;)e=s+e;return e}const m=n.forwardRef(({seconds:e=0,onCountdownOver:t,getTurn:s},a)=>{const i=Math.floor(e/3600),r=Math.floor(e%3600/60),o=e%60,[l,c]=n.useState(!0),[m,h]=n.useState(!1),[u,p]=n.useState({hours:i,minutes:r,seconds:o});return n.useImperativeHandle(a,()=>({reset:()=>{document.getElementById("timeout").pause(),p({hours:i,minutes:r,seconds:o}),c(!1),h(!1)},pause:()=>{c(!0)}})),n.useEffect(()=>{let e=setInterval(()=>(console.log("ticking"),void(l||m||s()<0||(0===u.hours&&0===u.minutes&&u.seconds<=10&&document.getElementById("timeout").play(),0===u.hours&&0===u.minutes&&0===u.seconds?(h(!0),t()):0===u.minutes&&0===u.seconds?p({hours:u.hours-1,minutes:59,seconds:59}):0===u.seconds?p({hours:u.hours,minutes:u.minutes-1,seconds:59}):p({hours:u.hours,minutes:u.minutes,seconds:u.seconds-1})))),1e3);return()=>clearInterval(e)}),n.createElement("div",{className:"timer"},n.createElement("p",null,`当前回合自动跳过倒计时 ${d(u.hours.toString(),2)}:${d(u.minutes.toString(),2)}:${d(u.seconds.toString(),2)}`))});class h extends n.PureComponent{render(){const e=this.props.card,s=this.props.game;var a=s.buy.bind(s,e.uuid);const i=t=>{t.preventDefault(),s.reserve.bind(s)(e.uuid)};return e.color?n.createElement("div",{className:"card card-"+e.color+" card-"+e.level,id:e.uuid},n.createElement("div",{className:"reserve",onClick:i},n.createElement("img",{className:"floppy",src:"client/img/floppy.png"})),n.createElement("div",{className:"overlay",onClick:a}),n.createElement("div",{className:"underlay"},n.createElement("div",{className:"header"},n.createElement("div",{className:"color "+e.color+"gem"}),n.createElement("div",{className:"points"},e.points>0&&e.points)),n.createElement("div",{className:"costs"},t.map(t=>{if(e.cost[t]>0)return n.createElement("div",{key:e.uuid+"_cost_"+t,className:"cost "+t},e.cost[t])})))):n.createElement("div",{className:"deck "+e.level})}}class u extends n.PureComponent{render(){const e=this.props.noble,s=this.props.game,a=s.noble.bind(s,e.uuid);return n.createElement("div",{className:"noble",onClick:a,id:"noble"+e.id},n.createElement("div",{className:"side-bar"},n.createElement("div",{className:"points"},e.points>0&&e.points),n.createElement("div",{className:"requirement"},t.map(t=>{if(e.requirement[t]>0)return n.createElement("div",{key:e.uuid+"_req_"+t,className:"requires "+t},e.requirement[t])}))))}}class p extends n.PureComponent{constructor(){super(...arguments),this.state={editingName:null},this.editName=e=>{this.setState({editingName:e.target.value})},this.focusName=e=>{e.target.select()},this.submitName=()=>{this.props.game.rename(this.state.editingName),this.setState({editingName:null})},this.keypress=e=>{"Enter"===e.key&&this.submitName()}}render(){const e=this.props.game,a=this.props.pid,i=e.selectPlayer.bind(e,a),r={};s.map(e=>{r[e]={cards:0,gems:this.props.gems[e]}});const o=t.map(t=>{var s=this.props.cards[t].map(s=>(r[t].cards+=1,n.createElement("div",{key:a+"_card_"+s.uuid,className:"colorSetInner"},n.createElement(h,{key:s.uuid,card:s,game:e}))));return n.createElement("div",{key:a+"_set_"+t,className:"colorSet"},s,n.createElement("div",{className:s.length>0?"endcap":"spacer"}))}),d=s.map(e=>n.createElement("div",{className:"statSet",key:"stat"+e},n.createElement("div",{className:"stat stat"+("*"===e?"y":e)},r[e].gems+("*"==e?"":" / "+r[e].cards)),"*"===e?n.createElement(n.Fragment,null):n.createElement("div",null,n.createElement("img",{className:"labelImg",src:"client/img/labels.png"})))),m=e.props.pid===a?" you selected":"",u=e.props.pid===a?" (你)":"",p=l(this.props.gems,e,e.discard,"X",a),g=this.props.reserved?this.props.reserved.map(t=>n.createElement(h,{key:t.uuid+"_inner",card:t,game:e})):[],y=this.props.reserved?g.length:this.props.nreserved,f=c(this.props.nobles,e);return n.createElement("div",{className:"player"+m},n.createElement("div",{className:"playerHeader"},n.createElement("div",{className:"playerPoints"},this.props.points),null==this.state.editingName?n.createElement(n.Fragment,null,n.createElement("div",{className:"playerName",onClick:i},this.props.name),e.props.pid===a&&null==this.state.editingName?n.createElement("div",{className:"pencil",onClick:()=>this.setState({editingName:this.props.name})},"✏️"):n.createElement(n.Fragment,null)):n.createElement("div",{className:"playerName"},n.createElement("input",{className:"nameInput",type:"text",value:this.state.editingName,autoFocus:!0,onKeyPress:this.keypress,onFocus:this.focusName,onBlur:this.submitName,onChange:this.editName})),n.createElement("div",{className:"playerName2"},u),e.state.turn===a&&n.createElement("div",{className:"turnIndicator"},"←")),e.state.selectedPlayer===a?n.createElement("div",{className:"floater"},n.createElement("div",{className:"cards"},o),n.createElement("div",{className:"nobles"},f),n.createElement("div",{className:"gems"},p),n.createElement("div",{className:"reserveArea"},y>0&&n.createElement("div",null,n.createElement("div",{className:"reserveText"},"reserved"),n.createElement("div",{className:"reserveCards"},g)))):n.createElement("div",{className:"stats"},n.createElement("div",{className:"gem-stats"},d),n.createElement("div",{className:"reservedStat"},g)))}}class g extends n.PureComponent{render(){return n.createElement("div",null,n.createElement("div",{className:"deck "+this.props.name},n.createElement("div",{className:"remaining"},this.props.remaining),n.createElement("div",{className:"overlay"}),n.createElement("div",{className:"reserve",onClick:this.props.game.reserve.bind(this.props.game,this.props.name)},n.createElement("img",{className:"floppy",src:"client/img/floppy.png"}))),n.createElement("div",{className:"c_"+this.props.name+" face-up-cards"},n.createElement("div",{className:"cards-inner"},this.props.cards&&this.props.cards.map(e=>n.createElement(h,{key:e.uuid,card:e,game:this.props.game})))))}}class y extends n.PureComponent{constructor(e){super(e),this.state={players:[],gems:{},cards:{},chat:[],decks:{},nobles:[],log:[],turn:-1,winner:null,mode:"normal",error:null,selectedPlayer:-1,phase:"pregame",showChat:!1,showLog:!1,chatNotify:!1},this.isMyTurn=e=>e==this.props.pid,this.updateState=e=>{if(e.state){if(this.isMyTurn(e.state.turn)?("waiting"==this.state.mode&&(w.badge("!"),document.getElementById("notify").play()),this.setState({mode:"normal"})):this.setState({mode:"waiting"}),-1==this.state.selectedPlayer&&this.props.pid<5&&this.setState({selectedPlayer:this.props.pid}),this.setState({log:e.state.log,cards:e.state.cards,decks:e.state.decks,players:e.state.players,gems:e.state.gems,nobles:e.state.nobles,turn:e.state.turn}),null!==e.state.winner&&"postgame"!=this.state.phase&&(alert(e.state.players[e.state.winner].name+" 获得胜利！！!"),this.setState({phase:"postgame"})),e.chat){var t=this.state.chat;if(t&&t[t.length-1]&&e.chat[e.chat.length-1]){var s=t[t.length-1],a=e.chat[e.chat.length-1];s.msg!=a.msg&&a.pid!=this.props.pid&&(w.badge("."),document.getElementById("notify").play(),this.state.showChat||this.setState({chatNotify:!0}))}this.setState({chat:e.chat})}for(const e of document.getElementsByClassName("scroller"))e.scrollTop=e.scrollHeight}},this.loginArgs=()=>"?pid="+this.props.pid+"&uuid="+this.props.uuid,this.take=e=>{this.act("take",e)},this.discard=e=>{confirm("您确定要放弃这个宝石吗？")&&this.act("discard",e)},this.selectPlayer=e=>{this.setState({selectedPlayer:e})},this.buy=e=>{this.act("buy",e)},this.reserve=e=>{this.act("reserve",e)},this.noble=e=>{this.act("noble_visit",e)},this.rename=e=>a(this,void 0,void 0,(function*(){const t=yield fetch(`/rename/${this.props.gid}/${e}${this.loginArgs()}`,{method:"POST"}),s=yield t.json();r(s)})),this.act=(e,t)=>a(this,void 0,void 0,(function*(){const s=yield fetch("/game/"+this.props.gid+"/"+e+"/"+t+this.loginArgs(),{method:"POST"}),a=yield s.json();r(a)||this.updateState(a)})),this.nextTurn=()=>a(this,void 0,void 0,(function*(){const e=yield fetch("/game/"+this.props.gid+"/next"+this.loginArgs(),{method:"POST"}),t=yield e.json();r(t)||this.updateState(t)})),this.poll=()=>a(this,void 0,void 0,(function*(){const e=yield fetch("/poll/"+this.props.gid+this.loginArgs()),t=yield e.json();this.handleReset(),r(t)||(this.updateState(t),this.poll())})),this.stat=()=>a(this,void 0,void 0,(function*(){const e=yield fetch(`/stat/${this.props.gid}${this.loginArgs()}`),t=yield e.json();r(t)||this.updateState(t)})),this.chat=e=>a(this,void 0,void 0,(function*(){const t=document.getElementById("chat-inner");if(13==e.which){const e=yield fetch("/game/"+this.props.gid+"/chat"+this.loginArgs(),{method:"POST",body:JSON.stringify({msg:t.value})});t.value="";const s=yield e.json();r(s)||this.updateState(s)}})),this.handleReset=()=>{this.countdownRef.current&&this.countdownRef.current.reset()},this.handleCountdownOver=()=>{console.log("倒计时结束！"),this.isMyTurn(this.state.turn)&&this.nextTurn()},this.handleGetTurn=()=>this.state.turn,this.countdownRef=n.createRef()}componentDidMount(){this.stat(),this.poll()}render(){var e=this.state.players.map(e=>n.createElement(p,{selectedPlayer:this.state.selectedPlayer,key:e.uuid,pid:e.id,turnTimeout:this.props.turnTimeout,name:e.name,points:e.score,game:this,cards:e.cards,nobles:e.nobles,gems:e.gems,reserved:e.reserved,nreserved:e.reserved.length})),t=l(this.state.gems,this,this.take,"","game"),s=c(this.state.nobles,this),a=this.state.log.map((e,t)=>n.createElement("div",{key:"log-line-"+t,className:"line"},n.createElement("span",{className:"pid"},"["+e.pid+"] "),n.createElement("span",{className:"msg"},e.msg))),i=this.state.chat.map((e,t)=>n.createElement("div",{key:"chat-line-"+t,className:"line"},n.createElement("span",{className:"name name"+e.pid},e.name+": "),n.createElement("span",{className:"msg"},e.msg))),r=o.map(e=>n.createElement(g,{key:e,game:this,name:e,cards:this.state.cards[e],remaining:this.state.decks[e]}));return n.createElement("div",null,n.createElement("div",{id:"game-board"},n.createElement("div",{id:"common-area"},n.createElement("div",{id:"noble-area",className:"split"},s),n.createElement("div",{id:"level-area",className:"split"},r),n.createElement("div",{className:"reserve-info"},n.createElement("div",{className:"reserve-info-inner"},n.createElement("div",null,"点击卡面兑换, 点击 "),n.createElement("div",null,n.createElement("img",{className:"floppy",src:"client/img/floppy.png"})),n.createElement("div",null,"预约卡牌"))),n.createElement("div",{id:"gem-area",className:"you"},t)),n.createElement("div",{id:"player-area"},n.createElement(m,{seconds:this.props.turnTimeout,ref:this.countdownRef,onCountdownOver:this.handleCountdownOver,getTurn:this.handleGetTurn}),e)),n.createElement("div",{id:"log-box",style:{bottom:this.state.showLog?-4:-514}},n.createElement("div",{className:"title",onClick:()=>this.setState({showLog:!this.state.showLog})},"::Log"),n.createElement("div",{className:"scroller"},a)),n.createElement("div",{id:"chat-box",onClick:()=>this.setState({chatNotify:!1}),style:{bottom:this.state.showChat?-4:-314}},n.createElement("div",{className:"title"+(this.state.chatNotify?" blinking":""),onClick:()=>this.setState({showChat:!this.state.showChat})},"::Chat"),n.createElement("div",{className:"scroller"},i),n.createElement("div",{id:"chat"},n.createElement("span",{id:"prompt"},">"),n.createElement("input",{id:"chat-inner",type:"text",onKeyPress:this.chat}))),this.state.turn>=0&&this.props.pid>=0&&this.props.pid<5&&n.createElement("button",{id:"pass-turn",onClick:this.nextTurn,style:{opacity:this.isMyTurn(this.state.turn)?1:.3}},"跳过回合"))}}const f=e=>n.createElement("div",{className:"error-box",style:{opacity:e.opacity}},n.createElement("div",{className:"error-box-inner"},e.error));class v extends n.PureComponent{constructor(){super(...arguments),this.state={startKey:null,loading:!0,lobby:!1,joined:!1,pid:-1,uuid:"",gid:"",gameName:"",errorOpacity:0,error:null,turnTimeout:30},this.creating=!1,this.join=(e,t)=>a(this,void 0,void 0,(function*(){const s=this.readSession();if(s[e]&&!s[e].loading&&(s[e].joined||"spectate"===t))return this.setState(s[e]),void this.save();const a=yield fetch(`/${t}/${e}`,{method:"POST"}),n=yield a.json();404!==n.status?this.showError(n)||(this.setState({joined:"join"===t,loading:!1,pid:n.id,uuid:n.uuid,gid:e,turnTimeout:n.turnTimeout}),this.save()):this.createGame()})),this.showError=t=>{let s=null;return t?!!(t.error||t.result&&t.result.error)&&(s=t.error||t.result.error,404===t.status?(this.clear(),this.setState({loading:!0,joined:!1,pid:-1,uuid:""}),this.join(this.state.gid,"spectate"),!0):(this.setState({error:s,errorOpacity:1}),clearTimeout(e),e=setTimeout(()=>{this.setState({errorOpacity:0})},4e3),!0)):(s="Request failed",!0)},this.createGame=()=>a(this,void 0,void 0,(function*(){if(this.creating)return;this.creating=!0;const e=""===this.state.gid?this.state.gameName:this.state.gid,t=yield fetch("/create/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({turnTimeout:this.state.turnTimeout})}),s=yield t.json();this.showError(s)||(history.replaceState(null,"Splendor","/"+s.game),this.join(s.game,"join"),this.setState({startKey:s.start,loading:!0,lobby:!1}))})),this.readSession=()=>{var e=window.localStorage.getItem("splendor");return null===e?{}:JSON.parse(e)},this.save=()=>{setTimeout(()=>{this.saveRaw(this.state)},100)},this.clear=()=>{this.saveRaw(null)},this.saveRaw=e=>{const t=this.readSession();null===e?delete t[this.state.gid]:t[this.state.gid]=e,window.localStorage.splendor=JSON.stringify(t)},this.startGame=()=>a(this,void 0,void 0,(function*(){const e=yield fetch(`/start/${this.state.gid}/${this.state.startKey}`,{method:"POST"}),t=yield e.json();this.showError(t)||(this.setState({startKey:null}),this.save())})),this.nameChange=e=>{this.setState({gameName:e.target.value})},this.timeoutChange=e=>{this.setState({turnTimeout:Number(e.target.value)})},this.keyPress=e=>{"Enter"===e.key&&this.createGame()}}componentDidMount(){if(r=this.showError,"/"===window.location.pathname)return void fetch("/suggest").then(e=>a(this,void 0,void 0,(function*(){const t=yield e.json();this.setState({lobby:!0,gameName:t.result.game,loading:!1})})));const e=window.location.pathname.substring(1);var t=this.readSession();this.setState(Object.assign(Object.assign({},t[e]),{gid:e})),this.state.loading&&this.join(e,"spectate")}render(){return this.state.loading?n.createElement("div",{id:"game"},n.createElement(f,{error:this.state.error,opacity:this.state.errorOpacity})):this.state.lobby?n.createElement("div",{className:"lobby"},n.createElement("div",{className:"main-title"},"宝石商人"),n.createElement("div",{className:"desc"},"输入房间名称或使用推荐房间名称开始在线玩宝石商人游戏。"),n.createElement("div",{className:"name"},n.createElement("input",{className:"game-name",type:"text",onChange:this.nameChange,onKeyPress:this.keyPress,value:this.state.gameName})),n.createElement("div",{className:"desc"},"输入回合超时时长，玩家超时未操作则自动跳过回合，输入0禁用自动跳过。"),n.createElement("div",{className:"timeout"},n.createElement("input",{className:"game-name",type:"number",onChange:this.timeoutChange,onKeyPress:this.keyPress,value:this.state.turnTimeout})),n.createElement("div",{className:"desc"}),n.createElement("div",{className:"button"},n.createElement("button",{onClick:this.createGame,className:"create-game-button"},"创建游戏")),n.createElement(f,{error:this.state.error,opacity:this.state.errorOpacity})):n.createElement("div",{id:"game"},n.createElement("div",{id:"game-title"},n.createElement("div",{className:"link"},"把这个链接分享给朋友们，让他们加入或关注。: ",n.createElement("a",{href:"."},""+document.location.href)),n.createElement("div",{className:"buttons"},!this.state.joined&&n.createElement("button",{className:"start-game",onClick:()=>this.join(this.state.gid,"join")},"加入房间"),this.state.startKey&&0==this.state.pid&&n.createElement("button",{className:"start-game",onClick:this.startGame},"开始游戏"))),this.state.pid>=0&&this.state.gid&&this.state.uuid&&n.createElement(y,{key:this.state.pid,gid:this.state.gid,pid:this.state.pid,uuid:this.state.uuid,turnTimeout:this.state.turnTimeout}),n.createElement(f,{error:this.state.error,opacity:this.state.errorOpacity}))}}const w=new Favico({position:"up"});document.onclick=()=>{w.badge("")},i.render(n.createElement("div",null,n.createElement(v,null)),document.getElementById("content"))}()},function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t,s){var a;
/**
 * @license MIT
 * @fileOverview Favico animations
 * @author Miroslav Magda, http://blog.ejci.net
 * @version 0.3.10
 */!function(){var s=function(e){"use strict";e=e||{};var t,s,a,n,i,r,o,l,c,d,m,h,u,p,g,y,f={bgColor:"#d00",textColor:"#fff",fontFamily:"sans-serif",fontStyle:"bold",type:"circle",position:"down",animation:"slide",elementId:!1,dataUrl:!1,win:window};(u={}).ff="undefined"!=typeof InstallTrigger,u.chrome=!!window.chrome,u.opera=!!window.opera||navigator.userAgent.indexOf("Opera")>=0,u.ie=/*@cc_on!@*/!1,u.safari=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,u.supported=u.chrome||u.ff||u.opera;var v=[];m=function(){},l=h=!1;var w={ready:function(){l=!0,w.reset(),m()},reset:function(){l&&(v=[],c=!1,d=!1,r.clearRect(0,0,n,a),r.drawImage(o,0,0,n,a),x.setIcon(i),window.clearTimeout(p),window.clearTimeout(g))}};w.start=function(){if(l&&!d){if(v.length>0){d=!0;var e=function(){["type","animation","bgColor","textColor","fontFamily","fontStyle"].forEach((function(e){e in v[0].options&&(t[e]=v[0].options[e])})),T.run(v[0].options,(function(){c=v[0],d=!1,v.length>0&&(v.shift(),w.start())}),!1)};c?T.run(c.options,(function(){e()}),!0):e()}}};var E={},b=function(e){return e.n="number"==typeof e.n?Math.abs(0|e.n):e.n,e.x=n*e.x,e.y=a*e.y,e.w=n*e.w,e.h=a*e.h,e.len=(""+e.n).length,e};E.circle=function(e){var s=!1;2===(e=b(e)).len?(e.x=e.x-.4*e.w,e.w=1.4*e.w,s=!0):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w,s=!0),r.clearRect(0,0,n,a),r.drawImage(o,0,0,n,a),r.beginPath(),r.font=t.fontStyle+" "+Math.floor(e.h*(e.n>99?.85:1))+"px "+t.fontFamily,r.textAlign="center",s?(r.moveTo(e.x+e.w/2,e.y),r.lineTo(e.x+e.w-e.h/2,e.y),r.quadraticCurveTo(e.x+e.w,e.y,e.x+e.w,e.y+e.h/2),r.lineTo(e.x+e.w,e.y+e.h-e.h/2),r.quadraticCurveTo(e.x+e.w,e.y+e.h,e.x+e.w-e.h/2,e.y+e.h),r.lineTo(e.x+e.h/2,e.y+e.h),r.quadraticCurveTo(e.x,e.y+e.h,e.x,e.y+e.h-e.h/2),r.lineTo(e.x,e.y+e.h/2),r.quadraticCurveTo(e.x,e.y,e.x+e.h/2,e.y)):r.arc(e.x+e.w/2,e.y+e.h/2,e.h/2,0,2*Math.PI),r.fillStyle="rgba("+t.bgColor.r+","+t.bgColor.g+","+t.bgColor.b+","+e.o+")",r.fill(),r.closePath(),r.beginPath(),r.stroke(),r.fillStyle="rgba("+t.textColor.r+","+t.textColor.g+","+t.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?r.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):r.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),r.closePath()},E.rectangle=function(e){2===(e=b(e)).len?(e.x=e.x-.4*e.w,e.w=1.4*e.w):e.len>=3&&(e.x=e.x-.65*e.w,e.w=1.65*e.w),r.clearRect(0,0,n,a),r.drawImage(o,0,0,n,a),r.beginPath(),r.font=t.fontStyle+" "+Math.floor(e.h*(e.n>99?.9:1))+"px "+t.fontFamily,r.textAlign="center",r.fillStyle="rgba("+t.bgColor.r+","+t.bgColor.g+","+t.bgColor.b+","+e.o+")",r.fillRect(e.x,e.y,e.w,e.h),r.fillStyle="rgba("+t.textColor.r+","+t.textColor.g+","+t.textColor.b+","+e.o+")","number"==typeof e.n&&e.n>999?r.fillText((e.n>9999?9:Math.floor(e.n/1e3))+"k+",Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.2*e.h)):r.fillText(e.n,Math.floor(e.x+e.w/2),Math.floor(e.y+e.h-.15*e.h)),r.closePath()};function N(e){if(e.paused||e.ended||h)return!1;try{r.clearRect(0,0,n,a),r.drawImage(e,0,0,n,a)}catch(e){}g=setTimeout((function(){N(e)}),T.duration),x.setIcon(i)}var x={};function S(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,s,a){return t+t+s+s+a+a}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return!!t&&{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}}function C(e,t){var s,a={};for(s in e)a[s]=e[s];for(s in t)a[s]=t[s];return a}x.getIcon=function(){var e=!1;return t.element?e=t.element:t.elementId?(e=y.getElementById(t.elementId)).setAttribute("href",e.getAttribute("src")):!1===(e=function(){for(var e=y.getElementsByTagName("head")[0].getElementsByTagName("link"),t=e.length-1;t>=0;t--)if(/(^|\s)icon(\s|$)/i.test(e[t].getAttribute("rel")))return e[t];return!1}())&&((e=y.createElement("link")).setAttribute("rel","icon"),y.getElementsByTagName("head")[0].appendChild(e)),e.setAttribute("type","image/png"),e},x.setIcon=function(e){var a=e.toDataURL("image/png");if(t.dataUrl&&t.dataUrl(a),t.element)t.element.setAttribute("href",a),t.element.setAttribute("src",a);else if(t.elementId){var n=y.getElementById(t.elementId);n.setAttribute("href",a),n.setAttribute("src",a)}else if(u.ff||u.opera){var i=s;s=y.createElement("link"),u.opera&&s.setAttribute("rel","icon"),s.setAttribute("rel","icon"),s.setAttribute("type","image/png"),y.getElementsByTagName("head")[0].appendChild(s),s.setAttribute("href",a),i.parentNode&&i.parentNode.removeChild(i)}else s.setAttribute("href",a)};var T={duration:40,types:{}};return T.types.fade=[{x:.4,y:.4,w:.6,h:.6,o:0},{x:.4,y:.4,w:.6,h:.6,o:.1},{x:.4,y:.4,w:.6,h:.6,o:.2},{x:.4,y:.4,w:.6,h:.6,o:.3},{x:.4,y:.4,w:.6,h:.6,o:.4},{x:.4,y:.4,w:.6,h:.6,o:.5},{x:.4,y:.4,w:.6,h:.6,o:.6},{x:.4,y:.4,w:.6,h:.6,o:.7},{x:.4,y:.4,w:.6,h:.6,o:.8},{x:.4,y:.4,w:.6,h:.6,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],T.types.none=[{x:.4,y:.4,w:.6,h:.6,o:1}],T.types.pop=[{x:1,y:1,w:0,h:0,o:1},{x:.9,y:.9,w:.1,h:.1,o:1},{x:.8,y:.8,w:.2,h:.2,o:1},{x:.7,y:.7,w:.3,h:.3,o:1},{x:.6,y:.6,w:.4,h:.4,o:1},{x:.5,y:.5,w:.5,h:.5,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],T.types.popFade=[{x:.75,y:.75,w:0,h:0,o:0},{x:.65,y:.65,w:.1,h:.1,o:.2},{x:.6,y:.6,w:.2,h:.2,o:.4},{x:.55,y:.55,w:.3,h:.3,o:.6},{x:.5,y:.5,w:.4,h:.4,o:.8},{x:.45,y:.45,w:.5,h:.5,o:.9},{x:.4,y:.4,w:.6,h:.6,o:1}],T.types.slide=[{x:.4,y:1,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.9,w:.6,h:.6,o:1},{x:.4,y:.8,w:.6,h:.6,o:1},{x:.4,y:.7,w:.6,h:.6,o:1},{x:.4,y:.6,w:.6,h:.6,o:1},{x:.4,y:.5,w:.6,h:.6,o:1},{x:.4,y:.4,w:.6,h:.6,o:1}],T.run=function(e,s,a,n){var r=T.types[y.hidden||y.msHidden||y.webkitHidden||y.mozHidden?"none":t.animation];n=!0===a?void 0!==n?n:r.length-1:void 0!==n?n:0,s=s||function(){},n<r.length&&n>=0?(E[t.type](C(e,r[n])),p=setTimeout((function(){a?n-=1:n+=1,T.run(e,s,a,n)}),T.duration),x.setIcon(i)):s()},function(){(t=C(f,e)).bgColor=S(t.bgColor),t.textColor=S(t.textColor),t.position=t.position.toLowerCase(),t.animation=T.types[""+t.animation]?t.animation:f.animation,y=t.win.document;var l=t.position.indexOf("up")>-1,c=t.position.indexOf("left")>-1;if(l||c)for(var d=0;d<T.types[""+t.animation].length;d++){var m=T.types[""+t.animation][d];l&&(m.y<.6?m.y=m.y-.4:m.y=m.y-2*m.y+(1-m.w)),c&&(m.x<.6?m.x=m.x-.4:m.x=m.x-2*m.x+(1-m.h)),T.types[""+t.animation][d]=m}t.type=E[""+t.type]?t.type:f.type,s=x.getIcon(),i=document.createElement("canvas"),o=document.createElement("img"),s.hasAttribute("href")?(o.setAttribute("crossOrigin","anonymous"),o.onload=function(){a=o.height>0?o.height:32,n=o.width>0?o.width:32,i.height=a,i.width=n,r=i.getContext("2d"),w.ready()},o.setAttribute("src",s.getAttribute("href"))):(o.onload=function(){a=32,n=32,o.height=a,o.width=n,i.height=a,i.width=n,r=i.getContext("2d"),w.ready()},o.setAttribute("src",""))}(),{badge:function(e,t){t=("string"==typeof t?{animation:t}:t)||{},m=function(){try{if("number"==typeof e?e>0:""!==e){var s={type:"badge",options:{n:e}};if("animation"in t&&T.types[""+t.animation]&&(s.options.animation=""+t.animation),"type"in t&&E[""+t.type]&&(s.options.type=""+t.type),["bgColor","textColor"].forEach((function(e){e in t&&(s.options[e]=S(t[e]))})),["fontStyle","fontFamily"].forEach((function(e){e in t&&(s.options[e]=t[e])})),v.push(s),v.length>100)throw new Error("Too many badges requests in queue.");w.start()}else w.reset()}catch(e){throw new Error("Error setting badge. Message: "+e.message)}},l&&m()},video:function(e){m=function(){try{if("stop"===e)return h=!0,w.reset(),void(h=!1);e.addEventListener("play",(function(){N(this)}),!1)}catch(e){throw new Error("Error setting video. Message: "+e.message)}},l&&m()},image:function(e){m=function(){try{var t=e.width,s=e.height,o=document.createElement("img"),l=t/n<s/a?t/n:s/a;o.setAttribute("crossOrigin","anonymous"),o.onload=function(){r.clearRect(0,0,n,a),r.drawImage(o,0,0,n,a),x.setIcon(i)},o.setAttribute("src",e.getAttribute("src")),o.height=s/l,o.width=t/l}catch(e){throw new Error("Error setting image. Message: "+e.message)}},l&&m()},webcam:function(e){if(window.URL&&window.URL.createObjectURL||(window.URL=window.URL||{},window.URL.createObjectURL=function(e){return e}),u.supported){var t=!1;navigator.getUserMedia=navigator.getUserMedia||navigator.oGetUserMedia||navigator.msGetUserMedia||navigator.mozGetUserMedia||navigator.webkitGetUserMedia,m=function(){try{if("stop"===e)return h=!0,w.reset(),void(h=!1);(t=document.createElement("video")).width=n,t.height=a,navigator.getUserMedia({video:!0,audio:!1},(function(e){t.src=URL.createObjectURL(e),t.play(),N(t)}),(function(){}))}catch(e){throw new Error("Error setting webcam. Message: "+e.message)}},l&&m()}},reset:w.reset,browser:{supported:u.supported}}};void 0===(a=function(){return s}.apply(t,[]))||(e.exports=a)}()}]);
//# sourceMappingURL=main.js.map