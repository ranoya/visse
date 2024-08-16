export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
  midcolor = "#FF0000",
}) => {
  let sketch = function (p) {
    p.curva = function (x, y, r1, r2, s, c) {
      for (let a = 0; a < 2 * Math.PI; a = a + s) {
        if (c) {
          p.noFill();
          p.stroke(midcolor);
        } else {
          p.noFill();
          p.stroke(fcolor);
        }
        p.line(
          Math.cos(a) * r1 + x,
          Math.sin(a) * r1 + y,
          Math.cos(a) * r2 + x,
          Math.sin(a) * r2 + y
        );
      }
    };

    p.rotateText = function (x, y, radius, initdeg, txt, sp, c) {
      let chars = txt.split("");

      let charSpacingAngleDeg = 4;

      if (typeof sp != "undefined" && sp != null && sp != "") {
        charSpacingAngleDeg = sp;
      }

      p.textAlign(CENTER, BASELINE);
      p.textSize(10);

      if (c) {
        p.noStroke();
        p.fill(midcolor);
      } else {
        p.noStroke();
        p.fill(fcolor);
      }

      p.push();
      p.translate(x, y);

      // First rotate half back so that middle char will come in the center
      //rotate(radians(-chars.length * charSpacingAngleDeg / 2))
      p.rotate(p.radians(initdeg));

      for (let i = 0; i < chars.length; i++) {
        p.text(chars[i], 0, -radius);
        p.rotate(radians(charSpacingAngleDeg));
      }

      p.pop();
    };

    p.prop = 0;

    p.setup = function () {
      p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.strokeWeight(1);

      p.width = document.getElementById(el).clientWidth;
      p.height = document.getElementById(el).clientHeight;

      p.prop = p.width / 1350;

      p.background(bgcolor);
    };

    p.act = [];
    p.act[1] = false;
    p.act[2] = false;
    p.act[3] = false;
    p.act[4] = false;
    p.act[5] = false;
    p.act[6] = false;
    p.act[7] = false;
    p.act[8] = false;
    p.act[9] = false;
    p.act[10] = false;

    p.draw = function () {
      p.background(bgcolor);

      let mx = (p.mouseX - p.width / 2) / 10;
      let my = (p.mouseY - p.height / 2) / 10;

      p.push();
      p.scale(p.prop);

      if (p.mouseX < 420 && p.mouseY > 400 && p.mouseY < 600) {
        p.act[6] = true;
      } else {
        p.act[6] = false;
      }

      if (p.mouseX < 420 && p.mouseY >= 600) {
        p.act[9] = true;
      } else {
        p.act[9] = false;
      }

      if (p.mouseX < 420 && p.mouseY <= 400 && p.mouseY > 200) {
        p.act[1] = true;
      } else {
        p.act[1] = false;
      }

      if (p.mouseX < 300 && p.mouseY <= 200) {
        p.act[10] = true;
      } else {
        p.act[10] = false;
      }

      if (
        (p.mouseX >= 420 && p.mouseX < 610 && p.mouseY < 420) ||
        (p.mouseX > 750 && p.mouseX < 950 && p.mouseY >= 200 && p.mouseY < 400)
      ) {
        p.act[2] = true;
      } else {
        p.act[2] = false;
      }

      if (p.mouseX >= 770 && p.mouseX < 1200 && p.mouseY < 200) {
        p.act[4] = true;
      } else {
        p.act[4] = false;
      }

      if (
        p.mouseX >= 610 &&
        p.mouseX < 750 &&
        p.mouseY >= 200 &&
        p.mouseY < 400
      ) {
        p.act[5] = true;
      } else {
        p.act[5] = false;
      }

      if (p.mouseX >= 420 && p.mouseX < 1000 && p.mouseY >= 400) {
        p.act[3] = true;
      } else {
        p.act[3] = false;
      }

      if (p.mouseX >= 1000 && p.mouseY >= 400) {
        p.act[8] = true;
      } else {
        p.act[8] = false;
      }

      if (
        (p.mouseX >= 1200 && p.mouseY > 200 && p.mouseY < 400) ||
        (p.mouseX > 1200 && p.mouseY < 200)
      ) {
        p.act[7] = true;
      } else {
        p.act[7] = false;
      }

      // 1
      p.curva(20 + p.mx / 5, 20, 400, 430, 0.02, p.act[1]);

      // 2
      p.curva(400 + p.mx / 2, 450, 300, 380, 0.04, p.act[2]);

      // 3
      p.curva(700 + p.mx / 8, 1200, 700, 810, 0.01, p.act[3]);

      // 4
      p.curva(1200 + p.mx / 1.5, -800, 1000, 1070, 0.006, p.act[4]);

      // 5
      p.curva(2000 + p.mx / 6, 350, 1340, 1470, 0.003, p.act[5]);

      // 6
      p.curva(-10 + p.mx / 3, 820, 540, 590, 0.006, p.act[6]);

      // 8
      p.curva(1200 + p.mx / 8, 650, 280, 320, 0.04, p.act[8]);

      // 7
      p.curva(2850 + p.mx * 2, 1250, 2040, 2070, 0.002, p.act[7]);

      // 9
      p.curva(-480 + p.mx / 15, 1220, 880, 910, 0.003, p.act[9]);

      // 10
      p.curva(-60 + p.mx * 1.4, -120, 200, 300, 0.01, p.act[10]);

      // 1
      p.rotateText(
        20 + p.mx / 4,
        20,
        445,
        125,
        "POLÍTICAS DA VISUALIDADE",
        2,
        p.act[1]
      );

      // 2
      p.rotateText(
        400 + p.mx / 2,
        450,
        390,
        55,
        "LINGUAGEM GRÁFICA",
        3,
        p.act[2]
      );

      // 3
      p.rotateText(
        700 + p.mx / 8,
        1200,
        670,
        325,
        "ESTUDOS DE GÊNERO",
        1.4,
        p.act[3]
      );

      // 4
      p.rotateText(
        1200 + p.mx / 1.5,
        -800,
        1080,
        195,
        "MEMÓRIA GRÁFICA",
        1,
        p.act[4]
      );

      // 5
      p.rotateText(
        2000 + p.mx / 6,
        350,
        1480,
        265,
        "PENSAMENTO CRÍTICO",
        0.6,
        p.act[5]
      );

      // 6
      p.rotateText(
        -10 + p.mx / 3,
        820,
        600,
        4,
        "RETÓRICA DA VISUALIDADE",
        1,
        p.act[6]
      );

      // 8
      p.rotateText(
        1200 + p.mx / 8,
        650,
        250,
        250,
        "ARQUEOLOGIA E PRESERVAÇÃO DIGITAL",
        1.7,
        p.act[8]
      );

      // 7
      p.rotateText(
        2850 + p.mx * 2,
        1250,
        2080,
        293,
        "HUMANISMO DE DADOS",
        0.3,
        p.act[7]
      );

      // 9
      p.rotateText(
        -480 + p.mx / 15,
        1220,
        860,
        40,
        "DIVULGAÇÃO CIENTÍFICA",
        0.6,
        p.act[9]
      );

      // 10
      p.rotateText(
        -60 + p.mx * 1.4,
        -120,
        310,
        120,
        "OBSERVATÓRIO DE DI",
        1.3,
        p.act[10]
      );

      p.pop();
    };

    p.windowResized = function () {
      p.width = document.getElementById(el).clientWidth;
      p.height = document.getElementById(el).clientHeight;

      p.prop = p.width / 1350;

      p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
