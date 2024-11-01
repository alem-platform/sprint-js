# The Interactive Keyboard Symphony

Create a set of functions that demonstrate DOM manipulation through keyboard events and form interactions. This exercise combines keyboard input handling, element creation, and form manipulation to create an interactive musical-themed experience.

### Requirements:

1. Keyboard Orchestra: Write a function named `playNote` that:

- Fires on every key press
- Creates a colorful note element when musical keys (a, b, c, d, e, f, g) are pressed
- Removes the last note when the 'Delete' key is pressed
- Clears all notes when the 'Space' key is pressed

2. Volume Control: Write a function named `adjustVolume` that:

- Takes a number input value (0-100)
- Updates a progress bar element with the new volume level
- Disables the volume control when muted

3. Instrument Select: Write a function named `changeInstrument` that:

- Updates an input field with the selected instrument name (`piano`/`guitar`)
- Changes the note colors based on the selected instrument
- Disables unavailable instruments

### Starting HTML code:

```html
<div id="music-box"></div>

<div class="controls">
  <input type="range" id="volume" min="0" max="100" value="50" />
  <button id="muteButton">Mute</button>
  <input type="text" id="instrument" value="piano" />
  <button id="changeInstrument">Change Instrument</button>
</div>
```

### Starting CSS code:

```css
.note {
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 50%;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  color: white;
}

.controls {
  margin-top: 20px;
  padding: 10px;
  background: #f0f0f0;
}

.disabled {
  opacity: 0.5;
  pointer-events: none;
}
```

### Starting JS code:

```js
const instrumentColors = {
  piano: {
    a: "#FF6B6B",
    b: "#4ECDC4",
    c: "#45B7D1",
    d: "#96CEB4",
    e: "#FFEEAD",
    f: "#D4A5A5",
    g: "#9B59B6",
  },
  guitar: {
    a: "#2ECC71",
    b: "#E74C3C",
    c: "#F1C40F",
    d: "#8E44AD",
    e: "#3498DB",
    f: "#E67E22",
    g: "#1ABC9C",
  },
};
```
