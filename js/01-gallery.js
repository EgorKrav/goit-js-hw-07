import { galleryItems } from "./gallery-items.js";
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

galleryList.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${target.dataset.source}" >`,
    {
      onClose: () => {
        document.removeEventListener("keydown", onEscapePress);
      },
      onShow: () => {
        document.addEventListener("keydown", onEscapePress);
      },
    }
  );

  instance.show();

  function onEscapePress(event) {
    if (event.key === "Escape") {
      instance.close();
    }
  }
});
