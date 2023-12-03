// -----------------------------------------------------
// Base elements
// -----------------------------------------------------
const baseURL = "https://api.spaceflightnewsapi.net/v4/articles/";
const fileFormatRequested = "format=json";
const $topContainer = $(".top-container");
let limitOfArticlesAmount = 6;
const limitOfArticles = `limit=${limitOfArticlesAmount}`;
let newsArray = [];

// URL assembly
const url = `${baseURL}?${limitOfArticles}&${fileFormatRequested}`;

// Fetch the stuff

function getNews() {
  //! Change it back to "url" when it's for realz
  fetch("/api-response-placeholder.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      renderNews();
      console.log(data.results);
    });
}

// Rendering to the screen
function renderNews() {
  for (i = 0; i < limitOfArticlesAmount; i++) {
    // Make tile
    let $newsBoxContainer = $("<div>").attr("class", "news-box-container");
    $topContainer.append($newsBoxContainer);

    // Get photo
    let $newsPhotoContainer = $("<div>").attr("class", "news-photo");
    console.log(newsArray[i].image_url);
    $newsPhotoContainer.html(`<img src="${newsArray[i].image_url}">`);
    $newsBoxContainer.append($newsPhotoContainer);

    // Text Container
    let $newsTextContainer = $("<div>").attr("class", "news-text-container");
    $newsBoxContainer.append($newsTextContainer);

    // Actual Content
    let $newsPublishDate = $();
    let $newsTime = $("<div>").attr("class", "news-time").text(`${newsArray[i].published_at}`);
    $newsTextContainer.append($newsTime);

    let $newsTitle = $("<div>").attr("class", "news-title").text(`${newsArray[i].title}`);
    $newsTextContainer.append($newsTitle);

    let $newsSummary = $("<div>").attr("class", "news-summary").text(`${newsArray[i].summary}`);
    $newsTextContainer.append($newsSummary);

    let $newsSite = $("<div>").attr("class", "news-site").text(`${newsArray[i].news_site}`);
    $newsTextContainer.append($newsSite);
  }
}
// console.log(newsArray[1].image_url);
// -----------------------------------------------------
// Just checking the photos oun
// -----------------------------------------------------

// console.log(data.results[3]);

// -----------------------------------------------------
// Running Code
// -----------------------------------------------------

// Default Load
getNews();

// Testing Area-----------------------

// Testing Area-----------------------
