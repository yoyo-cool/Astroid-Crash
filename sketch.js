const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine
var meteorGroup
var bullet, spaceShip, meteors
var collision
var flag


function preload(){
  spaceImg=loadImage("space.jpg")
}

function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  meteorGroup= new Group()

  spaceShip=new ship(200,200,150,200)
  meteors=new meteor(1100,100,50,50)
  meteorGroup.add(meteors.body)
  //bullet= new bomb(200,200,50,25)

  
}

function draw() {
  Engine.update(engine);
  background(spaceImg);  

  //spaceShip.display()
 // meteors.display()
  //bullet.display()

drawSprites();
  spaceShip.body.y=mouseY
  spaceShip.body.x=200

 if(bullet)
  bullet.body.collide(meteorGroup, destroys)

  if (frameCount % 50 === 0){
    meteors=new meteor(1100,random(100,700),50,50)
    meteorGroup.add(meteors.body)
  }
  
  drawSprites();

}

function destroys(bullet,meteors){
  meteors.destroy()
  bullet.destroy()
}

function keyPressed(){

  if(keyCode === 32){
    bullet= new bomb(200,spaceShip.body.y,50,25)
  }
}

