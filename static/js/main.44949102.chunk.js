(this["webpackJsonpcooking-timer"]=this["webpackJsonpcooking-timer"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/alarm.fe098666.mp3"},,function(e,t,a){e.exports=a(26)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(14),a(8)),m=a(2),u=a(1),o=(a(15),a(16),a(17),function(e){var t=e.id,a=e.value,n=e.name;return r.a.createElement("div",{className:"clock-item",key:t},r.a.createElement("p",{className:"clock-item__paragraph  clock-item__paragraph--bigger"},a),r.a.createElement("p",{className:"clock-item__paragraph "},n))}),s=function(e){var t=e.timerValue,a=0,n=0,c=0;t>0&&(a=Math.floor(t/60/100%60).toString().padStart(2,0),n=Math.floor(t/100%60).toString().padStart(2,0),c=Math.floor(t%100).toString().padStart(2,0));var i=[{id:1,name:"minutes",value:a},{id:2,name:"seconds",value:n},{id:3,name:"hundredths of a second",value:c}].map((function(e){return r.a.createElement(o,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"clock"},i)},d=(a(18),function(e){var t=e.actualMeal;return r.a.createElement("h1",{className:"title"}," ",t," ready in")}),v=(a(19),function(e){var t=e.activity,a=e.handler,n=e.active,c=e.blockName;return r.a.createElement("button",{onClick:a,className:"button ".concat(n?"button--active":""," ").concat(c,"__button\n      ")},t)}),f=(a(20),function(e){var t=[{id:0,activity:e.activity,handler:e.handlerButtonStart,active:!1,blockName:"console"},{id:1,activity:"clear",handler:e.handlerClear,active:!1,blockName:"console"}].map((function(e){var t=e.id,a=e.activity,n=e.handler,c=e.active,i=e.blockName;return r.a.createElement(v,{key:t,activity:a,handler:n,active:c,blockName:i})}));return r.a.createElement("div",{className:"console"},t)}),b=(a(21),function(e){var t=e.timerValue,a=e.activity,n=e.handlerButtonStart,c=e.handlerClear,i=e.actualMeal;return r.a.createElement("div",{className:"timer"},r.a.createElement(d,{actualMeal:i}),r.a.createElement(s,{timerValue:t,handlerClear:c}),r.a.createElement(f,{activity:a,handlerButtonStart:n,handlerClear:c}))}),p=(a(22),function(e){var t=e.mealsArray,a=e.handlerMealButton,n=e.activeButtonId,c=t.map((function(e){var t=e.id,c=e.time,i=e.name;return r.a.createElement(v,{key:t,time:c,handler:function(){return a(c,t,i)},activity:i,active:n===t,blockName:"header"})}));return r.a.createElement("div",{className:"header"},c)}),h=(a(23),function(e){var t=e.activity,a=e.handlerButtonStart,n=e.timerValue,c=e.handlerClear,i=e.mealsArray,l=e.handlerMealButton,m=e.activeButtonId,u=e.actualMeal;return r.a.createElement("main",{className:"main"},r.a.createElement(p,{mealsArray:i,handlerMealButton:l,activeButtonId:m}),r.a.createElement(b,{activity:t,handlerButtonStart:a,handlerClear:c,timerValue:n,actualMeal:u}))}),E=a(7),y=a.n(E),g=function(e){e.timerValue;var t=e.intervalId,a=Object(n.useRef)();return Object(n.useEffect)((function(){a.current.play(),clearInterval(t)}),[t]),r.a.createElement("audio",{className:"audio-element",ref:a},r.a.createElement("source",{src:y.a}))},j=(a(24),function(e){var t=e.actualMeal,a=e.stopAudio,n=e.timerValue,c=e.intervalId;return r.a.createElement("div",{className:"alarm"},r.a.createElement("p",{className:"alarm__paragraph"},t," is ready!!!!"),r.a.createElement(g,{timerValue:n,intervalId:c}),r.a.createElement(v,{activity:"turn off alarm",handler:a,blockName:"alarm"}))}),O=(a(25),function(e){var t=e.addMeal,a=e.inputsArray,n=e.handlerInput,c=e.infoIsActive,i=a.map((function(e){var t=e.idValue,a=e.text,c=e.type,i=e.id,l=e.value;e.info;return r.a.createElement("div",{className:"form__item",key:i},r.a.createElement("label",{htmlFor:t,className:"label"},a),r.a.createElement("input",{type:c,id:t,value:l,onChange:function(e){return n(e,i)},className:"input"}))}));return r.a.createElement("form",{action:"",className:"form",onSubmit:t},r.a.createElement("div",{className:"form__inputs-wrapper"},r.a.createElement("div",{className:"form__inputs"},i),r.a.createElement(v,{blockName:"form",activity:"add meal"})),c&&r.a.createElement("div",{className:"form__info"},"meal name minimum 2 signs, time minimum 10 seconds"))}),N=function(){var e,t=Object(n.useState)([{id:0,name:"soft boiled eggs",time:18e3},{id:1,name:"medium boiled eggs",time:3e4},{id:2,name:"hard boiled eggs",time:48e3},{id:3,name:"Eggs Benedict",time:15e3},{id:4,name:"Viennese eggs",time:36e3},{id:5,name:"Fried eggs",time:21e3}]),a=Object(u.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)("start"),s=Object(u.a)(o,2),d=s[0],v=s[1],f=Object(n.useState)(c[0].time),b=Object(u.a)(f,2),p=b[0],E=b[1],y=Object(n.useState)(c[0].time),g=Object(u.a)(y,2),N=g[0],S=g[1],k=Object(n.useState)(0),M=Object(u.a)(k,2),_=M[0],B=M[1],I=Object(n.useState)(c[0].id),V=Object(u.a)(I,2),A=V[0],C=V[1],x=Object(n.useState)(c[0].name),w=Object(u.a)(x,2),F=w[0],J=w[1],D=Object(n.useState)([{id:0,text:"Meal name",idValue:"name",value:"",type:"text",info:"name minimum 2 signs!"},{id:1,text:"Time(in seconds)",idValue:"time",value:10,type:"number",info:" time more then 10 seconds!"}]),R=Object(u.a)(D,2),T=R[0],q=R[1],z=Object(n.useState)(c.length),G=Object(u.a)(z,2),H=G[0],K=G[1],L=Object(n.useState)(!1),P=Object(u.a)(L,2),Q=P[0],U=P[1],W=function(){v("start"),clearInterval(_)},X=function(){S(p),W()};return r.a.createElement("div",{className:"app"},r.a.createElement(O,{addMeal:function(e){if(e.preventDefault(),T[0].value.length>=2&&T[1].value>=10){var t=H;t++,i((function(e){return[].concat(Object(l.a)(e),[{id:H,name:T[0].value,time:100*T[1].value}])})),K(t);var a=T.map((function(e){return"text"===e.type?Object(m.a)(Object(m.a)({},e),{},{value:""}):Object(m.a)(Object(m.a)({},e),{},{value:10})}));q(a),U(!1)}else U(!0)},inputsArray:T,handlerInput:function(e,t){var a=e.target.value;U(!1);var n=T.map((function(e){return e.id===t?Object(m.a)(Object(m.a)({},e),{},{value:a}):e}));q(n)},infoIsActive:Q}),r.a.createElement(h,{activity:d,handlerButtonStart:"start"===d?function(){e=setInterval((function(){S((function(e){return e-1}))}),10),B(e),v("stop")}:W,handlerClear:X,timerValue:N,mealsArray:c,handlerMealButton:function(e,t,a){E(e),S(e),W(),C(t),J(a)},activeButtonId:A,actualMeal:F}),N<=0&&r.a.createElement(j,{actualMeal:F,stopAudio:X,timerValue:N,intervalId:_}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.44949102.chunk.js.map