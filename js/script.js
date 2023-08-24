import { Modal } from "./modal.js";
import { AlertError } from "./alert-error.js";

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeigth = document.querySelector("#heigth");

form.onsubmit = event => {
  /* Fazer com que o form deixe sua configuração padrão que é enviar o formulário com o prevent(Evitar)
   Default(Padrão);*/
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeigth.value;

  const showAlertError = notANumber(weight) || notANumber(height);

  if(showAlertError) {
    AlertError.open();
    return;
  }

  AlertError.close();

  const result = IMCCalculator(weight, height);
  const message = `O seu IMC é de ${result}`;
  Modal.message.innerText = message;
  Modal.open();
}

function notANumber(value) {
  return isNaN(value) || value === "";
}

function IMCCalculator(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}

