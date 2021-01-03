
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var object,paper1,ground1,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	

	paper1 = new paper(200,200,50);
	ground1 = new ground(width/2,685,width,15);
	dustbin1 = new dustbin(1200,666);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  paper1.display();
  ground1.display();
  dustbin1.display();
//  dustbin2.display();
 // dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
 Matter.Body.applyForce(paper1.body,paper1.body.position,{x:95,y:-95})
	}
}
