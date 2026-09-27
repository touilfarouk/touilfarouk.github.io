const version = 26;
const cachePrefix = 'pwaEx3';
const staticCache = `${cachePrefix}StaticCache${version}`;
const dynamicCache = `${cachePrefix}DynamicCache${version}`;
const cacheList = [
  '/',
  '/index.html',
  '/404.html',
  '/css/style.css',
  '/css/plugins.css',
  '/css/color.css',
  '/js/app.js',
  '/js/jquery.min.js',
  '/js/plugins.js',
  '/js/scripts.js',
  '/manifest.json',
  '/img/android-chrome-192x192.png',
  '/img/android-chrome-512x512.png',
  '/img/apple-touch-icon.png',
  '/img/favicon-16x16.png',
  '/img/favicon-32x32.png',
  '/img/mstile-150x150.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCache).then((cache) => cache.addAll(cacheList))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(cachePrefix) && key !== staticCache && key !== dynamicCache)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Leave cross-origin requests, non-GET requests, and browser-managed schemes alone.
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request).then((response) => {
        if (!response.ok) {
          if (request.mode === 'navigate' && response.status === 404) {
            return caches.match('/404.html').then((notFoundPage) => notFoundPage || response);
          }
          return response;
        }

        const responseToCache = response.clone();
        return caches.open(dynamicCache).then((cache) => {
          cache.put(request, responseToCache);
          return response;
        });
      }).catch(() => {
        if (request.mode === 'navigate') {
          return caches.match('/404.html');
        }
        return Response.error();
      });
    })
  );
});
