import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";
import { IMCCalculator, notANumber } from "./utils.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeigth = document.querySelector("#heigth");

// Evento input faz verificar se eu estou modificando algo no input
inputWeight.oninput = () => AlertError.close();
inputHeigth.oninput = () => AlertError.close();

form.onsubmit = event => {
  /* Fazer com que o form deixe sua configuração padrão que é enviar o formulário com o prevent(Evitar)
   Default(Padrão);*/
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeigth.value;

  const weightOrHeightIsNotNumber = notANumber(weight) || notANumber(height);

  if( weightOrHeightIsNotNumber) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMCCalculator(weight, height);
  displayResultMessage(result);

  inputWeight.focus();

  inputWeight.value = "";
  inputHeigth.value = "";
}

function displayResultMessage(result) {
  const message = `O seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}


// Depois de fechar o modal deixar o input de foco