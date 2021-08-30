var player,playerImg;
var key1, key1Img, key2, key2Img, key3, key3Img, diamond, diamondImg;
var guard1,guard1Img,guard2,guard2Img;
var box,boxImg;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var block13, block14,block15, block16, block17, block18, block19, block21, block22, block23,block24; 
var block25, block26,block27, block28, block29, block30, block31, block32, block33, block34, block35, block36; 
var block37, block38,block39, block40, block41, block42;
var score=0;
var count=0;
var allKey=key1+key2+key3;

function preload(){
    playerImg=loadImage("images/traveller.png");
    diamondImg=loadImage("images/diamond.png");
    boxImg=loadImage("images/box.png");
    guard1Img=loadImage("images/guard.png");
    guard2Img=loadImage("images/guard.png");
    key1Img=loadImage("images/key.png");
    key2Img=loadImage("images/key.png");
    key3Img=loadImage("images/key.png");
}

function setup(){
    player=createSprite(820,30,25,55);
    player.addImage(playerImg);
    player.scale=0.13;

    box=createSprite(50,30,25,55);
    box.addImage(boxImg);
    box.scale=0.13;

    diamond=createSprite(50,30,20,30);
    diamond.addImage(diamondImg);
    diamond.scale=0.05;
    diamond.visible=false;

    key1=createSprite(130,550,20,30);
    key1.addImage(key1Img);
    key1.scale=0.05;
    key1.visible=true;

    key2=createSprite(790,370,20,30);
    key2.addImage(key2Img);
    key2.scale=0.05;
    key2.visible=true;

    key3=createSprite(20,300,20,30);
    key3.addImage(key3Img);
    key3.scale=0.05;
    key3.visible=true;

    guard1=createSprite(200,400,20,50);
    guard1.addImage(guard1Img);
    guard1.scale=0.15;

    guard2=createSprite(600,400,20,50);
    guard2.addImage(guard2Img);
    guard2.scale=0.15;

    block1 = createSprite(1,300,6,840);
    block1.shapeColor="red";
    
    block2 = createSprite(838,300,6,840);
    block2.shapeColor="red";
    
    block3 = createSprite(420,2,840,6);
    block3.shapeColor="red";
    
    block4 = createSprite(420,598,840,6);
    block4.shapeColor="red";
    
    block5 = createSprite(630,13,6,100);
    block5.shapeColor="green";
    
    block6 = createSprite(430,13,6,100);
    block6.shapeColor="green";
    
    block7 = createSprite(230,13,6,100);
    block7.shapeColor="green";
    
    block8 = createSprite(590,66,90,6);
    block8.shapeColor="green";
    
    block9 = createSprite(550,96,6,70);
    block9.shapeColor="green";
    
    block10 = createSprite(660,130,210,6);
    block10.shapeColor="green";
    
    block11 = createSprite(700,180,6,110);
    block11.shapeColor="green";
    
    block12 = createSprite(641,236,113,6);
    block12.shapeColor="green";
    
    block13 = createSprite(590,255,6,50);
    block13.shapeColor="green";
    
    block14 = createSprite(564,275,50,6);
    block14.shapeColor="green";
    
    block15 = createSprite(540,343,6,125);
    block15.shapeColor="green";
    
    block16 = createSprite(170,60,130,6);
    block16.shapeColor="green";
    
    block17 = createSprite(10,390,100,6);
    block17.shapeColor="green";
    
    block18 = createSprite(100,480,6,30);
    block18.shapeColor="green";
    
    block19 = createSprite(100,490,30,6);
    block19.shapeColor="green";
    
    
    block21 = createSprite(185,335,50,6);
    block21.shapeColor="green";
    
    block22 = createSprite(20,200,50,6);
    block22.shapeColor="green";
    
    block23 = createSprite(50,210,6,70);
    block23.shapeColor="green";

    block24 = createSprite(60,230,70,6);
    block24.shapeColor="green";

    block25 = createSprite(835,240,90,6);
    block25.shapeColor="green";

    block26 = createSprite(788,283,6,90);
    block26.shapeColor="green";

    block27 = createSprite(738,325,96,6);
    block27.shapeColor="green";

    block28 = createSprite(350,150,200,6);
    block28.shapeColor="green";

    block29 = createSprite(450,185,6,70);
    block29.shapeColor="green";

    block30 = createSprite(390,220,120,6);
    block30.shapeColor="green";

    block31 = createSprite(390,100,180,6);
    block31.shapeColor="green";

    block32 = createSprite(480,180,6,160);
    block32.shapeColor="green";

    block33 = createSprite(505,255,50,6);
    block33.shapeColor="green";

    block34 = createSprite(200,580,6,90);
    block34.shapeColor="green";

    block35 = createSprite(325,535,250,6);
    block35.shapeColor="green";

    block36 = createSprite(445,460,6,150);
    block36.shapeColor="green";

    block37 = createSprite(375,385,150,6);
    block37.shapeColor="green";

    block38 = createSprite(305,425,6,80);
    block38.shapeColor="green";

    block39 = createSprite(820,425,330,6);
    block39.shapeColor="green";

    block40 = createSprite(655,485,6,120);
    block40.shapeColor="green";

    block41 = createSprite(600,540,120,6);
    block41.shapeColor="green";

    block42 = createSprite(540,555,6,30);
    block42.shapeColor="green";

    guard1.velocityX=-3,9;
    guard1.velocityY=0,5; 
    guard2.velocityX=0,-2; 
    guard2.velocityY=3,-9;
    
    
}

