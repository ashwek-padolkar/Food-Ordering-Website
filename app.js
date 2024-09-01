let offersIndex = 0;

function moveOffers(n) {
  const offers = document.querySelectorAll('.offer-img');
  const offersSlider = document.querySelector('.offers-slider');
  
  offersIndex += n;
  if (offersIndex < 0) {
    offersIndex = offers.length - 1;
  } else if (offersIndex >= offers.length) {
    offersIndex = 0;
  }
  
  const offersWidth = offers[0].offsetWidth;
  offersSlider.style.transform = `translateX(${-offersWidth * offersIndex}px)`;
}

// Recalculate the width of offersWidth when window size changes
window.addEventListener('resize', () => {
  const offersSlider = document.querySelector('.offers-slider');
  const offersWidth = document.querySelector('.offer-img').offsetWidth;
  offersSlider.style.transform = `translateX(${-offersWidth * offersIndex}px)`;
});


let testimonialIndex = 0;

function moveTestimonial(n) {
  const testimonials = document.querySelectorAll('.testimonial');
  const slider = document.querySelector('.testimonial-slider');
  const testimonialWidth = testimonials[0].offsetWidth;

  testimonialIndex += n;
  if (testimonialIndex < 0) {
    testimonialIndex = testimonials.length - 1;
  } else if (testimonialIndex >= testimonials.length) {
    testimonialIndex = 0;
  }

  slider.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
}

window.addEventListener('resize', () => {
  // Recalculate the width of testimonialWidth when window size changes
  const testimonials = document.querySelectorAll('.testimonial');
  const slider = document.querySelector('.testimonial-slider');
  const testimonialWidth = testimonials[0].offsetWidth;
  
  slider.style.transform = `translateX(${-testimonialWidth * testimonialIndex}px)`;
});


// Category
function filterItems(category) {
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    if (item.id === category) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.category');

  categories.forEach(category => {
    category.addEventListener('click', () => {
      // Remove the active class from all categories
      categories.forEach(cat => cat.classList.remove('active'));

      // Add the active class to the clicked category
      category.classList.add('active');
    });
  });
});