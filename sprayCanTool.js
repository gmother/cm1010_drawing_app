function SprayCanTool() {
	this.icon = "assets/sprayCan.jpg";
	this.name = "sprayCanTool";

	this.points = 13;
	this.spread = 10;

	this.draw = function() {
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed){
            for(var i = 0; i < this.points; i++) {
                var p = createVector(sqrt(random(0, this.spread * this.spread)), 0);
                p.rotate(random(0, TWO_PI)).add(mouseX, mouseY);
                point(p.x, p.y);
            }
        }
    };
}