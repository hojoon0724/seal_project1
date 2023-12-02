// -----------------------------------------------------
// Base elements
// -----------------------------------------------------
const baseURL = "https://api.spaceflightnewsapi.net/v4/articles/";
const fileFormatRequested = "format=json";
const $topContainer = $(".top-container");
let limitOfArticlesAmount = 12;
const limitOfArticles = `limit=${limitOfArticlesAmount}`;
let newsArray = [];

// URL assembly
const url = `${baseURL}?${limitOfArticles}&${fileFormatRequested}`;

// Fetch the stuff

function getNews() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      renderNews();
      console.log(data);
    });
}

// Rendering to the screen
function renderNews() {
  let $newsBoxContainer = $("<div>").attr("class", "news-box-container");
  $topContainer.append($newsBoxContainer);

  let $newsTitle = $("<div>").attr("class", "news-title").text(`${newsArray[0].title}`);
  $newsBoxContainer.append($newsTitle);

  let $newsSite = $("<div>").attr("class", "news-site").text(`${newsArray[0].news_site}`);
  $newsBoxContainer.append($newsSite);

  let $newsSummary = $("<div>").attr("class", "news-summary").text(`${newsArray[0].summary}`);
  $newsBoxContainer.append($newsSummary);
}
// -----------------------------------------------------
// Running Code
// -----------------------------------------------------

// Default Load
// getNews();

// Testing Area-----------------------

// Testing Area-----------------------
