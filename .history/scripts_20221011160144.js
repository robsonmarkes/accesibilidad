const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const sendButton = document.querySelector(`#send-message`);
    const closeBtn = document.querySelectorAll(`#close-btn`);
    const hiddenClass = `close-modal`;

    const form = document.querySelectorAll(`input[type="text"], textarea`);
    
    const validForm = (input) => {

        const validateName = (input) => {
            const message = document.querySelector(`#validate-${input[`name`]}`);
            if(input.value.length > 2) {
                message.classList.contains(`hidden`) ? null : message.classList.add(`hidden`);
                return true;
            } else {
                message.innerHTML = `El campo nome no puede estar vacío`;
                message.classList.contains(`hidden`) ? message.classList.remove(`hidden`) : null;
                return false;
            }
        };

        if(input[`name`] == `name`) {
            validateName(input);
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

    form.forEach(input => {
        input.addEventListener(`keyup`, _ => {
            validForm(input);
        });
    });

    sendButton.addEventListener(`click`, toggleModal);
    closeBtn.forEach(btn => btn.addEventListener(`click`, toggleModal));


};

document.addEventListener(`DOMContentLoaded`, init);