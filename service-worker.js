(()=>{let e=[],a="";async function c(){let c=e.map(e=>e.replace(/^\//,""));console.log("install: caching manifest",c);let n=await caches.open(a);await n.addAll(c)}async function n(){console.log("activate: clearing old cache keys");let e=await caches.keys();await Promise.all(e.map(e=>{e!==a?(console.log("activate: clearing key",e),caches.delete(e)):console.log("activate: keeping key",e)}))}async function t(e){let a=await caches.match(e.request,{ignoreSearch:!0});return(console.log("fetch: url",e.request.url,"hit",null!=a),void 0!==a)?a:await fetch(e.request)}console.log("service-worker:",{manifest:e=["index.html","apple-touch-icon.3d779e23.png","favicon-32x32.52fc8606.png","favicon-16x16.6f6ea6b1.png","manifest.webmanifest","android-chrome-192x192.00f95b7f.png","android-chrome-512x512.ad51f5e3.png","index.aeee5389.css","index.96ed1a5a.css","index.fe0c807d.js"],version:a="ff918abc",href:location.href}),addEventListener("install",e=>e.waitUntil(c())),addEventListener("activate",e=>e.waitUntil(n())),self.addEventListener("fetch",e=>e.respondWith(t(e)))})();
//# sourceMappingURL=service-worker.js.map
