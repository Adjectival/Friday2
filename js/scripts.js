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

    if (remoteLove >= 4) {
      $('.gotoQaqortoq').toggle();
    } else if (remoteLove >= -1) {
      $('.gotoKauai').toggle();
    } else {
      $('.gotoMonaco').toggle();
    }
    
  });
});
