const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res) =>{
})

process.stdout.write("Hello \n");

process.stdin.on("data", (data) =>{
    console.log(data.toString());

    if(data.toString().trim() == "BYE")
     process.exit();

})

server.listen(3400);
