const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        vendor: "./src/config/index.js"
    },
    mode: "development",
    module: {
        rules: [

            //babel loader
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            //css loader
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            //html loader
            {
                test: /\.html$/i,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                    },
                }
            },

            //file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name][hash].[ext]',
                            outputPath: 'images',
                            esModule: false,
                        },
                    }
                ]
            },

            //sass loader
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },

            // Fonts Loader
            {
                test: /\.(woff|woff2|ttf|otf|eot|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]'

                        },
                    }
                ],

            },


            // SVG inline loader
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },


        ]
    },

    //dev server
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 2626
    },

    plugins: [new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
    })],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },


}
