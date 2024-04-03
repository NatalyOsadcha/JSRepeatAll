/////// map()

const planets = ["Earth", "Mars", "Venus", "Jupiter"];

const planetsInUpperCase = planets.map(planet =>
     planet.toUpperCase()
);

const planetsInLowCase = planets.map(planet => planet.toLowerCase());
console.log(planetsInUpperCase);
console.log(planetsInLowCase);
console.log(planets);

const students = [
   { name: "Mango", courses: ["mathematics", "physics"], score: 83},
   { name: "Poly", courses: ["computer science", "mathematics"], score: 50 },
   { name: "Kiwi", courses: ["physics", "biology"], score: 76 },
];

const studentsName = students.map((student, index) => [index, student.name]);

console.log(studentsName);

///////////// flatMap()

const studentCoursesMap = students.map(student => student.courses);
console.log(studentCoursesMap); /// [['mathematics', 'physics'],['computer science', 'mathematics'],['physics', 'biology']]

const studentAllCourses = students.flatMap(student => student.courses);

console.log(studentAllCourses);//// ['mathematics', 'physics', 'computer science', 'mathematics', 'physics', 'biology']

///////////  filter()

const values = [51, -3, 27, 21, -68, 42, -37, 0];

const positiveValues = values.filter(value => value > 0);
console.log(positiveValues); ///// [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log(negativeValues);

const bigValues = values.filter(value => value > 1000);

console.log(bigValues); ///[]

const courses = studentAllCourses.filter((course, index, array) => array.indexOf(course) === index);
console.log(courses);///  ['mathematics', 'physics', 'computer science', 'biology']

const LOW_SCORE = 50;
const HIGH_SCORE = 80;

const best = students.filter(student => student.score >= HIGH_SCORE);
const worst = students.filter(student => student.score < LOW_SCORE);
console.log(best);
console.log(worst);


////////////  