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

const countTags = tags => tags.reduce(getTagStats, {});

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
console.log([...letters].sort((a, b) => b.localeCompare(a)));//// ['C', 'c', 'B', 'b', 'A', 'a']

