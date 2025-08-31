const os = require("os")

//infor about current user
console.log(os.userInfo().username)

// returns about uptime in seconds

const uptime = os.uptime()
console.log(uptime)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemo: os.totalmem(),
    freememo: os.freemem()
}
console.log(currentOS)