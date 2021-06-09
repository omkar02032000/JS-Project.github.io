var MAX_SIZE = 5; //54
var MIN_HEIGHT = 30;
var FIXED_WIDTH = 20;
var GAP = 5;
var BAR_ARRAY = [];

function RecBar(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}

for(let i=0, x=5, y=0, width=FIXED_WIDTH, height=0; i < MAX_SIZE; i++){
	
	height = Math.ceil(Math.random() * window.innerHeight);
	if(height < MIN_HEIGHT)
		height = MIN_HEIGHT;
	y = canvas.height - height;
	BAR_ARRAY.push(new RecBar(x, y, width, height));
	x += width+GAP;
}

bardraw(BAR_ARRAY);