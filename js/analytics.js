// Google Analytics 4 Enhanced Tracking for Portfolio
// This file contains all the analytics tracking functions for the portfolio

// Initialize analytics tracking when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeAnalyticsTracking();
});

function initializeAnalyticsTracking() {
  // Track initial page load
  if (typeof gtag !== 'undefined') {
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });
  }

  // Set up intersection observer for section tracking
  setupSectionTracking();
  
  // Set up click tracking
  setupClickTracking();
  
  // Set up form tracking
  setupFormTracking();
  
  // Set up scroll tracking
  setupScrollTracking();
}

// Track when sections come into view
function setupSectionTracking() {
  const sections = document.querySelectorAll('section[id]');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.id;
        if (typeof trackSectionView !== 'undefined') {
          trackSectionView(sectionName);
        }
      }
    });
  }, {
    threshold: 0.5 // Track when 50% of section is visible
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// Track important clicks throughout the portfolio
function setupClickTracking() {
  // Track CV download
  const cvDownloadBtn = document.querySelector('a[download*="CV"], a[download*="cv"]');
  if (cvDownloadBtn) {
    cvDownloadBtn.addEventListener('click', function() {
      if (typeof trackCVDownload !== 'undefined') {
        trackCVDownload();
      }
    });
  }

  // Track social media clicks
  const socialLinks = document.querySelectorAll('.home-social-icon, .footer-social a');
  socialLinks.forEach(link => {
    link.addEventListener('click', function() {
      const href = this.href;
      let platform = 'Unknown';
      
      if (href.includes('linkedin')) platform = 'LinkedIn';
      else if (href.includes('github')) platform = 'GitHub';
      else if (href.includes('upwork')) platform = 'Upwork';
      else if (href.includes('twitter') || href.includes('x.com')) platform = 'Twitter';
      
      if (typeof trackExternalLink !== 'undefined') {
        trackExternalLink(platform, href);
      }
    });
  });

  // Track contact button clicks
  const contactButtons = document.querySelectorAll('a[href="#contact"], .button[href="#contact"]');
  contactButtons.forEach(button => {
    button.addEventListener('click', function() {
      if (typeof trackContactAttempt !== 'undefined') {
        trackContactAttempt('Contact Button');
      }
    });
  });

  // Track navigation clicks
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const sectionName = this.getAttribute('href').replace('#', '');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'navigation_click', {
          event_category: 'Navigation',
          event_label: sectionName
        });
      }
    });
  });

  // Track project interactions (if projects are dynamically loaded)
  document.addEventListener('click', function(e) {
    // Track project card clicks
    if (e.target.closest('.project-card, .project-item')) {
      const projectCard = e.target.closest('.project-card, .project-item');
      const projectTitle = projectCard.querySelector('.project-title, h3, h4');
      const projectName = projectTitle ? projectTitle.textContent.trim() : 'Unknown Project';
      
      if (typeof trackProjectView !== 'undefined') {
        trackProjectView(projectName);
      }
    }

    // Track theme toggle clicks
    if (e.target.closest('.theme-btn')) {
      const theme = e.target.closest('.theme-btn').getAttribute('data-theme');
      if (typeof gtag !== 'undefined') {
        gtag('event', 'theme_change', {
          event_category: 'User Interaction',
          event_label: theme
        });
      }
    }
  });
}

// Track form submissions and interactions
function setupFormTracking() {
  // Track contact form submissions (if you have one)
  const contactForms = document.querySelectorAll('form[id*="contact"], form.contact-form');
  contactForms.forEach(form => {
    form.addEventListener('submit', function(e) {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'form_submit', {
          event_category: 'Contact',
          event_label: 'Contact Form Submission'
        });
      }
    });
  });

  // Track email/phone clicks in contact section
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  
  emailLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (typeof trackContactAttempt !== 'undefined') {
        trackContactAttempt('Email');
      }
    });
  });

  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (typeof trackContactAttempt !== 'undefined') {
        trackContactAttempt('Phone');
      }
    });
  });
}

// Track scroll depth for engagement measurement
function setupScrollTracking() {
  let scrollDepths = [25, 50, 75, 90];
  let scrollDepthsReached = new Set();

  window.addEventListener('scroll', function() {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    
    scrollDepths.forEach(depth => {
      if (scrollPercent >= depth && !scrollDepthsReached.has(depth)) {
        scrollDepthsReached.add(depth);
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'scroll_depth', {
            event_category: 'Engagement',
            event_label: `${depth}%`,
            value: depth
          });
        }
      }
    });
  });
}

// Track time on page
let startTime = Date.now();
window.addEventListener('beforeunload', function() {
  const timeOnPage = Math.round((Date.now() - startTime) / 1000);
  
  if (typeof gtag !== 'undefined' && timeOnPage > 5) { // Only track if more than 5 seconds
    gtag('event', 'time_on_page', {
      event_category: 'Engagement',
      event_label: 'Page Duration',
      value: timeOnPage
    });
  }
});

// Enhanced ecommerce tracking for project portfolio
function trackPortfolioGoal(goalName, value = 1) {
  if (typeof gtag !== 'undefined') {
    gtag('event', 'conversion', {
      'send_to': 'G-XXXXXXXXXX/' + goalName,
      'value': value,
      'currency': 'USD'
    });
  }
}

// Export functions for use in other scripts
window.portfolioAnalytics = {
  trackPortfolioEvent: typeof trackPortfolioEvent !== 'undefined' ? trackPortfolioEvent : function() {},
  trackSectionView: typeof trackSectionView !== 'undefined' ? trackSectionView : function() {},
  trackProjectView: typeof trackProjectView !== 'undefined' ? trackProjectView : function() {},
  trackContactAttempt: typeof trackContactAttempt !== 'undefined' ? trackContactAttempt : function() {},
  trackCVDownload: typeof trackCVDownload !== 'undefined' ? trackCVDownload : function() {},
  trackExternalLink: typeof trackExternalLink !== 'undefined' ? trackExternalLink : function() {},
  trackPortfolioGoal: trackPortfolioGoal
};
