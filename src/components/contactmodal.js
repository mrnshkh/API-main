export function createContactModal() {
  const modalWrapper = document.createElement('div');

  modalWrapper.innerHTML = `
    <div id="contactModal" class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Связаться с нами</h2>
          <span class="close">&times;</span>
        </div>
        <form id="contactForm" class="contact-form">
          <div class="form-row">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Ваше имя*">
            </div>
            <div class="form-group">
              <input type="tel" id="phone" name="phone" placeholder="Ваш телефон*">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="Ваш e-mail*">
            </div>
            <div class="form-group">
              <input type="text" id="city" name="city" placeholder="Ваш город">
            </div>
          </div>
          <div class="form-group full-width">
            <textarea id="comment" name="comment" placeholder="Комментарий" rows="4"></textarea>
          </div>
          <button type="submit" class="submit-btn">Отправить</button>
        </form>
      </div>
    </div>

    <div id="successNotification" class="notification"></div>
  `;

  document.body.appendChild(modalWrapper);
}
