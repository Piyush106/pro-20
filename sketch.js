var tom,tomImg1,tomImg2
var jerry,jerryImg1,jerryImg2
var bg



function preload() {

    bg=loadImage("images/garden.png");
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
   //
    tomImg3=loadAnimation("images/tomFour.png");

    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,600);
    jerry.addAnimation("jerryStanding",jerryImg1);
    jerry.scale=0.15;
    

    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        tom.velocityX=-5;
        tom.addAnimation("tomRunning.",tomImg2);
        tom.changeAnimation("tomRunning");


        jerry.addAnimation("jerryTeasing",jerryImg2);
        jerry.frameDelay=25;
        jerry.changeAnimation("jerryTeasing");
    }

  //For moving and changing animation write code here


}
