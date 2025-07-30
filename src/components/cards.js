export function Cards(item) {
  const card = document.createElement("div");
  card.classList.add("cart");

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <a href="${item.link}">${item.name}</a>
  `;

  return card;
}
