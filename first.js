var place = "";
console.log(place);
var http = require("http");

var people = [{ name: "Kamara", age: 12 }, { name: "Humura", age: 3 }, { name: "Mugeni", age: 4 }];
var server = http.createServer(function (req, res) {
    if (req.url == "/")
        res.end("Hello, you hit our server");
    else if (req.url == "/people")
        res.end(JSON.stringify(people));
});

var PORT = 4500;
server.listen(PORT, function () {
    console.log("APP RUNNING ON ".concat(PORT, " PORT......"));
});

function greet(name) {
    console.log("Hello ".concat(name));
}

function walk(x_axis, y_axis) {
    console.log(y_axis, x_axis);
}

greet("Fidele");
