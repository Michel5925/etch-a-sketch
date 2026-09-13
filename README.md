# Etch-A-Sketch

A browser-based Etch-A-Sketch drawing application built with **HTML, CSS and JavaScript** as part of my JavaScript learning journey.

The application generates an interactive drawing grid where users can draw using different colouring modes, change the grid size and reset the canvas.

## Features

* Interactive drawing grid
* Black drawing mode
* Random rainbow colours
* Darken mode
* Reset the grid
* Adjustable grid size from **1×1 to 100×100**
* Mouse-based drawing
* Dynamically generated grid squares
* Input validation for grid size

## Technologies

* **HTML5** — Page structure and controls
* **CSS3** — Layout and styling
* **JavaScript** — Drawing logic and DOM manipulation

## What I Learned

This project helped me develop my understanding of:

* DOM manipulation
* Creating elements dynamically with JavaScript
* Event listeners
* Mouse events
* Functions
* Loops
* Conditional statements
* Arrays and DOM collections
* `dataset` properties
* Random number generation
* User input and validation
* Managing application state
* CSS Flexbox
* Working with dynamically generated elements

## Drawing Modes

### Black

Draws using solid black.

### Rainbow

Generates a random RGB colour each time a square is coloured.

### Darken

Gradually increases the opacity of black each time a square is drawn over, creating a darkening effect.

## Changing the Grid Size

The default grid is **16×16**.

Users can select **Change Grid Size** and enter a value between **1 and 100**.

The existing grid is then cleared and a new grid is generated based on the selected size.

The grid maintains a fixed **640×640px** canvas while the individual squares are resized according to the selected grid size.

## Reset

The **Reset Grid** button clears the drawing while keeping the current grid size.

It also resets the opacity used by the Darken mode.

## How It Works

The grid is generated dynamically using JavaScript.

For example, selecting a 16×16 grid creates:

```text
16 × 16 = 256 squares
```

Each square receives mouse event listeners that allow the user to draw while holding the mouse button.

The application keeps track of whether the mouse is being held down:

```js
let mouseDown = false;
```

This allows users to draw continuously by moving the mouse across the grid.

## How to Run

### 1. Clone the repository

```bash
git clone https://github.com/Michel5925/etch-a-sketch.git
```

### 2. Navigate into the project

```bash
cd etch-a-sketch
```

### 3. Open the application

Open `index.html` in your browser.

No additional dependencies or installation steps are required.

## What This Project Demonstrates

This project demonstrates my ability to use **JavaScript to dynamically create and manipulate HTML elements**, handle user interaction through mouse events, validate user input and manage application state.

It also demonstrates practical experience with **DOM manipulation, event-driven programming, functions, loops and CSS Flexbox**.

## Future Improvements

Potential future improvements include:

* Eraser mode
* Custom colour picker
* Undo and redo functionality
* Save drawings
* Improved mobile/touch support
* Export drawings as images
* Improved drawing behaviour when moving quickly across the grid

---

Built as part of my **JavaScript learning journey**.
