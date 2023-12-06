// Base elements
const baseURL = "https://api.spaceflightnewsapi.net/v4/articles/";
const fileFormatRequested = "format=json";
const $topContainer = $(".top-container");
const $pagesContainer = $(".pages-container");
let limitOfArticlesAmount = 24;
const limitOfArticles = `limit=${limitOfArticlesAmount}`;
let newsArray = {};
let pageMultiplier = 1;
let offsetValue = limitOfArticlesAmount * pageMultiplier;
let count = 0;

// URL assembly
let url = `${baseURL}?&${fileFormatRequested}&${limitOfArticles}`;

// Fetch the stuff
function getNews() {
  // fetch("/api-response-placeholder.json")
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data;
      // count = data.count;
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews(data);
      }
      renderPagination(data);
      console.log(url);
    });
}

function searchNews(input) {
  url = `${url}&search=${input}`;
  getNews();
}

function searchEvent(event) {
  event.preventDefault();
  $topContainer.empty();
  $pagesContainer.empty();
  const form = event.target;
  const formData = new FormData(form);
  const userSearch = formData.get("user-input");
  searchNews(userSearch);
}

function renderNews(res) {
  // Make tile
  let $newsBoxContainer = $("<div>").attr("class", "news-box-container");
  $topContainer.append($newsBoxContainer);

  // Get photo
  let $newsPhotoContainer = $("<div>").attr("class", "news-photo");
  $newsPhotoContainer.html(`<img src="${res.results[i].image_url}">`);
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
  let $newsTitle = $("<div>").attr("class", "news-title").text(`${res.results[i].title}`);
  $newsTextBottom.append($newsTitle);
  let $newsSummary = $("<div>").attr("class", "news-summary").text(`${res.results[i].summary}`);
  $newsSummaryContainer.append($newsSummary);
  let $newsSource = $("<div>").attr("class", "news-source-link").html(`<a href="${res.results[i].url}"><button>Full Article</button></a>`);
  $newsDetailsContainer.append($newsSource);
  let $newsSite = $("<div>").attr("class", "news-site").text(`${res.results[i].news_site}`);
  $newsTextTop.append($newsSite);
  let $newsTime = $("<div>").attr("class", "news-time").text(`${res.results[i].published_at}`);
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
//! getNews();

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

// Create page number+buttons

function renderPagination(data) {
  let $pageControllerContainer = $("<div>").attr("class", "page-controller-container");
  $pagesContainer.append($pageControllerContainer);
  let pagesAmount = Math.ceil(data.count / limitOfArticlesAmount);

  for (p = 1; p <= pagesAmount; p++) {
    let pagedOffset = limitOfArticlesAmount * (p - 1);
    let pagedURL = `<a href="${url}&offset=${pagedOffset}">`;
    let $pageNumber = $("<div>").attr("class", "page-number").text(p);
    $pageControllerContainer.append($pageNumber);
    $pageNumber.on("click", (event) => {
      const $target = $(event.target);
      console.log($target[0].innerText);
    });
    console.log(pagedURL);
  }
}
