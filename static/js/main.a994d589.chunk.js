(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{112:function(e,t,n){e.exports=n(203)},117:function(e,t,n){},119:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),i=(n(117),n(7)),l=n.n(i),u=n(14),s=n(16),d=(n(119),n(53)),p=(n(3),n(38)),m=n.n(p),h=n(111),f=function(e){var t=e.data,n=void 0===t?[]:t;if(Array.isArray(n)&&n.length>0)return{type:"FeatureCollection",features:n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lat,n=e.long;return{type:"Feature",properties:Object(h.a)({},e),geometry:{type:"Point",coordinates:[n,t]}}}))}},v=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://covid19.mathdro.id/api/countries/",e.prev=1,e.next=4,m.a.get("https://covid19.mathdro.id/api/countries/");case 4:t=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),console.log("Failed to fetch countries: ".concat(e.t0.message),e.t0),e.abrupt("return");case 11:return n=t.data,a=void 0===n?{}:n,e.abrupt("return",a);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,c,o,i=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>0&&void 0!==i[0]?i[0]:"USA",a="https://covid19.mathdro.id/api/countries/".concat(t),e.prev=2,e.next=5,m.a.get(a);case 5:n=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log("Failed to fetch countries: ".concat(e.t0.message),e.t0),e.abrupt("return");case 12:return r=n.data,o={confirmed:(c=void 0===r?{}:r).confirmed.value,deaths:c.deaths.value,recovered:c.recovered.value},e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r,c,o=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"USA",n=o.length>1&&void 0!==o[1]?o[1]:"confirmed",r="https://covid19.mathdro.id/api/countries/".concat(t,"/").concat(n),e.prev=3,e.next=6,m.a.get(r);case 6:a=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),console.log("Failed to fetch countries: ".concat(e.t0.message),e.t0),e.abrupt("return");case 13:return c=f(a),e.abrupt("return",c);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),w=n(206),y=n(207),E=w.a.Option,O=Object(d.c)({accessToken:"pk.eyJ1IjoiYmlrYXNoNjM3IiwiYSI6ImNrOHhvdWV2ZjE5c2gzZm1odWw4dTRnNW4ifQ.dciD6bok1ANU-Ht0Ingjwg"});var j=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),i=Object(s.a)(o,2),p=i[0],m=i[1],h=Object(a.useState)(null),f=Object(s.a)(h,2),j=f[0],k=f[1],x=Object(a.useState)({method:"confirmed",color:"yellow"}),S=Object(s.a)(x,2),C=S[0],A=S[1],N=Object(a.useState)(null),U=Object(s.a)(N,2),F=U[0],I=U[1],L=Object(a.useState)({center:[-102.845452,40.149178],zoom:["3.7"]}),z=Object(s.a)(L,2),W=z[0],D=z[1],P={"circle-radius":["round",["log2",["+",1,["number",["get",C.method],0]]]],"circle-color":C.color,"circle-opacity":.8,"circle-stroke-width":1,"circle-stroke-color":"#333"};function Z(){return(Z=Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(t=e.sent)&&(n=t.countries,m(void 0===n?[]:n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){return J.apply(this,arguments)}function J(){return(J=Object(u.a)(l.a.mark((function e(){var t,n,a=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(t=a.length<=0?void 0:a[0]),e.next=4,b.apply(void 0,a);case 4:(n=e.sent)&&(n.features.length>0&&"US"!==t?D({zoom:["4"],center:n.features[0].geometry.coordinates}):D({center:[-102.845452,40.149178],zoom:["3.7"]}),k(n));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return T.apply(this,arguments)}function T(){return(T=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(t);case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){Z.apply(this,arguments)}(),B("US")}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(O,Object.assign({style:"mapbox://styles/bikash637/ck9066nwq12ak1ip5vng79u15",containerStyle:{height:"100vh",width:"100vw"}},W,{onZoomEnd:function(e){D({zoom:[e.getZoom()],center:[e.getCenter().lng,e.getCenter().lat]})}}),r.a.createElement(d.a,{data:j,circleLayout:{visibility:"visible"},circlePaint:P,circleOnClick:function(e){e.preventDefault();var t=e.features[0].properties.combinedKey,n=e.features[0].properties[C.method],a={lng:e.lngLat.lng,lat:e.lngLat.lat,region:t,count:n};I(a)},symbolLayout:{"text-field":"{place}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"},symbolPaint:{"text-color":"white"}}),F?r.a.createElement(d.b,{coordinates:[F.lng,F.lat],onClick:function(){I(null)}},r.a.createElement("div",null,r.a.createElement("h3",null,F.region),r.a.createElement("h4",null,C.method.toUpperCase(),": ",F.count))):null),r.a.createElement("div",{className:"select-btn"},r.a.createElement(w.a,{showSearch:!0,optionFilterProp:"children",filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},defaultValue:"US",style:{width:140},onChange:function(e){B(e)}},p&&p.length>0?p.map((function(e){return r.a.createElement(E,{key:e.name,value:e.name},e.name)})):null),r.a.createElement(w.a,{defaultValue:"confirmed",style:{width:120},onChange:function(e){I(null);var t={};"active"===e?t={method:e,color:"orange"}:"deaths"===e?t={method:e,color:"red"}:"recovered"===e?(B(e),t={method:e,color:"green"}):t={method:e,color:"yellow"},A(t)}},r.a.createElement(E,{value:"confirmed"},"Total Cases"),r.a.createElement(E,{value:"active"},"Active Cases"),r.a.createElement(E,{value:"deaths"},"Deaths"))),n?r.a.createElement("div",{className:"custom-tag"},r.a.createElement(y.a,{color:"gold"},r.a.createElement("p",null,"Confirmed"),n.confirmed),r.a.createElement(y.a,{color:"red"},r.a.createElement("p",null,"Deaths"),n.deaths),r.a.createElement(y.a,{color:"green"},r.a.createElement("p",null,"Recovered"),n.recovered)):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.a994d589.chunk.js.map