const navSlide = () => {
    const burger = document.querySelector('div.burger');
    const nav = document.querySelector('ul.burger');
    const navLinks = document.querySelectorAll('li.burger');
    
    //Toggle Nav
    burger.addEventListener('click',()=> {
        nav.classList.toggle('nav-active');
    })
    
}

navSlide();