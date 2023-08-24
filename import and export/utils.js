// Import e Export simples
// const message = "mensagem";
// alert(message);

// ===========================================

// Default import e export
// export default 'Qualquer coisa';

// ou

// const name = 'João Paulo';
// export default name;

// ============================================

// Named Export
// export const today = Date.now();

// const double = number => number * 2;
// export {double};

// ===============================================

// Misto (default e named)
// const date = new Date();
// const greeting = name => `Hello ${name}`;

// export default function(argument) {
//   console.log(date, greeting(argument))
// }

// export {date, greeting};

//-==================================================
// Import as
// export function sum(a, b) {
//   return a + b;
// }

// ====================================================
// Import * as
// export const sum = (a, b) => a + b;
// export const subtract = (a, b) => a - b;
// export const multiply = (a, b) => a * b;
// export const divide = (a, b) => a / b;

// export {sum, subtract, multiply, divide}