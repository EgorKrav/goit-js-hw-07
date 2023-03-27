import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
              </a>
            </li>`;
  })
  .join('');

galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

const onGalleryItemClick = (event) => {
  event.preventDefault();
  const modal = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}" />`
  );
  modal.show();
};

galleryList.addEventListener("click", onGalleryItemClick);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    basicLightbox.close();
  }
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("basicLightbox")) {
    basicLightbox.close();
  }
});