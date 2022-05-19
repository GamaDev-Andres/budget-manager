import express from "express"
import cors from "cors"

import conectarDB from './config/db.js';
import userRouter from "./routes/user.js"

const app = express()
app.use(cors())
app.use(express.json({ extended: true }));
conectarDB()

app.use("/api/user", userRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("server running in PORT: " + PORT);
})