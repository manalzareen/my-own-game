
var gameState="intro";
var bg1,bg1Img;
var playbg,playBgImage;
var button ,buttonImg;
var player,playerImg;
var playerStop;
var start,startImage;
//var rock1,rock1Img,rock2,rock2Img,rock3,rock3Imgrock4,rock4Img,rock5,rock5Img;
//var rock,rocksGroup;
var mask,maskGroup;
var mask1,mask1Img,mask2,mask2Img,mask3,mask3Img,mask4,mask4Img;
var sanitizer,sanitizerGroup;
var san1,san1Img,san2,san2Img,san3,san3Img;
var lives=3;
var precaution=0;
var virus1,virus1Img, virus2,virus2Img, virus3,virus3Img, virus4,virus4Img;
var virus,virusGroup;
function preoad(){
   bg1Img=loadImage("Images/bg1.png");
   buttonImg=loadImage("Images/button1.png");
   playBgImage=loadImage("Images/playbg3.jpg");
   playerImg=loadAnimation("Images/pm1.png","Images/pm2.png");
   playerStop=loadAnimation("Images/pm2.png");
startImage=loadImage("Images/startbutton.jpg");
   virus1Img=loadImage("Images/virus1.png");
   virus2Img=loadImage("Images/virus2.png"); 
   virus3Img=loadImage("Images/virus3.png");
   virus4Img=loadImage("Images/virus4.png");
   mask1Img=loadImage("Images/mask1.png");
   mask2Img=loadImage("Images/mask2.png");
   mask3Img=loadImage("Images/mask3.png");
   mask4Img=loadImage("Images/mask4.png");
   san1Img=loadImage("Images/sanitizer1.png");
   san2Img=loadImage("Images/sanitizer2.png");
   san3Img=loadImage("Images/sanitizer3.png");
   
}



function setup(){
createCanvas(windowWidth,windowHeight);
intro=createSprite(windowWidth/2,windowHeight/2,width,height);
intro.addImage(bg1Img);
intro.scale=3.6;

button=createSprite(windowWidth/2,windowHeight/2);
button.addImage(buttonImg);
button.scale=0.9;

playbg=createSprite(windowWidth/2,windowHeight/2);
playbg.addImage(playBgImage);
playbg.visible=false;
playbg.scale=2.1;

player =createSprite(windowWidth/2,windowHeight/2+160);
//player.addAnimation("moving",playerImg);
player.addAnimation("moving",playerImg);
player.visible=false;
player.scale=3;


start=createSprite(windowWidth/2-100,windowHeight/2);
start.addImage(startImage);
start.scale=0.5;


virusGroup=new Group();
maskGroup=new Group();
sanitizerGroup=new Group();
}

