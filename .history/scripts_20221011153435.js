const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const sendButton = document.querySelector(`#send-message`);
    const closeBtn = document.querySelectorAll(`#close-btn`);
    const hiddenClass = `close-modal`;

    const form = document.querySelectorAll(`input[type="text"], textarea`);
    
    const validForm = (input) => {
        console.log(`top`);
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

    form.forEach(input => {
        input.addEventListener(`keyup`, validForm(input));
    });

    sendButton.addEventListener(`click`, toggleModal);
    closeBtn.forEach(btn => btn.addEventListener(`click`, toggleModal));


};

document.addEventListener(`DOMContentLoaded`, init);