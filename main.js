'use strict'

/* Navigation Bar Color Change */
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    scrollY > navbarHeight 
    ? navbar.classList.add('navbar--dark') 
    : navbar.classList.remove('navbar--dark');
})