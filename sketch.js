const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1//, pig1,pig3;
var backgroundImg//,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
//var score = 0;

function preload() {
    //getBackgroundImg();
    backgroundImg = loadImage("sprites/bg1.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    //primer piso
    box1 = new Box(700,320,70,70);
    box2 = new Box(700,250,70,70);
    box3 = new Box(700,180,70,70);
    box4 = new Box(700,110,70,70);
    box5 = new Box(700,40,70,70);
    box6 = new Box(600,320,70,70);
    box7 = new Box(600,250,70,70);
    box8 = new Box(600,180,70,70);
    box9 = new Box(600,110,70,70);
    box10 = new Box(600,40,70,70);
    box11 = new Box(800,320,70,70);
    box12 = new Box(800,250,70,70);
    box13 = new Box(800,180,70,70);
    box14 = new Box(800,110,70,70);
    box15 = new Box(800,40,70,70);

    bird = new Bird(120,300);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:500, y:40});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
        noStroke();
        //textSize(35)
        //fill("white")
        //text("( ͡❛ ‿‿ ͡❛)\n\nScore: " + score, width-1180, 100)
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    bird.display();
    //platform.display();
    //log6.display();
    slingshot.display();    
}
/*
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body,{x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory = [];
        Matter.Body.setPosition(bird.body,{x:200, y:50})
        slingshot.attach(bird.body);
    }
}
*/
/*
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
*/
