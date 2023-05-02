import mongoose from "mongoose";
import { stringify } from "uuid";

const WomanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true,
  },
  quotation: {
    type: String,
    required: true,
  },
  minibio: { 
    type: String,
    required: true,
  }
})

export default mongoose.model('diva', WomanSchema)