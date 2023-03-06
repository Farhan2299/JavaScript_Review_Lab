//Prompt B
var firstVariable = "Hello World";
firstVariable = 42;
let secondVariable = firstVariable;
secondVariable = "Hello Again"

console.log(firstVariable); //output: 42

const yourName = "Ali";
const greeting = "Hello, my name is " + yourName;
console.log(greeting); //output: "Hello, my name is Ali"

//Prompt C

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(e === "Kevin");
console.log(a < b && b < c);
console.log(a === a && a !== d);
console.log(Number("48") == 48);

//Prompt D
let animal = "cow";
if (animal === "cow") {
    console.log("mooooo");
}
else {
    console.log("Hey! You're not a cow.");
}