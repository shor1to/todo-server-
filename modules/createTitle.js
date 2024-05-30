export function createTitle(textTitle = "Список дел!") {
    const title = document.createElement("h1");
    title.className = "title";
    title.textContent = textTitle;
    return title;
}
