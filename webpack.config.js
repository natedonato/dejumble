const path = require('path');

module.exports = {
    entry: './jumble.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname)
    }
};