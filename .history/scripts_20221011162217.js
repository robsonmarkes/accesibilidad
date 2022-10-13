const init = () => {
    const backgroundModal = document.querySelector(`#background-modal`);
    const modal = document.querySelector(`#modal`);
    const sendButton = document.querySelector(`#send-message`);
    const closeBtn = document.querySelectorAll(`#close-btn`);
    const hiddenClass = `close-modal`;

    const form = document.querySelectorAll(`input[type="text"], textarea`);
    
    const validForm = (input) => {

        const showMessage = (messageText) => {
            const message = document.querySelector(`#validate-${input[`name`]}`);
            message.innerHTML = messageText
            message.classList.contains(`hidden`) ? message.classList.remove(`hidden`) : null;
        };

        const hideMessage = () => {
            const message = document.querySelector(`#validate-${input[`name`]}`);
            message.innerHTML = ``
            !message.classList.contains(`hidden`) ? message.classList.add(`hidden`) : null;
        };

        const validateName = (input) => {
            if(input.value.length > 2) {
                hideMessage();
                return true;
            } else {
                showMessage(`El campo nome no puede estar vacío`);
                return false;
            }
        };

        const validateEmail = (input) => {  
            const validMail = String(input.value)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            !validMail ? showMessage(`Correo invalido`) : hideMessage();
            return !validMail ? false : true;
        };

        const validateMessage = (input) => {  
            input.value.length < 5 ? showMessage(`Mensaje demasiada corta.`) : hideMessage();
            return input.value.length > 5 ? true : false;
        };

        if(input[`name`] == `name`) {
            validateName(input);
        }

        if(input[`name`] == `email`) {
            validateEmail(input);
        }

        if(input[`name`] == `message`) {
            validateMessage(input)
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