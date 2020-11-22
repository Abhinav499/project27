class Rope{
    constructor(bodyB,pointB){

        var options = {
            
            bodyA : bodyB,
            pointB: pointB
            
        }
        this.pointB=pointB
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
display(){
    var pointA=this.rope.bodyA.position;
    strokeWeight(2);


    line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
}

    
}