const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.body;

var dustbin1, dustbin2, dustbin3
var ball,ground
var world



function preload()
{
	dustbinimage = loadImage("dustbin1.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 20)
	ball = new Ball(100, 600, 50,)
	dustbin1 = new Dustbin (680, 680, 150, 20)
	dustbin2 = new Dustbin (600, 610, 20, 150)
	dustbin3 = new Dustbin(760, 610, 20, 150)
  
}


function draw() {
	rectMode(CENTER);
	background("grey")

	Engine.update(engine);

	ground.display();
	ball.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	image(dustbinimage, 590, 535, 180, 150);

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50, y:-30})
	}
}


//text(mouseX+","+mouseY,mouseX,mouseY)

