# Ironhack Mid-term Project
This was my first web development project completed during the Ironhack Frontend Bootcamp. The goal was to create and deploy a fully responsive, fictional website for "Circle Company" using HTML, CSS, and JavaScript, including data fetching from an external API. I spent around 55 hours on the project, working from a provided Figma design. The result is a multi-page site that showcases my foundational skills in layout, styling, and interactivity.

[View deployed demo](https://ironhack-project1-jen-winter.netlify.app/index.html)

[View presentation](https://www.canva.com/design/DAGmjD0uSLA/gIxhoDIflbcY2vV2lWPqFQ/edit?utm_content=DAGmjD0uSLA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

[View API endpoint](https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects)


## Project Structure

The project is organized into directories and files:

- **main**: Contains individual HTML files for 3 different sections of the website: homepage, projects, and contact pages.

- **html-components/**: Contains reusable HTML snippets or components that are included across multiple pages, promoting modularity and maintainability.

- **css/**: Includes the CSS stylesheet used to style the website.

- **scripts/**: Contains JavaScript files that add interactivity and dynamic behavior to the website.

- **project-assets/**: Stores images, icons, and other media assets used throughout the website.


## Key Features

- **Dynamic Content Rendering**: The website fetches project data from an external API. The homepage displays the most recent projects based on the `completed_on` metadata, while individual project pages dynamically populate with content such as images, descriptions, and metadata—excluding the current project from related listings to prevent redundancy.

- **Fully Responsive Design**: Built with CSS media queries, Flexbox, and Grid, the layout adapts seamlessly across desktops, tablets, and smartphones to provide an optimal viewing experience on all devices.

- **Interactive UI Elements**: Smooth user interactions are achieved through CSS transitions on hover states, affecting elements like buttons, links, and logos. These include subtle visual effects such as scaling, color shifts, and shadows to enhance feedback.

- **Component-Based Architecture**: The codebase employs modular, reusable components (e.g., `Header.html`, `Footer.html`, `Project-cards-component.js`) that promote scalability, maintainability, and a consistent user interface across all sections of the site.

- **Mobile Navigation System**: A responsive hamburger menu appears on smaller viewports, triggering an overlay navigation that automatically dismisses on link selection or can be manually closed for ease of use.

- **Form Handling with UX Enhancements**: The contact form supports client-side validation, real-time error feedback, success messages, and auto-reset functionality upon successful submission. Inputs are managed with controlled components for better state handling.

- **Interactive JavaScript Features**: JavaScript enhances interactivity, supporting features like real-time form validation and the dynamic rendering of project cards and detail pages.

- **Semantic HTML for Accessibility and SEO**: The use of semantic HTML tags improves both accessibility for screen readers and discoverability by search engines.


## Build with

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
- ![VS Code](https://img.shields.io/badge/Editor-VS%20Code-blue?logo=visualstudiocode&logoColor=white)
- [![Netlify Status](https://api.netlify.com/api/v1/badges/82b713e5-aa37-46ab-b0ef-925d7a0399fd/deploy-status)](https://app.netlify.com/sites/ironhack-project1-jen-winter/deploys)


## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project folder.
3. Open the `index.html` file in your browser to view the homepage.
4. Ensure you have an active internet connection to fetch data from the external API.

## API Integration

The project integrates with an external API to fetch project data dynamically. This data is used to populate the website's pages, ensuring that the content is always current and relevant.
