import mongoose from 'mongoose'
mongoose.connect("mongodb://localhost:27017/perfume")
.then(()=>{
  console.log("connected to mongodb");
  
})
.catch((err)=>{
  console.log(err);
  
})