var play = 1;

var end = 0;

var gameState = play;

var bg,bgImage;

var climberImg,doorImg;

var doorGroup,climberGroup,ibGroup;

var ghost,ghostImg;


function preload() {
  
  bgImage = loadImage("tower.png");
  
  climberImg = loadImage("climber.png");
  
  doorImg = loadImage("door.png");
  
  ghostImg = loadImage("ghost-standing.png");
  
  
  
  
  
  
  
  
}



function setup() {
  
  createCanvas(500,600);
  
  bg = createSprite(250,250,500,600);
  
  bg.addImage("backGround",bgImage);
  
  bg.scale = 0.9;
  
  doorGroup = new Group();
  
  climberGroup = new Group();
  
  ibGroup = new Group();
  
  ghost = createSprite(250,300,20,20);
  
  ghost.addImage("ghost",ghostImg);
  
  ghost.scale = 0.35;
  
  
  
  
  
  
  
}

function draw() {
  
 background("white");
  
  
  if(gameState === play) {

  
    
  bg.velocityY = 1;
  
  if(bg.y > 500) {
    
    bg.y = 300;
  }
  
    
   if(keyDown("space")) {

   ghost.velocityY = -8;
   
   }
    
    
    if(keyDown("left")) {
      
      ghost.velocityX = -3;
      
    }
    
    if(keyDown("right")) {
      
      ghost.velocityX = 3;
      
    }
    
    
    
    ghost.velocityY = ghost.velocityY + 0.5;
    
    if(ghost.isTouching(climberGroup)) {

     ghost.velocityY = 0;
      
     ghost.velocityX = 0;
    
    }
    
    if(ghost.isTouching(ibGroup) || ghost.y > 600) {
      
      gameState = end;
      
      
    }
    
    
    
    
    
  spawnDoor();
    
  drawSprites();
    
    
  } else if(gameState === end) {
    
    
    textSize(32);
    
    stroke("red");
    
    strokeWeight(4);
    
    fill("yellow");
    
    text("GAME OVER",250,300);
    
    
  }
  
  
  
  
  
  
}



function spawnDoor() {
  
  if(frameCount % 200 === 0) {

  
    var door = createSprite(200,0,20,20);
    
    door.velocityY = 3;
    
    door.addImage("door",doorImg);
    
    door.x = Math.round(random(50,450));
    
    doorGroup.add(door);
    
    door.depth = ghost.depth;
    
    ghost.depth += 1;
    
    door.lifetime = 300;
    
    
    
    var climber = createSprite(200,70,20,20);
    
    climber.velocityY = 3;
    
    climber.addImage("climber",climberImg);
    
    climber.x = door.x;
    
    climberGroup.add(climber);
    
    climber.lifetime = 300;
    
    
    
  var invisibleBlock = createSprite(200,90,40,10);
    
    invisibleBlock.velocityY = 3;
    
    invisibleBlock.x = door.x;
    
    ibGroup.add(invisibleBlock);
    
    invisibleBlock.lifetime = 300;
  
    
    
    
  
  }
  
  
  
  
}


