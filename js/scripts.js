// var name = prompt("Please enter your name");
var remoteLove = 0;

$(document).ready(function() {
  $("form#whereto").submit(function(event) {
    event.preventDefault();

    remoteLove += parseInt($("#sleep").val())
    remoteLove += parseInt($("#selftime").val())
    remoteLove += parseInt($("#yourlife").val())
    remoteLove += parseInt($("#best").val())
    remoteLove += parseInt($("#bed").val())

    if (remoteLove >= 3) {
      $('.gotoQaqortoq').toggle()
      $('.survey').toggle();
    } else if (remoteLove >= 0) {
      $('.gotoKauai').toggle();
      $('.survey').toggle();
    } else {
      $('.gotoMonaco').toggle();
      $('.survey').toggle();
    }

  });
});
