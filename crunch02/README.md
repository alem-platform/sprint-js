# Space News Dashboard

Ever wondered what's happening right now in space? Not just the big headlines everyone sees, but all of it - the smaller discoveries, the weird findings on Mars?

That's what we're building here: a dashboard that brings together space news from all over. Think of it as your personal space news headquarters, where you can actually find what you're looking for without drowning in clickbait or having to visit 20 different websites.

Your mission is to create a user-friendly dashboard for exploring space-related news and information.

### Objectives

Create an interactive web dashboard that displays and manages space-related news articles with the following features:

- Display a collection of space news articles in a grid or list layout
- Implement search functionality to find specific articles
- Add sorting options (by date, title, source)
- Create filtering capabilities (by categories like "Mars", "SpaceX", "NASA", etc.)
- Include pagination or infinite scroll for article navigation
- Show detailed article information in a modal or separate view

## Instructions

Your project must include these functionalities:

#### Article Display

- Create a responsive grid/list of article cards
- Each card must show:
  - Article title
  - Publication date
  - Source/author
  - Brief description
  - Related image
  - Category/tags

#### Search & Filter

- Implement a search bar that filters articles in real-time
- Add dropdown menus for:
  - Sorting options (newest/oldest, alphabetical)
  - Category filters
  - Source filters

#### Interaction

- Clicking an article should show its full details
- Implement smooth transitions between views
- Add loading states for data fetching
- Include error handling for failed requests

#### Layout & Design

- Ensure responsive design works on all screen sizes
- Choose a color scheme that complements space-related content.

### Data

> You will be provided with a [`data.json`](https://raw.githubusercontent.com/alem-platform/sprint-js/refs/heads/main/crunch02/data.json) file containing a collection of sample articles. Each article in the file includes detailed information such as the title, publication date, source, category, a brief description, full content, an associated image, and relevant tags:

```json
{
  "articles": [
    {
      "id": "1",
      "title": "SpaceX Successfully Launches Crew Dragon",
      "date": "2024-03-15",
      "source": "Space News",
      "category": "Spaceflight",
      "description": "...",
      "content": "...",
      "image": "url-to-image"
    }
  ]
}
```

### Bonus

If you want to explore advanced concepts, replace `data.json` with live data from the **SpaceFlight News API**. This will introduce you to the rereal-world experience with API integration.

- API Documentation: [SpaceFlight News API Docs](https://api.spaceflightnewsapi.net/v4/docs/#/blogs)
- Key Tasks:
  - Fetch articles dynamically from the API.

## Project Structure

```
space-news-dashboard/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── main.js
│   ├── data.js
│   └── utils.js
├── assets/
│   └── images/
└── README.md
```

### Resources

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout)
- [JavaScript Event Handling](https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers)
- [Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
