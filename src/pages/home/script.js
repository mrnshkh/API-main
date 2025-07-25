import { Header } from "../../components/header";
import { mainCard } from "../../components/maincard.js";
import { mainCards, cards, discountedCards, newcards ,hitcards } from "../../utils/db.js";
import { render } from "../../utils/render.js";
import { createCard } from "../../components/card.js";
import { Footer } from "../../components/footer.js";
// Рендерим главные карточки
render(mainCards, ".maincards", mainCard);

// Вставляем хедер
const header = document.querySelector("header");
if (header) {
  header.replaceWith(Header());
}
const footer = document.querySelector("footer");
if (footer) {
  footer.replaceWith(Footer());
}
// Рекомендуемые товары (обычные)
render(cards, ".recommended-cards", createCard);

// Товары со скидками
render(discountedCards, ".discount-cards", createCard);
render(newcards, ".new-cards", createCard);
render(hitcards, ".hit-cards", createCard);