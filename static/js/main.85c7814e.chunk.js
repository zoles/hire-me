(this["webpackJsonpdemo-app"]=this["webpackJsonpdemo-app"]||[]).push([[0],{42:function(e,t,c){e.exports={main:"Layout_main__auk_r"}},47:function(e,t,c){},48:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(34),r=c.n(a),d=(c(47),c(75)),s=(c(48),c(36)),l=c(77),o=c(23),h=c(9),j=c(35),u=c(19),b=c.n(u),p=function e(){Object(j.a)(this,e),this.getChildren=function(){return b.a.get("https://app.famly.co/api/daycare/tablet/group",{params:{accessToken:"9ee38c45-a7ce-4b61-94ad-188bcd66de8b",groupId:"86413ecf-01a1-44da-ba73-1aeda212a196",institutionId:"dc4bd858-9e9c-4df7-9386-0d91e42280eb"}})},this.checkInChildApi=function(e,t){return b.a.post("https://app.famly.co/api/v2/children/".concat(e,"/checkins"),{accessToken:"9ee38c45-a7ce-4b61-94ad-188bcd66de8b",pickupTime:t})},this.checkOutChildApi=function(e){return b.a.post("https://app.famly.co/api/v2/children/".concat(e,"/checkout"),{accessToken:"9ee38c45-a7ce-4b61-94ad-188bcd66de8b"})}},m=c(2),f=i.a.createContext({items:[],loadedItems:[],totalItems:0,currentPage:1,pageCount:1,toggleCheckin:function(e,t){},pageChange:function(e,t){}}),O=function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),i=c[0],a=c[1],r=Object(n.useState)([]),d=Object(h.a)(r,2),s=d[0],l=d[1],j=Object(n.useState)(0),u=Object(h.a)(j,2),b=u[0],O=u[1],g=Object(n.useState)(1),x=Object(h.a)(g,2),k=x[0],C=x[1],I=Object(n.useState)(1),v=Object(h.a)(I,2),T=v[0],y=v[1],P=Object(n.useState)(10),S=Object(h.a)(P,1)[0];Object(n.useEffect)((function(){(new p).getChildren().then((function(e){a(e.data.children),O(e.data.children.length),C(Math.ceil(e.data.children.length/S))}))}),[S]),Object(n.useEffect)((function(){var e=i.slice((T-1)*S,T*S);l(e)}),[i,T,S]);var w={items:i,loadedItems:s,totalItems:b,currentPage:T,pageCount:k,toggleCheckin:function(e,t){t?(new p).checkInChildApi(e.childId,t).then((function(t){var c=i.findIndex((function(t){return t.childId===e.childId})),n=Object(o.a)(i);n[c].checkedIn=!0,n[c].checkinTime=t.data.checkinTime,n[c].pickupTime=t.data.pickupTime,a(n)})):(new p).checkOutChildApi(e.childId).then((function(t){var c=i.findIndex((function(t){return t.childId===e.childId})),n=Object(o.a)(i);n[c].checkedIn=!1,a(n)}))},pageChange:function(e,t){e.preventDefault(),y(t)}};return Object(m.jsx)(f.Provider,{value:w,children:e.children})},g=c(71),x=c(72),k=c(76),C=c(73),I=function(e){var t,c,i=Object(n.useContext)(f),a=Object(n.useRef)(null);return Object(m.jsxs)(s.a,{display:"grid",gridTemplateColumns:"50px 1fr 1fr 1fr",gridGap:3,children:[Object(m.jsx)(s.a,{p:2,children:Object(m.jsx)(g.a,{src:e.item.image.small,size:50})}),Object(m.jsx)(s.a,{p:3,children:e.item.name.fullName}),Object(m.jsx)(s.a,{p:3,children:(t=e.item.pickupTime,c=e.item.checkedIn,t&&c?new Date(e.item.pickupTime).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",timeZone:"UTC"}):"")}),Object(m.jsx)(s.a,{p:3,children:e.item.checkedIn?Object(m.jsx)(x.a,{onClick:function(){i.toggleCheckin(e.item)},children:"Checkout"}):Object(m.jsxs)("div",{children:[Object(m.jsx)(k.a,{"aria-label":"PickupTime",name:"pickupTime",variant:"small",placeholder:"Pickup time",ref:a,sx:{mr:2}}),Object(m.jsx)(C.a,{onClick:function(){var t=a.current.value;0!==t.trim().length&&i.toggleCheckin(e.item,t)},children:"Checkin"})]})})]})},v=function(){var e=Object(n.useContext)(f);return Object(m.jsxs)("div",{children:[Object(m.jsxs)(s.a,{display:"flex",children:[Object(m.jsx)(s.a,{flexGrow:1,children:Object(m.jsx)("h1",{children:"\ud83d\udc7c Checkin and checkout management"})}),Object(m.jsx)(s.a,{sx:{verticalAlign:"middle"},children:Object(m.jsxs)("p",{children:[e.totalItems," children",Object(m.jsx)("br",{}),e.currentPage," / ",e.pageCount," pages"]})})]}),Object(m.jsxs)(s.a,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderRadius:2,bg:"canvas.subtle",color:"fg.muted",children:[Object(m.jsxs)(s.a,{display:"grid",gridTemplateColumns:"50px 1fr 1fr 1fr",gridGap:3,borderBottomColor:"border.default",borderBottomStyle:"solid",borderBottomWidth:1,fontWeight:"600",children:[Object(m.jsx)(s.a,{p:2}),Object(m.jsx)(s.a,{p:3,children:"Name"}),Object(m.jsx)(s.a,{p:3,children:"Pickup time"}),Object(m.jsx)(s.a,{p:3,children:"Action"})]}),e.loadedItems.map((function(e){return Object(m.jsx)(I,{item:e},e.childId)}))]}),e.pageCount>0&&Object(m.jsx)(l.a,{pageCount:e.pageCount,currentPage:e.currentPage,onPageChange:e.pageChange})]})},T=c(42),y=c.n(T),P=c(74),S=function(){return Object(m.jsxs)(P.a,{children:[Object(m.jsxs)(P.a.Item,{children:[Object(m.jsx)(g.a,{src:"https://assets.website-files.com/5f64c1a06bfbf4ea417a71af/5faab8e4497c0827cffce4c2_Circle-White_Red-400x400.png",size:32,mr:2}),Object(m.jsx)("strong",{children:"Frontend Demo"})]}),Object(m.jsx)(P.a.Item,{full:!0}),Object(m.jsx)(P.a.Item,{children:Object(m.jsx)(P.a.Link,{href:"https://github.com/zoles/hire-me",children:Object(m.jsx)(g.a,{src:"https://github.com/github.png",size:32,alt:"zoles github"})})})]})},w=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)(S,{}),Object(m.jsx)("main",{className:y.a.main,children:e.children})]})};var A=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{children:Object(m.jsx)(d.a,{children:Object(m.jsx)(w,{children:Object(m.jsx)(v,{})})})})})};r.a.render(Object(m.jsx)(A,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.85c7814e.chunk.js.map