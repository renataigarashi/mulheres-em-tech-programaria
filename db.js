import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

export const dbConnection = async () => {
  try {
    console.log('Database connection started')

    await mongoose.connect(process.env.MONGO_URL)
    
    console.log('Database connected successfuly!')
  } catch (error) {
    console.log(error)
  }
}