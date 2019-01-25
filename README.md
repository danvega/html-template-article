---
title: HTML Template Tag in Vue Single File Components
published: false
description: A look at what the HTML template tag is and how it can be used in Vanilla JavaScript as well as what its role in Vue is.
tags: webdev, javascript, vue
cover_image:
---

For the past few months I have been writing a ton of documentation, tutorials and exercises around VueJS and Vanilla JavaScript. Just for some context I am Curriculum Developer at [Tech Elevator](https://www.techelevator.com/), a coding bootcamp that teaches students how to code in 14 weeks. With that in mind all of the content is geared towards beginners. 

I was recently working some tutorials and exercises around The Fetch API and I wanted to put together a nice example of how to read some JSON data from a local file and then add it to a page. In a simple example I would just use a [createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) and [createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) and append the items to the DOM. 

In a more complex example where there is a lot more markup involved it can become very cumbersome to create elements, nodes as well as dealing with attributes and classes. In this instance a great solution is [The Content Element Template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template). I also realized that a lot of developers (beginning and vets) might not now what this is or why we would use it. 

In this article I am going to take a look at the `<template>` tag in HTML/Vanilla JavaScript. When you know why this tag exists it might make more sense why its used in Vue Single File Components. 

## The Content Element Template



>The HTML Content Template (`<template>`) element is a mechanism for holding client-side content that is not to be rendered when a page is loaded but may subsequently be instantiated during runtime using JavaScript.
>
>Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the `<template>` element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.


https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template

## Template Demo


## Browser Support


## Template Tag in Vue
