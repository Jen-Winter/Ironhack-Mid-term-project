function createProjectCard(project) {
  const projectCard = document.createElement('div');
  projectCard.className = 'project-card';

  const image = document.createElement('img');
  image.className = 'project-image';
  image.src = project.image;
  image.alt = 'project image';
  projectCard.appendChild(image);

  const textDiv = document.createElement('div');
  textDiv.className = 'project-card-text';

  const h5 = document.createElement('h5');
  h5.textContent = project.name;
  h5.className = 'body-medium';

  const p = document.createElement('p');
  p.textContent = project.description;
  p.className = 'headline-text-regular';

  const a = document.createElement('a');
  a.className = 'headline-link-regular';
  a.href = `project.html?id=${project.uuid}`;
  a.textContent = 'Learn more';

  textDiv.appendChild(h5);
  textDiv.appendChild(p);
  textDiv.appendChild(a);

  projectCard.appendChild(textDiv);

  return projectCard;
}
