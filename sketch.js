//var mouseImage,catImage;
//var catImage2,catImage4;
//var mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImage;


function preload() {
    //load the images here

//catImage = loadImage("cat1.png");
//mouseImage = loadImage("mouse1.png");
gardenImage= loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden = createSprite(1000,800);
   garden.addImage(gardenImage);

//cat = createSprite(200,300,20,20);
//cat.addImage(catImage);

//mouse = createSprite(300,200,20,20);
//mouse.addImage(mouseImage);
}

function draw() {
    
    text(mouseX + ',' + mouseY,10,45);
    //Write condition here to evalute if tom and jerry collide
//if(cat.x - mouse.x < (cat.width - mouse.width)/2){
//cat.velocity = 0;
//cat.addAnimation("catLastImage", catImage4);
//cat.changeAnimation("catLastImage");

drawSprites();
}


   



function keyPressed(){

  //For moving and changing animation write code here
//if(keyCode === LEFT_ARROW){
    //cat.velocityX= -5;
    //cat.addAnimation("catRunning",catImage2);
   // cat.changeAnimation("catRunning");

}


