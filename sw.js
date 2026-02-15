const CACHE_NAME = 'catsblock-v2'; // Mude a versão aqui
const changelog = "• Updated icons and weather settings to avoid confusion - catsblock-weather-v2 \n 1. New icons and climates, mixed rain hail sleet and mixed rain snow"; // Descreva as mudanças aqui

// No evento de instalação, vamos anexar essas mudanças
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

// Escuta quando o index.html pergunta "o que tem de novo?"
self.addEventListener('message', (event) => {
    if (event.data.type === 'GET_CHANGELOG') {
        event.source.postMessage({
            type: 'SEND_CHANGELOG',
            text: changelog
        });
    }
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});
