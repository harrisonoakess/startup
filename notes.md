

# Comprehensive Study Guide for HTML, CSS, and JavaScript

## HTML: Structure and Semantics

### Basic Structure

- An HTML document starts with `<!DOCTYPE html>`, followed by the `<html>` element.
- The `<head>` element contains metadata, such as the `<title>` and links to stylesheets.
- The `<body>` element includes the content users interact with.

### Elements and Tags

- **Tags** define HTML elements, enclosed in angle brackets (`< >`), typically with an opening (`<p>`) and closing tag (`</p>`).
- **Block-level elements** (e.g., `<div>`, `<p>`) start on a new line, while **inline elements** (e.g., `<span>`, `<a>`) do not disrupt text flow.

### Attributes

- Attributes provide additional information about elements. Common attributes include `id`, `class`, `src`, and `href`.
  - Example: `<p id="hello" class="greeting">Hello world</p>`

### Hyperlinks

- The `<a>` tag creates hyperlinks. The `href` attribute specifies the URL.
  - Example: `<a href="https://example.com">Visit Example</a>`

### Forms and Inputs

- Forms (`<form>`) collect user input, containing various input types like text fields, checkboxes, and buttons.

### Media Elements

- Images: `<img src="image.jpg" alt="Description">`
- Audio/Video: Use `<audio>` and `<video>` tags with controls for playback.

## CSS: Styling and Layout

### Overview

- **CSS (Cascading Style Sheets)** styles HTML elements, controlling layout, colors, fonts, etc., allowing separation of content from design.

### Selectors

- Patterns used to select elements for styling.
  - Type selectors (`p`), class selectors (`.classname`), ID selectors (`#idname`).

### Box Model

- Describes element structure: content, padding, border, margin.
  - **Content Box**: Area where text/images appear.
  - **Padding Box**: Space between content and border.
  - **Border Box**: Surrounds padding with color/style.
  - **Margin Box**: Space outside the border.

### Flexbox and Grid Layouts

- **Flexbox**: One-dimensional layout for arranging items in rows/columns.
- **Grid Layout**: Two-dimensional system defining rows/columns.

### Responsive Design

- Ensures web applications work on all devices using media queries, flexible grids, and responsive images.

## JavaScript: Interactivity and Logic

### Overview

- JavaScript enables interactive web pages. It manipulates the DOM (Document Object Model) and runs in browsers.

### Variables and Data Types

- Declared using `let`, `const`, or (deprecated) `var`. Types include strings, numbers, booleans, arrays, objects.

### Functions

- Blocks of code for specific tasks. Defined using traditional syntax or arrow functions (`=>`).

### DOM Manipulation

- Change HTML content using methods like `getElementById()`, `querySelector()`, `innerHTML`.

### Events

- Respond to events (clicks/key presses) using event listeners (`addEventListener`).

## Advanced Topics

### Promises and Async/Await

- Promises handle asynchronous operations with states: pending, fulfilled, rejected.
- `async/await` simplifies promise handling by writing asynchronous code synchronously.

### JSON (JavaScript Object Notation)

- Lightweight data-interchange format easy for humans/machines to read/write. Used to transmit data between server/web application.


# pt 2 notes #

1. HTML Basics
HyperText Markup Language (HTML):
Provides the foundation of content for web applications.
Web pages can be either Single Page Applications (SPA) or Multi-Page Applications (MPA).
Common HTML Elements:
<html>: Top-level container.
<head>: Metadata about the page.
<title>: Title of the webpage.
<body>: Contains the content structure of the page.
<div>: Block-level element used to group content.
<span>: Inline-level element used for grouping.
Example Question:
In the following code, what does a <div> tag do?
Answer: It creates a block-level container used to group content.
2. HTML Elements and Tags
Elements: Represented by opening and closing tags. For example, <p> represents a paragraph.
Attributes: Elements can have attributes that modify their behavior. Example: <p id="intro" class="text">Text</p>
Example Question:
What is the difference between the #title and .grid selector in CSS?
Answer: #title targets an element with the ID title, while .grid targets all elements with the class grid.
3. CSS Basics
CSS Box Model:
CSS defines elements as boxes. These boxes have content, padding, borders, and margins. Understanding the box model is essential for layout management.
Box Model Layers:
Content Box: The actual content of the element.
Padding Box: Space around the content, inside the border.
Border: Separates the padding from the margin.
Margin: The space outside the border.
Example Question:
What is the difference between padding and margin in CSS?
Answer: Padding is the space inside the border but outside the content, while the margin is the space outside the border.
4. CSS Flexbox and Grid
Flexbox:
Used for responsive designs where elements should adjust based on container size.
Properties:
display: flex: Enables flex layout.
justify-content: Aligns items horizontally.
align-items: Aligns items vertically.
Example Question:
Given this HTML and CSS, how will the images be displayed using flex?
Answer: The images will be aligned based on the flex properties like flex-direction, justify-content, etc.
5. JavaScript Basics
Variables:
Declared using let, const, or var (deprecated).
Example:
js
let x = 10;
const y = 20;

Functions:
Functions can be declared using regular syntax or arrow functions.
js
function greet() { return 'Hello'; }
const greet = () => 'Hello';

Example Question:
What does the following code using arrow syntax function declaration do?
Answer: It defines a function that returns the string 'Hello'.
6. Document Object Model (DOM)
getElementById(): Selects an element by its ID.
addEventListener(): Adds an event listener to an element.
Example Question:
What does the following code output using getElementByID and addEventListener?
Answer: It selects the element by its ID and attaches an event listener that triggers when the event occurs.
7. CSS and JavaScript Integration
CSS can be applied to JavaScript-selected elements:
js
document.querySelector('#byu').style.color = 'green';

Example Question:
How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
Answer: Use document.getElementById("byu").style.color = 'green';.
8. HTML and JavaScript Form Integration
HTML forms can be submitted with or without JavaScript. Forms send data using input elements like textarea, input, etc.
Example:
xml
<form action="submit.html" method="POST">
  <textarea name="comments"></textarea>
  <button type="submit">Submit</button>
</form>

9. Command Line Basics
chmod: Changes permissions of files.
pwd: Prints the working directory.
cd: Change directory.
ls: List directory contents.
mv: Move files.
rm: Remove files.
Example Question:
What does the console command chmod, pwd, cd, ls, mv, rm do?
Answer: Each command manages file and directory manipulation in the terminal.
10. Network and Web Concepts
Port 80: HTTP.
Port 443: HTTPS.
Web Certificates: Required for secure HTTPS connections.
DNS A Record: Points to an IP address.
Example Question:
Is a web certificate necessary to use HTTPS?
Answer: Yes, it ensures encrypted communication between a web server and a browser.
11. Promises in JavaScript
Promises:
Used for asynchronous operations.
Example:
js
let promise = new Promise((resolve, reject) => {
  // Async code
});

Example Question:
What will the following code using Promises output when executed?
Answer: Depending on the state of the promise, it will output either a resolved value or a rejection.
