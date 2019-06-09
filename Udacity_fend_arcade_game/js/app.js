// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started

  // The image/sprite for our enemies, this uses
  // a helper we've provided to easily load images
  this.sprite = "images/enemy-bug.png";
  this.x = 0;
  this.y = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
  if (this.x < 550) {
    this.x = this.x + 1;
    if (Math.abs(this.x - player.x) <= 75 && this.y === player.y) {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }
  } else {
    this.x = -50;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor() {
    this.player = "images/char-boy.png";
    this.x = 200;
    this.y = 396;
  }

  update(dt) {
    this.x = this.x + 0;
    this.y = this.y + 0;
  }

  render() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
  }

  handleInput(move) {
    if (move === "left") {
      if (this.x > 0) {
        this.x = this.x - 100;
      }
    } else if (move === "up") {
      if (this.y > 0) {
        this.y = this.y - 12 * 7;
        if (this.y < 60) {
          setTimeout(() => {
            alert("Hurray! You won");
            window.location.reload();
          }, 100);
        }
      }
    } else if (move === "right") {
      if (this.x < 400) {
        this.x = this.x + 100;
      }
    } else if (move === "down") {
      if (this.y < 396) {
        this.y = this.y + 12 * 7;
      }
    } else {
      return;
    }
  }
}

// Now instantiate your objects.
let enemy1 = new Enemy();
enemy1.x = 0;
enemy1.y = 60;

let enemy2 = new Enemy();
enemy2.x = -300;
enemy2.y = 144;

let enemy3 = new Enemy();
enemy3.x = -80;
enemy3.y = 228;

let enemy4 = new Enemy();
enemy4.x = -400;
enemy4.y = 312;

let enemy5 = new Enemy();
enemy5.x = -100;
enemy5.y = 396;

// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];

// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
