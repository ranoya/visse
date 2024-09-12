/**
 * Logotipo Generativo do VISSE rev.2
 * Guilherme Ranoya, 2022
 *
 * Mais informaÃ§Ãµes em https: //observablehq.com/@ranoya/logovisse-v2
 *
 */

let logovisse_lean = function (obj) {
  let mysvg = `<svg class="logovisse" id="lettervisse" viewBox="0 0 1500 475">`;

  let corfrente = "#444444";

  let myobj = {};

  if (typeof obj != "undefined") {
    if (typeof obj.corBackground != "undefined") {
      mysvg += `<rect x='0' y='0' width='1500' height='500' style='fill: ${obj.corBackground}' />`;
      myobj.corBackground = obj.corBackground;
    }

    if (typeof obj.corPredominante != "undefined") {
      myobj.corPredominante = obj.corPredominante;
      corfrente = obj.corPredominante;
    }
  }

  mysvg += `

<rect x="577.877" y="128.704" width="67.195" height="216.575" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M677.371 323.384C692.877 338.023 716.289 347.347 742.484 347.347C789.173 347.347 827.022 317.726 827.022 281.187C827.022 244.721 789.326 215.146 742.767 215.027V263.093C755.285 263.213 765.386 271.268 765.386 281.187C765.386 291.18 755.132 299.282 742.484 299.282C729.836 299.282 719.583 291.18 719.583 281.187H719.569L677.371 323.384Z" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M808.162 154.734C792.656 140.096 769.244 130.772 743.049 130.772C696.36 130.772 658.511 160.393 658.511 196.932C658.511 233.397 696.208 262.972 742.766 263.091L742.766 215.025C730.249 214.906 720.148 206.851 720.148 196.932C720.148 186.938 730.401 178.837 743.049 178.837C755.697 178.837 765.951 186.938 765.951 196.932L765.964 196.932L808.162 154.734Z" style="fill: ${corfrente}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M845.358 323.384C860.865 338.023 884.277 347.347 910.471 347.347C957.16 347.347 995.009 317.726 995.009 281.187C995.009 244.721 957.313 215.146 910.754 215.027V263.093C923.272 263.213 933.373 271.268 933.373 281.187C933.373 291.18 923.12 299.282 910.471 299.282C897.823 299.282 887.57 291.18 887.57 281.187H887.556L845.358 323.384Z" style="fill: ${corfrente}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M976.149 154.734C960.643 140.096 937.231 130.772 911.036 130.772C864.348 130.772 826.499 160.393 826.499 196.932C826.499 233.397 864.195 262.972 910.754 263.091L910.754 215.025C898.236 214.906 888.135 206.851 888.135 196.932C888.135 186.938 898.388 178.837 911.036 178.837C923.685 178.837 933.938 186.938 933.938 196.932L933.952 196.932L976.149 154.734Z" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M534.363 149L513.986 128.623L493.609 149H534.363ZM535.363 150H492.609L473.609 169H554.363L535.363 150ZM555.363 170H472.609L453.609 189H548.637L561.5 176.137L555.363 170ZM547.637 190H452.609L433.609 209H528.637L547.637 190ZM527.637 210H432.609L413.609 229H508.637L527.637 210ZM507.637 230H412.609L393.609 249H488.637L507.637 230ZM487.637 250H392.609L392.227 250.382L391.845 250H296.817L315.817 269H468.637L487.637 250ZM467.637 270H316.817L335.817 289H448.637L467.637 270ZM447.637 290H336.817L355.817 309H428.637L447.637 290ZM427.637 310H356.817L375.817 329H408.637L427.637 310ZM407.637 330H376.817L392.178 345.36L392.227 345.311L392.277 345.36L407.637 330ZM225.266 269L244.266 250H192.11L211.11 269H225.266ZM212.11 270H224.266L218.188 276.078L212.11 270ZM191.11 249H245.266L264.266 230H172.11L191.11 249ZM171.11 229H265.266L270.542 223.724L275.817 229H370.845L351.845 210H189.238L170.674 228.564L171.11 229ZM190.238 209H350.845L331.845 190H209.238L190.238 209ZM210.238 189H330.845L311.845 170H229.092L222.954 176.137L223.028 176.21L210.238 189ZM230.092 169H310.845L291.845 150H249.092L230.092 169ZM250.092 149L270.469 128.623L290.845 149H250.092ZM371.845 230H276.817L295.817 249H390.845L371.845 230Z" style="fill: ${corfrente}" />


`;

  mysvg += seqblock(
    195,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,130);",
    myobj
  );

  mysvg += seqblock(
    131,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,205);",
    myobj
  );

  mysvg += seqblock(
    271,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,280);",
    myobj
  );

  return {
    svg: mysvg,
  };
};

