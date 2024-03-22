const array = [1, 2, 3, 4, 5, 6];
const result = array.copyWithin(3, 0).join('');
console.log(result);


const dog = { name: "Poly" };

function showDogName() {
    console.log(this.name);
}

// showDogName()
const boundSowDogName = showDogName.bind(dog);
boundSowDogName();

const name = 'bob';
const age = 20;
const obj = {
    name,
    age
};

console.log(obj);

const min = Math.min(...[1, 5, -1, -10]);

console.log(min);

const names = ['bob', ...['donald'], 'suzy', 'lacy', ...['richard', 'alex']];
console.log(names);


// call = 'Jami'  /// ReferenceError: call is not defined

let color;
console.log(color); //// undefined
console.log(typeof color); /// undefined

color = 'blue';
console.log(color);

console.log(typeof color); /// string

let something = null;
console.log(typeof something); /// object;

// const message = 'Natashenka is smart'
// alert(message);
// alert();

// const isComing = confirm('Please confirm hotel reservation');
// console.log(isComing);

// const hotelName = prompt('Please enter desired hotel name');
// console.log(hotelName);


/// MATH

const x = 17;
const y = 3;
console.log(x % y); /// oстача від ділення

let value = 5;
value += 10;
console.log(value); //15

const valueA = '5';
console.log(Number(valueA));
console.log(typeof Number(valueA)); // number

const valueB = 'random string';
console.log(Number(valueB)); // NaN
console.log(typeof Number(valueB)); // number

console.log(parseInt('5px')); // 5
console.log(parseInt('5,3457px')); // 5
console.log(parseInt('qwerrty')); // NaN

console.log(parseFloat('Length 46,6778 meters')) // NaN
console.log(parseFloat(' 12.346 hjk')); // 12.346

const validNumber = Number('51');
console.log(Number.isNaN(validNumber)); // false


console.log(0.174 + 0.34678);
console.log((0.174 + 0.34678).toFixed(1)); // 0.5

console.log(Math.floor(56.995857)); ///// 56
console.log(Math.ceil(81.111111)); //// 82
console.log(Math.round(23.876654)); // 24

console.log(Math.max(1, 3, 78)); 
console.log(Math.min(0, -10, 67));
console.log(Math.random() * (10 - 1) + 1);


///////// РЯДКИ

console.log(1 + 2 + '45' + 15 + 12) // '3451512' 

const guestName = 'Mango';
const guestRoom = 27;

console.log(`Welcome ${guestName} to your room ${guestRoom}`);

const message = 'Welcome to Bahamas 27';
console.log(message.indexOf('come'));
console.log(message.indexOf('We'));
console.log(message.indexOf('we'));
console.log(message.indexOf(7));
console.log(message.length);
console.log(message.includes('c'));
console.log(message.includes('ba'));
console.log(message.includes(27));
console.log(message.toUpperCase());

const jsFileName = 'script.js, about.js, main.js';
console.log(jsFileName.endsWith('.js'));

const minifiedJsFileName = jsFileName.replace('.js', '.min.js');
console.log(minifiedJsFileName);

const minifiedAllJsFileName = jsFileName.replaceAll('.js', '.min.js');
console.log(minifiedAllJsFileName);

const productName = 'Repair droid';
console.log(productName.slice(0, 4)); // 'Repa'
console.log(productName.slice(0, productName.length)); // 'Repair droid'
console.log(productName.slice(0)); // 'Repair droid'


/// ЛОГІЧНІ ОПЕРАТОРИ 
// &&

console.log(1 && 5);// 5
console.log('' && 'Tom'); // ''
console.log('DOM' && null); // null

// ||

// const age = 20;
console.log(age > 10 || age < 30); // true
console.log(age > 25 || age < 10);// false
console.log(5 || false); // 5
console.log(5 || true); // 5
console.log(true || 5); // true

// !

console.log(!5); // false
console.log(!null) // true

 
//  Branching if

let cost = 0;
const subscription = 'pro';

if (subscription === 'pro') {
    cost = 100;
};
console.log(cost); // 100

//  Branching if ...else

let cost1;
const account = 'free';

if (account === 'pro') {
    cost1 = 500;
} else {
    cost1 = 0;
};
console.log(cost1);

//  Branching else ...if

let cost2;
const bonus = 'premium';

if (bonus === 'free') {
    cost2 = 0;
} else if (bonus === 'start') {
    cost2 = 100;
} else if (bonus === 'pro') {
    cost2 = 200;
} else if (bonus === 'premium') {
    cost2 = 500;
} else { 'Invalid type' };

console.log(cost2);


/// ternary operator

// const age = 20;

const type = age >= 18 ? 'adult' : 'child';
console.log(type);

const num1 = 5;
const num2 = 10;

const biggestNumber = num1 > num2 ? num1 : num2;
console.log(biggestNumber); // 10


//  SWITCH

let salary;

const level = 'senior';

switch (level) {
    case 'junior':
        salary = 1000;
        break;
    
    case 'middle':
        salary = 2000;
        break;
    
    case 'senior':
        salary = 5000;
        break;

    default: 'Invalid level';
        break;
}

console.log(salary); /// 5000;

/// cycle
let counter = 5;
while (counter <= 10) {
    console.log('counter:', counter);
    counter += 1;
};


let password = '';

do {
    password = prompt('Enter your password longer then 4 symbols');
} while (password.length < 5);

console.log(password);


for (let i = 0; i < 20; i+=5) {
    console.log(i);
};

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
    sum += i;
    console.log(sum);
};

console.log(sum);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

for (let i = 0; i < 5; i+=1) {
    if (i === 3) {
           console.log(i);
        break;
    }
};

const number = 10;

for (let i = 0; i <= number; i += 1) {
    if (i % 2 === 0) {
        continue;
    }
    console.log('Непарні:', i);
}

const firstElement = 'JavaScript'[0];
console.log(firstElement);

const lastElement = 'JavaScript'['JavaScript'.length - 1];
console.log(lastElement);







