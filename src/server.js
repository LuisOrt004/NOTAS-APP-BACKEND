import express from "express"
import notesRouter from "./routes/notesRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js"
import cors from "cors"
import { connect } from "mongoose"

dotenv.config()
const app = express()

app.use(cors({
    origin: ["http://localhost:5173","https://legendary-granita-e436f5.netlify.app"]
}))

app.use(express.json())

app.use("/api/notes",notesRouter)

const PORT = process.env.PORT || 3001

connectDB()
.then(()=> {
    app.listen(PORT, () => {
        console.log(`Servidor levantado en puerto http://localhost:${PORT}`)
    })
})