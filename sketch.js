const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var boyImg,crystals,roundImg;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
}





function setup() {
  createCanvas(800,400);




  world = engine.world;


  boyImg= new Boy(700,240,70,70);
  crystals = new Boy (920,240,70,70);
  roundImg = new Boy(810,160,70,70);


}

function draw() {
  if(backgroundImg){
  background(backgroundImg);
    
    
    }

    


    Engine.update(engine);
    //strokeWeight(4);
    boyImg.display();
    crystals.display();
    roundImg.display();
   



}
function keyPressed(){
  if(keyCode === 32){

  }
}
