// --- CONFIG ---
const version = 1; // bump only when static assets change
const staticCache = `pwaEx3StaticCache-v${version}`;
const dynamicCache = "pwaEx3DynamicCache"; // fixed, keeps data across updates

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
  'https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.js'
];

// --- INSTALL ---
self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(staticCache).then((cache) => cache.addAll(cacheList))
  );
});

// --- ACTIVATE ---
self.addEventListener('activate', (ev) => {
  ev.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        // Only delete *old static* caches
        keys
          .filter((key) => key.startsWith("pwaEx3StaticCache") && key !== staticCache)
          .map((key) => caches.delete(key))
      );
    }).catch(console.warn)
  );
});

// --- FETCH (Stale-While-Revalidate) ---
self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then((cacheRes) => {
      const fetchPromise = fetch(ev.request).then(fetchRes => {
        if (fetchRes && fetchRes.status === 200 && fetchRes.type === 'basic') {
          caches.open(dynamicCache).then(cache => {
            cache.put(ev.request, fetchRes.clone());
          });
        }
        return fetchRes;
      }).catch(() => null);

      // Return cached response immediately, or fetch if not available
      return cacheRes || fetchPromise || (
        ev.request.mode === 'navigate' ? caches.match('/404.html') : null
      );
    })
  );
});

// --- SYNC ---
self.addEventListener('sync', (ev) => {
  if (ev.tag === 'sync-database') {
    ev.waitUntil(importDBIfEmpty());
  }
});

// --- MESSAGE HANDLER ---
self.addEventListener('message', (ev) => {
  console.log("SW message:", ev.data);

  if (ev.data.action === 'RESET_AND_IMPORT_DB') {
    resetAndImportDB();
  }
});

// --- IndexedDB helpers ---
async function importDBIfEmpty() {
  try {
    importScripts('https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.min.js');
    const db = new Dexie("FriendDatabase");
    db.version(1).stores({
      friends: `++id, name, age`
    });

    if (await db.friends.count() === 0) {
      const response = await fetch('/db.json');
      const data = await response.json();
      await db.friends.bulkAdd(data);
      sendMessage({ action: 'DB_IMPORTED' });
    }
  } catch (err) {
    console.error("DB import failed:", err);
  }
}

async function resetAndImportDB() {
  try {
    importScripts('https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.min.js');
    const db = new Dexie("FriendDatabase");
    db.version(1).stores({
      friends: `++id, name, age`
    });

    const response = await fetch('/db.json');
    const data = await response.json();

    await db.transaction('rw', db.friends, async () => {
      await db.friends.clear();
      await db.friends.bulkAdd(data);
    });

    sendMessage({ action: 'DB_RESET_AND_IMPORTED' });
  } catch (err) {
    console.error("DB reset failed:", err);
  }
}

function sendMessage(msg) {
  self.clients.matchAll().then((clients) => {
    clients.forEach(client => client.postMessage(msg));
  });
}
