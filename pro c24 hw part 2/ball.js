class Ball {
    constructor(x, y, radius){
        var options ={
            isStatic:false,
            'restitution': 0.5,
            'friction': 0.5,
            'density': 1
        }

        this.x = x
        this.y = y
        this.radius = radius;
        this.image = loadImage("paper1.png")
       
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options)

        World.add(world, this.body)

    }

    display(){
        var pos = this.body.position
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.radius, this.radius)
        pop();
    }



}
