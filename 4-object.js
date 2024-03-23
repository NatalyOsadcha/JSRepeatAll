const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
    hobbies: ["swiming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // Об'єкт location

const country = user.location.country;
console.log(country); // 'Jamaica'

const hobbies = user.hobbies;
console.log(hobbies);

const firstHobby = hobbies[0];
console.log(firstHobby);

const name = user['name'];
console.log(name);

const properKey = 'hobbies';
console.log(user[properKey]);

//////////////

user.tag = 'qwerty';

///////////////

user.surname = 'Folly';

console.log(user);


//////////////

const fullName = "Генрі Сибола";
const age = 25;

const person = {
  fullName,
  age,
};

console.log(person.fullName); // "Генрі Сибола"
console.log(person.age); // 25

/////////////  computed properties

const properColor = 'color';

const fruit = {
    type: 'apple',
    [properColor]: 'red',
};

console.log(fruit.color);


///////////////

const bookShelf = {
  books: ["The Last Kingdom", "Dream Guardian"],
    // методи об'єкта
    getObject() {
        return this;
    },
    getBooks() {
        return this.books;
    },
    addBook(bookName) {
        this.books.push(bookName);
    },
    removeBook(bookName) {
        const bookIndex = this.books.indexOf(bookName);
        this.books.splice(bookIndex, 1);
    },
};

// Виклики методів
console.log(bookShelf.getObject()); //// {books: Array(2), getObject: ƒ, getBooks: ƒ, addBook: ƒ}
console.log(bookShelf.getBooks()); ///  ['The Last Kingdom', 'Dream Guardian']
bookShelf.addBook('New book');
bookShelf.removeBook('Dream Guardian');
console.log(bookShelf);


////////////// for ... in cycle

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};

for (const key in book) {
    if (book.hasOwnProperty(key)) {
     console.log(key);   // Ключ / імя властивості
    console.log(book[key]); // Значення властивості з таким ключем
    console.log(key, book[key]);  
} 
};

///////////// Object.create() hasOwnProperty()​

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

console.log(dog.hasOwnProperty('legs')); /// false
console.log(dog.hasOwnProperty('name')); ////// true

/////////////////   Object.keys()​

const keys = Object.keys(book);

console.log(keys) /////// ['title', 'author', 'genres', 'rating']

/////////////////////     Object.values()​

const values = Object.values(book);

console.log(values);  /////// ['The Last Kingdom', 'Bernard Cornwell', Array(2), 8.38]

///////////// Object.entries();

const entries = Object.entries(book);
console.log(entries); /// [['title', 'The Last Kingdom'], ['author', 'Bernard Cornwell'], ['genres', Array(2)], ['rating', 8.38]]

///////////////////

