function clearCanvas(){
	c.clearRect(0, 0, canvas.width, canvas.height);
}

function bardraw(arr){
	for(let i=0; i < MAX_SIZE; i++){
		c.beginPath();
		c.fillStyle = "blue";
		c.fillRect(arr[i].x, arr[i].y, arr[i].width, arr[i].height);//c.rect(x, y, width, height)
	}
}

function generateBar(){
	BAR_ARRAY = [];
	NOB = Number(nob.options[nob.selectedIndex].value);
	FIXED_WIDTH = (canvas.width-((NOB+1)*GAP))/NOB;
	MAX_SIZE = Math.floor(canvas.width/(FIXED_WIDTH+GAP));
	clearCanvas();
	for(let i=0, x=GAP, y=0, width=FIXED_WIDTH, height=0; i < MAX_SIZE; i++){
	
		height = Math.ceil(Math.random() * canvas.height);
		if(height < MIN_HEIGHT)
			height = MIN_HEIGHT;
		y = canvas.height - height;
		BAR_ARRAY.push(new RecBar(x, y, width, height));
		x += width+GAP;
	}
	bardraw(BAR_ARRAY);
	sort.disabled = false;
}

function rebardraw(arr){
	return new Promise((resolve, reject) => {
		let y = 0;
		let speed = Number(spd.options[spd.selectedIndex].value);
		setTimeout(() => {
			clearCanvas();
	    	bardraw(arr);
	    	y += 1;
	    	resolve(y);
		}, 1000/(speed*NOB))
	})
}


//Generate hollow bars
/*
c.strokeStyle = "blue";
c.rect(arr[i].x, arr[i].y, arr[i].width, arr[i].height);
c.stroke();
*/