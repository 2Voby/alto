const burger = document.querySelector('.header-burger');
const mobileMenu = document.querySelector('.header-nav-wrapper');
const mobileMenuContent = document.querySelector('.header-nav');
const closeBurger =  document.querySelector('.header-close_btn');

burger.addEventListener('click', function(){
    if(!mobileMenu.classList.contains('active') && !mobileMenuContent.classList.contains('active')){
        mobileMenu.classList.add('active');
        mobileMenuContent.classList.add('active');
    }
});

closeBurger.addEventListener('click', function(){
    if(mobileMenu.classList.contains('active') && mobileMenuContent.classList.contains('active')){
        mobileMenu.classList.remove('active');
        mobileMenuContent.classList.remove('active');
    }
});



