// Base elements
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
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews();
      }
    });
}

function searchNews(input) {
  const searchURL = `${baseURL}?search=${input}&${limitOfArticles}&${fileFormatRequested}`;
  fetch(searchURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews();
      }
    });
}

function searchEvent(event) {
  event.preventDefault();
  $topContainer.empty();
  const form = event.target;
  const formData = new FormData(form);
  const userSearch = formData.get("user-input");
  searchNews(userSearch);
}

function renderNews() {
  // Make tile
  let $newsBoxContainer = $("<div>").attr("class", "news-box-container");
  $topContainer.append($newsBoxContainer);

  // Get photo
  let $newsPhotoContainer = $("<div>").attr("class", "news-photo");
  $newsPhotoContainer.html(`<img src="${newsArray[i].image_url}">`);
  $newsBoxContainer.append($newsPhotoContainer);

  // Text Containers
  let $newsTextContainer = $("<div>").attr("class", "news-text-container");
  $newsBoxContainer.append($newsTextContainer);
  let $newsDetailsAbsoluteContainer = $("<div>").attr("class", "news-details-absolute-container");
  $newsBoxContainer.append($newsDetailsAbsoluteContainer);
  let $newsDetailsContainer = $("<div>").attr("class", "news-details-container");
  $newsDetailsAbsoluteContainer.append($newsDetailsContainer);
  let $newsSummaryContainer = $("<div>").attr("class", "news-summary-container");
  $newsDetailsContainer.append($newsSummaryContainer);

  // Text Top+Bottom Sections
  let $newsTextTop = $("<div>").attr("class", "news-text-top-container");
  $newsTextContainer.append($newsTextTop);
  let $newsTextBottom = $("<div>").attr("class", "news-text-bottom-container");
  $newsTextContainer.append($newsTextBottom);

  // Photo overlays
  let $photoOverlay = $("<div>").attr("class", "photo-overlay");
  $newsBoxContainer.append($photoOverlay);
  let $fullOverlay = $("<div>").attr("class", "full-overlay");
  $newsBoxContainer.append($fullOverlay);

  // Text
  let $newsTitle = $("<div>").attr("class", "news-title").text(`${newsArray[i].title}`);
  $newsTextBottom.append($newsTitle);
  let $newsSummary = $("<div>").attr("class", "news-summary").text(`${newsArray[i].summary}`);
  $newsSummaryContainer.append($newsSummary);
  let $newsSource = $("<div>").attr("class", "news-source-link").html(`<a href="${newsArray[i].url}"><button>Full Article</button></a>`);
  $newsDetailsContainer.append($newsSource);
  let $newsSite = $("<div>").attr("class", "news-site").text(`${newsArray[i].news_site}`);
  $newsTextTop.append($newsSite);
  let $newsTime = $("<div>").attr("class", "news-time").text(`${newsArray[i].published_at}`);
  $newsTextTop.append($newsTime);

  // Hover event listener
  $newsBoxContainer.on("mouseenter", (event) => {
    $newsTitle.css("opacity", 0);
    $newsDetailsAbsoluteContainer.css("opacity", 1);
    $fullOverlay.css("opacity", 1);
    $newsTextTop.css("opacity", 0);
  });

  $newsBoxContainer.on("mouseleave", (event) => {
    $newsTitle.css("opacity", 1);
    $newsDetailsAbsoluteContainer.css("opacity", 0);
    $fullOverlay.css("opacity", 0);
    $newsTextTop.css("opacity", 1);
  });
}

// Default Load the Latest
getNews();

// Fade out Title when searching in mobile
let $mobileWidth = $(window).width();
const $titleContainer = $(".title-container");
const $search = $(".search");
$search.on("click", fadeTitleInMobileWhenSearching());

function fadeTitleInMobileWhenSearching() {
  if ($mobileWidth < 767) {
    $search.on("focus", (event) => $titleContainer.css("opacity", 0));
    $search.on("blur", (event) => $titleContainer.css("opacity", 1));
  }
}

// Search event listener
document.querySelector("form").addEventListener("submit", searchEvent);
