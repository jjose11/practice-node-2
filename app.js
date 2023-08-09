// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj)

// -----------------------
// const os = require('os');

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// concatation
// console.log('Total Memory: ' + totalMemory);
// console.log('Free Memory: ' + freeMemory);

//template literals
// console.log(`Total Memory: ${totalMemory}`);
// console.log(`Free Memory: ${freeMemory}`)

//---------------------------

// const fs = require('fs');

// const files = fs.readdirSync('./');
//files will be a string array
// console.log(files)

// fs.readdir('./', function(err, files){
//   if (err) console.log('Error', err);
//   else console.log('Result', files)
// })

// const EventEmitter = require('events');

//  emitter.emit('messageLogged', {id: 1, url: 'http://'})
//Making noise, produce -- signalling

//Raise: logging (data: message)

// const Logger = require ('./logger')
// const logger = new Logger();


// logger.on('messageLogged', (arg) => { //e, eventArg
//   console.log('Listener called', arg)
// })

// logger.log('message')

const http = require('http');

// const server = http.createServer();
// // server.on('connection', (socket) =>{
// //   console.log('New connection')
// })

const server = http.createServer((req, res)=> {
  if (req.url == '/') {
    res.write('Hello World');
    res.end();
  }
  if (req.url == '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]))
    res.end();
  }
});

server.listen(3000)

console.log('Listening on port 3000...');