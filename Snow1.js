class Snow1 {
  constructor(x, y) {
    var options = {
        'restitution':0,
        'friction':0,
        'density':0.005,
        //isStatic : true
    }
    this.body = Bodies.rectangle(x, y, 40,40, options);
    this.image = loadImage("snow4.webp");
    
    this.width = 40;
    this.height = 40;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(4);
    stroke("green");
    fill(255);
    imageMode(CENTER);
    image(this.image,0, 0, this.width, this.height);
    
  }
}
  