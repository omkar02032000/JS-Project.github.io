function drawCheckBoard(arr){

	for(let i=0; i < (ROW_MAX_VALUE * COL_MAX_VALUE); i++){
		c.beginPath();
		c.strokeStyle = 'blue';
		c.rect(arr[i].x, arr[i].y, arr[i].width, arr[i].height);
		c.stroke();
	}
}