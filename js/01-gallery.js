import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
              <a class="gallery__link" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
              </a>
            </li>`;
  })
  .join("");

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

const galleryLinks = document.querySelectorAll(".gallery__link");

galleryLinks.forEach((link) => {
  link.classList.add("lightbox-link");
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}">`
    );
    instance.show();

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        instance.close();
      }
    });
  });
});

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("lightbox-link")) {
    basicLightbox.close();
  }
});