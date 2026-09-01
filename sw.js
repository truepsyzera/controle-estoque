// Service Worker do app Controle de Estoque
// Guarda os arquivos do app em cache para que ele funcione 100% offline
// depois da primeira vez que for aberto/instalado.

var CACHE_NAME = "controle-estoque-cache-v12";
var FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/logo.png"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (key) { return key !== CACHE_NAME; })
          .map(function (key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

// Estratégia: tenta a rede primeiro (para pegar atualizações), e cai para o
// cache sempre que a resposta da rede não for uma resposta boa (offline de
// verdade, erro de conexão, ou o servidor responder com erro — por exemplo
// se o repositório do GitHub Pages virar privado, sair do ar, ou o domínio
// deixar de existir). Assim, depois de instalado uma vez com sucesso, o app
// continua funcionando local independente do que aconteça com o link de
// origem.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        if (!response || !response.ok) {
          throw new Error("Resposta de rede inválida (" + (response ? response.status : "sem resposta") + ")");
        }
        var copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(function () {
        return caches.match(event.request).then(function (cached) {
          return cached || caches.match("./index.html");
        });
      })
  );
});
