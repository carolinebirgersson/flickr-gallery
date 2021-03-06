/* eslint-disable no-unused-expressions */
// Accordion
const accordionButton = document.getElementById("accordion-container");
const plusContainer = document.getElementById("expand-symbol");
plusContainer.innerHTML += "+";

accordionButton.onclick = () => {
  const infoContainer = accordionButton.nextElementSibling;
  infoContainer.classList.toggle("active");
  plusContainer.classList.toggle("remove");

  const isActive = infoContainer.classList.contains("active");
  infoContainer.setAttribute("aria-expanded", isActive);
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

async function loadGallery() {
  displayLoader();
  return (await fetch(API_URL)).json();

  // const response = await fetch(API_URL);
  // const data = await response.json();

  // return data;
}

document.addEventListener("DOMContentLoaded", async () => {
  let data;

  try {
    data = await loadGallery();
  } catch (error) {
    document.getElementById("gallery").innerHTML = errorMessage;
    console.log("Caught error", error);
  } finally {
    hideLoader();
  }

  if (data) {
    data.photos.photo.forEach((gallery) => {
      const { id } = gallery;
      const { server } = gallery;
      const { secret } = gallery;

      galleryContainer.innerHTML += `<img src="https://live.staticflickr.com/${server}/${id}_${secret}_b.jpg" alt="image of Le Corbusier"/>`;
    });
  }
});

// Scroll to top nav
const scrollButton = document.getElementById("topScrollButton");

scrollButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

window.onscroll = () => {
  window.scrollY > 500
    ? (scrollButton.style.display = "block")
    : (scrollButton.style.display = "none");
};
