var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function randomColor() {
	color1.value = "#" + Math.floor((Math.random() * 1000000) + 1);
	color2.value = "#" + Math.floor((Math.random() * 1000000) + 1);
	setGradient();
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function initialColor() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}



initialColor();

random.addEventListener("click", randomColor)

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);