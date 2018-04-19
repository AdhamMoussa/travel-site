import $ from 'jquery';
class MobileMenu {
    constructor() {
        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.events();
    }
    toggleMenu() {
        this.menuIcon.toggleClass('site-header__menu-icon--animated');
        this.menuContent.toggleClass('site-header__menu-content--mobile');
    }
    events() {
        this.menuIcon.on('click', this.toggleMenu.bind(this));
    }
}

export default MobileMenu;