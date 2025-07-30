export class ContactModal {
  constructor() {
    this.modal = document.getElementById('contactModal');
    this.contactBtn = document.getElementById('contactBtn');
    this.closeBtn = document.querySelector('.close');

    this.init();
  }

  init() {
    this.contactBtn?.addEventListener('click', () => this.openModal());
    this.closeBtn?.addEventListener('click', () => this.closeModal());
    this.modal?.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.closeModal();
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal?.classList.contains('show')) {
        this.closeModal();
      }
    });
  }

  openModal() {
    this.modal.style.display = 'flex';
    setTimeout(() => this.modal.classList.add('show'), 10);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.modal.classList.remove('show');
    setTimeout(() => {
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 300);
  }
}
