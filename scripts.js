
//set count

if(localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//update count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}

update();

//add one to count
function plusOne() {
	localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
	update();
}

//reset count
function reset() {
	if (localStorage.getItem("count") == 0) {
		alert("You are already at 0! There is nothing to reset.");
	} else {
		if(confirm("This will reset your counter. Did you really drink a soda?")) {
			localStorage.setItem("count",0);
			update();
		} else {
			alert("Thank goodness!");
		}
	}
}
