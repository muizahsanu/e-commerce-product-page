# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: Coming-soon
- Live Site URL: Coming-soon

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- [SCSS](https://sass-lang.com/)

### What I learned

<!-- Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css
.proud-of-this-css {
  color: papayawhip;
}
``` -->

Delete object in array using 'filter' and 'includes'. I'm using this to delete item in Cart. Here the code:
```js
cart = cart.filter(item=>{
    return !item.id.toString().includes(id.toString())
})
```

### Continued development

I want to learn more about creating slideshows. Like a slideshow that can display more than one item, or display many cards.

### Useful resources

- [CSS Scan - Shadow Examples](https://getcssscan.com/css-box-shadow-examples) - This helps me to choose the shadow. On this website there are 90+ examples of shadows.
- [Lightbox](https://www.w3schools.com/howto/howto_js_lightbox.asp) - This site showing how to create modal image gallery (lightbox) with CSS and JavaScript.

## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@muizahsanu](https://www.frontendmentor.io/profile/muizahsanu)
- Linkedin - [Muiz Ahsanu](https://www.linkedin.com/in/muiz-ahsanu-3943a7158/)
- Instagram - [@muiz.ahsanu](https://www.instagram.com/muiz.ahsanu/)


## Acknowledgments

Thanks to [Coder Coder](https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ) for making a video about Frontend Mentor. Because before I knew "Frontend Mentor" I was always confused about what project to make to practice my coding skills. Thanks also to Frontend Mentor for making the challenge.
