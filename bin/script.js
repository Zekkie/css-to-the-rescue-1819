console.log("test");

const cards = document.getElementsByClassName("card");

for(let i = 0; i < cards.length; i++) {
	cards[i].addEventListener("mouseover",doSomething,true);
};


function doSomething(e) {
	this.onmouseout = function() {
		console.log("out");
	};

	console.log("out")
};



//shapes
//animations
//tilt
//crazy
//shadows
