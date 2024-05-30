 export async function createDoPost(inputValue) {
    const response = await fetch('http://localhost:3000/api/todos', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: inputValue, 
            owner: "I",
            done: false 
        
        })
    });
    console.log(await response.json());
}