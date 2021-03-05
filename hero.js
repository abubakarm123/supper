class Hero {
    constructor(x, y,r) {
        var options = {
            density:1,
            frictionAir: 1,
            isStatic:false
        }
        this.r = r
        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("images/Superhero-01.png")
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
        imageMode(RADIUS);
        image(this.image,0,0,this.r + 150,this.r);
        pop();
    }

};