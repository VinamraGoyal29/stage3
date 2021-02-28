class Bomb{
    constructor(x, y, color){
        var options = {
            isStatic : false,
            restitution : 1.0,
            friction : 1.0,
            airFriction : 10.0,
            density:2.0
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color);
        ellipse(0,0,30,30);
        pop();
    }
    
    keypressed(){
        if(keyCode === UP_ARROW){
            Matter.Body.applyForce(this.body, this.body.position, {x: 10, y: -5});
        }

        if(keyCode === DOWN_ARROW){
            Matter.Body.applyForce(this.body, this.body.position, {x: 0, y: 0});
        }
    }
    
}