//////////// spread - розділяє колекцію на окремі ел

const temps = [14, -4, 25, 8, 11];

console.log(Math.min(temps)); /// NaN
console.log(Math.min(...temps)); /// -4;

//////// copy of array
const copyOfTemps = [...temps];
console.log(copyOfTemps) //// [14, -4, 25, 8, 11]

/////////// add arrays

const newArray = [...temps, ...copyOfTemps];

console.log(newArray);

////////// create new object

const first = { propA: 3, propB: 6 };
const second = { propA: 1, propC: 2, propD: 0 };
const third = { propE:10, ...first, ...second, propF:20 };
console.log(third); /////// {propE: 10,propA: 1, propB: 6, propC: 2, propD: 0, propF: 20}


///////// rest
 
function multiply(...args) {
    console.log(args);
};

multiply(1, 2); ///// [1,2]
multiply(1, 2, 3, 4, 5,) ///////  [1, 2, 3, 4, 5]


////////////

function add(first, second, ...other) {
    console.log(first);
    console.log(second);
    console.log(other);
    return first + second;
};

add(1, 2, 2, 3); //// 1,2,[2,3]
console.log(add(3, 3, 4, 4,)); /// 6