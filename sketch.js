var bg,girl,berry,apple,gh1,gh2,gh3,key,bush1,bush2;
var girlImg,berryImg,appleImg,gh1Img,gh2Img,gh3Img,keyImg;
var bush1Img,bush2Img,bgImg,bushes,foods

function preload(){
 bgImg = loadImage("assets/garden.png");
 girlImg = loadImage("assets/a girl.png");
 berryImg = loadImage("assets/berry.png");
 appleImg = loadImage("assets/food1.png");
 gh1Img = loadImage("assets/ghost1.jpeg");
 gh2Img = loadImage("assets/ghost2.png");
 gh3Img = loadImage("assets/ghost3.png");
 keyImg = loadImage("assets/Dream key.jpeg");
 bush1Img = loadImage("assets/bush 1.png");
 bush2Img = loadImage("assets/bush 2.png");
}



function setup() {
  createCanvas(windowWidth,windowHeight);
  
  bg = createSprite(width/2,height/2,10,10);
  bg.addImage(bgImg);
  bg.scale = 2.9;
  bg.velocityY = 3;

  girl = createSprite(width/2,height-30,10,10);
  girl.addImage(girlImg);
  girl.scale = 0.45;

 bushes = createGroup();
 foods = createGroup();


  
}

function draw() {
  background("black");
  
  if (bg.y>900) {
    bg.y = height/2 ;
  }

  spawnBushes();
  spawnFood();

  drawSprites();
}



function spawnBushes() {
  if (frameCount % 80 === 0) {
   bush1 = createSprite(random(150,width-150),0);

   var ran = Math.round(random(1,3));
    if (ran==1) {
      bush1.addImage(bush1Img);
      bush1.scale = 0.45;
    } else {
      bush1.addImage(bush2Img);
      bush1.scale = 0.45; 
    }
    bush1.velocityY = 3;
    bush1.lifetime = 1000;

    bushes.add(bush1);

  }
}

function spawnFood() {
  if (frameCount % 80 === 0) {
   apple = createSprite(random(150,width-100),0);

   var ran = Math.round(random(1,3));
    if (ran==1) {
      apple.addImage(appleImg);
      apple.scale = 0.25;
    } else {
      apple.addImage(berryImg);
      apple.scale = 0.25; 
    }
    apple.velocityY = 3;
    apple.lifetime = 1000;

    foods.add(apple);

  }
}