var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

   fairyBody =  Bodies.circle(130 , 520 , 5 , {isStatic:true} );
   World.add(world, fairyBody);

	starBody = Bodies.circle(650 , 5 , 5 , {restitution:0.2 , isStatic:true  });
	World.add(world, starBody);
	
	Engine.run(engine);

}


/*function draw() {
  background(bgImg);

 
if(starBody.position.y > 470){
	//Matter.Body.setStatic(starBody ,true);
	//Matter.Body.setStatic(starBody , {x:150 , y:500});
	//Matter.Body.setRestitution(starBody ,0.2);

}

keyPressed();


Engine.update(engine);

 drawSprites();

}

function keyPressed() {
if(keyDown("space")){
//starBody = {isStatic:false};
star.x = starBody.position.x;
star.y = starBody.position.y;
 
Matter.Body.setStatic(starBody ,false);
}
 
console.log(star.position);

}
/////////////////////////////////*/


function draw() {
	rectMode(CENTER);
	background(bgImg);
  
	if(keyDown("left")){
		fairy.x = fairy.x - 5;
	}
  
	if(keyDown("right")){
	  fairy.x = fairy.x + 5;
  }
    
	star.x= starBody.position.x 
	star.y= starBody.position.y 
  
	if(starBody.position.y > 490 && fairy.position.x > 500){
    star = starBody ,{isStatic:true , restitution:0}
	}

	keypress();
  
	drawSprites();
	}
  
	function keypress(){
  
	  if(keyDown("space")){
		  Matter.Body.setStatic(starBody ,false);
	  } 
	}