// Replace with an API that provides currency exchange rates.
const exchangeRates = {
    "AED": 3.943357,
        "AFN": 78.216881,
        "ALL": 105.109247,
        "AMD": 428.437692,
        "ANG": 1.919069,
        "AOA": 893.771654,
        "ARS": 372.745393,
        "AUD": 1.648666,
        "AWG": 1.93247,
        "AZN": 1.829373,
        "BAM": 1.955972,
        "BBD": 2.149889,
        "BDT": 117.930375,
        "BGN": 1.955972,
        "BHD": 0.401535,
        "BIF": 3024.166054,
        "BMD": 1.073594,
        "BND": 1.449328,
        "BOB": 7.357647,
        "BRL": 5.276564,
        "BSD": 1.064794,
        "BTC": 3.0832637e-5,
        "BTN": 88.618596,
        "BWP": 14.408268,
        "BYN": 3.507509,
        "BYR": 21042.451229,
        "BZD": 2.146289,
        "CAD": 1.467765,
        "CDF": 2808.523471,
        "CHF": 0.965205,
        "CLF": 0.034342,
        "CLP": 947.613367,
        "CNY": 7.837137,
        "COP": 4283.076808,
        "CRC": 565.249728,
        "CUC": 1.073594,
        "CUP": 28.450253,
        "CVE": 110.274702,
        "CZK": 24.408389,
        "DJF": 189.586679,
        "DKK": 7.464746,
        "DOP": 60.445318,
        "DZD": 145.424853,
        "EGP": 32.902095,
        "ERN": 16.103917,
        "ETB": 59.158505,
        "EUR": 1,
        "FJD": 2.418598,
        "FKP": 0.8677,
        "GBP": 0.867551,
        "GEL": 2.89338,
        "GGP": 0.8677,
        "GHS": 12.703118,
        "GIP": 0.8677,
        "GMD": 69.837737,
        "GNF": 9145.80461,
        "GTQ": 8.347734,
        "GYD": 222.769598,
        "HKD": 8.401467,
        "HNL": 26.296313,
        "HRK": 7.696552,
        "HTG": 141.482447,
        "HUF": 379.805925,
        "IDR": 16736.371248,
        "ILS": 4.215061,
        "IMP": 0.8677,
        "INR": 89.278773,
        "IQD": 1394.92272,
        "IRR": 45348.629965,
        "ISK": 149.187099,
        "JEP": 0.8677,
        "JMD": 165.04452,
        "JOD": 0.761505,
        "JPY": 160.363216,
        "KES": 159.724052,
        "KGS": 95.893869,
        "KHR": 4394.3866,
        "KMF": 497.315832,
        "KPW": 966.218586,
        "KRW": 1405.351282,
        "KWD": 0.331316,
        "KYD": 0.887378,
        "KZT": 495.123559,
        "LAK": 22070.941711,
        "LBP": 16003.80795,
        "LKR": 350.330821,
        "LRD": 201.353049,
        "LSL": 19.733076,
        "LTL": 3.170046,
        "LVL": 0.649407,
        "LYD": 5.205458,
        "MAD": 10.950763,
        "MDL": 19.304698,
        "MGA": 4818.423905,
        "MKD": 61.620421,
        "MMK": 2236.096723,
        "MNT": 3714.478292,
        "MOP": 8.584055,
        "MRO": 383.273034,
        "MUR": 47.506961,
        "MVR": 16.576705,
        "MWK": 1198.905475,
        "MXN": 18.74915,
        "MYR": 5.077569,
        "MZN": 67.904796,
        "NAD": 19.89411,
        "NGN": 866.1442,
        "NIO": 38.973429,
        "NOK": 11.838902,
        "NPR": 141.789474,
        "NZD": 1.79022,
        "OMR": 0.409936,
        "PAB": 1.064794,
        "PEN": 4.016853,
        "PGK": 4.007353,
        "PHP": 59.854006,
        "PKR": 298.887695,
        "PLN": 4.452392,
        "PYG": 7960.70035,
        "QAR": 3.909498,
        "RON": 4.97225,
        "RSD": 117.287318,
        "RUB": 98.481934,
        "RWF": 1307.114995,
        "SAR": 3.994851,
        "SBD": 9.042759,
        "SCR": 14.129943,
        "SDG": 643.623822,
        "SEK": 11.683825,
        "SGD": 1.451826,
        "SHP": 1.306296,
        "SLE": 23.013309,
        "SLL": 21203.49076,
        "SOS": 612.489568,
        "SRD": 40.957096,
        "STD": 22221.237546,
        "SYP": 13958.688219,
        "SZL": 19.606725,
        "THB": 38.20712,
        "TJS": 11.664826,
        "TMT": 3.757581,
        "TND": 3.398467,
        "TOP": 2.57137,
        "TRY": 30.486973,
        "TTD": 7.222635,
        "TWD": 34.46711,
        "TZS": 2659.834001,
        "UAH": 38.503287,
        "UGX": 4027.35431,
        "USD": 1.073594,
        "UYU": 42.633751,
        "UZS": 13048.147923,
        "VEF": 3765842.846937,
        "VES": 37.713722,
        "VND": 26340.639842,
        "VUV": 130.827167,
        "WST": 2.950683,
        "XAF": 656.014713,
        "XAG": 0.046251,
        "XAU": 0.000539,
        "XCD": 2.901443,
        "XDR": 0.812671,
        "XOF": 656.014713,
        "XPF": 121.584962,
        "YER": 268.774761,
        "ZAR": 19.552206,
        "ZMK": 9663.642223,
        "ZMW": 23.665082,
        "ZWL": 345.696975
};

const fromCurrencySelect = document.getElementById("fromCurrency");
const toCurrencySelect = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultSpan = document.getElementById("result");

// Populate currency select dropdowns
for (const currency in exchangeRates) {
    const option1 = document.createElement("option");
    option1.value = currency;
    option1.text = currency;
    fromCurrencySelect.add(option1);

    const option2 = document.createElement("option");
    option2.value = currency;
    option2.text = currency;
    toCurrencySelect.add(option2);
}

function convertCurrency() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = parseFloat(amountInput.value);

    if (!isNaN(amount)) {
        const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        const convertedAmount = amount * exchangeRate;
        resultSpan.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        resultSpan.textContent = "Please enter a valid amount.";
    }
}

amountInput.addEventListener("input", convertCurrency);
fromCurrencySelect.addEventListener("change", convertCurrency);
toCurrencySelect.addEventListener("change", convertCurrency);

// Initial conversion
convertCurrency();
