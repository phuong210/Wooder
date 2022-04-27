// 1. MENU MOBILE
let navBar = document.querySelector('.nav');
let btnMenu = document.querySelector('.header .right .btnmenu');
let selectMenu = document.querySelectorAll('.nav a');


const menuMobile = () => {
    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('active');
        btnMenu.classList.toggle('active');

    });
    
    selectMenu.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            let nameSc = item.getAttribute('href').replace('#', '');
            let section = document.querySelector('.' + nameSc);
            window.scrollTo({
                top: section.offsetTop - (document.querySelector('.header').offsetHeight),
                behavior: 'smooth'
            })
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        })
    })

    window.addEventListener('resize', () => {
        if(window.innerWidth > 768) {
            btnMenu.classList.remove('active');
            navBar.classList.remove('active');
        }
    })
    
    
}
menuMobile();

// 2. LANGUAGES SELECT
let lang = document.querySelector('.header .right .lang');
const langHandle = () => {
    let currentLang = document.querySelector('.header .right .lang .lang__current');
    let currentText = document.querySelector('.header .right .lang .lang__current p');
    let optionLang = document.querySelector('.header .right .lang .lang__option');

    lang.addEventListener('click', (e) => {
        currentLang.classList.toggle('active');
        optionLang.classList.toggle('active');
        e.stopPropagation();
    });


    optionLang.addEventListener('click', (e) => {
        let optionText = currentText.textContent;
        currentText.textContent = e.target.textContent;
        e.target.textContent = optionText;
    });

    document.addEventListener('click', () => {
        currentLang.classList.remove('active');
        optionLang.classList.remove('active');
    })
}
langHandle();

// 3. ADD BG HEADER
let header = document.querySelector('.header');

const bgHeader = () => {
    let heightHeader = header.clientHeight;
    let slider = document.querySelector('.slider');
    let heightSlider = slider.clientHeight;
    window.addEventListener('scroll', () => {
        if (window.pageYOffset >= (heightSlider - heightHeader)) {
        header.classList.add('active');
        }
        else {
            header.classList.remove('active');
        }
    })
}
bgHeader();

// 4. NEWS TABS
let tabText = document.querySelectorAll('.news__tabs .tab');
let tabList = document.querySelectorAll('.news__card');
const newsTab = () => {
    tabText.forEach((item, index) => {
        item.addEventListener('click', () => {
            tabText.forEach((tab) => {
                tab.classList.remove('active');
            })
            tabList.forEach((tabs) => {
                tabs.classList.remove('active');
            })
            item.classList.add('active');
            tabList[index].classList.add('active');
        })
    })
}
newsTab();

// 5. BACK TO TOP
let toTop = document.querySelector('.backTop');
const backToTop = () => {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > window.innerHeight) {
            toTop.classList.add('active');
        }
        else {
            toTop.classList.remove('active');
        }
    });
    toTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}
backToTop();

// 6. PROGRESS BAR
const progressBar = () => {
    let progress = document.querySelector('.header .progress-bar');
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        let height = document.body.offsetHeight - window.innerHeight;
        let percent = Number(scrollY / height) * 100;
        progress.style.width = percent + '%'; 
    });
}
progressBar();

// 7. SLIDER
// const sliderSc = () => {
//     let listItemSlider = document.querySelectorAll('.slider .slider__item .slider__item-wrap');
//     let number = document.querySelector('.slider__bottom-paging .number');
//     let dot = document.querySelectorAll('.slider__bottom-paging .dotted li');
//     let currentSlider = 0;

//     listItemSlider.forEach(function (itemSlider, index) {
//         if(itemSlider.classList.contains('active')) {
//             currentSlider = index;
//         }
//     });

//     const showNumber = (index) => {
//         number.innerHTML = (index).toString().padStart(2, '0');
//     }
//     showNumber(currentSlider + 1);
//     dot[currentSlider].classList.add('active');

//     dot.forEach((item_li, index_li) => {
//         item_li.addEventListener('click', () => {
//             nextSlider(index_li);
//         })
//     })

//     const nextSlider = (index) => {
//         listItemSlider[currentSlider].classList.remove('active');
//         dot[currentSlider].classList.remove('active');
//         listItemSlider[index].classList.add('active');
//         dot[index].classList.add('active');
//         currentSlider = index;
//         showNumber(currentSlider + 1);
//     }

