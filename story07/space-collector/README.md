# Space Collector

| Expected file      |
| ------------------ |
| space-collector.js |

### Instructions:

Create three functions that demonstrate your ability to create, move, and monitor elements in the DOM using JavaScript.

- `createStar`: function that creates a new <div> element at the current mouse position when the page is clicked. The element should have the class "star" and be 20x20 pixels.
- `moveActiveStar`: function that updates the position of the most recently created "star" to switch position where the mouse cursor.
- `isStarCollected`: function returns true if a star element is completely inside the collection zone element, and false otherwise.

You're provided with starting CSS and HTML codes below. You can use them to create proper css and html files to test your solution.

### Starting HTML Code:

```html
<div class="collection-zone"></div>
<div class="counter">Stars: 0</div>
```

### Starting CSS Code:

```css
.star {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
}

.collection-zone {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid purple;
}

.collected {
  background: purple;
}
```
