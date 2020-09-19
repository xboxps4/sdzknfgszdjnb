function start()
{
  background(bg1);
  image(title,1000,15);
  textSize(30);
  fill("red");
  text("Don't die",850,300);
  fill("white")
  text("if you die, restart the game by closing the app and opening again",540,400);
  startButton.position(1100,500);
  startButton.mousePressed(switching);
  startButton.show();
}

function switching()
{
  gameState = "play"
}

function play()
{
  background("white");
  if(keyDown(UP_ARROW))
  {
    mainPlayer.y = mainPlayer.y -30;
  }

  if(keyDown(DOWN_ARROW))
  {
     mainPlayer.y = mainPlayer.y + 30;
  }
  

  startButton.hide();
  endless.velocityX = -5;
  enemies();
  if(endless.x < 0)
  {
    endless.x = displayWidth/2;
  }

  if(keyDown("space"))
  {
    attack();
  }

  if(weaponGroup.isTouching(enemyGroup))
  {
    enemyGroup.destroyEach();
    enemydead.play();
    count = count + 2;
  }

  if(weaponGroup.isTouching(bulletGroup))
  {
    bulletGroup.destroyEach();
    weaponGroup.destroyEach();
    bulletClash.play();
    count = count + 1
  }

  drawSprites();
}

function end()
{
  bulletGroup.setVelocityXEach(0);
  enemyGroup.setVelocityXEach(0);
  endless.velocityX = 0;
  if(keyDown("space"))
  {
    gameState = "start";
  }

  if(gameState === "start")
  {
    gameState === "play";
  }
}

function attack()
{
  var weapon = createSprite(20,40,20,20);
  weapon.x = mainPlayer.x + 10;
  weapon.y = mainPlayer.y;
  weapon.velocityX = 5;
  weapon.addImage(playerBulletImg);
  weaponGroup.add(weapon);
  weapon.scale = 0.2
}