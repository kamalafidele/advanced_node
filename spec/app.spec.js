const request=require("request");

describe("calc", () =>{
    it("Should multiply 5 * 5", () =>{
        expect(5*5).toBe(25);
    })
});

describe("get todos", () =>{
    it("should return plans", (done) =>{
        request.get("https://jsonplaceholder.typicode.com/todos",(err,res) =>{
            expect(res.statusCode).toBe(200);
            done();
        })
    })
});

describe("check existence", () =>{
    it("should check if the number exists in array ", () =>{
        expect([4,12,56,90].includes(12)).toBeTrue();
    })
})