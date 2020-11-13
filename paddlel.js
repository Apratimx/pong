function Paddlel() {
    this.x = 760;
    this.y = height / 2;
    this.ydir = 0;

    this.show = function () {
        fill(255);
        
        rect(this.x, this.y, 20, 80); //x,y,w,h
    }
    this.setDir = function (dir) {
        this.ydir = dir;
    }
    this.move = function () {
        this.y += this.ydir;
    }
}