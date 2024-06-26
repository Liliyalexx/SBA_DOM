# Shopping List Application

## Description

This is a web-based application designed to help users manage their shopping lists. It allows users to add items to their list, save it for later, load previously saved lists, and even email their list to themselves or others. The application also provides convenient navigation links to popular online grocery stores like Amazon Fresh, Hello Fresh, and Walmart, allowing users to access these sites directly from within the application.

## Key Features

- **Dynamic Navigation Menu:** Easily navigate to popular online grocery stores.
- **Shopping List Management:** Add, save, load, and email shopping lists.
- **User-Friendly Interface:** Intuitive design for seamless user experience.

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Use the navigation links to visit different online grocery stores or manage your shopping list.
4. Add items to your list, save it, load it later, or email it to yourself or someone else.

## Technologies Used

- HTML
- CSS
- JavaScript

## Features Implemented

- **Cache Element Retrieval:**
  - Used `document.getElementById` to cache elements like the main container and top menu.
- **DOM Manipulation:**
  - Iterated over a collection of elements to create navigation links using `forEach`.
  - Created elements using `document.createElement`.
  - Appended new elements to the DOM using `appendChild`.
- **Event Handling:**
  - Registered event listeners for navigation links using `addEventListener`.
  - Implemented event handler functions to load content dynamically.
- **Styling:**
  - Modified element styles using `style` properties like `backgroundColor`, `height`, `display`, `alignContent`, `marginTop`, etc.
- **Form Handling:**
  - Implemented form validation using HTML attribute and DOM event-based validation.
- **Data Persistence:**
  - Saved and loaded shopping lists using `localStorage`.
- **External Content Display:**
  - Loaded external content (images) dynamically into an `iframe`.

## Credits

This project was created by Liliya Fedyurina. Feel free to contribute or provide feedback!
