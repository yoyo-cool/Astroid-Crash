class meteor{
    constructor(x, y, width, height, angle) {
        this.body = createSprite(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("meteor.png");
        this.body.addImage(this.image)
        this.body.scale=0.2
        this.body.velocityX=-1.5
      }

      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}