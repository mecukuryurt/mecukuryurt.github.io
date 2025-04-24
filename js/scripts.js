function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("sidebarmenu").classList.toggle("sbmenuc");
}

function datetimeprep() {
  document.getElementById("datenum").innerText = "23.04.2025";
  document.getElementById("timenum").innerHTML = "211.10";
  console.log("yay");
}

function commonstartup () {
  document.getElementById("currencytext").innerHTML = "DOLLAR 36,10 				<font class=\"inc\">%0,17</font> EURO 37,30   				<font class=\"dec\">%-0,22</font> PFUND 44,76 	 			<font class=\"dec\">%-0,24</font> BITCOIN $95.056,20 			<font class=\"dec\">%-0,22</font> BIST 1009.811,00 		 	<font class=\"dec\">%-0,73</font> GOLD 3.337,59				<font class=\"dec\">%-0,60</font> ZINSEN 44,66				<font class=\"inc\">%0,08</font>";
}

window.onload = function() {
  datetimeprep();
  commonstartup();
}
/*
$(document).ready(function() {
  $('#navigation').load('/pages/navigation.html');
});
*/