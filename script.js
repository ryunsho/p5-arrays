// Push: https://www.w3schools.com/jsref/jsref_push.asp
// For loop: https://p5js.org/reference/p5/for/
// Arrays: https://www.w3schools.com/jsref/jsref_obj_array.asp

var emojis = ["🌧️", "💧", "🌈", "⚡","☄️","☁️", "❄️", "🌟", "✨"];
var particles =[];
// variables are arrays (array reference)

function setup() {
    createCanvas(windowWidth, windowHeight);
    textSize(30);
    
}

function draw() {
    background(0, 100);

    if (frameCount % 10 === 0) {
        var emoji = {
            symbol: random(emojis),
            x: random(width),
            y: 0,
            speed: random(1, 5),
            fall: function() {
                this.y += this.speed;
            },
            show: function() {
                fill(255);
                text(this.symbol, this.x, this.y);
            }
        }
        particles.push(emoji);
    }
    for (var i = 0; i < particles.length; i++) { // for loop reference
        particles[i].fall();
        particles[i].show();
    }
    particles = particles.filter(function(emoj) {
        return emoj.y < height;
    });
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}