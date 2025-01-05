function showSidebar(){
  const sidebar = document.querySelector(".main-menu-1");
  sidebar.style.display = 'block';
}

function hideSidebar(){
  const sidebar = document.querySelector(".main-menu-1");
  sidebar.style.display = 'none';
}

// start accordion coding

// script.js
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = header.nextElementSibling;
        const icon = header.querySelector('.icon');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-content').forEach(content => {
            content.style.display = 'none';
            content.previousElementSibling.querySelector('.icon').textContent = '+';
        });

        // Open the clicked item if it was previously closed
        if (accordionContent.style.display === 'none' || accordionContent.style.display === '') {
            accordionContent.style.display = 'block';
            icon.textContent = '-';
        } else {
            accordionContent.style.display = 'none';
            icon.textContent = '+';
        }
    });
});


// image slider coding

const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots-container');

    let currentIndex = 0;
    const slidesPerView = 4;
    const totalSlides = slides.length;
    const totalGroups = Math.ceil(totalSlides / slidesPerView);

    // Create dots
    for (let i = 0; i < totalGroups; i++) {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function updateSlides() {
      // Calculate the transform percentage
      const transformValue = -currentIndex * (100 / slidesPerView);
      track.style.transform = `translateX(${transformValue}%)`;

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === Math.floor(currentIndex / slidesPerView));
      });

      // Update button states
      prevButton.style.opacity = currentIndex === 0 ? '0.5' : '1';
      prevButton.style.cursor = currentIndex === 0 ? 'default' : 'pointer';
      
      const lastPossibleIndex = totalSlides - slidesPerView;
      nextButton.style.opacity = currentIndex >= lastPossibleIndex ? '0.5' : '1';
      nextButton.style.cursor = currentIndex >= lastPossibleIndex ? 'default' : 'pointer';
    }

    function goToSlide(groupIndex) {
      currentIndex = groupIndex * slidesPerView;
      if (currentIndex > totalSlides - slidesPerView) {
        currentIndex = totalSlides - slidesPerView;
      }
      updateSlides();
    }

    function nextSlide() {
      if (currentIndex < totalSlides - slidesPerView) {
        currentIndex++;
        updateSlides();
      }
    }

    function prevSlide() {
      if (currentIndex > 0) {
        currentIndex--;
        updateSlides();
      }
    }

    // Event Listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Optional: Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    });

    // Initialize
    updateSlides();