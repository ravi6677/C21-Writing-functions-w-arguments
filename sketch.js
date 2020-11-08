var movingRect, gameObject1;

function setup(){

  createCanvas(1200,800);

  movingRect = createSprite(600,400,100,25);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(800,200,100,50);
  gameObject1.shapeColor = "green";
}

function draw(){

background(0,0,0);

movingRect.x = World.mouseX;
movingRect.y = World.mouseY;

if(isTouching(movingRect,gameObject1)){
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
}

else{
  movingRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
}

drawSprites();

}

function isTouching(object1,object2){

if(object1.x - object2.x < object1.width/2 + object2.width/2 
  && object2.x - object1.x < object1.width/2 + object2.width/2
  && object1.y - object2.y < object1.width/2 + object2.width/2
  && object2.y - object1.y < object1.width/2 + object2.width/2
  ){

return true;
  }

else{
  return false;
  }

}