const path = require('path');

module.exports = {
    entry: './entry.jsx',
    output: {
        path: __dirname + '/app/assets/javascripts',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
}