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
  "https://cdn.jsdelivr.net/npm/dexie@3/dist/dexie.js"
  // Add other files to cache as needed
];


//TODO: complete the functions for these events
self.addEventListener('install', (ev) => {
  ev.waitUntil(
    caches.open(staticCache).then((cache) => {
      //save the whole cacheList
      cache.addAll(cacheList);
    })
  );
});

self.addEventListener('activate', (ev) => {
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
  const fetchRes = await fetch(request);
  if (!fetchRes.ok) throw new Error('Fetch failed');
  const cache = await caches.open(dynamicCache);
  cache.put(request, fetchRes.clone());
  return fetchRes;
}


self.addEventListener('message', (ev) => {
  console.log(ev.data);
  //message received from script
  if (ev.data.ONLINE) {
    isOnline = ev.data.ONLINE;
    //we could confirm if actually online and send a message to the browser if not
    // use a fetch with method: HEAD to do this
    // in the webpage-side code set a timer to resend the online message
    // which will trigger this code again
  }
  //handle other messages from the browser...
  //EG: CLEARDYNAMICCACHE, CLEARSTATICCACHE, LOADFILE, CONFIRMONLINE,
  //    GETFROMDB, etc
});

function sendMessage(msg) {
  //send a message to the browser
  //from the service Worker
  //code from messaging.js Client API send message code
  self.clients.matchAll().then(function (clients) {
    if (clients && clients.length) {
      //Respond to last focused tab
      clients[0].postMessage(msg);
    }
  });
  //See the code from the online video for the version that messages ALL Clients
}
