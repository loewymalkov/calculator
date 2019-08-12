
// functions for calculator
var add = function(num1, num2) {
 return num1 + num2;
};

var remainder = function(num1, num2) {
  return num1 - num2;
};

var divTwo = function(num1, num2) {
return num1/num2;
};

var twoTimes = function(num1, num2) {
  return num1 * num2;
};

//functions for BMI
var bmi = function(height, weight) {
  return weight / (height*height);
}


// prompts
var num1 = parseInt(prompt('Enter a number:'));
var num2 = parseInt(prompt('Enter another number:'));

// messages to user
alert("add = " + add(num1, num2));
alert("minus = " + remainder(num1, num2));
alert("divide = " + divTwo(num1, num2));
alert("multiply = " + twoTimes(num1, num2));
