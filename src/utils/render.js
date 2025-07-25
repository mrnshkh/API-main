export function render(arr, place, component) {
    const container = typeof place === "string" ? document.querySelector(place) : place;
    if (!container) return;
    container.innerHTML = "";
    arr.forEach(item => {
        let elem = component(item);
        container.append(elem)
    });
}