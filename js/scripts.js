$(document).ready(function() {
  $("form#whereto").submit(function(event) {
    event.preventDefault();

    var howRemote = 0;
    howRemote += grabRemote($("#bed").val())
    howRemote += grabRemote($("#sleep").val())
    howRemote += grabRemote($("#selftime").val())
    howRemote += grabRemote($("#yourlife").val())
    howRemote += grabRemote($("#best").val())

    var howLuxury = 0;
    howLuxury += grabLuxury($("#bed").val())
    howLuxury += grabLuxury($("#sleep").val())
    howLuxury += grabLuxury($("#selftime").val())
    howLuxury += grabLuxury($("#yourlife").val())
    howLuxury += grabLuxury($("#best").val())

    var howNatural = 0;
    howNatural += grabNatural($("#bed").val())
    howNatural += grabNatural($("#sleep").val())
    howNatural += grabNatural($("#selftime").val())
    howNatural += grabNatural($("#yourlife").val())
    howNatural += grabNatural($("#best").val())



    if (howRemote > howLuxury) {
      console.log(remote > lux)
    } else if (howLuxury > howNatural) {
      console.log(lux > natural & remote)
    } else {
      console.log(natural > lux & remote)
    }

    $('.output').show();

  });
});