let logovisse_border = function (obj) {
  let mysvg = `<svg class="logovisse" id="lettervisse" viewBox="0 0 1500 475">`;

  let corfrente = "#444444";

  let myobj = {};

  if (typeof obj != "undefined") {
    if (typeof obj.corBackground != "undefined") {
      mysvg += `<rect x='0' y='0' width='1500' height='500' style='fill: ${obj.corBackground}' />`;
      myobj.corBackground = obj.corBackground;
    }

    if (typeof obj.corPredominante != "undefined") {
      myobj.corPredominante = obj.corPredominante;
      corfrente = obj.corPredominante;
    }
  }

  mysvg += `<rect x="50" y="50" width="1400" height="375" stroke-width="20" stroke="${corfrente}" fill="none" />

<rect x="577.877" y="128.704" width="67.195" height="216.575" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M677.371 323.384C692.877 338.023 716.289 347.347 742.484 347.347C789.173 347.347 827.022 317.726 827.022 281.187C827.022 244.721 789.326 215.146 742.767 215.027V263.093C755.285 263.213 765.386 271.268 765.386 281.187C765.386 291.18 755.132 299.282 742.484 299.282C729.836 299.282 719.583 291.18 719.583 281.187H719.569L677.371 323.384Z" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M808.162 154.734C792.656 140.096 769.244 130.772 743.049 130.772C696.36 130.772 658.511 160.393 658.511 196.932C658.511 233.397 696.208 262.972 742.766 263.091L742.766 215.025C730.249 214.906 720.148 206.851 720.148 196.932C720.148 186.938 730.401 178.837 743.049 178.837C755.697 178.837 765.951 186.938 765.951 196.932L765.964 196.932L808.162 154.734Z" style="fill: ${corfrente}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M845.358 323.384C860.865 338.023 884.277 347.347 910.471 347.347C957.16 347.347 995.009 317.726 995.009 281.187C995.009 244.721 957.313 215.146 910.754 215.027V263.093C923.272 263.213 933.373 271.268 933.373 281.187C933.373 291.18 923.12 299.282 910.471 299.282C897.823 299.282 887.57 291.18 887.57 281.187H887.556L845.358 323.384Z" style="fill: ${corfrente}"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M976.149 154.734C960.643 140.096 937.231 130.772 911.036 130.772C864.348 130.772 826.499 160.393 826.499 196.932C826.499 233.397 864.195 262.972 910.754 263.091L910.754 215.025C898.236 214.906 888.135 206.851 888.135 196.932C888.135 186.938 898.388 178.837 911.036 178.837C923.685 178.837 933.938 186.938 933.938 196.932L933.952 196.932L976.149 154.734Z" style="fill: ${corfrente}" />
<path fill-rule="evenodd" clip-rule="evenodd" d="M534.363 149L513.986 128.623L493.609 149H534.363ZM535.363 150H492.609L473.609 169H554.363L535.363 150ZM555.363 170H472.609L453.609 189H548.637L561.5 176.137L555.363 170ZM547.637 190H452.609L433.609 209H528.637L547.637 190ZM527.637 210H432.609L413.609 229H508.637L527.637 210ZM507.637 230H412.609L393.609 249H488.637L507.637 230ZM487.637 250H392.609L392.227 250.382L391.845 250H296.817L315.817 269H468.637L487.637 250ZM467.637 270H316.817L335.817 289H448.637L467.637 270ZM447.637 290H336.817L355.817 309H428.637L447.637 290ZM427.637 310H356.817L375.817 329H408.637L427.637 310ZM407.637 330H376.817L392.178 345.36L392.227 345.311L392.277 345.36L407.637 330ZM225.266 269L244.266 250H192.11L211.11 269H225.266ZM212.11 270H224.266L218.188 276.078L212.11 270ZM191.11 249H245.266L264.266 230H172.11L191.11 249ZM171.11 229H265.266L270.542 223.724L275.817 229H370.845L351.845 210H189.238L170.674 228.564L171.11 229ZM190.238 209H350.845L331.845 190H209.238L190.238 209ZM210.238 189H330.845L311.845 170H229.092L222.954 176.137L223.028 176.21L210.238 189ZM230.092 169H310.845L291.845 150H249.092L230.092 169ZM250.092 149L270.469 128.623L290.845 149H250.092ZM371.845 230H276.817L295.817 249H390.845L371.845 230Z" style="fill: ${corfrente}" />


`;

  mysvg += seqblock(
    195,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,130);",
    myobj
  );

  mysvg += seqblock(
    131,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,205);",
    myobj
  );

  mysvg += seqblock(
    271,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,1011,280);",
    myobj
  );

  return {
    svg: mysvg,
  };
};

