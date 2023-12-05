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
// const urlManual = `${baseURL}?search=spacex&${limitOfArticles}&${fileFormatRequested}`

// Fetch the stuff

function getNews() {
  //! Change it back to "url" when it's for realz
  // "/api-response-placeholder.json"
  // fetch("/api-response-placeholder.json");
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews();
      }

      console.log(data.results);
      console.log(url);
    });
}

function searchNews(input) {
  //! Change it back to "url" when it's for realz
  // "/api-response-placeholder.json"
  // fetch("/api-response-placeholder.json")
  const searchURL = `${baseURL}?search=${input}&${limitOfArticles}&${fileFormatRequested}`;
  fetch(searchURL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.results);
      newsArray = data.results;
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews();
      }

      console.log(data.results);
      console.log(searchURL);
    });
}

function searchEvent(event) {
  event.preventDefault();
  $topContainer.empty();
  const form = event.target;
  const formData = new FormData(form);
  const userSearch = formData.get("user-input");
  console.log(userSearch);
  searchNews(userSearch);
  // renderNews();
}

// Rendering to the screen
function renderNews() {
  // for (i = 0; i < limitOfArticlesAmount; i++) {
  // Make tile
  let $newsBoxContainer = $("<div>").attr("class", "news-box-container");
  $topContainer.append($newsBoxContainer);

  // Get photo
  let $newsPhotoContainer = $("<div>").attr("class", "news-photo");
  $newsPhotoContainer.html(`<img src="${newsArray[i].image_url}">`);
  $newsBoxContainer.append($newsPhotoContainer);

  // Text Container
  let $newsTextContainer = $("<div>").attr("class", "news-text-container");
  $newsBoxContainer.append($newsTextContainer);

  let $newsDetailsAbsoluteContainer = $("<div>").attr("class", "news-details-absolute-container");
  $newsBoxContainer.append($newsDetailsAbsoluteContainer);
  let $newsDetailsContainer = $("<div>").attr("class", "news-details-container");
  $newsDetailsAbsoluteContainer.append($newsDetailsContainer);

  // Photo overlays
  let $photoOverlay = $("<div>").attr("class", "photo-overlay");
  $newsBoxContainer.append($photoOverlay);
  let $fullOverlay = $("<div>").attr("class", "full-overlay");
  $newsBoxContainer.append($fullOverlay);

  // Text Top+Bottom Sections
  let $newsTextTop = $("<div>").attr("class", "news-text-top-container");
  $newsTextContainer.append($newsTextTop);
  let $newsTextBottom = $("<div>").attr("class", "news-text-bottom-container");
  $newsTextContainer.append($newsTextBottom);

  // Actual Content
  let $newsTitle = $("<div>").attr("class", "news-title").text(`${newsArray[i].title}`);
  $newsTextBottom.append($newsTitle);

  let $newsSummaryContainer = $("<div>").attr("class", "news-summary-container");
  $newsDetailsContainer.append($newsSummaryContainer);
  let $newsSummary = $("<div>").attr("class", "news-summary").text(`${newsArray[i].summary}`);
  $newsSummaryContainer.append($newsSummary);

  // let $newsSource = $("<div>").attr("class", "news-source-link").html(`<a href="${newsArray[i].url}"><button>Read More at ${newsArray[i].news_site}</button></a>`).css("margin-top", "16px");
  let $newsSource = $("<div>").attr("class", "news-source-link").html(`<a href="${newsArray[i].url}"><button>Full Article</button></a>`);
  $newsDetailsContainer.append($newsSource);

  let $newsSite = $("<div>").attr("class", "news-site").text(`${newsArray[i].news_site}`);
  $newsTextTop.append($newsSite);

  let $newsTime = $("<div>").attr("class", "news-time").text(`${newsArray[i].published_at}`);
  $newsTextTop.append($newsTime);

  //* Click event listener
  /*
  let open = false;
  $newsBoxContainer.on("click", (event) => {
    open = !open;
    function openNews() {
      $newsTitle.css("opacity", 0);
      $newsSummary.css("opacity", 1);
      $fullOverlay.css("opacity", 1);
      $newsTextTop.css("opacity", 0);
    }
    function closeNews() {
      $newsTitle.css("opacity", 1);
      $newsSummary.css("opacity", 0);
      $fullOverlay.css("opacity", 0);
      $newsTextTop.css("opacity", 1);
    }
    if (open) {
      openNews();
      console.log(`openNews ${open}`);
    } else {
      closeNews();
      console.log(`closeNews ${open}`);
    }
  });
*/
  //* Hover event listener
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

  //   "click", (event) => {
  //   $newsTextBottom.css("border", "0px");
  //   $newsTitle.css("opacity", 0);
  //   $newsSummary.css("display", "flex");
  // });
}

// -----------------------------------------------------
// Running Code
// -----------------------------------------------------

// Default Load
getNews();

// -----------------------------------------------------
// User Interaction
// -----------------------------------------------------

//! Article click hides title, adds an overlay, shows summary + link
// function sayClick() {
//   $newsBoxContainer.css("border", "none");
// }

// $(document).on("click", ".news-box-container", sayClick);

// Testing Area-----------------------

// Testing Area-----------------------

// -----------------------------------------------------
// CSS DOM Manipulation
// -----------------------------------------------------

// Fade out Title when searching
let $mobileWidth = $(window).width();
const $titleContainer = $(".title-container");
const $search = $(".search");

$search.on("click", fadeTitleInMobileWhenSearching());

function fadeTitleInMobileWhenSearching() {
  window.onresize = $mobileWidth;
  if ($mobileWidth < 786) {
    $search.on("focus", (event) => $titleContainer.css("opacity", 0));
    $search.on("blur", (event) => $titleContainer.css("opacity", 1));
  }
}

document.querySelector("form").addEventListener("submit", searchEvent);
