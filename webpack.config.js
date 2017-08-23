const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry:  './src',

    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'build')
    },
    // externals: {
    //     './src': 'body.html'
    // },

    module: {
        loaders: [
            {
                test: /\.(jpeg|png|gif|svg)$/i,
                loader: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    // Could also be write as follow:
                    // use: 'css-loader?modules&localIdentName=[local]!postcss-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                localIdentName: '[local]'
                            }
                        },
                        'postcss-loader'
                    ]
                }),
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',

                    // Could also be write as follow:
                    // use: 'css-loader?modules&importLoader=2&sourceMap&localIdentName=[local]!sass-loader'
                    use: [
                        {
                            loader: 'css-loader',
                            query: {
                                modules: true,
                                sourceMap: true,
                                importLoaders: 2,
                                localIdentName: '[local]'
                            }
                        },
                        'sass-loader'
                    ]
                }),
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin("style.css"),

        new HtmlWebpackPlugin({
            template: 'src/template.html',
            inject: true,
        })
    ]
};