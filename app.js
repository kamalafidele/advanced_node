const fs = require("fs");
const http = require("http");
process.stdout.write("Hello \n");

process.stdin.on("data", (data) =>{
    console.log(data.toString());

    if(data.toString().trim() == "BYE")
     process.exit();

})
