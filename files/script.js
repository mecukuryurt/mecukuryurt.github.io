// alert("Hello World!")
function getPassword(){
	pswrd = prompt("Enter Password:");

	if (pswrd == "21052010lesson") {
		window.location.replace("../others/lessons.html");
		alert("Password is correct");
	}
	else {
		alert("Password is wrong!")
	}
}
function showlessons(){
	lessonid = prompt("Enter Lesson ID:");

	if (lessonid == "05052022"){
		alert("https://docs.google.com/presentation/d/1F78IoN6Xt7O8MEaP-z56p4OCtWwugb_Wc20ryOE4BEA/edit?usp=sharing")
	}
}