const fs = require('fs');
const path = require('path');

const entryFile = fs.readdirSync(path.resolve(__dirname, '../views'));
const entry = {};
const output = {};

entryFile.forEach(item => {
    if (/\.html$/.test(item)) {
        const name = item.split('.')[0];
        if (name === 'spa') {
            Object.assign(entry, {
                [name]: path.resolve(__dirname, `../client/${name}/main.js`)
            });
        } else {
            Object.assign(entry, {
                [name]: path.resolve(__dirname, `../client/${name}/${name}.js`)
            });
        }
        Object.assign(output, {
            path: `${path.resolve(__dirname, `./../public`)}`,
            filename: `script/[name].js?[hash]`,
        });
    }
});

const options = {
    entry,
    output,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jpg|png|gif|jpeg$/,
                use: 'url-loader'
            }
        ]
    }
};

module.exports = options;