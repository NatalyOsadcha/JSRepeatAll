const animal = {
  legs: 4,
  eats: true,
};

const dog = Object.create(animal);
dog.name = "Kiwi";
dog.barks = true;

console.log(dog);
console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.legs); // 4
console.log(dog.hasOwnProperty("legs")); // false
console.log(dog.hasOwnProperty("name")); // true
console.log(dog.hand); // undefined

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) {
    continue;
  }

  console.log(key); /// name barks
}

const dogKeys = Object.keys(dog);

console.log(dogKeys); /// ['name', 'barks']

/////////////////  CLASS

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Mango", "mango.gmail.com");
console.log(mango); // User {name: 'Mango', email: 'mango.gmail.com'}

/////////////

class Admin {
  constructor({ name, email }) {
    this.name = name;
    this.email = email;
  }
  getEmail() {
    return this.email;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }
}

const poly = new Admin({
  name: "Poly",
  email: "poly.gmail.com",
});

console.log(poly); /// Admin {name: 'Poly', email: 'poly.gmail.com'};

////////////////  Private properties

class Person {
  name; //  Optional
  #email; // Mandatory
  constructor({ name, email }) {
    this.name = name;
    this.#email = email;
  }
  getEmail() {
    return this.#email;
  }
  changeEmail(newEmail) {
    return (this.#email = newEmail);
  }
}

const peter = new Person({
  name: "Peter",
  email: "peter.gmail.com",
});

peter.changeEmail("peter.super.gmail.com");
console.log(peter.getEmail()); /// peter.super.gmail.com

console.log(peter.name); // Peter
// console.log(peter.#email) ///  Error Private field '#email' must be declared in an enclosing class

////////////  get and set (key-words)

class Vegetable {
  #color;

  constructor({ color, size }) {
    (this.#color = color), (this.size = size);
  }

  get color() {
    return this.#color;
  }

  set color(newColor) {
    if (newColor === "") {
      console.error("Can not be empty");
      return;
    }
    this.#color = newColor;
  }
}

const tomato = new Vegetable({
  color: "red",
  size: "small",
});

console.log(tomato.color); // red

tomato.color = "";
tomato.color = "yellow";

console.log(tomato.color); // yellow

//////////////////  Static properties and methods

class Users {
  static Roles = {
    ADMIN: "admin",
    EDITOR: "editor",
  };

  static #takenEmails = [];

  static isEmailTaken(email) {
    return Users.#takenEmails.includes(email);
  }

  #email;
  #role;

  constructor({ email, role }) {
    (this.#email = email), (this.#role = role), Users.#takenEmails.push(email);
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    this.#email = newEmail;
  }

  get role() {
    return this.#role;
  }

  set role(newRole) {
    this.#role = newRole;
  }
}

const net = new Users({
  email: "net@gmail.com",
  role: Users.Roles.ADMIN,
});

console.log(net.role); /// admin
console.log(net.Roles); /// undefined
console.log(Users.Roles); /// {ADMIN: 'admin', EDITOR: 'editor'}

net.role = Users.Roles.EDITOR;
console.log(net.role); /// editor

console.log(Users.isEmailTaken("net@gmail.com")); /// true

//////////////  Child class constructor

class ContentEditor extends Users {
  constructor({ email, role, posts }) {
    super({ email, role });
    this.posts = posts;
  }
  addPost(newPost) {
    this.posts.push(newPost);
  }
}

const editor = new ContentEditor({
  email: "mango@mail.com",
  role: Users.Roles.EDITOR,
  posts: [],
});
console.log(editor);
console.log(editor.role); // editor
console.log(editor.email); /// mango@mail.com
console.log(editor.posts); /// []
editor.addPost("post-1");
console.log(editor.posts);

//////////////

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(newItem) {
    this.items.push(newItem);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }
  removeItemAlt(itemToRemove) {
    const index = this.items.indexOf(itemToRemove);
    this.items.splice(index, 1);
  }
}

const storage = new Storage([1, 2, 3, 4, 5]);
console.log(storage.getItems());
storage.addItem(8);
console.log(storage.getItems());
storage.removeItem(1);
storage.removeItem(15);
console.log(storage.getItems());
storage.removeItemAlt(5);
console.log(storage.getItems());

//////////////////

class StringBuilder{
    #value
    constructor(initialValue) {
        this.#value = initialValue;
    }
    getValue() {
        return this.#value
    };
    padEnd(str) {
        this.#value = this.#value+str
    }
    padStart(str) {
       this.#value = str+this.#value
    }
    padBoth(str) {
        this.#value = str +this.#value+str
    }
}

const builder = new StringBuilder(".");
builder.padStart("^");
builder.padEnd("^");
builder.padBoth("=");
console.log(builder.getValue());