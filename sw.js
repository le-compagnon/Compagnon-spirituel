const CACHE_NAME = 'compagnon-v1';
const ASSETS = [
  './',
  './index.html',
  './ACCUEIL.jpeg',
  './ACCUEIL2.jpeg',
  './ACCUEIL3.jpeg',
  './CATHERINE.jpeg',
  './COURONNE.jpeg',
  './FICHES2.jpeg',
  './MARIE.jpeg',
  './MARIE2.jpeg',
  './MICHEL.jpeg',
  './MICHEL2.jpeg',
  './NEUVAINE.jpeg',
  './NEUVAINE2.jpeg',
  './NEUVAINE3.jpeg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
  // Écoute du signal envoyé depuis la page pour la notification
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'TEST_NOTIF') {
    self.registration.showNotification("Le Compagnon Spirituel", {
      body: "Vos rappels quotidiens sont bien activés !",
      icon: "LOGO.jpeg",
      badge: "LOGO.jpeg"
    });
  }
});
