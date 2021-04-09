var PLAY=1;
var END=0;
var gameState=PLAY;
var sword, swordImage;
var fruit1Image,fruit2Image,fruit3Image,fruit4Image;
var fruit1,fruit2,fruit3,fruit4;
var monster, monsterImage;
var gameover, gameoverImage;
var fruitGroup, enemyGroup;

function preload(){
  swordImage=loadImage("sword.png");
  fruit1Image=loadImage("fruit1.png");
  fruit2Image=loadImage("fruit2.png");
  fruit3Image=loadImage("fruit3.png");
  fruit4Image=loadImage("fruit4.png");
  monsterImage=loadAnimation("alien1.png","alien2.png");
  gameoverImage=loadImage("gameover.png");
  
}

function setup(){
  sword=createSprite(40,200,20,20);
  sword.addImage(swordImage);
  sword.scale=0.7;
  score=0;
  
 fruitGroup=createGroup();
 enemyGroup=createGroup();
 }
function draw(){
  background(180);
  
  if(gameState===PLAY){
    fruits();
  enemy();
    sword.x=World.mouseX;
    sword.y=World.mouseY;
    }
    if(enemyGroup.isTouching(sword)){
       gameState = END;
    
  }else if(gameState===END){
     gameover=createSprite(200,100);
    gameover.addImage(gameoverImage);
    //gameover.scale=0.5;
    //sword.velocityX=200;
    //sword.velocityY=200;
    
    
  }

  drawSprites();
  text("Score: "+ score, 340,20);
    if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
      score=score+2;
    }
  }

function fruits(){
  if(World.frameCount%80===0){
  fruit=createSprite(400,200,20,20);
  fruit.scale=0.2;
  //fruit.debug=true;
    
  r=Math.round(random(1,4));
  if(r==1){
  //fruit.addImage(fruit1);
  fruit.addImage(fruit1Image);
    
  }else if(r==2){
  //fruit.addImage(fruit2);
  fruit.addImage(fruit2Image);
    
  }else if(r==3){
  //fruit.addImage(fruit3);
  fruit.addImage(fruit3Image);
    
  }if(r==4){
  //fruit.addImage(fruit4);
  fruit.addImage(fruit4Image);
  }
    
  fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruitGroup.add(fruit);
  }
}

function enemy(){
 if(World.frameCount%200===0){
 monster=createSprite(400,200,20,20);
  monster.addAnimation("monster",monsterImage);
 monster.y=Math.round(random(100,300));
 monster.velocityX=-8;
  monster.setLifetime=50;
  enemyGroup.add(monster);
 }
 
}


