canvas.width = 854//window.innerWidth
canvas.height = 480//window.innerHeight
var NOB;
var GAP = 2;
var FIXED_WIDTH;
var MAX_SIZE;
var MIN_HEIGHT = 30;
var BAR_ARRAY = [];
var SEL;
var as;

function RecBar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}