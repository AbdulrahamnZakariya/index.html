const container = document.querySelector(".container")
const coffees = [
  { name: "black cofee", image: "images/بلاك.jpeg" },
  { name: "Lattee", image: "images/لاتيه.jpeg" },
  { name: "Turkish", image: "images/turkish.jpeg" },
  { name: "Frabbe Cofee", image: "images/frab.jpeg" },
  { name: " Beatae", image: "images/breate.jpg" },
  { name: " Vitae", image: "images/vitea.jpeg" },
  { name: "Inventore", image: "images/invontore.jpeg" },
  { name: "Arabic", image: "images/arabic.jpeg" },
  { name: "Accusantium", image: "images/OIP.jpeg" },
]

const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  
  document.addEventListener("DOMContentLoaded", showCoffees)
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
    
  }
  

