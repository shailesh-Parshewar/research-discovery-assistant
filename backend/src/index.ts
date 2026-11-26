import e from "express"
import dotenv from "dotenv"

// this will help get envs using process.env
dotenv.config()

const app = e()
const port = process.env.port || 5000

app.listen(port, () => {
    console.log("server listening on port ", port)
})