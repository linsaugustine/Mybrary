import express from "express"
import mongoose from "mongoose"
import expressLayouts from "express-ejs-layouts"
import path from "path"
import { fileURLToPath } from "url"
import Routers from "./controllers/routers.js"
import dotenv from "dotenv"

if (process.env.NODE_ENV !== "production") {
    
    dotenv.config()
}

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("Connected to Mongoose"))

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")
app.set("layout", "layouts/layout")
app.use(expressLayouts)
app.use(express.static("public"))
app.use("/", Routers)

export default app