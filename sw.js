// Beursie service worker: makes the app open offline. Bump VERSION when you change index.html.
const VERSION = 'beursie-v10';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const host = new URL(e.request.url).hostname;
  if (host === 'accounts.google.com' || host.endsWith('googleapis.com') && !host.startsWith('fonts.')) return; // Google sign-in and Drive: always live
  // network first for the app page (so updates arrive), cache fallback offline; cache-first for everything else
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request).then(r => { const copy = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(r => {
    if (r.ok || r.type === 'opaque') { const copy = r.clone(); caches.open(VERSION).then(c => c.put(e.request, copy)); }
    return r;
  })));
});
self.addEventListener('notificationclick', e => { e.notification.close(); e.waitUntil(clients.matchAll({ type: 'window' }).then(ws => ws.length ? ws[0].focus() : clients.openWindow('./'))); });
