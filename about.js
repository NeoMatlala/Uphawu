/* ----- SHOW MENU ----- */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}

showMenu('nav-toggle', 'nav-menu')

/* ----- REMOVE MENU MOBILE ----- */
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click', linkAction))


/* ----- CHANGE HEADER'S BACKGROUND ----- */
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header') 
}

window.addEventListener('scroll', scrollHeader)

/* ----- SHOW SCROLL TOP ----- */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollTop)


/* ----- GSAP ANIMATION ----- */
gsap.from('.logo, .nav__toggle', {opacity:0, duration:2, delay:.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav-item', {opacity:0, duration:2, delay:1, y:25, ease:'expo.out', stagger:.2})

gsap.from('.img-wrap', {opacity:0, duration:2, delay:.5, x:60})