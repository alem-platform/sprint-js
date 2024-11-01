# ShapeShifter: The Div Designer

You’ve just entered the world of ShapeShifter, where you control the creation of a div element with magical sliders! In this problem, you’ll manipulate the following attributes of a div:

- Height
- Width
- Background color
- Border radius (to change between square and circle)

Your mission is to create the div of your dreams by adjusting these sliders!

### Instructions:

Create the `shapeShifter()` function:

- Inside this function, create a div element dynamically.
- Use HTML range inputs (sliders) to control the height, width, background color, border radius, and position (X and Y coordinates).
- As the sliders are adjusted, update the styles of the div in real-time.
- Slider Details:
  - Height Slider: Adjust height from 50px to 500px.
  - Width Slider: Adjust width from 50px to 500px.
  - Color Picker: Choose a background color for the div.
  - Radius Slider: Adjust the border radius from 0% (square) to 50% (circle).

### Starting HTML:

```html
<div class="controls">
  <label for="height">Height: </label>
  <input type="range" id="height" min="50" max="500" value="100" /><br />

  <label for="width">Width: </label>
  <input type="range" id="width" min="50" max="500" value="100" /><br />

  <label for="color">Color: </label>
  <input type="color" id="color" value="#ff0000" /><br />

  <label for="radius">Border Radius: </label>
  <input type="range" id="radius" min="0" max="50" value="0" /><br />
</div>
```
