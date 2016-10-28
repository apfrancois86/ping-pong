//business logic
var pingPong = function(number) {
  if (number>0) {
    var outputArray= [];
      for (index = 1; index <= number; index++) {
        //spec 1
        if (index % 15 === 0) {
          outputArray.push("ping-pong");//spec 4
        } else if (index % 5 === 0) {
          outputArray.push("pong");//spec 3
        } else if (index % 3 === 0) {
          outputArray.push("ping");//spec 2
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
    $("#output").empty();//spec 5

    results.forEach(function(result) {
    $("#output").append("<li>" + result + "</li>");
    });
    $('#output').show();

  });
});
