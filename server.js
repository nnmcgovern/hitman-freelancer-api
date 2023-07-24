import db from "./db/connection.js"
import express from "express"
import weaponRoutes from "./routes/weapons.js"

const app = express()
const PORT = 3000

app.use(express.json())
app.use("/api", weaponRoutes)

db.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
  })
})