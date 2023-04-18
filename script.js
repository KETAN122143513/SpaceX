const apiUrl = "https://api.spacexdata.com/v4/launches";

function getLaunches() {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => displayLaunches(data))
    .catch(error => console.error(error));
}

function displayLaunches(launches) {
  const launchesContainer = document.getElementById("launches");
  launches.forEach(launch => {
    const launchElement = document.createElement("div");
    launchElement.classList.add("launch");
    const date = new Date(launch.date_local);
    const dateString = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    launchElement.innerHTML = `
      <h2>${launch.name}</h2>
      <p><strong>Flight number:</strong> ${launch.flight_number}</p>
      <p><strong>Date:</strong> ${dateString}</p>
      <p><strong>Rocket:</strong> ${launch.rocket.name}</p>
      <p><strong>Launch site:</strong> ${launch.launchpad.name}</p>
      <img src="${launch.links.patch.small}" alt="Patch for ${launch.name}">
      <a href="${launch.links.article}">Read article</a>
    `;
    launchesContainer.appendChild(launchElement);
  });
}

getLaunches();
