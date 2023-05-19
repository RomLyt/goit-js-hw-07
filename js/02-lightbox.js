import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');

// ==========
const markup = galleryItems
  .map((item) => `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img class="gallery__image" src="${item.preview}" alt="${item.description}"></a></li>`)
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);
// ==========

new SimpleLightbox('.gallery__link', {
    captionSelector: 'img',
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
