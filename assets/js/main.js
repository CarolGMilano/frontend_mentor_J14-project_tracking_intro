let naveg = document.querySelector('[data-menu]');
let menu = document.querySelector('[data-icone]');

let img = document.querySelector('[data-img]')

menu.addEventListener('click', function () {
    if (naveg.hasAttribute('data-menuFechado')) {
        naveg.setAttribute('data-menuAberto', '');
        naveg.removeAttribute('data-menuFechado', '');

        img.setAttribute('src', 'assets/img/icon-close.svg')
    } else {
        naveg.removeAttribute('data-menuAberto', '');
        naveg.setAttribute('data-menuFechado', '');

        img.setAttribute('src', 'assets/img/icon-hamburger.svg')
    }
})