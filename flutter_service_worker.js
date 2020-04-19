'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f5569e0927f0a0c8d04b16f829de0062",
"assets/assets/btc.png": "8f8d12b8691a706a99e7544bd33527c2",
"assets/assets/cm0.jpeg": "43f3cc141d1bf3b58671a5f2c9cfbd9a",
"assets/assets/cm1.jpeg": "a928962696760e23579bdc358453301f",
"assets/assets/cm2.jpeg": "93426d743309e7f732a51484b914f3e5",
"assets/assets/cm3.jpeg": "8502ba3da54db5754d421e6a1acdb580",
"assets/assets/cm4.jpeg": "5787ab2f6f13d3eac7493e4b7bd94389",
"assets/assets/cm5.jpeg": "86f7aa6f482dc20d09dc23b901f8b134",
"assets/assets/cm6.jpeg": "9a2664960ae554949f2c41e7d52c1f3d",
"assets/assets/cm7.jpeg": "ddd3932dca13fcb1f124818ea5ac15af",
"assets/assets/cm8.jpeg": "002a3663f358145a877e27a833bda494",
"assets/assets/cm9.jpeg": "31519b893e2fc439ff9a20dc12cd6240",
"assets/assets/eth.png": "174b0414fece541456d82f84a296e380",
"assets/assets/ltc.png": "95507ffd15fb458032339c7dc775ed70",
"assets/assets/xmr.png": "d5b4ef9b0226fb8b3cd8359efc6fb6cb",
"assets/assets/xrp.png": "2308acc5cb079e77004f6ae91cc7b051",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "ad61fe160e37f29e7872cdbc05f87538",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "09268c899f54581c71984304d8199efb",
"/": "09268c899f54581c71984304d8199efb",
"main.dart.js": "5734cb3e2e1324c590b94dacaf07f80a",
"manifest.json": "2e249cfb8c783fd1d735a29265ccd6bf"
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
