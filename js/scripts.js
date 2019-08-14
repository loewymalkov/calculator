
//back-end logic - the business
var add = function(num1, num2) {
 return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = (num1, num2) => {
  return num1 * num2;
};

var divide = function(num1, num2) {
return num1/num2;
};

// front end logic - user interface

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var result = add(num1, num2);

    $("#output").text(result);
  });
});