

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

<h1>HTML Basics</h1> HyperText Markup Language (HTML) provides the foundation of content for web applications. Web pages can be either Single Page Applications (SPA) or Multi-Page Applications (MPA). <h2>Common HTML Elements</h2>
<html>: Top-level container
<head>: Metadata about the page
<title>: Title of the webpage
<body>: Contains the content structure of the page
<div>: Block-level element used to group content
<span>: Inline-level element used for grouping
<h2>HTML Elements and Tags</h2> Elements are represented by opening and closing tags. For example, <p> represents a paragraph. Attributes modify elements' behavior. Example: <p id="intro" class="text">Text</p>.
<h1>CSS Basics</h1> The CSS Box Model defines elements as boxes with content, padding, borders, and margins. <h2>Box Model Layers</h2>
Content Box: The actual content of the element
Padding Box: Space around the content, inside the border
Border: Separates the padding from the margin
Margin: The space outside the border
<h2>Flexbox</h2> Flexbox is used for responsive designs where elements adjust based on container size.
display: flex: Enables flex layout
justify-content: Aligns items horizontally
align-items: Aligns items vertically
<h1>JavaScript Basics</h1> <h2>Variables</h2> Variables are declared using let, const, or var (deprecated).
javascript
let x = 10;
const y = 20;

<h2>Functions</h2> Functions can be declared using regular syntax or arrow functions.
javascript
function greet() { return 'Hello'; }
const greet = () => 'Hello';

<h1>Document Object Model (DOM)</h1>
getElementById(): Selects an element by its ID
addEventListener(): Adds an event listener to an element
<h2>CSS and JavaScript Integration</h2> CSS can be applied to JavaScript-selected elements:
javascript
document.querySelector('#byu').style.color = 'green';

<h2>HTML and JavaScript Form Integration</h2> HTML forms can be submitted with or without JavaScript.
xml
<form action="submit.html" method="POST">
  <textarea name="comments"></textarea>
  <button type="submit">Submit</button>
</form>

<h1>Command Line Basics</h1>
chmod: Changes permissions of files
pwd: Prints the working directory
cd: Change directory
ls: List directory contents
mv: Move files
rm: Remove files
<h1>Network and Web Concepts</h1>
Port 80: HTTP
Port 443: HTTPS
Web Certificates: Required for secure HTTPS connections
DNS A Record: Points to an IP address
A web certificate is necessary to use HTTPS, as it ensures encrypted communication between a web server and a browser.
