fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');

    data.forEach(project => {
      const div = document.createElement('div');
      div.className = "border border-gray-200 rounded-xl p-4 shadow-sm";

      div.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover rounded-md mb-4">
        <h3 class="text-xl font-bold mb-1">${project.title}</h3>
        <p class="text-gray-700 mb-2">${project.description}</p>
        <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank">View on GitHub</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error loading projects:", error);
  });
