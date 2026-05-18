if (!document.referrer.match("visse")) {
  console.log("acesso externo");
  window.location.hash = "conteudo";
} else {
  window.location.hash = "conteudo";
}

let showback = function () {
  document.getElementById("identificacao").classList.add("mostraback");
};

let apagaback = function () {
  document.getElementById("identificacao").classList.remove("mostraback");
};

let hsl2hex = function (h, s, l) {
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
};

let amareloparabranco = function () {
  let s = 81;
  let l = 54;

  let interpola = setInterval(function () {
    if ((s >= 100) & (l >= 100)) {
      clearInterval(interpola);
    }

    document
      .querySelector(":root")
      .style.setProperty("--cor-moldura", hsl2hex(35, s, l));

    s++;
    l++;

    if (s >= 100) {
      s = 100;
    }
    if (l >= 100) {
      l = 100;
    }
  }, 10);
};

let brancoparaamarelo = function () {
  let s = 100;
  let l = 100;

  let interpola = setInterval(function () {
    if ((s <= 81) & (l <= 54)) {
      clearInterval(interpola);
    }

    document
      .querySelector(":root")
      .style.setProperty("--cor-moldura", hsl2hex(35, s, l));

    s--;
    l--;

    if (s <= 81) {
      s = 81;
    }
    if (l <= 54) {
      l = 54;
    }
  }, 10);
};

let cor = "amarelo";

window.addEventListener("scroll", function () {
  // Get the current vertical scroll position in pixels
  const scrolledHeight = window.scrollY || document.documentElement.scrollTop;

  // Get the current height of the viewport in pixels (100vh equivalent)
  const viewportHeight = window.innerHeight;

  // Check if the scroll position is greater than 100vh
  if (scrolledHeight > viewportHeight + 1) {
    if (cor == "amarelo") {
      cor = "branco";
      amareloparabranco();
    }
  } else {
    if (cor == "branco") {
      cor = "amarelo";
      brancoparaamarelo();
    }
  }
});

const closeshowoff = function () {
  document.getElementById("coverplate").style.display = "none";
  document.getElementById("showoff").style.display = "none";
};

const show = function (src) {
  document.getElementById("coverplate").style.display = "block";
  document.getElementById("showoff").innerHTML = `<img src="${src}" />`;
  document.getElementById("showoff").style.display = "block";
};

// Menu

let omnifilter = function (arr) {
  let code = ``;

  let grupos = tags(arr, "Group", ",");
  let grupoatual = "";

  for (let g = 0; g < grupos.length; g++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].Group.match(grupos[g])) {
        if (grupoatual != grupos[g]) {
          code += `<div class="menu_linha"></div>`;
          code += `<a href="${arr[i].Link}" class="menu_item">${arr[i].Name}</a>`;
          code += `<a href="#" class="menu_grupo">${arr[i].Group}</a>`;
          grupoatual = arr[i].Group;
        } else {
          code += `<a href="${arr[i].Link}" class="menu_item">${arr[i].Name}</a>`;
        }
      }
    }
  }

  document.getElementById("respostas").innerHTML = code;
};

omnifilterfetchcsvdata(
  GoogleSheetCsvURL(
    "https://docs.google.com/spreadsheets/d/1-cUA3cbTKa3plHwDe0KMJrcFgZsQOPwl7tp_uJ_T_FM/edit?gid=1979792953#gid=1979792953",
  ),
  "menufiltro",
);
