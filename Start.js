//navbar
function visible() {document.getElementById('list-elements').style.display = 'inline'};

function openNav() {
    document.getElementById("list").style.width = "15em";
    setTimeout(visible, 300);
}
function closeNav() {
    document.getElementById("list").style.width = "0em";
    document.getElementById('list-elements').style.display ='none';
}


//optional displaySize
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log("Displaybreite: " + windowWidth);
console.log("Displayhoehe: " + windowHeight);
//document.getElementById('headerImage').style.height = windowHeight + "px";
//document.getElementById('article').style.marginTop = windowHeight + "px";


//dayNnight
/*var d = new Date();
var hour = d.getHours();
var bodyId = document.getElementById('body');
//var aId = document.getElementsByName('a');

//the a-element wont turn white yet.
if ((hour => 20) && (hour <= 24)) {
  bodyId.style.color = "white";
  bodyId.style.backgroundColor = "black";
//  aId.style.color = "white";
} else {}*/
