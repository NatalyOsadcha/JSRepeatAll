const clients = ['Mango', 'Lushy', 'Alex', 'Poly'];
console.log(clients[2]); /// Alex
console.log(clients.length);

clients[2] = 'Kate';

console.table(clients);

const lastArrayIndex = clients.length - 1;
console.log(clients[lastArrayIndex]); // 'Poly

////////// cycle for

for (let i = 0; i < clients.length; i += 1) {
    console.log(clients[i]);
};


///////////// cycle for of

for (const client of clients) {
    console.log( client)
};

const string = 'javascript';
for (const letter of string) {
    console.log(letter);
};

const clientNameToFind = 'Poly';
let message = 'Not exist!';
for (const client of clients) {
    if (client === clientNameToFind) {
        message = ' Exist!'
        break;
    };
};
console.log(message);

const numbers = [1, 5, 89, -12, 43, -987];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(numbers[i]);
};

let a = 3;
let b = a;
a = 5;
console.log(a); /// 5
console.log(b); /// 3

const c = ['Mango'];
const d = c;
console.log(c);
console.log(d);
c.push('Kat');
console.log(c);
console.log(d);


///// МЕТОДИ МАСИВУ

// split()

const name = 'Mango';
console.log(name.split('')); // ['M', 'a', 'n', 'g', 'o']

const message1 = "JavaScript - це цікаво";
console.log(message1.split(' '));

// join()

const words = ["JavaScript", "це", "цікаво"];

console.log(words.join('-')); /// JavaScript-це-цікаво
console.log(words.join(''));
console.log(words.join(' '));

// indexOf()

console.log(clients.indexOf('Poly')); // 3

// includes()

console.log(clients.includes('Poly')); /// true

/// push() дод в кінець
const numbers1 = []; 
numbers1.push(1, 2,4,8);
console.log(numbers1);
numbers1.push(123); 
console.log(numbers1); /// [1, 2, 4, 8, 123]

// pop() видаляє з кінця

numbers1.pop()
console.log(numbers1); /// [1, 2, 4, 8]

// shift() видаляє з поч

numbers1.shift();
console.log(numbers1);  /// [2, 4, 8]

/// unshift() дод на поч

numbers1.unshift(0, 80, 50);
console.log(numbers1); // [0, 80, 50, 2, 4, 8]

// slice(begin, end)- створює копію частини масиву

const newNumbers = numbers1.slice(2, 3);
console.log(newNumbers); /// [50]

console.log(numbers1.slice(0)); /// [0, 80, 50, 2, 4, 8]
console.log(numbers1.slice(- 1)); // [8];
console.log(numbers1.slice(- 3));  // [2, 4, 8] - копіює з кінця


/// splice() - змінює вихідний масив

const scores = [1, 2, 3, 4, 5];
scores.splice(0, 3);  /// delete
console.log(scores); // [4, 5]

scores.splice(2, 0, 7, 8, 9, 10); // add
console.log(scores); /// [4, 5, 7, 8, 9, 10]

scores.splice(0, 2, 0, 0,0); // change elements
console.log(scores); // [0, 0, 0, 7, 8, 9, 10]

/// concat()

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Monkong", "Singu"];

const allClients = oldClients.concat(newClients);
console.log(allClients); ///  ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']


function getExtremeElements(array) {
 return [array[0], array[array.length - 1]];
}


//////////// деструктурізація масівів

const rgb = [200, 255, 100];
const [red, green, blue] = rgb;

console.log(`R:${red},G:${green},B:${blue}`); // "R:200,G:255,B:100"


///////////////// array.forEach(function callback(element, index, array))

const arrayForEach = [5, 10, 15, 20, 25];

arrayForEach.forEach(function (number, index) {
    console.log(`Index:${index}, Number:${number}`);
})


