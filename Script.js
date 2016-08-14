window.onload = function(){document.getElementById("loadingCover").remove("loadingCover")}

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

// First lets create our drawing surface out of existing SVG element
// If you want to create new surface just provide dimensions
// like s = Snap(800, 600);
var s = Snap();
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
// Now lets create another small circle:
var smallCircle = s.circle(100, 150, 70);
// Lets put this small circle and another one into a group:
var discs = s.group(smallCircle, s.circle(200, 150, 70));
// Now we can change attributes for the whole group
discs.attr({
    fill: "#fff"
});
// Now more interesting stuff
// Lets assign this group as a mask for our big circle
bigCircle.attr({
    mask: discs
});
// Despite our small circle now is a part of a group
// and a part of a mask we could still access it:
smallCircle.animate({r: 50}, 1000);
// We don’t have reference for second small circle,
// but we could easily grab it with CSS selectors:
discs.select("circle:nth-child(2)").animate({r: 50}, 1000);
// Now lets create pattern
var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
        fill: "none",
        stroke: "#bada55",
        strokeWidth: 5
    });
// To create pattern,
// just specify dimensions in pattern method:
p = p.pattern(0, 0, 10, 10);
// Then use it as a fill on big circle
bigCircle.attr({
    fill: p
});
// We could also grab pattern from SVG
// already embedded into our page
discs.attr({
    fill: Snap("#pattern")
});
// Lets change fill of circles to gradient
// This string means relative radial gradient
// from white to black
discs.attr({fill: "r()#fff-#000"});
// Note that you have two gradients for each circle
// If we want them to share one gradient,
// we need to use absolute gradient with capital R
discs.attr({fill: "R(150, 150, 100)#fff-#000"});
// Of course we could animate color as well
p.select("path").animate({stroke: "#f00"}, 1000);
// Now lets load external SVG file:
Snap.load("mascot.svg", function (f) {
    // Note that we traversre and change attr before SVG
    // is even added to the page
    f.selectAll("polygon[fill='#09B39C']").attr({fill: "#bada55"});
    g = f.select("g");
    s.append(g);
    // Making croc draggable. Go ahead drag it around!
    g.drag();
    // Obviously drag could take event handlers too
    // That’s better! selectAll for the rescue.
});
// Writing text as simple as:
s.text(200, 100, "Snap.svg");
// Provide an array of strings (or arrays), to generate tspans
var t = s.text(200, 120, ["Snap", ".", "svg"]);
t.selectAll("tspan:nth-child(3)").attr({
    fill: "#900",
    "font-size": "20px"
});
