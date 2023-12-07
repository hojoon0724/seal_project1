# Launchpad - Space News

### By Hojoon Kim

DEPLYOYED SITE: [Click Here](https://seal-project1-dusky.vercel.app/)

## Project Description

> This project uses the Spaceflight News API to show tiles of the latest news related to space exploration. The user can also search with keywords.

## Details about the API

The API does not use any authentication. The requests will be made with a URL in accordance to their API guidelines

Sample Fetch/Ajax called:

```js
const baseURL = "https://api.spaceflightnewsapi.net/v4/articles/";
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      newsArray = data.results;
    }
```

The Data I get back:

```json
{
    "count": 18728,
    "next": "https://api.spaceflightnewsapi.net/v4/articles/?format=json&limit=24&offset=24",
    "previous": null,
    "results": [
      {
        "id": 21730,
        "title": "NorthStar raises $15 million for debris-tracking satellites waiting on Rocket Lab",
        "url": "https://spacenews.com/northstar-raises-15-million-for-debris-tracking-satellites-waiting-on-rocket-lab/",
        "image_url": "https://i0.wp.com/spacenews.com/wp-content/uploads/2022/03/ses-northstar.jpg",
        "news_site": "SpaceNews",
        "summary": "WASHINGTON — NorthStar Earth and Space has raised another $15 million to support its first four satellites for tracking objects in orbit, the Canadian company said Dec. 6 as it waits on Rocket Lab to get back to flight so they can launch on a future mission.",
        "published_at": "2023-12-06T19:38:06Z",
        "updated_at": "2023-12-06T19:39:15.735000Z",
        "featured": false,
        "launches": [

        ],
        "events": [

        ]
      },
    ]
}
``

## Mockup

Here put a mix of text explanation plus a picture giving us an idea of the layout of your website.

#### Desktop View

![My Desktop View](https://i.imgur.com/ONwnvr7.png)

#### Tablet View

![My Mobile View](https://i.imgur.com/oU2ASB7.png)

#### Mobile View

![My Mobile View](https://i.imgur.com/Yb3PMEK.png)

## Schedule of Work

| Day | Goal                                 | What I did accomplish                                                                           |
| --- | ------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Sat | Create Readme, Deploy, Get Approval  | API test, jQuery render, Deployment Test,Readme complete, Project Approval, Initial CSS Styling |
| Sun | Build fetch of data in JS file       | Mobile and Tablet CSS done, event listeners added. Default feed loading and rendering.          |
| Mon | Render data from API on screen       | Toggling between title/summary working, improved CSS, search function working.                  |
| Tue | Build form for user to interact with | Cleaned up JS, better CSS                                                                       |
| Wed | wrap up functionality                | Added limited pagination function/interface, summary overflow scrolls, API URL consolidated     |
| Thu | mobile layout styling                |                                                                                                 |
| Fri | Desktop layout styling               |                                                                                                 |
| Sat | Present Project                      |                                                                                                 |
```
