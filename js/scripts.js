
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

  $("form#add").submit(function(addEvent) {
    addEvent.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var addResult = add(num1, num2);

    $("#output1").text(addResult);
  });

  $("form#subtract").submit(function(subEvent) {
    subEvent.preventDefault();
    var num1 = parseInt($("#subtract1").val());
    var num2 = parseInt($("#subtract2").val());
    var subResult = subtract(num1, num2);
    
    $("#output2").text(subResult);
  });
  
  $("form#multiply").submit(function(mulEvent) {
    mulEvent.preventDefault();
    var num1 = parseInt($("#multiply1").val());
    var num2 = parseInt($("#multiply2").val());
    var mulResult = multiply(num1, num2);
    
    $("#output3").text(mulResult);
  });

  $("form#divide").submit(function(divEvent) {
    divEvent.preventDefault();
    var num1 = parseInt($("#divide1").val());
    var num2 = parseInt($("#divide2").val());
    var divResult = divide(num1, num2);
    
    $("#output4").text(divResult);
  });

});