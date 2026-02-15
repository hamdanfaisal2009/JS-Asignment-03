// Piniting Numbers

for (var i = 1; i <= 10; i++) {
    console.log(i);   
}

console.log("Printing 1 to 10 num complete.");

for (var i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Printing 10 to 1 num complete.");

for (var i = 5 ; i <= 15 ; i++) {
    console.log(i);
}

console.log("Printing 5 to 15 num complete.");

for (var i = 1; i <= 20; i++) {
    console.log(i);
}

console.log("Printing 1 to 20 num complete.");

// priting even and odd numbers

for (var i = 1; i <= 20; i++) {
 if (i % 2 === 0) {
    console.log(i);
}
}

console.log("Printing Even numbers completed");

for (var i = 1 ; i <= 20 ; i ++){
    if (i % 2 !== 0) {
    console.log(i);
}
}

console.log("Priniting Odd numbers completed");

for (var i = 1 ; i <= 50 ; i++){
    if (i % 5 === 0 )
    console.log(i);
}

console.log("Printing divisble numbers");

//  Calculation using loop

var sum = 1;

for (var i = 2; i <= 10; i++) {
    sum += i;
}

console.log("Sum of numbers from 1 to 10:" , sum);

var sumEven = 0 ;

for (var i = 3 ; i <=  10 ; i++){
    if (i % 2 === 0) {
        sumEven += i;
    }
}

console.log("Sum of even numbers from 1 to 10:", sumEven);


var sumSquare = 0;
for (var i = 3; i <= 10; i++) {
    sumSquare += i * i;
}
console.log("Sum of squares from 1 to 10:", sumSquare);

// Multiplication Table


for (var i = 1; i <= 10; i++) {
    console.log("2 x " + i + " = " + (2 * i));
}

console.log("------------");


for (var i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

console.log("------------");

var number = prompt("Enter a number to see its multiplication table:");

for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}

//counting  even and divisible numbers
var counteven = 0;
for (var i = 1; i <= 50 ; i++) {
    if ( i % 2 === 0) {
        counteven += 1
    }
}
console.log(counteven);

console.log("-----");

var countdivis = 0
for (var i = 1; i <= 100 ; i++) {
    if ( i % 3 === 0) {
        countdivis += 1
    }
}
console.log(countdivis);

console.log("=======================");


// JS assignment-01 has compeleted.
