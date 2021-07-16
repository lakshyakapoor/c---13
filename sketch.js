var path , runner1,runner2,leftboundary,rightboundary,coin,bomb,energydrink
function preload(){

  //pre-load images
  runnerimg=loadImage("runner-1.png","runner-2.png")
  pathimg=loadImage("path.png")
  coinimg=loadImage("coin.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=5;
  path.y=path.height/30;
  runner1=createSprite(180,340,50,170);
  runner1.addAnimation("running",runner1);
  coin=createSprite(200,200,80,90)
  coin.addImage(coinimg);
  coin.scale=0.3;

  coin=createSprite(100,200,80,90)
  coin.addImage(coinimg);
  coin.scale=0.3;

  coin=createSprite(300,200,80,90)
  coin.addImage(coinimg);
  coin.scale=0.3;

  leftboundary=createSprite(0,300,100,600);
  rightboundary=createSprite(390,300,80,600);
  leftboundary.visible=false;
  rightboundary.visible=false;
}

function draw() {
  background(0);
  textsize(10);
  Text("coin score",1,200);
  textSize(10);
  Text('0',20,230);
  path.velocityY=5;
  runner1.x=world.mouseX;
  if(path.y>400){
    path.y=height/2;
    if(runner1.istouching(coin)){
      coinscore=coinscore+1;
    }
  }
runner1.collide(leftboundary);
runner1.collide(rightboundary);
edges=createEdgeSprites();
runner1.collide(edges[3]);
drawsprites();
}
