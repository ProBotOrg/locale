const languagesCollection = require("./languages.json");

try {
  var languages = {};
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
  module.exports = languages;
} catch (e) {
  console.log(e);
}
