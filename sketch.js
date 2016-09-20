// Micah Theirot © 2016

var px = 300;
var py = 300;
var pd = 100;
var speed = 5;

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}

//function below handles traveling in 4 directions
function draw() {
  background(150);
  //player ellipse
  ellipse(px,py,pd);

  if(keyIsPressed) {
    if(key == "w"){
      py-=speed;
    }
    else if(key == "a"){
      px -= speed;
    }
    else if(key == "s"){
      py += speed;
    }
    else if(key == "d"){
      px += speed;
    }
    else if(key == "d" && key == "s"){
      px += speed;
      py += speed;
    }

  }
}
