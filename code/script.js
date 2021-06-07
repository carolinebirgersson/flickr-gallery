// Accordion
const accordionButton = document.getElementById("accordion-button")
const plusContainer = document.getElementById("plus")
plusContainer.innerHTML += `<p>+</p>`;

accordionButton.onclick = () => {
  const infoContainer = accordionButton.nextElementSibling
  infoContainer.classList.toggle("active")
  plusContainer.classList.toggle("remove")
}

// Loader
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

// Flickr Gallery
const API_KEY = "449422936ab75f7bef9649f4cff24200";
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=lecorbusier&format=json&nojsoncallback=1`
const errorMessage = "No photos to show. Come back later!";

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
        container.innerHTML += `<img src="https://live.staticflickr.com/${serverId}/${id}_${secret}_w.jpg" alt="images of Le Corbusier"/>`;
      });
    })
    .catch((err) => {
      document.getElementById("gallery").innerHTML = `${errorMessage}`
      console.log("caught error", err);
    });

    const container = document.getElementById("gallery");
  }

  showGallery();

  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge
}