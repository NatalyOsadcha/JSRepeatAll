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

const name = user["name"];
console.log(name);

const properKey = "hobbies";
console.log(user[properKey]);

//////////////

user.tag = "qwerty";

///////////////

user.surname = "Folly";

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

const properColor = "color";

const fruit = {
  type: "apple",
  [properColor]: "red",
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
  updateBook(oldName, newName) {
    const bookIndex = this.books.indexOf(oldName);
    this.books.splice(bookIndex, 1, newName);
  },
};

// Виклики методів
console.log(bookShelf.getObject()); //// {books: Array(2), getObject: ƒ, getBooks: ƒ, addBook: ƒ}
console.log(bookShelf.getBooks()); ///  ['The Last Kingdom', 'Dream Guardian']
bookShelf.addBook("New book");
bookShelf.removeBook("Dream Guardian");
bookShelf.updateBook("New book", "Duna");
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
    console.log(key); // Ключ / імя властивості
    console.log(book[key]); // Значення властивості з таким ключем
    console.log(key, book[key]);
  }
}

///////////// Object.create() hasOwnProperty()​

const animal = {
  legs: 4,
};
const dog = Object.create(animal);
dog.name = "Манго";

console.log(dog); // {name: 'Манго'}
console.log(dog.name); // 'Манго'
console.log(dog.legs); // 4

console.log(dog.hasOwnProperty("legs")); /// false
console.log(dog.hasOwnProperty("name")); ////// true

/////////////////   Object.keys()​

const keys = Object.keys(book);

console.log(keys); /////// ['title', 'author', 'genres', 'rating']

/////////////////////     Object.values()​

const values = Object.values(book);

console.log(values); /////// ['The Last Kingdom', 'Bernard Cornwell', Array(2), 8.38]

///////////// Object.entries();

const entries = Object.entries(book);
console.log(entries); /// [['title', 'The Last Kingdom'], ['author', 'Bernard Cornwell'], ['genres', Array(2)], ['rating', 8.38]]

/////////////////// Destructuring of objects

const magazine = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

///// destructuring

const {
  title: firstTitle,
  author,
  isPublic,
  rating,
  coverImage = "https://via.placeholder.com/640/480",
} = magazine;
console.log(coverImage); // default value

console.log(firstTitle); //// changing the name of a variable title:firstTitle

const accessType = isPublic ? "публічному" : "закритому";
const message = `Книга ${firstTitle} автора ${author} з рейтингом ${rating} знаходиться в ${accessType} доступі.`;

////////// destructuring in cycle

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "На березі спокійних вод",
    author: "Роберт Шеклі",
    rating: 8.51,
  },
];

for (const book of books) {
  console.log(book.title);
  console.log(book.author);
  console.log(book.rating);
}

for (const book of books) {
  const { title, author, rating } = book;
  console.log(title);
}

/////////// Deep destructuring

const userCard = {
  nameFull: "Jacques Gluke",
  tag: "jgluke",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const {
  nameFull,
  tag,
  stats: { followers, views: userViews, likes: userLikes = 0 },
} = userCard;

console.log(userViews);

// Pattern "Parameter Object"

function doStuffWithBook(book) {
  const { title, numberOfPages, downloads, rating, isPublic } = book;
  console.log(title);
  console.log(numberOfPages);
}

/////
function doStuffWithBook1({
  title,
  numberOfPages,
  downloads,
  rating,
  isPublic,
}) {
  console.log(title);
  console.log(numberOfPages);
}

////////////////

const atTheOldToad = {
  poisons: [
    {
      name: "Speed potion",
      price: 300,
    },
    {
      name: "Dragon breath",
      price: 700,
    },
    {
      name: "Stone skin",
      price: 1100,
    },
  ],
  getPoison() {
    return this.poisons;
  },

  addPoison(newPoison) {
    for (const poison of this.poisons) {
      if (poison.name === newPoison.name) {
        return `Error! Poison ${newPoison.name} is already in your inventory!`;
      }
    }
    this.poisons.push(newPoison);
  },

  deletePoison(poisonName) {
    for (const [index, poison] of this.poisons.entries()) {
      if (poison.name === poisonName) {
        this.poisons.splice(index, 1);
        return ` ${poisonName} deleted`;
      }
    }
      return `${poisonName} not found`
  },

 updatePotionName(oldName, newName) {
     for (const poison of this.poisons) {
         if (poison.name === oldName) {
             poison.name = newName
             return `Changed`
     }
     }
      return `${oldName} is not in inventory!`
    },
};

console.log(atTheOldToad.getPoison());
atTheOldToad.addPoison({ name: "Invisibility", price: 620 });
console.log(atTheOldToad.addPoison({ name: "Invisibility", price: 620 }));
console.log(atTheOldToad.deletePoison("Stone skin"));
atTheOldToad.updatePotionName("Speed potion", "Snake skin")
console.log(atTheOldToad.getPoison());
