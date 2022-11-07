import { galleryItems } from './gallery-items.js';
// Change code below this line

const imageGalleryEl = document.querySelector('.gallery');

const galleryMarkup = onCreateImagesGallery(galleryItems);
imageGalleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

function onCreateImagesGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
         <img loading="lazy"
            class="gallery__image"
            src="${preview}" 
            alt="${description}" 
            width="354" height="240"
            />
</a>`;
    })
    .join('');
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
  closeText: '☣',
  scrollZoom: false,
});
