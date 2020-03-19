const express = require("express")
const cors = require("cors")
const hobbitsRouter = require("./hobbits/hobbits-router")

const server = express()
const port = process.env.PORT || 5000

server.use(cors())
server.use(express.json())

server.use("/hobbits", hobbitsRouter)
server.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
	})
})

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

// the if statement allows the export of the server to go without running the entire server.
if (!module.parent) {
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
}

module.exports = server

 // // the if statement allows the export of the server to go without running the entire server.
// if (!module.parent) {
// 	server.listen(port, () => {
// 		console.log(`Running at http://localhost:${port}`)
// 	})
// 	}
	
// 	module.exports = server