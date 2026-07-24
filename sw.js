// Service Worker — força atualização imediata, sem cache
const VERSAO = '2026-07-24-v5';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => {
        // Força reload em todos os clientes abertos
        self.clients.matchAll({type:'window'}).then(clients => {
          clients.forEach(client => client.navigate(client.url));
        });
      })
  );
});

self.addEventListener('fetch', e => {
  // Sempre busca da rede — nunca usa cache
  e.respondWith(
    fetch(e.request, {cache: 'no-store'}).catch(() => fetch(e.request))
  );
});
