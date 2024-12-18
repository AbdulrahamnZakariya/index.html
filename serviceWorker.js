const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/بلاك.jpeg",
  "/images/لاتيه.jpeg",
  "/images/turkish.jpeg",
  "/images/frab.jpeg",
  "/images/breate.jpg",
  "/images/vitea.jpeg",
  "/images/invontore.jpeg",
  "/images/arabic.jpeg",
  "/images/OIP.jpeg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })