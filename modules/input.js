export function createInput() {
    const inputDo = document.createElement("input");
    inputDo.className = "input";
    inputDo.placeholder = "Запишите свое дело!";
    
    const doButton = document.createElement("button");
    doButton.className = "button";
    doButton.textContent = "Добавить";
    doButton.disabled = true;

    const toggleButtonState = () => {
        if (inputDo.value.trim() === '') {
            doButton.disabled = true;
            doButton.style.backgroundColor = "gray";
        } else {
            doButton.disabled = false;
            doButton.style.backgroundColor = "green";
        }
    };
    
    toggleButtonState();
    inputDo.addEventListener('input', toggleButtonState);
    
    const list = document.createElement('ul');
    return { inputDo, doButton, list };
}

export function clearInput(inputElement) {
    inputElement.value = '';
}
