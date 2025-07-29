/* THEME SWITCHING */
const themeButtons = document.querySelectorAll('.theme-btn');
const body = document.body;

// Load saved theme from localStorage
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
  body.className = savedTheme;
  // Set active button
  themeButtons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.theme === savedTheme.replace('-theme', '')) {
      btn.classList.add('active');
    }
  });
  // Update logo for saved theme
  updateLogo(savedTheme.replace('-theme', ''));
  
  // Update theme content if function is available
  if (typeof updateThemeContent === 'function') {
    updateThemeContent(savedTheme.replace('-theme', ''));
  }
} else {
  // Default to batman theme
  body.className = 'batman-theme';
  document.querySelector('[data-theme="batman"]').classList.add('active');
  updateLogo('batman');
  
  // Set default theme content
  if (typeof updateThemeContent === 'function') {
    updateThemeContent('batman');
  }
}

// Theme switch functionality
themeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const theme = button.dataset.theme;
    const themeClass = `${theme}-theme`;
    
    // Remove all theme classes
    body.className = body.className.replace(/\w*-theme/g, '').trim();
    
    // Add new theme class
    body.classList.add(themeClass);
    
    // Update blob shape based on theme
    updateBlobShape(theme);
    
    // Update logo based on theme
    updateLogo(theme);
    
    // Update theme content
    if (typeof updateThemeContent === 'function') {
      updateThemeContent(theme);
    }
    
    // Update active button
    themeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Save theme to localStorage
    localStorage.setItem('portfolio-theme', themeClass);
    localStorage.setItem('selectedTheme', theme);
  });
});

// Function to update logo based on theme
function updateLogo(theme) {
  const logoImg = document.getElementById('nav-logo');
  const footerLogoImg = document.getElementById('footer-logo');
  
  if (logoImg) {
    if (theme === 'batman') {
      logoImg.src = 'img/batman-logo.png';
      logoImg.alt = 'Batman Logo';
      // Set Batman logo sizes for different screen sizes
      if (window.innerWidth <= 480) {
        logoImg.style.height = '30px';
      } else if (window.innerWidth <= 768) {
        logoImg.style.height = '30px';
      } else {
        logoImg.style.height = '30px';
      }
    } else if (theme === 'superman') {
      logoImg.src = 'img/superman-logo.png';
      logoImg.alt = 'Superman Logo';
      // Set Superman logo sizes for different screen sizes (10px larger)
      if (window.innerWidth <= 480) {
        logoImg.style.height = '40px';
      } else if (window.innerWidth <= 768) {
        logoImg.style.height = '45px';
      } else {
        logoImg.style.height = '45px';
      }
    }
  }
  
  // Update footer logo
  if (footerLogoImg) {
    if (theme === 'batman') {
      footerLogoImg.src = 'img/batman-logo.png';
      footerLogoImg.alt = 'Batman Logo';
    } else if (theme === 'superman') {
      footerLogoImg.src = 'img/superman-logo.png';
      footerLogoImg.alt = 'Superman Logo';
    }
  }
}

// Function to update blob shape based on theme
function updateBlobShape(theme) {
  const blobShape = document.getElementById('blob-shape');
  const blobFill = document.getElementById('blob-fill');
  const blobImg = document.querySelector('.home-blob-img');
  
  if (theme === 'batman') {
    // Batman angular/cape-inspired shape - more balanced
    const batmanPath = 'M100 10 L130 20 L150 35 L170 55 L180 80 L175 105 L165 130 L150 150 L130 165 L100 175 L70 165 L50 150 L35 130 L25 105 L20 80 L30 55 L50 35 L70 20 Z';
    
    if (blobShape) blobShape.setAttribute('d', batmanPath);
    if (blobFill) blobFill.setAttribute('d', batmanPath);
    
    // Center image for Batman shape
    if (blobImg) {
      blobImg.setAttribute('x', '25');
      blobImg.setAttribute('y', '20');
    }
  } else if (theme === 'superman') {
    // Superman shield/diamond shape - more proportional
    const supermanPath = 'M100 15 L140 35 L165 65 L175 100 L165 135 L140 165 L100 175 L60 165 L35 135 L25 100 L35 65 L60 35 Z';
    
    if (blobShape) blobShape.setAttribute('d', supermanPath);
    if (blobFill) blobFill.setAttribute('d', supermanPath);
    
    // Center image for Superman shape
    if (blobImg) {
      blobImg.setAttribute('x', '25');
      blobImg.setAttribute('y', '20');
    }
  }
}

