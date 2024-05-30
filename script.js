import { createTitle } from "./modules/createTitle.js";
import { createInput } from "./modules/input.js";
import { createCase } from "./modules/list.js";
import { createDoPost } from "./server/fethPOST.js";
import { editDoAsync } from "./server/fetchPATCH.js";
import { deleteDoAsync } from "./server/fetchDELETE.js";

export function createToDoList(containerId, localStorageKey, containerTitle) {
    const listContainer = document.getElementById(containerId);
    const title = createTitle(containerTitle);
    listContainer.append(title);

    const { inputDo, doButton, list } = createInput();
    
    listContainer.append(inputDo);
    listContainer.append(doButton);
    listContainer.append(list);

    async function fetchTodos() {
        const response = await fetch('http://localhost:3000/api/todos');
        const todos = await response.json();
        todos.forEach(todo => {
            const listItem = createCase(todo.name, list, inputDo, localStorageKey, todo.done, todo.id);
            if (todo.done) {
                listItem.style.backgroundColor = 'cyan';
            }
        });
    }
    

    fetchTodos();

    doButton.addEventListener('click', async (event) => {
        event.preventDefault();
        const inputValue = inputDo.value.trim();
        if (!inputValue) return;
    
        const newId = await createDoPost(inputValue);
        createCase(inputValue, list, inputDo, localStorageKey, false, newId);
    });

    inputDo.addEventListener('keydown', async (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            const inputValue = inputDo.value.trim();
            if (!inputValue) return;
    
            const newId = await createDoPost(inputValue);
            createCase(inputValue, list, inputDo, localStorageKey, false, newId);
        }
    });

    // Add edit and delete functionality
    listContainer.addEventListener('click', async (event) => {
        if (event.target.classList.contains('edit-button')) {
            const listItem = event.target.closest('li');
            const id = listItem.dataset.id;
            const newText = prompt("Edit your todo:", listItem.textContent);
            if (newText) {
                await editDoAsync(id, { name: newText });
                listItem.textContent = newText;
            }
        }
        if (event.target.classList.contains('delete-button')) {
            const listItem = event.target.closest('li');
            const id = listItem.dataset.id;
            await deleteDoAsync(id);
            listItem.remove();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    createToDoList('first-list-container', 'firstTodos', 'Первый список дел');
});
