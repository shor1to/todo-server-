import { createButtonUp, createButtonDelete, createDivButtons } from "../modules/buttons.js";
import { clearInput } from "../modules/input.js";

export function createLi(inputValue) {
    const li = document.createElement('li');
    li.textContent = inputValue;     
    li.title = 'Время создания: ' + new Date().toLocaleString();
    return li;
}

export function addToDoList(list, li) {
    list.append(li);
}

export function createCase(inputValue, list, inputElement, localStorageKey, status, todoId) {
    if (!inputValue || inputValue.trim() === '') {
        return;
    }

    const li = createLi(inputValue);
    li.dataset.id = todoId; // Store the ID on the DOM element
    const buttonUp = createButtonUp(li, todoId, status);
    const buttonDelete = createButtonDelete(li, buttonUp, todoId);
    createDivButtons(li, buttonUp, buttonDelete);
    addToDoList(list, li);
    clearInput(inputElement);
    return li;
}
