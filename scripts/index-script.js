window.addEventListener('load', function () {
  const apiUrl =
    'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const ProjectsSortedByDate = data.sort((a, b) => {
        const dateA = new Date(a.completed_on);
        const dateB = new Date(b.completed_on);
        return dateB - dateA;
      });

      const latestProjects = ProjectsSortedByDate.slice(0, 3);

      const homeProjectsSection = document.querySelector(
        '#other-projects-section',
      );

      latestProjects.forEach((project) => {
        const card = createProjectCard(project);
        homeProjectsSection.appendChild(card);
      });
    });
});
