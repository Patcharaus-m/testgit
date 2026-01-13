import express from "express"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())

app.get("/test", (req, res) => {
    res.send("Hello World!")
})

app.post("/post-method", (req, res) => {
    res.send("สร้างละควัย")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

