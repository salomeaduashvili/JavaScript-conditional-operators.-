const prompt = require("prompt-sync")();

//1 დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
//1 Write a program to check if a number is even or odd.

function evenOrodd() {
  let x = Number(prompt("Enter your number: "));
  if (isNaN(x)) {
    console.log("Wrong Input");
  } else if (x % 2 === 0 && x !== 0) {
    console.log("Even");
  } else if (x % 2 !== 0) {
    console.log("Odd");
  } else {
    console.log("ZERO");
  }
}
evenOrodd();

//2 დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
//2 Write a program to check if a number is positive, negative, or zero.

function positiveOrNegative() {
  const x = Number(prompt("Enter your number: "));
  if (isNaN(x)) {
    console.log("Wrong Input");
  } else if (x > 0) {
    console.log("Positive");
  } else if (x < 0) {
    console.log("Negative");
  } else {
    console.log("ZERO");
  }
}
positiveOrNegative();

//3 დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.,
//3 Write a program to check if a number is divisible by another number.,

function divisibleCheck() {
  let firstNum = Number(prompt("Enter your first number: "));
  let secondNum = Number(prompt("Enter your second number: "));
  if (isNaN(firstNum) || isNaN(secondNum) || secondNum === 0) {
    console.log("Wrong Input");
  } else if (firstNum % secondNum === 0) {
    console.log("Divisible");
  } else {
    console.log("Not Divisible");
  }
}

divisibleCheck();

//4 დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
//4 Write a program to check if a string is empty or not.

function emptyStr() {
  let str = prompt("Enter your string: ").trim();
  if (str.trim() === "") {
    console.log("Empty");
  } else {
    console.log("Not Empty");
  }
}

emptyStr();

//5 დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
//5 Write a program to check if a string contains a specific word.

function containsStr() {
  let str = prompt("Enter your string: ").trim();
  let check = prompt("Enter your word you wanna check: ").trim();
  if (str.includes(check)) {
    console.log(`Includes a word: "${check}"`);
  } else {
    console.log(`It does not includes a word: "${check}"`);
  }
}

containsStr();

//6 დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
//6 Write a program to find the minimum of two numbers.

function minNum() {
  let x = Number(prompt("Enter your first number: "));
  let y = Number(prompt("Enter your second number: "));
  if (isNaN(x) || isNaN(y)) {
    console.log("Wrong Input");
  } else if (x < y) {
    console.log(`${x} is Minimal Number`);
  } else if (x > y) {
    console.log(`${y} is Minimal Number`);
  } else {
    console.log("They are even");
  }
}

minNum();

// example with method: Math.min()
function numbersMin() {
  let x = Number(prompt("Enter your first number: "));
  let y = Number(prompt("Enter your second number: "));
  let result;
  if (isNaN(x) || isNaN(y)) {
    console.log("Wrong Input");
  } else if (x !== y) {
    result = Math.min(x, y);
    console.log(`${result} is Minimal Number`);
  } else {
    console.log("They are even");
  }
}

numbersMin();

//7 დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
//7 Write a program to find the maximum of two numbers.

function maxNum() {
  let x = Number(prompt("Enter your first number: "));
  let y = Number(prompt("Enter your second number: "));
  if (isNaN(x) || isNaN(y)) {
    console.log("Wrong Input");
  } else if (x < y) {
    console.log(`${y} is Maximal Number`);
  } else if (x > y) {
    console.log(`${x} is Maximal Number`);
  } else {
    console.log("They are even");
  }
}

maxNum();

// example with method: Math.max()
function numbersMax() {
  let x = Number(prompt("Enter your first number: "));
  let y = Number(prompt("Enter your second number: "));
  let result;

  if (isNaN(x) || isNaN(y)) {
    console.log("Wrong Input");
  } else if (x !== y) {
    result = Math.max(x, y);
    console.log(`${result} is Maximal Number`);
  } else {
    console.log("They are even");
  }
}

numbersMax();

/*
8. დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 
18 წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".

8. Write a program that asks the user for their age and determines whether they are 
18 years old or older. If so, print "Adult", otherwise - "Minor".
*/

