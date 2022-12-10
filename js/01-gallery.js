import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = createGalleryItems(galleryItems);
addMarkup(galleryRef, "afterbegin", galleryMarkup);

galleryRef.addEventListener("click", handlerGalleryClick);

// Create markup
function createGalleryItems(items = []) {
  return items
    .map((item) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}"/>
        </a>
    </div>`;
    })
    .join("");
}

// Add markup to DOM
function addMarkup(parentRef, position, markup) {
  parentRef.insertAdjacentHTML(position, markup);
}

// Use basicLightbox when user click on gallery
function handlerGalleryClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;

  const clickedImgSource = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img class="gallery__image" src="${clickedImgSource}" alt="${event.target.alt}"/>`
  );
  instance.show();

  document.addEventListener("keydown", closeModalByEscape(instance));

  if (!instance.visible()) {
    document.removeEventListener("keydown", closeModalByEscape(instance));
  }
}

// Close the modal window using keyboard
function closeModalByEscape(modalInstance) {
  return function (event) {
    if (event.code === "Escape") modalInstance.close();
  };
}
