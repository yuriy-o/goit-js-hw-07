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

// imageGalleryEl.addEventListener('click', onModalOpen);

// function onModalOpen(e) {
//   e.preventDefault();

//   console.log('e', e);
//   console.log('e.target', e.target);
//   console.log('e.path', e.path);
//   console.log('e.path', e.target.classList.contains('gallery__image'));
// }

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});
gallery.on('show.simplelightbox', function () {
  // do something…
});

