const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot,polygon2;


function preload() {

}

function setup(){
    var canvas = createCanvas(1200,900);
    engine = Engine.create();
    world = engine.world;
	paperObject=new paper(200,450,70);
	launcher= new Rope(paperObject.body,{x:200,y:100});
    ground = new Ground(600,height,1200,20);
    platform = new Ground(1000, 605, 200, 17);

    
	
	box5 = new Box(930,235,30,40);
	box6 = new Box(960,235,30,40);
	box7 = new Box(990,235,30,40);
	box8 = new Box(1020,235,30,40);
	box9 = new Box(1050,235,30,40);

	box10 = new Box(960,195,30,40);
    box11 = new Box(990,195,30,40);
	box12= new Box(1020,195,30,40);

	box13 = new Box(990,155,30,40);
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);



    ground.display();
	paperObject.display();
	launcher.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();








    platform.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:135,y:-145});

    
  	}
}
