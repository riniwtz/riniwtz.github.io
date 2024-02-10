// Daniel Shiffman
// http://codingtra.in
// https://youtu.be/CKeyIbT3vXI

let colors;

const fireworks = [];
let gravity;

function setup() {
  createCanvas(1280, 720);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  clear();
  colors = [
    color(146, 83, 161),
    color(240, 99, 164),
    color(45, 197, 244),
    color(252, 238, 33),
    color(241, 97, 100),
    color(112, 50, 126),
    color(164, 41, 99),
    color(11, 106, 136),
    color(248, 158, 79),
    color(146, 83, 161),
    color(236, 1, 90)
  ];
}

function draw() {
  // background(11, 106, 136, 25);
  clear();

  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }

  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}