import { Header } from "../../components/header.js";
import { Footer } from "../../components/footer.js";
import { head } from "../../components/categoryhead.js";
import { Poisk } from "../../components/poisk.js";
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
    const category = document.querySelector('.category');
  category.prepend(head());