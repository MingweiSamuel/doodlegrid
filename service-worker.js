(()=>{let e=[],a="";e=["index.html","apple-touch-icon.3d779e23.png","favicon-32x32.52fc8606.png","favicon-16x16.6f6ea6b1.png","manifest.webmanifest","android-chrome-192x192.00f95b7f.png","android-chrome-512x512.ad51f5e3.png","index.aeee5389.css","index.f66464dd.css","index.b487acda.js"],a="22c79495";let t=location.pathname.startsWith("/doodlegrid/")?"/doodlegrid/":"/",n=RegExp(`${t}(\\d+)$`),c=[t,...e.map(e=>e.replace(/^\//,t))];async function i(){let e=await caches.open(a);await e.addAll(c)}async function l(){let e=await caches.keys();await Promise.all(e.map(async e=>{e!==a?(console.log("activate: clearing key",e),await caches.delete(e)):console.log("activate: keeping key",e)}))}async function o(e){let a=e.url;n.test(a)&&(a=t);let c=await caches.match(a,{ignoreSearch:!0});return(console.log("fetch: url",e.url,"hit",null!=c),null!=c)?c:await fetch(e)}console.log("service-worker:",{manifestRelative:c,version:a}),addEventListener("install",e=>{console.log("install"),e.waitUntil(i())}),addEventListener("activate",e=>{console.log("activate"),e.waitUntil(l())}),addEventListener("fetch",e=>e.respondWith(o(e.request))),addEventListener("periodicsync",e=>{console.log("periodicsync:",e.tag),e.waitUntil(i())})})();
//# sourceMappingURL=service-worker.js.map
