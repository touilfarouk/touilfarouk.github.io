const APP = {
  sw: null,
  deferredPrompt: null, //used for installing later
  isOnline: "onLine" in navigator ? navigator.onLine : true, // Add a fallback value of true for cases where navigator.onLine is not available
  isStandalone: false, // Initialize isStandalone here to avoid any potential issues

  init: () => {
    //when the page loads (runs on every page load)
    APP.registerSW();
    APP.addListeners();
    setTimeout(APP.checkNavCount, 5000); // 5 seconds after loading, check for install
    APP.changeDisplay(); //change display to say online or offline
  },

  registerSW: () => {
    //register the service worker
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(function (err) {
        console.warn(err);
      });
      navigator.serviceWorker.ready.then((registration) => {
        APP.sw = registration.active;
      });
    }
  },

  addListeners: () => {
    //add event listeners for DOM
    //check if already installed
    if (
      navigator.standalone ||
      matchMedia("(display-mode: standalone)").matches
    ) {
      console.log("Launched: Installed (iOS)");
      APP.isStandalone = true;
    } else {
      console.log("Launched: Browser Tab");
      APP.isStandalone = false;
    }

    window.addEventListener("pageshow", APP.updateNavCount);

    window.addEventListener("online", APP.changeStatus);
    window.addEventListener("offline", APP.changeStatus);

    window.addEventListener("beforeinstallprompt", (ev) => {
      ev.preventDefault();
      APP.deferredPrompt = ev;
      console.log("deferredPrompt saved");
    });
  },

  changeStatus: (ev) => {
    //toggling between online and offline
    APP.isOnline = ev.type === "online";
    // Send message to service worker about being online or offline
    APP.sendMessage({ ONLINE: APP.isOnline });
    APP.changeDisplay();
  },

  changeDisplay: () => {
    const isOnlineElement = document.querySelector(".isonline");
    if (APP.isOnline) {
      // Online
      document.body.classList.remove("offline");
      isOnlineElement.textContent = "Online";
      isOnlineElement.classList.add("online-text"); // Add the 'online-text' class
    } else {
      // Offline
      document.body.classList.add("offline");
      isOnlineElement.textContent = "Offline";
      isOnlineElement.classList.remove("online-text"); // Remove the 'online-text' class
    }
  },

  sendMessage: (msg) => {
    //send messages to the service worker
    navigator.serviceWorker.ready.then((registration) => {
      registration.active.postMessage(msg);
    });
  },

  updateNavCount: (ev) => {
    // Triggered by the pageshow event
    console.log(ev);
    //don't need to do this if the app is already installed...
    if (!APP.isStandalone) {
      APP.navCount = 0;
      let storage = sessionStorage.getItem("exercise3NavCount");
      if (storage) {
        APP.navCount = Number(storage) + 1;
      } else {
        APP.navCount = 1;
      }
      sessionStorage.setItem("exercise3NavCount", APP.navCount);
    }
  },

  checkNavCount: () => {
    // Page has just loaded; if the count is high enough then show the prompt
    let storage = sessionStorage.getItem("exercise3NavCount");
    if (storage) {
      APP.navCount = Number(storage);
      if (APP.navCount > 2) {
        console.log("show the prompt"); // Only works on user interaction

        // Change the event listener to a separate function for better reusability
        const installPromptHandler = () => {
          if (APP.deferredPrompt) {
            APP.deferredPrompt.prompt();
            APP.deferredPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === "accepted") {
                //user says yes
                console.log("User accepted the install prompt");
                APP.deferredPrompt = null; //we will not need it again.
                //and clear out sessionStorage
                sessionStorage.clear();
              } else {
                //user says not now
                console.log("User dismissed the install prompt");
              }
            });
          } else {
            window.addEventListener("beforeinstallprompt", (ev) => {
              console.log("beforeinstallprompt");
              ev.preventDefault();
              APP.deferredPrompt = ev;
              // Call the installPromptHandler again to show the prompt
              installPromptHandler();
            });
          }
        };

        document.body.addEventListener("click", installPromptHandler, {
          once: true,
        });
      }
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init);
