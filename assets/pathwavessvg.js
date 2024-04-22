export default ({

    el = 'iddoelemento',
    fcolor = '#000000',
    bgcolor = '#FFFFFF',
    iter = 600,

}) => {

    let precision = 0.03;
    let itera = iter;
    let windowWidth = 2000;
    let windowHeight = 400;
    let corA = fcolor;
    let corB = bgcolor;

    let trilhas = [];
    let cor = corA;
    let count = 0;

    for (let k = 0; k < 16; k++) {
        trilhas[k] = {
        detax: 0,
        deltay: 0,
        newr: 0,
        a: Math.random() * (2 * Math.PI),
        r: 80 + Math.random() * 180,
        esp: Math.random() * 150,
        step: Math.random() * 0.1,
        rx: 100,
        ry: 100,
        dir: 1,
        p1x: 0,
        p1y: 0,
        p2x: 0,
        p2y: 0,
        };

        trilhas[k].rx = Math.random() * windowWidth;
        trilhas[k].ry = Math.random() * windowHeight;
    }

    let drawitself = function (arr) {
        count++;
        let svgc = "";

        arr.p1x = arr.rx + Math.cos(arr.a) * arr.r;
        arr.p1y = arr.ry + Math.sin(arr.a) * arr.r;
        arr.p2x = arr.rx + Math.cos(arr.a) * (arr.r + arr.esp);
        arr.p2y = arr.ry + Math.sin(arr.a) * (arr.r + arr.esp);

        svgc = `<line x1="${arr.p1x}" y1="${arr.p1y}" x2="${arr.p2x}" y2="${arr.p2y}" style="stroke:${cor}; stroke-width:1"/>`;

        if (Math.random() * 100 > 98) {
        arr.newr = parseInt(Math.random() * 150);

        arr.deltax =
            Math.cos(arr.a) * arr.r + Math.cos(arr.a) * (arr.newr + arr.esp);
        arr.deltay =
            Math.sin(arr.a) * arr.r + Math.sin(arr.a) * (arr.newr + arr.esp);

        arr.r = arr.newr;
        arr.rx = arr.rx + arr.deltax;
        arr.ry = arr.ry + arr.deltay;

        arr.a = arr.a - Math.PI;
        arr.dir = arr.dir * -1;
        arr.step = Math.random() * precision;
        }

        arr.a = arr.a + arr.dir * arr.step;

        return svgc;
    };

    let codefinal = `<svg xmlns="http://www.w3.org/2000/svg" id="pathwaves" style='width: 100%; height: 100%;' viewBox="0 0 2000 400">`;

    for (let p = 0; p < itera; p++) {
        if (count > 2000) {
        if (cor == corA) {
            cor = corB;
        } else {
            cor = corA;
        }

        count = 0;
        }

        for (let z = 0; z < 16; z++) {
        codefinal += drawitself(trilhas[z]);
        }
    }

    codefinal += `</svg>`;

    document.getElementById(el).innerHTML = codefinal;

};