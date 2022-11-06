import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItemEl = document.querySelectorAll('.gallery__item');

const imageMarkup = createImageItem(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', imageMarkup);

function createImageItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img loading="lazy"
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryEl.addEventListener('click', onImageClick);

function onImageClick(event) {
  event.preventDefault();

  const urlBigImage = event.target.getAttribute('data-source');

  const instance = basicLightbox.create(`
      <img src="${urlBigImage}" >
  `);

  instance.show();
}

// v2
// galleryEl.onclick = event => {
//   event.preventDefault();
//   const urlBigImage = event.target.getAttribute('data-source');

//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="${urlBigImage}">
// 	`
//     )
//     .show();
// };