// Initialize blob shape on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    const theme = savedTheme.replace('-theme', '');
    updateBlobShape(theme);
    updateLogo(theme);
  } else {
    updateBlobShape('batman'); // Default to batman
    updateLogo('batman');
  }
});

// Update logo sizes on window resize
window.addEventListener('resize', () => {
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    const theme = savedTheme.replace('-theme', '');
    updateLogo(theme);
  } else {
    updateLogo('batman');
  }
});

/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle");

/* MENU SHOW/HIDE */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
    
    // Toggle body scroll lock
    if (navMenu.classList.contains('show-menu')) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    
    // Toggle icon between menu and close
    const icon = navToggle.querySelector('i');
    if (icon) {
      if (navMenu.classList.contains('show-menu')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      
      // Reinitialize lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  });
}

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
  
  // Remove body scroll lock
  document.body.classList.remove('menu-open');
  
  // Reset toggle icon to menu
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle) {
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', 'menu');
      
      // Reinitialize lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navMenu && navToggle && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('show-menu');
    
    // Remove body scroll lock
    document.body.classList.remove('menu-open');
    
    // Reset toggle icon to menu
    const icon = navToggle.querySelector('i');
    if (icon) {
      icon.setAttribute('data-lucide', 'menu');
      
      // Reinitialize lucide icons
      if (typeof lucide !== 'undefined') {
        lucide.createIcons();
      }
    }
  }
});

/* ACCORDION SKILLS */
const skillsContent = document.getElementsByClassName(
    "skills-container-content"
  ),
  skillsHeader = document.querySelectorAll(".skills-container-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-container-content skills-close";
  }
  if (itemClass === "skills-container-content skills-close") {
    this.parentNode.className = "skills-container-content skills-open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/* QUALIFICATION TABS */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });
    target.classList.add("qualification-active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });
    tab.classList.add("qualification-active");
  });
});

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}

/* SHOW SCROLL UP */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}

/* DARK LIGHT THEME */
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "fa-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
    iconTheme
  );
}


// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key from EmailJS
})();

// Contact Form
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", sendEmail);
}

function sendEmail(e) {
  e.preventDefault();
  
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  
  // Show loading state
  submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin button-icon"></i>';
  submitBtn.disabled = true;
  
  // Get form data
  let name = document.getElementById("name-input").value;
  let email = document.getElementById("email-input").value;
  let subject = document.getElementById("subject-input").value;
  let message = document.getElementById("message-input").value;

  // Prepare template parameters
  const templateParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
    to_email: 'rupeshdhakal2@gmail.com'
  };

  // Send email using EmailJS
  emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      
      // Show success notification
      showNotification(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
      
      // Reset form
      form.reset();
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    })
    .catch(function(error) {
      console.log('FAILED...', error);
      
      // Show error notification
      showNotification('Failed to send message. Please try again or contact me directly.', 'error');
      
      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
}

// Notification function
function showNotification(message, type) {
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close">&times;</button>
    </div>
  `;
  
  // Add notification styles
  notification.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    z-index: 10000;
    background: ${type === 'success' ? '#10b981' : '#ef4444'};
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 400px;
    font-family: var(--body-font);
  `;
  
  notification.querySelector('.notification-content').style.cssText = `
    display: flex;
    align-items: center;
    gap: 0.5rem;
  `;
  
  notification.querySelector('.notification-close').style.cssText = `
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: auto;
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  }, 5000);
  
  // Close button functionality
  notification.querySelector('.notification-close').addEventListener('click', () => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 300);
  });
}

/* CALCULATE YEARS OF EXPERIENCE */
function calculateExperience() {
  const startYear = 2020;
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - startYear;
  
  const experienceElement = document.getElementById('experience-years');
  if (experienceElement) {
    experienceElement.textContent = `${experienceYears}+`;
    console.log(`Experience calculated: ${experienceYears}+ years`);
  }
}

// Calculate experience when DOM is loaded and also when script loads
document.addEventListener('DOMContentLoaded', () => {
  calculateExperience();
});

// Also try to calculate immediately in case DOM is already loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', calculateExperience);
} else {
  calculateExperience();
}