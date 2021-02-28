class Terrorist{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.image  = null;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.bomb = Bodies.rectangle(200, 200, 6, 6);
        World.add(world, this.bomb);
    }

    display(){
        var pos =this.body.position;
          rectMode(CENTER);
          fill("brown");
          rect(pos.x, pos.y, this.width, this.height);
        }

        
    }
    