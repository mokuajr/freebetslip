/** An empty service worker! */
// self.addEventListener('fetch', function(event) {
// });
var CACHE_NAME = "pwa-cache-grocery-customer-app-test";

var filesToCache = ["/"];
window.addEventListener("install", function (e) {
  console.log("[ServiceWorker] Install");
  console.log("CACHE_NAME >>>>> from pwa", CACHE_NAME);

  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("[ServiceWorker] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});
window.addEventListener("activate", function (e) {
  console.log("[ServiceWorker] Activate");
  console.log("CACHE_NAME >>>>> from pwa", CACHE_NAME);

  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache", key);
            return caches.delete(key);
          }
          return true;
        })
      );
    })
  );
  // /*
  return window.clients.claim();
});
window.addEventListener("fetch", function (e) {
  console.log("[ServiceWorker] Fetch", e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
