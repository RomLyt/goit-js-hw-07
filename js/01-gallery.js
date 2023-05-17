import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

console.log(gallery)

const markup = galleryItems
  .map((item) => `<li><img class="gallery__image" src=${item.preview} alt=${item.description}></li>`)
  .join("");

console.log(markup)

gallery.insertAdjacentHTML("beforeend", markup);