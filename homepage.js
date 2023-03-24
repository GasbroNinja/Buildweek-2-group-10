const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
console.log("SELECTED ID: ", selectedId);

//FUNZIONE CARD HEADER

const createAlbum = async () => {
  const row = document.getElementById("selected");
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a");

    const selectedProduct = await response.json();

    console.log(selectedProduct);

    const randomIndex = Math.floor(Math.random() * selectedProduct.data.length);
    console.log("Random Index: ", randomIndex);

    const selectedAlbum = selectedProduct.data[randomIndex];

    let roww = document.getElementById("selected");
    roww.innerHTML = "";

    const col = document.createElement("div");
    col.className = "container p-3 mb-3 mt-5";
    col.innerHTML = `
       
        <div class="row d-flex py-4">
        <div class="col-3 ps-4 d-flex align-items-center">
          <img class=" d-flex align-items-center w-100 h-xxl-100 h-xl-100 h-lg-75 mt-lg-3 mt-md-5" style="object-fit: cover;" src="${selectedAlbum.album.cover_big}" alt="">
        </div>
        <div class="col-6">
          <h6 class="text-light mb-3">ALBUM</h6>
          <p class="text-light fs-1" style="font-weight: 900;">${selectedAlbum.album.title}</p>
          <p class=" text-light mb-3">${selectedAlbum.artist.name}</p>
          <p class=" text-light mb-5">Ascolta il nuovo singolo di ${selectedAlbum.artist.name}</p>
          <div class="d-grid gap-2 d-flex justify-content-start">
            <button class="btn btn-lg me-2 rounded rounded-5 px-4 py-2 fw-bold" style="background-color: #1ed760;" type="button">Play</button>
            <button class="btn btn-dark btn-lg rounded rounded-5 px-4 py-2 border border-secondary border-2 bg-trasparent fw-bold" type="button">Salva</button>
            <button class="btn btn-lg ms-3 rounded rounded-5 px-0 py-0 fw-bold text-secondary fs-6 border-none overflow-x-auto" type="button"><i class="bi bi-three-dots fs-3"></i></button>
          </div>
        </div>
        <div class="col-md-2 col-lg-3  d-flex justify-content-center align-items-start">
          <button class="btn btn-outline-secondary badge rounded-4 me-0 px-3 py-2 text-light text-uppercase bg-secondary opacity-25 d-flex align-items-start fs-6 text-center"
            >nascondi annunci</button>
        </div> 
      </div>
      
        `;

    row.appendChild(col);
  } catch (error) {
    console.log(error);
  }
};

//FUNZIONE CARD PIU PICCOLE

const createCard = async () => {
  const row = document.getElementById("cardHome");
  try {
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a");

    const selectedCard = await response.json();

    console.log(selectedCard);

    const randomIndexCard = Math.floor(Math.random() * selectedCard.data.length);
    console.log("Random Index: ", randomIndexCard);

    const selectedAlbumCard = selectedCard.data[randomIndexCard];

    let rowww = document.getElementById("cardHome");
    rowww.innerHTML = "";

    const col = document.createElement("div");
    col.className = "row row-cols-md-2 row-cols-lg-3 row-cols-xl-3 gap-3 mb-4";
    col.innerHTML = `
        <div class="row ps-0 pe-0 ms-0 rounded rounded-1 d-flex flex-column">
        <div class="col-md-4 col-lg-3 p-0">
          <img class="p-0 rounded rounded-1"  src="${selectedAlbumCard.album.cover_medium}" alt="">
        </div>
        <div class="col text-light d-flex align-items-center pe-2">
          <p class=" fw-semibold fs-3">${selectedAlbumCard.album.title}</p>

        </div>
      </div>
      </div>

        `;

    row.appendChild(col);
  } catch (error) {
    console.log(error);
  }
};

window.onload = function () {
  createAlbum();
  createCard();
};
