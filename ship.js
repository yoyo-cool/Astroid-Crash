class ship{
  constructor(x, y, width, height, angle) {
      this.body = createSprite(x, y, width, height);
      this.width = width;
      this.height = height;
      this.image = loadImage("ship.png");
      this.body.addImage(this.image)
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}