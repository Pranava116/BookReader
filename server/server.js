import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import mongoose from 'mongoose'
const app = express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT 
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, ()=>{
  try{
    mongoose.connect(MONGO_URI).then("Connected")
    console.log("Connected")
  }
  catch{
    console.log("Error connecting to the db")
  }
  console.log("Server started in port, ", PORT)
})
