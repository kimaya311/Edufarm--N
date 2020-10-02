class Game{
    constructor(){};
    Start(){
        if(gameState===0){
        
        form = new Form();
        form.display();
        
        enemy1=createSprite(80,200,40,40);
        enemy1.addImage("crow1",crow);
        enemy1.scale=0.2;
        
        
        }
}


level1(){

    form.hide();
    console.log(gender)
    background(114, 71, 28);

   if(gender=="girl"){
     player.addImage("girl'",girl);
     player.scale= 0.12;
 }
 else if(gender=="boy"){
     player.addImage("boy",boy);
     player.scale= 0.08;
 
 }
    correctf=createSprite(1300,displayHeight/2-198,300,30);
    correctf.addImage("cf",fertile);
    correctf.scale=0.049;
    var line1=createSprite(0,displayHeight/2-100,300,5);
    var line2=createSprite(0,displayHeight/2+30,300,5);
    fill("red");
    var green1=createSprite(0,displayHeight-70,30,30);
    green1.addImage("tree",Green);
    green1.scale=0.7;
    var land=createSprite(680,displayHeight/2-253,200,100);
    land.addImage("infertile",infertile);
    var sun=createSprite(displayWidth-80,50,100,100);
    sun.addImage("sun",sunimage);
    sun.scale=0.8;
    var damp3=createSprite(400,displayHeight-60,300,30);
    damp3.addImage("3d",damp);
    damp3.scale=0.3;
    var drought3=createSprite(680,displayHeight/2-250,300,30);
    drought3.addImage("3dr",damp);
    drought3.scale=0.3;
    var right3=createSprite(1080,displayHeight/2-340,300,30);
    right3.addImage("3r",right);
    right3.scale=0.3;
    var line3=createSprite(150,displayHeight/2+102,5,150);
    var line4=createSprite(247,displayHeight/2+180,200,5);
    var line5=createSprite(344,displayHeight/2+227,5,100);
    var line6=createSprite(430,displayHeight/2+274,200,5);
    var line7=createSprite(249,displayHeight/2-45,5,250);
    var line8=createSprite(336,displayHeight/2+78,180,5);
    var line9=createSprite(424,displayHeight/2+126,5,100);
    var line10=createSprite(471,displayHeight/2+178,100,5);
    var line11=createSprite(300,displayHeight/2-167,100,5);
    var line12=createSprite(350,displayHeight/2-140,5,200);
    var line13=createSprite(150,displayHeight/2-207,5,220);
    var line14=createSprite(297,displayHeight/2-314,300,5);
    var line15=createSprite(444,displayHeight/2-365,5,100);
    var line16=createSprite(741,displayHeight/2-418,600,5);
    var line17=createSprite(680,displayHeight/2-336,306,5);
    var line18=createSprite(627,displayHeight/2-165,200,5);
    var line19=createSprite(530,displayHeight/2-250,5,168);
    var line20=createSprite(830,displayHeight/2-250,5,168);
    var line21=createSprite(924,displayHeight/2-165,200,5);
    var line22=createSprite(523,displayHeight/2+81,5,200);
    var line23=createSprite(527,displayHeight/2+322,5,100);
    var line24=createSprite(571.5,displayHeight/2-20,102.5,5);
    var line25=createSprite(717,displayHeight/2-70,5,100);
    var line26=createSprite(819,displayHeight/2-120,209,5);
    var line27=createSprite(1112,displayHeight/2-195,5,200);
    var line28=createSprite(620,displayHeight/2+270,5,350);
    var line29=createSprite(770,displayHeight/2+98,300,5);
    var line30=createSprite(920,displayHeight/2-11,5,224);


    var rand=Math.round(random(1,3));
    if(rand==1){
        enemy1.position.x=300;
        enemy1.position.y=200;
    }
    else if(rand==2){
        enemy1.position.x=600;
        enemy1.position.y=500;
    }
    else if(rand==3){
        enemy1.position.x=900;
        enemy1.position.y=180;
    }

    player.collide(line1); player.collide(line7);    player.collide(line13);
    player.collide(line2); player.collide(line8);    player.collide(line14);
    player.collide(line3); player.collide(line9);    player.collide(line15);
    player.collide(line4); player.collide(line10);   player.collide(line16);
    player.collide(line5); player.collide(line11);   player.collide(line17);
    player.collide(line6); player.collide(line12);   player.collide(line18);

    player.collide(line19); player.collide(line25);
    player.collide(line20); player.collide(line26);
    player.collide(line21); player.collide(line27);
    player.collide(line22); player.collide(line28);
    player.collide(line23); player.collide(line29);
    player.collide(line24); player.collide(line30);
    if(lives>0){this.movePlayer();}
    drawSprites();
  
}

    movePlayer(){
        if(keyDown(UP_ARROW)){
            player.velocityY =-5;
        }
        if(keyDown(DOWN_ARROW)){
            player.velocityY=5;
        }
        if(keyDown(RIGHT_ARROW)){
            player.velocityX= 5;
        }
        if(keyDown(LEFT_ARROW)){
            player.velocityX=-5;
        }
    }
};