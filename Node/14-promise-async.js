const fs = require('fs').promises

const asyncProcess = async () => {
    try {
        const first = await fs.readFile('./starting/first.txt', 'utf-8')
        const second = await fs.readFile('./starting/second.txt', 'utf-8')
        await fs.writeFile('./starting/promised-async.txt',` This is async ${first} + ${second}`)
        console.log(first , second);
        
    } catch (error) {
        console.log(error);
    }
}

asyncProcess()

console.log('this shd come first');

