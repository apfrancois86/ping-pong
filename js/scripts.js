//business logic
var pingPong = function(number);
  var outputArray= [];
  for (index = 1; index <= number; index++) {
    if (index % 3 === 0) {
      outputArray.push("ping");
    } else if (index % 5 === 0) {
      outputArrau.push("pong"); {

    } else if

    }
  }





//front end logic
$(document).ready(function(){
  $("#pingpong").submit(function(event)(
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var results = pingPong(input);
    $("#output").empty();

    results.forEach(result);
    $("#output").append("<li>" + result + "</li>");

  ));
});
