# Todo App
A classic to do app to list your tasks.

## Table of contents

&nbsp;&nbsp; ◾ [Overview](#overview)  
&nbsp;&nbsp; ◾ [The challenge](#the-challenge)  
&nbsp;&nbsp; ◾ [Screenshot](#screenshot)  
&nbsp;&nbsp; ◾ [Links](#links)  
&nbsp;&nbsp; ◾ [My process](#my-process)  
&nbsp;&nbsp;&nbsp;&nbsp; ▪️ [Built with](#built-with)  
&nbsp;&nbsp;&nbsp;&nbsp; ▪️ [What I learned](#what-i-learned)  
&nbsp;&nbsp;&nbsp;&nbsp; ▪️ [Continued development](#continued-development)  
&nbsp;&nbsp;&nbsp;&nbsp; ▪️ [Useful resources](#useful-resources)  
&nbsp;&nbsp; ◾ [Author](#author)  


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Todo-App](https://lizzencamelo.github.io/Classic-Todo-App-using-HTML-CSS-JS/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

(i) **prefers-color-scheme:** used to detect if the user has requested a light or dark color theme.
```js
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
```
(ii) **general sibling combinator:** the ~ separates two selectors and matches all iterations of the second element, that follow the first element and are children of the same parent element.
```css
  img ~ p {
  color: lilac;
  }
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.


### Useful resources

- [The prefers-color-scheme](https://www.ditdot.hr/en/dark-mode-website-tutorial) - The prefers-colors-scheme using Javascript gets applied depending on the user's color scheme preference in the OS.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author | [@lizzencamelo](https://www.frontendmentor.io/profile/lizzencamelo)

