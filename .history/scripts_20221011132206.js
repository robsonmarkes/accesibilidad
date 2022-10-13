



const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const sendButton = document.querySelector(`#send-message`);


    const visibleClass = `show-modal`;
    const hiddenClass = `close-modal`;
    
    const toggleModal = () => {
        if(backgroundModal.classList.contains(hiddenClass) && modal.classList.contains(hiddenClass)) {
            backgroundModal.classList.remove(hiddenClass);
            modal.classList.remove(hiddenClass)
        } else {
            backgroundModal.classList.add(hiddenClass);
            modal.classList.add(hiddenClass) 
        }
    };

    sendButton.addEventListener(`click`, (e) => {
        e.preventDefault();
        toggleModal();
    });



};

document.addEventListener(`DOMContentLoaded`, init);