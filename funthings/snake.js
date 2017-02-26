function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.dir = function(x,y){
    this.xspeed= x
    this.yspeed = y
  }

  this.death = function (){
    for (var i = 0; i < this.tail.length; i++){
       var pos = this.tail[i];
       var distance = dist(this.x,this.y, pos.x, pos.y);
       if(distance<1){
         this.total = 0;
         this.tail = [];
       }
    }
  }

  this.eat = function (pos){
     var distance = dist(this.x, this.y, pos.x,pos.y)
     if (distance <1){
       this.total += 1
       return true;
     } else {
       return false
     }
  }

  this.update = function(){
    for (var i=0; i<this.tail.length-1; i++){
        this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x,this.y);

    this.x += this.xspeed*boxSize;
    this.y += this.yspeed*boxSize;

    this.x =constrain(this.x, 0, width-boxSize)
    this.y =constrain(this.y, 0, height-boxSize)
  }

  this.show = function(){
    fill(255)
    for (var i=0; i<this.total; i++){
      rect(this.tail[i].x, this.tail[i].y,boxSize,boxSize)
    }
    rect(this.x,this.y,boxSize,boxSize)
  }
}
