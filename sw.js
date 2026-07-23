// Service Worker sem cache — sempre busca a versão mais recente do servidor
const CACHE_NAME = 'divinissima-v0';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  // Apaga todos os caches antigos
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  // Sempre busca da rede, sem cache
  e.respondWith(fetch(e.request));
});
