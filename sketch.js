var fr, mr;

function setup() {

  createCanvas(800, 400);

  fr = createSprite(200, 100, 50, 50);
  fr.shapeColor = "green";

  mr = createSprite(600, 100, 50, 50);
  mr.shapeColor = "green";

  fr.velocityX = 2;
  mr.velocityX = -2;

}

function draw() {
  background(255,255,255);  

  //mr.x = World.mouseX;
  //mr.y = World.mouseY;
  
if (fr.x-mr.x <= fr.width/2 + mr.width/2 && 
    mr.x-fr.x <= fr.width/2 + mr.width/2 && 
    fr.y-mr.y <= fr.height/2 + mr.height/2 &&
    mr.y-fr.y <= fr.height/2 + mr.height/2){
         //fr.shapeColor = "red";
         //mr.shapeColor = "red";
         fr.velocityX = fr.velocityX * -1;
         mr.velocityX = mr.velocityX * -1;
}
else {
  //fr.shapeColor = "green";
  //mr.shapeColor = "green";
  fr.velocityX = fr.velocityX * 1;
  mr.velocityX = mr.velocityX * 1;
}


  drawSprites();
}