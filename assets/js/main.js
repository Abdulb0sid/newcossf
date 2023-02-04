/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 300,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.home__img`, { delay: 500 })
sr.reveal(`.home__social`, { delay: 600 })
sr.reveal(`.about__img, .contact__box`, { origin: 'left' })
sr.reveal(`.about__data, .contact__form`, { origin: 'right' })
sr.reveal(`.steps__card, .product__card, .questions__group, .footer`, { interval: 100 })







let food = {
    steklo: {
        name: "ОЧИСТИТЕЛЬ СТЕКОЛ",
        price: 10000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: `Средство для удаления жира, нагара и копоти со сковородок, кухонных плит, мультиварок, фритюрниц, грилей, духовых шкафов и микроволновых печей. Содержит активные вещества, расщепляющие жир, действие которых гарантирует быстрый результат без особых усилий. \    
        Состав:: >30% вода, <5%: неионогенные ПАВ, соль ЕДТА, гидроксид натрия, гидроксид калия, органический растворитель, ароматизирующая добавка.` ,
        get calcSum() {
            return this.price * this.amount
        },
    },
    antijir: {
        name: "АНТИЖИР",
        price: 18000,
        amount: 0,
        desc: `Средство для удаления жира, нагара и копоти со сковородок, кухонных плит, мультиварок, фритюрниц, грилей, духовых шкафов и микроволновых печей. Содержит активные вещества, расщепляющие жир, действие которых гарантирует быстрый результат без особых усилий. \    
        Состав:: >30% вода, <5%: неионогенные ПАВ, соль ЕДТА, гидроксид натрия, гидроксид калия, органический растворитель, ароматизирующая добавка.` ,
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    antinalet: {
        name: "АНТИНАЛЕТ",
        price: 16900,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    vityajki: {
        name: "ВЫТЯЖКИ",
        price: 16000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    grilya: {
        name: "ГРИЛЯ",
        price: 18400,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    vanna: {
        name: "ВАННЫ",
        price: 16900,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    kazan: {
        name: "КАЗАН",
        price: 19500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    gaz: {
        name: "ГАЗ ПЛИТ",
        price: 16000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    parda: {
        name: "ОЧИСТИТЕЛЬ ШТОР И ЖАЛЮЗИ",
        price: 16000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    kovrov: {
        name: "КОВРОВ",
        price: 16900,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalplastik: {
        name: "УНИВЕРСАЛЬНЫЙ ОЧИСТИТЕЛЬ ПЛАСТИКА",
        price: 16500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universal: {
        name: "ОЧИСТИТЕЛЬ УНИВЕРСАЛЬ",
        price: 16000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    mebel: {
        name: "ОЧИСТИТЕЛЬ МЕБЕЛИ",
        price: 16000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    antijirgel: {
        name: "УСИЛЕННЫЙ АНТИЖИР гель",
        price: 12500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    gazgel: {
        name: "УСИЛЕННЫЙ АНТИЖИР гель",
        price: 12500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    grilyagel: {
        name: "ГРИЛЯ гель",
        price: 12500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    kazangel: {
        name: "Очиститель Казана Гель",
        price: 13200,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    antirjavchina: {
        name: "АНТИРЖАВЧИНА",
        price: 16800,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universal750: {
        name: "UNIVERSAL",
        price: 15900,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    antizasor: {
        name: "АНТИЗАСОР",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    antizasortornado: {
        name: "АНТИЗАСОР ТОРНАДО",
        price: 15900,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    skaterti: {
        name: "ПЯТНОВЫВОДИТЕЛЬ ДЛЯ СКАТЕРТИ",
        price: 22000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    shtoroxi: {
        name: "ПЯТНОВЫВОДИТЕЛЬ ДЛЯ ШТОР",
        price: 22000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    mebeloxi: {
        name: "ПЯТНОВЫВОДИТЕЛЬ ДЛЯ МЯГКОЙ МЕБЕЛИ",
        price: 21500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    kovrovoxi: {
        name: "ПЯТНОВЫВОДИТЕЛЬ ДЛЯ КОВРОВ",
        price: 22000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    jdikiymilo1: {
        name: "Увлажняющее крем-мыло",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    jdikiymilo2: {
        name: "Увлажняющее крем-мыло",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    jdikiymilo3: {
        name: "Увлажняющее крем-мыло",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    jdikiymilo4: {
        name: "Увлажняющее крем-мыло",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    jdikiymilo5: {
        name: "Увлажняющее крем-мыло",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtomilojemchuk: {
        name: "Автомобильное мыло жемчужное",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtomilojemchuk: {
        name: "Автомобильное мыло жемчужное",
        price: 15500,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    salonsilno300: {
        name: "Очиститель салона сильнапенный",
        price: 11700,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    salonsilno300: {
        name: "Очиститель салона сильнапенный",
        price: 11700,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    steklopridaetblesk300: {
        name: "Очиститель стекол придает блеск",
        price: 11000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikamat300: {
        name: "Полироль пластика матовый",
        price: 14700,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    konditsionerdlyakoji300: {
        name: "Кондиционер для кожи spray",
        price: 17000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    chernitelreziniturbo300: {
        name: "Чернитель резины turbo",
        price: 14700,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolkuzovkarnauba300: {
        name: "Полироль кузова воском карнауба",
        price: 22000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtoshampunottalkivaetvodu300Blue: {
        name: "Автошампунь",
        price: 13000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtoshampunottalkivaetvodu300Pink: {
        name: "Автошампунь",
        price: 13000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    dvigatel500: {
        name: "Очиститель двигателя",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    salonsilno500: {
        name: "Очиститель салона сильнопенный",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    steklo500: {
        name: "Очиститель стекол",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    rezinanavodnoyosnove500: {
        name: "Чернитель резины на водной основе",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    rezinaiplastik500: {
        name: "Чернитель резины и пластика ",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikglyants500: {
        name: "Полироль пластика глянцевый",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikglyants500: {
        name: "Полироль пластика глянцевый",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikmat500: {
        name: "Полироль пластика матовый",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    chernitelreziniturbo500: {
        name: "Чернитель резины turbo",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    leathercleaner500: {
        name: "Кондиционер для кожи Leather Cleaner",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    salonslabo500: {
        name: "Очиститель салона слабопенный",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikglyants300: {
        name: "Полироль пластика глянцевый",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    hydropolimer500: {
        name: "Гидро полимер Hydro Polymer",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    konditsionerkojagel500: {
        name: "Кондиционер для кожи гель",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    rezinagel500: {
        name: "Чернитель резины гель ",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtoshampunottalkivaetvodu500Pink: {
        name: "Авто шампунь отталкивает воду придает блеск",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    avtoshampunottalkivaetvodu500Blue: {
        name: "Авто шампунь отталкивает воду придает блеск",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    chernitelsilikon300: {
        name: "Чернитель резины силиконовой основе",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    rezinagel300: {
        name: "Чернитель резины гель",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    chernitelplastikkapot300: {
        name: "Чернитель пластика под копотом",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    salonslabo300: {
        name: "Очиститель салона слабопенный",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    polirolplastikagel300: {
        name: "Полироль пластика гель",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    konditsionerkojakrem300: {
        name: "Кондиционер для кожи крем",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    konditsionerkojakrem300tufli: {
        name: "Кондиционер для кожи крем",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalpol550White: {
        name: "Universal для мытья полов",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalpol550Purple: {
        name: "Universal для мытья полов",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalpol550Blue: {
        name: "Universal для мытья полов",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalpol550Green: {
        name: "Universal для мытья полов",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
    universalpol550Pink: {
        name: "Universal для мытья полов",
        price: 15000,
        amount: 0,
        desc: "skfhskdjfhdkjsghdfkjgdkjg",
        desc2: "skfhskdjfhdkjsghdfkjgdkjg",
        get calcSum() {
            return this.price * this.amount
        },
    },
}

let btn = document.querySelectorAll(".main__product-btn")

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function () {
        // console.log(this.closest(".main__product").getAttribute("id"));
        prepare(this)
    })
}
// Делегирование
function prepare(item) {
    // console.log(item); btn!!!
    let parent = item.closest(".main__product") /* main__product */
    let parentID = parent.getAttribute("id") /* plainBurger ... */
    let num = parent.querySelector(".main__product-num")
    let price = parent.querySelector(".main__product-price span")
    let kcall = parent.querySelector(".main__product-kcall span")
    let sym = item.getAttribute("data-symbol")
    // console.log(sym);
    // console.log(food[parentID]);
    let count = food[parentID].amount

    if (sym == "+") {
        count++
    } else if (sym == "-" && count > 0) {
        count--
    }

    food[parentID].amount = count

    num.innerHTML = count
    price.innerHTML = food[parentID].calcSum
}

let receipt = document.querySelector(".receipt")
let receiptWindow = receipt.querySelector(".receipt__window")
let receiptWindowOut = receipt.querySelector(".receipt__window-out")
let receiptWindowBtn = receipt.querySelector(".receipt__window-btn")
let receiptWindowBtns = receipt.querySelector(".receipt__window-btns")
let addCart = document.querySelector(".addCart")

addCart.addEventListener("click", function () {
    receipt.style.display = "flex"
    setTimeout(() => {
        receipt.style.opacity = "1"
        receiptWindow.style.top = "25%"
    }, 100);

    let menu = "Ваши заказы: \n\n"
    let totalPrice = 0
    let totalKcall = 0

    for (const key in food) {
        // console.log(food[key].name);
        if (food[key].amount) {
            menu += `${food[key].name} ${food[key].amount}x = ${food[key].calcSum} \n`
            totalPrice += food[key].calcSum
            totalKcall += food[key].calcKcall
        }
    }

    receiptWindowOut.innerHTML = `${menu}\nИтоговая цена: ${totalPrice} сум`
})

receiptWindowBtn.addEventListener("click", function () {
    // location = "https://chrome.google.com/webstore/category/extensions?hl=ru";
    location.reload()
})
receiptWindowBtns.addEventListener("click", function () {
    receipt.style.opacity = "0"
    receiptWindow.style.top = "-100%"
    setTimeout(() => {
        receipt.style.display = "none"
    }, 200);
})

receipt.addEventListener("click", function (e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.currentTarget); receipt
    if (e.target === e.currentTarget) {
        receipt.style.opacity = "0"
        receiptWindow.style.top = "-100%"
        setTimeout(() => {
            receipt.style.display = "none"
        }, 200);
    }
})

// let mainProductImg = document.querySelectorAll('.main__product-img')
let mainProductTitle = document.querySelectorAll('.main__product-info')
let view = document.querySelector('.view')
let close1 = document.querySelector('.view__close')
// console.log();

for (let i = 0; i < mainProductTitle.length; i++) {
    mainProductTitle[i].addEventListener('click', function () {
        // console.log(this.closest('.main__product').getAttribute('id'));
        view.classList.add('active'),
            close1.addEventListener('click', function () {
                view.classList.remove('active')
            })
        prepare1(this)
    })
}



function prepare1(item1) {
    let parentImg = item1.closest('.main__product')
    let parent = parentImg.getAttribute("id") /* plainBurger ... */
    let p = food[parent].desc
    let p1 = food[parent].desc2
    let txt = document.querySelector('.products__info-auto')
    let txt1 = document.querySelector('.products__info')
    let img = parentImg.querySelector('.main__product-info img')
    let viewImg = document.querySelector('.view img')
    let bbb = img.getAttribute('src')
    txt.innerHTML = p
    txt1.innerHTML = p1

    viewImg.setAttribute('src', bbb)
    console.log(viewImg);

    console.log(bbb);

}
// console.log(img);



view.addEventListener('click', function (event) {
    if (event.target === event.currentTarget) {
        view.classList.remove('active')
    }
})



let infotxt = document.querySelector(".info__li")
let infotxt1 = document.querySelector(".info__li1")
let productinfo = document.querySelector(".products__info-auto")
let productinfo1 = document.querySelector(".products__info")
infotxt.addEventListener('click', function () {
    productinfo.classList.add('active')
    productinfo1.classList.remove('active')

})
infotxt1.addEventListener('click', function () {
    productinfo1.classList.add('active')
    productinfo.classList.remove('active')

})
