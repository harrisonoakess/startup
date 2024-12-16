

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

Here's the content converted to GitHub-flavored Markdown, keeping the structure and content exactly as provided:

# 1. HTML Basics

HyperText Markup Language (HTML):

- Provides the foundation of content for web applications.
- Web pages can be either Single Page Applications (SPA) or Multi-Page Applications (MPA).

Common HTML Elements:

- `<html>`: Top-level container.
- `<head>`: Metadata about the page.
- `<title>`: Title of the webpage.
- `<body>`: Contains the content structure of the page.
- `<div>`: Block-level element used to group content.
- `<span>`: Inline-level element used for grouping.

Example Question:
In the following code, what does a `<div>` tag do?
Answer: It creates a block-level container used to group content.

# 2. HTML Elements and Tags

Elements: Represented by opening and closing tags. For example, `<p>` represents a paragraph.
Attributes: Elements can have attributes that modify their behavior. Example: `<p id="intro" class="text">Text</p>`

Example Question:
What is the difference between the #title and .grid selector in CSS?
Answer: #title targets an element with the ID title, while .grid targets all elements with the class grid.

# 3. CSS Basics

CSS Box Model:

CSS defines elements as boxes. These boxes have content, padding, borders, and margins. Understanding the box model is essential for layout management.

Box Model Layers:

- Content Box: The actual content of the element.
- Padding Box: Space around the content, inside the border.
- Border: Separates the padding from the margin.
- Margin: The space outside the border.

Example Question:
What is the difference between padding and margin in CSS?
Answer: Padding is the space inside the border but outside the content, while the margin is the space outside the border.

# 4. CSS Flexbox and Grid

Flexbox:

Used for responsive designs where elements should adjust based on container size.

Properties:
- `display: flex`: Enables flex layout.
- `justify-content`: Aligns items horizontally.
- `align-items`: Aligns items vertically.

Example Question:
Given this HTML and CSS, how will the images be displayed using flex?
Answer: The images will be aligned based on the flex properties like flex-direction, justify-content, etc.

# 5. JavaScript Basics

Variables:

Declared using let, const, or var (deprecated).
Example:
```js
let x = 10;
const y = 20;
```

Functions:

Functions can be declared using regular syntax or arrow functions.
```js
function greet() { return 'Hello'; }
const greet = () => 'Hello';
```

Example Question:
What does the following code using arrow syntax function declaration do?
Answer: It defines a function that returns the string 'Hello'.

# 6. Document Object Model (DOM)

- `getElementById()`: Selects an element by its ID.
- `addEventListener()`: Adds an event listener to an element.

Example Question:
What does the following code output using getElementByID and addEventListener?
Answer: It selects the element by its ID and attaches an event listener that triggers when the event occurs.

# 7. CSS and JavaScript Integration

CSS can be applied to JavaScript-selected elements:
```js
document.querySelector('#byu').style.color = 'green';
```

Example Question:
How would you use JavaScript to select an element with the id of "byu" and change the text color of that element to green?
Answer: Use `document.getElementById("byu").style.color = 'green';`.

# 8. HTML and JavaScript Form Integration

HTML forms can be submitted with or without JavaScript. Forms send data using input elements like textarea, input, etc.
Example:

```html
<form action="submit.html" method="POST">
  <textarea name="comments"></textarea>
  <button type="submit">Submit</button>
</form>
```

# 9. Command Line Basics

- chmod: Changes permissions of files.
- pwd: Prints the working directory.
- cd: Change directory.
- ls: List directory contents.
- mv: Move files.
- rm: Remove files.

Example Question:
What does the console command chmod, pwd, cd, ls, mv, rm do?
Answer: Each command manages file and directory manipulation in the terminal.

# 10. Network and Web Concepts

- Port 80: HTTP.
- Port 443: HTTPS.
- Web Certificates: Required for secure HTTPS connections.
- DNS A Record: Points to an IP address.

Example Question:
Is a web certificate necessary to use HTTPS?
Answer: Yes, it ensures encrypted communication between a web server and a browser.

# 11. Promises in JavaScript

Promises:

Used for asynchronous operations.
Example:
```js
let promise = new Promise((resolve, reject) => {
  // Async code
});
```

Example Question:
What will the following code using Promises output when executed?
Answer: Depending on the state of the promise, it will output either a resolved value or a rejection.












### CS 260 Final Exam Cheat Sheet

---

#### **HTTP Basics**

**Default Ports**:
- **HTTP**: `80` – Standard web requests.
- **HTTPS**: `443` – Secure web requests.
- **SSH**: `22` – Secure Shell for remote access.

**HTTP Status Codes**:
- **1xx – Informational**:
  - `100 Continue`: The service is working on the request.
- **2xx – Success**:
  - `200 OK`: Resource successfully returned.
  - `201 Created`: A resource has been created.
  - `204 No Content`: Successful request, no resource returned.
- **3xx – Redirection**:
  - `304 Not Modified`: Cached resource is still valid.
  - `307 Temporary Redirect`: Resource is temporarily at another location.
