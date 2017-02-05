var snake;
var size =  21;
var cheese;
function setup(){
  createCanvas(800,800);
 snake  = new Snake();
 frameRate(6);
 pickLocation();
}
function pickLocation(){
  var cols = floor(width/size);
  var rows = floor(height/size);
  cheese = createVector(floor(random(cols)), floor(random(rows)))
  cheese.mult(size);
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
  rect(cheese.x, cheese.y,size,size)
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
