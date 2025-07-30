  import { Header } from "../../components/header.js";
  import { Footer } from "../../components/footer.js";
  import { cards } from "../../utils/db";
  import { render } from "../../utils/render.js";
  import { createCard } from "../../components/card.js";
  import { head } from "../../components/categoryhead.js";
  import { Poisk } from "../../components/poisk.js";

  // Вставляем хедер
  const searchWrapper = document.querySelector(".search-wrapper");
  if (searchWrapper) {
    searchWrapper.appendChild(Poisk());
  }
  const header = document.querySelector("header");
  if (header) {
    header.replaceWith(Header());
  }

  // Вставляем футерн
  const footer = document.querySelector("footer");
  if (footer) {
    footer.replaceWith(Footer());
  }

  render(cards.slice(0, 1), ".recommended-cards", createCard);
  const category = document.querySelector('.category');
  category.prepend(head());
// Не нужно оборачивать в DOMContentLoaded
const form = document.getElementById("orderForm");
const modal = document.getElementById("customSuccessModal");

if (form && modal) {
  const closeButtons = modal.querySelectorAll(".custom-close, .modal-ok");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
  });

  closeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}


