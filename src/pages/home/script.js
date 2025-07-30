import { Header } from "../../components/header";
import { mainCard } from "../../components/maincard.js";
import { mainCards, cards, discountedCards, newcards, hitcards } from "../../utils/db.js";
import { render } from "../../utils/render.js";
import { createCard } from "../../components/card.js";
import { Footer } from "../../components/footer.js";
import { createContactModal } from "../../components/contactmodal.js";
import { ContactModal } from "../../components/contactLogic.js";
import { renderCatalog } from "../../components/catalog.js";

// Функция для проверки мобильного устройства
const isMobile = () => window.innerWidth < 768;

// Обработчик клика по элементам категории
document.querySelectorAll(".category .item").forEach(item => {
  item.addEventListener("click", () => {
    if (isMobile()) return; // Ничего не делаем на мобильных
    
    const brand = item.querySelector(".item-text")?.textContent || "Каталог";
    let modal = document.querySelector(".catalog-modal-wrapper");

    if (modal) {
      const title = modal.querySelector(".catalog-title");
      title.textContent = brand;
      return;
    }

    modal = renderCatalog(brand);
    document.body.appendChild(modal);

    // Настройка модалки
    modal.querySelector(".catalog-modal").style.width = "900px";
    modal.querySelector(".catalog-modal").style.height = "750px";

    const closeBtn = modal.querySelector(".catalog-close");
    closeBtn.addEventListener("click", () => {
      modal.remove();
      document.body.style.overflow = "";
    });

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
        document.body.style.overflow = "";
      }
    });

    document.body.style.overflow = "hidden";
  });
});

// Отключаем клики по категории на мобильных
if (isMobile()) {
  const categoryHead = document.querySelector(".category-head");
  if (categoryHead) {
    categoryHead.style.pointerEvents = "none";
    categoryHead.style.opacity = "0.7";
    categoryHead.style.cursor = "default";
  }
}

// Обработчик закрытия каталога
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-catalog")) {
    document.getElementById("catalog-container").style.display = "none";
    document.body.classList.remove("catalog-open");
  }
});

// Вставляем хедер
const header = document.querySelector("header");
if (header) {
  header.replaceWith(Header());
}

// Вставляем футер
const footer = document.querySelector("footer");
if (footer) {
  footer.replaceWith(Footer());
}

// Рендерим карточки
render(mainCards, ".maincards", mainCard);
render(cards, ".recommended-cards", createCard);
render(discountedCards, ".discount-cards", createCard);
render(newcards, ".new-cards", createCard);
render(hitcards, ".hit-cards", createCard);

// Работа с модалкой контактов
createContactModal();
new ContactModal();
const modal = document.querySelector("#contactModal");
const category = document.querySelector(".category");

const observer = new MutationObserver(() => {
  if (modal.classList.contains("show")) {
    category.style.zIndex = "0";
  } else {
    category.style.zIndex = "1200";
  }
});

observer.observe(modal, { attributes: true, attributeFilter: ['class'] });

document.querySelectorAll(".item").forEach(item => {
  item.addEventListener("click", () => {
    category.style.backgroundColor = "#F4F4F4";
  });
});
/* Закрытие по ESC */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    const modal = document.querySelector('.catalog-modal-wrapper');
    if (modal) {
      modal.remove();
      document.body.style.overflow = "";
    }
  }
});