var VERSION = '2';
this.addEventListener('install', function(e) {
  e.waitUntil(caches.open(VERSION).then(cache => {
    return cache.addAll([
      '/',
      '/index.html',
      '/sw.js',
      '/style.css',
     '/Icon.png',
     '/fox-icon.png',
     '/icon-512.png'
    ]);
  }))
});


self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

/*
function fetch(url) {
  return fetch(url)
    .then(function(response) {
    // Check if we received a valid response
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return caches.open(VERSION)
      .then(function(cache) {
      cache.put(url, response.clone());
      return response;
    });
  })
    .catch(function(error) {
    console.log('Request failed:', error);
    // You could return a custom offline 404 page here
  });
}
*/
