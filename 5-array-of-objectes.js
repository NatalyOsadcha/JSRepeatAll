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
  {
    title: "Сон смішної людини",
    author: "Федір Достоєвський",
    rating: 7.75,
  },
];


for (const book of books) {
    console.log(book.title);
    console.log(book.rating);
};

const bookNames = [];
for (const book of books) {
    bookNames.push(book.title);
};
console.log(bookNames); /// ['The Last Kingdom', 'На березі спокійних вод', 'Сон смішної людини']

let totalRating = 0;
for (const book of books) {
    totalRating += book.rating;
};
const averageRating = (totalRating / books.length).toFixed(2);
console.log(averageRating);