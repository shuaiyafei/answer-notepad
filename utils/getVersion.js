const fs = require('fs');
const path = require('path');
const isDev = require('../config/isDev');

let targetPath = path.resolve(__dirname, '../public/version/dev-ver.json');

if (!isDev) {
    targetPath = path.resolve(__dirname, '../public/version/prd-ver.json');
}

let content = fs.existsSync(targetPath) ? fs.readFileSync(targetPath) : {};

if (Object.keys(content).length) {
    content = JSON.parse(content);
    for (let i in content) {
        content[i] = `${i}.hash`;
    }
}
module.exports = content;