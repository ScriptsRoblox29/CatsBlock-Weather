const CACHE_NAME = 'catsblock-v3.2'; 
const changelog = "• Bug fix - catsblock-weather-v3.2 | 02/15/2026 \n 1. the locate button fixed \n 2. The update log has been corrected and is now picking up new updates instead of old ones."; // Descreva as mudanças aqui

self.addEventListener('install', (event) => {
    // Removido o skipWaiting daqui!
    // O SW vai ficar em estado 'waiting' até o usuário autorizar.
});

self.addEventListener('message', (event) => {
    if (event.data.type === 'GET_CHANGELOG') {
        // Envia as mudanças para o index.html mostrar no confirm
        event.source.postMessage({
            type: 'SEND_CHANGELOG',
            text: changelog
        });
    }
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting(); // Agora ele só pula a espera se o index.html mandar!
    }
});

// Adicione isso para garantir que o cache antigo seja limpo
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
            );
        })
    );
});
