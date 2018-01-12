var webpack = require('webpack');
var path = require('path');
module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server\\client?http://127.0.0.1:8081/',
        'webpack\\hot\\only-dev-server',
        '.\\src'
    ],
    output: {
        path: path.resolve(__dirname, '\\public'),
        filename: 'bundle.js',
        pathinfo         : true,
        publicPath       : 'http://localhost:8081/'
    },
    resolve: {
        extensions: ['*','.css', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: 'babel-loader',
            query:{
                presets:['es2015','react']
            }
        }
        ]
    },
    
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ]
};