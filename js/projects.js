// Project data array
const projectsData = [
  {
    id: 1,
    title: "Vanilla HR",
    description: "AI-powered hiring platform that streamlines large-scale recruitment by finding the best candidates efficiently.",
    image: "img/portfolios/vanillahr.png",
    url: "https://vanillahr.com",
    featured: true,
    technologies: ["Hiring Platform", "AI", "Web App", "React Js"]
  },
  {
    id: 2,
    title: "Lighting Illusion",
    description: "Leading Australian eCommerce store for stylish, climate-suited lighting and ceiling fans.",
    image: "img/portfolios/lighting-illusion.png",
    url: "https://lightingillusions.com.au",
    featured: true,
    technologies: ["E-commerce", "Web App", "Next Js", "Laravel"]
  },
  {
    id: 3,
    title: "Calibo Australia",
    description: "Premium Aussie-designed lighting and fans. Built with a monorepo shared with Lighting Illusions.",
    image: "img/portfolios/calibo.png",
    url: "https://calibo.com.au",
    featured: true,
    technologies: ["E-commerce", "Web App", "Mono Repo"]
  },
  {
    id: 4,
    title: "Global English Campus",
    description: "AI-based learning platform to improve English speaking, writing, reading, and listening skills.",
    image: "img/portfolios/gec.png",
    url: "https://globalenglishcampus.com",
    technologies: ["AI", "Education", "Web App", "Vue Js"],
    featured: true
  },
  {
    id: 5,
    title: "Workzone 1",
    description: "Time tracking tool that monitors productivity via app usage, screenshots, and user activity.",
    image: "img/portfolios/workzone.png",
    url: "https://workzone1.com",
    technologies: ["Productivity", "Tracking", "Analytics", "Electron JS"],
    featured: true
  },
  {
    id: 6,
    title: "DVX Games",
    description: "German entertainment site showcasing mobile games loved by youth around the globe.",
    image: "img/portfolios/dvx.png",
    url: "https://dvxgames.net/",
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
