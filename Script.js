var d = new Date();
var day = d.getDay();
var hour = d.getHours();

var Weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
var greeting = "";

if (hour <= 11) {
  greeting = "Der Tag ist noch jung, wir wünschen einen schönen " + Weekdays[day] + ".";
} else if (hour <= 15 ) {
  greeting = "Guten Hunger und noch einen schönen " + Weekdays[day] + ".";
} else if (hour <= 19) {
  greeting = "Wir wünschen Ihnen einen entspannten Feierabend und noch einen schönen " +
  Weekdays[day] + ".";
} else if (hour <= 23) {
  greeting = "Noch einen schönen Restabend wünschen wir Ihnen am " + Weekdays[day] + ".";
} else if ((day == 0 || day == 6) && (hour <= 19)) {
  greeting = "Wir wünschen Ihnen ein entspanntes Wochenende und noch einen schönen " +
  Weekdays[day] + ".";
  }
 else {
  greeting = "Wir wünschen Ihnen einen schönen Tag.";
}

//document.getElementById("demo").innerHTML = Weekdays[day];
var changeHtml = document.getElementById("demo");
changeHtml.innerHTML = greeting;
changeHtml.style.color = "red";
changeHtml.style.fontFamily = "Arial";


//document.getElementById("demo").innerHTML = d.getDay();
