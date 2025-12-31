// Service Worker simples para permitir notificações no Android
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

// Este ouvinte mantém o worker ativo
self.addEventListener('push', (event) => {
    // Espaço reservado para futuro Push Server (FCM)
});