let sintesevisse_lean = function (obj) {
  let mysvg = `<svg class="logovisse" id="symbolvisse" viewBox="0 0 560 560">`;

  let corfrente = "#444444";

  let myobj = {};

  if (typeof obj != "undefined") {
    if (typeof obj.corBackground != "undefined") {
      mysvg += `<rect x='0' y='0' width='1500' height='560' style='fill: ${obj.corBackground}' />`;
      myobj.corBackground = obj.corBackground;
    }

    if (typeof obj.corPredominante != "undefined") {
      myobj.corPredominante = obj.corPredominante;
      corfrente = obj.corPredominante;
    }
  }

  mysvg += `

<path fill-rule="evenodd" clip-rule="evenodd" d="M441.689 121.377L421.312 101L400.935 121.377H441.689ZM442.689 122.377H399.935L380.935 141.377H461.689L442.689 122.377ZM462.689 142.377H379.935L360.935 161.377H455.963L468.826 148.514L462.689 142.377ZM454.963 162.377H359.935L340.935 181.377H435.963L454.963 162.377ZM434.963 182.377H339.935L320.935 201.377H415.963L434.963 182.377ZM414.963 202.377H319.935L300.935 221.377H395.963L414.963 202.377ZM394.963 222.377H299.935L299.553 222.759L299.172 222.377H204.143L223.143 241.377H375.963L394.963 222.377ZM374.963 242.377H224.143L243.143 261.377H355.963L374.963 242.377ZM354.963 262.377H244.143L263.143 281.377H335.963L354.963 262.377ZM334.963 282.377H264.143L283.143 301.377H315.963L334.963 282.377ZM314.963 302.377H284.143L299.504 317.737L299.553 317.688L299.603 317.737L314.963 302.377ZM132.592 241.377L151.592 222.377H99.4359L118.436 241.377H132.592ZM119.436 242.377H131.592L125.514 248.455L119.436 242.377ZM98.4359 221.377H152.592L171.592 202.377H79.4359L98.4359 221.377ZM78.4359 201.377H172.592L177.868 196.101L183.143 201.377H278.172L259.172 182.377H96.5641L78 200.941L78.4359 201.377ZM97.5641 181.377H258.172L239.172 162.377H116.564L97.5641 181.377ZM117.564 161.377H238.172L219.172 142.377H136.418L130.281 148.514L130.354 148.587L117.564 161.377ZM137.418 141.377H218.172L199.172 122.377H156.418L137.418 141.377ZM157.418 121.377H198.172L177.795 101L157.418 121.377ZM279.172 202.377H184.143L203.143 221.377H298.172L279.172 202.377Z" fill="${corfrente}"/>


`;

  mysvg += seqblock(
    290,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,180,385);",
    myobj
  );

  return {
    svg: mysvg,
  };
};

