// Project data array
const projectsData = [
  {
    id: 1,
    title: "Global English Campus",
    description: "An AI-based online learning system that helps students improve their English skills in speaking, writing, reading, and listening.",
    image: "img/portfolios/gec.png",
    url: "https://globalenglishcampus.com",
    technologies: ["AI", "Education", "Web App"],
    featured: true
  },
  {
    id: 2,
    title: "Workzone 1",
    description: "A powerful time tracking and activity recording tool that monitors productivity by tracking app usage, capturing screenshots, and recording user activity.",
    image: "img/portfolios/workzone.png",
    url: "https://workzone1.com",
    technologies: ["Productivity", "Tracking", "Analytics"],
    featured: true
  },
  {
    id: 3,
    title: "DVX Entertainment",
    description: "A German entertainment company website that showcases mobile games enjoyed by young people worldwide.",
    image: "img/portfolios/dvx.png",
    url: "https://dvx.net/",
    technologies: ["Entertainment", "Mobile Games", "Website"],
    featured: true
  }
];

// Function to generate project cards
function generateProjectCards() {
  const projectsGrid = document.querySelector('.projects-grid');
  
  if (!projectsGrid) {
    console.error('Projects grid container not found');
    return;
  }

  // Clear existing content
  projectsGrid.innerHTML = '';

  // Generate project cards
  projectsData.forEach(project => {
    const projectCard = createProjectCard(project);
    projectsGrid.appendChild(projectCard);
  });

  // Initialize Lucide icons after cards are created
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

// Function to create individual project card
function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';
  
  // Generate technology tags
  const techTags = project.technologies.map(tech => 
    `<span class="tech-tag">${tech}</span>`
  ).join('');

  projectCard.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" />
      <div class="project-overlay">
        <a href="${project.url}" target="_blank" class="project-link">
          <i data-lucide="external-link"></i>
        </a>
      </div>
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">
        ${project.description}
      </p>
      <div class="project-tech">
        ${techTags}
      </div>
      <a href="${project.url}" target="_blank" class="button button-flex">
        View Project <i data-lucide="arrow-right"></i>
      </a>
    </div>
  `;

  return projectCard;
}

// Function to add new project (for future use)
function addProject(projectData) {
  projectsData.push({
    id: projectsData.length + 1,
    ...projectData
  });
  generateProjectCards();
}

// Function to get project by ID (for future use)
function getProjectById(id) {
  return projectsData.find(project => project.id === id);
}

// Function to get featured projects (for future use)
function getFeaturedProjects() {
  return projectsData.filter(project => project.featured);
}

// Initialize projects when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  generateProjectCards();
});

// Export functions for external use (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    projectsData,
    generateProjectCards,
    addProject,
    getProjectById,
    getFeaturedProjects
  };
}
