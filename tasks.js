///////   TASK 1 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1
// Grasshopper - Messi goals function
// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
    laLigaGoals + copaDelReyGoals + championsLeagueGoals;

// 2
// Return Negative
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
const makeNegative = (num) => (num >= 0 ? -num : num);

// 3
// Grasshopper - Terminal game move function
// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
const move = (position, roll) => position + roll * 2;

// 4
// Grasshopper - Personalized Message
// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
const greet = (name, owner) => `Hello ${name === owner ? "boss" : "guest"}`;

// 5
// Keep Hydrated!
// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
const litres = (time) => Math.floor(time / 2);

// 6
// Opposites Attract
// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
const lovefunc = (flower1, flower2) => !!((flower1 + flower2) % 2);


///////   TASK 2 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 7
// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript
const stringToArray = (string) => string.split(" ");

// 8
// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript
const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

// 9
// Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
const min = (list) =>
    list.reduce((minValue, e) => (e < minValue ? e : minValue));
const max = (list) =>
    list.reduce((maxValue, e) => (e > maxValue ? e : maxValue));

// 10
// Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript
const minValue = (arr, toReturn) =>
    toReturn === "value"
        ? arr.reduce((minValue, e) => (e < minValue ? e : minValue))
        : arr.indexOf(arr.reduce((minValue, e) => (e < minValue ? e : minValue)));

// 11
// A wolf in sheep's clothing
// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript
const warnTheSheep = (queue) =>
    queue.at(-1) === "wolf"
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${queue.length - (queue.indexOf("wolf") + 1)
        }! You are about to be eaten by a wolf!`;

// 12
// Beginner - Lost Without a Map
// https://www.codewars.com/kata/beginner-lost-without-a-map
const maps = (x) => x.map((x) => x * 2);

// 13
// Find the first non-consecutive number
// https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript
const firstNonConsecutive = (arr) =>
    arr.find((el, index, arr) => Math.abs(arr[index] - arr[index - 1]) > 1) ??
    null;

// 14
// You Can't Code Under Pressure #1
// https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript
const doubleInteger = (i) => i * 2;

// 15
// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
const century = (year) => Math.ceil(year / 100);

// 16
// Function 3 - multiplying two numbers (retired)
// https://www.codewars.com/kata/523b66342d0c301ae400003b/train/javascript
const multiply = (operand1, operand2) => operand1 * operand2;

// 17
// Beginner Series #4 Cockroach
// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript
const cockroachSpeed = (s) => Math.floor((s * 100000) / (60 * 60));

// 18
// Third Angle of a Triangle
// https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (firstAngleOfTriangle, secondAngleOfTriangle) =>
    180 - firstAngleOfTriangle - secondAngleOfTriangle;

// 19
// Twice as old
// https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
const twiceAsOld = (dadYearsOld, sonYearsOld) =>
    Math.abs(dadYearsOld - 2 * sonYearsOld);

// 20
// Get Nth Even Number
// https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript
const nthEven = (n) => n * 2 - 2;

// 21
// What's the real floor
// https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
const getRealFloor = (n) => (n >= 1 ? (n >= 13 ? n - 2 : n - 1) : n);

// 22
// Beginner Series #2 Clock
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript
const past = (h, m, s) => (h * 60 * 60 + m * 60 + s) * 1000;

// 23
// Is n divisible by x and y?
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript
const isDivisible = (n, x, y) => !(n % x || n % y);


///////   TASK 3 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 24
// Find the smallest integer in the array
// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((min, el) => el < min ? el : min);
    }
}

// 25
// Geometry Basics: Circle Circumference in 2D
// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
}

// 26
// Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
function giveMeFive(obj) {
    const result = [];

    for (let key in obj) {
        if (key.length === 5) {
            result.push(key);
        }

        if (obj[key].length === 5) {
            result.push(obj[key]);
        }
    }

    return result;
}

// 27
// Understanding closures - the basics
// https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
function buildFun(n) {

    var res = [];

    for (let i = 0; i < n; i++) {
        res.push(function () {
            console.log(i);
            return i;
        })
    }
    return res;
}

// 28
// Fun with ES6 Classes #2 - Animals and Inheritance
// https://www.codewars.com/kata/fun-with-es6-classes-number-2-animals-and-inheritance/train/javascript

class Shark extends Animal {
    constructor(name, age, status) {
        super(name, age, 0, "shark", status);
    }
}

class Cat extends Animal {
    constructor(name, age, status) {
        super(name, age, 4, "cat", status);
    }

    introduce() {
        return `${super.introduce()}  Meow meow!`;
    }
}

class Dog extends Animal {
    constructor(name, age, status, master) {
        super(name, age, 4, "dog", status);
        this.master = master;
    }

    greetMaster() {
        return `Hello ${this.master}`;
    }
}
