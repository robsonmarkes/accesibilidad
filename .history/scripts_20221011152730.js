const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const sendButton = document.querySelector(`#send-message`);
    const closeBtn = document.querySelectorAll(`#close-btn`);
    const hiddenClass = `close-modal`;

    const form = document.querySelector(`form`);
    
    const validForm = () => {
        const name = form[`name`].value;
        const email = form[`email`].value;
        const message = form[`message`].value;

        if(name.length < 3) {
            console.log(`nome invalido`);
        }

    }

    const toggleModal = (event) => {
        event.preventDefault();
        if(backgroundModal.classList.contains(hiddenClass) && modal.classList.contains(hiddenClass)) {
            backgroundModal.classList.remove(hiddenClass);
            modal.classList.remove(hiddenClass);
        } else {
            backgroundModal.classList.add(hiddenClass);
            modal.classList.add(hiddenClass) 
        }
    };


    sendButton.addEventListener(`click`, e => {
        validForm();
        toggleModal(e);
    });
    closeBtn.forEach(btn => btn.addEventListener(`click`, toggleModal));


};

document.addEventListener(`DOMContentLoaded`, init);