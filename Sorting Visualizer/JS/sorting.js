async function bubbleSort(arr){
	for(let i=0, temp=0; i<MAX_SIZE-1; i++){

		for(let j=0; j<MAX_SIZE-i-1; j++){

			if(arr[j].height > arr[j+1].height){

				temp = arr[j].height;
				arr[j].height = arr[j+1].height;
				arr[j+1].height = temp;	

				temp = arr[j].y;
				arr[j].y = arr[j+1].y;
				arr[j+1].y = temp;

			}
		}
		await rebardraw(arr);
	}	
}

bubbleSort(BAR_ARRAY);