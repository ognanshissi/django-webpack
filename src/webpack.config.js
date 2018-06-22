const Encore = require('@symfony/webpack-encore');
const BundleTracker = require('webpack-bundle-tracker');

Encore
    .setOutputPath('static/build/')
    .setPublicPath('/static/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())
    // .autoProvidejQuery()
    // .autoProvideVariables({
    //     "window.Bloodhound": require.resolve('bloodhound-js'),
    //     "jQuery.tagsinput": "bootstrap-tagsinput"
    // })
    .enableSassLoader()
    .enableReactPreset()
    .enableVersioning(false)
    // .createSharedEntry('js/common', ['jquery'])
    .addEntry('js/bundle', './static/assets/js/index.js')
    // .addEntry('js/contact', './static/assets/js/contact.js')
    .addStyleEntry('css/app', ['./static/assets/scss/app.scss'])
    .addPlugin(new BundleTracker({filename: './webpack-stats.json'}))
;

module.exports = Encore.getWebpackConfig();


//
// let config = {
//     context: __dirname,
//     entry: {
//         app: './static/js/app.js'
//     },
//     output: {
//         path: path.resolve('./static/dist/js/'),
//         filename: '[name]-[hash].js'
//     },
//
//     module: {
//         rules: [
//             {
//                 test: /\.js$/, use: ['babel-loader']
//             }
//         ]
//     },
//
//     plugins: [
//         new BundleTracker({filename: './webpack-stats.json'})
//     ]
// };
//
//
// module.exports = config;