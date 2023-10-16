import { galleryItems } from './gallery-items.js';


const list = document.querySelector(".gallery");

list.insertAdjacentHTML("beforeend", createMarkup(galleryItems));
// delegating
list.addEventListener("click", handleClick);
let instance = null; 

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) => `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
    )
    .join("");
}
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const bigImUrl = event.target.dataset.source;
  const instance = basicLightbox.create(
    `
    <img
      src="${bigImUrl}"
      alt="${event.target.alt}"
    />`,

  );
  instance.show();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && instance) {
      instance.close();
    }
  });
}
