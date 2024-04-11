/////// map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());

const planetsInLowCase = planets.map((planet) => planet.toLowerCase());
console.log(planetsInUpperCase);
console.log(planetsInLowCase);
console.log(planets);

const students = [
  { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
  { name: "Poly", score: 59, courses: ["informatics", "mathematics"] },
  { name: "Ajax", score: 37, courses: ["physics", "biology"] },
  { name: "Kiwi", score: 94, courses: ["literature", "informatics"] },
];

const studentsName = students.map((student, index) => [index, student.name]);

console.log(studentsName);

///////////// flatMap()

const studentCoursesMap = students.map((student) => student.courses);
console.log(studentCoursesMap); /// [['mathematics', 'physics'],['computer science', 'mathematics'],['physics', 'biology']]

const studentAllCourses = students.flatMap((student) => student.courses);

console.log(studentAllCourses); //// ['mathematics', 'physics', 'computer science', 'mathematics', 'physics', 'biology']

///////////  filter()

const values = [51, -3, 27, 21, -68, 42, -37, 0];

const positiveValues = values.filter((value) => value > 0);
console.log(positiveValues); ///// [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues);

const bigValues = values.filter((value) => value > 1000);

console.log(bigValues); ///[]

const courses = studentAllCourses.filter(
  (course, index, array) => array.indexOf(course) === index
);
console.log(courses); ///  ['mathematics', 'physics', 'computer science', 'biology']

const LOW_SCORE = 50;
const HIGH_SCORE = 80;

const best = students.filter((student) => student.score >= HIGH_SCORE);
const worst = students.filter((student) => student.score < LOW_SCORE);
console.log(best);
console.log(worst);

////////////  find()

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const pink = colorPickerOptions.find(
  (colorPicker) => colorPicker.label === "pink"
);
console.log(pink);

console.log(
  colorPickerOptions.findIndex((colorPicker) => colorPicker.label === "blue")
); // 2
console.log(
  colorPickerOptions.findIndex((colorPicker) => colorPicker.label === "white")
); // -1

////////////////  every()

console.log([1, 2, 3, 4, 5].every((element) => element >= 0)); // true
console.log([1, 2, 3, 4, 5, -10].every((element) => element >= 0)); // false

/////////// some()

console.log([1, 2, 3, 4].some((el) => el >= 0)); // true
console.log([1, 2, 3, 4, 5].some((el) => el <= 0)); // false

const fruits = [
  { name: "apples", amount: 100 },
  { name: "bananas", amount: 0 },
  { name: "grapes", amount: 50 },
];

console.log(fruits.some((fruit) => fruit.amount > 0)); // true

////////////  reduce(callback, initialValue)

//// масив.reduce((previousValue, element, index, array) => {
// Тіло колбек-функції
//}, initialValue);

const total = [1, 2, 3, 4, 10].reduce((prevValue, number) => {
  console.log(prevValue);

  return prevValue * number;
}, 1);
console.log(total);

const totalScore = students.reduce((prevValue, student) => {
  return prevValue + student.score;
}, 0);
const averageScore = Math.round(totalScore / students.length);
console.log(averageScore);

/////////////

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 11, tags: ["js", "nodejs", "react"] },
];

const likes = tweets.reduce((prevValue, tweet) => prevValue + tweet.likes, 0);
console.log(likes);

const countLikes = (array) => {
  return array.reduce((prevValue, el) => prevValue + el.likes, 0);
};

console.log(countLikes(tweets));

const getTags = (array) => {
  return array.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
  }, []);
};

const tags = getTags(tweets);

console.log(tags);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }
  acc[tag] += 1;

  return acc;
};

const countTags = (tags) => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);

console.log(tagCount);

////////////////   sort()

const scores = [27, 2, 41, 4, 7, 3, 75];
console.log([...scores].sort()); /// [2, 27, 3, 4, 41, 7, 75]

console.log([...scores].sort((a, b) => a - b)); //// [2, 3, 4, 7, 27, 41, 75]
console.log([...scores].sort((a, b) => b - a)); //// [75, 41, 27, 7, 4, 3, 2]

const letters = ["b", "B", "a", "A", "c", "C"];
console.log(letters.sort()); //// ['A', 'B', 'C', 'a', 'b', 'c']

