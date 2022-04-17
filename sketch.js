var path 
var boy 
var leftBoundary
var rightBoundary
var pathImg
var boyImg 
var i;


function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);

  path = createSprite (200,200) ;
  path.addImage (pathImg) ;
  path.velocityY = 4;
  path.scale=1.2;
    
  
    
  
 
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;


  rightBoundary=createSprite(400,400,100,800) ;
  rightBoundary.visible = false ;
  boy = createSprite(380,200) ;
  boy.scale = 0.5 ;
}

function draw() {
  background(0); 
  drawSprites();
   
  boy.x = World.mouseX ;

  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary) ;
  boy.collide(rightBoundary) ;
  drawSprites();
  if (path.y >=600) {
    path = createSprite (200,200) ;
    path.addImage (pathImg) ;
    path.velocityY = 4;
    path.scale=1.2;

  }
  
 



 

 }




