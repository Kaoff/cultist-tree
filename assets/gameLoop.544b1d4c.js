import{_ as d,s as u,p as e,a as f,l as T,D as a,b as m,g as p}from"./index.73eda32b.js";import"./vue.be2aa379.js";import{b2 as c}from"./@vue.6f8187b0.js";/* empty css                    */import"./lz-string.bfbf8ec3.js";import"./nanoevents.1080beb7.js";import"./vue-next-select.ebb2249d.js";import"./vuedraggable.8806fa92.js";import"./sortablejs.1e749e8e.js";import"./vue-textarea-autosize.35804eaf.js";import"./vue-toastification.1c69cd37.js";let n=null,l=null;function o(){const t=Date.now();let i=(t-e.time)/1e3;e.time=t;const r=i;if(f.lastTenTicks.push(r),f.lastTenTicks.length>10&&(f.lastTenTicks=f.lastTenTicks.slice(1)),!((l==null?void 0:l.value)&&!e.keepGoing)&&!f.hasNaN&&(i=Math.max(i,0),e.devSpeed!==0)){if(T.value=!1,e.offlineTime!=null){if(a.gt(e.offlineTime,m.offlineLimit*3600)&&(e.offlineTime=m.offlineLimit*3600),a.gt(e.offlineTime,0)&&e.devSpeed!==0){const s=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-s,i+=s}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||a.lt(e.offlineTime,0))&&(e.offlineTime=null)}i=Math.min(i,m.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),!a.eq(i,0)&&(e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308),p.emit("update",i,r),u.unthrottled?(requestAnimationFrame(o),n!=null&&(clearInterval(n),n=null)):n==null&&(n=setInterval(o,50)))}}async function L(){l=(await d(()=>import("./index.73eda32b.js").then(function(t){return t.c}),["assets/index.73eda32b.js","assets/index.0082bab1.css","assets/@fontsource.f66d05e7.css","assets/vue.be2aa379.js","assets/lz-string.bfbf8ec3.js","assets/@vue.6f8187b0.js","assets/nanoevents.1080beb7.js","assets/vue-next-select.ebb2249d.js","assets/vue-next-select.9e6f4164.css","assets/vuedraggable.8806fa92.js","assets/sortablejs.1e749e8e.js","assets/vue-textarea-autosize.35804eaf.js","assets/vue-toastification.1c69cd37.js","assets/vue-toastification.4b5f8ac8.css"])).hasWon,c(l,t=>{t&&p.emit("gameWon")}),u.unthrottled?requestAnimationFrame(o):n=setInterval(o,50)}export{L as startGameLoop};
