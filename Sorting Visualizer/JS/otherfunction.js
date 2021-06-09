function bardraw(arr){
	for(let i=0; i < MAX_SIZE; i++){

		c.beginPath();
		c.rect(arr[i].x, arr[i].y, arr[i].width, arr[i].height);//c.rect(x, y, width, height)
		c.strokeStyle = "blue";
		c.stroke();		
	}
}

function rebardraw(arr){
	return new Promise((resolve, reject) => {
		let y = 0;
		setTimeout(() => {
			clearCanvas();
	    	bardraw(arr);
	    	y += 1;
	    	resolve(y);
		}, 100)
	})
}