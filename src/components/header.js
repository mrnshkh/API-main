export function Header() {
  const header = document.createElement("header");

  header.innerHTML = `
    <div class="logo">
      <img src="/public/Frame 10.png" alt="Логотип">
    </div>
    <div class="right-side">
      <nav class="main-nav">
        <a href="">О нас</a>
        <a href="">Блог</a>
        <a href="">Доставка</a>
        <a href="/contact">Контакты</a>
        <a href="/vacancy">Вакансии</a>
        <img src="/public/Frame 1171276439.png" alt="Иконка">
      </nav>
      <div class="phone">
        <img src="/public/Icon.png" alt="">
        <p >+7 (391)-989-81-81</p>
      </div>
    </div>
  `;

  return header;
}