- **4xx – Client Errors**:
  - `400 Bad Request`: Malformed or invalid request.
  - `401 Unauthorized`: Missing/invalid authentication.
  - `403 Forbidden`: Unauthorized to access resource.
  - `404 Not Found`: Resource not found.
  - `429 Too Many Requests`: Client has sent too many requests.
- **5xx – Server Errors**:
  - `500 Internal Server Error`: An error occurred on the server.
  - `503 Service Unavailable`: Temporary server overload or maintenance.

**Common HTTP Methods**:
- **GET**: Retrieve data from the server.
- **POST**: Submit data to the server.
- **PUT**: Update an existing resource.
- **DELETE**: Remove a resource.
- **OPTIONS**: Fetch supported request methods and metadata.

---

#### **HTTP Headers**

**Request Headers**:
- **Authorization**: Includes credentials (e.g., `Bearer <token>`).
- **Accept**: Indicates acceptable response formats (e.g., `application/json`).
- **Content-Type**: Specifies the request body format (e.g., `application/json`).

**Response Headers**:
- **Set-Cookie**: Server sets cookies for the client. Examples:
  - `Secure`: Only sent over HTTPS.
  - `HttpOnly`: JavaScript cannot access this cookie.
  - `SameSite`: Restricts cross-site sharing (`Strict` or `Lax`).
- **Access-Control-Allow-Origin**: Specifies allowed origins for CORS.
- **Cache-Control**: Defines caching policies.

**Cookies**:
- HTTP is stateless, so cookies allow state tracking.
- Secure cookies enhance protection by enforcing HTTPS.

---

#### **React Basics**

**React Components**:
- Functional components define UI logic and structure.
  ```jsx
  const Hello = () => {
    const [count, setCount] = React.useState(0);
    return <div onClick={() => setCount(count + 1)}>Clicked {count} times</div>;
  };
  ```

**React Hooks**:
- **`useState`**: Manages component state.
  ```jsx
  const [count, setCount] = React.useState(0);
  ```
- **`useEffect`**: Handles side effects (e.g., fetching data or cleaning up resources).
  ```jsx
  React.useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);
  ```
- **`useContext`**: Shares data globally across components.
- **`useRef`**: Provides a persistent reference that doesn’t re-render components.

**React Router**:
- Enables navigation between pages in a Single Page Application (SPA).
  ```jsx
  import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

  <Router>
    <Link to="/home">Home</Link>
    <Route path="/home" component={HomeComponent} />
  </Router>
  ```

**JSX Syntax**:
- Combines HTML and JavaScript into a single syntax.
  ```jsx
  const element = <h1>Hello, world!</h1>;
  ```

---

#### **Node.js Basics**

**What is Node.js?**
- A runtime environment that allows running JavaScript server-side.

**Creating a Basic HTTP Server**:
```javascript
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});
server.listen(8080);
```

**Express.js Middleware Example**:
```javascript
const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

app.get('/api/data', (req, res) => res.send({ message: 'Hello, World!' }));
```

---

#### **MongoDB Basics**

**Querying MongoDB**:
- Find documents matching specific criteria:
  ```javascript
  db.collection('users').find({ name: 'Mark' });
  ```
- **Insert a document**:
  ```javascript
  db.collection('users').insertOne({ name: 'John', age: 30 });
  ```

**Storing Passwords**:
- Always hash passwords using algorithms like bcrypt.
  ```javascript
  const bcrypt = require('bcrypt');
  const hashedPassword = await bcrypt.hash(password, 10);
  ```

---

#### **WebSocket Basics**

**Purpose**:
- Maintains a persistent connection for real-time communication.

**Example**:
- **Backend (Node.js)**:
  ```javascript
  const WebSocket = require('ws');
  const wss = new WebSocket.Server({ port: 8080 });

  wss.on('connection', ws => {
    ws.on('message', message => console.log(`Received: ${message}`));
    ws.send('Hello, Client!');
  });
  ```
- **Frontend**:
  ```javascript
  const ws = new WebSocket('ws://localhost:8080');
  ws.onmessage = event => console.log(event.data);
  ws.send('Hello, Server!');
  ```

---

#### **Deployment Basics**

**PM2**:
- Process manager for Node.js applications.
- Common Commands:
  - `pm2 start index.js -n appName`: Start an application.
  - `pm2 stop appName`: Stop an application.
  - `pm2 restart appName`: Restart an application.
  - `pm2 logs appName`: View logs.

**Deployment Steps**:
1. Prepare build files (`npm run build`).
2. Transfer files to the production server using secure copy (SCP).
3. Use PM2 to start and manage the application.

---

#### **Development Tools**

**Vite**:
- A fast build tool for frontend development.
- Usage:
  ```json
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  }
  ```

**Package.json**:
- Manages project dependencies and scripts.
- Key fields:
  - `dependencies`: Libraries required for production.
  - `devDependencies`: Libraries used only during development.
  - `scripts`: Automate tasks like `start`, `build`, or `test`.

---

#### **CORS and SOP**

**SOP (Same-Origin Policy)**:
- Restricts JavaScript from making requests to different origins.

