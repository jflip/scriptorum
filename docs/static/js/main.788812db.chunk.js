(this.webpackJsonpscriptorum=this.webpackJsonpscriptorum||[]).push([[0],{164:function(e,t,a){e.exports=a(318)},169:function(e,t,a){},178:function(e,t){},180:function(e,t){},211:function(e,t){},212:function(e,t){},318:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(51),o=a.n(l),s=(a(169),a(152)),i=a(153),c=a(161),m=a(154),u=a(162),p=(a(170),a(158)),d=a(323);var h=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,"Scriptorum"),n.a.createElement("p",{className:"lead"},"Readable datasheets for Warhammer 40k Kill Team"),n.a.createElement("ul",null,n.a.createElement("li",null,"Organises abilities and weapons by phase"),n.a.createElement("li",null,"Merges identical models"),n.a.createElement("li",null,"Prints out as one datasheet per page"),n.a.createElement("li",null,"Clear, readable layout")),n.a.createElement(d.a,{variant:"danger"},"Scriptorum is a work in progress, but it should work, so try it out! If you spot any problems, please create an issue ",n.a.createElement("a",{href:"https://github.com/Floppy/scriptorum/issues"},"on GitHub")," and include your roster file if possible."))};var g=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(p.a,{onDrop:e.onUpload,accept:".ros,.rosz"},(function(e){var t=e.getRootProps,a=e.getInputProps;return n.a.createElement(d.a,Object.assign({variant:"info"},t(),{style:{textAlign:"center"}}),n.a.createElement("input",a()),n.a.createElement("p",null,"Drop a Battlescribe roster file here, or click to select one."),n.a.createElement("p",null,n.a.createElement("em",null,"(*.rosz and *.ros accepted)")))})),n.a.createElement("footer",null,"Built with React and Bootstrap. Released as Open Source, code ",n.a.createElement("a",{href:"https://github.com/floppy/scriptorum"},"on GitHub"),"."))},f=a(320);var E=function(e){return n.a.createElement(f.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"M"),n.a.createElement("th",null,"WS"),n.a.createElement("th",null,"BS"),n.a.createElement("th",null,"S"),n.a.createElement("th",null,"T"),n.a.createElement("th",null,"W"),n.a.createElement("th",null,"A"),n.a.createElement("th",null,"Ld"),n.a.createElement("th",null,"Sv"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,e.movement,'"'),n.a.createElement("td",null,e.weapon_skill,"+"),n.a.createElement("td",null,isNaN(e.ballistic_skill)?"-":e.ballistic_skill+"+"),n.a.createElement("td",null,e.strength),n.a.createElement("td",null,e.toughness),n.a.createElement("td",null,e.wounds),n.a.createElement("td",null,e.attacks),n.a.createElement("td",null,e.leadership),n.a.createElement("td",null,e.save,"+"))))},y=a(33);var v=function(e){var t=e.phase?e.abilities.filter((function(t){return t.phases.indexOf(e.phase)>=0})):e.abilities.filter((function(e){return 0===e.phases.length}));return 0===t.length?n.a.createElement(n.a.Fragment,null):n.a.createElement(f.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Ability"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,y.sortBy(t,["name"]).map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.description))}))))},b=a(33);var w=function(e){return 0===e.powers.length?n.a.createElement(n.a.Fragment,null):n.a.createElement(f.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Power"),n.a.createElement("th",null,"Warp Charge"),n.a.createElement("th",null,"Description"))),n.a.createElement("tbody",null,b.sortBy(e.powers,["name"]).map((function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,e.name),n.a.createElement("td",null,e.charge),n.a.createElement("td",null,e.description))}))))},N=a(33);var k=function(e){var t="shooting"===e.phase?e.weapons.filter((function(e){return!isNaN(e.range)})):e.weapons.filter((function(e){return isNaN(e.range)}));return"shooting"!==e.phase&&0===t.length&&t.push({name:"Close combat weapon",range:NaN,type:"Melee",strength:NaN,armourPiercing:0,damage:1,abilities:"-"}),0===t.length?n.a.createElement(n.a.Fragment,null):n.a.createElement(f.a,{striped:!0,bordered:!0},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Weapon"),"shooting"===e.phase&&n.a.createElement("th",null,"Range"),"shooting"===e.phase&&n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"S"),n.a.createElement("th",null,"AP"),n.a.createElement("th",null,"D"),n.a.createElement("th",null,"Abilities"))),n.a.createElement("tbody",null,N.sortBy(t,["name"]).map((function(t){return n.a.createElement("tr",null,n.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.name),"shooting"===e.phase&&n.a.createElement("td",null,t.range,'"'),"shooting"===e.phase&&n.a.createElement("td",{style:{whiteSpace:"nowrap"}},t.type),n.a.createElement("td",null,isNaN(t.strength)?e.userStrength:t.strength),n.a.createElement("td",null,t.armourPiercing),n.a.createElement("td",null,t.damage),n.a.createElement("td",null,t.abilities))}))))};var A=function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement("h2",{style:{textTransform:"capitalize"}},e.name),e.children)};function S(e){return n.a.createElement("span",{className:"specialism"},e.specialism?{combat:"\ud83e\udd1c",comms:"\ud83d\udcfb",demolitions:"\ud83d\udca3",ferocity:"\ud83e\udd96",fortitude:"\ud83d\udee1\ufe0f",heavy:"\ud83d\udca5",leadership:"\ud83d\udc80",logistics:"\ud83d\ude9a",medic:"\u2695\ufe0f",melee:"\ud83e\udd1c",psyker:"\ud83e\udde0",scout:"\ud83d\udd26",shooting:"\ud83d\udd2b",stealth:"\ud83d\udc7b",strategist:"\ud83d\uddfa\ufe0f",strength:"\ud83d\udcaa",sniper:"\ud83c\udfaf",veteran:"\u2b50",zealot:"\ud83d\ude24","":""}[e.specialism.toLowerCase()]:"")}function P(e){return n.a.createElement("span",{className:"category"},{commander:"\ud83d\udc51",leader:"\ud83d\udc80",specialist:""}[e.category.toLowerCase()])}var W=a(321);var B=function(e){return n.a.createElement("div",{className:"model",style:{pageBreakAfter:"always"}},n.a.createElement("h1",null,"Commander"===e.model.category||"Leader"===e.model.category?n.a.createElement(W.a,{variant:"warning"},n.a.createElement(P,{category:e.model.category})," ",e.model.category):e.model.specialism&&n.a.createElement(W.a,{variant:"warning"},n.a.createElement(S,{specialism:e.model.specialism})," ",e.model.specialism)," ",e.model.type,e.model.name&&n.a.createElement(n.a.Fragment,null,": ",n.a.createElement("em",null,e.model.name))),n.a.createElement("div",null,n.a.createElement(W.a,{pill:!0,variant:"danger",style:{textTransform:"uppercase",marginRight:"10px"}},e.model.faction),e.model.keywords.map((function(e){return n.a.createElement(W.a,{pill:!0,variant:"primary",style:{textTransform:"uppercase",marginRight:"10px"}},e)}))),n.a.createElement("div",null,"Points: ",e.model.points),n.a.createElement(E,e.model.stats),n.a.createElement(v,{abilities:e.model.abilities,phase:""}),n.a.createElement(A,{name:"movement"},n.a.createElement("p",{className:"lead"},"Movement: ",e.model.stats.movement,'"'),n.a.createElement(v,{abilities:e.model.abilities,phase:"movement"})),n.a.createElement(A,{name:"psychic"},n.a.createElement(w,{powers:e.model.psychicPowers}),n.a.createElement(v,{abilities:e.model.abilities,phase:"psychic"})),n.a.createElement(A,{name:"shooting"},n.a.createElement("p",{className:"lead"},"Ballistic Skill: ",e.model.stats.ballistic_skill,"+"),n.a.createElement(k,{weapons:e.model.weapons,phase:"shooting",userStrength:e.model.stats.strength}),n.a.createElement(v,{abilities:e.model.abilities,phase:"shooting"})),n.a.createElement(A,{name:"fight"},n.a.createElement("p",{className:"lead"},"Attacks: ",e.model.stats.attacks,", Weapon Skill: ",e.model.stats.weapon_skill,"+"),n.a.createElement(k,{weapons:e.model.weapons,phase:"fight",userStrength:e.model.stats.strength}),n.a.createElement(v,{abilities:e.model.abilities,phase:"fight"})),n.a.createElement(A,{name:"morale"},n.a.createElement("p",{className:"lead"},"Leadership: ",e.model.stats.leadership),n.a.createElement(v,{abilities:e.model.abilities,phase:"morale"})))},x=a(33),F=a(86)([]);var O=function(e){return n.a.createElement(n.a.Fragment,null,x.sortBy(e.models,(function(e){return[null==e.category,e.category,e.type]})).map((function(e){return n.a.createElement(B,{model:e,key:F.hash(e)})})))},R=a(322),C=a(82),T=a.n(C),D=a(255).DOMParser,I=a(258).useNamespaces({roster:"http://www.battlescribe.net/schema/rosterSchema"}),j=a(33),L=a(86)([]),M=function(e,t){var a=I("roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='".concat(e,"']"),t);return a.length>0?parseInt(a[0].childNodes[0].nodeValue):""},z=function(e,t,a){var r=I("roster:characteristics/roster:characteristic[@name='".concat(e,"']"),t);return r.length>0?a?parseInt(r[0].childNodes[0].nodeValue):r[0].childNodes[0].nodeValue:""},U=function(e){var t=I(".//roster:costs/roster:cost[@name='pts']",e);return j.sumBy(t,(function(e){return parseInt(e.getAttribute("value"))}))},V=function(e){var t=[];return/attacks/i.test(e)&&t.push("fight"),/charge/i.test(e)&&t.push("movement"),/advance/i.test(e)&&t.push("movement"),/move/i.test(e)&&t.push("movement"),/psychic/i.test(e)&&t.push("psychic"),/shoot/i.test(e)&&t.push("shooting"),/nerve/i.test(e)&&t.push("morale"),/leadership/i.test(e)&&t.push("morale"),t},_=function(e){var t=I("roster:description",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:V(t)}},G=function(e){var t=I("roster:characteristics/roster:characteristic[@name='Description']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:V(t)}},H=function(e){return{name:e.getAttribute("name"),range:z("Range",e,!0),type:z("Type",e,!1),strength:z("S",e,!0),armourPiercing:z("AP",e,!0),damage:z("D",e,!1),abilities:z("Abilities",e,!1)}},J=function(e){var t=I("roster:characteristics/roster:characteristic[@name='Ability']",e)[0].childNodes[0].nodeValue;return{name:e.getAttribute("name"),description:t,phases:V(t)}},q=function(e){var t=I("roster:characteristics/roster:characteristic[@name='Psychic Power']",e)[0].childNodes[0].nodeValue,a=t.match(/warp charge value of ([0-9]+)\.(.*)/),r=null;return a.length>2&&(r=parseInt(a[1]),t=a[2]),{name:e.getAttribute("name"),charge:r,description:t}},K=function(e){var t=I("//roster:force/roster:rules/roster:rule",e).map(_),a=I("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Wargear']",e).map(J),r=I("roster:profiles/roster:profile[@typeName='Ability']",e).map(G).concat(t).concat(a),n=I("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']",e).map(H),l=I("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles]",e),o=I("roster:selections/roster:selection/roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Ability']",e).map(G),s=I("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']",e).map(q),i=I("roster:categories/roster:category[@primary='true']",e)[0].getAttribute("name"),c=I("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]",e);return{name:e.getAttribute("customName"),type:e.getAttribute("name"),category:"Non-specialist"===i?"zzz-so-it-sorts-last-what-a-massive-hack":i,stats:{movement:M("M",e),weapon_skill:M("WS",e),ballistic_skill:M("BS",e),strength:M("S",e),toughness:M("T",e),wounds:M("W",e),attacks:M("A",e),leadership:M("Ld",e),save:M("Sv",e)},abilities:r.concat(o),weapons:n,psychicPowers:s,specialism:l.length>0?l[0].getAttribute("name"):null,faction:c.length>0?c[0].getAttribute("name").split(": ",2)[1]:null,keywords:I("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]",e).map((function(e){return e.getAttribute("name")})),points:U(e)}},$=function(e){var t=[],a=(new D).parseFromString(e),r=!0,n=!1,l=void 0;try{for(var o,s=I("//roster:force/roster:categories/roster:category",a)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var i=o.value.getAttribute("entryId"),c=!0,m=!1,u=void 0;try{for(var p,d=I("//roster:selection[@type='model' and roster:categories/roster:category/@entryId='".concat(i,"']"),a)[Symbol.iterator]();!(c=(p=d.next()).done);c=!0){var h=p.value;t.push(K(h))}}catch(g){m=!0,u=g}finally{try{c||null==d.return||d.return()}finally{if(m)throw u}}}}catch(g){n=!0,l=g}finally{try{r||null==s.return||s.return()}finally{if(n)throw l}}return j.uniqBy(t,L.hash)},Q=a(292),X=function(e){return function(e){return"P"!==e[0]?Promise.resolve(e):(new Q).loadAsync(e).then((function(e){return e.file(/[^/]+\.ros/)[0].async("string")}))}(e).then($)},Y=function(e){return function(e){var t;return T.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=new FileReader,a.abrupt("return",new Promise((function(a,r){t.onerror=function(){t.abort(),r(new DOMException("Problem parsing input file."))},t.onloadend=function(){return T.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a(X(t.result));case 1:case"end":return e.stop()}}))},t.readAsBinaryString(e)})));case 2:case"end":return a.stop()}}))}(e[0])},Z=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={models:[]},a.handleUpload=function(e){Y(e).then((function(e){a.setState({models:e})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement(R.a,null,0===this.state.models.length?n.a.createElement(g,{onUpload:this.handleUpload}):n.a.createElement(O,{models:this.state.models}))}}]),t}(n.a.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(n.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/scriptorum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/scriptorum","/service-worker.js");ee?(!function(e,t){fetch(e).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()}},[[164,1,2]]]);
//# sourceMappingURL=main.788812db.chunk.js.map