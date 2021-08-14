// Accordion
const accordionButton = document.getElementById("accordion-container");
const plusContainer = document.getElementById("expand-symbol");
plusContainer.innerHTML += "+";
accordionButton.onclick = () => {
  const infoContainer = accordionButton.nextElementSibling;
  infoContainer.classList.toggle("active");
  plusContainer.classList.toggle("remove");
};

// Loader
const loader = document.querySelector("#loader");

const displayLoader = () => {
  loader.classList.add("display");
};

const hideLoader = () => {
  loader.classList.remove("display");
};

// Flickr Gallery
const API_KEY = "449422936ab75f7bef9649f4cff24200";
const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&tags=lecorbusier&per_page=30&format=json&nojsoncallback=1`;

const galleryContainer = document.getElementById("gallery");
const errorMessage = "Sorry, no photos to show. Come back later!";

const showGallery = () => {
  displayLoader();
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // eslint-disable-next-line array-callback-return
      data.photos.photo.map((gallery) => {
        const { id } = gallery;
        const { server } = gallery;
        const { secret } = gallery;
        galleryContainer.innerHTML += `<img src="https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg" alt="image of Le Corbusier"/>`;
      });
    })
    .catch((error) => {
      document.getElementById("gallery").innerHTML = errorMessage;
      // eslint-disable-next-line no-console
      console.warn("caught error", error);
    })
    .finally(() => {
      hideLoader();
    });
};

showGallery();

// Scroll to top nav
const scrollButton = document.getElementById("topScrollButton");

const showButton = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

window.onscroll = () => {
  showButton();
};

const topScrollFunction = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, Edge
};
topScrollFunction();
