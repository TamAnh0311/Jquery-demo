var fs = require('fs');
var files = fs.readdirSync("./src/pages");

const getFileFromDir = (fileType) = files.map((filename) => {
    if (filename.includes(fileType))
    filename.split('.').slice(0, -1).join('.')
})

export const pages = getFileFromDir('.html')

export const entries = getFileFromDir('.js')