function draw(){
    createCanvas(840,600);
    background("lightGreen");
    edges=createEdgeSprites();

    textSize(20);
    text("Keys Collected:"+score, 250,30);

    textSize(20);
    text("Time:"+count, 480,30);
    count=World.seconds;

    if(keyIsDown(UP_ARROW)){
        player.velocityX=0;
        player.y=player.y-5;
    }else if(keyIsDown(DOWN_ARROW)){
        player.velocityX=0;
        player.y=player.y+5;
    }else if(keyIsDown(LEFT_ARROW)){
        player.x=player.x-5;
        player.velocityY=0;
    }else if(keyIsDown(RIGHT_ARROW)){
        player.x=player.x+5;
        player.velocityY=0;
    }

    if(player.isTouching(key1)){
        key1Img=loadImage("");
    }

    
    guard1.bounceOff(edges);
    guard2.bounceOff(edges);
    
    player.bounceOff(block1);
    player.bounceOff(block2);
    player.bounceOff(block3);
    player.bounceOff(block4);
    
    if(count>=200){
        textSize(90);
        fill("red");
        text("Game Over",150,300);
        count=0;
        guard1.x=0;
        guard1.y=0;
        guard2.x=0;
        guard2.y=0;

    }
    if(player.isTouching(guard1)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(guard2)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block5)){
        player.x=810;
        player.y=40;
    }   

    if(player.isTouching(block6)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block7)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block8)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block9)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block10)){
        player.x=810;
        player.y=40;
    }   

    if(player.isTouching(block11)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block12)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block13)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block14)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block15)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block16)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block17)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block18)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block19)){
        player.x=810;
        player.y=40;
    }   
    
    if(player.isTouching(block21)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block22)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block23)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block24)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block25)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block26)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block27)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block28)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block29)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block30)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block31)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block32)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block33)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block34)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block35)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block36)){
        player.x=840;
        player.y=30;
    }   
    if(player.isTouching(block37)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block38)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block39)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block40)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block41)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(block42)){
        player.x=810;
        player.y=40;
    }   
    if(player.isTouching(key1)){
        key1.destroy()
        score=score+1;
    }
    else if(player.isTouching(key2)){
        key2.destroy()
        score=score+1;
    }
    else if(player.isTouching(key3)){
        key3.destroy()
        score=score+1;
    }
    if(player===allKey && player.isTouching(box)){
        diamond.visible=true;
        textSize(90);
        fill("purple");
        text("You Won",150,300);
        count=0;
        guard1.x=0;
        guard1.y=0;
        guard2.x=0;
        guard2.y=0;
    }
    drawSprites();
    
}   


    


