const version = 25;
let isOnline = true; //will get updated via messaging
const staticCache = "pwaEx3StaticCache" + version;
const dynamicCache = `pwaEx3DynamicCache${version}`;
const cacheList = [
  "/",
  "/index.html",
  "/css/style.css",
  "/css/color.css",
  "/js/app.js",
  "/js/jquery.min.js", // Add the jquery.min.js file to be cached
  "/js/plugins.js",
  "/img/android-chrome-192x192.png",

  "/images/logo.png",
  "/images/logo.png",
  "/images/bg/10.jpg",
  "/images/bg/7.jpg",
  "/images/bg/8.jpg",
  "/images/bg/13.jpg",
  // Add other files to cache as needed
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(staticCache)
      .then((cache) => cache.addAll(cacheList))
      .catch((error) => {
        console.error("Failed to cache one or more resources:", error);
      })
  );
  self.skipWaiting(); // Activate the service worker immediately
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches
      .keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => {
              if (key === staticCache || key === dynamicCache) {
                return false;
              } else {
                return true;
              }
            })
            .map((key) => caches.delete(key))
        ); //keys.filter().map() returns an array of Promises
      })
      .catch(console.warn)
  );
  if (self.clients && self.clients.claim) {
    self.clients.claim(); // Take control of all existing clients immediately
  }
});

// Listen for the 'install' event to cache the assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => {
      return cache.addAll(cacheList);
    })
  );
});

// Intercept network requests and serve from cache if available
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response; // Serve from cache
      }
      return fetch(event.request); // Fall back to network fetch
    })
  );
});

self.addEventListener("message", (ev) => {
  console.log(ev.data);
  //message received from script
  if (ev.data.ONLINE) {
    isOnline = ev.data.ONLINE;
  }
});

function sendMessage(msg) {
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      //Respond to last focused tab
      clients[0].postMessage(msg);
    }
  });
  //See the code from the online video for the version that messages ALL Clients
}
