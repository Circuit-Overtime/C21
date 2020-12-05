var frect,mrect, rect1,rect2; 
function setup() {
  createCanvas(400,400);
  frect = createSprite(300, 300, 50, 50);
  mrect = createSprite(300,200,50,100);
  rect1 = createSprite(100,100,50,50);
  rect2 = createSprite(200,100,50,50);
  ob1  = createSprite(100,200,50,50);
  ob1.shapeColor = "orange";
  ob2 = createSprite(200,200,50,50);
  ob2.shapeColor = "pink";
  rect1.velocityX = 3;
  rect2.velocityX = -3;
  frect.shapeColor = "green";
mrect.shapeColor = "green";
mrect.velocityY = 3;
frect.velocityY = -3;
  ob1.velocityX = 2;
  ob2.velocityX = -2;
}

function draw() {
  background(255,255,255); 
//mrect.x = mouseX;
//mrect.y = mouseY;
 bounce(mrect,frect);
 bounce(ob1,ob2);

drawSprites();
}


