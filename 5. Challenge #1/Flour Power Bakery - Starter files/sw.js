const staticDevCoffee = "dev-coffee-site-v1";

//selects the data that needs to be stored in cache
const assets = ["/", "/index.html", "styles.css"];

//stores the data in cache
self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});
