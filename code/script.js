
const galleryFunction = () => {
  const container = document.getElementById("gallery");
  
  fetch(
    `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=449422936ab75f7bef9649f4cff24200&tags=catsl&format=json&nojsoncallback=1`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.photos.photo.map((gallery) => {
        const id = gallery.id;
        const serverId = gallery.server;
        const secret = gallery.secret;
        container.innerHTML += `<img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg"/>`;
      });
    })
    .catch((err) => {
      console.log("caught error", err);
    });
  }

  galleryFunction();
