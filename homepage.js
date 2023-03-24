
const URLParams = new URLSearchParams(window.location.search);
const selectedId = URLParams.get("id");
console.log("SELECTED ID: ", selectedId);

//FUNZIONE CARD HEADER

const createAlbum = async () => {
    const row = document.getElementById("selected");
    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a")

        const selectedProduct = await response.json();

        console.log(selectedProduct);

        const randomIndex = Math.floor(Math.random() * selectedProduct.data.length);
        console.log("Random Index: ", randomIndex);

        const selectedAlbum = selectedProduct.data[randomIndex];

        let roww = document.getElementById("selected");
        roww.innerHTML = '';

        const col = document.createElement("div")
        col.className = "container p-3 mb-3 mt-5"
        col.innerHTML = `
       
        <div class="row d-flex py-4" style="background: linear-gradient(20deg, rgba(0,0,0,1) 0%, rgba(45,45,45,1) 61%, rgba(47,47,47,1) 67%, rgba(52,52,52,1) 93%);" >
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

}

//FUNZIONE CARD PIU PICCOLE 

const createCard = async (selectedAlbumCard) => {
    const row = document.getElementById("cardHome");
    const col = document.createElement("div");
    col.className = "col-md-5 col-lg-3 col-xl-3 col-xxl-2 mb-4";
    col.innerHTML = `
    <div class="row ps-0 pe-0 ms-0 rounded rounded-1 d-flex gap-lg-5 g-xl-0 gap-xl-0 gap-xxl w-100" style="background-color: #2d2d2d; min-width: 200px; max-height: 75px">
      <div class="row w-100 h-100">
        <div class="col-md-2 col-lg-2 col-xl-2 p-0 d-flex me-auto">
          <img class="p-0 rounded rounded-1" width="75px" src="${selectedAlbumCard.album.cover_medium}" alt="">
        </div>
        <div class="col-md-8 col-lg-8 col-xl-8 text-light d-flex justify-content-end align-items-center fw-semibold ps-5 ms-auto" style="max-height: 75px">
        <a href="#" class="text-decoration-none text-light ps-5" style="max-height: 75px; min-width: 135px">
        ${selectedAlbumCard.album.title}
        </a>
        </div>
      </div>
    </div>
    `;

    row.appendChild(col);
};

const createCards = async () => {
    const row = document.getElementById("cardHome");
    row.innerHTML = '';

    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a")
        const selectedCard = await response.json();
        console.log(selectedCard);

        const shuffledData = shuffle(selectedCard.data);

        for (let i = 0; i < shuffledData.length; i++) {
            await createCard(shuffledData[i]);
        }
    } catch (error) {
        console.log(error);
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



/* +++++++++      +++++++   Carousel  ++++++++++     +++++++*/

const createCardCarousel = async (selectedAlbumCards) => {
    const row = document.getElementById("pageCards");
    const col = document.createElement("div");
    col.className = "col-md-3 col-lg-3 col-xl-2 ps-1 pb-2 gap-5 d-flex align-items-center justify-content-center";
    col.innerHTML = `
   
    <div class="card d-flex align-items-center justify-content-start bg-dark">
      <div class="p-1 rounded">
        <img src="${selectedAlbumCards.album.cover_medium}" class="card-img-top px-3 pt-3 rounded rounded-4"
          width="50px" alt="...">
      </div>
      <div class="card-body d-flex flex-column p-0 py-3   justify-content-start">
        <h5 class="card-title text-light">${selectedAlbumCards.album.title}</h5>
        <p class="card-text text-light opacity-25">${selectedAlbumCards.artist.name}</p>
      </div>
    </div>                    
  `;

    row.appendChild(col);

};

const createCardCarousel2 = async (selectedAlbumCards) => {
  const row = document.getElementById("carosello2");
  const col = document.createElement("div");
  col.className = "col-md-3 col-lg-3 col-xl-2 ps-1 pb-2 gap-5 d-flex align-items-center justify-content-center";
  col.innerHTML = `
    <div class="card d-flex align-items-center justify-content-start bg-dark">
      <div class="p-1 rounded">
        <img src="${selectedAlbumCards.album.cover_medium}" class="card-img-top px-3 pt-3 rounded rounded-4"
          width="50px" alt="...">
      </div>
      <div class="card-body d-flex flex-column p-0 py-3   justify-content-start">
        <h5 class="card-title text-light">${selectedAlbumCards.album.title}</h5>
        <p class="card-text text-light opacity-25">${selectedAlbumCards.artist.name}</p>
      </div>
    </div> 
  
`;

  row.appendChild(col);

};



const createCardsCarousel = async () => {
    const row = document.getElementById("pageCards");
    row.innerHTML = '';
    const row2 = document.getElementById("carosello2");
    row.innerHTML = '';

    try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=a")
        const selectedCardCarousel = await response.json();
        console.log(selectedCardCarousel);

        const shuffledData = shuffle(selectedCardCarousel.data);

        for (let i = 0; i < shuffledData.length; i++) {
            await createCardCarousel(shuffledData[i]);
            await createCardCarousel2(shuffledData[i]);
        }
    } catch (error) {
        console.log(error);
    }
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

window.onload = function () {

    createAlbum();
    createCard();
    createCards();
    createCardCarousel();
    createCardsCarousel();

}




