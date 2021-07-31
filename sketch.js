const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg,bgImg;

var snow1
/*,snow2,snow3,snow4,snow5,snow6,snow7,snow8,snow9,snow10,snow11,snow12,
snow13,snow14,snow15,snow16,snow17,snow18,snow19,snow20;*/

function preload() {
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 /*snow1 = new Snow1(Math.round(random(10,800)),10);
  snow2 = new Snow1(Math.round(random(15,800)),11);
  snow3 = new Snow1(Math.round(random(20,800)),12);
  snow4 = new Snow1(Math.round(random(25,800)),13);
  snow5 = new Snow1(Math.round(random(30,800)),14);
  snow6 = new Snow1(Math.round(random(35,800)),15);
  snow7 = new Snow1(Math.round(random(40,800)),16);
  snow8 = new Snow1(Math.round(random(45,800)),17);
  snow9 = new Snow1(Math.round(random(50,800)),18);
  snow10 = new Snow1(Math.round(random(55,800)),500);
  snow11 = new Snow1(Math.round(random(60,800)),65);
  snow12 = new Snow1(Math.round(random(65,800)),75);
  snow13 = new Snow1(Math.round(random(70,800)),80);
  snow14 = new Snow1(Math.round(random(75,800)),90);
  snow15 = new Snow1(Math.round(random(80,800)),85);
  snow16 = new Snow1(Math.round(random(85,800)),95);
  snow17 = new Snow1(Math.round(random(90,800)),100);
  snow18 = new Snow1(Math.round(random(95,800)),110);
  snow19 = new Snow1(Math.round(random(100,800)),105);
  snow20 = new Snow1(Math.round(random(105,800)),115);*/


}

function draw() {
  background(0); 
  
  Engine.update(engine);
  
  /*snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();*/
  console.log(frameCount);
  spawnSnows();
  drawSprites();
}

function spawnSnows() {
  if(frameCount % 60 === 0) {
    snow1 = new Snow1(Math.round(random(10,800)),10);
    snow1.display();
  }
  if(frameCount % 80 === 0) {
    snow2 = new Snow1(Math.round(random(10,800)),10);
    snow2.display();
  }
}