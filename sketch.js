
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var commando, terrorist, bomb, ground, barrier, barrier2, barrier3, barrier4;
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	commando = new Commando(windowWidth/6, windowHeight-250, 20,150);
	terrorist = new Terrorist(windowWidth/1.3, windowHeight-250, 20,150);
	terrorist.velocityX = 2;
	bomb = new Bomb(windowWidth/6, windowHeight - 400, "white");
	barrier = new Barrier(windowWidth/10, windowHeight - 20, 20, 450);
	barrier2 = new Barrier(windowWidth/4.1, windowHeight - 20, 20, 450);
	barrier3 = new Barrier(windowWidth/1.42, windowHeight - 20, 20, 450);
	barrier4 = new Barrier(windowWidth/1.19, windowHeight - 20, 20, 450);
	ground = new Ground(windowWidth, windowHeight, 5000, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  textSize(20);
  fill("white")
  text("Press UP_ARROW to throw the BOMB!!", windowWidth/65, windowHeight - 700);
  text("Press DOWN_ARROW to stop the BOMB!!", windowWidth/65, windowHeight - 670);
 
  Engine.update(engine);
  commando.display();
  terrorist.display(); 
  bomb.display();
  barrier.display();
  barrier2.display();
  barrier3.display();
  barrier4.display();
  ground.display();
  bomb.keypressed();
    
  
}




