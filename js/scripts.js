$(document).ready(function(){
  console.log("document  ready");
  $("#myForm").submit(function(e) {

    var operator = $("#operator").val();
    var number1Input = parseFloat($("#number1").val());
    var number2Input = parseFloat($("#number2").val());

    if (operator == "add") {
      var answer = (number1Input+number2Input).toFixed(2)
      $("#answer p").text(answer);
    };
    if (operator == "subtract") {
      var answer = (number1Input-number2Input).toFixed(2)
      $("#answer p").text(answer);
    };
    if (operator == "multiply") {
      var answer = (number1Input*number2Input).toFixed(2)
      $("#answer p").text(answer);
    };
    if (operator == "divide") {
      var answer = (number1Input/number2Input).toFixed(2)
      $("#answer p").text(answer);
    };
    if (operator == null) {
      alert("Please select a valid operator.");
    };

    e.preventDefault();
	});

});
