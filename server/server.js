import express, { Router } from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()
const PORT = process.env.PORT
app.use(cors())
app.use(express.json())

app.listen(PORT, (req, res) => {
    console.log("server running in port", PORT)
})