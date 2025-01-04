   document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".service-slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");

  let currentIndex = 0;
  const sliderItems = document.querySelectorAll(".slider-item");
  const totalSlides = sliderItems.length;
  const slideWidth = sliderItems[0].offsetWidth + 20; // Include gap

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateSlider();
    });
  });

  // Initial setup
  updateSlider();
});



function showSidebar(){
	const sidebar = document.querySelector(".header-sidebar");
	sidebar.style.display = 'block';
}

function hideSidebar(){
	const sidebar = document.querySelector(".header-sidebar");
	sidebar.style.display = 'none';
}

