const fs = require("fs");

fs.rename("f2.txt","f1.txt", (e) =>{
     if(!e)
       console.log("Finished the renaming operation");
})
console.log("File renamed");