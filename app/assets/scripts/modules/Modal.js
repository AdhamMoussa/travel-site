import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalBtn = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalBtn = $('.modal__close');
        this.events();
    }
    events() {
        let that = this;
        this.openModalBtn.on('click', that.openModal.bind(that));
        this.closeModalBtn.on('click', that.closeModal.bind(that));
    }
    openModal(e) {
        e.preventDefault();
        this.modal.addClass('modal--is-visible');
    }
    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;