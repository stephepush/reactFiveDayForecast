(this["webpackJsonpfive-day-forecast"]=this["webpackJsonpfive-day-forecast"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(11),i=n.n(r),o=(n(30),n(31),n(17)),s=n.n(o),j=n(19),l=n(13),d=n(9),b=n(2);function u(e){var t=new Date(1e3*e.dateTime),n=new Intl.DateTimeFormat("en-US",{weekday:"long",month:"numeric",day:"numeric"}).format(t);return Object(b.jsxs)(d.a,{children:[Object(b.jsx)(d.a.Body,{children:Object(b.jsx)(d.a.Title,{children:Object(b.jsx)("h2",{children:n})})}),Object(b.jsx)(d.a.Img,{src:"http://openweathermap.org/img/wn/".concat(e.weatherGraphic,"@2x.png"),alt:e.graphicAltText,style:{width:"110px"}}),Object(b.jsx)(d.a.Body,{children:Object(b.jsx)("h3",{children:e.condition})}),Object(b.jsxs)(d.a.Body,{children:["High: ",e.highTemp," ",Object(b.jsx)("br",{})," Low: ",e.lowTemp]})]},e.unique)}var h=n(40),x=n(41),O=n(20),p=n(42),m=n(43);function f(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),i=Object(l.a)(r,2),o=i[0],d=i[1],f=Object(c.useState)(null),g=Object(l.a)(f,2),v=g[0],y=g[1],w=Object(c.useState)(null),T=Object(l.a)(w,2),k=T[0],S=T[1],F="9371287a98cd312dba80a1bfe6d8661c";return Object(c.useEffect)((function(){navigator.geolocation?(y("Locating..."),navigator.geolocation.getCurrentPosition((function(e){y("Position loaded"),a(e.coords.latitude),d(e.coords.longitude)}),(function(){y("Unable to retrieve your location")}))):y("Geolocation is not supported by your browser")}),[]),Object(c.useEffect)((function(){(function(){var e=Object(j.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t="http://api.openweathermap.org/data/2.5/forecast/daily?lat=".concat(n,"&lon=").concat(o,"&cnt=",5,"&appid=").concat(F,"&units=imperial"),!n||!o){e.next=4;break}return e.next=4,fetch(t).then((function(e){return e.json()})).then((function(e){S(e),console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[n,o,F]),console.log(v),console.log(k),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(h.a,{fluid:!0,children:[Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(O.a,{xl:2}),null!=k?Object(b.jsx)(O.a,{xl:6,children:Object(b.jsxs)("h1",{children:["Five Day Forecast for ",null===k||void 0===k?void 0:k.city.name,", ",null===k||void 0===k?void 0:k.city.country,":"]})}):Object(b.jsxs)("div",{children:[Object(b.jsx)(p.a,{xl:6,animation:"border",role:"status",children:Object(b.jsx)("span",{className:"sr-only",children:"Loading..."})}),Object(b.jsx)("p",{children:v})]}),Object(b.jsx)(O.a,{xl:2})]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)(x.a,{children:[Object(b.jsx)(O.a,{}),Object(b.jsx)(O.a,{xl:8,children:Object(b.jsx)(m.a,{children:null===k||void 0===k?void 0:k.list.map((function(e,t){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{dateTime:e.dt,highTemp:Math.round(e.temp.max),lowTemp:Math.round(e.temp.min),weatherGraphic:e.weather[0].icon,graphicAltText:e.weather[0].description,condition:e.weather[0].main,unique:"".concat(.24*e.dt,"-").concat(t)}),Object(b.jsx)("br",{})]})}))})}),Object(b.jsx)(O.a,{})]})]})})}var g=n(44),v=n(45),y=n(23),w=n(46),T=n.p+"static/media/logo.0a719f1f.svg";function k(){return Object(b.jsxs)(g.a,{bg:"dark",variant:"dark",className:"justify-content-between",children:[Object(b.jsxs)(g.a.Brand,{href:"#home",children:[Object(b.jsx)("img",{alt:"",src:T,width:"30",height:"30",className:"d-inline-block align-top"})," ","Five Day Forecaster by Stephen Peters"]}),Object(b.jsxs)(v.a,{inline:!0,children:[Object(b.jsx)(y.a,{type:"text",placeholder:"Enter Zip Code",className:" mr-sm-2"}),Object(b.jsx)(w.a,{type:"submit",children:"Submit"})]})]})}n(37);var S=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(k,{}),Object(b.jsx)(f,{})]})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.8584c807.chunk.js.map