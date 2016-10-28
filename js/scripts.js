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
  $("#pingPong").submit(function(event){
    event.preventDefault();
    var input = parseInt($("input#number").val());
    console.log(input);
    var results = pingPong(input);
    $("#output ol").empty();

    if (input > 50000) {
      $("#secretOutput").show();//spec 6
    } else if (input > 0 && input < 50000) {
        results.forEach(function(result) {
        $("#output ol").append("<li>" + result + "</li>");
        });
        $("#output ol").show();
        $('#secretOutput').hide();
      }
  });
});
