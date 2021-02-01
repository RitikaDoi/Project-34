class fly
{

    constructor(bodyA, pointB)
    {

      var rop_options =
      {

        //The 2 bodies which will be constrained.
        bodyA: bodyA,
        pointB: pointB,

        //Setting stiffness and length.
        stiffness: 0.04,
        length: 150,

    };

    this.pointB = pointB;

    //Creating a constrained body called body.
    this.rop = Constraint.create(rop_options);
    World.add(world, this.rop);

};

    display()
    {

        //Name spacing bodyA and bodyB position. 
        var posA = this.rop.bodyA.position;
        var posB = this.pointB;

        //Creating a line.
        strokeWeight(0);
        line(posA.x, posA.y, posB.x, posB.y);

    };


};