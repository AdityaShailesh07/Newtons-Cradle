
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1,rope1,roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	ball = new Ball(200,400,50,50);
	roof = new Roof(400,100,500,30);
	rope1 = new Rope(ball1.Body,roof1.Body,-ballDiameter*2,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  roof.display();
  rope1.display();

  
  drawSprites();
 
}



