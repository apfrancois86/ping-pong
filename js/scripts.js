$(document).ready(function(){
  $("#pingpong").submit(function(event)(
    event.preventDefault();
    var input = parseInt($("input#number").val());
    var results = pingPong(input);
  ));
});
