'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "60eb14ed8ef74865d6b36cb66cf48555",
".git/config": "36f27ba13644cfc65c97e0a0e7801eb4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b9d108e76582c613d813e54e5467dbea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ebfb7a67033e9542695f57f0a0b54a8",
".git/logs/refs/heads/main": "75ed6f2035e9d808fa5804d1c29c65f8",
".git/logs/refs/remotes/origin/main": "8841d299ccaf2e87ec97ba72ec7c2f13",
".git/objects/04/0db6ac9cd31d265c1582be3b55223d0675f2f0": "04398ff6419c2a18e0b376870e6ee41d",
".git/objects/0d/7a889c088e71991261bf25f936c3edaccf8f0a": "bb6f3e5667add9836d9a9696fe2b7f23",
".git/objects/1b/71f0f2e1a44ba56d91055768a6102580f7e180": "2478a6314d811772ce29459702d9516f",
".git/objects/41/c8fb9d987bd2e0bc3231211fd2101036c0a258": "d8123848d2dac41a7bbd21d3b5914fe5",
".git/objects/44/0b4af7d5d07969315eee1167f5e6c1c64ed171": "d2323b0f8c25a2a216207e5f58d0ba08",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/f2e31668c62488ca525187148d116c688f1fc9": "790a447b1ea072b49ee1ec5d580fe577",
".git/objects/70/492acc262fa7b2b1331f3541f3bd45fc01bb3a": "e671b2a19c38fc04ea88c8fdada5a226",
".git/objects/7f/00e15466d9700b8f09a35dc5f94686661862f7": "ed83b7a754abd7d18d80d4614f9e48a6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/ba8394a563eb85d33388ab237bcd66e4cb49b4": "c75b47198f0800284d055dcf51728940",
".git/objects/a1/512a758597196db0bc6175648d4853f78baef0": "d2603e2fe4ae53d1633f7d391d6c25fc",
".git/objects/a7/92e142809a0ea1496229ae0b9925a1fcc4e2a2": "599705cd3ac79f90cfbfeadbd9de8266",
".git/objects/b2/cf6699cc46560f3edcd52bb7be48d5fc456859": "5ada506f4e95f46aeb6ee124ceb9ab24",
".git/objects/b6/6fa072940863f89622eac10b91fbc5761e7885": "0d4911d443d90359ac4e5f4ebf510f8e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/9645441a9f15a1f5f32c911a6dce6b0f2135da": "8872815a9091b863999822cd15fdf6e0",
".git/objects/df/8d201dbb501dc0b740daafbf5c1ecf88df4c1e": "60a31316d08b34e681ed69ce151c9d62",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "9886623e1c8238c8e747f2a614ce8088",
".git/refs/remotes/origin/main": "18e2414c35c7108939745bdc88e541dd",
"assets/AssetManifest.bin": "ea3d9d12700aca4002fa0e103942603c",
"assets/AssetManifest.bin.json": "2bc111c3fb983c3a07fcb4af3927742a",
"assets/AssetManifest.json": "7569e2f9f99bca01ca92a26ea487135a",
"assets/assets/fonts/LibreBaskerville-Regular.ttf": "fac7df0a4714aacd0bfbca6cf57a488c",
"assets/assets/images/logo.png": "6cc6afa3f46fd934a9e3e948695da476",
"assets/FontManifest.json": "aa02931741265515d86548caca9654d1",
"assets/fonts/MaterialIcons-Regular.otf": "6abaf0a8df1238257c9898a96e19915f",
"assets/NOTICES": "4fe12bf31b821efe9241bf1588c378c9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "6e1f96f08718d76ed99985c23c2c0012",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "10cd6675fdad969a0c4df16ea39c0991",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b9d181bb082e9d48fefbc69f89225af7",
"/": "b9d181bb082e9d48fefbc69f89225af7",
"main.dart.js": "06ae40b0fe32f9b1e0b0d59e40ebf208",
"manifest.json": "7def75ab06b03b84c459bdba5177ee59",
"splash/img/dark-1x.png": "7d56f517dd244728b838fa0a261a03a9",
"splash/img/dark-2x.png": "f2fc096b2ff9420a2f404f12adc1d995",
"splash/img/dark-3x.png": "3a4fcdf489e9932fa087a53302c6fa73",
"splash/img/dark-4x.png": "7fe011fe45844ce788652cbba5130a18",
"splash/img/light-1x.png": "7d56f517dd244728b838fa0a261a03a9",
"splash/img/light-2x.png": "f2fc096b2ff9420a2f404f12adc1d995",
"splash/img/light-3x.png": "3a4fcdf489e9932fa087a53302c6fa73",
"splash/img/light-4x.png": "7fe011fe45844ce788652cbba5130a18",
"version.json": "90cb9993108f17a563f2c697df7b450d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
