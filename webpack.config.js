const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      CleanWebpackPlugin = require('clean-webpack-plugin'),
      CopyWebpackPlugin = require('copy-webpack-plugin'),
      ImageminPlugin = require('imagemin-webpack-plugin').default,
      ExtractTextPluginStyle = new ExtractTextPlugin("style.css"),
      ExtractTextPluginHero = new ExtractTextPlugin("hero.css");

//the path(s) that should be cleaned
let pathsToClean = [
  'build/main_style.js', 'build/hero_style.js','build/css.js', 'build/template.js'
]

// the clean options to use
let cleanOptions = {
  //keep these files
  exclude:  ['index.js'],
  verbose:  true,
  dry:      false,
  watch:    false
}

module.exports = {
    entry:  {
      index:  './src/index.js',
      template: './src/temp/template.js',
      main_style: './src/temp/css.js',
      hero_style: './src/temp/hero.js'
    },

    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'build')
    },

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
                test: /style\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPluginStyle.extract({
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
            {
                test: /hero\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPluginHero.extract({
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
        new CleanWebpackPlugin(pathsToClean, cleanOptions),
        ExtractTextPluginStyle,
        ExtractTextPluginHero,
        new HtmlWebpackPlugin({
            template: 'src/template.html',
            inject: true,
        }),
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            { from: 'src/caa', to: 'caa' },
            { from: 'src/img', to: 'img' },
        ]),
        new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
    ]
};
