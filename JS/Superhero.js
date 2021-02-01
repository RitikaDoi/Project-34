class superhero
{

    constructor(x, y)
    {

        var options = 
        {

            'restitution':0.8,
            'friction':1.0,
            'density':1.0

        };

        this.body = Bodies.circle(x, y, 200, options);
        this.x = x;
        this.y = y
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);

    };

    display()
    {

        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 200);


    };

};