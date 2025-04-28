function myFunction(x) {
  x.classList.toggle("change");
  document.getElementById("sidebarmenu").classList.toggle("sbmenuc");
}

function commonstartup () {
  document.getElementById("datenum").innerText = "";
  document.getElementById("timenum").innerHTML = "";
  window.setInterval(loopfunc, 5000);
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
  getCurrencies();
  loopfunc();
}

async function getCurrencies() {
  let apilink = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/"; // + currency + ".json";

  let gold, dollar, euro, pfund, btc;

  var tryres = await fetch(apilink+"try.json");
  if (tryres.ok) {
    let data = await tryres.json();
    data = data["try"];
    gold = (1/data["xau"]) / 31.10;
    dollar    = (1/data["usd"]);
    euro      = (1/data["eur"]);
    pfund     = (1/data["gbp"]);
  }
  else {
    console.log("failed to get try currency");
  }
  
  var btcres = await fetch(apilink+"btc.json");
  if (btcres.ok) {
    let data = await btcres.json();
    data = data["btc"];
    
  }
  else {
    console.log("failed to get btc currency");
  }

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

window.onload = function() {
  commonstartup();
}
/*
$(document).ready(function() {
  $('#navigation').load('/pages/navigation.html');
});
*/