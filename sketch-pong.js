// Micah Theirot © 2016

var lives = 3;

//player variables
var y;
var h;
playerSpeed = 10;
var score;
var timeline = 0;
//ball variables
var bx;
var by;
var sMax = 10;
var sMin =7;
var bxSpeed;
var bySpeed;



function setup() {
  createCanvas(1000,600);
  y = height/2;
  h = 60;
  bx = width/2;
  by = height/2;
  bxSpeed = sMin;
  bySpeed = random(-sMax,sMax);
  score = 0;
}
function draw(){
//pauses game before start
  if (timeline==0) {
    background(0);
    fill(255);
    textSize(100);
    text("Start Game",width/2-270,height/2);
    textSize(40);
    text("press enter",width/2-110,height/2+60);
      if (keyIsPressed && keyCode == 13) {
        timeline = 1;
      }
    }

  else {
    background(0);
    stroke(255);
    line(50,50,width-50,50);
    line(width-50,50,width-50,height-50);
    line(50,height-50,width-50,height-50);
    noStroke();
    fill(255);
  //player
    rect(42, y, 8, h);
  //player control
    if(keyIsPressed) {
      if (key == "w"){
        y-=playerSpeed;
      }
      if (key == "s"){
        y+=playerSpeed;
      }
      if (y<50){
        y=50;
      }
      if (y>height-(h+50)){
        y=height-(h+50);
      }
    }
  //ball
    rect(bx,by,8,8);
    bx+=bxSpeed;
    by-=bySpeed;
  //bounding box
    if(bx>width-58){
      bxSpeed = - bxSpeed;
    }
    if(by>height-58){
      bySpeed = - bySpeed;
    }
    if(by<58){
      bySpeed = - bySpeed;
    }
  //hits player paddle
    if(bx<58 && bx>48 && by>=y && by<=y+h){
      score+=10;
      bxSpeed = - bxSpeed;
      bxSpeed+=.5;
  //makes sure ball will have significant vertical velocity
      if (by<5 && by>=0){
        bySpeed++;
      }
      if (by>-5 && by<=0){
        bySpeed--;
      }
    }
  //reset lost ball
    if(bx<= -10){
  //if player has lives left
      if (lives>0){
  //deduct life and put ball back in center
      lives--;
      bx = width/2;
      by = height/2;
  //re-randomize starting vector
      bySpeed = random(-sMax,sMax);
      bxSpeed = - bxSpeed
      }
  //endgame
      else{
        textSize(100);
        text("Game Over",width/2-270,height/2);
        noLoop();
      }
    }
  //score
    stroke(255);
    textSize(32);
    text("lives: " + lives,width/2-50,42);
    text("score: " + score,50,42)
  }
}
