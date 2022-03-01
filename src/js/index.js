import '../scss/style.scss';
import Swiper, {Navigation, Pagination} from '../../node_modules/swiper';
Swiper.use([Navigation, Pagination]);
import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination/pagination.scss'

window.addEventListener('resize', () => {
    document.location.reload(true);
}) 

const mediaQuery = window.matchMedia('(min-width: 768px)');

if (mediaQuery.matches) {
    const swipers = document.querySelectorAll('.swiper');
    const wrappers = document.querySelectorAll('.swiper-wrapper');

    for(let i = 0; i < swipers.length; i++) {
        swipers[i].classList.remove('swiper');
        wrappers[i].classList.remove('swiper-wrapper');
    }
} else {
    const servicesLaptop = document.querySelector('.services-laptop');

    servicesLaptop.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    if (!mediaQuery.matches) {

        const swiper = new Swiper('.swiper', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: -50,
            breakpoints: {
                480: {
                    slidesPerView: 1,
            
                    spaceBetween: -150,
                },
                600: {
                    slidesPerView: 2,
        
                    spaceBetween: -50,
                },
            }
        });

        const servicesSwiper = new Swiper('.swiper-services', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            slidesPerView: 1,
            spaceBetween: -30,
            breakpoints: {
                480: {
                    slidesPerView: 1,
            
                    spaceBetween: -150,
                },
                600: {
                    slidesPerView: 2,
        
                    spaceBetween: 0,
                },
            }
        });

        }
})

const sectionContentBtn = document.querySelector('.section-content__btn');
const sectionContentText = document.querySelector('.section-content__p--visibility');
const sectionContentMore = document.querySelector('.section-content__more--visibility')

sectionContentBtn.addEventListener('click', () => {

    sectionContentBtn.classList.toggle('section-content__btn--show');

    if (sectionContentBtn.classList.contains('section-content__btn--show')) {
        sectionContentText.style.display = 'block';
        sectionContentMore.style.display = 'block';
    } else {
        sectionContentText.style.display = 'none';
        sectionContentText.style.display = 'none';
    }

})

function displayHandler(arr, startingPoint, displayCondition) {
    if (displayCondition === 'none') {
        for (let i = startingPoint; i < arr.length; i++) {
            arr[i].style.display = 'none';
        }
    };
    if (displayCondition === 'block') {
        for (let i = startingPoint; i < arr.length; i++) {
            arr[i].style.display = 'block';
        } 
    };
}

const showBtnBrands = document.querySelector('.show-btn-brands');
const showBtnRepair = document.querySelector('.show-btn-repair');

const sliderBrands = document.querySelector('.slider-brands');
const sliderRepair = document.querySelector('.slider-repair');
const brandsSlides = sliderBrands.querySelectorAll('.swiper-slide');
const repairSlides = sliderRepair.querySelectorAll('.swiper-slide');

if (screen.width >= 1803) {
    displayHandler(repairSlides, 7, 'none');
} 

if (screen.width >= 1542 && screen.width < 1803) {
    setTimeout( () => displayHandler(repairSlides, 6, 'none'), 1000);
}

if (screen.width >= 1280 && screen.width < 1542) {
    displayHandler(brandsSlides, 10, 'none');
    displayHandler(repairSlides, 5, 'none');
}

if (screen.width >= 1019 && screen.width < 1280) {
    displayHandler(brandsSlides, 8, 'none');
    displayHandler(repairSlides, 4, 'none');
    
}

if (screen.width >= 768 && screen.width < 1019) {
    displayHandler(brandsSlides, 6, 'none');
    displayHandler(repairSlides, 3, 'none');
    
}

function visibilityHandler(slider, btn, visibleClass) {
    const slides = slider.querySelectorAll('.swiper-slide');
    const btnText = btn.querySelector('.show-btn__text');

    if (slider.classList.contains('slider-brands--show') || slider.classList.contains('slider-repair--show')) {

        slider.classList.remove('slider-brands--show');
        slider.classList.remove('slider-repair--show');

        if(slider.classList.contains('slider-brands')) {
            slider.classList.add('slider-brands--hide');
        } else {
            slider.classList.add('slider-repair--hide')
        }

            btnText.innerHTML = 'Показать все'
            btn.classList.remove('show-btn--show');
            btn.classList.add('show-btn--hide');

        if (screen.width >= 1803) {
            if (slider === sliderRepair) {
                setTimeout( () => displayHandler(slides, 7, 'none'), 1000)
            }
        }
        
        if (screen.width >= 1542 && screen.width < 1803) {
            if (slider === sliderBrands) {
                setTimeout( () => displayHandler(slides, 1, 'block'), 1000)
            } else {
                setTimeout( () => displayHandler(slides, 6, 'none'), 1000)
            }
        } 
        if (screen.width >= 1280 && screen.width < 1542) {
            if (slider === sliderBrands) {
                setTimeout( () => displayHandler(slides, 10, 'none'), 1000)
            } else {
                setTimeout( () => displayHandler(slides, 5, 'none'), 1000)
            }
        }
        if (screen.width >= 1019 && screen.width < 1280) {
            if (slider === sliderBrands) {
                setTimeout( () => displayHandler(slides, 8, 'none'), 1000)
            } else {
                setTimeout( () => displayHandler(slides, 4, 'none'), 1000)
            }
        }

        if (screen.width >= 768 && screen.width < 1019) {
            if (slider === sliderBrands) {
                setTimeout( () => displayHandler(slides, 6, 'none'), 1000)
            } else {
                setTimeout( () => displayHandler(slides, 3, 'none'), 1000)
            }
        }


    } else {
        slider.classList.remove('slider-brands--hide');
        slider.classList.remove('slider-repair--hide');

        if (slider.classList.contains('slider-brands')) {
            slider.classList.add('slider-brands--show');
        } else {
            slider.classList.add('slider-repair--show');
        }
 
            btnText.innerHTML = 'Скрыть';
            btn.classList.remove('show-btn--hide');
            btn.classList.add('show-btn--show');

            if (slider === sliderBrands) {
                displayHandler(slides, 1, 'block');
            } else {
                displayHandler(slides, 1, 'block');
            }
    }
}

