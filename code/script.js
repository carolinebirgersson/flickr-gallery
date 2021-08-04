// Accordion
const accordionButton = document.getElementById("accordion-container")
const plusContainer = document.getElementById("expand-symbol")
plusContainer.innerHTML += `+`; //shows a "+" depending on when the the element can expand

accordionButton.onclick = () => {
  const infoContainer = accordionButton.nextElementSibling
  infoContainer.classList.toggle("active")
  plusContainer.classList.toggle("remove")
}

// Loader
const loader = document.querySelector("#loader");

const displayLoader = () => {
  loader.classList.add("display");
}

const hideLoader = () => {
  loader.classList.remove("display");
}

// Flickr Gallery
const API_KEY = "449422936ab75f7bef9649f4cff24200";
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=lecorbusier&per_page=30&format=json&nojsoncallback=1`

const galleryContainer = document.getElementById("gallery");
const errorMessage = "Sorry, no photos to show. Come back later!";

const showGallery = () => {
  displayLoader()
  fetch(
    API_URL
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.photos.photo.map((gallery) => {
        const id = gallery.id;
        const serverId = gallery.server;
        const secret = gallery.secret;
        galleryContainer.innerHTML += `<img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_b.jpg" alt="images of Le Corbusier"/>`;
      });
    })
    .catch((err) => {
      document.getElementById("gallery").innerHTML = errorMessage //använd inte ${} här, den används bara i en längre string. Ta bort och skriv bara error message eller lägg till h1 tag runt om.
      console.log("caught error", err);
    })
    .finally(() => {
      hideLoader();
    })
  }

  showGallery();

// Scroll to top nav
scrollButton = document.getElementById("topScrollButton");

const showButton = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

window.onscroll = () => {
  showButton()
};

const topScrollFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge
}