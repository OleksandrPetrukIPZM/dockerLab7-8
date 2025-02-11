const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routers/user")
const {port, host, mongoURL} = require("./configuration/index")

const app = express()
app.use(express.json()) //body-parser
app.use("/users", userRouter)

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server is 12353 on http://${host}:${port}`)
    })
}

mongoose.connect(mongoURL)
mongoose.connection.on('error', (error) => {
    console.log(error.message);
}).once('open', () => {
    startServer();
})


