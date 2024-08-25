const rescale = function ([a, b], [c, d]) {
  return function (e) {
    return ((e - a) / (b - a)) * (d - c) + c;
  };
};

let rx;
let mmX;
let mmY;

curva = function (x, y, r1, r2, s, c) {
  for (let a = 0; a < 2 * Math.PI; a = a + s) {
    if (c) {
      noFill();
      stroke(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--cor-menu-off-bg"
        )
      );
    } else {
      noFill();
      stroke(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--cor-leve"
        ) + "55"
      );
    }
    line(
      Math.cos(a) * r1 + x,
      Math.sin(a) * r1 + y,
      Math.cos(a) * r2 + x,
      Math.sin(a) * r2 + y
    );
  }
};

let vai = [];
vai[1] = Math.random();
vai[2] = Math.random();
vai[3] = Math.random();
vai[4] = Math.random();
vai[5] = Math.random();
vai[6] = Math.random();
vai[7] = Math.random();
vai[8] = Math.random();
vai[9] = Math.random();
vai[10] = Math.random();
vai[11] = Math.random();
vai[12] = Math.random();

let prop = 0;

function setup() {
  let canv = createCanvas(windowWidth, windowHeight);
  canv.parent("interage");
  background(
    getComputedStyle(document.documentElement).getPropertyValue("--cor-invert")
  );

  if (window.innerWidth >= window.innerHeight) {
    prop = windowWidth / 1350;

    rx = rescale([0, 1350], [0, windowWidth]);
    ry = rescale([0, 700], [0, windowHeight]);
  } else {
    prop = windowWidth / 700;

    ry = rescale([0, 700], [0, windowWidth]);
    rx = rescale([0, 1350], [0, windowHeight]);
  }
}

windowResized = function () {
  if (window.innerWidth >= window.innerHeight) {
    prop = windowWidth / 1350;

    rx = rescale([0, 1350], [0, windowWidth]);
    ry = rescale([0, 700], [0, windowHeight]);
  } else {
    prop = windowWidth / 700;

    ry = rescale([0, 700], [0, windowWidth]);
    rx = rescale([0, 1350], [0, windowHeight]);
  }

  canv = resizeCanvas(windowWidth, windowHeight);
  canv.parent("interage");
};

let sn_x = -200;
let lm_x = -10;
let crescendo = 1;

function draw() {
  background(255);

  mx = (mouseX - windowWidth / 2) / 10;
  my = (mouseY - windowHeight / 2) / 10;

  push();
  scale(prop);

  if (window.innerWidth < window.innerHeight) {
    translate(windowWidth * 1.5, 0);
    rotate(Math.PI / 2);

    mmX = mouseY;
    mmY = windowWidth - mouseX;
  } else {
    mmX = mouseX;
    mmY = mouseY;
  }

  if (vai[1] > 0.7) {
    // 1
    curva(20 + mx / 5, 20, 400, 430, 0.02, act[1]);
  }

  if (vai[2] > 0.7) {
    // 2
    curva(400 + mx / 2, 450, 300, 380, 0.04, act[2]);
  }

  if (vai[3] > 0.7) {
    // 3
    curva(700 + mx / 8, 1200, 700, 810, 0.01, act[3]);
  }

  if (vai[4] > 0.7) {
    // 4
    curva(1200 + mx / 1.5, -800, 1000, 1070, 0.006, act[4]);
  }

  if (vai[5] > 0.7) {
    // 5
    curva(2000 + mx / 6, 350, 1340, 1470, 0.003, act[5]);
  }

  if (vai[6] > 0.7) {
    // 6
    curva(-10 + mx / 3, 820, 540, 590, 0.006, act[6]);
  }

  if (vai[7] > 0.7) {
    // 8
    curva(1200 + mx / 8, 650, 280, 320, 0.04, act[8]);
  }

  if (vai[8] > 0.7) {
    // 7
    curva(2850 + mx * 2, 1250, 2040, 2070, 0.002, act[7]);
  }

  if (vai[9] > 0.7) {
    // 9
    curva(-480 + mx / 15, 1220, 880, 910, 0.003, act[9]);
  }

  if (vai[10] > 0.7) {
    // 10
    curva(-60 + mx * 1.4, -120, 200, 300, 0.01, act[10]);
  }

  if (vai[11] > 0.7) {
    // 11
    curva(2300 + mx / 10, -450, 1200, 1350, 0.003, act[11]);
  }

  if (vai[12] > 0.7) {
    // 12
    curva(850 + mx / 4, 320, 100, 140, 0.03, act[12]);
  }

  pop();
}
