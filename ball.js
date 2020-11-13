function Ball() {
    this.x = width/2;
    this.y = height/2;
    this.r = 10;
    this.cx = -5;
    this.cy = -5;
    


    this.show = function () {
        fill(255);

        ellipse(this.x, this.y, this.r * 2, this.r * 2); //x,y,w,h
    }

    this.move = function() {
        this.x += this.cx;
        this.y += this.cy;
    }

    this.switchy = function(edge){
        this.cy *= edge;
    }

    this.switchx = function(edge){
        this.cx *= edge;
    }
}
