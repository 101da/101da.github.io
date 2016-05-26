var d = new Date();
var x = d.getDay();
debugger;
var Weekdays = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"];
debugger;

var y = d.getHours();
debugger;
switch (y) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
      hour = "Der Tag ist noch jung, wir w@uml;nschen einen sch@oml;nen " + Weekdays[x] + ".";
      break;
  case 12:
  case 13:
  case 14:
  case 15:
      hour = "Guten Hunger und noch einen schönen " + Weekdays[x] + ".";
      break;
  case 16:
  case 17:
  case 18:
  case 19:
      hour = "Wir wünschen Ihnen einen entspannten Feierabend und noch einen schönen " +
      Weekdays[x] + ".";
      break;
  case 20:
  case 21:
  case 22:
  case 23:
      hour = "Noch einen schönen Restabend wünschen wir Ihnen am " + Weekdays[x] + ".";
      break;
  default:
      hour = "Wir wünschen Ihnen einen schönen Tag.";
}

//document.getElementById("demo").innerHTML = Weekdays[x];
document.getElementById("demo").innerHTML = hour;






//document.getElementById("demo").innerHTML = d.getDay();
