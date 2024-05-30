export async function getDoIdAsync(id) {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`);
    const todo = await response.json();
    console.log(todo);
    return todo;
}