let sintesevisse_border = function (obj) {
  let mysvg = `<svg class="logovisse" id="symbolvisse" viewBox="0 0 704 704">`;

  let corfrente = "#444444";

  let myobj = {};

  if (typeof obj != "undefined") {
    if (typeof obj.corBackground != "undefined") {
      mysvg += `<rect x='0' y='0' width='1500' height='704' style='fill: ${obj.corBackground}' />`;
      myobj.corBackground = obj.corBackground;
    }

    if (typeof obj.corPredominante != "undefined") {
      myobj.corPredominante = obj.corPredominante;
      corfrente = obj.corPredominante;
    }
  }

  mysvg += `

<rect x="84" y="79" width="545" height="545" stroke="${corfrente}" stroke-width="30" fill="none" />

<path fill-rule="evenodd" clip-rule="evenodd" d="M520.689 193.377L500.312 173L479.935 193.377H520.689ZM521.689 194.377H478.935L459.935 213.377H540.689L521.689 194.377ZM541.689 214.377H458.935L439.935 233.377H534.963L547.826 220.514L541.689 214.377ZM533.963 234.377H438.935L419.935 253.377H514.963L533.963 234.377ZM513.963 254.377H418.935L399.935 273.377H494.963L513.963 254.377ZM493.963 274.377H398.935L379.935 293.377H474.963L493.963 274.377ZM473.963 294.377H378.935L378.553 294.759L378.172 294.377H283.143L302.143 313.377H454.963L473.963 294.377ZM453.963 314.377H303.143L322.143 333.377H434.963L453.963 314.377ZM433.963 334.377H323.143L342.143 353.377H414.963L433.963 334.377ZM413.963 354.377H343.143L362.143 373.377H394.963L413.963 354.377ZM393.963 374.377H363.143L378.504 389.737L378.553 389.688L378.603 389.737L393.963 374.377ZM211.592 313.377L230.592 294.377H178.436L197.436 313.377H211.592ZM198.436 314.377H210.592L204.514 320.455L198.436 314.377ZM177.436 293.377H231.592L250.592 274.377H158.436L177.436 293.377ZM157.436 273.377H251.592L256.868 268.101L262.143 273.377H357.172L338.172 254.377H175.564L157 272.941L157.436 273.377ZM176.564 253.377H337.172L318.172 234.377H195.564L176.564 253.377ZM196.564 233.377H317.172L298.172 214.377H215.418L209.281 220.514L209.354 220.587L196.564 233.377ZM216.418 213.377H297.172L278.172 194.377H235.418L216.418 213.377ZM236.418 193.377H277.172L256.795 173L236.418 193.377ZM358.172 274.377H263.143L282.143 293.377H377.172L358.172 274.377Z" fill="${corfrente}"/>


`;

  mysvg += seqblock(
    270,
    20,
    "transform: matrix(1.00,0.00,0.00,1.00,270,458);",
    myobj
  );

  return {
    svg: mysvg,
  };
};

sintesevisse_pluri = function (obj) {
  let mysvg = `<svg class="logovisse" id="symbolvisse" viewBox="0 0 704 704">`;

  let corfrente = "#444444";

  let myobj = {};

  if (typeof obj != "undefined") {
    if (typeof obj.corBackground != "undefined") {
      mysvg += `<rect x='0' y='0' width='1500' height='704' style='fill: ${obj.corBackground}' />`;
      myobj.corBackground = obj.corBackground;
    }

    if (typeof obj.corPredominante != "undefined") {
      myobj.corPredominante = obj.corPredominante;
      corfrente = obj.corPredominante;
    }
  }

  mysvg += seqblock(
    704,
    101,
    "transform: matrix(1.00,0.00,0.00,20.00,0,0);",
    myobj
  );

  mysvg += `

<rect x="84" y="79" width="545" height="545" stroke="${corfrente}" stroke-width="30" fill="none" />

<path fill-rule="evenodd" clip-rule="evenodd" d="M520.689 193.377L500.312 173L479.935 193.377H520.689ZM521.689 194.377H478.935L459.935 213.377H540.689L521.689 194.377ZM541.689 214.377H458.935L439.935 233.377H534.963L547.826 220.514L541.689 214.377ZM533.963 234.377H438.935L419.935 253.377H514.963L533.963 234.377ZM513.963 254.377H418.935L399.935 273.377H494.963L513.963 254.377ZM493.963 274.377H398.935L379.935 293.377H474.963L493.963 274.377ZM473.963 294.377H378.935L378.553 294.759L378.172 294.377H283.143L302.143 313.377H454.963L473.963 294.377ZM453.963 314.377H303.143L322.143 333.377H434.963L453.963 314.377ZM433.963 334.377H323.143L342.143 353.377H414.963L433.963 334.377ZM413.963 354.377H343.143L362.143 373.377H394.963L413.963 354.377ZM393.963 374.377H363.143L378.504 389.737L378.553 389.688L378.603 389.737L393.963 374.377ZM211.592 313.377L230.592 294.377H178.436L197.436 313.377H211.592ZM198.436 314.377H210.592L204.514 320.455L198.436 314.377ZM177.436 293.377H231.592L250.592 274.377H158.436L177.436 293.377ZM157.436 273.377H251.592L256.868 268.101L262.143 273.377H357.172L338.172 254.377H175.564L157 272.941L157.436 273.377ZM176.564 253.377H337.172L318.172 234.377H195.564L176.564 253.377ZM196.564 233.377H317.172L298.172 214.377H215.418L209.281 220.514L209.354 220.587L196.564 233.377ZM216.418 213.377H297.172L278.172 194.377H235.418L216.418 213.377ZM236.418 193.377H277.172L256.795 173L236.418 193.377ZM358.172 274.377H263.143L282.143 293.377H377.172L358.172 274.377Z" fill="${corfrente}"/>

<rect x='270' y='458' width='280' height='62' style='fill: ${corfrente}' />`;

  return { svg: mysvg };
};

