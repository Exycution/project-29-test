const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block5,block7,block8,block9,block10,block11,block12;
var ground;
var block13,block14,block15,block16,block17,block18,block19,block20,block21,block22;
var polygon,polygonImg;
var slingshot;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1600,700);
    engine = Engine.create();
    world = engine.world;

    // ground
    ground = new Ground(700,500,300,10);

    // test
    // block1 = new Box(700,490);
    // block2 = new Box(730,490);
    // block3 = new Box(760,490);
    // block4 = new Box(790,490);
    // block5 = new Box(810,490);

    // bottom blocks
    // block6 = new Box(680,490);
    block7 = new Box(600,490);
    block8 = new Box(630,490);
    block9 = new Box(660,490);
    block10 = new Box(690,490);
    block11 = new Box(720,490);
    block12 = new Box(750,490);
    block13 = new Box(780,490);

    // middle blocks
    block14 = new Box(630,450);
    block15 = new Box(660,450);
    block16 = new Box(680,450);
    block17 = new Box(690,450);
    block18 = new Box(710,450);

    // top blocks
    block19 = new Box(710,400);
    block20 = new Box(650,400);
    block21 = new Box(680,400);

    //topmost blocks
    // black22 = new Box(680,200);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingshot = new SlingShot(polygon.body, {x: 200, y: 50 });

    
}



function draw(){
    background("silver");
    Engine.update(engine);

    ground.display();
    // block1.display();
    // block2.display();
    // block3.display();
    // block4.display();
    // block5.display();
    // block6.display();
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
    slingshot.display();

    imageMode(CENTER);
    image(polygonImg, polygon.position.x, polygon.position.y, 40,40);
    
}
