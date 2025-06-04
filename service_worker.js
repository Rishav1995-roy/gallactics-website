const CACHE_NAME = "v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/style/main.css",
  "/script/main.js"
];

self.addEventListener("install", (event) => {
  console.log("🛠️ Installing Service Worker...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("📦 Caching app shell");
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
