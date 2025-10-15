const languages = {};
languages.ar = require('./ar/website.json');
languages.bg = require('./bg/website.json');
languages["ku-IQ"] = require('./ckb/website.json')
languages.cs = require('./cs/website.json');
languages.da = require('./da/website.json');
languages.de = require('./de/website.json');
languages.el = require('./el/website.json');
languages.en = require("./en/website.json");
languages.es = require('./es/website.json');
languages.fa = require('./fa/website.json');
languages.fi = require('./fi/website.json');
languages.fr = require('./fr/website.json');
languages.hi = require('./hi/website.json');
languages.he = require('./he/website.json');
languages.hr = require('./hr/website.json');
languages.hu = require('./hu/website.json');
languages.it = require('./it/website.json');
languages.ja = require('./ja/website.json');
languages.ko = require('./ko/website.json');
languages.lt = require('./lt/website.json');
languages.nl = require('./nl/website.json');
languages.no = require('./no/website.json');
languages.pl = require('./pl/website.json');
languages["pt-BR"] = require('./pt-BR/website.json');
languages.pt = require('./pt-PT/website.json');
languages.ro = require('./ro/website.json');
languages.ru = require('./ru/website.json');
languages.sk = require('./sk/website.json');
languages.sr = require('./sr/website.json');
languages.sv = require('./sv/website.json');
languages.th = require('./th/website.json');
languages.tr = require('./tr/website.json');
languages.uk = require('./uk/website.json');
languages.vi = require('./vi/website.json');
languages.zh = require('./zh-CN/website.json');
languages["zh-TW"] = require('./zh-TW/website.json');
languages.tl = require('./fil/website.json');

module.exports = languages;
module.exports.webLangs = {
  ar: { name: "العربية", flag: "sa" },
  bg: { name: "български", flag: "bg" },
  cs: { name: "Čeština", flag: "cz" },
  en: { name: "English", flag: "us" },
  tr: { name: "Türkçe", flag: "tr" },
  zh: { name: "中文", flag: "cn" },
  "zh-TW": { name: "繁體中文", flag: "tw" },
  ru: { name: "Русский", flag: "ru" },
  uk: { name: "Українська", flag: "ua" },
  fr: { name: "Français", flag: "fr" },
  de: { name: "Deutsch", flag: "de" },
  el: { name: "Ελληνικά", flag: "gr" },
  hi: { name: "हिन्दी", flag: "in" },
  pl: { name: "Polski", flag: "pl" },
  pt: { name: "Português", flag: "pt" },
  nl: { name: "Nederlands", flag: "nl" },
  it: { name: "Italiano", flag: "it" },
  es: { name: "Español", flag: "es" },
  ro: { name: "Română", flag: "ro" },
  sk: { name: "Slovák", flag: "sk" },
  ja: { name: "日本語", flag: "jp" },
  hu: { name: "Magyar", flag: "hu" },
  ko: { name: "한국어", flag: "kr" },
  lt: { name: "Lithuanian", flag: "lt" },
  no: { name: "Norsk", flag: "no" },
  pl: { name: "Polski", flag: "pl" },
  "pt-BR": { name: "Português do Brasil", flag: "br" },
  sr: { name: "Српска", flag: "sr" },
  sv: { name: "Svenska", flag: "sv" },
  th: { name: "Thai", flag: "th" },
  vi: { name: "Tiếng Việt", flag: "vn" },
  "ku-IQ": { name: "سۆرانی", flag: "kur" },
  da: { name: "Dansk", flag: "dk" },
  fa: { name: "فارسی", flag: "ir" },
  fi: { name: "Suo̯mi", flag: "fi" },
  hr: { name: "Hrvatski", flag: "hr" },
  he: { name: "עִברִית", flag: "il" },
  tl: {name: "Filipino", flag: "ph"}
};



const botLanguages = {};
botLanguages.ar = require('./ar/bot.json');
botLanguages.bg = require('./bg/bot.json');
botLanguages.ckb = require('./ckb/bot.json')
botLanguages.cs = require('./cs/bot.json');
botLanguages.da = require('./da/bot.json');
botLanguages.de = require('./de/bot.json');
botLanguages.el = require('./el/bot.json');
botLanguages.en = require("./en/bot.json");
botLanguages.es = require('./es/bot.json');
botLanguages.fa = require('./fa/bot.json');
botLanguages.fi = require('./fi/bot.json');
botLanguages.fr = require('./fr/bot.json');
botLanguages.hi = require('./hi/bot.json');
botLanguages.hr = require('./hr/bot.json');
botLanguages.he = require('./he/bot.json');
botLanguages.hu = require('./hu/bot.json');
botLanguages.it = require('./it/bot.json');
botLanguages.ja = require('./ja/bot.json');
botLanguages.ko = require('./ko/bot.json');
botLanguages.lt = require('./lt/bot.json');
botLanguages.nl = require('./nl/bot.json');
botLanguages.no = require('./no/bot.json');
botLanguages.pl = require('./pl/bot.json');
botLanguages["pt_BR"] = require('./pt-BR/bot.json');
botLanguages.pt = require('./pt-PT/bot.json');
botLanguages.ro = require('./ro/bot.json');
botLanguages.ru = require('./ru/bot.json');
botLanguages.sk = require('./sk/bot.json');
botLanguages.sr = require('./sr/bot.json');
botLanguages.sv = require('./sv/bot.json');
botLanguages.th = require('./th/bot.json');
botLanguages.tr = require('./tr/bot.json');
botLanguages.uk = require('./uk/bot.json');
botLanguages.vi = require('./vi/bot.json');
botLanguages.zh = require('./zh-CN/bot.json');
botLanguages["zh_TW"] = require('./zh-TW/bot.json');
botLanguages.tl = require('./fil/bot.json');

module.exports.botLangs = botLanguages;

module.exports.ex = require('./examples.json');
