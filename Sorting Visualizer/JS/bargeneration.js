var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");

//Method - 2 (right method)

var MAX_SIZE = 5; //54
var x = 5;
var y = 0;
var MIN_HEIGHT = 30;
var width = 20;
var height = 0;
var gap = 5;
var barArray = []

function RecBar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.height = h;
	this.width = w;
}

for(var i=0; i < MAX_SIZE; i++){
	
	height = Math.ceil(Math.random() * window.innerHeight);
	if(height < MIN_HEIGHT)
		height = MIN_HEIGHT;
	y = canvas.height - height;
	
	barArray.push(new RecBar(x, y, width, height));
	x += width+gap;
}


for(var i=0; i < MAX_SIZE; i++){
	
	c.beginPath();
	c.rect(barArray[i].x, barArray[i].y, barArray[i].width, barArray[i].height);//c.rect(x, y, width, height)
	c.strokeStyle = "blue";
	c.stroke();		
}

console.log(barArray);
console.log(window.innerHeight);


//Method - 1
/*

var MAX_SIZE = 5; //54
var x = 5;
var y = 0;
var MIN_HEIGHT = 570;
var width = 20;
var gap = 5;
var barArray = []

function RecBar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.height = h;
	this.width = w;
}

for(var i=0; i < MAX_SIZE; i++){
	
	y = Math.ceil(Math.random() * window.innerHeight); //y = Math.ceil((Math.random()+0.05) * window.innerHeight);
	if(y > 570)
		y = MIN_HEIGHT;
	barArray.push(new RecBar(x, y, width, window.innerHeight));
	x += width+gap;
}

*/