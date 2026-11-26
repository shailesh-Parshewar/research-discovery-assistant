import e from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth"

// this will help get envs using process.env
dotenv.config()

const app = e()
app.use(e.json())
const port = process.env.port || 5000

app.use("/auth", authRouter)

app.listen(port, () => {
    console.log("server listening on port ", port)
})