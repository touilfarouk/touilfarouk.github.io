const APP = {
  sw: null,
  deferredPrompt: null, //used for installing later
  isOnline: 'onLine' in navigator && navigator.onLine,
  init: () => {
    APP.registerSW();
    APP.addListeners();
    setTimeout(APP.checkNavCount, 10000); //10 seconds after loading check for install
    APP.changeDisplay(); //change display to say online or offline
  },
  registerSW: () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(function (err) {
        console.warn(err);
      });
      navigator.serviceWorker.ready.then((registration) => {
        APP.sw = registration.active;
        if ('periodicSync' in registration) {
          registration.periodicSync.register('sync-database', {
            minInterval: 24 * 60 * 60 * 1000 // 24 hours
          });
        } else if ('sync' in registration) {
          registration.sync.register('sync-database');
        }
      });
    }
  },
  addListeners: () => {
    if (navigator.standalone) {
      console.log('Launched: Installed (iOS)');
      APP.isStandalone = true;
    } else if (matchMedia('(display-mode: standalone)').matches) {
      console.log('Launched: Installed');
      APP.isStandalone = true;
    } else {
      APP.isStandalone = false;
    }

    window.addEventListener('pageshow', APP.updateNavCount);
    window.addEventListener('online', APP.changeStatus);
    window.addEventListener('offline', APP.changeStatus);
    navigator.serviceWorker.addEventListener('message', APP.gotMessage);
    window.addEventListener('beforeinstallprompt', (ev) => {
      ev.preventDefault();
      APP.deferredPrompt = ev;
      console.log('deferredPrompt saved');
    });
  },
  changeStatus: (ev) => {
    APP.isOnline = ev.type === 'online';
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage({ ONLINE: APP.isOnline });
    });
    APP.changeDisplay();
  },
  changeDisplay: () => {
    if (APP.isOnline) {
      document.body.classList.remove('offline');
      document.querySelector('.isonline').textContent = '';
    } else {
      document.body.classList.add('offline');
      document.querySelector('.isonline').textContent = ' NAWT ';
    }
  },
  gotMessage: (ev) => {
    console.log(ev.data);
  },
  sendMessage: (msg) => {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage(msg);
    });
  },
  updateNavCount: (ev) => {
    if (!APP.isStandalone) {
      APP.navCount = 0;
      let storage = sessionStorage.getItem('exercise3NavCount');
      if (storage) {
        APP.navCount = Number(storage) + 1;
      } else {
        APP.navCount = 1;
      }
      sessionStorage.setItem('exercise3NavCount', APP.navCount);
    }
  },
  checkNavCount: () => {
    let storage = sessionStorage.getItem('exercise3NavCount');
    if (storage) {
      APP.navCount = Number(storage);
      if (APP.navCount > 2) {
        console.log('show the prompt'); //only works on user interaction
        document.body.addEventListener('click', () => {
          if (APP.deferredPrompt) {
            APP.deferredPrompt.prompt();
            APP.deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
                APP.deferredPrompt = null;
                sessionStorage.clear();
              } else {
                console.log('User dismissed the install prompt');
              }
            });
          } else {
            window.addEventListener('beforeinstallprompt', (ev) => {
              console.log('beforeinstallprompt');
              ev.preventDefault();
              APP.deferredPrompt = ev;
            });
          }
        }, { once: true });
      }
    }
  }
};

document.addEventListener('DOMContentLoaded', APP.init);
