//business logic
var pingPong = function(number) {
  if (number>0) {
    var outputArray= [];
      for (index = 1; index <= number; index++) {
        if (index % 15 === 0) {
          outputArray.push("ping-pong");
          console.log(outputArray);
        } else if (index % 5 === 0) {
          outputArray.push("pong");
        } else if (index % 3 === 0) {
          outputArray.push("ping");
        } else {
          outputArray.push(index);
        }
      } return outputArray;
  } else {
    return alert ("Enter a number greater than 0");
  }
}


//front end logic
$(document).ready(function(){
  $("#ping-pong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    console.log(input);
    var results = pingPong(input);
    $("#output").empty();

    results.forEach(function(result) {
    $("#output").append("<li>" + result + "</li>");
    });
    $('#output').show();

  });
});
