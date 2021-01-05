// ball1 moving and ball2 standing
var ball1;
var ball2;


function setup() {
  createCanvas(400,400);
  ball1 = createSprite(100,200,50,50);
  ball1.debug=true;
 
  ball2 = createSprite(300,200,50,50);
  ball2.debug=true;
}

function draw() {
  background(180);  
  ball1.x=mouseX;
  ball1.y=mouseY;
  console.log(ball1.x-ball2.x)
  if(ball1.x-ball2.x<ball2.width/2+ball1.width/2
    && ball2.x-ball1.x<ball2.width/2+ball1.width/2
    &&ball1.y-ball2.y<ball2.height/2+ball1.height/2
    && ball2.y-ball1.y<ball2.height/2+ball1.height/2){
ball1.shapeColor="blue";
ball2.shapeColor="blue";
  }
  else{ball1.shapeColor="green";
  ball2.shapeColor="green";}
  drawSprites();
}