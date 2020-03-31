'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "1c44a09101ae7901d6c2e7cbcc61e162",
"/main.dart.js": "2f2149ab8bb0494cf9005a11cc6a6638",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "a5a65da57c05d998ca26a3b62b16eb96",
"/assets/LICENSE": "964211db6a8b173b1744e68da77ce459",
"/assets/images/group-2.png": "7a5323a1a95b78411976dd582ac65ac2",
"/assets/images/group-18.png": "f01b4a3ecd33bc20b239e6f79f5b8f8e",
"/assets/images/group-11-phone.png": "b1482c1c4bdcea4fd51c2dd2a63ec7f7",
"/assets/images/group.png": "18ff73ca950bed8971bf94c44516b6f2",
"/assets/images/icon-down-orange.png": "93974f373921e7bf03c89c5fc7e39af6",
"/assets/images/2.0/group-2.png": "ec74afda6cd577e9b8758d66b7834ceb",
"/assets/images/2.0/group-18.png": "c93ce927756d4464edc2c7c52f281741",
"/assets/images/2.0/group-11-phone.png": "b65493b52730652081f9ed75dce44e26",
"/assets/images/2.0/group.png": "a84727cc631d5e8b2becbe47495a743d",
"/assets/images/2.0/icon-down-orange.png": "64633baaa1961988b0443e6bb9344198",
"/assets/images/2.0/group-18-phone.png": "5c703034e01fd55d4b3ddcbfdbef72b8",
"/assets/images/2.0/group-11.png": "0fda2f65c408f4330ff09db935cce9f4",
"/assets/images/3.0/group-2.png": "ebb6f1131aa019a25388ff33a67b0e0e",
"/assets/images/3.0/group-18.png": "164fc261c1949c9a4bc813961cfe40eb",
"/assets/images/3.0/group-11-phone.png": "17c4f16799e91441ae72ea6fcc04a2b7",
"/assets/images/3.0/group.png": "01218af5789d639c38c5a824fda64756",
"/assets/images/3.0/icon-down-orange.png": "87449f4d4f7d063a0a6608b365d46748",
"/assets/images/3.0/group-18-phone.png": "3ce6beeba94803a8e2cd536ae84ddcd9",
"/assets/images/3.0/group-11.png": "61ffb6a10ea1adb7ac0573ac7c6cf811",
"/assets/images/group-18-phone.png": "4076814619d4e50a9f1adb8f5682d1be",
"/assets/images/group-11.png": "24f14bb6c7b646e1b222577cb098e94f",
"/assets/AssetManifest.json": "046df312f39f672b311095b3603a9874",
"/assets/FontManifest.json": "b473df0dcac28f42e272f35e93a2bcfb",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/proximanova-thin.otf": "be558f803e56917e9a3de53e694e139e",
"/assets/fonts/proximanova-light.otf": "4c918c9a7a4a200251235a44148cd0bd",
"/assets/fonts/proximanova-semibold.otf": "9603cb35fea843269cb0bdd305c0aa8e",
"/assets/fonts/proximanova-bold.otf": "589dca4161140f7a18070ff72087c29a",
"/assets/fonts/proximanova-medium.otf": "60d729a5acee39613e223bb59567fd5e",
"/assets/fonts/proximanova-extrabold.otf": "c7cc7a48f0b6eb7f1cd34b367d5088b7",
"/assets/fonts/proximanova-boldit.otf": "87fd62210d15c70fb68485fc9a637ee6",
"/assets/fonts/proximanova-extraboldit.otf": "093e3cb0f9741deb1337b036addcb0c0",
"/assets/fonts/proximanova-thinit.otf": "901e670be258d77c97abcb186034f307",
"/assets/fonts/proximanova-regularit.otf": "5c25de69654973009600dcebdabfb0ca",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/fonts/proximanova-mediumit.otf": "942d792cfe3a1e40f0e5c4495bd7cc72",
"/assets/fonts/proximanova-lightit.otf": "c978edaea159a44c065f9cf84ea5b3a7",
"/assets/fonts/proximanova-semiboldit.otf": "7f522d273c32ff2b3b64087401fc78c4",
"/assets/fonts/proximanova-black.otf": "1c2db3ae75c02140f84f98fe4bbb8a8d",
"/assets/fonts/proximanova-blackit.otf": "9789310fbe0fa19f66220a7c18f3a1f3",
"/assets/fonts/proximanova-regular.otf": "197633d0c1d341589fbfe679543dee1b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
