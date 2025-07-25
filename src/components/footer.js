export function Footer() {
  const footer = document.createElement("footer");

  footer.innerHTML = `
    <div class="navs">
      <div class="footer-logo">
        <img src="/public/Frame 10.png" alt="Логотип">
      </div>

      <nav class="nav1">
        <a class="footil" href="">Информация</a>
        <a href="">О нас</a>
        <a href="">Блог</a>
        <a href="">Доставка</a>
        <a href="">Контакты</a>
        <a href="">Вакансии</a>
      </nav>

      <nav class="nav2">
        <a class="footil" href="">Служба поддержки</a>
        <a href="">Связаться с нами</a>
        <a href="">Карта сайта</a>
      </nav>

      <nav class="nav3">
        <a class="footil" href="">Дополнительно</a>
        <a href="">Товары со скидкой</a>
        <a href="">Политика безопасности</a>
        <a href="">Обработка персональных данных</a>
      </nav>

      <nav class="nav4">
        <div class="footer-contact">
          <img src="/public/marker-pin-01.png" alt="">
          <a href="">Красноярск, Металлургов 2Т, офис 207</a>
        </div>
        <div class="footer-contact">
          <img src="/public/phone-call-01.png" alt="">
          <a href="">+7 (391)-989-81-81</a>
        </div>
        <div class="footer-contact">
          <img src="/public/mail-01.png" alt="">
          <a href="">info@agropartner-import.ru</a>
        </div>
      </nav>
    </div>
  `;

  return footer;
}
