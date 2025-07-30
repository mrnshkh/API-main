export function setupOrderModal() {
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
}
