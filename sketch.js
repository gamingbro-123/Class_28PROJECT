
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1,mango2,mango3,mango4,mango5,mango6;
var stoneObj;
var ground;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(750,200,100,10);

	mango1 = new Mango(100,200,10);
	mango2 = new Mango(400,200,10);
	mango3 = new Mango(250,100,10);
	mango4 = new Mango(50,300,10);
	mango5 = new Mango(180,300,10);

	// boy = new Boy(200,300,10,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  boy.display();

  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
		launcherObject.attach(stoneObj.body);
	}
}

// function detectollision(Lstone,Lmango)
// {
// 	mangoBodyPosition=Lmango.body.position
// 	stoneBodyPosition=Lstone.body.position

// 	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
// 	if(distance<=Lmango.r+Lstone.r)
// 	{
// 		Matter.Body.setStatic(Lmango.body,false);

// 	}
// }



