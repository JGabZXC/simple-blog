const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

    if(hamburger.classList.contains('active')) {
        document.body.style.position = 'fixed';
    } else {
        document.body.style.position = 'static';
    }
});

const navItems = document.querySelectorAll('.nav-items').length;

for(var i = 0; i < navItems; i++) {
    document.querySelectorAll('.navItems')[i].addEventListener('click', function () {
        hamburger.classList.remove('active');
        navList.classList.remove('active');
    });
}