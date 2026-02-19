import Sprite from "./sprite.js";

class Ball extends Sprite {
  //   constructor(x, y, width, height, color, dx, dy) {
  //     super(x, y, width, height, color, dx, dy);
  //   }

  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      // bounce off the left/right edges
      this.dx *= -1; // switch direction
    }

    if (this.y < 0) {
      // bounce off the top edge
      this.dy *= -1; // switch direction
    } else if (this.y + this.height > canvasHeight) {
      // fall through the bottom edge!
      return false;
    }

    return true;
  }

  collides(other) {
    if (this.intersects(other)) {
      this.dy *= -1; // switch direction
    }
  }
}

export default Ball;
