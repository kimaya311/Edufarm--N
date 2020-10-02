
var boy,girl,pl_choice;
var player;
var game;
var gender;
var form;
var soil,fertile,correctf;
var Cotton;
var infertile,sunimage;
var gameState=0;
var enemy1,crow;
var Green;

var lives=3;
var damp3,drought3,right3;
function preload(){
  boy = loadImage("FarmboyN.png");
  girl = loadImage("FarmgirlN.png");

 Green=loadImage("tree.png");

 infertile=loadImage("drought.jpeg");
 fertile=loadImage("fertilesoil2.jpg");
 sunimage=loadImage("Sun.png");
 damp=loadImage("wrongp.png");
 right=loadImage("rightp.png");
 crow=loadImage("crow2 copy.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 // createSprite(400, 200, 50, 50);

  game = new Game();
  game.Start(); 
  player = createSprite(30,displayHeight/2-30,30,30);

}
function draw() {
  background(255, 255, 84); 
  if(gameState==1){
    game.level1();
      if(player.collide(enemy1)){
        player.velocityX=0;
        player.velocityY=0;
        player.x=30;
        player.y=displayHeight/2-30; 
         lives-=1;
    }

  }
}