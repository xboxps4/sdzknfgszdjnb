var gameState = "start";
var bg1,l1bg,title;
var startButton;
var mainPlayer;
var endless;
var enemyImg;
var enemyGroup,bulletGroup;
var bulletImg;
var weaponGroup;
var playerdead,enemydead,bulletSound;
var playerBulletImg,playerImg;
var count = 0;
var bulletClash;

function preload()
{
  bg1 = loadImage("bg.png");
  l1bg = loadImage("l1 bg .jpg");
  title = loadImage("title.png");
  enemyImg = loadImage("EWG.png");
  bulletImg = loadImage("bullet.png");
  playerdead = loadSound("mainPlayer.mp3");
  enemydead = loadSound("enemy.mp3");
  bulletSound = loadSound("gunShot.mp3");
  playerImg = loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png");
  playerBulletImg = loadImage("images.png");
  bulletClash = loadSound("bullet clash.mp3")
}
function setup()
{
  createCanvas(displayWidth-200,displayHeight-200);
  startButton = createButton("PRESS TO PLAY");
  endless = createSprite(displayWidth/2,displayHeight/2);
  endless.addImage(l1bg);
  mainPlayer = createSprite(70,500,50,50);
  mainPlayer.shapeColor = "yellow";
  enemyGroup = new Group();
  bulletGroup = new Group();
  weaponGroup = new Group();
  mainPlayer.scale = 4;
  mainPlayer.addAnimation("plar",playerImg);
}

function draw()
{
  if(gameState === "start")
  {
    start();
  }
  
  else if(gameState === "play")
  {
     play();
     if(bulletGroup.isTouching(mainPlayer) || enemyGroup.isTouching(mainPlayer))
     {
       gameState = "end";
     }
     textSize(60);
     textFont("georgia");
     fill("orangered");
     text("score : " + count , 980,100);
  }
 
  else if(gameState === "end")
  {
    end();
  }
  

}



