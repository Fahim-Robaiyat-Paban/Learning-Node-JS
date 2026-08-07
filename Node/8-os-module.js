const os = require('os')

// info about current user 
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds

const userUptime = os.uptime()
console.log(`The User uptime is ${userUptime} seconds`)

const osInfo = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem()
}
console.log(osInfo);