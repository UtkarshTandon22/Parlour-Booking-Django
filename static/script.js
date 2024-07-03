document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Appointment booked successfully!');
        form.reset();
    });
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const galleryContainer = document.querySelector('.gallery-container');
  const images = galleryContainer.querySelectorAll('img');
  const imageWidth = 16.5; // Each image width is 16.5% of the container width (for 6 images per row)
  let currentIndex = 0; // Track current image index for slideshow

  const slideshowInterval = 1000; // Interval in milliseconds (2 seconds) - adjust as needed
  let slideshowTimer; // Timer for automatic slideshow

  function slideNext() {
    currentIndex++;
    if (currentIndex >= images.length-3) {
      currentIndex = 0; // Reset index to loop back to the first image
      galleryContainer.style.transition = 'none'; // Remove transition temporarily to jump back seamlessly
      setTimeout(() => {
        galleryContainer.style.transition = 'transform 0.5s ease-in-out'; // Restore transition after reset
      }, 50); // 50 milliseconds delay to ensure transition is removed before restoring
    }
    updateSlide();
  }

  function updateSlide() {
    const newPosition = -currentIndex * imageWidth;
    galleryContainer.style.transform = `translateX(${newPosition}%)`;
  }

  function startSlideshow() {
    slideshowTimer = setInterval(slideNext, slideshowInterval);
  }

  function stopSlideshow() {
    clearInterval(slideshowTimer);
  }

  // Start slideshow automatically
  startSlideshow();

  // Pause slideshow on hover
  galleryContainer.addEventListener('mouseenter', stopSlideshow);
  galleryContainer.addEventListener('mouseleave', startSlideshow);

  updateSlide(); // Initial slide setup

  // Previous and Next buttons event listeners
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  prevBtn.addEventListener('click', function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1; // Loop back to the last image
      galleryContainer.style.transition = 'none'; // Remove transition temporarily to jump back seamlessly
      setTimeout(() => {
        galleryContainer.style.transition = 'transform 0.5s ease-in-out'; // Restore transition after reset
      }, 50); // 50 milliseconds delay to ensure transition is removed before restoring
    }
    updateSlide();
    stopSlideshow(); // Stop auto slideshow when manually navigating
  });

  nextBtn.addEventListener('click', function() {
    slideNext();
    stopSlideshow(); // Stop auto slideshow when manually navigating
  });
});
