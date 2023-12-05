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
[
  {
    "events": "[]",
    "featured": "false",
    "id": "21687",
    "image_url": "https://spacenews.com/wp-content/uploads/2023/12/231130-X-FC312-0001-300x239.jpg",
    "launches": "[]",
    "news_site": "SpaceNews",
    "published_at": "2023-12-02T13:34:11Z",
    "summary": "Canada is the first international partner to access the U.S. Mobile User Objective System (MUOS) satellite network, the U.S. Space Force announced Nov. 30.",
    "title": "Canada taps into U.S. military satellites for mobile communications",
    "updated_at": "2023-12-02T13:39:15.410000Z",
    "url": "https://spacenews.com/canada-taps-into-u-s-military-satellites-for-mobile-communications/"
  }
]
```

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
| Tue | Build form for user to interact with |                                                                                                 |
| Wed | wrap up functionality                |                                                                                                 |
| Thu | mobile layout styling                |                                                                                                 |
| Fri | Desktop layout styling               |                                                                                                 |
| Sat | Present Project                      |                                                                                                 |
