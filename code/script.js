const container = document.getElementById("gallery");

fetch(
  `https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=449422936ab75f7bef9649f4cff24200&format=json&nojsoncallback=1`
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.photos.photo.map((gallery) => {
      const id = gallery.id;
      const serverId = gallery.server;
      const secret = gallery.secret;
      container.innerHTML += `<article><img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg"/></article>`;
    });
  })
  .catch((err) => {
    console.log("caught error", err);
  });
