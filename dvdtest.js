// The position of the ball
var x = 25;

// How far the ball moves every time
var speed = 3;

var draw = function() {

    background(47, 222, 126);

    // The ball
    fill(48, 46, 48);
    ellipse(x, 200, 50, 50);

    // Moves the ball
    x = x + speed;

    if (x > 375) {
        speed = -speed;
    } else if (x < 214) {
        speed = -speed;
    }

};