let seqblock = function (s, st, stl, dados) {
  let cores;

  let saturate = Math.random() * 100;
  let compensate = 0;
  let bgcolorout = "#FFFFFF";
  let forec = "";
  let lightbase = 65;

  let mysvg = "";

  if (typeof dados.corBackground == "undefined") {
    if (typeof dados.corPredominante == "undefined") {
      forec = "#444444";
      cores = Math.random() * 360;

      bgcolorout = hsl2hex(cores, 30, 95);
    } else {
      forec = dados.corPredominante;
      cores = rgb2hsl(hex2rgb(forec).r, hex2rgb(forec).g, hex2rgb(forec).b).h;
    }
  } else {
    forec = "#444444";
    if (typeof dados.corPredominante != "undefined") {
      forec = dados.corPredominante;
    }
    cores = rgb2hsl(
      hex2rgb(dados.corBackground).r,
      hex2rgb(dados.corBackground).g,
      hex2rgb(dados.corBackground).b
    ).h;

    bgcolorout = dados.corBackground;
  }

  if (
    parseInt(hex2rgb(bgcolorout).r, 16) +
      parseInt(hex2rgb(bgcolorout).g, 16) +
      parseInt(hex2rgb(bgcolorout).b, 16) <
    360
  ) {
    lightbase = 80;
  }

  for (let x = 0; x < s - 1; x = x + st) {
    if (typeof dados.corBackground == "undefined") {
      if (typeof dados.corPredominante == "undefined") {
      } else {
        cores = rgb2hsl(hex2rgb(forec).r, hex2rgb(forec).g, hex2rgb(forec).b).h;
      }
    }

    saturate = Math.random() * 100;

    compensate = 0;

    if (saturate < 30) {
      compensate = 0 - saturate;
    }

    if (saturate > 70) {
      compensate = saturate - 80;
    }

    mysvg += `<rect x='${x}' y='0' width='${st}' height='62' style='fill: hsl(${cores},${saturate}%,${
      lightbase + compensate
    }%); ${stl}' />`;
  }

  return mysvg;
};

rgb2hsl = function (r, g, b) {
  let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
  rabs = r / 255;
  gabs = g / 255;
  babs = b / 255;
  (v = Math.max(rabs, gabs, babs)), (diff = v - Math.min(rabs, gabs, babs));
  diffc = (c) => (v - c) / 6 / diff + 1 / 2;
  percentRoundFn = (num) => Math.round(num * 100) / 100;
  if (diff == 0) {
    h = s = 0;
  } else {
    s = diff / v;
    rr = diffc(rabs);
    gg = diffc(gabs);
    bb = diffc(babs);

    if (rabs === v) {
      h = bb - gg;
    } else if (gabs === v) {
      h = 1 / 3 + rr - bb;
    } else if (babs === v) {
      h = 2 / 3 + gg - rr;
    }
    if (h < 0) {
      h += 1;
    } else if (h > 1) {
      h -= 1;
    }
  }
  return {
    h: Math.round(h * 360),
    s: percentRoundFn(s * 100),
    v: percentRoundFn(v * 100),
  };
};

let hex2rgb = function (hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

function hsl2hex(h, s, l) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}
