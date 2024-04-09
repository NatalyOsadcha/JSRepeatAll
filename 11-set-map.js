
// В JavaScript є кілька вбудованих структур даних, які можна використовувати для різних потреб:

// Масиви (Arrays): Масиви в JavaScript є списками змінної довжини, які зберігають послідовні значення. Вони можуть бути використані для зберігання індексованих даних.

// Об'єкти (Objects): Об'єкти в JavaScript використовуються для зберігання ключ-значення пар, де ключі - це рядки, і значення - будь-який тип даних. Об'єкти використовуються для представлення складних даних та структур.

// Set: Як згадувалося раніше, Set є структурою даних, яка зберігає лише унікальні значення. Вона дозволяє легко перевіряти наявність елементів унікальною колекції.

const orders = [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
];

function getEmails () {
    const emails = orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
};

console.log(getEmails()); /// (3) ['jacob@hotmail.com', 'solomon@topmail.net', 'artemis@coldmail.net']


/////


const array = [4, 1, 2, 1, 3, 4, 2, 4, 1,];
let newArray = [];
const unique = new Set(array);
console.log(unique); // Set(4) {4, 1, 2, 3}
newArray.push(...unique); // [4, 1, 2, 3]
console.log(newArray);


///////////////

/// Map: Map використовується для зберігання ключ-значення пар, подібно до об'єктів. 
// Однак, у відміну від об'єктів, ключами в Map можуть бути будь-які типи даних.

let myMap = new Map();

// Добавление элементов в Map с использованием метода set()
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
myMap.set('key3', 'value3');

// Получение значений из Map по ключам с использованием метода get()
console.log(myMap.get('key1')); // Вывод: value1

// Проверка наличия ключа в Map с использованием метода has()
console.log(myMap.has('key2')); // Вывод: true

// Удаление элемента из Map по ключу с использованием метода delete()
myMap.delete('key3');

// Получение количества элементов в Map с использованием свойства size
console.log(myMap.size); // Вывод: 2

// Итерация по парам ключ-значение в Map с использованием метода forEach()
myMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
// Вывод:
// key1: value1
// key2: value2

// Цикл for...of также можно использовать для итерации по парам ключ-значение в Map
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Вывод:
// key1: value1
// key2: value2

// Очистка всех элементов в Map с использованием метода clear()
myMap.clear();

// После очистки Map должен быть пустым
console.log(myMap.size); // Вывод: 0

/// В этом примере Map используется для создания отображения между ключами и значениями. 
//Ключи могут быть любого типа данных, а значения также могут быть любыми типами данных.
//Методы set(), get(), has(), delete (), size, forEach() и clear() используются для управления данными в Map.




