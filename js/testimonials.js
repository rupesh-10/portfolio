// Testimonials data with consistent content
const testimonialsData = [
  {
    id: 1,
    name: "Jeff R.",
    avatar: "https://globalenglishcampus.com/images/teams/globalenglishcampus.com/en/1653736687.png",
    rating: 5,
    review: "Rupesh is a very skilled front end technician who has supported our learning management software development for over a year. He is also a gentleman, he communicates well, and he always performs highly above expectations, contributing his own initiative and creative care into what he does. Highly recommended.",
    position: "CEO, English Campus"
  },
  {
    id: 2,
    name: "Jason G.",
    rating: 5,
    review: "Rupesh was amazing to work with throughout the project. He has a fantastic ability to resolve any challenges that arise. He has excellent communication skills, and I highly recommend him for any project.",
    position: "CEO, IT Pro Tech"
  },
  {
    id: 3,
    name: "Mathias S.",
    rating: 5,
    review: "Nice working with Rupesh, Quick response and complete instructions with proper description and documentation. Highly recommend working with him.",
    position: "CEO, DVX Games"
  }
];

// Function to generate star rating HTML
function generateStarRating(rating) {
  let starsHTML = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      starsHTML += '<i data-lucide="star" class="star filled"></i>';
    } else {
      starsHTML += '<i data-lucide="star" class="star"></i>';
    }
  }
  return starsHTML;
}

// Function to generate testimonial cards
function generateTestimonialCards() {
  const testimonialsGrid = document.querySelector('.testimonials-grid');
  
  if (!testimonialsGrid) {
    console.error('Testimonials grid container not found');
    return;
  }

  // Clear existing content
  testimonialsGrid.innerHTML = '';

  // Generate testimonial cards
  testimonialsData.forEach(testimonial => {
    const testimonialCard = createTestimonialCard(testimonial);
    testimonialsGrid.appendChild(testimonialCard);
  });

  // Initialize Lucide icons after cards are created
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Function to create individual testimonial card
function createTestimonialCard(testimonial) {
  const testimonialCard = document.createElement('div');
  testimonialCard.className = 'testimonial-card';
  
  // Use default avatar if none provided
  const defaultAvatar = "img/avatar.png"
  const avatarSrc = testimonial.avatar || defaultAvatar;
  
  // Generate star rating
  const starsHTML = generateStarRating(testimonial.rating);

  testimonialCard.innerHTML = `
    <div class="testimonial-content">
      <div class="testimonial-header">
        <div class="testimonial-avatar">
          <img src="${avatarSrc}" alt="${testimonial.name}" onerror="this.src='${defaultAvatar}'" />
        </div>
        <div class="testimonial-info">
          <h3 class="testimonial-name">${testimonial.name}</h3>
          <p class="testimonial-position">${testimonial.position}</p>
          <div class="testimonial-rating">
            ${starsHTML}
          </div>
        </div>
      </div>
      <div class="testimonial-review">
        <i data-lucide="quote" class="testimonial-quote-icon"></i>
        <p class="testimonial-text">${testimonial.review}</p>
      </div>
    </div>
  `;

  return testimonialCard;
}

// Initialize testimonials when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  generateTestimonialCards();
});

// Export functions for external use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    testimonialsData,
    generateTestimonialCards
  };
}
