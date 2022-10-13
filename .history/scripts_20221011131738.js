



const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const visibleClass = `show-modal`;
    const hiddenClass = `close-modal`;
    
    const toggleModal = () => {
        backgroundModal.classList.add(visibleClass);
        modal.classList.add(visibleClass)
        console.log(backgroundModal.classList);
        console.log(modal.classList);
    }

    toggleModal();

};

document.addEventListener(`DOMContentLoaded`, init);