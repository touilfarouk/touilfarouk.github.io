const version = 27;
let isOnline = true; //will get updated via messaging
const staticCache = `pwaEx3StaticCache${version}`;
const dynamicCache = `pwaEx3DynamicCache${version}`;
const cacheList = [
  '/',
  '/index.html',
  '/other.html',
  '/404.html',
  '/css/main.css',
  '/js/app.js',
  '/manifest.json',
  '/img/offline-1.png',
  '/favicon.ico',
  '/img/android-chrome-192x192.png',
  '/img/android-chrome-512x512.png',
  '/img/apple-touch-icon.png',
  '/img/favicon-16x16.png',
  '/img/favicon-32x32.png',
  '/img/mstile-150x150.png',
  // Add a google font in your css and here
  'https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.js',
  // Add other JS files to cache as needed
];

self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(staticCache).then((cache) => {
      return cache.addAll(cacheList);
    })
  );
});

self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== staticCache && key !== dynamicCache)
            .map((key) => caches.delete(key))
      );
    }).catch(console.warn)
  );
});

self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then((cacheRes) => {
      return cacheRes || fetchAndUpdate(ev.request);
    }).catch(() => {
      if (ev.request.mode === 'navigate') {
        return caches.match('/404.html');
      }
    })
  );
});

async function fetchAndUpdate(request) {
  try {
    const fetchRes = await fetch(request);
    if (!fetchRes || fetchRes.status !== 200 || fetchRes.type !== 'basic') {
      return fetchRes;
    }

    const cache = await caches.open(dynamicCache);
    cache.put(request, fetchRes.clone());
    return fetchRes;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}

self.addEventListener('message', (ev) => {
  console.log(ev.data);
  if (ev.data.ONLINE) {
    isOnline = ev.data.ONLINE;
  }
  if (ev.data.action === 'RESET_AND_IMPORT_DB') {
    resetAndImportDB();
  }
});

self.addEventListener('sync', (ev) => {
  if (ev.tag === 'sync-database') {
    ev.waitUntil(resetAndImportDB());
  }
});

async function resetAndImportDB() {
  try {
    const response = await fetch('/db.json');
    const data = await response.json();

    importScripts('https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.min.js');

    const db = new Dexie("FriendDatabase");
    db.version(1).stores({
      friends: `++id, name, age`
    });

    await db.transaction('rw', db.friends, async () => {
      await db.friends.clear();
      await db.friends.bulkAdd(data);
    });

    sendMessage({ action: 'DB_UPDATED' });
  } catch (error) {
    console.error('Failed to reset and import DB:', error);
  }
}

function sendMessage(msg) {
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      clients[0].postMessage(msg);
    }
  });
}
