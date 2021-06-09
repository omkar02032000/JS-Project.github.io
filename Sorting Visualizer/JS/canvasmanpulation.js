var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function clearCanvas(){
	c.clearRect(0, 0, canvas.width, canvas.height);
}