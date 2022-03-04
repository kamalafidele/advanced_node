const request=require("request");

describe("calc", () =>{
    it("Should multiply 5 * 5", () =>{
        expect(5*5).toBe(25);
    })
});

describe("get plans", () =>{
    it("should return plans", (done) =>{
        request.get("https://jsonplaceholder.typicode.com/todos",(err,res) =>{
            expect(res.statusCode).toBe(200);
            done();
        })
    })
});