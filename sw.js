const version = 27;
let isOnline = true; //will get updated via messaging
const staticCache = `pwaEx3StaticCache${version}`;
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
  "https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.js",
   "https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap",
  "https://fonts.googleapis.com/css2?family=Mukta+Vaani:wght@200;300;400;500;600;700;800&amp;family=Oswald:wght@500;700&amp;family=Roboto:wght@500&amp;display=swap"
  // Add other files to cache as needed
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

function sendMessage(msg) {
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      clients[0].postMessage(msg);
    }
  });
}

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
