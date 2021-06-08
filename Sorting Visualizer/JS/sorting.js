for(var i=0, temp=0; i<MAX_SIZE; i++){

	for(var j=0; j<MAX_SIZE; j++){

		if(barArray[i].height < barArray[j].height){

			temp = barArray[i].height;
			barArray[i].height = barArray[j].height;
			barArray[j].height = temp;	

			temp = barArray[i].y;
			barArray[i].y = barArray[j].y;
			barArray[j].y = temp;

		}
	}
}

rebardraw();