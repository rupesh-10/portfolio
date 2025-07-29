// Theme-specific content for Batman and Superman themes
const themeContent = {
  batman: {
    // Home Section
    title: "I'm Rupesh, The Code Knight",
    subtitle: "Gotham's Full-Stack Guardian",
    description: "When websites are in danger and bugs roam the digital streets, they call me. Armed with JavaScript instead of Batarangs and powered by caffeine instead of vengeance, I protect the web from terrible UX and slow loading times.",
    contactButton: "Signal Me",
    
    // About Section  
    aboutTitle: "About The Dark Developer",
    aboutDescription: "By day, I'm a mild-mannered developer from Nepal. By night, I become... well, still a developer, just with more coffee. Unlike Bruce Wayne, my only secret identity is my GitHub commits at 3 AM. I fight crime against poor code quality and bring justice to broken responsive designs.",
    cvButton: "Download My Bat-CV",
    
    // Services Section
    servicesTitle: "My Bat-Gadgets",
    servicesSubtitle: "Every Hero Needs The Right Tools",
    
    frontendTitle: "The Bat-Interface",
    frontendDescription: "Creating user interfaces so smooth, even the Joker would approve. From responsive designs that work on every device in Wayne Manor to animations smoother than the Batmobile's engine.",
    
    backendTitle: "The Bat-Cave Server",
    backendDescription: "Building server architectures more secure than the Batcave itself. APIs so reliable, even Alfred would trust them to run Wayne Enterprises while Bruce is away.",
    
    mobileTitle: "Bat-Mobile Apps",
    mobileDescription: "Developing mobile apps faster than the Batmobile (but probably not as cool). Cross-platform solutions that work whether you're in Gotham or Arkham.",
    
    // Projects Section
    projectsTitle: "The Bat-Portfolio",
    projectsSubtitle: "My Greatest Digital Victories",
    
    // Testimonials Section
    testimonialsTitle: "Gotham's Reviews",
    testimonialsSubtitle: "What Citizens Say About The Dark Developer",
    
    // Contact Section
    contactTitle: "Send The Bat-Signal",
    contactSubtitle: "Got a project that needs saving?",
    
    // Footer
    footerCopy: "© {year} The Code Knight. All rights reserved. No bats were harmed in the making of this website.",
    
    // Experience
    experienceTitle: "Years Fighting Bugs",
    successTitle: "Villain Defeat Rate"
  },
  
  superman: {
    // Home Section
    title: "I'm Rupesh, The Man of Code",
    subtitle: "Metropolis's Super Developer",
    description: "Faster than a slow database query, more powerful than a crashed server, able to debug complex applications in a single session! I'm not from Krypton, but my code might as well be from another planet (in a good way).",
    contactButton: "Save The Day",
    
    // About Section
    aboutTitle: "About The Man of Code",
    aboutDescription: "Unlike Clark Kent, I don't need glasses to see bugs in code (though I do wear them for style). Born in Nepal, not Krypton, but my passion for creating super-powered web applications is out of this world. My only weakness? Poorly documented APIs and kryptonite (mainly the APIs).",
    cvButton: "Download Super-CV",
    
    // Services Section
    servicesTitle: "My Super Powers",
    servicesSubtitle: "With Great Code Comes Great Responsibility",
    
    frontendTitle: "Super-Vision Interfaces",
    frontendDescription: "Creating web interfaces with X-ray vision into user needs. Designs so super, they make Lois Lane swoon and even Lex Luthor would have to admit they're pretty good.",
    
    backendTitle: "Fortress of Code-itude",
    backendDescription: "Building backend systems stronger than Superman's fortress. Servers that can handle more traffic than Metropolis at rush hour, with security tighter than Superman's cape.",
    
    mobileTitle: "Super-Mobile Solutions",
    mobileDescription: "Mobile apps that load faster than a speeding bullet and are more reliable than Superman saving the day. Available on both iOS and Android (no discrimination here).",
    
    // Projects Section
    projectsTitle: "Super Project Gallery",
    projectsSubtitle: "Saving The Digital World, One App At A Time",
    
    // Testimonials Section
    testimonialsTitle: "Metropolis Reviews",
    testimonialsSubtitle: "What Heroes and Citizens Say About The Man of Code",
    
    // Contact Section
    contactTitle: "Call For Super Help",
    contactSubtitle: "Need a hero for your next project?",
    
    // Footer
    footerCopy: "© {year} The Man of Code. All rights reserved. No phone booths were used as development environments.",
    
    // Experience
    experienceTitle: "Years of Super Service",
    successTitle: "World-Saving Success Rate"
  }
};

