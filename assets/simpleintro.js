curva = function (x, y, r1, r2, s, c) {
  for (let a = 0; a < 2 * Math.PI; a = a + s) {
    if (c) {
      noFill();
      stroke("#FF0000");
    } else {
      noFill();
      stroke("#cccccc");
    }
    line(
      Math.cos(a) * r1 + x,
      Math.sin(a) * r1 + y,
      Math.cos(a) * r2 + x,
      Math.sin(a) * r2 + y
    );
  }
};

function rotateText(x, y, radius, initdeg, txt, sp, c) {
  chars = txt.split("");

  charSpacingAngleDeg = 4;

  if (typeof sp != "undefined" && sp != null && sp != "") {
    charSpacingAngleDeg = sp;
  }

  textAlign(CENTER, BASELINE);
  textSize(10);

  if (c) {
    noStroke();
    fill("red");
  } else {
    noStroke();
    fill("black");
  }

  push();
  translate(x, y);

  // First rotate half back so that middle char will come in the center
  //rotate(radians(-chars.length * charSpacingAngleDeg / 2))
  rotate(radians(initdeg));

  for (let i = 0; i < chars.length; i++) {
    text(chars[i], 0, -radius);
    rotate(radians(charSpacingAngleDeg));
  }

  pop();
}

let prop = 0;

function setup() {
  let canv = createCanvas(windowWidth, windowHeight);
  canv.parent("interage");
  background(255);
  stroke(1);
  color(0);

  prop = windowWidth / 1450;
}

windowResized = function () {
  prop = windowWidth / 1450;

  canv = resizeCanvas(windowWidth, windowHeight);
  canv.parent("interage");
};

let act = [];
act[1] = false;
act[2] = false;
act[3] = false;
act[4] = false;
act[5] = false;
act[6] = false;
act[7] = false;
act[8] = false;
act[9] = false;
act[10] = false;

function draw() {
  background(255);

  mx = (mouseX - windowWidth / 2) / 10;
  my = (mouseY - windowHeight / 2) / 10;

  push();
  scale(prop);

  if (mouseX < 420 && mouseY > 400 && mouseY < 600) {
    act[6] = true;
  } else {
    act[6] = false;
  }

  if (mouseX < 420 && mouseY >= 600) {
    act[9] = true;
  } else {
    act[9] = false;
  }

  if (mouseX < 420 && mouseY <= 400 && mouseY > 200) {
    act[1] = true;
  } else {
    act[1] = false;
  }

  if (mouseX < 300 && mouseY <= 200) {
    act[10] = true;
  } else {
    act[10] = false;
  }

  if (
    (mouseX >= 420 && mouseX < 610 && mouseY < 420) ||
    (mouseX > 750 && mouseX < 950 && mouseY >= 200 && mouseY < 400)
  ) {
    act[2] = true;
  } else {
    act[2] = false;
  }

  if (mouseX >= 770 && mouseX < 1200 && mouseY < 200) {
    act[4] = true;
  } else {
    act[4] = false;
  }

  if (mouseX >= 610 && mouseX < 750 && mouseY >= 200 && mouseY < 400) {
    act[5] = true;
  } else {
    act[5] = false;
  }

  if (mouseX >= 420 && mouseX < 1000 && mouseY >= 400) {
    act[3] = true;
  } else {
    act[3] = false;
  }

  if (mouseX >= 1000 && mouseY >= 400) {
    act[8] = true;
  } else {
    act[8] = false;
  }

  if (
    (mouseX >= 1200 && mouseY > 200 && mouseY < 400) ||
    (mouseX > 1200 && mouseY < 200)
  ) {
    act[7] = true;
  } else {
    act[7] = false;
  }

  // 1
  curva(20 + mx / 5, 20, 400, 430, 0.02, act[1]);

  // 2
  curva(400 + mx / 2, 450, 300, 380, 0.04, act[2]);

  // 3
  curva(700 + mx / 8, 1200, 700, 810, 0.01, act[3]);

  // 4
  curva(1200 + mx / 1.5, -800, 1000, 1070, 0.006, act[4]);

  // 5
  curva(2000 + mx / 6, 350, 1340, 1470, 0.003, act[5]);

  // 6
  curva(-10 + mx / 3, 820, 540, 590, 0.006, act[6]);

  // 8
  curva(1200 + mx / 8, 650, 280, 320, 0.04, act[8]);

  // 7
  curva(2850 + mx * 2, 1250, 2040, 2070, 0.002, act[7]);

  // 9
  curva(-480 + mx / 15, 1220, 880, 910, 0.003, act[9]);

  // 10
  curva(-60 + mx * 1.4, -120, 200, 300, 0.01, act[10]);

  // 1
  rotateText(20 + mx / 4, 20, 445, 125, "POLÍTICAS DA VISUALIDADE", 2, act[1]);

  // 2
  rotateText(400 + mx / 2, 450, 390, 55, "LINGUAGEM GRÁFICA", 3, act[2]);

  // 3
  rotateText(700 + mx / 8, 1200, 670, 325, "ESTUDOS DE GÊNERO", 1.4, act[3]);

  // 4
  rotateText(1200 + mx / 1.5, -800, 1080, 195, "MEMÓRIA GRÁFICA", 1, act[4]);

  // 5
  rotateText(2000 + mx / 6, 350, 1480, 265, "PENSAMENTO CRÍTICO", 0.6, act[5]);

  // 6
  rotateText(-10 + mx / 3, 820, 600, 4, "RETÓRICA DA VISUALIDADE", 1, act[6]);

  // 8
  rotateText(
    1200 + mx / 8,
    650,
    250,
    250,
    "ARQUEOLOGIA E PRESERVAÇÃO DIGITAL",
    1.7,
    act[8]
  );

  // 7
  rotateText(2850 + mx * 2, 1250, 2080, 293, "HUMANISMO DE DADOS", 0.3, act[7]);

  // 9
  rotateText(
    -480 + mx / 15,
    1220,
    860,
    40,
    "DIVULGAÇÃO CIENTÍFICA",
    0.6,
    act[9]
  );

  // 10
  rotateText(
    -60 + mx * 1.4,
    -120,
    310,
    120,
    "OBSERVATÓRIO DE DI",
    1.3,
    act[10]
  );

  pop();
}
