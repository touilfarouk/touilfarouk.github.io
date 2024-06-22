const APP = {
  sw: null,
  deferredPrompt: null, //used for installing later
  isOnline: 'onLine' in navigator && navigator.onLine,
  init: () => {
    //when the page loads (runs on every page load)
    APP.registerSW();
    APP.addListeners();
    setTimeout(APP.checkNavCount, 10000); //10 seconds after loading check for install
    APP.changeDisplay(); //change display to say online or offline
  },
  registerSW: () => {
    //register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(function (err) {
        // Something went wrong during registration. The sw.js file
        // might be unavailable or contain a syntax error.
        console.warn(err);
      });
      navigator.serviceWorker.ready.then((registration) => {
        // .ready will never reject... just wait indefinitely
        APP.sw = registration.active;
        //save the reference to use later or use .ready again
      });
    }
  },
  addListeners: () => {
    //add event listeners for DOM
    //check if already installed
    if (navigator.standalone) {
      console.log('Launched: Installed (iOS)');
      APP.isStandalone = true;
    } else if (matchMedia('(display-mode: standalone)').matches) {
      console.log('Launched: Installed');
      APP.isStandalone = true;
    } else {
      // console.log('Launched: Browser Tab');
      APP.isStandalone = false;
    }
    //listen for pageshow event to update the nav counter
    window.addEventListener('pageshow', APP.updateNavCount);

    //add event listeners for online and offline
    window.addEventListener('online', APP.changeStatus);
    window.addEventListener('offline', APP.changeStatus);

    //add listener for message
    navigator.serviceWorker.addEventListener('message', APP.gotMessage);

    //add listener for install event
    window.addEventListener('beforeinstallprompt', (ev) => {
      // Prevent the mini-infobar from appearing on mobile
      ev.preventDefault();
      // Save the event in a global property
      // so that it can be triggered later.
      APP.deferredPrompt = ev;
      console.log('deferredPrompt saved');
      // Build your own enhanced install experience
      // use the APP.deferredPrompt saved event
    });
  },
  changeStatus: (ev) => {
    // Jet Brains Mono
    //toggling between online and offline
    APP.isOnline = ev.type === 'online' ? true : false;
    //TODO: send message to sw about being online or offline
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage({ ONLINE: APP.isOnline });
    });
    APP.changeDisplay();
  },
  changeDisplay: () => {
    if (APP.isOnline) {
      //online
      document.body.classList.remove('offline');
      document.querySelector('.isonline').textContent = '';
    } else {
      //offline
      document.body.classList.add('offline');
      document.querySelector('.isonline').textContent = ' NAWT ';
    }
  },
  gotMessage: (ev) => {
    //received message from service worker
    console.log(ev.data);
  },
  sendMessage: (msg) => {
    //send messages to the service worker
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage(msg);
    });
  },
  updateNavCount: (ev) => {
    //TODO: when the app loads check to see if the sessionStorage key exists
    // if the number exists then increment by 1.
    // triggered by the pageshow event
    console.log(ev);
    //don't need to do this if the app is already installed...
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
    //page has just loaded if the count is high enough then show the prompt
    let storage = sessionStorage.getItem('exercise3NavCount');
    if (storage) {
      APP.navCount = Number(storage);
      if (APP.navCount > 2) {
        console.log('show the prompt'); //only works on user interaction
        document.body.addEventListener(
          'click',
          () => {
            if (APP.deferredPrompt) {
              APP.deferredPrompt.prompt();
              APP.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                  //user says yes
                  console.log('User accepted the install prompt');
                  APP.deferredPrompt = null; //we will not need it again.
                  //and clear out sessionStorage
                  sessionStorage.clear();
                } else {
                  //user says not now
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
          },
          { once: true }
        );
      }
    }
  },
};

document.addEventListener('DOMContentLoaded', APP.init);
