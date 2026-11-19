// 更新したら VERSION の数字を上げる（端末の古いキャッシュが入れ替わる）
const VERSION="v7";
const CACHE="yobi-tantou-"+VERSION;
const ASSETS=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-180.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>Promise.allSettled(ASSETS.map(a=>c.add(a)))))});
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET"||new URL(e.request.url).origin!==location.origin)return;
  e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp))}return r})
    .catch(()=>caches.match(e.request).then(m=>m||(e.request.mode==="navigate"?caches.match("./index.html"):Response.error()))));
});
