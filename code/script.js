function toggle () {
  this.classList.toggle("open")
}

document.getElementById("accordion").onclick = toggle

const API_KEY = "449422936ab75f7bef9649f4cff24200";
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=lecorbusier&format=json&nojsoncallback=1`

const loader = document.querySelector("#loader");

let displayLoader = () => {
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
}

let hideLoader = () => {
  loader.classList.remove("display");
}

const showGallery = () => {
  displayLoader()
  fetch(
    API_URL
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hideLoader()
      data.photos.photo.map((gallery) => {
        const id = gallery.id;
        const serverId = gallery.server;
        const secret = gallery.secret;
        container.innerHTML += `<a href="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg"><img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg" alt="images of Olafur Eliasson"/></a>`;
      });
    })
    .catch((err) => {
      document.getElementById("gallery").innerHTML = `<h1>Sorry</h1><p>We got nothing to show. Come back later!</p>`
      console.log("caught error", err);
    });

    const container = document.getElementById("gallery");
  }

  showGallery();