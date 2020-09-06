var dog,dog1;
var database;
function preload(){ 
  dogimg1 = loadImage("images/dog.png");
  dogimg2 = loadImage("images/happydog.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
  database = firebase.database();
 foodStock= database.ref('Food');
 foodStock.on("value", readStock);
 

 
} 

function draw(){
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
   writeStock(foodS);
   dog.addImage(dogimg2);
 }
 drawSprites();
  text("Press Up Arrow Key To Feed Draco:"+foodStock)
 fill(255,255,254);
 textSize(15);

drawSprites();
}
function readStock(data){
  foodS = data.val;
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
  x=x-1;
}
 database.ref('/');
 food:x
}

