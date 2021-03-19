const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin=require("mini-css-extract-plugin")

module.exports={
    entry: {
        index: './src/index.js',
        loginpages:'./src/pages/loginpages.js'
      },
      output: {
        filename: '[name].[hash:20].js',
        path:__dirname+'/dist',
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
        new HtmlWebPackPlugin({
            template: "./src/pages/loginpages.html",
            filename:"./loginpages.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename:"[id].css"
        }),
    ],
    externals: {            
            jquery: 'jQuery',            
    },
}