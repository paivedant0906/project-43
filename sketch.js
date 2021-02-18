var hr,mi,se;
var angle
var angle2,angle3;
function setup() {
createCanvas(800,400);
}

function draw() {
  background(0);  

  hr=hour()
  mi=minute()
  se=second()
 
  
angle=map(se,0,60,0,360)
angle2=map(hr,0,24,0,360)
angle3=map(mi,0,60,0,360)

angleMode(DEGREES);

 push()
  stroke(255, 0 , 0);
  strokeWeight(8);
  translate(400, 200);
  rotate(angle2)
  line(0, 0, 0, -50);
  pop()
  
  push()
  stroke(0, 255 , 0);
  strokeWeight(8);
  translate(400,200);
  rotate(angle3)
  line(0, 0, 0, -75);
  pop()
  
  push()
  stroke(0, 0 , 255);
  strokeWeight(8);
  translate(400,200);
  rotate(angle)
  line(0, 0, 0, -100);
  pop()
  
  noFill()
  strokeWeight(8)
  stroke(255, 0, 0)
  arc(400,200, 250, 275, -90, angle2 - 90)
  stroke(0, 255, 0)
  arc(400, 200, 270, 300, -90, angle3 - 90)
  stroke( 0, 0, 255)
  arc(400, 200, 300, 325, -90, angle - 90)
 

  drawSprites();
}