**CORS (Cross-Origin Resource Sharing)**:
- Allows controlled access to resources from other origins.
- Example:
  ```javascript
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  ```

---

#### **Additional Notes**

**HTTP Versions**:
- **HTTP/1.1**: Persistent connections, chunked transfers.
- **HTTP/2**: Binary protocol, multiplexing.
- **HTTP/3**: Built on QUIC, always encrypted.

**URL Anatomy**:
```
<scheme>://<domain>:<port>/<path>?<parameters>#<anchor>
```
- Example: `https://example.com:443/path?name=value#section`

**Common Acronyms**:
- **JSX**: JavaScript XML.
- **AWS**: Amazon Web Services.
- **NPM**: Node Package Manager.
- **NVM**: Node Version Manager.


Here's the reformatted version with questions and answers side by side:

# Web Development Notes

## Networking and Protocols

Q: What is the default port for HTTP/HTTPS/SSH?
A: HTTP: 80, HTTPS: 443, SSH: 22

Q: What does an HTTP status code in the range of 300/400/500 indicate?
A: 300 range: Redirection, 400 range: Client-side errors, 500 range: Server-side errors

Q: What does the HTTP header content-type allow you to do?
A: Specifies the media type of the resource, helping the client interpret the content correctly

Q: What does a "Secure cookie"/"Http-only cookie"/"Same-site cookie" do?
A: Secure cookie: Only sent over HTTPS
   Http-only cookie: Cannot be accessed by JavaScript
   Same-site cookie: Controls when cookies are sent with cross-site requests

## Express.js

Q: Assuming the following Express middleware, what would be the console.log output for an HTTP GET request with a URL path of /api/document?
A: The console would log: /api/document

Q: Given the following Express service code: What does the following front end JavaScript that performs a fetch return?
A: A fetch would return a Promise that resolves to the Response object from the server.

## MongoDB

Q: Given the following MongoDB query, select all of the matching documents {name:Mark}
A: This query would return all documents where the name field exactly matches "Mark".

## Security

Q: How should user passwords be stored?
A: Passwords should be stored using strong, slow hashing algorithms (e.g., bcrypt, Argon2) with unique salts for each password.

## WebSockets

Q: What is the websocket protocol intended to provide?
A: Full-duplex, bidirectional communication between client and server over a single TCP connection.

## Acronyms

Q: What do the following acronyms stand for? JSX, JS, AWS, NPM, NVM
A: JSX: JavaScript XML
   JS: JavaScript
   AWS: Amazon Web Services
   NPM: Node Package Manager
   NVM: Node Version Manager

## React

Q: Assuming an HTML document with a body element. What text content will the following React component generate?
A: Assuming a component like:
   ```jsx
   function Welcome({name}) {
     return <h1>Hello, {name}</h1>;
   }
   ```
   It would generate: <h1>Hello, [name parameter value]</h1>

Q: What does a React component with React.useState do?
A: Allows functional components to have state variables.

Q: What are React Hooks used for?
A: Used to add state and other React features to functional components without writing a class.

Q: What does the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?
A: State Hook: Adds state to functional components
   Context Hook: Accesses context in functional components
   Ref Hook: Creates a mutable reference
   Effect Hook: Performs side effects in functional components
   Performance Hook: Optimizes component rendering

Q: Given React Router code, select statements that are true.
A: React Router enables navigation among views in a React application, allowing for single-page application behavior.

## Package Management

Q: What does the package.json file do?
A: Defines the project dependencies and contains various metadata about the project.

## JavaScript

Q: What does the fetch function do?
A: Provides an interface for making network requests, returning a Promise that resolves to the Response object.

## Node.js

Q: What does node.js do?
A: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing execution of JavaScript on the server-side.

Q: What does pm2 do?
A: PM2 is a process manager for Node.js applications, handling deployment, monitoring, and clustering.

Q: What does Vite do?
A: Vite is a build tool that provides a faster and leaner development experience for modern web projects.


# Web Development Quiz Answers

1. Port 80 is reserved for:
   - HTTP

2. HTTP status codes in the 300 range are for:
   - Content redirects or caching

3. Which is NOT a standard HTTP header:
   - Language

4. Cookies allow:
   - A server to store data on the client

5. For the request [GET] /fav/george what is logged:
   - paul george john

6. Which Express middleware will match this fetch request:
   - app.get('/fav/:id', () => {})

7. What document matches this MongoDB query:
   - { name: "harry", score: 5 }

8. Why is hashing stored passwords important:
   - It improves security by making the password unreadable

9. Given the following code what will console.log print:
   - Client:Server:Hello

10. What value does WebSocket add to HTTP:
    - It removes the need to keep a connection open

11. What is NOT a purpose of JSX:
    - To combine CSS, HTML, and JavaScript

12. What will component A initially display:
    - burgerfish

13. What component will the URL `/burger` render:
    - B

14. What does the command "NPM install ws" NOT do:
    - Adds template code for websockets to your JavaScript

15. True or false: You can use fetch in front-end and back-end code.
    - True

16. Which of the following is NOT true about a Linux daemon:
    - Cannot fork other processes




