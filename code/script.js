const API_KEY = "449422936ab75f7bef9649f4cff24200";
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=olafureliasson&format=json&nojsoncallback=1`

const loader = document.querySelector("#loading");

let displayLoading = () => {
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
}

let hideLoading = () => {
  loader.classList.remove("display");
}

const showGallery = () => {
  displayLoading()
  fetch(
    API_URL
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      hideLoading()
      data.photos.photo.map((gallery) => {
        const id = gallery.id;
        const serverId = gallery.server;
        const secret = gallery.secret;
        container.innerHTML += `<img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg"/>`;
      });
    })
    .catch((err) => {
      document.getElementById("gallery").innerHTML = `<h1>Sorry</h1><p>We got nothing to show. Please try again!</p>`
      console.log("caught error", err);
    });

    const container = document.getElementById("gallery");
  }

  showGallery();
