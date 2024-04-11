/// this - the value of the context is determined at the time of the call.

function foo() {
    console.log(this);
};

foo(); /// undefined
/////////////

const petya = {
    name: 'Petya',

    showThis() {
    console.log(this);
  },
    showName() {
        console.log(this.name)
    }
};
petya.showName();/// Petya
petya.showThis(); /// {name: 'Petya', showThis: ƒ, showName: ƒ}

//////////////////

const user = {
    userName: 'Monica'
};

user.showContext = foo; /// function foo() {console.log(this);};

user.showContext(); /// { userName: 'Monica', showContext: ƒ }



///////////////  this in callback fn - the context is not saved

const customer = {
    firstName: 'Jimmy',
    lastName: 'Bowl',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};
console.log(customer.getFullName()); //// Jimmy Bowl


function makeMessage(callback) { 
console.log(`Processing request from ${callback()}.`);
};

// makeMessage(customer.getFullName); /// TypeError: Cannot read properties of undefined 

// makeMessage(petya.name); // callback is not a function

///////////  this   in arrow functions

// Arrow functions do not have their 'this'

// it is not possible to change 'this' inside an arrow after its declaration.


const showThis = () => {
    console.log(this);
};

showThis(); /// undefined

const userFirst = {
    userName: 'Monica'
};

userFirst.showObj = showThis;
userFirst.showObj(); /// undefined


//////////// // The context refers to the context of the parent function.

const hotel = {
  username: "Resort hotel",
  showThis() {
    const foo = () => {
      console.log("this in foo: ", this);
    };

    foo();
    console.log("this in showThis: ", this);
  },
};

hotel.showThis();


////////////////////   call() method

// the function must be called in the context of the object, while the function is not its method

function greetGuest(greeting) {
    console.log(`${greeting}, ${this.username}`);
};

const kiwi = {
    username: 'Kiwi',
};

const apple = {
    username: 'Apple',
};

greetGuest.call(kiwi, 'Hi'); // Hi, Kiwi
greetGuest.call(apple, 'Welcome'); // Welcome, Apple
// greetGuest(apple, 'Welcome'); // TypeError: Cannot read properties of undefined (reading 'username')


///////////////  apply​   this is an analogue of the call method, 

// the argument passing syntax requires an array

greetGuest.apply(kiwi, ['Hi']); // Hi, Kiwi
greetGuest.apply(apple, ['Welcome']); // Welcome, Apple


/////////////////  bind()

//// foo.bind(obj, arg1, arg2, ...)

function greet(clientName) {
  return `${clientName}, welcome in «${this.service}».`;
};

const steam = {
  service: "Steam",
};

const steamGreeter = greet.bind(steam);
console.log(steamGreeter('Jassy')); // Jassy, welcome in «Steam».

const gmail = {
  service: "Gmail",
};

const gmailGreeter = greet.bind(gmail);
console.log(gmailGreeter('Kay')); /// Kay, welcome in «Gmail».


//////////// bind() and object methods

// A callback is a reference to a method called without an object.

const admin = {
  firstName: "Jacob",
  lastName: "Mercer",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

function makeTask(callback) {

  console.log(`Hi ${callback()}. Your tasks for today:...`);
}

// makeTask(admin.getFullName); // Виникне помилка на момент виклику функції

makeTask(admin.getFullName.bind(admin)); /// Hi Jacob Mercer. Your tasks for today:...




//////////////// new SET()

const historyService = {
  orders: [
    { email: "jacob@hotmail.com", dish: "Burrito" },
    { email: "solomon@topmail.net", dish: "Burger" },
    { email: "artemis@coldmail.net", dish: "Pizza" },
    { email: "solomon@topmail.net", dish: "Apple pie" },
    { email: "jacob@hotmail.com", dish: "Taco" },
  ],
  // Change code below this line
  getOrdersLog() {
    return this.orders
      .map(order => `email: ${order.email} dish: ${order.dish}`)
      .join(" - ");
  },
  getEmails() {
    const emails = this.orders.map(order => order.email);
    const uniqueEmails = new Set(emails);
    return [...uniqueEmails];
  },
  getOrdersByEmail(email) {
    return this.orders.filter(order => order.email === email);
  }
}

console.log(historyService.getOrdersByEmail("jacob@hotmail.com"));
console.log(historyService.getEmails());