# The Space Collector Challenge

Create three functions that demonstrate your ability to create, move, and monitor elements in the DOM using JavaScript. These functions will test your understanding of DOM manipulation, event handling, and element positioning.

### Requirements:

- Create Element: Write a function named createStar that creates a new <div> element at the current mouse position when the page is clicked. The element should have the class "star" and be 20x20 pixels.
- Track Movement: Write a function named moveActiveStar that updates the position of the most recently created star to follow the mouse cursor.
- Check Position: Write a function named isStarCollected that returns true if a star element is completely inside the collection zone element, and false otherwise.

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
