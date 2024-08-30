# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

This advice generator app using the [Advice Slip API](https://api.adviceslip.com).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

<img src="./assets/images/screenshot.png" alt="Screenshot" width="300"/>

### Links

- [Solution URL](https://github.com/edpau/fm_advise_generator_app)
- [Live Site URL](https://edpau.github.io/fm_advise_generator_app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox
- CSS BEM
- Mobile-first workflow



### What I learned

#### Accessibility 
- The use of `aria-busy` attribute in toggleLoadingState improves the accessibility of the button for screen readers, indicating to users that the button is currently processing an action.
- Use `aria-live` on the text elements to announce updates. This will notify screen readers when the advice text changes.


### Continued development
- Improve SVG, fallback for non-supporting browsers.
- Enhance the loading indicator by adding animations. 
- Add a skeleton screen to improve the user experience.
- Optimize Performance.
  - Preloading Advice, fetch the next piece of advice in the background while the user is reading the current one to reduce waiting time on the next button click.
- Add testing.


### Useful resources

- [Fetch API, do you really know how to handle errors?](https://dev.to/dionarodrigues/fetch-api-do-you-really-know-how-to-handle-errors-2gj0) 
- [Fetch API is new old version of AJAX](https://dev.to/dionarodrigues/fetch-api-is-new-old-version-of-ajax-1m14) 
- [Error handling with promises](https://tr.javascript.info/promise-error-handling) 


## Author
- Website - [Edward Pau](https://www.edpau.me)
- Frontend Mentor - [@edpau](https://www.frontendmentor.io/profile/edpau)
