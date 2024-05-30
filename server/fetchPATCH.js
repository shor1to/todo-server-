export async function editDoAsync(id, updatedData) {
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(updatedData),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const updatedTodo = await response.json();
    console.log(updatedTodo);
    return updatedTodo;
}
