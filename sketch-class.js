// Micah Theirot © 2016

var ex = 100;
var ey = 100;
var ed = 100;
var speed = 5;

var rx = 200;
var ry = 50;
var rh = 100;
var rw = 100;

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(150);
ellipse(ex,ey,ed);

if(keyIsPressed) {
      if(key == "w"){
        println("forward");
       ey-=speed;
      }
      if(key == "a"){
        println("left");
     }
     if(key == "d"){
       println("right");
       ex-=speed;
      }
      if(key == "s"){
        println("back");
       ey+=speed;
      }
     if(key == "d"){
       println("right");
       ex+=speed;
     }}}
