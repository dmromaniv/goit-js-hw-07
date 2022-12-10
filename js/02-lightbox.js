import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryItems(galleryItems);
addMarkup(galleryRef, "afterbegin", galleryMarkup);

// Create markup
function createGalleryItems(items = []) {
  return items
    .map((item) => {
      return `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
            </a>`;
    })
    .join("");
}

// Add markup to DOM
function addMarkup(parentRef, position, markup) {
  parentRef.insertAdjacentHTML(position, markup);
}

// Init SimpleLightbox
const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
