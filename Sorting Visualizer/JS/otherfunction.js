var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

function bardraw(){
	for(var i=0; i < MAX_SIZE; i++){

		c.beginPath();
		c.rect(barArray[i].x, barArray[i].y, barArray[i].width, barArray[i].height);//c.rect(x, y, width, height)
		c.strokeStyle = "blue";
		c.stroke();		
	}
}

function rebardraw(){
	delay(function(){
	    c.clearRect(0, 0, canvas.width, canvas.height);
	    bardraw();
	}, 1000 );
}