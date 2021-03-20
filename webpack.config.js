const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")
const path = require('path')

module.exports={
    // mode:'development',
    entry: {
        index: './src/index.js',
        // App:'./src/projects/stopwatch/App.js'
      },
      output: {
        filename: '[name].js',
        path:path.resolve(__dirname)+"/dist"
        // path:path.resolve(__dirname)+"/dist/projects/stopwatch/",
    },

    devServer: {
        contentBase: __dirname + '/dist'
      },
    
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader",
                    options: { minimize: true }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
                    
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename:"./index.html"
        }),
        // new HtmlWebPackPlugin({
        //     template: "./src/projects/stopwatch/App.html",
        //     filename:"./App.html"
        // }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        }),
    ],
    externals: {            
            jquery: 'jQuery',            
    },
    
}