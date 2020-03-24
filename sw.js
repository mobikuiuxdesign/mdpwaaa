var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
	'style.css',
	'manifest.json',	
	'img/menu-open-icon-24px.svg',
	'img/menu-close-icon-24px.svg',
	'img/list-icon-24px.svg',
	'img/grid-icon-24px.svg',	
	'img/check-icon-24px.svg',
	'img/favicon-16x16.png',
	'img/favicon-32x32.png',
	'img/apple-touch-icon.png',
	'img/icon-72x72.png',	
	'img/icon-96x96.png',
	'img/icon-128x128.png',	
	'img/icon-144x144.png',
	'img/icon-152x152.png',	
	'img/icon-192x192.png',	
	'img/icon-384x384.png',
	'img/icon-512x512.png',
	'pic/picture_1x1.svg',	
	'index.html',
	'offline/index-offline.html',		
	'offline/prices-offline.html',
	'offline/infotext-offline.html',	
	'offline/cardsgrid-offline.html',
	'offline/contacts-offline.html'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');  
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});