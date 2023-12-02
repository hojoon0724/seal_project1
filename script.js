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
  //! Change it back to "url" when it's for realz
  fetch("/api-response-placeholder.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      renderNews();
      console.log(data.results);

      console.log(data.results[2].image_url);
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

  //! Rendering images to not ask API all the time
  for (i = 0; i < 12; i++) {
    $topContainer.append($newsBoxContainer);
    let $newsPhoto = $("<div>").html(`<img src="/photos/tem-photos-${i}>`);
    //! Disable above, enable below
    // let $newsPhoto = $("<div>").html(`<img src="${newsArray[i].image_url}">`);
    $newsBoxContainer.append($newsPhoto);
  }
}

// -----------------------------------------------------
// Just checking the photos oun
// -----------------------------------------------------

function loadAllPhotos() {}

// console.log(data.results[3]);

// -----------------------------------------------------
// Running Code
// -----------------------------------------------------

// Default Load
getNews();

// Testing Area-----------------------

// Testing Area-----------------------
