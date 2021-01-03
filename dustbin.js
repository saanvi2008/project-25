class dustbin{
    constructor(x,y,width,height){

        var options = {
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.wallThickness = 20;
        this.angle         = 0;

        this.image = loadImage("dustbin.png")
        
        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,options);
        this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options);
        this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight,options);

        Matter.Body.setAngle(this.leftWallBody, this.angle);
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);
        
       World.add(world,this.bottomBody);
       World.add(world,this.leftWallBody);
       World.add(world,this.rightWallBody);
    }
    display(){
        var pos = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;
      //  var angle = this.body.angle;

       

        push ();
        translate (pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.dustbinWidth,this.wallThickness);
        fill ("red");
        angleMode(RADIANS);
        pop ();

       push ();
       translate (posLeft.x,posLeft.y);
       rectMode(CENTER);
       angleMode(RADIANS);
       rotate (this.angle);
       fill ("purple");
       rect(0,0,this.wallThickness,this.dustbinHeight);
       pop ();

       push ();
       translate (posRight.x,posRight.y);
       rectMode(CENTER);
       angleMode(RADIANS);
       rotate (-1*this.angle);
       fill ("blue");
       rect (0,0,this.wallThickness,this.dustbinHeight);
       pop ();

    }
}