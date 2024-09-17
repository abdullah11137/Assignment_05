// Chapter 12 & 13


// Q1


// let char = prompt("Enter a character:");

// if (isNaN(char)) {
//     if (char === char.toUpperCase()) {
//         console.log("The character is an uppercase letter.");
//     } else if (char === char.toLowerCase()) {
//         console.log("The character is a lowercase letter.");
//     } else {
//         console.log("The character is not a letter.");
//     }
// } else {
//     console.log("The character is a number.");
// }


// Q2


// var num1 = prompt("Enter first number");
// var num2 = prompt("Enter second number");
// if(num1>num2){
//     document.write(`${num1} is greater than ${num2}`);
// }else if(num2>num1){
//     document.write(`${num2} is greater than ${num1}`);
// }else if(num1==num2){
//     document.write(`${num1} is equal to ${num2}`);
// }else{
//     document.write(`Enter valid number`)
// }



// Q3


// var num = prompt("Enter any number");
// if(num>0){
//     document.write(`Number is Positive.`);
// }else if(num<0){
//     document.write(`Number is Negative.`);
// }else if(num==0){
//     document.write(`Number is Zero.`);
// }


// Q4


// var str = prompt("Enter any string");
// var vowels = [A, E, I, O, U, a, e, i, o, u];
// if(str==vowels){
//     document.write(`True`);
// }else {
//     document.write(`False`);
// }


// Q5


// let correctPassword = "your_correct_password"; // Replace with your desired password

// function validatePassword() {
//   let userPassword = prompt("Please enter your password:");

//   if (userPassword === "") {
//     alert("Please enter your password.");
//   } else if (userPassword === correctPassword) {
//     alert("Correct! The password you entered matches the original password.");
//   } else {
//     alert("Incorrect password.");   

//   }
// }

// validatePassword();


// Q6


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else {
// greeting = "Good evening";
// }


// Q7



// var time = prompt("Enter time");
// if (time>=0 && time<1200) {
//     alert(`Good morning`)
// }else if(time>=1200 && time<1700){
//     alert(`Good afternoon`)
// }else if(time>=1700 && time<2100){
//     alert(`Good evening`)
// }else if(time>=2100 && time<2400){
//     alert(`Good night`)
// }else{
//     alert(`Invalid time format`)
// }


// Chapter 10 (if statements)



// Q1

// var city = "Karachi";
// if(city=="Karachi"){
//     console.log(`The City of Lights`)
// }



// Q2



// if ("x" === "y") {
//     let z = prompt("Enter the value of z:");
//   }


// Q3


// var zipCode = prompt("Enter Zip Code");
// if(zipCode==10010){
//   alert(`Karachi`)
// }else {
//   alert(`Please write correct city`)
// }


// Q4


// let x = 5;

// if (x === 3) {
//   x = 10;
// } else {
//   console.log("x is not equal to 3");
// }


// Chapter 11 (Comparison Operators)



// Q1


// var x = prompt("Enter first number");
// var y = prompt("Enter second number");
// if(x!==y){
//   alert(`${x} is not equal to ${y}`)
// }


// Q2


// if (x >= y) {}



// Q3



// let x = 5;

// if (x !== 3) {
//   x = 10;
// }


// Q4


// let num1 = 10;
// let num2 = 5;

// if (num1 !== num2) {
//   alert("Congratulations! The numbers are not equal.");
// }


// Q5


// var yourName = prompt("Please enter your first name:");
// var anotherName = "Abdullah";

// if (yourName !== anotherName) {
//   alert("No match");
// }



// Chapter 12 (if…else and else if statements)



// Q1



// let num1 = 10;
// let num2 = 5;

// if (num1 >= num2) {
//   alert("num1 is greater than or equal to num2.");
// } else {
//   alert("num1 is less than num2.");
// }


// Q2


// function calculateGrade(marks) {
//   let percentage = (marks / 100) * 100;

//   if (percentage >= 90) {
//     return "A";
//   } else if (percentage >= 80) {
//     return "B";
//   } else if (percentage >= 70) {
//     return "C";
//   } else if (percentage >= 60) {
//     return "D";
//   } else   
//  {
//     return "F";
//   }
// }

// let obtainedMarks = parseInt(prompt("Enter your obtained marks:"));

// if (obtainedMarks >= 0 && obtainedMarks <= 100) {
//   let grade = calculateGrade(obtainedMarks);
//   alert("Your percentage is: " + percentage + "%");
//   alert("Your grade is: " + grade);
// } else {
//   alert("Invalid marks. Please enter marks between 0 and 100.");
// }


// Q3


// var a = +prompt("Enter a number");
// if(a===10){
//   alert(`a is ${a}`)
// }else {
//   alert(`The correct value of a is ${a}`)
// }


// Q4


// var city = prompt("Enter a city:");

// if (city.toLowerCase() === "karachi") {
//   alert("You entered Karachi.");
// } else if (city.toLowerCase() === "lahore") {
//   alert("You entered Lahore.");
// } else {
//   alert("You entered a different city.");
// }


// Chapter 13 (Testing sets of conditions)


// Q1


// if ((a === b) && (c === d)) {


// Q2


// if ((a === b) || (c !== d)) {



// Q3


// if ((name === "Hamza" || name === "Arsalan") && age < 60) {


// Q4

// let num1 = 10;
// let num2 = 5;

// if (num1 < num2 || num1 > num2) {
//   alert("The numbers are not equal.");
// }


// Q5


// let firstName = "Abdullah";
// let lastName = "Kaimkhani";

// let userFirstName = prompt("Enter your first name:");
// let userLastName = prompt("Enter your last name:");

// if (userFirstName === firstName && userLastName === lastName) {
//   alert("Your names match!");
// } else {
//   alert("Your names do not match.");
// }



// Chapter 14 (If statements nested)


// Q1


// var password = prompt("Enter password");
// if(password!=""){
//   if(password.length>5){
//     alert(`OK.`)
//   }else{
//     alert(`Password must be greater than 5 characters.`)
//   }
// }else{
//   alert(`Password must not be empty.`)
// }


// Q2


// let a = 1;
// let c = "Max";

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }


// Q3


// if (a === 1 && c === "Max") {


// Q4


// let num1 = 10;
// let num2 = 10;

// if (num1 === num2) {
//   if (num1 <= num2) {
//     alert("Both conditions are true.");
//   }
// }