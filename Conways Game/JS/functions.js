function clearCanvas(){
	c.clearRect(0, 0, canvas.width, canvas.height);
}

function drawCheckBoard(){
	clearCanvas();
	for(let i=0; i < (ROW_MAX_VALUE * COL_MAX_VALUE); i++){
		c.beginPath();
		c.strokeStyle = 'blue';
		c.rect(BOX_ARRAY[i].x, BOX_ARRAY[i].y, BOX_ARRAY[i].width, BOX_ARRAY[i].height);
		c.stroke();
	}
	return;
}

function createCheckBoard(){
	BOX_SIZE = 30;//Math.max(10, Math.random() * 50);
	ROW_MAX_VALUE = Math.ceil(canvas.height / BOX_SIZE);
	COL_MAX_VALUE = Math.ceil(canvas.width / BOX_SIZE);
	BOX_ARRAY = []
	for(let a=0; a < ROW_MAX_VALUE; a++){

		let startY = a * BOX_SIZE;

		for(let b=0; b < COL_MAX_VALUE; b++){

			let startX = b * BOX_SIZE;
			BOX_ARRAY.push(new Box(startX, startY, BOX_SIZE, BOX_SIZE));
		}
	}
	drawCheckBoard();	
	changeColor();
}

function colorBox(i){
	return new Promise((resolve, reject) => {
		let y = 0;
		setTimeout(() => {
			//c.fillStyle = 'yellow';
			c.fillRect(BOX_ARRAY[i].x, BOX_ARRAY[i].y, BOX_ARRAY[i].width, BOX_ARRAY[i].height)
	    	y += 1;
	    	resolve(y);
		}, 1)
	})
}

function uncolorBox(i){
	return new Promise((resolve, reject) => {
		let y = 0;
		setTimeout(() => {
			c.clearRect(BOX_ARRAY[i].x, BOX_ARRAY[i].y, BOX_ARRAY[i].width, BOX_ARRAY[i].height)
			c.beginPath();
			//c.strokeStyle = 'blue';
			c.rect(BOX_ARRAY[i].x, BOX_ARRAY[i].y, BOX_ARRAY[i].width, BOX_ARRAY[i].height);
			c.stroke();
	    	y += 1;
	    	resolve(y);
		}, 1)
	})
}

async function changeColor(){
	let MAX = 50;
	let CC = [MAX];
	while(true){
		for(let i=0; i<MAX; i++, CC[i]=Math.max(0, Math.floor(Math.random()*(ROW_MAX_VALUE*COL_MAX_VALUE))));
		for(let i=0; i<MAX; i++)
			await colorBox(CC[i]);
		for(let i=0; i<MAX; i++)
			await uncolorBox(CC[i]);	
	}
}