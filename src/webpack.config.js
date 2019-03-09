const path = require('path');
const BundleTracker = require('webpack-bundle-tracker');
const webpack = require('webpack');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const ManifestPlugin = require('webpack-manifest-plugin');

let cssLoader = [
    {
        loader: 'style-loader'
    },
    {
        loader: "css-loader", options: { importLoaders: 1 }
    }
];
let config = {
    context: __dirname,
    entry: {
        // common: './static/js/common.js',
        bundle: './static/assets/js/app.js',
        // host: './static/host.js'
    },
    output: {
        path: path.resolve('./static/build/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, use: ["babel-loader"], exclude: '/node_modules'
            },
            {
                test: /\.scss$/,
                use: [...cssLoader, 'sass-loader']
            },
            {
                test: /\.css$/,
                use: [...cssLoader]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use:
                    [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
            }
        ]
    },

    plugins: [
        new BundleTracker({ filename: './webpack-stats.json' }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
}
    ;

// simple test for development mode
module.exports = function (env, argv) {
    console.log(argv.mode)

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
        cssLoader.push({
            loader: 'postcss-loader',
            options: {
                plugins: (loader) => [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie >= 7', 'safari >= 7']
                    })
                ]
            }
        })
    }

    return config;
};