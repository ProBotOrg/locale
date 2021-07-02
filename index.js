const languagesCollection = require("./languages.json");
var languages = {};

try {
  for (let keyOfLanguageObject in languagesCollection) {
    let langObject = languagesCollection[keyOfLanguageObject];
    for (langInsideObject in langObject) {
      if (keyOfLanguageObject === "globalLanguages") {
        languages[langInsideObject] = require(langObject[langInsideObject]);
      } else {
        if (!languages[keyOfLanguageObject])
          languages[keyOfLanguageObject] = {};
        languages[keyOfLanguageObject] = Object.assign(
          {},
          languages[keyOfLanguageObject],
          {
            [langInsideObject]: require(langObject[langInsideObject]),
          }
        );
      }
    }
  }
} catch (e) {
  console.log(e);
}

module.exports.ex = require("./examples.json");
module.exports = languages;
