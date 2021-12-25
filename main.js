'use strict'

function scrollIntoView(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
}

/* Navigation Bar Color Change */
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
window.addEventListener('scroll', ()=>{
    scrollY > navbarHeight 
    ? navbar.classList.add('navbar--dark') 
    : navbar.classList.remove('navbar--dark');
})

/* Section Shifting When Push the Navigation Bar Button */
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event)=>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    navbarMenu.classList.remove('open');
    scrollIntoView(link);
})

/* Section Shifting When Push the Contact Button */
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', ()=>{
    scrollIntoView('#contact');
})

/* Selected Navigation Bar Menu Border Change (MouseOver Event) */
navbarMenu.addEventListener('mouseover', (event)=> {
    event.target.classList.add('active');
})

/* Selected Navigation Bar Menu Border Change (MouseOut Event) */
navbarMenu.addEventListener('mouseout', (event)=>{
    event.target.classList.remove('active');
})

/* Navigation Bar Toggle Button Event (Mobile Version)*/
const navbarToggleButton = document.querySelector('.navbar__toggle-btn');
navbarToggleButton.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
})
