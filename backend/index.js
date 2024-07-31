const express = require("express");
const cors = require("cors");
const { accountRouter } = require("./routes/account.route");

const app = express()
const port = 4000

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
})

// app.get("/accounts", (req, res) => {

// })

// app.post("/accounts", (req, res) => {
//     // create a new account
// })

// app.get("/categories", (req, res) => {
//     // return all categories
// })

// app.post("/categories", (req, res) => {
//     // create a new category
// })

app.use("/accounts", accountRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`, `http://localhost:${port}`)
})