export default ({
  p5,
  el = "iddoelemento",
  fcolor = "#000000",
  bgcolor = "#FFFFFF",
}) => {
  let sketch = function (p) {
    p.primeira = true;

    p.setup = function () {
      p.createCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
      p.background(bgcolor);
      p.stroke(fcolor);

      p.strokeWeight(1);
    };

    p.r1 = document.getElementById(el).clientWidth / 1.7;
    p.r2 = p.r1 + 80;
    p.centroY = 0;
    p.direction = 1;
    p.count = 0;
    p.step = 0.004;

    p.a = 0;

    p.draw = function () {
      // Acelera o desenho
      if (p.primeira) {
        for (let n = 0; n < 2000; n++) {
          p.push();
          p.translate(-document.getElementById(el).clientWidth / 1.7, 0);

          p.centroY = document.getElementById(el).clientHeight / 2;

          if (p.r1 < document.getElementById(el).clientWidth * 2) {
            p.line(
              p.cos(p.a) * p.r1,
              p.sin(p.a) * p.r1 + p.centroY,
              p.cos(p.a) * p.r2,
              p.sin(p.a) * p.r2 + p.centroY
            );
            p.count++;
            p.a = p.a + p.step * p.direction;

            if (
              p.a > Math.PI / 9 ||
              p.a < -Math.PI / 9 ||
              p.count > 80 + Math.random() * 220
            ) {
              p.count = 0;
              p.step = 0.001 + Math.random() / 290;
              p.r1 = p.r2 + 2;
              p.r2 = p.r1 + 10 + Math.random() * 110;

              if (
                p.a > Math.PI / 9 ||
                p.a < -Math.PI / 9 ||
                Math.random() > 0.5
              ) {
                p.direction *= -1;
                p.a = p.a + p.step * p.direction;
                //console.log(p.a);
              }
            }
          }

          p.pop();
        }

        p.primeira = false;
      }

      p.push();
      p.translate(-document.getElementById(el).clientWidth / 1.7, 0);

      p.centroY = document.getElementById(el).clientHeight / 2;

      if (p.r1 < document.getElementById(el).clientWidth * 2) {
        p.line(
          p.cos(p.a) * p.r1,
          p.sin(p.a) * p.r1 + p.centroY,
          p.cos(p.a) * p.r2,
          p.sin(p.a) * p.r2 + p.centroY
        );
        p.count++;
        p.a = p.a + p.step * p.direction;

        if (
          p.a > Math.PI / 9 ||
          p.a < -Math.PI / 9 ||
          p.count > 80 + Math.random() * 220
        ) {
          p.count = 0;
          p.step = 0.001 + Math.random() / 290;
          p.r1 = p.r2 + 2;
          p.r2 = p.r1 + 10 + Math.random() * 110;

          if (p.a > Math.PI / 9 || p.a < -Math.PI / 9 || Math.random() > 0.5) {
            p.direction *= -1;
            p.a = p.a + p.step * p.direction;
            //console.log(p.a);
          }
        }
      }

      p.pop();
    };

    p.windowResized = function () {
      p.background(bgcolor);
      p.r1 = document.getElementById(el).clientWidth / 1.7;
      p.r2 = p.r1 + 80;
      p.centroY = 0;
      p.direction = 1;
      p.count = 0;
      p.step = 0.004;
      p.primeira = true;
      p.a = 0;

      p.resizeCanvas(
        document.getElementById(el).clientWidth,
        document.getElementById(el).clientHeight
      );
    };
  };

  return new p5(sketch, el);
};
