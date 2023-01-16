/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "681b653d7be224853cbd709acb2c3ae3"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.bd18242b.css",
    "revision": "d211fd8b5c6a5524f104996801ebdc4a"
  },
  {
    "url": "assets/img/sceme.c72e8903.png",
    "revision": "c72e8903a4d699259da568800111c3b7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.90912ced.js",
    "revision": "1ab8921b9681065ec7efeb5aad5366f3"
  },
  {
    "url": "assets/js/11.fda23a57.js",
    "revision": "17b4b1432ea3f61de7240ff26aeb21de"
  },
  {
    "url": "assets/js/12.c7603f45.js",
    "revision": "1ec073e6a68806556c502c9d9f21d670"
  },
  {
    "url": "assets/js/13.19195d50.js",
    "revision": "1de78032411a0c136c0db0969c0962b4"
  },
  {
    "url": "assets/js/14.b620f02c.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.db4876d9.js",
    "revision": "9a54d91e51084f77f1034582097cdb91"
  },
  {
    "url": "assets/js/16.4a518012.js",
    "revision": "9552bca6be9430b43d1667d0e1fe56bf"
  },
  {
    "url": "assets/js/17.7b1c47de.js",
    "revision": "7eac6c2d68bd3cc924c2a4fad9161b73"
  },
  {
    "url": "assets/js/18.5c3753ad.js",
    "revision": "d2920050b8920e4a10d4531bba68bd93"
  },
  {
    "url": "assets/js/19.0b42833a.js",
    "revision": "8bb64abe9f57eeeb2244a2db0cfe6a6a"
  },
  {
    "url": "assets/js/2.aad9db70.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.d7aac340.js",
    "revision": "4e2d291a7bc656b75514128234fb4502"
  },
  {
    "url": "assets/js/21.438b2076.js",
    "revision": "f0b72f1693a45236c1bbd8dff231ccff"
  },
  {
    "url": "assets/js/22.0d177cdb.js",
    "revision": "0ee6caa9eafa425a1d17cd467c12bc46"
  },
  {
    "url": "assets/js/23.acea9543.js",
    "revision": "49a26a8d4bb289e6524cafc45252a533"
  },
  {
    "url": "assets/js/24.cb4112b8.js",
    "revision": "fb902d5a200066788ef29d75c4f6dd03"
  },
  {
    "url": "assets/js/26.a1ce5b76.js",
    "revision": "9e7c5a361a41098fb47a8e5465dfeee8"
  },
  {
    "url": "assets/js/3.6a5a2d29.js",
    "revision": "e3d8ea9b477cd8c1ca68583b241caebf"
  },
  {
    "url": "assets/js/4.499a1b3b.js",
    "revision": "27c73b27f03785f3e5df3beb2fa3b19d"
  },
  {
    "url": "assets/js/5.c9d8986c.js",
    "revision": "a83c521aed90313eec9d564dd1a80b8e"
  },
  {
    "url": "assets/js/6.10931e33.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.b865a5f1.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.cce4fd62.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.73326d59.js",
    "revision": "255f60e84533194dda0653b6ccba0ddb"
  },
  {
    "url": "assets/js/app.f6814210.js",
    "revision": "5afc7b0893a9bba5b7bded402f70bef2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "38c72df3ae7bb9f101085753e5656eee"
  },
  {
    "url": "design/index.html",
    "revision": "448ff2ad67f25a9122902bf02ef797df"
  },
  {
    "url": "index.html",
    "revision": "f1203228b4d6b2d646eab924d961bd1e"
  },
  {
    "url": "intro/index.html",
    "revision": "add5fcf971a021ad066d5b854a0fe823"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "238541e032e679e9b0f749c3e5946dd5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0bc9d185bd91d139dbdcdcdd6dd1a9c6"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "73ef7aedc702c169b725527d60ae9645"
  },
  {
    "url": "software/index.html",
    "revision": "039a9a5897dd3a1d7eb41d84a094ae78"
  },
  {
    "url": "test/index.html",
    "revision": "eb54c29e143aff1f569de6b144f4c5b1"
  },
  {
    "url": "use cases/index.html",
    "revision": "f8d04946c809db1937018bfa20b1a6ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
