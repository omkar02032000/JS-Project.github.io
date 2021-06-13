function swap(i, j){
	let temp = BAR_ARRAY[i].height;
	BAR_ARRAY[i].height = BAR_ARRAY[j].height;
	BAR_ARRAY[j].height = temp;	

	temp = BAR_ARRAY[i].y;
	BAR_ARRAY[i].y = BAR_ARRAY[j].y;
	BAR_ARRAY[j].y = temp;	

	return;
}


async function bubbleSort(){

	for(let i=0, temp=0, swapFlag=0; i<MAX_SIZE-1; i++){
		
		swapFlag = 0;
		
		for(let j=0; j<MAX_SIZE-i-1; j++){

			if(BAR_ARRAY[j].height > BAR_ARRAY[j+1].height){

				await swap(j, j+1);
				swapFlag = 1;
			}
			await rebardraw();
		}
		if(swapFlag == 0)
			break;
	}
	return;
}


async function selectionSort(){
	
	for(let i=0, temp=0; i<MAX_SIZE-1; i++){
	
		let min_idx = i;

		for(let j=i+1; j<MAX_SIZE; j++)
			if(BAR_ARRAY[j].height < BAR_ARRAY[min_idx].height)
				min_idx = j;

		if(min_idx != i){
			await swap(min_idx, i);
			await rebardraw();
		}
	}
	return;
}


async function insertionSort(){
	
	for(let i=1; i<MAX_SIZE; i++){

		let hkey = BAR_ARRAY[i].height;
		let ykey = BAR_ARRAY[i].y;
		let j = i - 1;
		
		while(j >= 0 && BAR_ARRAY[j].height > hkey){
		
			BAR_ARRAY[j+1].height = BAR_ARRAY[j].height;
			BAR_ARRAY[j+1].y = BAR_ARRAY[j].y;
			j -= 1;
			await rebardraw();
		}
		
		BAR_ARRAY[j+1].height = hkey;
		BAR_ARRAY[j+1].y = ykey;
	}
	return;
}


async function merge(low, mid, high){

	let mx = 500;
	let i = low, j = mid + 1, k = low;
	
	while (i <= mid && j <= high && k <= high) {

		let e1 = parseInt(BAR_ARRAY[i].y % mx);
		let e2 = parseInt(BAR_ARRAY[j].y % mx);
		if(e1 > e2)
			BAR_ARRAY[k].y += (e1 * mx);
		if(e1 <= e2)
			BAR_ARRAY[k].y += (e2 * mx);
		
		e1 = parseInt(BAR_ARRAY[i].height % mx);
		e2 = parseInt(BAR_ARRAY[j].height % mx);
		if(e1 <= e2){
			BAR_ARRAY[k].height += (e1 * mx);
			i++;
			k++;
		}
		if(e1 > e2){
			BAR_ARRAY[k].height += (e2 * mx);
			j++;
			k++;	
		}
	}

	while(i <= mid){
		let el = parseInt(BAR_ARRAY[i].height % mx);
		BAR_ARRAY[k].height += (el * mx);
		el = parseInt(BAR_ARRAY[i].y % mx);
		BAR_ARRAY[k].y += (el * mx);
		i++;
		k++;
	}

	while(j <= high){
		let el = parseInt(BAR_ARRAY[j].height % mx);
		BAR_ARRAY[k].height += (el * mx);
		el = parseInt(BAR_ARRAY[j].y % mx);
		BAR_ARRAY[k].y += (el * mx);
		j++;
		k++;
	}

	for(let i=low; i<=high; i++)
	{
		BAR_ARRAY[i].height = parseInt(BAR_ARRAY[i].height / mx);
		BAR_ARRAY[i].y = parseInt(BAR_ARRAY[i].y / mx);
		await rebardraw();
	}
	//await rebardraw();
	return;
}

async function mergeSort(low, high){

	if(low < high){

		let mid = low + parseInt((high - low) / 2);
		await mergeSort(low, mid);
		await mergeSort(mid+1, high);
		await merge(low, mid, high);
	}
	return;
}


async function partition(low, high){

	let pivoth = BAR_ARRAY[low].height;
	let pivoty = BAR_ARRAY[low].y;
	let p = low;
	
	for(var i = p+1; i <= high; i++)
		if (BAR_ARRAY[i].height < pivoth) {
			
			BAR_ARRAY[p].height = BAR_ARRAY[i].height;
			BAR_ARRAY[p].y = BAR_ARRAY[i].y;
			BAR_ARRAY[i].height = BAR_ARRAY[p+1].height;
			BAR_ARRAY[i].y = BAR_ARRAY[p+1].y;
			BAR_ARRAY[p+1].height = pivoth;
			BAR_ARRAY[p+1].y = pivoty;
			p++
			await rebardraw();
		}
	return p;
}

async function quickSort(low, high){

	if(low < high){

		let pi = await partition(low, high);
		await quickSort(low, pi-1);
		await quickSort(pi+1, high);
	}
	return;
}

	
async function sortCall(){
	SEL = Number(ssm.options[ssm.selectedIndex].value);
	bargene.disabled = true;
	st.disabled = true;
	nob.disabled = true;
	switch (SEL) {
		
		case 1:
			as = 0;
			await bubbleSort();
			break;
		
		case 2:
			as = 100;
			await selectionSort();
			break;
		
		case 3:
			as = 0;
			await insertionSort();
			break;
		
		case 4:
			as = 100; 
			await mergeSort(0, MAX_SIZE-1);
			break;
		
		case 5:
			as = 100;
			await quickSort(0, MAX_SIZE-1);
			break;
	}
	bargene.disabled = false;
	nob.disabled = false;
}