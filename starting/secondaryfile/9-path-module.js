const path = require('path')
const fs = require('fs')

const seperation = path.sep
const myFilepath = path.join('starting', 'secondaryfile', 'testingpath.txt')
console.log(myFilepath);

const fileName = path.basename(myFilepath)
console.log(fileName);

const absolutePath = path.resolve(__dirname, myFilepath )
console.log(absolutePath);

fs.readFile(myFilepath, 'utf-8', (err, data) => {
    if (err) {
    console.log(err);    
}else{
    console.log(data);
    
}
})