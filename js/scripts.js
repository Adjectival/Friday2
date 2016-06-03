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
      console.log("high, so Q")
    } else if (remoteLove >= 0) {
      console.log("med, so K")
    } else {
      console.log("low, better go to Monaco")
    }

    $('.output').show();

  });
});