// Function to update content based on theme
function updateThemeContent(theme) {
  const content = themeContent[theme];
  if (!content) return;
  
  // Update Home Section
  const homeTitle = document.querySelector('.home-data-title');
  const homeSubtitle = document.querySelector('.home-data-subtitle');
  const homeDescription = document.querySelector('.home-data-description');
  const contactButton = document.querySelector('.home-data .button');
  
  if (homeTitle) homeTitle.textContent = content.title;
  if (homeSubtitle) homeSubtitle.textContent = content.subtitle;
  if (homeDescription) homeDescription.textContent = content.description;
  if (contactButton) {
    const buttonText = contactButton.querySelector('i') ? 
      content.contactButton + ' ' : content.contactButton;
    contactButton.innerHTML = `${content.contactButton} <i data-lucide="send"></i>`;
  }
  
  // Update About Section
  const aboutTitle = document.querySelector('#about .section-title');
  const aboutDescription = document.querySelector('.about-description');
  const cvButton = document.querySelector('.about-buttons .button');
  
  if (aboutTitle) aboutTitle.textContent = content.aboutTitle;
  if (aboutDescription) aboutDescription.textContent = content.aboutDescription;
  if (cvButton) {
    cvButton.innerHTML = `${content.cvButton} <i data-lucide="download"></i>`;
  }
  
  // Update Services Section
  const servicesTitle = document.querySelector('#services .section-title');
  const servicesSubtitle = document.querySelector('#services .section-subtitle');
  
  if (servicesTitle) servicesTitle.textContent = content.servicesTitle;
  if (servicesSubtitle) servicesSubtitle.textContent = content.servicesSubtitle;
  
  // Update Frontend Accordion
  const frontendTitle = document.querySelector('#headingFrontend .accordion-title');
  const frontendDescription = document.querySelector('#collapseFrontend .service-description');
  
  if (frontendTitle) frontendTitle.textContent = content.frontendTitle;
  if (frontendDescription) frontendDescription.textContent = content.frontendDescription;
  
  // Update Backend Accordion
  const backendTitle = document.querySelector('#headingBackend .accordion-title');
  const backendDescription = document.querySelector('#collapseBackend .service-description');
  
  if (backendTitle) backendTitle.textContent = content.backendTitle;
  if (backendDescription) backendDescription.textContent = content.backendDescription;
  
  // Update Mobile Accordion
  const mobileTitle = document.querySelector('#headingMobile .accordion-title');
  const mobileDescription = document.querySelector('#collapseMobile .service-description');
  
  if (mobileTitle) mobileTitle.textContent = content.mobileTitle;
  if (mobileDescription) mobileDescription.textContent = content.mobileDescription;
  
  // Update Projects Section
  const projectsTitle = document.querySelector('#projects .section-title');
  const projectsSubtitle = document.querySelector('#projects .section-subtitle');
  
  if (projectsTitle) projectsTitle.textContent = content.projectsTitle;
  if (projectsSubtitle) projectsSubtitle.textContent = content.projectsSubtitle;
  
  // Update Testimonials Section
  const testimonialsTitle = document.querySelector('#testimonials .section-title');
  const testimonialsSubtitle = document.querySelector('#testimonials .section-subtitle');
  
  if (testimonialsTitle) testimonialsTitle.textContent = content.testimonialsTitle;
  if (testimonialsSubtitle) testimonialsSubtitle.textContent = content.testimonialsSubtitle;
  
  // Update Contact Section
  const contactTitle = document.querySelector('#contact .section-title');
  const contactSubtitle = document.querySelector('#contact .section-subtitle');
  
  if (contactTitle) contactTitle.textContent = content.contactTitle;
  if (contactSubtitle) contactSubtitle.textContent = content.contactSubtitle;
  
  // Update About Stats
  const experienceTitle = document.querySelector('.about-card-title');
  const successScoreCard = document.querySelectorAll('.about-card-title')[2];
  
  if (experienceTitle) experienceTitle.textContent = content.experienceTitle;
  if (successScoreCard) successScoreCard.textContent = content.successTitle;
  
  // Update Footer
  const footerCopy = document.querySelector('.footer-copy');
  if (footerCopy) {
    const currentYear = new Date().getFullYear();
    const footerText = content.footerCopy.replace('{year}', currentYear);
    footerCopy.innerHTML = footerText;
  }
  
  // Reinitialize Lucide icons after content update
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Initialize theme content on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme or default to batman
  const savedTheme = localStorage.getItem('selectedTheme') || 'batman';
  updateThemeContent(savedTheme);
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { themeContent, updateThemeContent };
}
