// Service Worker mínimo do Divinissima Semijoias.
// Propositalmente NÃO guarda nada em cache — existe apenas para satisfazer
// o requisito do Chrome/Edge de ter um Service Worker ativo para permitir
// "Instalar app". Como nunca cacheia nada, não há risco de conteúdo
// desatualizado (o mesmo bug que fez o time remover o manifest antes).

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Sempre busca da rede, nunca responde com algo em cache.
  event.respondWith(fetch(event.request));
});
