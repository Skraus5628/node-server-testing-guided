const hobbitsModel = require("./hobbits-model")
const db = require("../data/config")

beforeEach(async () =>{
    // run our seeds
    await db.seed.run()
})

test("insert", async () =>{
   const res = await hobbitsModel.insert({ name: "bilbo" })
   expect(res.name).toBe("bilbo")
})

test("findById", async () =>{
    const res = await hobbitsModel.findById(1)
    expect(res.name).toBe("sam")
})

test("update", async () =>{
    const res = await hobbitsModel.update(1, { name: "bilbo" })
    expect(res.name).toBe("bilbo")
})

test("remove", async () => {
    await hobbitsModel.remove(1)
    const hobbits = await db("hobbits").select()
    expect(hobbits).toHaveLength(3)
})