function ibg(){
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}
ibg();


// Mеню бургер (JS)
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu){
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active'); 
        menuBody.classList.toggle('_active'); 
    });
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0 ) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click',onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
    
      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active'); 
        menuBody.classList.remove('_active'); 
      }
			
    window.scrollTo({
      top: gotoBlockValue,
      behavior: "smooth"
    });
    e.preventDefault();
    }
  }
};

// Инициализация swiper
const ProjectsSlider = document.querySelector('.projects-slider'),
		MainSlider= document.querySelector('.main-slider');

let Projects  = new Swiper(ProjectsSlider, {
	centeredSlides: true,
	loop: true, 
	autoHeight: true,

	// Кол-во слайдов для показа | Позволяет задавать ширину самостоятельно
	slidesPerView: 'auto',

 // Отступы
	spaceBetween: 0,

	//Включение / отключение 
	// перетаскивание на пк
	simulateTouch: true,

	// Чувсвтвительность свайппа
	touchRatio: 1,

	// Угол срабатывания свайпа / перетаскивания 
	touchAngle: 45,

	// Курсор перетаскивания 
	grabCursor: true,

	autoplay: {
		delay: 3000,
	}
});

let Main = new Swiper(MainSlider, {
	centeredSlides: true,
	loop: true, 
	autoHeight: true,
	// Кол-во слайдов для показа | Позволяет задавать ширину самостоятельно
	slidesPerView: 'auto',
	grabCursor: true,
 // Отступы
	spaceBetween: 0,

	navigation: {
    nextEl: '.btn-right',
    prevEl: '.btn-left',
  },
});
