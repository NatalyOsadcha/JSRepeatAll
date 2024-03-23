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

function makeArray(firstArray, secondArray, maxLength) {

return firstArray.concat(secondArray).length <= maxLength ?
  firstArray.concat(secondArray) : firstArray.concat(secondArray).slice(0, maxLength);

};
////////////////////
function calculateTotalPrice(order) {
    let total = 0;
    for (const item of order) {
        total +=item;
    };
    return total
};

console.log(calculateTotalPrice([2, 2, 3]));
/////////////////////////

function findLongestWord(string) {

    const array = string.split(' ');

    let longestWord = array[0];

    for (const word of array) {
        longestWord = longestWord.length >= word.length ? longestWord : word;
    }

    return longestWord;
}

console.log(findLongestWord("May the force be with you"));
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

/////////////////////

function createArrayOfNumbers(min, max) {
    let array =[];
    for (let i = min; i <= max; i += 1) {
      array.push(i);
    }
    return array;
};

console.log(createArrayOfNumbers(29, 34));

///////////////////

function filterArray(numbers, value) {
    const newArray = [];

    for (const number of numbers) {
        if (number > value) {
            newArray.push(number);
        }
       
    }
       return newArray;
};
console.log(filterArray([12, 24, 8, 41, 76], 38));

///////////////////

function getCommonElements (array1, array2) {
    let newArray = [];

    for (const element of array1) {
        if (!array2.includes(element)) {
        continue
        }
        newArray.push(element);
    }
    return newArray;
};

console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

///////////////////////

function getEvenNumbers(start, end) {
    let array = [];
    for (let i = start; i <= end; i = +1) {
        if (i % 2 === 1) {
            continue;
        }
        array.push(i);
    }
    return array;
};

console.log(getEvenNumbers(6, 12));


/////////////////

const start = 6;
const end = 27;
let number;

for (let i = start; i <= end; i += 1) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
};

console.log(number);

////////////////

function findNumber(start, end, divisor) {

    for (let i = start; i <= end; i += 1) {
        if (i % divisor === 0) {
            return i;
        }
    }
};

console.log(findNumber(16, 35, 7));