(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [92],
  {
    7061: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/shared-source-code/avant-propos",
        function () {
          return t(7087);
        },
      ]);
    },
    7087: function (e, n, t) {
      "use strict";
      t.r(n);
      var a = t(2322),
        i = t(4888),
        o = t.n(i),
        r = t(2784),
        s = t(9097),
        l = t.n(s),
        c = t(7871),
        d = t(6663),
        p = t(7606);
      let u = (0, r.createContext)("fr"),
        m = () => {
          let [e, n] = (0, r.useState)("fr"),
            t = () => {
              n((e) => ("fr" === e ? "en" : "fr"));
            };
          return (0, a.jsx)(u.Provider, {
            value: e,
            children: (0, a.jsxs)(d.LH, {
              combine: !0,
              manager: "stagger",
              children: [
                (0, a.jsx)(o(), { id: "cd8ac395aa38884", children: "" }),
                (0, a.jsxs)(p.Fq, {
                  animated: (0, d.aa)("y", 12, 0),
                  children: [
                    (0, a.jsxs)(d.LH, {
                      children: [
                        (0, a.jsx)(d.xv, {
                          as: "h1",
                          fixed: !0,
                          children: "fr" === e ? "Bienvenue..." : "Welcome...",
                        }),
                        (0, a.jsx)(d.tu, {
                          transitions: { entering: "content" },
                          continuous: !0,
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.fS, {
                        as: "hr",
                        animated: (0, d.aa)("scaleX", 0, 1),
                      }),
                    }),
                    (0, a.jsxs)(d.LH, {
                      children: [
                        (0, a.jsx)(d.tu, { transitions: { entering: "type" } }),
                        (0, a.jsx)(d.fS, {
                          as: "blockquote",
                          animated: [
                            (0, d.Wx)(),
                            {
                              transitions: {
                                entering: {
                                  y: [24, 0],
                                  options: { delay: 0.4 },
                                },
                                exiting: { y: 0 },
                              },
                            },
                          ],
                          children: (0, a.jsxs)(d.xv, {
                            children: [
                              (0, a.jsx)("h3", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? "Qu'est-ce que Puppeteer ?"
                                    : "What is Puppeteer?",
                              }),
                              (0, a.jsx)("p", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? (0, a.jsx)(a.Fragment, {
                                        children:
                                          "Puppeteer est une biblioth\xe8que Node.js d\xe9velopp\xe9e par Google qui vous permet de contr\xf4ler Chrome en mode headless via le protocole DevTools. C'est un outil pour automatiser les tests dans votre application en utilisant Chrome en mode headless ou des appareils Chromebit, sans n\xe9cessiter d'extensions de navigateur telles que Selenium Webdriver ou PhantomJS. Puppeteer vous permet d'automatiser les tests de vos applications web. Avec lui, vous pouvez ex\xe9cuter des tests dans le navigateur et voir les r\xe9sultats en temps r\xe9el sur votre terminal. Puppeteer utilise le protocole WebDriver pour se connecter au navigateur et simuler l'interaction de l'utilisateur avec les \xe9l\xe9ments HTML ou les pages.",
                                      })
                                    : (0, a.jsx)(a.Fragment, {
                                        children:
                                          "Puppeteer is a Node.js library developed by Google that lets you control headless Chrome through the DevTools Protocol. It is a tool for automating testing in your application using headless Chrome or Chromebit devices, without requiring any browser extensions like Selenium Webdriver or PhantomJS. Puppeteer lets you automate the testing of your web applications. With it, you can run tests in the browser and then see the results in real-time on your terminal. Puppeteer uses the WebDriver protocol to connect with the browser and simulate user interaction with HTML elements or pages.",
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsxs)(d.LH, {
                      children: [
                        (0, a.jsx)(d.tu, { transitions: { entering: "type" } }),
                        (0, a.jsx)(d.fS, {
                          as: "blockquote",
                          animated: [
                            (0, d.Wx)(),
                            {
                              transitions: {
                                entering: {
                                  y: [24, 0],
                                  options: { delay: 0.4 },
                                },
                                exiting: { y: 0 },
                              },
                            },
                          ],
                          children: (0, a.jsxs)(d.xv, {
                            children: [
                              (0, a.jsx)("h3", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? "Comment configurer Node.js et Puppeteer ?"
                                    : "How to Set Up Node.js and Puppeteer ?",
                              }),
                              (0, a.jsx)("p", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e
                                    ? (0, a.jsx)(a.Fragment, {
                                        children:
                                          "Tout d'abord, cr\xe9ez un r\xe9pertoire dans lequel vous travaillerez en faisant un clic droit sur l'emplacement de votre choix et en choisissant \"Nouveau dossier\". Vous pouvez \xe9galement utiliser la commande mkdir nom-du-r\xe9pertoire dans votre terminal.",
                                      })
                                    : (0, a.jsx)(a.Fragment, {
                                        children:
                                          "First make a directory which you will be working with by right clicking on your preferred location and choosing new folder. You can also use the command mkdir dir-name in your terminal.",
                                      }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.xv, {
                        children:
                          "fr" === e
                            ? "Ensuite, cr\xe9ez un fichier app.js dans votre r\xe9pertoire et ajoutez le code Node.js comme indiqu\xe9 ci-dessous :"
                            : "Then create an app.js file in your folder and add the node.js code as shown below:",
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(p.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: "npm install puppeteer",
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.xv, {
                        children: (0, a.jsx)(d.xv, {
                          children:
                            "fr" === e
                              ? "Et ex\xe9cutez ce code ci-dessous avec (node app.js) dans votre terminal."
                              : "And excute this code below with (node app.js) in your terminal",
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(p.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: "const puppeteer = require('puppeteer');\n\n  (async () => {\n    const browser = await puppeteer.launch();\n    const page = await browser.newPage();\n    await page.goto('https://codacom.vercel.app/');\n    \n    await browser.close();\n  })();\n\n              ",
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.xv, {
                        children: (0, a.jsx)(d.xv, {
                          children:
                            "fr" === e
                              ? "Maintenant je vous offre un exmaple complet avec un formulaire html contenant des types de chemps divers."
                              : "Now I am providing you with a complete example featuring an HTML form containing various types of fields.",
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(p.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: '<!DOCTYPE html>\n  <html>\n  <head>\n      <title>Sample Form</title>\n  </head>\n  <body>\n      <form action="/submit" method="post">\n          <label for="name">Name:</label>\n          <input type="text" id="name" name="name" required>\n          <br>\n          <label for="email">Email:</label>\n          <input type="email" id="email" name="email" required>\n          <br>\n          <label for="terms">Terms and Conditions:</label>\n          <input type="checkbox" id="terms" name="terms" required>\n          <br>\n          <label for="gender-male">Male:</label>\n          <input type="radio" id="gender-male" name="gender" value="male" required>\n          <label for="gender-female">Female:</label>\n          <input type="radio" id="gender-female" name="gender" value="female" required>\n          <br>\n          <label for="select-option">Select an option:</label>\n          <select id="select-option" name="select-option" required>\n              <option value="option1">Option 1</option>\n              <option value="option2">Option 2</option>\n              <option value="option3">Option 3</option>\n          </select>\n          <br>\n          <label for="message">Message:</label>\n          <textarea id="message" name="message" required></textarea>\n          <br>\n          <label for="file-upload">Upload File:</label>\n          <input type="file" id="file-upload" name="file-upload" required>\n          <br>\n          <label for="date-input">Date:</label>\n          <input type="date" id="date-input" name="date-input" required>\n          <br>\n          <button type="submit">Submit</button>\n      </form>\n  </body>\n  </html>\n              \n              \n              ',
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.xv, {
                        children: (0, a.jsx)(d.xv, {
                          children:
                            "fr" === e
                              ? "Veuillez remplacer le code JavaScript par celui ci-dessous dans app.js"
                              : "Please replace the javascript code with this bellow in app.js",
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(p.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: '\n  import puppeteer from "puppeteer";\n\n  (async () => {\n    const browser = await puppeteer.launch({ headless: false });\n    const page = await browser.newPage();\n  \n    await page.goto("http://127.0.0.1:5500/index/"); // Replace "http://127.0.0.1:5500/index/" with the actual URL of your form.\n  \n    // Wait for the "name" input field to be present and become clickable\n    await page.waitForSelector("#name");\n  \n    // Type your name into the "name" input field\n    await page.type("#name", "farouk", { delay: 100 }); // Replace "nassila" with the name you want to enter.\n  \n    // Wait for the "email" input field to be present and become clickable\n    await page.waitForSelector("#email");\n  \n    // Type your email into the "email" input field\n    await page.type("#email", "farouk@hotmail.com", { delay: 100 }); // Replace "nassil@nassil.com" with the email you want to enter.\n  \n    // Check the checkbox with ID "terms"\n    await page.click("#terms");\n  \n    // Select the radio button with ID "gender-female"\n    await page.click("#gender-male");\n  \n    // Select "Option 2" from the dropdown with ID "select-option"\n    await page.select("#select-option", "option2");\n  \n    // Type text into the textarea with ID "message"\n    await page.type("#message", "This is a sample message.", { delay: 50 });\n  \n    // Attach a local file to the file input with ID "file-upload"\n    const fileInput = await page.$("#file-upload");\n    await fileInput.uploadFile("./path/to/your/file.pdf"); // Replace "./path/to/your/file.pdf" with the actual path to the file you want to upload.\n  \n    // Type a date into the date input with ID "date-input"\n    await page.type("#date-input", "2023-07-28");\n  \n    // Wait for the "Submit" button to be present and become clickable\n    await page.waitForSelector("button[type=\'submit\']");\n  \n    // Simulate a click on the "Submit" button and log the event\n    await page.evaluate(() => {\n      const submitButton = document.querySelector("button[type=\'submit\']");\n      submitButton.addEventListener("click", () => {\n        alert("Click event occurred!");\n      });\n      submitButton.click();\n    });\n  \n    // Take a screenshot after the click\n    await page.screenshot({\n      path: "./screens/samplechapters1.jpg", // You can change the file name and path as per your preference.\n      fullPage: true,\n    });\n  \n    // Close the browser\n    await browser.close();\n  })();\n              \n              \n              ',
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(d.xv, {
                        children: (0, a.jsx)(d.xv, {
                          children:
                            "fr" === e
                              ? "Si le code ne fonctionne pas comme pr\xe9vu, voici le code du fichier package.json \xe0 installer contenant la bonne version de Puppeteer "
                              : "If the code did not work as expected here is code package.json to install containing the right version of puppeetir",
                        }),
                      }),
                    }),
                    (0, a.jsx)(d.LH, {
                      children: (0, a.jsx)(p.dn, {
                        "data-codacom-global-block": !0,
                        animated: (0, d.Wx)(),
                        code: '\n  {\n    "name": "pptr",\n    "version": "1.0.0",\n    "description": "",\n    "main": "app.js",\n    "type": "module",\n    "scripts": {\n      "test": "echo "Error: no test specified" && exit 1"\n    },\n    "keywords": [],\n    "author": "",\n    "license": "ISC",\n    "dependencies": {\n      "puppeteer": "^19.4.0",\n    }\n  }\n              \n              \n              ',
                      }),
                    }),
                    (0, a.jsx)(p.zx, {
                      frame: "hexagon",
                      animated: [(0, d.Wx)(), (0, d.aa)("x", -12, 0)],
                      onHoverAnimateIcons: !0,
                      tabIndex: -1,
                      title: "Commencer",
                      onClick: t,
                      children:
                        "fr" === e
                          ? "Switch to English"
                          : "Passer en fran\xe7ais",
                    }),
                    (0, a.jsx)("nav", {
                      style: {
                        marginTop: "3rem",
                        display: "flex",
                        justifyContent: "right",
                      },
                      className: "jsx-cd8ac395aa38884",
                      children: (0, a.jsx)(d.LH, {
                        children: (0, a.jsx)(l(), {
                          href: "/shared-source-code/avant-propos/",
                          children: (0, a.jsxs)(p.zx, {
                            frame: "hexagon",
                            animated: [(0, d.Wx)(), (0, d.aa)("x", -12, 0)],
                            onHoverAnimateIcons: !0,
                            tabIndex: -1,
                            title: "Commencer",
                            children: [
                              (0, a.jsx)("span", {
                                className: "jsx-cd8ac395aa38884",
                                children:
                                  "fr" === e ? "Actuellement" : "Currently",
                              }),
                              (0, a.jsx)(c.Z, {}),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      n.default = m;
    },
    7871: function (e, n, t) {
      "use strict";
      var a = t(2784),
        i = t(73),
        o = function () {
          return (o =
            Object.assign ||
            function (e) {
              for (var n, t = 1, a = arguments.length; t < a; t++)
                for (var i in (n = arguments[t]))
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              return e;
            }).apply(this, arguments);
        },
        r = a.forwardRef(function (e, n) {
          var t = o(o({}, a.useContext(i.s)), e);
          return a.createElement(
            "svg",
            o(
              {
                width: "1.5em",
                height: "1.5em",
                viewBox: "0 0 24 24",
                strokeWidth: 1.5,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
              },
              t
            ),
            a.createElement("path", {
              d: "M3 12h18m0 0l-8.5-8.5M21 12l-8.5 8.5",
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          );
        });
      n.Z = r;
    },
  },
  function (e) {
    e.O(0, [299, 774, 888, 179], function () {
      return e((e.s = 7061));
    }),
      (_N_E = e.O());
  },
]);
