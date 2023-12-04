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
  // "/api-response-placeholder.json"
  fetch("/api-response-placeholder.json")
    // fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
      for (i = 0; i < limitOfArticlesAmount; i++) {
        renderNews();
      }

      console.log(data.results);
    });
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

  let $photoOverlay = $("<div>").attr("class", "photo-overlay");
  $newsBoxContainer.append($photoOverlay);

  // Text Top+Bottom Sections
  let $newsTextTop = $("<div>").attr("class", "news-text-top-container");
  $newsTextContainer.append($newsTextTop);
  let $newsTextBottom = $("<div>").attr("class", "news-text-bottom-container");
  $newsTextContainer.append($newsTextBottom);

  // Actual Content
  let $newsPublishDate = $();
  let $newsTime = $("<div>").attr("class", "news-time").text(`${newsArray[i].published_at}`);
  $newsTextBottom.append($newsTime);

  let $newsTitle = $("<div>").attr("class", "news-title").text(`${newsArray[i].title}`);
  $newsTextBottom.append($newsTitle);

  let $newsSummary = $("<div>").attr("class", "news-summary").text(`${newsArray[i].summary}`);
  $newsTextBottom.append($newsSummary);

  let $newsSite = $("<div>").attr("class", "news-site").text(`${newsArray[i].news_site}`);
  $newsTextTop.append($newsSite);

  // Click event listener
  let open = false;
  $newsBoxContainer.on("click", (event) => {
    open = !open;
    function openNews() {
      $newsTitle.css("opacity", 0);
      // $newsTitle.css("display", "none");
      $newsTime.css("opacity", 0);
      // $newsTime.css("display", "none");
      $newsSummary.css("opacity", 1);
      $newsSummary.css("display", "flex");
      $newsTextBottom.css("justify-content", "center");
      // open = true;
    }
    function closeNews() {
      $newsTitle.css("opacity", 1);
      // $newsTitle.css("display", "flex");
      $newsTime.css("opacity", 1);
      // $newsTime.css("display", "flex");
      $newsSummary.css("opacity", 0);
      // $newsSummary.css("display", "none");
      $newsTextBottom.css("justify-content", "end");
      // open = false;
    }
    if (open) {
      openNews();
      console.log(`openNews ${open}`);
    } else {
      closeNews();
      console.log(`closeNews ${open}`);
    }
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
  console.log("clicked", $mobileWidth);
  if ($mobileWidth < 786) {
    $search.on("focus", (event) => $titleContainer.css("opacity", 0));
    $search.on("blur", (event) => $titleContainer.css("opacity", 1));
  }
}
