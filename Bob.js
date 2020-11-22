class Bob{
    constructor(x, y,radius) {
        var options = {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':0.5,
            
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.height = width;
       // this.width = height;
       this.radius = radius;
        World.add(world, this.body);
      } 
      display(){
        push();
        ellipseMode(RADIUS);
        fill(128,0,128);
        ellipse( this.body.position.x,this.body.position.y,this.radius,this.radius );
        pop();
       
      }
}