// var name = prompt("Please enter your name");
var remoteLove = 0;

$(document).ready(function() {
  $("form#whereto").submit(function(event) {
    event.preventDefault();

    // $('.gotoQaqortoq').hide();
    // $('.gotoKauai').hide();
    // $('.gotoMonaco').hide();

    remoteLove += parseInt($("#sleep").val())
    remoteLove += parseInt($("#selftime").val())
    remoteLove += parseInt($("#yourlife").val())
    remoteLove += parseInt($("#best").val())
    remoteLove += parseInt($("#bed").val())

    if (remoteLove >= 4) {
      $('.gotoQaqortoq').show();
      $('.gotoKauai').hide();
      $('.gotoMonaco').hide();
    } else if (remoteLove >= -1) {
      $('.gotoKauai').show();
      $('.gotoQaqortoq').hide();
      $('.gotoMonaco').hide();
    } else {
      $('.gotoMonaco').show();
      $('.gotoKauai').hide();
      $('.gotoQaqortoq').hide();
    }




  });
});
