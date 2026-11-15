// キャッシュ版を上げると端末側の古いデータが入れ替わる。questions.js 等を更新したら数字を上げる。
const VERSION="v1";
const CACHE="yobi-tantou-"+VERSION;
const ASSETS=["./","./index.html","./questions.js","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-180.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// ネットワーク優先（更新がすぐ反映）、オフライン時はキャッシュ
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return r})
    .catch(()=>caches.match(e.request).then(m=>m||caches.match("./index.html"))));
});
