/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 5) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// =====================  scroll up ========================================

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    duration: 1300,
    delay: 100,
    reset: true 
})

sr.reveal(`.home__data, .home__btn`,{delay: 1000,distance: '200px',origin: 'bottom'})
sr.reveal(` .app__data`,{origin:'right',distance: '30px', delay: 300})
sr.reveal(`.home__img img,.about__container,.Testimonials`,{delay: 500, origin: 'top',distance: '100px'})
sr.reveal(`.footer__link h5`,{distance: '500px', origin: 'top' ,duration: 500,delay: 400})
sr.reveal(`.service__item1 `,{origin: 'top', delay: 100,distance: '200px'})
sr.reveal(`.service__item2 div, .car__card, .footer__link, .btn-More button`,{origin: 'bottom',distance: '100px',delay: 500 })
sr.reveal(`.app__img img `,{origin: 'left' ,delay: 300, distance: '100px'})


// ScrollReveal('.home__data').reveal('.home__data');



