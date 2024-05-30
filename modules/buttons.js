import { editDoAsync } from "../server/fetchPATCH.js";
import { deleteDoAsync } from "../server/fetchDELETE.js";

export function createButtonUp(li, todoId, status) {
    const buttonUp = document.createElement('button');
    buttonUp.textContent = status ? 'ㅤВыполнено' : 'ㅤНевыполнено'; 
    buttonUp.className = 'button-up';
    buttonUp.addEventListener('click', async () => {
        event.preventDefault();

        const isCompleted = li.style.backgroundColor === 'cyan';
        li.style.backgroundColor = isCompleted ? 'white' : 'cyan';
        buttonUp.textContent = isCompleted ? 'ㅤНевыполнено' : 'ㅤВыполнено';
        await editDoAsync(todoId, { done: !status });
    });
    return buttonUp;
}

export function createButtonDelete(li, buttonUp, todoId) {
    const buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Удалить';
    buttonDelete.className = 'button-delete';
    buttonDelete.addEventListener('click', async () => {
        event.preventDefault();
        if (confirm("Точно хотите удалить?")) {
            li.remove();
            buttonUp.remove();
            buttonDelete.remove();
            await deleteDoAsync(todoId);
        }
    });
    return buttonDelete;
}

export function createDivButtons(li, buttonUp, buttonDelete) {
    const divButtons = document.createElement('div');
    divButtons.className = 'buttons';
    divButtons.append(buttonUp, buttonDelete);
    li.appendChild(divButtons);
}
