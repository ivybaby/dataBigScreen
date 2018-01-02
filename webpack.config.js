const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');//代码清理
const webpack = require('webpack');

module.exports = {
    // entry: './src/index.js',
    entry:{
        // app: './src/index.js',
        // print: './src/print.js'
        app: './src/index.js'
    },
    devtool: 'inline-source-map',//提示代码错误位置
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebpackPlugin(['dist/public']),
        // new HtmlWebpackPlugin({
        //     title: 'Output Management'
        // })
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({//jquery
           $: "jquery",
          jQuery: "jquery"
        })
    ],
    output: {
        // filename: 'bundle.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: {
         rules: [
          {
             test: /\.css$/,
              use: [
              'style-loader',
              'css-loader'
             ]
       },{
             test: /\.(png|svg|jpg|gif)$/,
            use: [
              'file-loader'
            ]
       }, {
             test: /\.(woff|woff2|eot|ttf|otf)$/,
             use: [
               'file-loader'
             ]
       },
             {
                     test: /\.(csv|tsv)$/,
             use: [
               'csv-loader'
             ]
       },
       {
        test: /\.xml$/,
            use: [
             'xml-loader'
             ]
      }
     ]
  }
};