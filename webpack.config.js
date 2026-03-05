const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'jquery.uploader.min.js',
    },
    externals: {
        jquery: "jQuery"
    }
};
