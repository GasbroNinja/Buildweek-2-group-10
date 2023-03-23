const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";

const getData = (window.onload = async () => {
  albumHeader(url);
});
async function albumHeader(url) {
  try {
    const response = await fetch(url);
    const album = await response.json();
    console.log(album);
  } catch (error) {
    console.log("catch", +error);
  }
}
