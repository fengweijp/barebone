'use strict'

const webpack           = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const pkg               = require('./package.json')

module.exports = {
    entry: {
        './index.css': './index.scss'
    },

    output : {
        path     : '.',
        filename : 'index.css',
    },

    module: {
        rules: [{
            test   : /\.scss$/,
            loader : ExtractTextPlugin.extract({
                use: [
                    'css-loader',

                    {
                        loader  : 'postcss-loader',
                        options : {
                            plugins: () => [
                                require('autoprefixer'),
                                require('cssnano')()
                            ]
                        }
                    },

                    'sass-loader'
                ]
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            allChunks : true,
            filename  : 'index.css'
        })
    ]
}
