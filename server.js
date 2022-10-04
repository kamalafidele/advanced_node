const express =  require("express");
const {createHmac,createHash,createSign,createSecretKey} = require("crypto");
const app = express();

let hash = createHmac("sha256",'lkfsjadlfsad')
           .update("My name is Kamara")
           .digest("base64");

console.log(hash);           


// const PORT = 4500;
// app.listen(PORT, () =>{
//     console.log(`SERVER RUNNING ON ${PORT}`);
// });