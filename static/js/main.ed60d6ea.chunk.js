(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{112:function(e,t,n){e.exports=n(203)},117:function(e,t,n){},119:function(e,t,n){},203:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(117),n(11)),i=n.n(l),s=n(23),u=n(18),d=(n(119),n(53)),m=(n(3),n(51)),p=n.n(m),h=n(111),v=function(e){var t=e.data,n=void 0===t?[]:t;if(Array.isArray(n)&&n.length>0)return{type:"FeatureCollection",features:n.map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.lat,n=e.long;return{type:"Feature",properties:Object(h.a)({},e),geometry:{type:"Point",coordinates:[n,t]}}}))}},f=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,r,c,o,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"USA",a="https://covid19.mathdro.id/api/countries/".concat(t),e.prev=2,e.next=5,p.a.get(a);case 5:n=e.sent,e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(2),console.log("Failed to fetch countries: ".concat(e.t0.message),e.t0),e.abrupt("return");case 12:return r=n.data,o={confirmed:(c=void 0===r?{}:r).confirmed.value,deaths:c.deaths.value,recovered:c.recovered.value},e.abrupt("return",o);case 15:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(s.a)(i.a.mark((function e(){var t,n,a,r,c,o=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:"confirmed",n=o.length>1&&void 0!==o[1]?o[1]:"USA",r="https://covid19.mathdro.id/api/countries/".concat(n,"/").concat(t),e.prev=3,e.next=6,p.a.get(r);case 6:a=e.sent,e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(3),console.log("Failed to fetch countries: ".concat(e.t0.message),e.t0),e.abrupt("return");case 13:return c=v(a),e.abrupt("return",c);case 15:case"end":return e.stop()}}),e,null,[[3,9]])})));return function(){return e.apply(this,arguments)}}(),b=n(206),y=n(207),w=b.a.Option,E=Object(d.c)({accessToken:"pk.eyJ1IjoiYmlrYXNoNjM3IiwiYSI6ImNrOHhvdWV2ZjE5c2gzZm1odWw4dTRnNW4ifQ.dciD6bok1ANU-Ht0Ingjwg"});var j=function(){var e=Object(a.useState)(null),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(null),l=Object(u.a)(o,2),m=l[0],p=l[1],h=Object(a.useState)({method:"confirmed",color:"yellow"}),v=Object(u.a)(h,2),j=v[0],O=v[1],k=Object(a.useState)(null),x=Object(u.a)(k,2),S=x[0],A=x[1],C=Object(a.useState)({center:[-102.845452,40.149178],zoom:["3.7"]}),N=Object(u.a)(C,2),I=N[0],W=N[1],D={"circle-radius":["round",["log2",["+",1,["number",["get",j.method],0]]]],"circle-color":j.color,"circle-opacity":.8,"circle-stroke-width":1,"circle-stroke-color":"#333"};function F(){return L.apply(this,arguments)}function L(){return(L=Object(s.a)(i.a.mark((function e(){var t,n=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.apply(void 0,n);case 2:(t=e.sent)&&p(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){return(U=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:t=e.sent,console.log("data",t),c(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){F(),function(){U.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(E,Object.assign({style:"mapbox://styles/bikash637/ck9066nwq12ak1ip5vng79u15",containerStyle:{height:"100vh",width:"100vw"}},I,{onZoomEnd:function(e){W({zoom:[e.getZoom()],center:[e.getCenter().lng,e.getCenter().lat]})}}),r.a.createElement(d.a,{data:m,circleLayout:{visibility:"visible"},circlePaint:D,circleOnClick:function(e){e.preventDefault();var t=e.features[0].properties.combinedKey,n=e.features[0].properties[j.method],a={lng:e.lngLat.lng,lat:e.lngLat.lat,region:t,count:n};A(a)},symbolLayout:{"text-field":"{place}","text-font":["Open Sans Semibold","Arial Unicode MS Bold"],"text-offset":[0,.6],"text-anchor":"top"},symbolPaint:{"text-color":"white"}}),S?r.a.createElement(d.b,{coordinates:[S.lng,S.lat],onClick:function(){A(null)}},r.a.createElement("div",null,r.a.createElement("h3",null,S.region),r.a.createElement("h4",null,S.count))):null),r.a.createElement(b.a,{defaultValue:"confirmed",className:"select-btn",style:{width:120},onChange:function(e){A(null);var t={};"active"===e?t={method:e,color:"orange"}:"deaths"===e?t={method:e,color:"red"}:"recovered"===e?(F(e),t={method:e,color:"green"}):t={method:e,color:"yellow"},O(t)}},r.a.createElement(w,{value:"confirmed"},"Total Cases"),r.a.createElement(w,{value:"active"},"Active Cases"),r.a.createElement(w,{value:"deaths"},"Deaths")),n?r.a.createElement("div",{className:"custom-tag"},r.a.createElement(y.a,{color:"gold"},r.a.createElement("p",null,"Confirmed"),n.confirmed),r.a.createElement(y.a,{color:"red"},r.a.createElement("p",null,"Deaths"),n.deaths),r.a.createElement(y.a,{color:"green"},r.a.createElement("p",null,"Recovered"),n.recovered)):null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.ed60d6ea.chunk.js.map