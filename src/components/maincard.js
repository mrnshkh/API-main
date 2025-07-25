export function mainCard(card) {
  const div = document.createElement("div");
  div.className = "maincard";

  div.innerHTML = `
    <img src="${card.img}" alt="">
    <h3>${card.title}</h3>
    <p>${card.text}</p>
  `;

  return div;
}
