async function bubbleSort(arr){
	for(let i=0, temp=0, tempbar = barArray; i<MAX_SIZE; i++){

		for(let j=0; j<MAX_SIZE; j++){

			if(barArray[i].height < barArray[j].height){

				temp = barArray[i].height;
				barArray[i].height = barArray[j].height;
				barArray[j].height = temp;	

				temp = barArray[i].y;
				barArray[i].y = barArray[j].y;
				barArray[j].y = temp;

			}
		}
		let res = await rebardraw(barArray);
		console.log(res);
	}	
};

bubbleSort(barArray);