(this["webpackJsonpnye-pom"]=this["webpackJsonpnye-pom"]||[]).push([[0],{216:function(A,e,t){},217:function(A,e,t){},311:function(A,e,t){},422:function(A,e,t){"use strict";t.r(e);var n=t(9),c=t(0),r=t.n(c),s=t(34),a=t.n(s),d=(t(216),t(58)),i=t(431),B=(t(121),t(217),t(425)),Q=t(426),g=t(429),o=t(205),h=t(173),l=t.n(h),u=t.p+"static/media/Welcome.8641934a.png",E=new Date("2021-01-01T05:00:00.000Z"),j=function(){return E.getTime()-Date.now()<1728e6},I=function(A){var e=A.onNext;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsx)(Q.a,{xl:8,lg:12,xs:20,children:Object(n.jsx)(g.a,{src:u})})}),Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsx)(l.a,{title:"Event Countdown",value:E.toISOString(),format:"D [days] H [hours] m [minutes] s [seconds]"})}),Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsxs)(Q.a,{lg:6,sm:12,children:[Object(n.jsx)(o.a,{type:"primary",block:!0,size:"large",disabled:!j(),onClick:e,children:"Let's begin!"}),!j()&&Object(n.jsx)("small",{children:"Check back again soon!"})]})})]})},C=t(427),H=t(432),b=t(120),x=t(176),m=t(177),O=t(71),p=t(208),v=t(206),f=(t(311),t.p+"static/media/cover.76022cf0.png"),y=function(A){Object(p.a)(t,A);var e=Object(v.a)(t);function t(A){var n;return Object(x.a)(this,t),(n=e.call(this,A)).isDrawing=!1,n.lastPoint=null,n.touchStart=n.touchStart.bind(Object(O.a)(n)),n.touchMove=n.touchMove.bind(Object(O.a)(n)),n.touchEnd=n.touchEnd.bind(Object(O.a)(n)),n.state={showChildren:!1},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var A=this,e=this.canvas;e.width=e.parentElement.offsetWidth,e.height=e.parentElement.offsetHeight,e.addEventListener("mousedown",this.touchStart),e.addEventListener("touchstart",this.touchStart),e.addEventListener("mousemove",this.touchMove),e.addEventListener("touchmove",this.touchMove),e.addEventListener("mouseup",this.touchEnd),e.addEventListener("touchend",this.touchEnd),this.ctx=e.getContext("2d"),this.brush=new Image,this.brush.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAWCAQAAADgZ+3MAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5AwaFC40islf+wAAAuFJREFUOMvNlNFqXFUUhr+19z7nzCSZ6dgkUmurTdE2IBhFikIRIaAU7xRvfAbfw0fwGfTGaxEUBYuY0mKMtqRSaA1pTM2knUlmMnPO2fv3ItE2sXhRb1wL9sW/Nh+bzf8v+D+UOA2A+w8Ml7vnsKOYc3j80Zu4I1oDA6PBJLm3yvYADmDklGZmScgwBJlEjXOS9CjGEExwgpItK5X2Vd+mQUGOfMiVXtWmhYwgc95cgo5lqhDWxBOBnNz5CQqT7QkCHgc+B5JFiy6HuOY7oSjqOkY7nk7otJ1FDKjJcYvpFhBDbOsZHcNpTJOCGpHMAwRZqlvaNTVzLKsGyfMuJ2nS5muWCThLBNXAAvM8yxV+Zo1qyqbrOzJCkyl6rsqT7ZSIqmwyouYcHzLLVyzxO29xkU1tMEeLNdtSZM/9obsaoUXr8iafEmCe5RDb1ivKkSPQ5BRt3uN1RGE3dZL3KQgscp5ZbukTlpnUhmoMlYp8x8uEIVd9zFTaqMbatqALeocXOE7iKr/YmDn9xK88zRk6ZBRcIrGiEQL4AoDb+GApTw1KjSMhWaFjtJjBs8LndoWcaaZp0GaBU/xGD08XMWKL6qENglMc1yVyct6pusuP7k76nrO2yreYLjLHBUZ0OE+XbfqIjC7bxENuyhE10CQWYTL2yZjSZJ1sGKMu8QGzZMyQ06XHJjdZtx/cqspW7D3q9pIK7aNSlaLae9VuxPrWpcUrvME8IjJknRWWuG1LbnV6z8WPDkUkHDjcl4maPtwzX8VdpSy3oTapcGzwDWMe4HB2w3aotxEfPwaj/XZKQJL1Go3yeQoGrDDgS24wtBm9bdfcdRtRc/hj4O/46q/DIxrIxam0wIsM+Myum7cOZ1j3lxsPxqU7SNfhwP6DmxFs6FKTl5hlm2iFu+/KRNop7r1WX37s6glHhcgEqBGHA64hHE/hlHO/vdNXTf+J9tv+cw2H5ThaTD4p5mHl/zL7E8erTOqrjNJNAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTEyLTI2VDIwOjQ2OjA4KzAwOjAw9aQraQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0xMi0yNlQyMDo0NToyNiswMDowMH3UVPYAAAAASUVORK5CYII=",this.cover=new Image,this.cover.src=f,this.cover.onload=function(){return A.ctx.drawImage(A.cover,0,0,e.width,e.height)}}},{key:"componentWillUnmount",value:function(){var A=this.canvas;A&&(A.removeEventListener("mousedown",this.touchStart),A.removeEventListener("touchstart",this.touchStart),A.removeEventListener("mousemove",this.touchMove),A.removeEventListener("touchmove",this.touchMove),A.removeEventListener("mouseup",this.touchEnd),A.removeEventListener("touchend",this.touchEnd))}},{key:"getPosition",value:function(A){var e=this.canvas,t=0,n=0;if(void 0!==e.offsetParent)for(;e=e.offsetParent;)t+=e.offsetLeft,n+=e.offsetTop;return{x:(A.pageX||A.touches[0].clientX)-t,y:(A.pageY||A.touches[0].clientY)-n}}},{key:"touchStart",value:function(A){this.isDrawing=!0,this.lastPoint=this.getPosition(A),this.ctx.globalCompositeOperation="destination-out",this.setState(Object(b.a)(Object(b.a)({},this.state),{},{showChildren:!0}))}},{key:"touchMove",value:function(A){if(this.isDrawing){A.preventDefault();for(var e,t,n=this.ctx,c=this.lastPoint,r=this.getPosition(A),s=Math.sqrt(Math.pow(r.x-c.x,2)+Math.pow(r.y-c.y,2)),a=Math.atan2(r.x-c.x,r.y-c.y),d=this.brush.width/2,i=this.brush.height/2,B=0;B<s;B++)e=c.x+Math.sin(a)*B-d,t=c.y+Math.cos(a)*B-i,n.drawImage(this.brush,e,t);this.lastPoint=r}}},{key:"touchEnd",value:function(A){this.isDrawing=!1,this.filledInPixels>20&&this.props.reveal()}},{key:"render",value:function(){var A=this;return Object(n.jsxs)("div",{style:{position:"relative",width:"500px",height:"500px",marginLeft:"auto",marginRight:"auto"},children:[!this.props.isRevealed&&Object(n.jsx)("canvas",{style:{position:"absolute",zIndex:2,cursor:"pointer",borderRadius:"40px"},ref:function(e){return A.canvas=e}}),Object(n.jsx)("div",{className:"secret fill no-select flex justify-center items-center",children:this.state.showChildren&&this.props.children})]})}},{key:"filledInPixels",get:function(){for(var A=this.ctx.getImageData(0,0,500,500).data,e=A.length,t=e/32,n=0,c=n=0;c<e;c+=32)0===parseInt(A[c])&&n++;return Math.round(n/t*100)}}]),t}(r.a.PureComponent),w=t(60),D=t.n(w),R=function(){return Object(n.jsx)("div",{style:{width:"90%",height:"90%",display:"flex",justifyContent:"center",alignItems:"center",backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAACRZJREFUeJzt3L2OTGEcwOEzGxXXsQlrWYRIuBiNTudWtHq9hoJEI0SysoivhIiP7O4FWBp2lLLCFBxn4+d5uplz8r5nql/mP2fObPnI+fkAAPzTlvb7AgCAPyfoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABBwYOwFj59cHc6cOzX2sgCQ8eDu+vBk4+moa44e9NUTK8PFSxfGXhYAMj7tfB496EbuABAg6AAQIOgAECDoABAg6AAQMPpd7ovsfNwZXj5/NeWWALAvDq8sDwcPHfz5wfl89P0mDfqb12+HSxcuT7klAOyLq9euDEfXVn5+cDYbfT8jdwAIEHQACJh05D7/4TeDk6fXhlNn16a8BAD4K9bvbwwb64+/v7FgrD7+wH3ioM9++HAnTh/zmFgAEr5++bo36AtufBv/ljgjdwBIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIEHQACBB0AAgQdAAIODDlZru7u3te37x+a3j08MmUlwAAf8Xm++29b8xmvz55Ph99/0mDvrS0dyCwtbk9bG1u/+JsAPiHLYr2otj/JiN3AAgQdAAImHTkvrq2Mtx7dnvKLQHgv+AbOgAECDoABAg6AAQIOgAECDoABAg6AASM/re12zfuDC+evhx7WQDI+PBua/Q1Z8tHzo//QFkAYFJG7gAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAECDoABAg6AAQIOgAEPAN9wxTadOmWJ0AAAR/aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pgo8eDp4bXBtZXRhIHhtbG5zOng9J2Fkb2JlOm5zOm1ldGEvJz4KPHJkZjpSREYgeG1sbnM6cmRmPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjJz4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOkF0dHJpYj0naHR0cDovL25zLmF0dHJpYnV0aW9uLmNvbS9hZHMvMS4wLyc+CiAgPEF0dHJpYjpBZHM+CiAgIDxyZGY6U2VxPgogICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSdSZXNvdXJjZSc+CiAgICAgPEF0dHJpYjpDcmVhdGVkPjIwMjAtMTItMjY8L0F0dHJpYjpDcmVhdGVkPgogICAgIDxBdHRyaWI6RXh0SWQ+ZmIwYjQzZGMtYThmOS00ZDUxLWExNjYtNTJmZGU1ZWMwYzYwPC9BdHRyaWI6RXh0SWQ+CiAgICAgPEF0dHJpYjpGYklkPjUyNTI2NTkxNDE3OTU4MDwvQXR0cmliOkZiSWQ+CiAgICAgPEF0dHJpYjpUb3VjaFR5cGU+MjwvQXR0cmliOlRvdWNoVHlwZT4KICAgIDwvcmRmOmxpPgogICA8L3JkZjpTZXE+CiAgPC9BdHRyaWI6QWRzPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpkYz0naHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8nPgogIDxkYzp0aXRsZT4KICAgPHJkZjpBbHQ+CiAgICA8cmRmOmxpIHhtbDpsYW5nPSd4LWRlZmF1bHQnPk5ZRSBPbmxpbmUgUE9NIGFzc2V0czwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5HUCBTYW4gRGllZ28gUHVicyBUZWFtPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+NlSDGwAAAABJRU5ErkJggg==",")"),backgroundSize:"contain"},children:Object(n.jsxs)("div",{children:[Object(n.jsx)(C.a,{}),Object(n.jsxs)(H.b,{direction:"vertical",align:"center",style:{fontSize:"large"},children:[Object(n.jsx)(D.a,{children:"Therefore,"}),Object(n.jsx)(D.a,{children:"preparing your minds for action,"}),Object(n.jsx)(D.a,{children:"and being sober-minded,"}),Object(n.jsxs)(D.a,{children:["set your ",Object(n.jsx)("strong",{children:"hope"})," fully on the grace"]}),Object(n.jsx)(D.a,{children:"that will be brought to you"}),Object(n.jsx)(D.a,{children:"at the revelation of Jesus Christ."})]}),Object(n.jsx)(C.a,{children:"1 PETER 1:13"}),Object(n.jsx)("br",{})]})})};var k=function(A){var e=A.onNext,t=Object(c.useState)(!1),r=Object(d.a)(t,2),s=r[0],a=r[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsx)(y,{reveal:function(){return a(!0)},isRevealed:s,children:Object(n.jsx)(R,{})})}),s&&Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsx)(Q.a,{lg:4,xs:8,children:Object(n.jsx)(o.a,{type:"primary",block:!0,size:"large",onClick:e,children:"Next"})})})]})},P=t(428),Z=t(430),M=t(94),Y=t.n(M),J=t(95),L=t.n(J),G=t(78),S=t.n(G),W=t(118),N=t(180),z=t.n(N),T=t(181),X=t.p+"static/media/POM_Template.94ccc27f.pdf",F=function(){var A=Object(W.a)(S.a.mark((function A(e){var t,n,c;return S.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:if(t=document.querySelector(e)){A.next=4;break}throw alert("no element found for image conversion!"),new Error("No element found");case 4:return A.next=6,z.a.toPng(t,{quality:100});case 6:return n=A.sent,A.next=9,fetch(n).then((function(A){return A.arrayBuffer()}));case 9:return c=A.sent,A.abrupt("return",c);case 11:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}(),U=function(A,e){var t=new Blob([e],{type:"application/pdf"}),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.click()},V=function(){var A=Object(W.a)(S.a.mark((function A(e,t){var n,c,r,s,a;return S.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,fetch(X).then((function(A){return A.arrayBuffer()}));case 2:return n=A.sent,A.next=5,T.PDFDocument.load(n);case 5:return c=A.sent,A.next=8,F(e);case 8:return r=A.sent,A.next=11,c.embedPng(r);case 11:return s=A.sent,c.addPage([s.width,s.height]).drawImage(s,{x:0,y:0,width:s.width,height:s.height}),A.next=16,c.save();case 16:a=A.sent,U(0,a);case 18:case"end":return A.stop()}}),A)})));return function(e,t){return A.apply(this,arguments)}}(),K="What's Romans 3:23?",q="What's Romans 8:28?",_="What's Romans 12:21?",$=function(A){var e=A.className,t=void 0===e?"sharings":e,c=A.children;return Object(n.jsx)("div",{className:t,style:{border:"solid 15px #252A3B",padding:"15px",backgroundColor:"#EDFEF7"},children:Object(n.jsx)("div",{style:{border:"5px double #252A3B",padding:"20px",backgroundColor:"#EDFEF7"},children:c})})},AA=function(){var A=Object(c.useState)(!1),e=Object(d.a)(A,2),t=e[0],r=e[1],s=Object(c.useState)({s1:"",s2:"",s3:""}),a=Object(d.a)(s,2),i=a[0],g=a[1],h=function(A){g(A),r(!0)},l=function(){return Object(n.jsxs)(P.a,{labelCol:{span:12},wrapperCol:{span:24},layout:"vertical",initialValues:i,onFinish:h,children:[Object(n.jsx)(P.a.Item,{label:K,name:"s1",children:Object(n.jsx)(Z.a.TextArea,{size:"large",rows:6})}),Object(n.jsx)(P.a.Item,{label:q,name:"s2",children:Object(n.jsx)(Z.a.TextArea,{size:"large",rows:6})}),Object(n.jsx)(P.a.Item,{label:_,name:"s3",children:Object(n.jsx)(Z.a.TextArea,{size:"large",rows:6})}),Object(n.jsx)(P.a.Item,{name:"finish",children:Object(n.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Finish"})})]})},u=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsxs)($,{className:"sharings",children:[Object(n.jsx)(Y.a,{level:4,children:K}),Object(n.jsx)(L.a,{children:i.s1}),Object(n.jsx)(Y.a,{level:4,children:q}),Object(n.jsx)(L.a,{children:i.s2}),Object(n.jsx)(Y.a,{level:4,children:_}),Object(n.jsx)(L.a,{children:i.s3})]})}),Object(n.jsxs)(B.a,{justify:"space-around",gutter:[32,32],children:[Object(n.jsx)(Q.a,{xs:8,md:6,xl:4,children:Object(n.jsx)(o.a,{block:!0,onClick:function(){return r(!1)},children:"Edit"})}),Object(n.jsx)(Q.a,{xs:8,md:6,xl:4,children:Object(n.jsx)(o.a,{block:!0,type:"primary",onClick:function(){return V(".sharings","wowo.pdf")},children:"Download"})})]})]})};return Object(n.jsx)(B.a,{justify:"center",gutter:[32,32],children:Object(n.jsx)(Q.a,{lg:12,md:16,xs:24,children:t?Object(n.jsx)(u,{}):Object(n.jsx)(l,{})})})},eA=i.a.Header,tA=i.a.Content,nA=function(){var A=Object(c.useState)(0),e=Object(d.a)(A,2),t=e[0],r=e[1];switch(t){case 0:return Object(n.jsx)(I,{onNext:function(){return r(t+1)}});case 1:return Object(n.jsx)(k,{onNext:function(){return r(t+1)}});case 2:return Object(n.jsx)(AA,{});default:return Object(n.jsx)("div",{children:"Wrong place bro"})}};var cA=function(){return Object(n.jsxs)(i.a,{className:"layout",style:{minHeight:"100VH",width:"100VW"},children:[Object(n.jsx)(eA,{style:{display:"flex",justifyContent:"center"},children:Object(n.jsx)("h1",{style:{color:"#D9D9D9"},children:"Welcome to New Year's Eve Service!"})}),Object(n.jsx)(tA,{style:{padding:"50px"},children:Object(n.jsx)(nA,{})})]})};a.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(cA,{})}),document.getElementById("root"))}},[[422,1,2]]]);
//# sourceMappingURL=main.24ebb51f.chunk.js.map