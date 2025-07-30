export function head() {
  const head = document.createElement("div");
  head.className = "category-head";

  head.innerHTML = `
    <h3 class="headtxt">Категория</h3>
    <img src="../../public/menu-01.png" alt="">
  `;

  return head;
}
