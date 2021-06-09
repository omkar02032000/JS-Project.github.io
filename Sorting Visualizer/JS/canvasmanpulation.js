var canvas = document.querySelector('canvas');
var c = canvas.getContext("2d");
canvas.width = 1355//window.innerWidth
canvas.height = 530//window.innerHeight


function clearCanvas(){
	c.clearRect(0, 0, canvas.width, canvas.height);
}