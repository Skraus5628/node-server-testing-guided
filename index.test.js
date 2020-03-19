const supertest = require("supertest")
const server = require("./index")
// server won't start because of if statement wrapped around server.listen
const db = require("./data/config")

beforeEach(async () =>{
    // run our seeds
    await db.seed.run()
})

test("welcome route", async () =>{
    const res = await supertest(server).get("/")
    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to our API")
    expect(res.body.message).toHaveLength(18)
    expect(res.body.message).toMatch(/welcome/i)
  
})


test("create hobbit route", async () =>{
    const res = await supertest(server)
        .post("/hobbits")
        .send({ name: "gaffer" })
    expect(res.statusCode).toBe(201)
    expect(res.type).toBe("application/json")
    expect(res.body.name).toBe("gaffer")
})


// test("a placeholder test", async () =>{
//     expect(2+2).toBe(4)
    
// })
// // can be async or use (done) as callback param and done()