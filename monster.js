class Monster {
    constructor(x, y,r) {
        var options = {
            density:5,
            frictionAir: 0,
            isStatic:false
        }
        this.r = r
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("images/Monster-01.png")
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }

};