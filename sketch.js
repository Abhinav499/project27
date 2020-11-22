
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Engine.run(engine);
	bobObject1 = new Bob(100,420,60);
	bobObject2 = new Bob(225,420,60);
	bobObject3 = new Bob(350,420,60);
	bobObject4 = new Bob(475,420,60);
	bobObject5 = new Bob(600,420,60);
	roof1 = new Roof(350,100,500,30);
	rope1 = new Rope(bobObject1.body,{x:100,y:100});
	rope2 = new Rope(bobObject2.body,{x:225,y:100});
	rope3 = new Rope(bobObject3.body,{x:350,y:100});
	rope4 = new Rope(bobObject4.body,{x:475,y:100});
	rope5 = new Rope(bobObject5.body,{x:600,y:100});
   
}


function draw() {
 
  background("white");
   Engine.update(engine);
  //rectMode(CENTER);
    bobObject1.display(); 
	bobObject2.display();  
	bobObject3.display();  
	bobObject4.display(); 
	bobObject5.display();  
	roof1.display();
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	//console.log("hello");
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("hello");
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-80});
	}
  }



