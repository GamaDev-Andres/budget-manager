import express from "express"
import cors from "cors"

import conectarDB from './config/db.js';
import userRouter from "./routes/user.js"
import authRouter from "./routes/auth.js"
import transactionRouter from "./routes/transaction.js"
import categoryRouter from "./routes/category.js"

const app = express()
app.use(cors())
app.use(express.json({ extended: true }));
conectarDB()

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/transaction", transactionRouter)
app.use("/api/category", categoryRouter)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log("server running in PORT: " + PORT);
})