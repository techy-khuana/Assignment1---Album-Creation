//Validate the inputs to check for empty space and incorrect character length
//in the input field.
const albumForm = document.querySelector("#album-form");
const titleInput = document.querySelector("#album-title");
const descriptionInput = document.querySelector("#album-description");
const selectInput = document.querySelector("#albume-art");

// Event listeners for form inputs and select element
albumForm.addEventListener("submit", onAlbumTitle);
titleInput.addEventListener("input", onTitleInput);
descriptionInput.addEventListener("input", onDescriptionInput);
selectInput.addEventListener("change", onSelectInput);

// Function to validate album title
function onAlbumTitle(e) {
  e.preventDefault();
  console.log(titleInput.value);
}

function onTitleInput(e) {
  const titleValue = titleInput.value.trim();
  console.log("Title:", titleValue);
  if (titleValue === "" || titleValue.length > 15) {
    titleInput.classList.add("is-invalid");
  } else {
    titleInput.classList.remove("is-invalid");
  }
}

// Function to validate album description
function onAlbumDescription(e) {
  e.preventDefault();
  console.log(descriptionInput.value);
}
function onDescriptionInput(e) {
  const descriptionValue = descriptionInput.value.trim();
  console.log("Description:", descriptionValue);
  if (descriptionValue === "" || descriptionValue.length > 30) {
    descriptionInput.classList.add("is-invalid");
  } else {
    descriptionInput.classList.remove("is-invalid");
  }
}

// Function to validate album art
function onSelectInput(e) {
  const selectedAlbumIndex = e.target.selectedIndex; // Get the selected album index
  if (selectedAlbumIndex === 0) {
    selectInput.classList.add("is-invalid"); // Show error message
    document.querySelector("#container").innerHTML = ""; // Clear container
  } else {
    selectInput.classList.remove("is-invalid");

    const selectedAlbum = albumsList[selectedAlbumIndex - 1]; // Retrieve the selected album

    document.querySelector("#container").innerHTML = ""; // Clear container before rendering

    renderAlbum(selectedAlbum, document.querySelector("#container")); // Render the selected album
  }
}

// Array of album data
const albumsList = [
  {
    image: "img/mountains.jpg",
    title: "Landscape",
    description: "Best classical music songs",
  },
  {
    image: "img/gazing_at_stars.jpg",
    title: "Space",
    description: "Songs about space",
  },
  {
    image: "img/cassette.jpg",
    title: "Golden Oldies",
    description: "Hits from the past",
  },
  {
    image: "img/tv.jpg",
    title: "TV Theme songs",
    description: "Theme songs from television shows",
  },
];

albumsList.forEach((album) => {
  renderAlbum(album, document.querySelector("#container"));
});

// Template for album card
function renderAlbum(album, domContainer) {
  const template = `
    <div class="col">
        <div class="card shadow-sm">
            <img class="bd-placeholder-img card-img-top" src="${album.image}" alt="${album.title}" />
            <div class="card-body">
                <h5 class="card-title">${album.title}</h5>
                <p class="card-text">${album.description}</p>
            </div>
        </div>
    </div>
  `;
  domContainer.insertAdjacentHTML("beforeend", template);
}
