// SW versão final — apaga tudo e se desregistra
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({type:'window'}))
      .then(clients => clients.forEach(c => c.navigate(c.url)))
  );
});
self.addEventListener('fetch', e => e.respondWith(fetch(e.request, {cache:'no-store'})));
