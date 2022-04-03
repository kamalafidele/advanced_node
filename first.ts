let place:string = "";
console.log(place);

const http = require("http");
const fs = require("fs");

const people: Object[] =[{name:"Kamara", age: 12}, {name:"Humura", age: 3}, {name:"Mugeni", age: 4}];

const server = http.createServer((req,res) =>{
    if( req.url == "/")
     res.end("Hello, you hit our server");
    else if( req.url == "/people")
     res.end(JSON.stringify(people));  
});

const PORT = 4500;
server.listen(PORT, () =>{
    console.log(`APP RUNNING ON ${PORT} PORT......`);
});

function greet(name:string){
    console.log(`Hello ${name}`);
}

function walk(x_axis:number, y_axis:number){
    console.log(y_axis,x_axis);
}

greet("Fidele");
