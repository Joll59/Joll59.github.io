var snake;
var boxSize =  15;
var cheese;
function setup(){
  var canvas = createCanvas(300,300);
  ellipseMode(CENTER);
  ellipse(35, 35, 50, 50) 
  canvas.parent('snakeContainer');
 snake  = new Snake();
 frameRate(10);
 pickLocation();
}
function pickLocation(){
  var cols = floor(width/boxSize);
  var rows = floor(height/boxSize);
  cheese = createVector(floor(random(cols)), floor(random(rows)))
  cheese.mult(boxSize);
}
function draw(){
  background(51);
  snake.death();
  snake.update()
  snake.show()

  if(snake.eat(cheese)){
    pickLocation()
  };

  fill(244,0,0)
  rect(cheese.x, cheese.y,boxSize,boxSize)
}
function keyPressed(){
  if (keyCode  === UP_ARROW){
   snake.dir(0,-1)
  }
  else if (keyCode === DOWN_ARROW){
    snake.dir (0,1)
  }
  else if (keyCode === RIGHT_ARROW){
    snake.dir (1,0)
  }
  else if (keyCode === LEFT_ARROW){
    snake.dir (-1,0 )
  }
}
