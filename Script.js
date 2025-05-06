// Array com 100 keys permanentes geradas (50 originais + 50 novas)
let permKeys = [
  "X9T2F8ZQW3YH",
  "B7N4J5C8D1LK",
  "M3V2X9PAQ8TZ",
  "Y6R1WN4LDFGQ",
  "J2HU9C3XVKPZ",
  "F81QZED7B5VM",
  "SC0T3YJGMU2W",
  "L47DBZF18KXPN",
  "W89MH5QYCUJ7",
  "GZL1PRD3KM0X",
  "V6N3WAHQCZFJ",
  "T2MJYK07LFNXB",
  "PQ4SXANR18WV",
  "DKCRZV95MXYHU",
  "EJ7FLS3YWMPX",
  "X5DT29WZBA6K",
  "C0QVJLMRP4HY",
  "NZF17BW8YAKVX",
  "H83DSJXLT9PC",
  "YRVMPQGLKD7WN",
  "JAWN30TB8FHRV",
  "UFJP4KC1X7LMD",
  "QM2A6EY9NDZCV",
  "BLR5ZFH7V1WPK",
  "XJ0KYUGCRWOS6",
  "V69TCXF8JNMPW",
  "ZPKJMWRYUS2DF",
  "LA5QH9TGXEWC0",
  "M7J0BRFW9DLYS",
  "S3VZN8CQX4RPM",
  "XUCKY21FZT7GO",
  "JPWBM0SRVD9LQ",
  "F4CT68LRDGXKN",
  "O7V3YZAQBHPXM",
  "HSYK5ZT9N1JCG",
  "WALYJVBPM3XZ2",
  "FN4EKZGSCRTWP",
  "MV9LJX0K3IHSY",
  "DJZ94XGAMRCOV",
  "RQWXLKY0JVAF78",
  "NT8YZ13WSUDAM",
  "BYXKWJU6V5RC98",
  "ASHZDTFQN140ML",
  "PG69RXSOYE7VWC",
  "VJKQ8YWLBXFPMR",
  "D3FMYQVKCOX2NB",
  "CLRNZHD18M5XGO",
  "XE2PU69ZSMJHTY",
  "OJYXFAR7MT3PQ9",
  "GZKVDLBH5YSW1A",
  "H7J9K4M2Q8XLP",
  "D1WXG5BVZ9A7Y",
  "Y3LNJV0QPKFBS",
  "MC8TRK6HS1ZAX",
  "PV9F0YBLZWX13",
  "SGKJYLAW7ERUH",
  "Z0XTFN1GVOPKS",
  "RLHUJ7KCW2M8DE",
  "N87YBXGWVOQFZ",
  "JEMPC3T42RVA6",
  "WBQSY0RMTZ9XG",
  "KPLFYDO7CN1VJS",
  "AG4BWQNY0VZCNT",
  "XM9JKIH7V2E5UP",
  "LS1DYCTOZJWMKR",
  "QVEH8X70PYSDWR",
  "BZJFWO6PMXS7UA",
  "CYKLWQV2T1ZJ9HN",
  "RV35ONJPZA8QGM",
  "HPBLOYX94JFWVZ",
  "U12XWVAMFZD6CJ",
  "FNWC1XBEL0HRZTS",
  "AOY7VXLQGMN5PJK",
  "DKZRVWF0J8XH3MS",
  "G9QF2LPYCWOTKBU",
  "MYAV6S53XOKJNRZT",
  "NSC0FPKLUVZ8YJRD",
  "QB27VYFJGNPWTXAK",
  "HZREMTI05CWFSXGB",
  "WXOKUZNJ19LRFVGH",
  "JYPF4AVX9EWGRS3L",
  "V8MRQPAWHGJYCKZ0",
  "SDITJWUEPBZG6L4X",
  "AN0BOKW2EVRXMC5Y",
  "MGFTSVRK1HWUCJLO9",
  "QZALHOPEUI9NC7BT",
  "FJLDGM01IRAUSXZN",
  "X6KRM7ZOVWC1BHNS",
  "PC0AFEMJIHVTXLG9",
  "BYWTOYUVZLSJM934N",
  "EJHGZPC2MAWDKO1R",
  "NQJLWS62FZPKXTAO",
  "QUXYI9WRKCB3ZDHT",
  "HGLMCSXVEJ08P2YRN",
  "OPZWLCIH9DRKQVXGS",
  "MBJLYNTWROVDSX0CA",
  "SKFQ6ZYRMIDPTAGXN",
  "TZ0POWJ8XVKGCSBFE",
  "RJPCZ9V4WQYEKNTSM"
];

const loginDiv = document.querySelector(".login");
const painelDiv = document.querySelector(".painel");
const loginBtn = document.getElementById("loginBtn");
const keyInput = document.getElementById("key");
const errorMessage = document.getElementById("error");
const injectBtn = document.getElementById("injectBtn");

// Função para verificar se usuário está logado via localStorage
function checkLogged() {
  const access = localStorage.getItem("panelAccess");
  if (access === "true") {
    loginDiv.style.display = "none";
    painelDiv.style.display = "block";
    initPanelTabs();
    return true;
  }
  return false;
}

// Chamada inicial para verificar se o usuário está logado
if (!checkLogged()) {
  loginDiv.style.display = "flex";
}

loginBtn.addEventListener("click", () => {
  const key = keyInput.value.trim();
  // Verifica se a chave existe e não foi usada
  if (permKeys.includes(key)) {
    // Remove a chave para uso único
    permKeys = permKeys.filter(k => k !== key);
    localStorage.setItem("panelAccess", "true");
    errorMessage.style.display = "none";
    loginDiv.style.display = "none";
    painelDiv.style.display = "block";
    keyInput.value = "";
    initPanelTabs();
  } else {
    errorMessage.style.display = "block";
  }
});

// Permite o login ao pressionar Enter
keyInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    loginBtn.click();
  }
});

injectBtn.addEventListener("click", () => {
  const originalText = injectBtn.textContent;
  injectBtn.textContent = "Injetando...";
  injectBtn.disabled = true;

  // Simula delay da injeção (ex: 2s)
 