//Create variables here
var dog,happyDog,foodS,foodStock;
var database;
function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog = createSprite(250,325);
  dog.addImage(dogImg)

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
  this.greeting.html(" NOTE : PRESS UP ARROW KEY TO FEED DRAGO MILK ! ")
  this.greeting.position(250,345);

  //add styles here

    function readStock(data){
      foodS = data.val();
    }
     function writeStock(x){
        
      database.ref('/').updateI({
        Food:x
      })
     }

} 



