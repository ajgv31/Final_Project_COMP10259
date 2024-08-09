// gallery.js
document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    var closeBtn = document.querySelector('.close');
    var galleryItems = document.querySelectorAll('.gallery-item');
    var currentIndex = 0;
    
    var images = Array.from(galleryItems).map(item => item.querySelector('img').src);
    
    function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
     }
    
    function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = ''; 
     }
    
    function showNext() {
     currentIndex = (currentIndex + 1) % images.length;
     lightboxImg.src = images[currentIndex];
     }
    
   function showPrev() {
     currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
     }
    
     galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
     openLightbox(index);
     });
    });
    
     closeBtn.addEventListener('click', closeLightbox);
    
    document.getElementById('next').addEventListener('click', showNext);
    document.getElementById('prev').addEventListener('click', showPrev);
    
     lightbox.addEventListener('click', function(e) {
     if (e.target === lightbox || e.target === closeBtn) {
     closeLightbox();
     }
  });
});
    
    