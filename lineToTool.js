function LineToTool(){
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    // we use -1 values as default to understand when we start drawing
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){
        // loadPixels and updatePixels needed to show preview of line will be drawn. 
        // before drawing preview we save current state of canvas (updatePixels)
        // and next time restore the state (loadPixels) it was before drawing line preview
        // when mouse released we dont restore state and the line saves on canvas forever.
		if(mouseIsPressed){
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				loadPixels();
			}

			else{
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}
        // stop drawing, return to default values
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};
}
