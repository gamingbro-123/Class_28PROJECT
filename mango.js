class Mango
{
  constructor(xpos,ypos)
  {
      var options={
          isStatic:true,
          restitution:0,
          friction:1,
      }


        this.body = Bodies.circle(xpos,ypos,radius);

        this.image = loadImage("mango.png");

        this.radius = radius;
        


        World.add(world,this.body);
                  
      }

      display()
      {

        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);

      }
    }
