
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Body;
const Body = Matter.Bodies;
var dustbinObject,paperObject,groundObject;
var world;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);
	engine = Engine.create();
  world = engine.world;
  
  paperObject = new Paper(200,450,70);
  groundObject = new Ground(width/2,670,width,20);
  dustbinObject= new Dustbin(1200,650);
  Engine.run(engine);
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}

function draw() {
  background(0);
  paperObject.display();
 groundObject.display();
 dustbinObject.display();
}



