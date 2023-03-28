// import * from './require.js';
function hello() {
	alert("Hello World!");
}
// const jsonData= require('account.json'); 
// console.log(jsonData);
// var fs = require('account.json');

var data = {
	"data" : [
		["mecukuryurt", "21052010"]
	]
}

/*fs.writeFile ("account.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    }
); */
function sendinfo(){
	let username = document.getElementById('name');
	username = username.value;
	let post = username + ": " + document.getElementById("post").value;
	alert(post);
}