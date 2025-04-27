function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("sidebarmenu").classList.toggle("sbmenuc");
}

function datetimeprep() {
  document.getElementById("datenum").innerText = "25.04.2025";
  document.getElementById("timenum").innerHTML = "10.05";
}

function commonstartup () {
  document.getElementById("currencytext").innerHTML = "DOLLAR 38,29 				<font class=\"dec\">%0,02</font> EURO 43,78   				<font class=\"inc\">%0,93</font> PFUND 51,19 	 			<font class=\"inc\">%0,65</font> BITCOIN $93.500,00 			<font class=\"dec\">%-0,25</font> BIST 9.490,90 		 	<font class=\"inc\">%1,92</font> GOLD 3.337,59				<font class=\"inc\">%0,48</font> ZINSEN 48,99				<font class=\"inc\">%0,00</font>";

  /*
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async=true;
  script.src = 'https://cse.google.com/cse.js?cx=b5748418015954074';    
  document.head.appendChild(script);
  */

  var input = document.getElementById('searchinput');
  var input2 = document.getElementById('sbmenusearchinput');
  input.addEventListener('keyup',function(event){
    if (event.key == "Enter") {
      alert(input.value + ". ich weiß es nicht. Bitte finden Sie es über Links.")
    }
  });
  input2.addEventListener('keyup',function(event){
    if (event.key == "Enter") {
      alert(input2.value + ". ich weiß es nicht. Bitte finden Sie es über Links.")
    }
  });

  document.getElementById("gotomainpage").onclick = function() {
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }

  loopfunc();
}


Date.prototype.today = function () { 
  return ((this.getDate() < 10)?"0":"") + this.getDate() +"."+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"."+ this.getFullYear();
}
Date.prototype.timeNow = function () {
  return ((this.getHours() < 10)?"0":"") + this.getHours() +"."+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes();
}

function loopfunc() {
  
  var currentdate = new Date(); 
  var date = currentdate.today();
  var time = currentdate.timeNow();
  document.getElementById("datenum").innerText = date;
  document.getElementById("timenum").innerHTML = time;

}

window.setInterval(loopfunc, 5000);

window.onload = function() {
  datetimeprep();
  commonstartup();
}
/*
$(document).ready(function() {
  $('#navigation').load('/pages/navigation.html');
});
*/