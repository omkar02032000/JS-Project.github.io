var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");

var MAX_SIZE = 5; //54
var MIN_HEIGHT = 30;
var gap = 5;
var barArray = [];
var x = 5;
var y = 0;
var width = 20;
var height = 0; 

function RecBar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}


for(var i=0; i < MAX_SIZE; i++){
	
	height = Math.ceil(Math.random() * window.innerHeight);
	if(height < MIN_HEIGHT)
		height = MIN_HEIGHT;
	y = canvas.height - height;
	barArray.push(new RecBar(x, y, width, height));
	x += width+gap;
}

bardraw();