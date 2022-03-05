
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ball1;
var ball2;
var ball3;
var ball4;
var ball5;
var ball6;
var ball7;
var ball8;
var ball9;

var ground;

var wedge;
var wedge1;
var wedge2;
var wedge3;
var wedge4;
var wedge5;
var wedge6;
var wedge7;
var wedge8;


var restrict1;
var restrict2;
var restrict3;
var restrict4;
var restrict5;
var restrict6;
var restrict7;
var restrict8;
var restrict9;
var restrict10;


var angle = 60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball1_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball2_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball3_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball4_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball5_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball6_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball7_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball8_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  var ball9_options = {
    restitution: 0.95,
    frictionAir:0.01
  }

  
   
   var ground_options ={
     isStatic: true
   };

   var restrict1_options ={
    isStatic: true
  };

  var restrict2_options ={
    isStatic: true
  };

  var restrict3_options ={
    isStatic: true
  };

  var restrict4_options ={
    isStatic: true
  };

  var restrict5_options ={
    isStatic: true
  };

  var restrict6_options ={
    isStatic: true
  };

  var restrict7_options ={
    isStatic: true
  };

  var restrict8_options ={
    isStatic: true
  };

  var restrict9_options ={
    isStatic: true
  };

  var restrict10_options ={
    isStatic: true
  };


  
var wedge_options ={
  isStatic: true
};

var wedge1_options ={
  isStatic: true
};

var wedge2_options ={
  isStatic: true
};

var wedge3_options ={
  isStatic: true
};

var wedge4_options ={
  isStatic: true
};

var wedge5_options ={
  isStatic: true
};

var wedge6_options ={
  isStatic: true
};
var wedge7_options ={
  isStatic: true
};

var wedge8_options ={
  isStatic: true
};

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(190,10,20,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(190.1,10,20,ball1_options);
  World.add(world,ball1);

  ball2 = Bodies.circle(190.2,10,20,ball2_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(190.3,10,20,ball3_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(190.4,10,20,ball4_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(190.5,10,20,ball5_options);
  World.add(world,ball5);

  ball6 = Bodies.circle(190.6,10,20,ball6_options);
  World.add(world,ball6);

  ball7 = Bodies.circle(190.7,10,20,ball7_options);
  World.add(world,ball7);

  ball8 = Bodies.circle(190.8,10,20,ball8_options);
  World.add(world,ball8);

  ball9 = Bodies.circle(190.9,10,20,ball9_options);
  World.add(world,ball9);


  
  wedge = Bodies.rectangle(200,100,100,20,wedge_options)
  World.add(world,wedge);

  wedge1 = Bodies.rectangle(200,100,100,20,wedge_options)
  World.add(world,wedge1);

  wedge2 = Bodies.rectangle(200,100,100,20,wedge_options)
  World.add(world,wedge2);


  wedge3 = Bodies.rectangle(50,100,100,20,wedge_options)
  World.add(world,wedge3);

  wedge4 = Bodies.rectangle(50,100,100,20,wedge_options)
  World.add(world,wedge4);

  wedge5 = Bodies.rectangle(50,100,100,20,wedge_options)
  World.add(world,wedge5);


  wedge6 = Bodies.rectangle(350,100,100,20,wedge_options)
  World.add(world,wedge6);

  wedge7 = Bodies.rectangle(350,100,100,20,wedge_options)
  World.add(world,wedge7);

  wedge8 = Bodies.rectangle(350,100,100,20,wedge_options)
  World.add(world,wedge8);


  restrict1 = Bodies.rectangle(100,350,50,20,restrict1_options);
  World.add(world,restrict1);

  restrict2 = Bodies.rectangle(300,350,50,20,restrict2_options);
  World.add(world,restrict2);

  restrict3 = Bodies.rectangle(200,350,20,50,restrict3_options);
  World.add(world,restrict3);

  restrict4 = Bodies.rectangle(0,350,20,50,restrict4_options);
  World.add(world,restrict4);

  restrict5 = Bodies.rectangle(400,350,20,50,restrict5_options);
  World.add(world,restrict5);

  restrict6 = Bodies.rectangle(200,250,50,20,restrict6_options);
  World.add(world,restrict6);

  restrict7 = Bodies.rectangle(100,250,20,50,restrict7_options);
  World.add(world,restrict7);

  restrict8 = Bodies.rectangle(300,250,20,50,restrict8_options);
  World.add(world,restrict8);

  restrict9 = Bodies.rectangle(0,250,50,20,restrict9_options);
  World.add(world,restrict9);

  restrict10 = Bodies.rectangle(400,250,50,20,restrict10_options);
  World.add(world,restrict10);



  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  Body.rotate(wedge,angle);
  push();
  translate(wedge.position.x,wedge.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.1;
  
  Body.rotate(wedge1,angle);
  push();
  translate(wedge1.position.x,wedge1.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.3;
  
  Body.rotate(wedge2,angle);
  push();
  translate(wedge2.position.x,wedge2.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.2;


  Body.rotate(wedge3,angle);
  push();
  translate(wedge3.position.x,wedge3.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.1;
  
  Body.rotate(wedge4,angle);
  push();
  translate(wedge4.position.x,wedge4.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.3;
  
  Body.rotate(wedge5,angle);
  push();
  translate(wedge5.position.x,wedge5.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.2;


  Body.rotate(wedge6,angle);
  push();
  translate(wedge6.position.x,wedge6.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.1;
  
  Body.rotate(wedge7,angle);
  push();
  translate(wedge7.position.x,wedge7.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.3;
  
  Body.rotate(wedge8,angle);
  push();
  translate(wedge8.position.x,wedge8.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();
  angle = angle + 0.2;
  
  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball1.position.x,ball1.position.y,10);
  ellipse(ball2.position.x,ball2.position.y,10);
  ellipse(ball3.position.x,ball3.position.y,10);
  ellipse(ball4.position.x,ball4.position.y,10);
  ellipse(ball5.position.x,ball5.position.y,10);
  ellipse(ball6.position.x,ball6.position.y,10);
  ellipse(ball7.position.x,ball7.position.y,10);
  ellipse(ball8.position.x,ball8.position.y,10);
  ellipse(ball9.position.x,ball9.position.y,10);


  rect(ground.position.x,ground.position.y,400,20);

  rect(restrict1.position.x,restrict1.position.y,50,20);
  rect(restrict2.position.x,restrict2.position.y,50,20);
  rect(restrict3.position.x,restrict3.position.y,20,50);
  rect(restrict4.position.x,restrict4.position.y,20,50);
  rect(restrict5.position.x,restrict5.position.y,20,50);
  rect(restrict6.position.x,restrict6.position.y,50,20);
  rect(restrict7.position.x,restrict7.position.y,20,50);
  rect(restrict8.position.x,restrict8.position.y,20,50);
  rect(restrict9.position.x,restrict9.position.y,50,20);
  rect(restrict10.position.x,restrict10.position.y,50,20);
 
 
}

