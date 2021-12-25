'use strict'

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
    scrollIntoView(link);
})

/* Section Shifting When Push the Contact Button */
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', ()=>{
    scrollIntoView('#contact');
})

function scrollIntoView(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
}
