const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;

var fs = require('fs');

var files = fs.readdirSync("./src/pages");

const getFileFromDir = (fileType) => {
    return files.filter((file) => file.includes(fileType))
}

const pages = getFileFromDir('.html')
const entries = getFileFromDir('.js')

const entriesMap =  entries.reduce((obj, entry) => ({ ...obj, [entry]: './src/pages/' + entry }), {})

entriesMap['authApi.js'] = './src/js/authApi.js'
entriesMap['authMiddlewares.js'] = './src/js/authMiddlewares.js'

module.exports = {
    mode: 'development',

    //convert pages array to obj
    entry: entriesMap,

    output: {
        filename: 'js/[name]',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port,
    },
    plugins: [].concat(
        pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    inject: true,
                    template: `./src/pages/${page}`,
                    filename: `${page}`,
                    chunks: [page],
                })
        )),
    watch: true
}