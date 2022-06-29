const express = require("express")
const app = express()
const router = express.Router()


mongoose.connect("mongodb://localhost:27017/studentdb",(err) => {
    if(err){
        throw err
    } else {
        console.log(`Connected to MongoDB successfully`)
    }
})

app.get("/", (req, res) => {
    res.json("Student API using MongoDB")
})

const PORT = 3001

app.listen(PORT, ()=>{
    console.log(`Server listening at PORT ${PORT}`)
})