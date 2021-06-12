var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = 854//window.innerWidth
canvas.height = 480//window.innerHeight

var BOX_SIZE;
var ROW_MAX_VALUE;
var COL_MAX_VALUE;
var BOX_ARRAY;
function Box(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}