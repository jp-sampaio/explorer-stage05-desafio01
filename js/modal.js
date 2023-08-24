export const Modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".close"),

  open() {
    this.wrapper.classList.add("open");
  },
  close() {
    this.wrapper.classList.remove("open");
  },
};

Modal.buttonClose.onclick = () => Modal.close();

// Adiciona para fechar o modal quando clicar na tecla esc
window.addEventListener("keydown", handleModalClose);

function handleModalClose(event) {
  if(event.key === "Escape") {
    Modal.close();
  }
}