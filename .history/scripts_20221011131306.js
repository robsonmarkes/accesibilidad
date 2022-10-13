



const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const visibleClass = `show-modal`;
    
    const openModal = () => {
        backgroundModal.classList.add(visibleClass);
        modal.classList.add(visibleClass)
        console.log(backgroundModal.classList);
        console.log(modal.classList);
    }


};

document.addEventListener(`DOMContentLoaded`, init);