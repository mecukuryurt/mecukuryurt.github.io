function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("sidebarmenu").classList.toggle("sbmenuc");
}

window.onload = function() {
  document.getElementById("datenum").innerText = "23.04.2025";
  document.getElementById("timenum").innerHTML = "211.10";
  console.log("yay");
}
/*
$(document).ready(function() {
  $('#navigation').load('/pages/navigation.html');
});
*/