// -----------------------------------------------------
// Base elements
// -----------------------------------------------------
const baseURL = "https://api.spaceflightnewsapi.net/v4/articles/";
const fileFormatRequested = "format=json";
let limitOfArticlesAmount = 12;
const limitOfArticles = `limit=${limitOfArticlesAmount}`;
let newsArray = [];

// URL assembly
const url = `${baseURL}?${limitOfArticles}&${fileFormatRequested}`;

// Fetch the stuff
function getNews() {
  fetch(url)
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`SHOW "DATA.RESULTS" ${data.results}`);
      newsArray = data.results;
      //   console.log(`print array ${newsArray[0].title}`);
      renderNews();
    });
}

// Rendering to the screen
function renderNews() {
  console.log(`title: ${newsArray[0].title}`);
  console.log(`url: ${newsArray[0].url}`);
  console.log(`news_site: ${newsArray[0].news_site}`);
  console.log(`summary: ${newsArray[0].summary}`);
}
// -----------------------------------------------------
// Running Code
// -----------------------------------------------------

getNews();
