/////////// function declaration

function multiply(x, y, z) {
  console.log("Код до return виконується звичайним чином");

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log("Цей лог ніколи не виконається, він стоїть після return");
};
let result = multiply(1, 2, 3);

console.log(result);

////////////////// Параметри за замовчуванням

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1


////////////////// Псевдомасив arguments​

function multiplyArg() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiplyArg(1, 2, 3)); //  6
console.log(multiplyArg(1, 2, 3, 4)); //  24
console.log(multiplyArg(1, 2, 3, 4, 5)); //  120

//////////// Перетворення псевдомасиву

function fn(...args) {
  // Змінна args буде містити повноцінний масив
}

/////////////// Патерн «Раннє повернення»

function withdraw(amount, balance) {

  if (amount === 0) {
    console.log("Для проведення операції введіть суму більшу за нуль");
    return;
    };

  if (amount > balance) {
    console.log("Недостатньо коштів на рахунку");
    return;
    };

  console.log("Операція зняття коштів проведена");
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена"


///////////////  function expression/ function declaration

// // Оголошення функції (function declaration)
// function multiply(x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// }

// // Функціональний вираз (function expression)
// const multiply = function (x, y, z) {
//   console.log(`Результат множення дорівнює ${x * y * z}`);
// };


// Різниця в тому, що функціональний вираз не можна викликати до місця 
// його створення, тільки після нього, тому що це буквально оголошення
// const змінної.