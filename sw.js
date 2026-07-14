// Divinissima Semijoias — Service Worker
// Permite funcionar offline e instalar como app no celular

const CACHE_NAME = 'divinissima-v1';
const URLS_PARA_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
];

// Instalação: baixa e armazena os arquivos em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_PARA_CACHE))
      .then(() => self.skipWaiting())
  );
});

// Ativação: remove caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Intercepta requisições: serve do cache quando offline
self.addEventListener('fetch', event => {
  // Requisições para a nuvem (Google) — sempre tenta online primeiro
  if(event.request.url.includes('script.google.com')){
    event.respondWith(
      fetch(event.request).catch(() => new Response('{"error":"offline"}', {
        headers: {'Content-Type': 'application/json'}
      }))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if(cached) return cached;
        return fetch(event.request).then(response => {
          if(!response || response.status !== 200 || response.type !== 'basic') return response;
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseClone));
          return response;
        });
      })
      .catch(() => caches.match('./'))
  );
});
