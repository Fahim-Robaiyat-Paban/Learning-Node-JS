const path = require('path')
const fs = require('fs')
// const location = require('./9-path-module')

// const insideofTestingpathfile = fs.readFileSync('location', 'utf-8')
// console.log(insideofTestingpathfile);

const fileone = fs.readFileSync('./starting/first.txt', 'utf-8')
const filetwo = fs.readFileSync('./starting/second.txt', 'utf-8')
const filestogether = fs.writeFileSync('./starting/filethree.txt', `This is the third file: ${fileone}, ${filetwo}`, {flag: "a"})
// w is write, like overwriting anything thats inside 
// a flag is add at the end
// ax flag is add at the end if the file exists
// 

