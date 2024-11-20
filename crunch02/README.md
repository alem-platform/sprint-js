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

- Create a clean, intuitive interface
- Ensure responsive design works on all screen sizes
- Use consistent spacing and typography
- Implement a color scheme appropriate for space content

### Data

A [`data.json`](./data.json) file containing:

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

You can expand your project with:

- Dark/light theme toggle

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

## Notes

- Focus on code quality and organization
- Test with different screen sizes
- Consider edge cases
