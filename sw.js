// installation..
self.addEventListener('install', (event) => {
    const cacheKey = 'MyFancyCacheName_v2';
  
    event.waitUntil(caches.open(cacheKey).then((cache) => {
      // Add all the assets in the array to the 'MyFancyCacheName_v1'
      // `Cache` instance for later use.
      return cache.addAll([

      ]);
    }));
  })

  self.addEventListener('activate', (event) => {
    // Specify allowed cache keys
    const cacheAllowList = ['MyFancyCacheName_v2'];
  
    // Get all the currently active `Cache` instances.
    event.waitUntil(caches.keys().then((keys) => {
      // Delete all caches that aren't in the allow list:
      return Promise.all(keys.map((key) => {
        if (!cacheAllowList.includes(key)) {
          return caches.delete(key);
        }
      }));
    }));
  });
