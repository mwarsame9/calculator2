$(document).ready(function(){
  console.log("document  ready");
  $("#myForm").submit(function(e) {

    var operator = $("#operator").val();
    var number1Input = parseInt($("#number1").val());
    var number2Input = parseInt($("#number2").val());

    if (operator == "add") {
      alert(number1Input+number2Input);
    };
    if (operator == "subtract") {
      alert(number1Input-number2Input);
    };
    if (operator == "multiply") {
      alert(number1Input*number2Input);
    };
    if (operator == "divide") {
      alert(number1Input/number2Input);
    };
    if (operator == null) {
      alert("Please select a valid operator.");
    };

    e.preventDefault();
	});

});
