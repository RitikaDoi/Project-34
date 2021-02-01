var superheroImage;
var monsterImage;
var backgroundImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() 
{

  //preload the images here

  monsterImage = loadImage("images/Monster-01.png");

  backgroundImage = loadImage("images/GamingBackground.png");

}

function setup() 
{

  engine = Engine.create();
  world = engine.world;
  
  var canvas = createCanvas(3000, 1300);
  
  // create sprites here

  superhero1 = new superhero(260, 200);

  ground1 = new ground(500, 500, 1300, 20);

  block1 = new block(600, 100);
  block2 = new block(600, 150);
  block3 = new block(600, 200);
  block4 = new block(600, 250);
  block5 = new block(600, 300);
  block6 = new block(600, 350);
  block7 = new block(600, 400);
  block8 = new block(600, 450);
  block9 = new block(680, 200);
  block10 = new block(680, 250);
  block11 = new block(680, 300);
  block12 = new block(680, 350);
  block13 = new block(680, 400);
  block14 = new block(680, 450);
  block15 = new block(760, 100);
  block16= new block(760, 150);
  block17 = new block(760, 200);
  block18 = new block(760, 250);
  block19 = new block(760, 300);
  block20 = new block(760, 350);
  block21 = new block(760, 400);
  block22 = new block(760, 450);
  block23 = new block(840, 200);
  block24 = new block(840, 250);
  block25 = new block(840, 300);
  block26 = new block(840, 350);
  block27 = new block(840, 400);
  block28 = new block(840, 450);

  rop = new fly(superhero1.body, {x: 250, y: 100});

  monster1 = new monster(1000, 450);

}

function draw() 
{
  
  background(backgroundImage);

  Engine.update(engine);

  superhero1.display();

  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();

  rop.display();

  monster1.display();

}

function mouseDragged()
{

  Matter.Body.setPosition(superhero1.body, {x: mouseX, y: mouseY});

};