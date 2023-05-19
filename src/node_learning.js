/*const http = require('http');

const port = 3000; // Specify the port number you want to listen on

const server = http.createServer((req, res) => {
  // Handle incoming requests
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//http://localhost:3000
*/

//read file 
/*
var fs = require('fs')
fs.readFile('logger.js','utf8',function(err,data){
    console.log(data)
} )
*/
//write file
var fs = require('fs')
fs.writeFile('logger1.js','console.log("done")',function(err){
    console.log("my data  saved in a new file ")
})
//delete
fs.unlink('',function(err){
    console.log('Deleted')
})