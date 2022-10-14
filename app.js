

const navSlide = () => {
  const hamburger = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.menu li');

hamburger.addEventListener('click', function(){
 this.classList.toggle('is-active');
 this.classList.toggle('no-hover');
  mobile_menu.classList.toggle('active')
  navLinks.forEach((link, index) =>{
    if(link.style.animation){
      link.style.animation = '';
  
    }
    else{
      link.style.animation = `menuFade 0.5s ease forwards ${index / 8 + 3}s`
    }
  });
  hamburger.classList.toggle('toggle');
});


const descriptionSlide = () => {
  
}

}

navSlide();