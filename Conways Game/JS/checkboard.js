var BOX_SIZE = Math.max(10, Math.ceil(Math.random() * 50));
var ROW_MAX_VALUE = Math.ceil(canvas.height / BOX_SIZE);
var COL_MAX_VALUE = Math.ceil(canvas.width / BOX_SIZE);
var BOX_ARRAY = []

function Box(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
}

for(let a=0; a < ROW_MAX_VALUE; a++){

	let startY = a * BOX_SIZE;

	for(let b=0; b < COL_MAX_VALUE; b++){

		let startX = b * BOX_SIZE;
		BOX_ARRAY.push(new Box(startX, startY, BOX_SIZE, BOX_SIZE));
	}
}

drawCheckBoard(BOX_ARRAY);