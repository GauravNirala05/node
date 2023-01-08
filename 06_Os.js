const os=require(`os`)

// console.log()
console.log(os.userInfo());
console.log(os.uptime());
console.log((os.totalmem())/(1024*1024*1024));
console.log((os.freemem())/(1024*1024*1024));
console.log(os.type());
console.log(os.release());

