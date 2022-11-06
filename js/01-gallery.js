import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

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

galleryEl.addEventListener('click', onModalOpen);

let instance = null;

function onModalOpen(event) {
  event.preventDefault();
  window.addEventListener('keydown', onEscKeyPress);

  const urlBigImage = event.target.getAttribute('data-source');

  instance = basicLightbox.create(`
  <img src="${urlBigImage}" >
  `);

  instance.show();
}

//закриває модалку по Escape
function onEscKeyPress(event) {
  window.removeEventListener('keydown', onEscKeyPress);

  if (event.code === `Escape`) {
    instance.close();
  }
}
