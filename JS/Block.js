class block
{

    constructor(x, y)
    {

        var options = 
        {

            'restution': 0.8,
            'friction': 0.1,
            'density': 0.1

        };

        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);

    };

    display()
    {

        var pos = this.body.position;
        rectMode(CENTER);
        strokeWeight(5);
        fill("red");
        rect(pos.x, pos.y, 50, 50);

    }

};