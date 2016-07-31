var positionSVG = {width: window.innerWidth - (window.innerWidth/40), height: window.innerHeight/2};
var positionObjects = {width: positionSVG.width/2, height:positionSVG.height/2};

var s = Snap(positionSVG.width, positionSVG.height);
var circle = s.circle(positionObjects.width, positionObjects.height, positionObjects.width/6)

/*function positionWindow() {
  svg = document.getElementById("svg");
  body.style.height = positionSVG.height + "px";
};*/

/*var s = Snap(800,600);
var bigCircle = s.circle(150, 150, 100);
bigCircle.attr({
  fill: "#bada55",
  stroke: "#000",
  strokeWidth: 5
});
var smallCircle = s.circle(100, 150, 70);
var discs = s.group(smallCircle, s.circle(200, 150, 70));
discs.attr({
  fill: "#fff"
});
bigCircle.attr({
  mask: discs
});
smallCircle.animate({r: 50}, 1000);
discs.select("circle:nth-child(2)").animate({r: 50}, 1000);
var p = s.path("M10-5-10,15M15,0,0,15M0-5-20,15").attr({
  fill: "none",
  stroke: "#bada55",
  strokeWidth: 5
});
p = p.pattern(0, 0, 10, 10);
bigCircle.attr({
  fill: p
});
/*discs.attr({
  fill: Snap("test.svg")
});
discs.attr({fill: "r()#fff-#000"});
discs.attr({fill: "R(150, 150, 100)#fff-#000"});
p.select("path").animate({stroke: "#f00"}, 1000);*/



/*var s = Snap(1000, 800);
// Circle with 80px radius
//var circle = s.circle(500, 500, 500);
var flower = Snap.load("test.svg", function(f){
  s.append(f);
  //s.svg(x="50", y="20");
});*/
