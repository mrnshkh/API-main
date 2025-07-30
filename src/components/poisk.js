export function Poisk() {
  const poisk = document.createElement("div");
  poisk.className = "search";

  const img = document.createElement("img");
  img.src = " /search-md (1).png";
  img.alt = "";

  const input = document.createElement("input");
  input.className = "searchinp";
  input.type = "text";
  input.placeholder = "Поиск товара по каталогу";
  input.style.color = "#2E5A8880";

  poisk.appendChild(img);
  poisk.appendChild(input);

  return poisk;
}
