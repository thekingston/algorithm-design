function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = 3
  fixedRect.velocityX = -3
}

function draw() {
  background(0,0,0);  
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    &&   fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2
    &&   movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2){

   movingRect.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    
  }*/
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2
    && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){

   movingRect.velocityX = movingRect.velocityX * (-1);
   fixedRect.velocityX = fixedRect.velocityX * (-1);
  }





  drawSprites();
}

