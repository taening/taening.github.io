'use strict'

function scrollIntoView(selector) {
    const element = document.querySelector(selector);
    element.scrollIntoView({ behavior: 'smooth' });
}

/* Navigation Bar Color Change */
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
    scrollY > navbarHeight 
    ? navbar.classList.add('navbar--dark') 
    : navbar.classList.remove('navbar--dark');
});

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
});

/* Section Shifting When Push the Contact Button */
const contactButton = document.querySelector('.home__contact');
contactButton.addEventListener('click', ()=>{
    scrollIntoView('#contact');
});

/* Selected Navigation Bar Menu Border Change (MouseOver Event) */
navbarMenu.addEventListener('mouseover', (event)=> {
    event.target.classList.add('active');
});

/* Selected Navigation Bar Menu Border Change (MouseOut Event) */
navbarMenu.addEventListener('mouseout', (event)=>{
    event.target.classList.remove('active');
});

/* Navigation Bar Toggle Button Event (Mobile Version)*/
const navbarToggleButton = document.querySelector('.navbar__toggle-btn');
navbarToggleButton.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('open');
});

/* Home Section Contents Transparent When Scroll Down */
const home = document.querySelector('#home');
const homeHeight = home.getBoundingClientRect().bottom;
document.addEventListener('scroll', ()=>{
    home.querySelector('.section__container').style.opacity = 1 - (scrollY / homeHeight);
});

/* Show Arrow Button When Scroll Down */
const navbarArrowButton = document.querySelector('.navbar__arrow-btn');
document.addEventListener('scroll', ()=>{
    if(scrollY > homeHeight / 2)
        navbarArrowButton.classList.add('visible');
    else 
        navbarArrowButton.classList.remove('visible');
});

/* Section Shifting When Push the Arrow Button */
navbarArrowButton.addEventListener('click', ()=>{
    scrollIntoView('#home');
});