function adultOrMinor() {
  let age = Number(prompt("Enter your age: "));
  if (age >= 18) {
    console.log("Adult");
  } else if (age < 18 && age > 0) {
    console.log("Minor");
  } else {
    console.log("Wrong Input");
  }
}
adultOrMinor();

/*
9. დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას.
91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ 
ორივე - if/else if/else და switch.

9. Write a program that asks the user for a score and outputs the corresponding grade.
91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> failed. Use
both - if/else if/else and switch.
*/

function scoreCheck() {
  let score = Number(prompt("What is your score? "));

  if (score < 0 || score > 100 || isNaN(score)) {
    console.log("Wrong Input");
  } else if (score >= 91 && score <= 100) {
    console.log("A");
  } else if (score >= 81) {
    console.log("B");
  } else if (score >= 71) {
    console.log("C");
  } else if (score >= 61) {
    console.log("D");
  } else if (score >= 51) {
    console.log("E");
  } else {
    console.log("FAILED");
  }
}
scoreCheck();

function scoreCheckSwitch() {
  let score = Number(prompt("What is your score? "));
  switch (true) {
    case score < 0 || score > 100 || isNaN(score):
      console.log("Wrong Input");
      break;
    case score >= 91 && score <= 100:
      console.log("A");
      break;
    case score >= 81:
      console.log("B");
      break;
    case score >= 71:
      console.log("C");
      break;
    case score >= 61:
      console.log("D");
      break;
    case score >= 51:
      console.log("E");
      break;
    default:
      console.log("FAILED");
  }
}

scoreCheckSwitch();

/*
10. დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და 
დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი 
არის "A", უნდა დაბეჭდოს "შესანიშნავი!"

10. Write a program that accepts a grade (A, B, C, D, or F) as input and prints the 
appropriate message using switch/case. For example, if the input is "A", it should print 
"Excellent!"
*/

function gradeCheck() {
  let grade = prompt("What is your grade? ").trim().toUpperCase();

  switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Good");
      break;
    case "C":
      console.log("Mediocre");
      break;
    case "D":
      console.log("Average");
      break;
    case "E":
      console.log("Bad");
      break;
    case "F":
      console.log("FAILURE");
      break;
    default:
      console.log("Wrong Input");
  }
}

gradeCheck();

// example with if statments:

function checkGrade() {
  let grade = prompt("What is your grade? ").trim().toUpperCase();

  if (grade === "A") {
    console.log("Excellent");
  } else if (grade === "B") {
    console.log("Good");
  } else if (grade === "C") {
    console.log("Mediocre");
  } else if (grade === "D") {
    console.log("Average");
  } else if (grade === "E") {
    console.log("Bad");
  } else if (grade === "F") {
    console.log("FAILURE");
  } else {
    console.log("Wrong Input");
  }
}
checkGrade();

/*
11. დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის,
2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის 
გამოყენებით.

11. Write a program that takes the number of the month as input (January 1, 
February 2, etc.) and prints the number of days in that month using switch/case.
*/

function monthDaysCheck() {
  let monthNumber = Number(prompt("Enter the number for the month: "));

  switch (monthNumber) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      console.log(31);
      break;
    case 2:
      console.log("28 or 29");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log(30);
      break;
    default:
      console.log("Wrong Input");
  }
}

monthDaysCheck();

//example with if statments:

function checkMonthDays() {
  let monthNumber = Number(prompt("Enter the number for the month: "));

  if (
    monthNumber === 1 ||
    monthNumber === 3 ||
    monthNumber === 5 ||
    monthNumber === 7 ||
    monthNumber === 8 ||
    monthNumber === 10 ||
    monthNumber === 12
  ) {
    console.log(31);
  } else if (monthNumber === 2) {
    console.log(" 28 or 29");
  } else if (
    monthNumber === 4 ||
    monthNumber === 6 ||
    monthNumber === 9 ||
    monthNumber === 11
  ) {
    console.log(30);
  } else {
    console.log("Wrong Input");
  }
}

checkMonthDays();
