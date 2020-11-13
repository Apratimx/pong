let paddler;
let paddlel;
let ball;
let prv = false;
let plv = false;
let right = false;
let left = true;
let sa = 0;
let sb = 0;
let scoreA;
let scoreB;
let button;

function setup() {
    let cnv = createCanvas(800, 500);
    cnv.parent('#container');
    paddler = new Paddler;
    paddlel = new Paddlel;
    ball = new Ball;
    button = createButton('Reset');
    button.position(290, 105);
    button.mousePressed(reset);
}

function draw() {
    background(51);
    paddler.show();
    paddler.move();
    paddlel.show();
    paddlel.move();
    ball.show();
    ball.move();
    // scoreA();
    textSize(20);
    textFont('Helvetica');
    text(scoreA, 270, 10, 120, 20);

    textSize(20);
    textFont('Helvetica');
    text(scoreB, 430, 10, 120, 20);

    textSize(20);
    textFont('Helvetica');
    text("First to 10 wins", 335, 470, 400, 20);

    line(width/2, 0, width/2, height);
    
    fill(51,0);
    circle(width/2, height/2, 150)
   
    
       
    if (ball.y === 0) {
        ball.switchy(-1);
    }else if(ball.y === 500){
        ball.switchy(-1);
    }
    
    if (ball.y > paddler.y && ball.y < paddler.y + 80 && ball.x > paddler.x && ball.x < paddler.x + 20 ){
        ball.switchx(-1);
        right = true;
        left = false;
        
    } else if (ball.y > paddlel.y && ball.y < paddlel.y + 80 && ball.x > paddlel.x && ball.x < paddlel.x + 20) {
        ball.switchx(-1);
        left = true;
        right = false;
    }
    
    if (ball.x === 0 || ball.x === 800) {
        ball.x = width/2;
        ball.y = height/2;

        if(right){
            if (sa != 9) {
                sa += 1;
            }
            else {
                sa = 10
                ball.x = 50000;
            }
        }
        
        if(left){
            if(sb != 9){
            sb += 1;
            }
            else{
                sb = 10
                ball.x = 50000;
            }
        }

    } 
    scoreA = `Player1 : ${sa}`;
    scoreB = `${sb}: Player2`;

    

}


function keyTyped() {
    if (key === "W" || key === "w") {
        paddler.setDir(-10);
        prv = true;

    } else if (key = "S" || key === "s") {
        paddler.setDir(10);
        prv = true;
    }

}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        paddlel.setDir(-10);
        plv = true;
    } else if (keyCode === DOWN_ARROW) {
        paddlel.setDir(10);
        plv = true;
    }
}

  


function keyReleased() {
    if (prv === true){
        paddler.setDir(0);
        prv = false;
    }
    if (plv === true) {
        paddlel.setDir(0);
        plv = false;
    }
   
    return false;
}

function reset(){
    sa = 0;
    sb = 0;
    ball.x = width/2;
    ball.y = height/2;
}