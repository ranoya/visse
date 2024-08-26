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

function rotateText(x, y, radius, initdeg, txt, sp, c, r) {
  charsi = txt.split("");

  chars = charsi;

  if (r) {
    chars = charsi.reverse();
  }

  charSpacingAngleDeg = 4;

  if (typeof sp != "undefined" && sp != null && sp != "") {
    charSpacingAngleDeg = sp;
  }

  textAlign(CENTER, BASELINE);
  textSize(12);

  if (c) {
    noStroke();
    textSize(14);
    fill(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--cor-shadow"
      )
    );
  } else {
    noStroke();
    fill(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--cor-texto"
      ) + 77
    );
  }

  push();
  translate(x, y);

  // First rotate half back so that middle char will come in the center
  //rotate(radians(-chars.length * charSpacingAngleDeg / 2))
  rotate(radians(initdeg));

  for (let i = 0; i < chars.length; i++) {
    if (r) {
      text(chars[i], 0, 12 + radius);
    } else {
      text(chars[i], 0, -radius);
    }
    rotate(radians(charSpacingAngleDeg));
  }

  pop();
}

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
act[11] = false;
act[12] = false;

let sn_x = -200;
let lm_x = -10;
let crescendo = 1;

function draw() {
  background(255);

  if (window.innerWidth >= window.innerHeight) {
    stroke(
      getComputedStyle(document.documentElement).getPropertyValue("--cor-hv1") +
        12
    );
    sn_x = -500;
    for (let ln_x = 0; ln_x < lm_x; ln_x = ln_x + 0.5) {
      line(
        Math.cos(sn_x) * (130 + crescendo) + ln_x,
        Math.sin(sn_x) * (130 + crescendo) + windowHeight / 2,
        Math.cos(sn_x) * (470 + crescendo) + ln_x,
        Math.sin(sn_x) * (470 + crescendo) + windowHeight / 2
      );

      sn_x = sn_x + 0.01;
    }

    crescendo++;
    lm_x = lm_x + 5;

    if (lm_x > 1800) {
      lm_x = 1800;
    }

    if (crescendo > 1800) {
      crescendo = 1;
      lm_x = -10;
    }
  }

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

  if (mmX < rx(420) && mmY > ry(400) && mmY < ry(600)) {
    act[6] = true;
  } else {
    act[6] = false;
  }

  if (mmX < rx(420) && mmY >= ry(600)) {
    act[9] = true;
  } else {
    act[9] = false;
  }

  if (mmX < rx(420) && mmY <= ry(400) && mmY > ry(200)) {
    act[1] = true;
  } else {
    act[1] = false;
  }

  if (mmX < rx(300) && mmY <= ry(200)) {
    act[10] = true;
  } else {
    act[10] = false;
  }

  if (mmX >= rx(420) && mmX < rx(610) && mmY < ry(420)) {
    act[5] = true;
  } else {
    act[5] = false;
  }

  if (mmX >= rx(670) && mmX < rx(1050) && mmY < ry(200)) {
    act[4] = true;
  } else {
    act[4] = false;
  }

  if (mmX >= rx(1050) && mmY < ry(200)) {
    act[11] = true;
  } else {
    act[11] = false;
  }

  if (mmX >= rx(610) && mmX < rx(800) && mmY >= ry(200) && mmY < ry(400)) {
    act[2] = true;
  } else {
    act[2] = false;
  }

  if (mmX >= rx(420) && mmX < rx(1000) && mmY >= ry(400)) {
    act[3] = true;
  } else {
    act[3] = false;
  }

  if (mmX >= rx(1000) && mmY >= ry(400)) {
    act[8] = true;
  } else {
    act[8] = false;
  }

  if (mmX >= rx(1000) && mmY > ry(200) && mmY < ry(400)) {
    act[7] = true;
  } else {
    act[7] = false;
  }

  if (mmX < rx(1000) && mmX >= rx(800) && mmY > ry(200) && mmY < ry(400)) {
    act[12] = true;
  } else {
    act[12] = false;
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

  // 11
  curva(2300 + mx / 10, -450, 1200, 1350, 0.003, act[11]);

  // 12
  curva(850 + mx / 4, 320, 100, 140, 0.03, act[12]);

  if (window.innerWidth >= window.innerHeight) {
    // 1
    rotateText(
      20 + mx / 4,
      20,
      445,
      295,
      "POLÍTICAS DA VISUALIDADE",
      2,
      act[1],
      true
    );

    // 2
    rotateText(400 + mx / 2, 450, 390, 55, "LINGUAGENS GRÁFICAS", 3, act[2]);

    // 3
    rotateText(700 + mx / 8, 1200, 670, 325, "ESTUDOS DE GÊNERO", 1.4, act[3]);

    // 4
    rotateText(
      1200 + mx / 1.5,
      -800,
      1080,
      20,
      "MEMÓRIA GRÁFICA",
      1,
      act[4],
      true
    );

    // 5
    rotateText(
      2000 + mx / 6,
      350,
      1480,
      265,
      "PENSAMENTO CRÍTICO",
      0.6,
      act[5]
    );

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
    rotateText(
      2850 + mx * 2,
      1250,
      2080,
      293,
      "HUMANISMO DE DADOS",
      0.3,
      act[7]
    );

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
      300,
      "OBSERVATÓRIO DE DI",
      1.3,
      act[10],
      true
    );

    // 11
    rotateText(
      2300 + mx / 10,
      -450,
      1370,
      61,
      "DESIGN+EDUCAÇÃO",
      0.6,
      act[11],
      true
    );

    // 12
    rotateText(850 + mx / 4, 320, 80, 20, "INOVAÇÃO", 8);
  } else {
    // 1
    rotateText(
      20 + mx / 4,
      20,
      445,
      295,
      "POLÍTICAS DA VISUALIDADE",
      2,
      act[1],
      true
    );

    // 2
    rotateText(400 + mx / 2, 450, 390, 338, "LINGUAGENS GRÁFICAS", 3, act[2]);

    // 3
    rotateText(700 + mx / 8, 1200, 670, 325, "ESTUDOS DE GÊNERO", 1.4, act[3]);

    // 4
    rotateText(1200 + mx / 1.5, -800, 980, 203, "MEMÓRIA GRÁFICA", 1, act[4]);

    // 5
    rotateText(
      2000 + mx / 6,
      350,
      1480,
      265,
      "PENSAMENTO CRÍTICO",
      0.6,
      act[5]
    );

    // 6
    rotateText(
      -10 + mx / 3,
      820,
      600,
      184,
      "RETÓRICA DA VISUALIDADE",
      1,
      act[6],
      true
    );

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
    rotateText(
      2850 + mx * 2,
      1250,
      2080,
      293,
      "HUMANISMO DE DADOS",
      0.3,
      act[7]
    );

    // 9
    rotateText(
      -480 + mx / 15,
      1220,
      920,
      218,
      "DIVULGAÇÃO CIENTÍFICA",
      0.6,
      act[9],
      true
    );

    // 10
    rotateText(
      -60 + mx * 1.4,
      -120,
      310,
      300,
      "OBSERVATÓRIO DE DI",
      1.3,
      act[10],
      true
    );

    // 11
    rotateText(
      2300 + mx / 10,
      -450,
      1370,
      238,
      "DESIGN+EDUCAÇÃO",
      0.6,
      act[11]
    );

    // 12
    rotateText(850 + mx / 4, 320, 80, 313, "INOVAÇÃO", 8, true);
  }

  pop();
}
