const animal = {
    legs: 4,
    eats: true,
};

const dog = Object.create(animal);
dog.name = 'Kiwi';
dog.barks = true;

console.log(dog);
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.legs); // 4
console.log(dog.hasOwnProperty('legs')); // false
console.log(dog.hasOwnProperty('name')); // true
console.log(dog.hand); // undefined

for (const key in dog) {
    if (!dog.hasOwnProperty(key)) {
        continue;
    }

    console.log(key); /// name barks
};


const dogKeys = Object.keys(dog);

console.log(dogKeys); /// ['name', 'barks']


/////////////////  CLASS

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
};

const mango = new User('Mango', 'mango.gmail.com');
console.log(mango);  // User {name: 'Mango', email: 'mango.gmail.com'}

/////////////

class Admin {
    constructor({ name, email }) {
        this.name = name;
        this.email = email;
    }
    getEmail() {
        return this.email;
    };

    changeEmail(newEmail) {
        this.email = newEmail;
    }
};

const poly = new Admin({
    name: 'Poly',
    email: 'poly.gmail.com'
});

console.log(poly); /// Admin {name: 'Poly', email: 'poly.gmail.com'};


////////////////  Private properties

class Person {
    name //  Optional
    #email // Mandatory
    constructor({
    name, email
    }) {
        this.name = name;
        this.#email = email;
    };
    getEmail() {
        return this.#email;
    };
    changeEmail(newEmail) {
        return this.#email = newEmail;
    }
};

const peter = new Person({
    name: 'Peter',
    email: 'peter.gmail.com'
});

peter.changeEmail('peter.super.gmail.com');
console.log(peter.getEmail()); /// peter.super.gmail.com

console.log(peter.name); // Peter
// console.log(peter.#email) ///  Error Private field '#email' must be declared in an enclosing class


////////////  get and set (key-words)

class Vegetable {
    #color
    
    constructor({color, size }) {
        this.#color = color,
            this.size = size
    }

    get color() {
        return this.#color
    };

    set color(newColor) {
        if (newColor === '') {
            console.error('Can not be empty')
            return
        }
      this.#color = newColor;
    }
};

const tomato = new Vegetable({
    color: 'red',
    size: 'small'
});

console.log(tomato.color); // red

tomato.color = '';
tomato.color = 'yellow';

console.log(tomato.color); // yellow

//////////////////  Static properties




