// fetching Main project data from API and displaying it //

window.addEventListener('load', function () {
  const urlApi =
    'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
  const urlParams = new URLSearchParams(window.location.search);
  const currentProjectId = urlParams.get('id');

  if (!currentProjectId) {
    alert('No project ID provided in the URL. Please check the link.');
    return;
  }

  fetch(urlApi)
    .then((response) => response.json())

    .then((data) => {
      const pageProject = data.find(
        (project) => project.uuid == Number(currentProjectId),
      );
      if (!pageProject) {
        alert('Project not found.');
        return;
      }

      document.getElementById('name').textContent = pageProject.name;
      document.getElementById('description').textContent =
        pageProject.description;
      document.getElementById('completed_on').textContent =
        pageProject.completed_on;
      document.getElementById('content').textContent = pageProject.content;

      const imageElements = document.querySelectorAll('img#image');
      imageElements.forEach((img) => {
        img.src = pageProject.image;
      });

      // fetching project data and displaying it on project cards - avoiding the main project to be displayed twice //
      const otherProjects = data
        .filter((project) => project.uuid != Number(currentProjectId))
        .slice(0, 3);
      const projectsSection = document.querySelector('#other-projects-section');

      otherProjects.forEach((project) => {
        const card = createProjectCard(project);
        projectsSection.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      alert(
        'An error occurred while fetching project data. Please try again later.',
      );
    });
});
