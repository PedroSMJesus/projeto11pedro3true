var sea_img;
var sea;
var navio, navio_swimming;


function preload(){
sea_img = loadImage ("sea.png");
navio_swimming = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
 //fundo
sea_img= createSprite(150,100,10,10);
sea_img.addImage("sea.png");


  //mar
  sea = createSprite(200,230,400,20);

//barco
navio = createSprite(150,160,50,50);
navio.addAnimation("running",navio_swimming);
navio.scale=0.1;
navio.x = 200;

}

function draw() {
  background("blue");
    
//movimento do funo
if (sea_img.x>0) {
  sea_img.x = sea_img.width/2;
}


navio.velocityY=0.5;
 navio.collide(sea);
 drawSprites();
}