//     document.querySelector('.btnctr.next').addEventListener('click',() => {
//         if(currentSlider < listItemSlider.length - 1) {
//             nextSlider(currentSlider + 1);
//         } else {
//             nextSlider(0);
//         }
//     })

//     document.querySelector('.btnctr.prev').addEventListener('click', () => {
//         if(currentSlider > 0) {
//             nextSlider(currentSlider - 1);
//         } else {
//             nextSlider(listItemSlider.length - 1);
//         }
//     })
    
// }
// sliderSc();

const sliderSc = () => {
    // let $carousel = $('.slider__item');
    window.addEventListener('DOMContentLoaded', () => {
        $(".slider .slider__item").flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: true,
            on: {
                change: function (index) {
                    let indexPage = index + 1;
                    $(".slider__bottom-paging .number").text(indexPage.toString().padStart(2, 0));
                },
                ready: function () {
                    let page = $(".slider__bottom-paging .dotted");
                    $(".flickity-page-dots").appendTo(page);
                }
            }
        });
        $(".btnctr.prev").on("click", function () {
            $(".slider .slider__item").flickity("previous");
        });
        $(".btnctr.next").on("click", function () {
            $(".slider .slider__item").flickity("next");
        });
    })

}

sliderSc();



// 8. POPUP VIDEO
const popupVideo = () => {
    let btnVideo = document.querySelectorAll('.image .btn-play');
    let popupVideo = document.querySelector('.popup-video');
    let closeVideo = document.querySelector('.popup-video .close');
    let iframe = document.querySelector('.popup-video iframe');

    btnVideo.forEach((item) => {
        item.addEventListener('click', () => {
            let idVideo = item.getAttribute('data-video-id');
            iframe.setAttribute('src', `https://www.youtube.com/embed/${idVideo}?autoplay=1`);
            popupVideo.classList.add('active');
        })
    })

    closeVideo.addEventListener('click', () => {
        iframe.setAttribute('src', '');
        popupVideo.classList.remove('active');
    })

    document.querySelector('.popup-video').addEventListener('click', () => {
        iframe.setAttribute('src', '');
        popupVideo.classList.remove('active');
    })
}
popupVideo();


// 9. SCROLL TO SELECT
const scrollSelect = () => {
    let menus = document.querySelectorAll('.header .menu a');
    let scAll = [];

    const removeActive = () => {
        menus.forEach((item, index) => {
                item.classList.remove('active');
            })
    }
    // select sc
    menus.forEach((itemMenu, indexMenu) => {
        let hrefName = itemMenu.getAttribute('href').replace('#', '');
        let nameSc = document.querySelector('.' + hrefName);
        scAll.push(nameSc);

        itemMenu.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                // + 1 tranh trung 
                top: nameSc.offsetTop - (document.querySelector('.header').offsetHeight) + 1,
                behavior: "smooth",
            })
            removeActive();
            itemMenu.classList.add('active');
        })
    })
    
    // scroll sc: active > dau sc && < cuoi sc
    window.addEventListener('scroll', (e) => {
        scAll.forEach((itemSc, indexSc) => {
            if(window.pageYOffset > (itemSc.offsetTop - (document.querySelector('.header').offsetHeight)) 
            && window.pageYOffset < (itemSc.offsetTop + itemSc.offsetHeight)) {
                removeActive();
                menus[indexSc].classList.add('active');
            } else {
                menus[indexSc].classList.remove('active');
            }
        })
    })

}
scrollSelect();



// SLIDER PICTURE
const sliderImg = () => {
    window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    let picture = document.querySelector('.picture');
    let flkty = new Flickity (picture, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        freeScroll: true,
        pageDots: false,
        prevNextButtons: false
    })
    let progressBar = document.querySelector('.controls .progress-bar');
    flkty.on('scroll', (process) => {
        process = Math.max(0, Math.min(1, process));
        progressBar.style.width = process * 100 + '%';
    });
});
}
sliderImg();


// FANCY BOX

Fancybox.bind("[data-fancybox]", {
    Infinity: true,
    Keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
    }
});