const website = require('../en/website.json');
const bot = require('../en/bot.json');
const fs = require('fs');
const path = require('path');

function removeDuplicates(obj) {
    const uniqueValues = [];
    const newObj = {};

    for (const key in obj) {
        const value = obj[key];
        if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
            newObj[key] = value;
        }
    }

    console.log('Removed all dups total', uniqueValues.length);

    return newObj;
}

fs.writeFileSync(path.join("en/bot.json"), JSON.stringify(removeDuplicates(bot)));
fs.writeFileSync(path.join("en/website.json"), JSON.stringify(removeDuplicates(website)));