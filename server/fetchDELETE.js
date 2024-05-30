export async function deleteDoAsync(id) {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
    });
    console.log(`Todo with id ${id} deleted`);
}
