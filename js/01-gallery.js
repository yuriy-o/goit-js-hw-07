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
      width="354" height="240"
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
  window.addEventListener('keydown', onEscKeyPress, { onse: true });

  const urlBigImage = event.target.getAttribute('data-source');
  // v2
  //   const urlBigImage = event.target.dataset.source;

  instance = basicLightbox.create(`
  <img src="${urlBigImage}" >
  `);

  instance.show();
}

//закриває модалку по Escape
function onEscKeyPress(event) {
  if (event.code === `Escape`) {
    instance.close();
  }

  //   замість видалення використовуємо додаткове налаштування слухача ↑→ { onse: true }
  //   window.removeEventListener('keydown', onEscKeyPress);
}
