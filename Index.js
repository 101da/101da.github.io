function toggleNav() {
  if (document.getElementById("menuslider").style.display == "none") {
    document.getElementById("menuslider").style.display ="block";
  } else if (document.getElementById("menuslider").style.display == "block") {
    document.getElementById("menuslider").style.display ="none";
  } else {
    console.log("Error slider didn't work!");
  }};