console.log([...letters].sort((a, b) => a.localeCompare(b))); //// ['a', 'A', 'b', 'B', 'c', 'C']
console.log([...letters].sort((a, b) => b.localeCompare(a))); //// ['C', 'c', 'B', 'b', 'A', 'a']

////////////  sort() objects

const inAscendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
);

console.log(inAscendingScoreOrder);

const inDescendingScoreOrder = [...students].sort(
  (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
);
console.log(inDescendingScoreOrder);

const inAlphabeticalOrder = [...students].sort((a, b) =>
  a.name.localeCompare(b.name)
);
console.log(inAlphabeticalOrder);

/////////////   method chains

const names = [...students]
  .sort((a, b) => a.score - b.score)
  .map((student) => student.name);
console.log(names);

const uniqueSortedCourses = students
  .flatMap((student) => student.courses)
  .filter((course, index, array) => array.indexOf(course) === index)
  .sort((a, b) => a.localeCompare(b));

console.log(uniqueSortedCourses); ///  ['biology', 'informatics', 'literature', 'mathematics', 'physics']

/////////////////

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

function getUsersWithFriend(users, friendName) {
  return users.filter((user) => user.friends.includes(friendName));
}

console.log(getUsersWithFriend(users, "Goldie Gentry"));

/////////////////

function getFriends(users) {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
}

console.log(getFriends(users));

/////////////

function getUserWithEmail(users, email) {
  return users.find((user) => user.email === email);
}

/////////////////

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(
  (element) => element % 2 === 0
);
console.log(eachElementInFirstIsEven);

const eachElementInFirstIsOdd = secondArray.every(
  (element) => element % 2 === 1
);
console.log(eachElementInFirstIsOdd);

const eachElementInThirdIsOdd = thirdArray.every(
  (element) => element % 2 === 1
);
console.log(eachElementInThirdIsOdd);

//////////////

function isEveryUserActive(users) {
  return users.every((user) => user.isActive);
}

console.log(isEveryUserActive(users));

/////////////

const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
console.log(anyElementInFirstIsEven); // true

const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 === 1);
console.log(anyElementInFirstIsOdd); /// false

function isAnyUserActive(users) {
  return users.some((user) => user.isActive);
}

console.log(isAnyUserActive(users));

/////////////

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};

const playtimes = Object.values(players);
console.log(playtimes); //// [1270, 468, 710, 244];

const averagePlayTime =
  playtimes.reduce((prevTime = 0, time) => (prevTime += time)) /
  playtimes.length;
console.log(averagePlayTime);

//////////

const gamePlayers = [
  { name: "Mango", playtime: 1270, gamesPlayed: 4 },
  { name: "Poly", playtime: 480, gamesPlayed: 2 },
  { name: "Ajax", playtime: 640, gamesPlayed: 3 },
  { name: "Kiwi", playtime: 273, gamesPlayed: 1 },
];

const totalAveragePlaytimePerGame =
  gamePlayers.reduce(
    (prevTime, player) => prevTime + player.playtime / player.gamesPlayed,
    0
  ) / gamePlayers.length;

console.log(Math.round(totalAveragePlaytimePerGame));

///////////////

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
console.log(ascendingReleaseDates);

const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];

const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));
console.log(alphabeticalAuthors);

///////////////

const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
  firstBook.author.localeCompare(secondBook.author)
);
console.log(sortedByAuthorName);

const sortedByDescentingRating = [...books].sort(
  (firstBook, secondBook) => secondBook.rating - firstBook.rating
);
console.log(sortedByDescentingRating);

/////////////

const sortByDescendingFriendCount = (users) =>
  [...users].sort((a, b) => b.friends.length - a.friends.length);

console.log(sortByDescendingFriendCount(users));

//////////

function sortByName(users) {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
}

console.log(sortByName(users));

////////////////

const MIN_BOOK_RATING = 8;

const authorNames = [...books]
  .filter((book) => book.rating >= MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

console.log(authorNames);

/////////////

function getSortedFriends(users) {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};

console.log(getSortedFriends(users));

//////////

const getTotalBalanceByGender = function (users, gender) { 
    return users.filter(user=> user.gender===gender).reduce((totalBalance, user)=> totalBalance+user.balance, 0)
};

console.log(getTotalBalanceByGender(users, "male"));
console.log(getTotalBalanceByGender(users, "female"));

///////////////