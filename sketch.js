
  var monkey , monkey_running;
  var Banana ,BananaImage;
  var obstacle, obstacleImage;
  var FoodGroup, obstacleGroup,Food;
 
  var ground;

function preload(){
  
  monkey_running =                 loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  BananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(400,400); 

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
   FoodGroup = new Group();
  obstacleGroup = new Group();
 score = 0;
  
   monkey.setCollider("circle",0,0,250);
  // monkey.debug = true;
  
 
  
}

function draw() {

  background("white");
  
  console.log(monkey.y);
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
 if(keyDown("space") && monkey.y >=314.3) {
    monkey.velocityY = -14;
}    
    monkey.velocityY = monkey.velocityY + 0.8;

  monkey.collide(ground);   
  
  spawnFood();
  spawnObstacle();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
     
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function spawnFood(){
  if(frameCount%80 === 0){
   Food= createSprite(320,200,40,10);
   Food.y = Math.round(random(120,200));
   Food.addImage( BananaImage );
   Food.scale = 0.05;
   Food.velocityX = -6;
   FoodGroup.add(Food);
  }
}
  
function spawnObstacle(){
  if(frameCount%300 === 0){
  obstacle = createSprite(400,315,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -8;
  obstacleGroup.add(obstacle);

  }
}  
  
  
  





