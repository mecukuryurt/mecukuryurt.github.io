var canvas;
canvas = document.getElementById('mycanvas');
var width = canvas.width;
var height = canvas.height;
var context = canvas.getContext("2d");
/*
alert(width);
alert(height);
*/

var px, py;
var key;

px = 300; py = 300;

function drawPlayer() {
	context.fillStyle="#FF0000";
	context.fillRect(px-1,py-1,10,10);
    
}
drawPlayer();


function buttons(key, x, y) {
	if (key=="a") {px -= 5}
	if (key=="s") {py += 5}
	if (key=="w") {py -= 5}
	if (key=="d") {px += 5}
}

document.onkeypress = function(evt) {
	context.clearRect(0, 0, canvas.width, canvas.height);
	buttons(key, px, py);
	drawPlayer();
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    key = charStr;
};

document.addEventListener('readystatechange', event => {
  switch (document.readyState) {
    case "loading":
      console.log("document.readyState: ", document.readyState,
       `- The document is still loading.`
       );
      break;
    case "interactive":
      console.log("document.readyState: ", document.readyState, 
        `- The document has finished loading DOM. `,
        `- "DOMContentLoaded" event`
        );
      break;
    case "complete":
      console.log("document.readyState: ", document.readyState, 
        `- The page DOM with Sub-resources are now fully loaded. `,
        `- "load" event`
        );
      loop();
      break;
  }
});