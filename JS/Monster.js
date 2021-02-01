class monster
{

    constructor(x, y)
    {

        var options = 
        {

            'restitution':0.8,
            'friction':0.1,
            'density':0.1

        };

        this.body = Bodies.circle(x, y, 100, options);
        this.x = x;
        this.y = y
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);

    };

    display()
    {

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 250, 300);


    };

};