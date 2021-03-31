
const CACHE_NAME = 'pwa-cache';

self.addEventListener('install', installServiceWorker );
self.addEventListener('fetch', fetchServiceWorker);
self.addEventListener('activate', activateServiceWorker );

function activateServiceWorker(event){
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
  ))
}

function installServiceWorker(event){
  event.waitUntil(precache());
}

async function precache(){
  const cache = await caches.open(CACHE_NAME);
  return cache.addAll([
    "/",
    "/index",
    "/pdf/CV.pdf"
  ]);
}

function fetchServiceWorker(event){
  const request = event.request;
  if(request.method !== 'GET') return;
  
  //Search in cache
  event.respondWith(cachedResponse(request));
  //Update cache
  event.waitUntil(updateCache(request));
}

async function cacheResponse(request){
  const cache = await caches.open(CACHE_NAME);
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request){
  const cache = await caches.open(CACHE_NAME);
  const response = await fetch(request);
  return cache.put(request, response);
}


