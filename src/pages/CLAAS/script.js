import { Header } from "../../components/header.js";
import { Footer } from "../../components/footer.js";
import { head } from "../../components/categoryhead.js";
import { Poisk } from "../../components/poisk.js";
import { render } from "../../utils/render.js";
import { Cards } from "../../components/cards.js";
import { createCard } from "../../components/card.js";
import { categories, newcards } from "../../utils/db.js";

const searchWrapper = document.querySelector(".search-wrapper");
if (searchWrapper) {
  searchWrapper.appendChild(Poisk());
}

const header = document.querySelector("header");
if (header) {
  header.replaceWith(Header());
}

const footer = document.querySelector("footer");
if (footer) {
  footer.replaceWith(Footer());
}

const category = document.querySelector(".category");
if (category) {
  category.prepend(head());
}

// Отображаем карточки
render(categories.slice(0, 8), ".cards", Cards);

// Отображаем рекомендованную карточку
render(newcards.slice(0, 1), ".recommended-cards", createCard);