function draw(){
 background("white");
 drawSprites();
 if(gameState=="intro"){
  //background("white");
  intro.visible=true;
  button.visible=true;
  playbg.visible=false;
  start.visible=false;
  
  fill(0,100,0);
  textSize(60);
  text("???????????????????????? ????????????????????????",windowWidth/2-270,windowHeight/2-210);
  fill(255,215,0);
  textSize(40);
  text("???????????????????? ???????? ????????????????",windowWidth/2-150,windowHeight/2+100);
  fill(60,179,113);
  textSize(50);
  text("???????????????????:-",windowWidth/2-70,windowHeight/2+140);
  fill(233,150,122);
  textSize(50);
 text("???????????????????? ???????? ????????????????",windowWidth/2-150,windowHeight/2+180);
 fill(0,139,139);
  textSize(40);
 text("???????????????????? ???????????? ???????????????????? ???????????????????? ",windowWidth/2-190,windowHeight/2+220);
 fill(188,143,143);
 textSize(40);
text(" ???????? ???????????? ???????????????????? ???????????????????????? ???????????????????????????????? ???????????????? ???????????????? ???????????????? ????????????????????????????????.",windowWidth/2-450,windowHeight/2+260);
 fill(205,92,92);
  textSize(50);
  text("???????????????? ???????? ???????????????????? ????????????????????????",windowWidth/2-250,windowHeight/2+300);

  //image(bg1Img,windowWidth/2,windowHeight/2,width,height);
  if (mousePressedOver(button)){
    gameState='play';
   // Rocks();
  }
  } 

 if (gameState==="play" ){
  background("grey");
  intro.visible=false;
  button.visible=false;
  player.visible=true;
  playbg.visible=true;
 start.visible=false;
  if(mousePressedOver(start)){
     gameState="play2"
  }

  
 }

 
 
 if(gameState=="play2"){
      playbg.velocityY=5;
   
    
      viruses();
      Masks();
      Sanitizer();
      if(playbg.y>1000){
        playbg.y=playbg.height/2;
      }
          if (keyDown(RIGHT_ARROW)){
            player.addAnimation("moving",playerImg);
            player.x+=3;
            player.changeAnimation("moving",playerImg);
          }
          if (keyDown(LEFT_ARROW)){
            player.addAnimation("moving",playerImg);
            player.x-=2;
            player.changeAnimation("moving",playerImg);
          }
          fill(143,188,143);
          textSize(40);
          text("????????????????????:"+lives,1000,40);

          textSize(40);
          text("????????????????????????????????????????:"+precaution,300,40);


          for (i = 0; i < maskGroup.length; i++) 
              {
                if (player.isTouching(maskGroup.get(i))) 
                {
                precaution= precaution + 10;
                maskGroup.get(i).destroy();
                }
              }

              for (i = 0; i < sanitizerGroup.length; i++) 
              {
                if (player.isTouching(sanitizerGroup.get(i))) 
                {
                precaution = precaution + 10;
                sanitizerGroup.get(i).destroy();
                }
              }
          
          for (i = 0; i < virusGroup.length; i++) 
          {
            if (player.isTouching(virusGroup.get(i))) 
            {
            lives= lives- 1;
            virusGroup.get(i).destroy();
            }
          }
          if(lives==0){
            gameState="END";
            
            }

            

    
    }
  

    if(gameState=="END"){
      background("lightgreen");
      stroke("black")
            strokeWeight(4);
            fill("green");
            textSize(25);
            text("Don't forget to wear mask and use sanitizers",70,380);
            fill("orange")
            text("Score:"+score,270,150)
            fill("red")
            text("Click reset to play again or click end to end",70,410)
    }
    
    if(gameState=="Thank you"){
      background("black")
      fill("white")
      stroke("orange")
      strokeWeight(4)
      textSize(35)
      text("Thanks for playing",180,200)
      text("Hope you enjoyed it",170,300)
      text("Reload the page to play again",100,400)
      text("And stay safe from corona virus",85,590)
      textSize(30)
      text("Remember to wear mask and use sanitizer",25,500)
    }
    //if(mousePressedOver(reset)){
    //  Reset();
    //}
  
    //if(mousePressedOver(end)){
     // endPage();
    //}

     
      }

  
  

  function viruses(){
      if (frameCount % 150 === 0) {
        virus = createSprite(random(windowWidth/2-900,windowHeight/2+200),100,10,10);
        virus.velocityY=4;
        virus.scale=1.5;
        var rand = Math.round(random(1,5));
        switch(rand){
            case 1: virus.addImage("virus1",virus1Img);
            break;
            case 2: virus.addImage("virus2", virus2Img);
            break;
            case 3: virus.addImage("virus3", virus3Img);
            break;
            case 4: virus.addImage("virus4", virus4Img);
            break;
           
        }
        virusGroup.add(virus);  
        virus.depth=player.depth;
        player.depth=player.depth+1
        //console.log("hi");
  }
  }

  function Masks(){
    if (frameCount % 100 === 0) {
      mask = createSprite(windowWidth/2+300,windowHeight/2-300,10,10);
      mask.velocityY=4;
      mask.scale=0.4;
      var rand = Math.round(random(2,4));
      switch(rand){
          case 1: mask.addImage("mask1",mask1Img);
          break;
          case 2: mask.addImage("mask2", mask2Img);
          break;
          case 3: mask.addImage("mask3", mask3Img);
          break;
          case 4: mask.addImage("mask4", mask4Img);
          break;
      }
      maskGroup.add(mask);  
      mask.depth=player.depth;
      player.depth=player.depth+1
      //console.log("hi");
}
}

function Sanitizer(){
  if (frameCount % 100 === 0) {
    sanitizer= createSprite(windowWidth/2 -200,windowHeight/2-300,10,10);
    sanitizer.velocityY=4;
    sanitizer.scale=0.4;
    var rand = Math.round(random(1,3));
    switch(rand){
        case 1: sanitizer.addImage("san1",san1Img);
        break;
        case 2: sanitizer.addImage("san2", san2Img);
        break;
        case 3: sanitizer.addImage("san3", san3Img);
        break;    
    }
    sanitizerGroup.add(sanitizer);  
    sanitizer.depth=player.depth;
    player.depth=player.depth+1
}
}


  
   










