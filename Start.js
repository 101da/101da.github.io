function visible() {document.getElementById('list-elements').style.display = 'inline'};

function openNav() {
    document.getElementById("list").style.width = "15em";
    setTimeout(visible, 300);
}
function closeNav() {
    document.getElementById("list").style.width = "0em";
    document.getElementById('list-elements').style.display ='none';
}
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
console.log("Displaybreite: " + windowWidth);
console.log("Displayhoehe: " + windowHeight);
//>>document.getElementById('headerImage').style.height = windowHeight + "px";
//document.getElementById('article').style.marginTop = windowHeight + "px";
