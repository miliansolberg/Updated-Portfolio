/************************* 
* Variables and data types
*/
/*

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Programmer';
console.log(job);

// Variable naming rules 
var $3years = 3;
var johnMark = 'John and Mark';
var notReservedJavascriptWords = 23;
*/

/************************************
* Variable mutation and type coercion
*/

/*

var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'trashMan';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

*/

/************************
 * Basic Operators
 

 var year, yearJohn, yearMark;
 now = 2018;
 ageJohn = 28;
 ageMark = 33;

 // Math operators
 yearJohn = now - ageJohn;
 yearMark = now - ageMark;

 console.log(yearJohn);

 console.log(now + 2);
 console.log(now - 2);
 console.log(now * 2);
 console.log(now / 2);

 // Logical operators
 var johnOlder = ageJohn < ageMark;
 console.log(johnOlder);

 //typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);

/*****************
 * Operator precedence
 */

 /*

 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 // Multiple operators
 var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average =(ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 -6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *=2;
console.log(x);
x += 10;
console.log(x);
x--;
console.log(x);
*/

/*
var massMark = 80;
var massJohn = 90;
var heightMark = 1.70
var heightJohn = 1.80

var bmiMark = massMark/(heightMark * heightMark);
var bmiJohn = massJohn/(heightJohn * heightJohn);

console.log(bmiMark, bmiJohn);

var isBmiMark = bmiMark > bmiJohn;
console.log('Is Marks BMI bigger than Johns?' + isBmiMark);
*/

/**************************'
 * If / Else statements
 */

 var firstName = 'John';
 var civilStatus = 'married';

 if (civilStatus === 'married') {
     console.log(firstName + ' ' + 'is married')
 } else {
     console.log(firstName + ' ' + 'is single')
 }

 var isMarried = true;
 if (isMarried) {
     console.log('He is married!');
 } else {
     console.log('He is single');
 }

 var massMark = 80;
var massJohn = 90;
var heightMark = 1.70
var heightJohn = 1.80

var bmiMark = massMark/(heightMark * heightMark);
var bmiJohn = massJohn/(heightJohn * heightJohn);

if (bmiMark > bmiJohn){
    console.log('Mark is bigger than John');
} else {
    console.log('John is bigger than Mark');
}