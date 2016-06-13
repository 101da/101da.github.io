window.onload = function(){document.getElementById("loadingCover").style.display = "none"}

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
var changeHtml = document.getElementById("welcomemessage");
changeHtml.innerHTML = greeting;
changeHtml.style.color = "red";
changeHtml.style.fontFamily = "Open Sans";
changeHtml.style.weight = "300";

//changeHtml.style.position = "relative";  <<PROBLEM MIT DEM POSITIONIEREN KÖNNTE AUCH HIER LIEGEN!
//changeHtml.style.textAlign = "center";
//changeHtml.style.top = "50%";

//changeHtml.style.marginTop: "5em";
//changeHtml.style.marginBottom: "5em";
//changeHtml.style.fontSize = "100%";


//document.getElementById("demo").innerHTML = d.getDay();

//var device = screen.innerWidth;
//window.onload als Variable ansprechen - DOM-Zugriffe möglichst vermeiden!
//window.onload(document.getElementById("IdWelcome").innerHTML = "test";)
