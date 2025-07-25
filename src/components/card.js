export function createCard(card) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const img = document.createElement("img");
  img.src = card.img;
  img.alt = "";

  const h3 = document.createElement("h3");
  h3.className = "teg";
  h3.textContent = card.title;

  const h4 = document.createElement("h4");
  h4.className = "price";
  h4.textContent = card.price;

  const h5 = document.createElement("h5");
  h5.className = "about";
  h5.textContent = card.about;

  const button = document.createElement("button");
  button.className = "order";

  const cartIcon = document.createElement("img");
  cartIcon.src = "/public/shopping-cart-03.png";
  cartIcon.alt = "";

  button.appendChild(cartIcon);
  button.append(" Заказать");

  cardDiv.appendChild(img);
  cardDiv.appendChild(h3);
  cardDiv.appendChild(h4);
  cardDiv.appendChild(h5);
  cardDiv.appendChild(button);

  return cardDiv;
}
