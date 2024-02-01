function makeid(l) {
var id =  Math.random().toString(16).slice(2).slice(0,l)
	return id;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