showBtnBrands.addEventListener('click', () => visibilityHandler(sliderBrands, showBtnBrands));
showBtnRepair.addEventListener('click', () => visibilityHandler(sliderRepair, showBtnRepair))

let activityChecker = function(arr, activeClass) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].classList.contains(activeClass)) {
            arr[i].classList.remove(activeClass)
        }
    }
}

let modalMenuItems = document.querySelectorAll('.modal-menu__list-item');
let menuItems = document.querySelectorAll('.menu__item');

for (let i = 0; i< menuItems.length; i++) {
    menuItems[i].addEventListener('click', () => {
        activityChecker(menuItems, 'menu__item--active');
        menuItems[i].classList.add('menu__item--active');
    })
}

for (let i = 0; i < modalMenuItems.length; i++) {
    modalMenuItems[i].addEventListener('click', () => {
        activityChecker(modalMenuItems, 'modal-menu__list-item--active');
        modalMenuItems[i].classList.add('modal-menu__list-item--active');
    })
}

let body = document.querySelector('body');
let modalFeedback = document.querySelector('.modal-feedback');
let modalCall = document.querySelector('.modal-call');
let modalWindow = document.querySelector('.modal-main-menu');
let overlay = document.querySelector('.overlay');

let phoneBtns = document.querySelectorAll('.action--open-feedback');
let chatBtns = document.querySelectorAll('.action--open-back-call');
let burgerBtn = document.querySelector('.header__nav-link');
let menuBtn = document.querySelector('.main-menu__btn');
let closeBtn = document.querySelector('.modal-main-menu__btn');
let feedbackCloseBtn = document.querySelector('.modal-feedback__close-btn')
let callCloseBtn = document.querySelector('.modal-call__close-btn')
let modals = document.querySelectorAll('.modal');


function windowVisibility(item) {
    modals.forEach(el => {
        if (el.classList.contains('modal-feedback') || item.classList.contains('modal-call')) {
            el.classList.remove('show-right');
            el.classList.add('hide-right');
            el.style.display = 'none';
        } else {
            el.classList.remove('show');
            el.classList.add('hide');
            el.style.display = 'none';
        }
    })
    if (item.classList.contains('modal-feedback') || item.classList.contains('modal-call')) {
        item.classList.add('show-right');
        item.classList.remove('hide-right');
        item.classList.remove('hide');
        item.classList.remove('show');
        item.style.display = 'flex'
        overlay.classList.add('overlay--show');
    } else {
        item.classList.add('show');
        item.classList.remove('hide');
        item.classList.remove('hide-right')
        item.classList.remove('show-right')
        item.style.display = 'flex'
        overlay.classList.add('overlay--show');
    }
}

function closerWindow (element, classHide, classShow) {
    element.classList.add(classHide);
    element.classList.remove(classShow)
    setTimeout(() => element.style.display = 'none', 1000)
    overlay.classList.remove('overlay--show');
}

burgerBtn.addEventListener('click', () => windowVisibility(modalWindow));
closeBtn.addEventListener('click', () => closerWindow(modalWindow, 'hide', 'show'));
menuBtn.addEventListener('click', () => windowVisibility(modalWindow));
feedbackCloseBtn.addEventListener('click', () => closerWindow(modalFeedback, 'hide-right', 'show-right'));
callCloseBtn.addEventListener('click', () => closerWindow(modalCall, 'hide-right', 'show-right'));
phoneBtns.forEach(el => {
    el.addEventListener('click', () => windowVisibility(modalFeedback));
});
chatBtns.forEach(el => {
    el.addEventListener('click', () => windowVisibility(modalCall))
});
overlay.addEventListener('click', () => {
    closerWindow(modalWindow, 'hide', 'show')
    closerWindow(modalFeedback, 'hide-right', 'show-right');
    closerWindow(modalCall, 'hide-right', 'show-right')
})

if (screen.height < 610) {
    let stickyWrappers = document.querySelectorAll('.sticky-wrapper');
    stickyWrappers.forEach(el => {
        el.style.position = 'static';
    }) 
}

modals.forEach(elem => {
    elem.style.height = body.offsetHeight + 'px';
}) 
