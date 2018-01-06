var stateSlider = document.getElementById("menuslider").style.display === "none";
console.log(stateSlider);

function toggleNav() {
  if (stateSlider == "visible") {
    document.getElementById("menuslider").style.display ="block";
  } else if (stateSlider == "none") {
    document.getElementById("menuslider").style.display ="none";
  } else {
    console.log("Error slider didn't work!")
  }};
