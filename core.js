const path=require("path");
const util=require("util");
const v8=require("v8");

let joinedPath=path.join(__dirname,"www","uploads");

util.log(joinedPath);
util.log(v8.getHeapStatistics());
console.log(joinedPath);