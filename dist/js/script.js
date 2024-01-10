// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu   = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixed  = header.offsetTop;

    if(window.pageYOffset > fixed) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed ');
    }
}

// Klik diluar hamburger
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});